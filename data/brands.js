// ========================================================================
// 品牌数据 —— 来源：产品信息收集.xlsx + 6月/ 图片文件夹
// 字段：
//   id         唯一编号（链接里只传它，务必稳定不变）
//   name       品牌名称
//   category   分类（中文） / categoryEn 分类英文
//   location   地点（中文） / locationEn 地点英文
//   desc       简介（中文） / descEn 简介英文（地道）
//   link       链接（官网或小红书，可留空 ""；当前页面不展示，仅留档）
//   products   产品图片路径数组（assets/products/）
// ========================================================================
window.BRANDS = [
  {
    id: "b01",
    name: "意澜舟（Penapalne）",
    category: "箱包服饰", categoryEn: "Bags & Apparel",
    location: "上海", locationEn: "Shanghai",
    desc: "意澜舟（Penapalne）是一家诞生于伦敦、植根于上海的可持续时尚与生活方式品牌。该品牌主打“自然优雅（Naturally Elegant）”理念，将真实掉落的树叶和苹果纤维等纯植物基皮革相结合，手工打造极具环保意义的手袋、卡包及配饰。",
    descEn: "Born in London and rooted in Shanghai, Penapalne is a sustainable fashion and lifestyle brand. Guided by its \"Naturally Elegant\" philosophy, it pairs real fallen leaves with plant-based leathers such as apple fibre to handcraft eco-conscious handbags, card holders and accessories.",
    link: "https://www.penapalne.com/",
    products: ["assets/products/b01-1.png","assets/products/b01-2.png","assets/products/b01-3.png","assets/products/b01-4.png"]
  },
  {
    id: "b02",
    name: "秦玮鸿·Art",
    category: "艺术摆件", categoryEn: "Art & Sculpture",
    location: "上海 北京 多地", locationEn: "Shanghai · Beijing & more",
    desc: "艺术家简介\n秦玮鸿\n2010年毕业于中央美术学院雕塑系\n2016年创立 “QIN 玮鸿出品” 艺术商业品牌\n每年参加艺术巴塞尔、伦敦艺博会、纽约军械库、艺术北京等国内外顶级博览会。\n在国内外美术馆、画廊及商业空间保持每年多次个人展览。\n代表作：《奔向幸福》系列雕塑等\n“以原创手工雕塑为主要创作内容，并且一直在探索艺术行业的未来，最终选择品牌化道路，希望经过努力打造中国自己的艺术元素奢侈品牌。”",
    descEn: "Qin Weihong graduated from the Sculpture Department of the Central Academy of Fine Arts in 2010 and founded the art-commercial brand \"QIN Weihong\" in 2016. He exhibits each year at top international fairs including Art Basel, the London Art Fair, the New York Armory Show and Art Beijing, and holds multiple solo exhibitions a year across museums, galleries and commercial spaces. His signature work is the \"Running Toward Happiness\" sculpture series. Centred on original handmade sculpture while exploring the future of the art world, he chose the path of brand-building, striving to create China's own luxury brand of artistic objects.",
    link: "https://xhslink.com/m/AKXxsbE69f7",
    products: ["assets/products/b02-1.jpg","assets/products/b02-2.jpg","assets/products/b02-3.jpg","assets/products/b02-4.jpg","assets/products/b02-5.jpg","assets/products/b02-6.jpg","assets/products/b02-7.jpg"]
  },
  {
    id: "b03",
    name: "觉森 Je Sens",
    category: "香薰香水", categoryEn: "Fragrance",
    location: "上海 江苏", locationEn: "Shanghai · Jiangsu",
    desc: "Je Sens 觉森（法语意为“我闻到，我感觉到”）是一家专注于香氛与感官体验的当代生活方式品牌，2020年成立于深圳。\n品牌以“自由设计你的气味，探索本真与自然”为核心理念，强调通过气味唤醒内在感受，传递自然、治愈与本真的生活态度。觉森相信“气味永远忠诚”，鼓励消费者亲身参与香氛创作，打造属于自己的独特香气。",
    descEn: "Je Sens (meaning \"I smell, I feel\" in French) is a contemporary lifestyle fragrance brand founded in Shenzhen in 2020. Centered on the philosophy of \"freely design your own scent, explore authenticity and nature\", Je Sens aims to awaken inner feelings through scent, promoting a natural, healing and authentic way of life. The brand believes that \"scents are always loyal\" and encourages customers to take part in creating their own personal fragrances.",
    link: "https://xhslink.com/m/1UthXyCK7P0",
    products: ["assets/products/b03-1.jpg","assets/products/b03-2.jpg","assets/products/b03-3.jpg","assets/products/b03-4.jpg","assets/products/b03-5.jpg","assets/products/b03-6.jpg"]
  },
  {
    id: "b04",
    name: "WEVE2050",
    category: "箱包服饰", categoryEn: "Bags & Apparel",
    location: "上海", locationEn: "Shanghai",
    desc: "品牌名称“WEVE2050”源自英文“We’ve”（我们拥有），寓意“我们已经拥有”，强调人类对地球资源的使用以及个体自身的力量。品牌以2050年为愿景，致力于推动时尚产业向循环、零废弃和伦理方向转型。",
    descEn: "The name \"WEVE2050\" comes from the English \"We've\", meaning \"we already have\", underscoring humanity's use of the planet's resources and the power of the individual. With 2050 as its vision, the brand is committed to driving the fashion industry toward circularity, zero waste and ethical practice.",
    link: "https://xhslink.com/m/36TkXN3vxfd",
    products: ["assets/products/b04-1.jpg","assets/products/b04-2.jpg","assets/products/b04-3.jpg","assets/products/b04-4.jpg","assets/products/b04-5.jpg","assets/products/b04-6.jpg","assets/products/b04-7.jpg"]
  },
  {
    id: "b05",
    name: "那木拉则",
    category: "箱包服饰", categoryEn: "Bags & Apparel",
    location: "内蒙古", locationEn: "Inner Mongolia",
    desc: "一个专注于游牧民族风的当代民族服饰品牌，致力于将传统游牧文化与现代生活方式融合。“那木拉则”带有浓厚的民族韵味，强调游牧民族的自由、豪迈与自然之美。品牌通过原创设计，将传统蒙古袍的长袍、腰带、配饰等元素进行现代化改良，既保留了保暖、便于骑射的实用性，又融入时尚剪裁、色彩搭配与日常通勤属性，成为许多人追求“民族风”与“职场战袍”的选择。",
    descEn: "A contemporary ethnic-fashion brand rooted in nomadic style, dedicated to blending traditional nomadic culture with modern living. The name \"Namlazé\" carries a strong ethnic spirit, celebrating the freedom, boldness and natural beauty of nomadic life. Through original design it modernizes elements of the traditional Mongolian robe, such as the gown, belt and accessories, keeping their warmth and ease of movement while adding contemporary tailoring, colour pairing and everyday wearability, making it a favourite for those seeking both \"ethnic flair\" and a \"power outfit\" for work.",
    link: "",
    products: ["assets/products/b05-1.jpg","assets/products/b05-2.jpg","assets/products/b05-3.jpg","assets/products/b05-4.jpg","assets/products/b05-5.jpg","assets/products/b05-6.jpg","assets/products/b05-7.jpg","assets/products/b05-8.jpg","assets/products/b05-9.jpg","assets/products/b05-10.jpg"]
  },
  {
    id: "b06",
    name: "九首造物",
    category: "箱包", categoryEn: "Bags & Leather",
    location: "内蒙古", locationEn: "Inner Mongolia",
    desc: "是一家专注于原创手工皮具与皮雕艺术的独立手作品牌，以头层牛皮为主要材料，核心特色在于精湛的手工皮雕工艺。\n品牌秉持“拂去城市的喧嚣与浮躁，沉淀下来，重新定义一款皮具”的理念，每一件作品都经过潜心设计、精选材料、手工皮雕、上色、打磨、缝制等全流程匠心制作。皮雕是品牌灵魂所在——刀落之处，皮面浮现出细腻的纹理、图案与故事，让原本平凡的皮革拥有独特的生命力与艺术温度。",
    descEn: "An independent handmade brand devoted to original leather goods and leather-carving art, working chiefly in full-grain cowhide, with masterful hand-tooled carving at its core. Guided by the idea of \"brushing away the city's noise and haste, settling down, and redefining what a leather piece can be\", every item is crafted through a full artisanal process of design, material selection, hand carving, dyeing, polishing and stitching. Leather carving is the brand's soul: where the blade falls, fine textures, patterns and stories surface on the hide, giving ordinary leather a singular vitality and artistic warmth.",
    link: "",
    products: ["assets/products/b06-1.jpg","assets/products/b06-2.jpg","assets/products/b06-3.jpg","assets/products/b06-4.jpg","assets/products/b06-5.jpg"]
  },
  {
    id: "b07",
    name: "Joker.V Studio",
    category: "珠宝饰品", categoryEn: "Jewelry",
    location: "上海", locationEn: "Shanghai",
    desc: "Joker.V（全称 Joker.V Silver Decoration Studio）是一家专注于原创银饰设计的手工银饰工作室，总部位于上海，以“Joker.V Original Design”为设计理念。\n品牌名称中的“Joker”寓意独特、叛逆与幽默的创造力，“V”代表 Vision（视野）或 Version（版本），强调每件作品都是原创且独一无二的设计。Joker.V 致力于将传统银饰工艺与当代艺术审美结合，打造兼具个性、细节与情感温度的银饰单品。",
    descEn: "Joker.V (full name Joker.V Silver Decoration Studio) is a handmade silver-jewellery studio based in Shanghai, built around its \"Joker.V Original Design\" philosophy. The \"Joker\" in its name stands for a creativity that is distinctive, rebellious and playful, while \"V\" signals Vision or Version: every piece is original and one of a kind. Joker.V blends traditional silver craft with contemporary aesthetics to create jewellery full of character, detail and emotional warmth.",
    link: "",
    products: ["assets/products/b07-1.JPG","assets/products/b07-2.JPG","assets/products/b07-3.JPG","assets/products/b07-4.JPG","assets/products/b07-5.JPG","assets/products/b07-6.JPG","assets/products/b07-7.JPG","assets/products/b07-8.JPG"]
  },
  {
    id: "b08",
    name: "W DWSW",
    category: "手工 原创", categoryEn: "Handmade · Original",
    location: "线上", locationEn: "Online",
    desc: "一个原创设计师手工品牌，主理人 W 坚持「串珠皆可万物」的理念。",
    descEn: "An original designer handmade brand whose founder, W, lives by the belief that \"with beads, anything is possible.\"",
    link: "",
    products: ["assets/products/b08-1.jpg","assets/products/b08-2.jpg","assets/products/b08-3.jpg","assets/products/b08-4.jpg","assets/products/b08-5.jpg"]
  },
  {
    id: "b09",
    name: "Drop studio",
    category: "家居生活", categoryEn: "Home & Living",
    location: "上海", locationEn: "Shanghai",
    desc: "家居艺术原创设计品牌，收集内心流动的底色，珍藏于居所，自然舒展。",
    descEn: "An original home-art design brand, gathering the shifting hues of the inner self and letting them unfold naturally within the home.",
    link: "",
    products: ["assets/products/b09-1.jpg","assets/products/b09-2.jpg","assets/products/b09-3.jpg","assets/products/b09-4.jpg","assets/products/b09-5.jpg","assets/products/b09-6.jpg","assets/products/b09-7.jpg"]
  },
  {
    id: "b10",
    name: "栖满枝艺廊",
    category: "手工艺 服饰", categoryEn: "Craft & Apparel",
    location: "上海 北京", locationEn: "Shanghai · Beijing",
    desc: "东方美学品牌，专注中式奢华手工艺，原创设计宝石花手工艺品，以及系列成衣。",
    descEn: "An Eastern-aesthetic brand specialising in Chinese-style luxury craftsmanship, offering original gemstone-flower handicrafts and ready-to-wear collections.",
    link: "https://xhslink.com/m/5ExJgrOdVlO",
    products: ["assets/products/b10-1.jpg","assets/products/b10-2.jpg","assets/products/b10-3.jpg","assets/products/b10-4.jpg","assets/products/b10-5.jpg","assets/products/b10-6.jpg","assets/products/b10-7.jpg","assets/products/b10-8.jpg"]
  },
  {
    id: "b11",
    name: "荷言",
    category: "服饰", categoryEn: "Apparel",
    location: "江苏", locationEn: "Jiangsu",
    desc: "一家专注于原创设计师旗袍的高端新国风服饰品牌，2013年创立于中国苏州，由创始人兼首席设计师周立言创立。\n品牌名称“荷言”取自“荷之有言，舒卷于形，灵动于心，内有大美而不言”，寓意内敛而富有诗意的东方女性之美。荷言从中国传统诗词文化中汲取灵感，融合苏州传统丝织工艺（如缂丝、罗、锦）和手工技艺，致力于将古典旗袍与当代女性生活方式结合，定义“闺秀旗袍”与“旗袍新国风”。",
    descEn: "A high-end new-Chinese-style fashion brand devoted to original designer qipao, founded in Suzhou in 2013 by founder and chief designer Zhou Liyan. The name \"Heyan\" comes from the verse \"the lotus has its own words: graceful in form, alive in spirit, holding great beauty within without saying a word\", evoking the understated, poetic beauty of Eastern women. Drawing inspiration from classical Chinese poetry, Heyan weaves together Suzhou's traditional silk crafts, such as kesi tapestry, luo gauze and brocade, with fine handwork, uniting the classic qipao with the lifestyles of contemporary women and defining the \"refined-lady qipao\" and the \"new Chinese qipao style\".",
    link: "https://xhslink.com/m/9xERmGuWFza",
    products: ["assets/products/b11-1.jpg","assets/products/b11-2.jpg","assets/products/b11-3.jpg","assets/products/b11-4.jpg","assets/products/b11-5.jpg"]
  },
  {
    id: "b12",
    name: "骨乐亨Bonenanza",
    category: "宠物用品", categoryEn: "Pet Supplies",
    location: "上海", locationEn: "Shanghai",
    desc: "一家高端宠物奢侈时尚品牌，致力于为宠物打造“与人类一样丰富”的衣橱。品牌名称 Bonenanza 由 “Bone”（骨头，代表宠物）与 “Bonanza”（富矿、幸运、丰盛）组合而成，寓意为毛孩子带来好运、丰盛与优雅生活。中文名“骨乐亨”谐音自然，传递快乐与奢享的理念。",
    descEn: "A high-end pet luxury fashion brand dedicated to giving pets a wardrobe \"as rich as their humans'\". The name Bonenanza combines \"Bone\", standing for pets, with \"Bonanza\", meaning fortune and abundance, wishing furry kids good luck, plenty and an elegant life. Its Chinese name \"Gu Le Heng\" echoes the sound naturally and conveys a spirit of joy and indulgent living.",
    link: "https://bonenanza.com/",
    products: ["assets/products/b12-1.jpg","assets/products/b12-2.jpg","assets/products/b12-3.jpg","assets/products/b12-4.jpg","assets/products/b12-5.jpg","assets/products/b12-6.jpg","assets/products/b12-7.jpg"]
  }
];
