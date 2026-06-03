// ========================================================================
// 品牌数据 —— 来源：产品信息收集.xlsx + 6月/ 图片文件夹
// 字段：
//   id         唯一编号（链接里只传它，务必稳定不变）
//   name       品牌名称
//   category   分类（中文） / categoryEn 分类英文
//   location   地点（中文） / locationEn 地点英文
//   desc       简介（中文） / descEn 简介英文（地道）
//   link       链接（官网或小红书，可留空 ""）
//   products   产品图片路径数组（assets/products/）
// ========================================================================
window.BRANDS = [
  {
    id: "b01",
    name: "意澜舟（Penapalne）",
    category: "箱包服饰", categoryEn: "Bags & Apparel",
    location: "上海", locationEn: "Shanghai",
    desc: "意澜舟（Penapalne）是一家诞生于伦敦、植根于上海的可持续时尚与生活方式品牌。该品牌主打“自然优雅（Naturally Elegant）”理念，将真实掉落的树叶和苹果纤维等纯植物基皮革相结合，手工打造极具环保意义的手袋、卡包及配饰。",
    descEn: "Born in London and rooted in Shanghai, Penapalne is a sustainable fashion and lifestyle brand. Guided by its “Naturally Elegant” philosophy, it pairs real fallen leaves with plant-based leathers such as apple fibre to handcraft eco-conscious handbags, card holders and accessories.",
    link: "https://www.penapalne.com/",
    products: ["assets/products/b01-1.png","assets/products/b01-2.png","assets/products/b01-3.png","assets/products/b01-4.png"]
  },
  {
    id: "b02",
    name: "秦玮鸿·Art",
    category: "艺术摆件", categoryEn: "Art & Sculpture",
    location: "上海 北京 多地", locationEn: "Shanghai · Beijing & more",
    desc: "艺术家简介\n秦玮鸿\n2010年毕业于中央美术学院雕塑系\n2016年创立 “QIN 玮鸿出品” 艺术商业品牌\n每年参加艺术巴塞尔、伦敦艺博会、纽约军械库、艺术北京等国内外顶级博览会。\n在国内外美术馆、画廊及商业空间保持每年多次个人展览。\n代表作：《奔向幸福》系列雕塑等\n“以原创手工雕塑为主要创作内容，并且一直在探索艺术行业的未来，最终选择品牌化道路，希望经过努力打造中国自己的艺术元素奢侈品牌。”",
    descEn: "Artist profile — Qin Weihong.\nGraduated from the Sculpture Department of the Central Academy of Fine Arts in 2010; founded the art-commercial brand “QIN Weihong” in 2016.\nHe exhibits each year at top international fairs — Art Basel, the London Art Fair, the New York Armory Show and Art Beijing — and holds multiple solo shows a year across museums, galleries and commercial spaces.\nSignature work: the “Running Toward Happiness” sculpture series.\n“Centred on original handmade sculpture while exploring the future of the art world, he chose the path of brand-building — striving to create China’s own luxury brand of artistic objects.”",
    link: "https://xhslink.com/m/AKXxsbE69f7",
    products: ["assets/products/b02-1.jpg","assets/products/b02-2.jpg","assets/products/b02-3.jpg","assets/products/b02-4.jpg","assets/products/b02-5.jpg","assets/products/b02-6.jpg","assets/products/b02-7.jpg"]
  },
  {
    id: "b03",
    name: "觉森 Je Sens",
    category: "香薰香水", categoryEn: "Fragrance",
    location: "上海 江苏", locationEn: "Shanghai · Jiangsu",
    desc: "Je Sens 觉森（法语意为“我闻到，我感觉到”）是一家专注于香氛与感官体验的当代生活方式品牌，2020年成立于深圳。\n品牌以“自由设计你的气味，探索本真与自然”为核心理念，强调通过气味唤醒内在感受，传递自然、治愈与本真的生活态度。觉森相信“气味永远忠诚”，鼓励消费者亲身参与香氛创作，打造属于自己的独特香气。",
    descEn: "Je Sens (meaning “I smell, I feel” in French) is a contemporary lifestyle fragrance brand founded in Shenzhen in 2020.\nCentered on the philosophy “Freely design your own scent, explore authenticity and nature”, Je Sens aims to awaken inner feelings through scent, promoting a natural, healing and authentic way of life. The brand believes that “scents are always loyal” and encourages customers to take part in creating their own personal fragrances.",
    link: "https://xhslink.com/m/1UthXyCK7P0",
    products: ["assets/products/b03-1.jpg","assets/products/b03-2.jpg","assets/products/b03-3.jpg","assets/products/b03-4.jpg","assets/products/b03-5.jpg","assets/products/b03-6.jpg"]
  },
  {
    id: "b04",
    name: "WEVE2050",
    category: "箱包服饰", categoryEn: "Bags & Apparel",
    location: "上海", locationEn: "Shanghai",
    desc: "品牌名称“WEVE2050”源自英文“We’ve”（我们拥有），寓意“我们已经拥有”，强调人类对地球资源的使用以及个体自身的力量。品牌以2050年为愿景，致力于推动时尚产业向循环、零废弃和伦理方向转型。",
    descEn: "The name “WEVE2050” comes from the English “We’ve” — “we already have” — underscoring humanity’s use of the planet’s resources and the power of the individual. With 2050 as its vision, the brand is committed to driving the fashion industry toward circularity, zero waste and ethical practice.",
    link: "",
    products: ["assets/products/b04-1.jpg","assets/products/b04-2.jpg","assets/products/b04-3.jpg","assets/products/b04-4.jpg","assets/products/b04-5.jpg","assets/products/b04-6.jpg","assets/products/b04-7.jpg"]
  },
  {
    id: "b05",
    name: "那木拉则",
    category: "箱包服饰", categoryEn: "Bags & Apparel",
    location: "内蒙古", locationEn: "Inner Mongolia",
    desc: "一个专注于游牧民族风的当代民族服饰品牌，致力于将传统游牧文化与现代生活方式融合。“那木拉则”带有浓厚的民族韵味，强调游牧民族的自由、豪迈与自然之美。品牌通过原创设计，将传统蒙古袍的长袍、腰带、配饰等元素进行现代化改良，既保留了保暖、便于骑射的实用性，又融入时尚剪裁、色彩搭配与日常通勤属性，成为许多人追求“民族风”与“职场战袍”的选择。",
    descEn: "A contemporary ethnic-fashion brand rooted in nomadic style, dedicated to blending traditional nomadic culture with modern living. The name “Namlazé” carries a strong ethnic spirit, celebrating the freedom, boldness and natural beauty of nomadic life. Through original design it modernizes elements of the traditional Mongolian robe — gown, belt and accessories — keeping their warmth and ease of movement while adding contemporary tailoring, colour pairing and everyday wearability, making it a favourite for those seeking both “ethnic flair” and a “power outfit” for work.",
    link: "",
    products: ["assets/products/b05-1.jpg","assets/products/b05-2.jpg","assets/products/b05-3.jpg","assets/products/b05-4.jpg","assets/products/b05-5.jpg","assets/products/b05-6.jpg","assets/products/b05-7.jpg","assets/products/b05-8.jpg","assets/products/b05-9.jpg","assets/products/b05-10.jpg"]
  }
];
