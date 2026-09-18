#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把本地 index.html 转成「云端可编辑版」artifact.html。

云端版和本地版的区别：
  - 顶栏：去掉「还原默认」，编辑按钮改为「完成并保存（所有人可见）」
  - 保存方式：不写 localStorage，而是调用 claude.use('artifact').publish()
    → 存到云端，所有打开这个链接的人都会看到最新版
  - 结构：按 Artifact 页面契约输出（无 <html>/<head>/<body> 外壳）

用法：
    python3 build_artifact.py            # 生成到默认输出目录
    python3 build_artifact.py <输出路径>
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "index.html")
DEFAULT_OUT = os.environ.get(
    "ARTIFACT_OUT",
    "/private/tmp/claude-501/-Users-tong/bdc070cd-fbde-4ad7-90db-29d97a43474f/scratchpad/artifact.html",
)

TOPBAR = '''<div class="topbar">
  <span class="brand">GMA · 市场快速出海验证包</span>
  <span class="hint">一次进入，拿到第一轮市场答案</span>
</div>
<div class="editdock" id="editDock">
  <span class="stat" id="saveStat"></span>
  <button class="dock-btn" id="btnEdit" type="button" hidden>✏️ 编辑文字</button>
  <button class="dock-btn ghost" id="btnPdf" type="button">⤓ 导出 PDF</button>
</div>'''

EXTRA_CSS = '''
  /* ===== 云端版补充 ===== */
  :root{color-scheme:light;}
  img{max-width:100%;}
  .topbar{top:env(safe-area-inset-top, 0px);}
  .topbar .tb-btns{display:none;}

  /* 右下角浮动编辑条（颜色写死，不依赖变量） */
  [hidden]{display:none !important;}
  .editdock{position:fixed; left:50%; transform:translateX(-50%); bottom:18px; z-index:99;
    display:flex; align-items:center; gap:10px;
    padding:10px 12px calc(10px + env(safe-area-inset-bottom, 0px));
    background:#fffdf8; border:1px solid #d8c9ad; border-radius:14px;
    box-shadow:0 10px 30px -10px rgba(80,50,20,.45);}
  .editdock .stat{font-size:12px; color:#8c7f6c; white-space:nowrap;}
  .editdock .stat.ok{color:#4a6b3f;}
  .editdock .stat.err{color:#bd3c1e;}
  .dock-btn{font-family:var(--sans); cursor:pointer; border:none; font-size:13px; font-weight:600;
    color:#fff; background:linear-gradient(135deg,#bd3c1e,#992c12); border-radius:10px;
    padding:9px 16px; box-shadow:0 6px 14px -6px rgba(189,60,30,.6);}
  .dock-btn.saving{background:linear-gradient(135deg,#4a6b3f,#3a5631);}
  .dock-btn.ghost{background:#fff; color:#992c12; border:1px solid #d8c9ad; box-shadow:none;}
  @media print{ .editdock{display:none !important;} }
'''

