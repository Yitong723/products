// ========================================================================
// 品牌数据 —— 用户填完「品牌清单填写模板.csv」后，替换下面这个数组即可。
// 字段说明：
//   id       唯一编号（链接里只传它，务必稳定不变，建议 b01 / b02 ...）
//   name     品牌名称
//   logo     品牌 logo 图片路径（放在 assets/logos/，没有就留空 ""，会用首字字标）
//   category 分类
//   desc     一句话简介
//   link     品牌官网（可留空 ""）
//   products 产品图片路径数组（放在 assets/products/，可多张，没有就留 []）
// 图片可以是本地路径，也可以是网图 https 链接。
// ========================================================================
window.BRANDS = [
  {
    id: "b01",
    name: "意澜舟（Penapalne）",
    logo: "",
    category: "箱包服饰",
    desc: "诞生于伦敦、植根于上海的可持续时尚与生活方式品牌。主打「自然优雅（Naturally Elegant）」理念，将真实掉落的树叶与苹果纤维等纯植物基皮革结合，手工打造极具环保意义的手袋、卡包及配饰。",
    link: "https://www.penapalne.com/",
    products: [
      "assets/products/b01-1.png",
      "assets/products/b01-2.png",
      "assets/products/b01-3.png",
      "assets/products/b01-4.png"
    ]
  }
];
