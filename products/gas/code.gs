/**
 * 展会品牌挑选 · 云端收集后端（Google Apps Script）
 *
 * 部署步骤（一次性，约5分钟）：
 * 1. sheets.new 新建一个 Google 表格（命名随意，如「品牌筛选结果」）
 * 2. 菜单「扩展程序」→「Apps Script」→ 删掉默认内容，粘贴本文件全部代码 → 保存
 * 3. 右上角「部署」→「新建部署」→ 类型选「Web 应用」
 *    - 执行身份：我（你自己的账号）
 *    - 谁可以访问：任何人
 * 4. 点「部署」→ 按提示授权 → 复制生成的 Web 应用 URL（以 /exec 结尾）
 * 5. 把该 URL 填入仓库 data/sync.js 的 window.SYNC_URL
 *
 * 数据存在表格的 results 工作表：vendor | t | kept | removed | reasons | received
 */
var SHEET_NAME = 'results';

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['vendor', 't', 'kept', 'removed', 'reasons', 'received']);
  }
  return sh;
}

function findRow_(sh, vendor) {
  var n = sh.getLastRow() - 1;
  if (n < 1) return 0;
  var vals = sh.getRange(2, 1, n, 1).getValues();
  for (var i = 0; i < vals.length; i++) {
    if (String(vals[i][0]) === vendor) return i + 2;
  }
  return 0;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

// 读取全部结果：GET /exec → {厂商名: {t, kept, removed, reasons, received}}
function doGet() {
  var sh = getSheet_();
  var n = sh.getLastRow() - 1;
  var res = {};
  if (n > 0) {
    sh.getRange(2, 1, n, 6).getValues().forEach(function (r) {
      var v = String(r[0]); if (!v) return;
      var parse = function (s) { try { return JSON.parse(s); } catch (e) { return null; } };
      res[v] = {
        t: String(r[1] || ''),
        kept: parse(r[2]) || [],
        removed: parse(r[3]) || [],
        reasons: parse(r[4]) || {},
        received: String(r[5] || '')
      };
    });
  }
  return out_(res);
}

// 写入：POST /exec，body 为 JSON
//  - {vendor, t, kept, removed, reasons}      → 按厂商名 upsert 一行
//  - {action:'delete', vendor}                → 删除该厂商
//  - {action:'clear'}                         → 清空全部
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var d;
    try { d = JSON.parse(e.postData.contents); } catch (err) { return out_({ ok: false, err: 'bad json' }); }
    var sh = getSheet_();
    if (d.action === 'clear') {
      if (sh.getLastRow() > 1) sh.deleteRows(2, sh.getLastRow() - 1);
      return out_({ ok: true });
    }
    var vendor = String(d.vendor || '').trim();
    if (!vendor) return out_({ ok: false, err: 'no vendor' });
    var row = findRow_(sh, vendor);
    if (d.action === 'delete') {
      if (row) sh.deleteRow(row);
      return out_({ ok: true });
    }
    var vals = [vendor, String(d.t || ''), JSON.stringify(d.kept || []),
      JSON.stringify(d.removed || []), JSON.stringify(d.reasons || {}), new Date().toISOString()];
    if (!row) row = sh.getLastRow() + 1;
    // setNumberFormat('@') 强制文本，防止表格把时间戳自动转成 Date
    sh.getRange(row, 1, 1, 6).setNumberFormat('@').setValues([vals]);
    return out_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