SCRIPT = r"""<script id="app-script">
(function(){
  var wrap = document.querySelector('.wrap');
  var dock = document.getElementById('editDock');
  var btnEdit = document.getElementById('btnEdit');
  var btnPdf = document.getElementById('btnPdf');
  var stat = document.getElementById('saveStat');
  var tip = document.querySelector('.edit-tip');
  var topbar = document.querySelector('.topbar');
  var editing = false, dirty = false, art = null;

  function setStat(msg, cls){
    stat.textContent = msg || '';
    stat.className = 'stat' + (cls ? ' ' + cls : '');
  }
  function stamp(){
    var d = new Date(), p = function(n){ return (n<10?'0':'')+n; };
    return p(d.getHours())+':'+p(d.getMinutes());
  }

  // 重新拼一份完整文档：自己的 title / 字体 / 样式 / 顶栏 / 浮动条 / 正文 / 本脚本
  function buildDoc(){
    var head = [
      '<meta charset="utf-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
      document.querySelector('title').outerHTML
    ];
    var links = document.querySelectorAll('link[data-app]');
    for (var i=0;i<links.length;i++) head.push(links[i].outerHTML);
    head.push(document.getElementById('app-style').outerHTML);

    var body = wrap.cloneNode(true);
    body.removeAttribute('contenteditable');
    var d = dock.cloneNode(true);
    d.querySelector('.stat').textContent = '';
    var be = d.querySelector('#btnEdit');
    be.textContent = '✏️ 编辑文字';
    be.setAttribute('hidden', '');                 // 新版本打开时按权限再显示

    return '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n' + head.join('\n') +
           '\n</head>\n<body>\n' + topbar.outerHTML + '\n' + d.outerHTML + '\n' +
           tip.outerHTML + '\n' + body.outerHTML + '\n' +
           document.getElementById('app-script').outerHTML + '\n</body>\n</html>';
  }

  function save(){
    if (!art || !dirty) return;
    setStat('保存中…');
    btnEdit.classList.add('saving');
    art.publish(buildDoc()).then(function(){
      dirty = false;
      btnEdit.classList.remove('saving');
      setStat('✓ 已保存 ' + stamp() + '，所有人可见', 'ok');
    }).catch(function(err){
      btnEdit.classList.remove('saving');
      var code = (err && err.code) || '';
      if (code === 'conflict') setStat('有人刚改过，页面会刷新到最新版', 'err');
      else if (code === 'not_writer' || code === 'not_granted') setStat('✗ 你没有编辑权限', 'err');
      else setStat('✗ 保存失败，请重试', 'err');
    });
  }

  function toggleEdit(){
    editing = !editing;
    wrap.setAttribute('contenteditable', editing ? 'true' : 'false');
    document.body.classList.toggle('editing', editing);
    btnEdit.textContent = editing ? '✅ 完成并保存' : '✏️ 编辑文字';
    if (!editing) save();
    else setStat('改完点这里保存');
  }
  btnEdit.addEventListener('click', toggleEdit);

  // 导出 PDF：打印当前页面（= 页面上这一版，含刚改过的内容）
  btnPdf.addEventListener('click', function(){
    if (editing) toggleEdit();                     // 先收起编辑态再打印
    setTimeout(function(){ window.print(); }, 60);
  });

  wrap.addEventListener('input', function(){
    if (editing){ dirty = true; setStat('未保存，点「完成并保存」'); }
  });
  window.addEventListener('beforeunload', function(e){
    if (editing && dirty){ e.preventDefault(); e.returnValue = ''; }
  });

  // 只有拿到 artifact 能力（= 有编辑权限）才显示浮动编辑条
  if (window.claude && window.claude.use){
    window.claude.use('artifact').then(function(a){
      if (!a) return;
      art = a;
      btnEdit.hidden = false;
    }).catch(function(){});
  }
})();
</script>"""


def build(src_path, out_path):
    s = open(src_path, encoding="utf-8").read()
    # 去掉文件头那段说明注释（里面也写着 <style>，会干扰下面的匹配）
    s = re.sub(r"<!--.*?-->", "", s, count=1, flags=re.S)

    # 字体 link：打上 data-app 标记，保存时一并写回
    links = re.findall(r"<link [^>]*>", s)
    links = [l.replace("<link ", "<link data-app ") for l in links if "fonts." in l]

    title = re.search(r"<title>.*?</title>", s, re.S).group(0)
    style = re.search(r"<style>(.*?)</style>", s, re.S).group(1)
    style = style.rstrip() + "\n" + EXTRA_CSS

    tip = re.search(r'<div class="edit-tip">.*?</div>', s, re.S).group(0)
    tip = re.sub(
        r'(<div class="edit-tip">).*?(</div>)',
        r"\1✏️ 编辑模式已开启 —— 点任意文字即可直接修改。改完点「✅ 完成并保存」，"
        r"改动会存到云端，所有打开这个链接的人都会看到最新版。\2",
        tip,
        flags=re.S,
    )

    wrap = re.search(r'<div class="wrap">.*?\n</div>\n\n<script', s, re.S).group(0)
    wrap = wrap[: wrap.rindex("</div>") + len("</div>")]

    out = "\n".join(
        [title, "\n".join(links), "<style id=\"app-style\">" + style + "</style>", "", TOPBAR, "", tip, "", wrap, "", SCRIPT, ""]
    )
    # 云端版用压缩过的 jpg，页面打开快很多
    for name in ("cover-collage", "fee-schedule", "marina-bay-aerial"):
        out = out.replace("assets/%s.png" % name, "assets/%s.jpg" % name)

    open(out_path, "w", encoding="utf-8").write(out)
    return out_path, len(out)


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_OUT
    path, n = build(SRC, out)
    print("wrote %s (%d chars)" % (path, n))
