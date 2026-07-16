const products = [
  {
    id: "zjd3c",
    name: "智净御风系列",
    model: "ZJD3C",
    type: "吊顶式",
    exchange: "全热交换",
    tags: ["分区控制", "5种探头", "智能控制"],
    highlight: "可根据每个区域的不同需求，独立控制风量。",
    category: "全热新风",
    image: "assets/images/products/zjd3c.png",
    catalog: "assets/docs/样本-ZJD3C-全热-ZJD3C-智净御风系列.PDF",
    manual: "assets/docs/说明书-ZJD3C-全热-ZJD3C-智净御风.pdf",
    accessories: [
      { name: "御风箱", file: "assets/docs/说明书-ZJD3C-配件-MDJ1C-御风箱.pdf" },
      { name: "线控器", file: "assets/docs/说明书-ZJD3C-配件-SWJ1C-线控器.pdf" }
    ]
  },
  {
    id: "zdp2c",
    name: "家用薄型系列",
    model: "ZDP2C",
    type: "吊顶式",
    exchange: "全热交换",
    tags: ["消毒功能", "畅销系列", "智能感应"],
    highlight: "具有消毒功能，有效杀灭病毒和细菌。",
    category: "全热新风",
    image: "assets/images/products/ZDP2C.png",
    catalog: "assets/docs/样本-ZDP2C-全热-ZDP2C-全热交换器.PDF",
    manual: "assets/docs/说明书-ZDP2C-全热-253550ZDP2C-薄型全热.pdf",
    accessories: [
      { name: "15ZDP2C", file: "assets/docs/说明书-ZDP2C-全热-15ZDP2C-薄型全热.pdf" }
    ]
  },
  {
    id: "zm2c",
    name: "迷你系列",
    model: "ZM2C",
    type: "吊顶式",
    exchange: "全热交换",
    tags: ["小巧机身", "PM2.5净化", "控制器升级"],
    highlight: "体积小巧，适合小户型、公寓或别墅单层使用。",
    category: "全热新风",
    image: "assets/images/products/ZM2C.png",
    catalog: "assets/docs/样本-ZM2C-全热-ZM2C-迷你全热交换器.pdf",
    manual: "assets/docs/说明书-ZM2C-全热-ZM2C-迷你全热.pdf"
  },
  {
    id: "zy1c",
    name: "ZY系列",
    model: "ZY1C",
    type: "吊顶式",
    exchange: "全热交换",
    tags: ["经济高效", "PM2.5净化"],
    highlight: "经济高效的全热交换器，配备PM2.5过滤网。",
    category: "全热新风",
    image: "assets/images/products/ZY1C.png",
    catalog: "assets/docs/样本-工程-全热-ZY1C-ZY全热.pdf",
    manual: "assets/docs/说明书-零售-全热-ZY1C-小风量ZY.pdf"
  },
  {
    id: "zxh1c",
    name: "智爽除湿全热",
    model: "ZXH1C",
    type: "吊顶式",
    exchange: "全热交换+除湿",
    tags: ["分区控制", "超大除湿量", "智能调节"],
    highlight: "超大除湿量，并且可对某个区域进行单独控制。",
    category: "除湿产品",
    image: "assets/images/products/zxh1c.png",
    manual: "assets/docs/说明书-ZXH1C-除湿全热-除湿全热.pdf"
  },
  {
    id: "zxc2c",
    name: "除湿全热",
    model: "ZXC2C",
    type: "吊顶式",
    exchange: "全热交换+除湿",
    tags: ["消毒功能", "智能模式", "高效除湿"],
    highlight: "同时具备除湿和全热交换功能，适用不同天气。",
    category: "除湿产品",
    image: "assets/images/products/ZXC2C.png",
    catalog: "assets/docs/样本-ZXC2C-除湿全热-ZXC2C松下新风除湿机.pdf",
    manual: "assets/docs/说明书-ZXC2C-除湿全热.pdf"
  },
  {
    id: "nc1c-nxc2c",
    name: "新风除湿机",
    model: "NC1C/NXC2C",
    type: "吊顶式",
    exchange: "新风+除湿",
    tags: ["新风除湿", "稳定运行", "智能控制"],
    image: "assets/images/products/NXC1C.png",
    highlight: "兼具新风和除湿功能，适用不同环境。",
    category: "除湿产品",
    catalog: "assets/docs/样本-NC1C-除湿-NC_NCD松下新风除湿机.PDF",
    accessories: [
      { name: "NC1C", file: "assets/docs/说明书-NC1C-除湿新风-除湿新风机.pdf" },
      { name: "NXC2C", file: "assets/docs/说明书-50NXC2C-除湿新风-除湿新风机.pdf" }
    ]
  },
];

const featureSeries = [
  { id: "zjd3c", name: "智净系列", model: "ZJD3C", highlight: "分区控制·5种探头·智能控制" },
  { id: "zdp2c", name: "薄型系列", model: "ZDP2C", highlight: "消毒功能·畅销系列·智能感应" },
  { id: "zm2c", name: "迷你系列", model: "ZM2C", highlight: "小巧机身·PM2.5净化·控制器升级" },
  { id: "zy1c", name: "ZY系列", model: "ZY1C", highlight: "经济高效·PM2.5净化" },
];

const dehumidifySeries = [
  { id: "zxh1c", name: "ZXH1C", type: "智爽除湿", highlight: "双向流全热交换" },
  { id: "zxc2c", name: "ZXC2C", type: "除湿全热", highlight: "双向流全热交换" },
  { id: "nxc2c", name: "50NXC2C", type: "新风除湿", highlight: "单向流送风" },
  { id: "nc1c", name: "50NC1C", type: "新风除湿", highlight: "单向流送风" },
];

const featureCategories = [
  {
    name: "消毒功能",
    rows: [
      { label: "消毒功能", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
    ],
  },
  {
    name: "滤网配置",
    rows: [
      { label: "活性炭滤网", values: { zjd3c: true, zdp2c: false, zm2c: false, zy1c: false } },
      { label: "初效滤网", values: { zjd3c: true, zdp2c: true, zm2c: true, zy1c: false } },
      { label: "抗菌PM2.5过滤网", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
      { label: "PM2.5过滤网", values: { zjd3c: false, zdp2c: false, zm2c: true, zy1c: true } },
      { label: "加强PM2.5过滤网", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
      { label: "回风初效滤网", values: { zjd3c: true, zdp2c: true, zm2c: true, zy1c: true } },
    ],
  },
  {
    name: "设备部材",
    rows: [
      { label: "马达", values: { zjd3c: "双直流马达", zdp2c: "双直流马达", zm2c: "双直流马达", zy1c: "双直流马达" }, text: true },
      { label: "御风箱（选配）", values: { zjd3c: true, zdp2c: false, zm2c: false, zy1c: false } },
      { label: "温度传感器", values: { zjd3c: true, zdp2c: false, zm2c: true, zy1c: false } },
      { label: "湿度传感器", values: { zjd3c: true, zdp2c: false, zm2c: false, zy1c: false } },
      { label: "PM2.5传感器", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
      { label: "CO₂传感器", values: { zjd3c: true, zdp2c: false, zm2c: false, zy1c: false } },
      { label: "甲醛传感器", values: { zjd3c: true, zdp2c: false, zm2c: false, zy1c: false } },
      { label: "手机APP", values: { zjd3c: true, zdp2c: true, zm2c: true, zy1c: false } },
    ],
  },
  {
    name: "运行模式",
    rows: [
      { label: "全热交换", values: { zjd3c: true, zdp2c: true, zm2c: true, zy1c: true } },
      { label: "内循环", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
      { label: "旁通模式", values: { zjd3c: true, zdp2c: false, zm2c: false, zy1c: true } },
      { label: "自动模式", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
      { label: "消毒模式", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
      { label: "度假模式", values: { zjd3c: true, zdp2c: true, zm2c: true, zy1c: false } },
    ],
  },
  {
    name: "附加模式",
    rows: [
      { label: "正压模式", values: { zjd3c: true, zdp2c: true, zm2c: true, zy1c: true } },
      { label: "高静压模式", values: { zjd3c: true, zdp2c: true, zm2c: false, zy1c: false } },
    ],
  },
  {
    name: "保修",
    rows: [
      { label: "保修政策", values: "全国联保，整机3年，马达8年", text: true, colspan: true },
    ],
  },
];

const dehumidifyCategories = [
  {
    name: "消毒功能",
    rows: [
      { label: "消毒功能", values: { zxh1c: true, zxc2c: true, nxc2c: true, nc1c: false } },
    ],
  },
  {
    name: "滤网配置",
    rows: [
      { label: "初效滤网", values: { zxh1c: true, zxc2c: true, nxc2c: true, nc1c: true } },
      { label: "抗菌PM2.5过滤网", values: { zxh1c: true, zxc2c: true, nxc2c: true, nc1c: false } },
      { label: "回风初效滤网", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
    ],
  },
  {
    name: "设备部材",
    rows: [
      { label: "马达", values: { zxh1c: "双直流马达", zxc2c: "双直流马达", nxc2c: "直流马达", nc1c: "直流马达" }, text: true },
      { label: "排水泵", values: { zxh1c: true, zxc2c: false, nxc2c: false, nc1c: false } },
      { label: "御风箱（选配）", values: { zxh1c: true, zxc2c: false, nxc2c: false, nc1c: false } },
      { label: "温度传感器", values: { zxh1c: true, zxc2c: true, nxc2c: true, nc1c: true } },
      { label: "湿度传感器", values: { zxh1c: true, zxc2c: true, nxc2c: true, nc1c: true } },
      { label: "PM2.5传感器", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
      { label: "CO₂传感器", values: { zxh1c: true, zxc2c: false, nxc2c: false, nc1c: false } },
      { label: "甲醛传感器", values: { zxh1c: true, zxc2c: false, nxc2c: false, nc1c: false } },
      { label: "手机APP", values: { zxh1c: true, zxc2c: true, nxc2c: true, nc1c: false } },
    ],
  },
  {
    name: "运行模式",
    rows: [
      { label: "全热交换", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
      { label: "内循环", values: { zxh1c: true, zxc2c: true, nxc2c: true, nc1c: true } },
      { label: "旁通模式", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
      { label: "自动模式", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
      { label: "消毒模式", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
      { label: "度假模式", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
    ],
  },
  {
    name: "附加模式",
    rows: [
      { label: "正压模式", values: { zxh1c: true, zxc2c: true, nxc2c: false, nc1c: false } },
      { label: "高静压模式", values: { zxh1c: true, zxc2c: false, nxc2c: false, nc1c: false } },
    ],
  },
  {
    name: "保修期",
    rows: [
      { label: "保修政策", values: "全国联保，整机1年，马达8年，压缩机3年，电路板3年", text: true, colspan: true },
    ],
  },
];

const smartSelectorData = {
  fanTypes: {
    freshAir: { label: "新风", series: "zjd3c", hasHumidModule: false, canYufeng: true },
    humidify: { label: "加湿", series: ["zjt2c", "zdt2c"], hasHumidModule: true, canYufeng: true },
    humidity: { label: "调湿", series: "zht1c", hasHumidModule: true, canYufeng: true },
    dehumidify: { label: "除湿", series: "zxh1c", hasHumidModule: false, canYufeng: true },
  },
  humidModuleMap: {
    250: { noJ: "FV-19TN2C", withJ: "FV-19TNJ2C" },
    350: { noJ: "FV-26TN2C", withJ: "FV-26TNJ2C" },
  },
  yufengModels: ["FV-MDJ251C-6", "FV-MDJ351C-7", "FV-MDJ501C-8"],
  yufengComponentModels: ["FV-MDT191C-7", "FV-MDT261C-8"],
  fanTypeSeriesMap: {
    freshAir: { seriesId: "zjd3c", modelPrefix: "FV-", label: "新风" },
    humidify: { seriesId: ["zjt2c", "zdt2c"], modelPrefix: "FV-", label: "加湿" },
    humidity: { seriesId: "zht1c", modelPrefix: "FV-", label: "调湿" },
    dehumidify: { seriesId: "zxh1c", modelPrefix: "FV-", label: "除湿" },
  },
  a2wModels: [
    { model: "CS-MN6WKS1", cooling: 16, heating: 16, suffixE: "CS-MN6WKS1E" },
    { model: "CS-MN8WKS1", cooling: 22.4, heating: 22.4, suffixE: "CS-MN8WKS1E" },
    { model: "CS-MN10WKS1", cooling: 28, heating: 28, suffixE: "CS-MN10WKS1E" },
  ],
  controllers: {
    withFloorHeat: "CZ-RD602DX2",
    withoutFloorHeat: "CZ-RD504DX2",
    gateway: "CZ-TA30X2",
    freshAirController: "FV-SWJ1C",
    sixController: "FV-SWT1C",
    airBox: "FV-BMS1C",
    acControllers: ["CZ-RD504DX1", "CZ-RD504DX2", "CZ-RD506DX2", "CZ-RD602DX2", "CZ-RD603DX1", "CZ-559DW"],
    /* 6恒2代 控制器 */
    gen2Main: "FV-SWZTB01",
    gen2Sub: "FV-SWZTB02",
  },
};

/* 6恒2代 选型专用数据 */
const gen2SelectorData = {
  fanTypes: {
    humidity: { label: "调湿", series: ["zdt1c", "zjt1c"], hasHumidModule: true, canYufeng: false },
  },
  humidModuleMap: {
    150: { noJ: "FV-12TC2C", withJ: "FV-12TCJ2C" },
    350: { noJ: "FV-26TC2C", withJ: "FV-26TCJ2C" },
  },
  yufengModels: [],
  yufengComponentModels: [],
};

const paramsMap = {
  zjd3c: {
    series: "智净系列",
    models: ["FV-25ZJD3C", "FV-35ZJD3C", "FV-50ZJD3C"],
    specs: [
      { label: "适用面积", values: ["70-120", "120-180", "180-250"], unit: "m²" },
      { label: "设备风量", values: [250, 350, 500], unit: "m³/h" },
      { label: "机外余压", values: [150, 150, 130], unit: "Pa" },
      { label: "额定功率", values: [105, 150, 232], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["67%", "65%", "61%"] },
      { label: "全热交换效率（制热）", values: ["74%", "72%", "70%"] },
      { label: "噪音", values: [33, 36, 40], unit: "dB(A)" },
      { label: "重量", values: [46, 49, 56], unit: "kg" },
      { label: "设备尺寸", values: ["950×880×250", "1055×895×250", "1256×895×250"], unit: "mm" },
    ],
  },
  zdp2c: {
    series: "薄型系列",
    models: ["FV-15ZDP2C", "FV-25ZDP2C", "FV-35ZDP2C", "FV-50ZDP2C"],
    specs: [
      { label: "适用面积", values: ["50-70", "70-120", "120-180", "180-250"], unit: "m²" },
      { label: "设备风量", values: [150, 250, 350, 500], unit: "m³/h" },
      { label: "机外余压", values: [90, 110, 130, 110], unit: "Pa" },
      { label: "额定功率", values: [58, 105, 155, 238], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["69%", "63%", "62%", "61%"] },
      { label: "全热交换效率（制热）", values: ["84%", "78%", "76%", "74%"] },
      { label: "噪音", values: [31, 34, 37, 39], unit: "dB(A)" },
      { label: "重量", values: [32, 35, 43, 50], unit: "kg" },
      { label: "设备尺寸", values: ["708×720×220", "780×760×230", "920×800×240", "995×865×250"], unit: "mm" },
    ],
  },
  zm2c: {
    series: "迷你系列",
    models: ["FV-15ZM2C", "FV-25ZM2C", "FV-35ZM2C"],
    specs: [
      { label: "适用面积", values: ["50-70", "70-120", "120-180"], unit: "m²" },
      { label: "设备风量", values: [150, 250, 350], unit: "m³/h" },
      { label: "机外余压", values: [90, 110, 130], unit: "Pa" },
      { label: "额定功率", values: [67, 96, 144], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["59%", "59%", "59%"] },
      { label: "全热交换效率（制热）", values: ["65%", "65%", "65%"] },
      { label: "噪音", values: [34, 34, 36], unit: "dB(A)" },
      { label: "重量", values: [18, 26, 33], unit: "kg" },
      { label: "设备尺寸", values: ["505×550×220", "560×660×220", "735×705×230"], unit: "mm" },
    ],
  },
  zy1c: {
    series: "ZY系列",
    models: ["FY-15ZY1C", "FY-25ZY1C", "FY-35ZY1C", "FY-50ZY1C"],
    specs: [
      { label: "适用面积", values: ["50-70", "70-120", "120-180", "180-250"], unit: "m²" },
      { label: "设备风量", values: [150, 250, 350, 500], unit: "m³/h" },
      { label: "机外余压", values: [100, 120, 140, 130], unit: "Pa" },
      { label: "额定功率", values: [76, 106, 141, 180], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["59%", "59%", "61%", "59%"] },
      { label: "全热交换效率（制热）", values: ["69%", "69%", "75%", "68%"] },
      { label: "噪音", values: [37, 38, 39, 43], unit: "dB(A)" },
      { label: "重量", values: [23, 27, 37, 40], unit: "kg" },
      { label: "设备尺寸", values: ["860×610×289", "860×735×289", "968×874×331", "968×1016×331"], unit: "mm" },
    ],
  },
  zjt2c: {
    series: "加湿系列",
    models: ["FV-25ZJT2C", "FV-35ZJT2C"],
    specs: [
      { label: "设备风量", values: [250, 350], unit: "m³/h" },
      { label: "机外余压", values: [240, 280], unit: "Pa" },
      { label: "额定功率", values: [125, 200], unit: "W" },
      { label: "噪音", values: [41, 42], unit: "dB(A)" },
      { label: "全热交换效率（制冷）", values: ["67%", "65%"] },
      { label: "全热交换效率（制热）", values: ["74%", "72%"] },
      { label: "设备尺寸", values: ["950×880×250", "1055×895×250"], unit: "mm" },
    ],
  },
  zht1c: {
    series: "调湿系列",
    models: ["FV-25ZHT1C", "FV-35ZHT1C"],
    specs: [
      { label: "设备风量", values: [250, 350], unit: "m³/h" },
      { label: "机外余压", values: [130, 130], unit: "Pa" },
      { label: "额定功率", values: [1110, 1490], unit: "W" },
      { label: "噪音", values: [38, 41], unit: "dB(A)" },
      { label: "全热交换效率（制冷）", values: ["66%", "62%"] },
      { label: "全热交换效率（制热）", values: ["78%", "76%"] },
      { label: "设备尺寸", values: ["1297×997×250", "1297×997×250"], unit: "mm" },
    ],
  },
  zxh1c: {
    series: "智爽除湿全热",
    models: ["FV-25ZXH1C", "FV-35ZXH1C"],
    specs: [
      { label: "适用面积", values: ["50-100", "50-150"], unit: "m²" },
      { label: "设备风量", values: [250, 350], unit: "m³/h" },
      { label: "除湿量*", values: [81, 110], unit: "L/D" },
      { label: "机外余压", values: [110, 110], unit: "Pa" },
      { label: "额定功率", values: [1110, 1490], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["66%", "62%"] },
      { label: "全热交换效率（制热）", values: ["78%", "76%"] },
      { label: "噪音", values: [32, 38], unit: "dB(A)" },
      { label: "重量", values: [95, 95], unit: "kg" },
      { label: "设备尺寸（长）", values: [1297, 1297], unit: "mm" },
      { label: "设备尺寸（宽）", values: [997, 997], unit: "mm" },
      { label: "设备尺寸（高）", values: [250, 250], unit: "mm" },
    ],
  },
  zxc2c: {
    series: "除湿全热",
    models: ["FV-25ZXC2C", "FV-35ZXC2C"],
    specs: [
      { label: "适用面积", values: ["50-100", "50-100"], unit: "m²" },
      { label: "设备风量", values: [300, 400], unit: "m³/h" },
      { label: "除湿量*", values: [65, 77], unit: "L/D" },
      { label: "机外余压", values: [120, 120], unit: "Pa" },
      { label: "额定功率", values: [815, 895], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["61%", "61%"] },
      { label: "全热交换效率（制热）", values: ["72%", "72%"] },
      { label: "噪音", values: [40, 41], unit: "dB(A)" },
      { label: "重量", values: [68, 78], unit: "kg" },
      { label: "设备尺寸（长）", values: [1330, 1330], unit: "mm" },
      { label: "设备尺寸（宽）", values: [760, 799], unit: "mm" },
      { label: "设备尺寸（高）", values: [280, 280], unit: "mm" },
    ],
  },
  nxc2c: {
    series: "新风除湿机",
    models: ["FV-50NXC2C"],
    specs: [
      { label: "适用面积", values: ["50-100"], unit: "m²" },
      { label: "设备风量", values: [500], unit: "m³/h" },
      { label: "除湿量*", values: [45], unit: "L/D" },
      { label: "机外余压", values: ["-"], unit: "Pa" },
      { label: "额定功率", values: [635], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["-"] },
      { label: "全热交换效率（制热）", values: ["-"] },
      { label: "噪音", values: [39], unit: "dB(A)" },
      { label: "重量", values: [45], unit: "kg" },
      { label: "设备尺寸（长）", values: [950], unit: "mm" },
      { label: "设备尺寸（宽）", values: [570], unit: "mm" },
      { label: "设备尺寸（高）", values: [288], unit: "mm" },
    ],
  },
  nc1c: {
    series: "新风除湿机",
    models: ["FV-50NC1C"],
    specs: [
      { label: "适用面积", values: ["50-100"], unit: "m²" },
      { label: "设备风量", values: [500], unit: "m³/h" },
      { label: "除湿量*", values: [45], unit: "L/D" },
      { label: "机外余压", values: ["-"], unit: "Pa" },
      { label: "额定功率", values: [610], unit: "W" },
      { label: "全热交换效率（制冷）", values: ["-"] },
      { label: "全热交换效率（制热）", values: ["-"] },
      { label: "噪音", values: [38], unit: "dB(A)" },
      { label: "重量", values: [45], unit: "kg" },
      { label: "设备尺寸（长）", values: [950], unit: "mm" },
      { label: "设备尺寸（宽）", values: [570], unit: "mm" },
      { label: "设备尺寸（高）", values: [288], unit: "mm" },
    ],
  },
  zdt2c: {
    series: "家用薄型全热交换器",
    models: ["FV-25ZDT2C", "FV-35ZDT2C"],
    specs: [
      { label: "设备风量", values: [250, 350], unit: "m³/h" },
      { label: "机外余压", values: [210, 200], unit: "Pa" },
      { label: "额定功率", values: [129, 176], unit: "W" },
      { label: "噪音", values: [36, 38], unit: "dB(A)" },
      { label: "全热交换效率（制冷）", values: ["65%", "63%"] },
      { label: "全热交换效率（制热）", values: ["78%", "76%"] },
      { label: "设备尺寸", values: ["780×760×230", "920×800×240"], unit: "mm" },
    ],
  },
  zdt1c: {
    series: "家用薄型全热交换器",
    models: ["FV-15ZDT1C", "FV-25ZDT1C", "FV-35ZDT1C"],
    specs: [
      { label: "设备风量", values: [150, 250, 350], unit: "m³/h" },
      { label: "机外余压", values: [110, 130, 150], unit: "Pa" },
      { label: "额定功率", values: [62, 107, 163], unit: "W" },
      { label: "噪音", values: [32, 35, 38], unit: "dB(A)" },
      { label: "全热交换效率（制冷）", values: ["71%", "69%", "65%"] },
      { label: "全热交换效率（制热）", values: ["84%", "78%", "76%"] },
      { label: "设备尺寸", values: ["760×720×220", "780×760×230", "920×800×240"], unit: "mm" },
    ],
  },
  zjt1c: {
    series: "高级DC全热",
    models: ["FV-15ZJT1C", "FV-25ZJT1C", "FV-35ZJT1C"],
    specs: [
      { label: "设备风量", values: [150, 250, 350], unit: "m³/h" },
      { label: "机外余压", values: [120, 150, 180], unit: "Pa" },
      { label: "额定功率", values: [80, 120, 180], unit: "W" },
      { label: "噪音", values: [30, 34, 37], unit: "dB(A)" },
      { label: "全热交换效率（制冷）", values: ["66%", "62%", "63%"] },
      { label: "全热交换效率（制热）", values: ["80%", "79%", "78%"] },
      { label: "设备尺寸", values: ["1090×720×250", "1090×800×250", "1190×950×250"], unit: "mm" },
    ],
  },
  tn2c: {
    series: "加湿模块",
    models: ["FV-19TN2C", "FV-26TN2C", "FV-19TNJ2C", "FV-26TNJ2C"],
    specs: [
      { label: "设备风量", values: [250, 350, 250, 350], unit: "m³/h" },
      { label: "噪音", values: [40, 40, 40, 40], unit: "dB(A)" },
      { label: "额定功率", values: [1950, 2550, 1960, 2560], unit: "W" },
      { label: "设备尺寸", values: ["750×608×250", "750×608×250", "750×763×250", "750×763×250"], unit: "mm" },
    ],
  },
  tc2c: {
    series: "调湿模块",
    models: ["FV-12TC2C", "FV-26TC2C", "FV-12TCJ2C", "FV-26TCJ2C"],
    specs: [
      { label: "噪音", values: [35, 40, 35, 40], unit: "dB(A)" },
      { label: "额定功率", values: [630, 1310, 640, 1320], unit: "W" },
      { label: "设备尺寸", values: ["650×520×250", "750×520×250", "650×520×250", "750×520×250"], unit: "mm" },
    ],
  },
};


/* ── 6恒系统空调选型 ── */

const acProducts = [
  // 室内机 - 暗藏管道式_超薄_100×nanoe
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE6D0AS12B', coolingCapacity: 1.8, heatingCapacity: 2.2, power: 0.03, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE7D0AS12B', coolingCapacity: 2.2, heatingCapacity: 2.5, power: 0.03, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE8D0AS12B', coolingCapacity: 2.5, heatingCapacity: 2.8, power: 0.03, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE9D0AS12B', coolingCapacity: 2.8, heatingCapacity: 3.2, power: 0.035, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE10D0AS12B', coolingCapacity: 3.2, heatingCapacity: 3.6, power: 0.04, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE12D0AS12B', coolingCapacity: 3.6, heatingCapacity: 4.2, power: 0.04, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE14D0AS12B', coolingCapacity: 4.0, heatingCapacity: 4.5, power: 0.045, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE16D0AS12B', coolingCapacity: 4.5, heatingCapacity: 5.0, power: 0.05, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE17D0AS12B', coolingCapacity: 5.0, heatingCapacity: 5.6, power: 0.055, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE18D0AS12B', coolingCapacity: 5.6, heatingCapacity: 6.3, power: 0.055, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE23D0AS12B', coolingCapacity: 6.3, heatingCapacity: 7.1, power: 0.065, size: '1100*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe', model: 'CS-MHE27D0AS12B', coolingCapacity: 7.3, heatingCapacity: 8.0, power: 0.065, size: '1100*450*200', maxCapacity: 7.3 },
  
  // 室内机 - 暗藏管道式_超薄_100×nanoe_内置排水泵
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE6D0AS12PB', coolingCapacity: 1.8, heatingCapacity: 2.2, power: 0.03, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE7D0AS12PB', coolingCapacity: 2.2, heatingCapacity: 2.5, power: 0.03, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE8D0AS12PB', coolingCapacity: 2.5, heatingCapacity: 2.8, power: 0.03, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE9D0AS12PB', coolingCapacity: 2.8, heatingCapacity: 3.2, power: 0.035, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE10D0AS12PB', coolingCapacity: 3.2, heatingCapacity: 3.6, power: 0.04, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE12D0AS12PB', coolingCapacity: 3.6, heatingCapacity: 4.2, power: 0.04, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE14D0AS12PB', coolingCapacity: 4.0, heatingCapacity: 4.5, power: 0.045, size: '900*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE16D0AS12PB', coolingCapacity: 4.5, heatingCapacity: 5.0, power: 0.05, size: '900*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE17D0AS12PB', coolingCapacity: 5.0, heatingCapacity: 5.6, power: 0.055, size: '900*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE18D0AS12PB', coolingCapacity: 5.6, heatingCapacity: 6.3, power: 0.055, size: '900*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE23D0AS12PB', coolingCapacity: 6.3, heatingCapacity: 7.1, power: 0.065, size: '1100*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE27D0AS12PB', coolingCapacity: 7.3, heatingCapacity: 8.0, power: 0.065, size: '1100*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE28D0AS12PB', coolingCapacity: 8.0, heatingCapacity: 9.0, power: 0.085, size: '1400*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE32D0AS12PB', coolingCapacity: 9.0, heatingCapacity: 10.5, power: 0.085, size: '1400*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE35D0AS12PB', coolingCapacity: 10.0, heatingCapacity: 11.2, power: 0.13, size: '1400*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵', model: 'CS-MHE38D0AS12PB', coolingCapacity: 11.2, heatingCapacity: 12.5, power: 0.13, size: '1400*450*200', maxCapacity: 11.2 },

  // 室内机 - 暗藏管道式_超薄_100×nanoe_PM2.5滤网
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE6D0AS12BF', coolingCapacity: 1.8, heatingCapacity: 2.2, power: 0.03, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE7D0AS12BF', coolingCapacity: 2.2, heatingCapacity: 2.5, power: 0.03, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE8D0AS12BF', coolingCapacity: 2.5, heatingCapacity: 2.8, power: 0.03, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE9D0AS12BF', coolingCapacity: 2.8, heatingCapacity: 3.2, power: 0.035, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE10D0AS12BF', coolingCapacity: 3.2, heatingCapacity: 3.6, power: 0.04, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE12D0AS12BF', coolingCapacity: 3.6, heatingCapacity: 4.2, power: 0.04, size: '700*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE14D0AS12BF', coolingCapacity: 4.0, heatingCapacity: 4.5, power: 0.045, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE16D0AS12BF', coolingCapacity: 4.5, heatingCapacity: 5.0, power: 0.05, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE17D0AS12BF', coolingCapacity: 5.0, heatingCapacity: 5.6, power: 0.055, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE18D0AS12BF', coolingCapacity: 5.6, heatingCapacity: 6.3, power: 0.055, size: '900*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE23D0AS12BF', coolingCapacity: 6.3, heatingCapacity: 7.1, power: 0.065, size: '1100*450*200', maxCapacity: 7.3 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', model: 'CS-MHE27D0AS12BF', coolingCapacity: 7.3, heatingCapacity: 8.0, power: 0.065, size: '1100*450*200', maxCapacity: 7.3 },

  // 室内机 - 暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE7D0AS12PBF', coolingCapacity: 2.2, heatingCapacity: 2.5, power: 0.03, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE8D0AS12PBF', coolingCapacity: 2.5, heatingCapacity: 2.8, power: 0.03, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE9D0AS12PBF', coolingCapacity: 2.8, heatingCapacity: 3.2, power: 0.035, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE10D0AS12PBF', coolingCapacity: 3.2, heatingCapacity: 3.6, power: 0.04, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE12D0AS12PBF', coolingCapacity: 3.6, heatingCapacity: 4.2, power: 0.04, size: '700*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE27D0AS12PBF', coolingCapacity: 7.3, heatingCapacity: 8.0, power: 0.065, size: '1100*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE28D0AS12PBF', coolingCapacity: 8.0, heatingCapacity: 9.0, power: 0.085, size: '1400*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE32D0AS12PBF', coolingCapacity: 9.0, heatingCapacity: 10.5, power: 0.085, size: '1400*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE35D0AS12PBF', coolingCapacity: 10.0, heatingCapacity: 11.2, power: 0.13, size: '1400*450*200', maxCapacity: 11.2 },
  { type: 'indoor', series: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', model: 'CS-MHE38D0AS12PBF', coolingCapacity: 11.2, heatingCapacity: 12.5, power: 0.13, size: '1400*450*200', maxCapacity: 11.2 },

  // 室内机 - 厨卫专用空调
  { type: 'indoor', series: '厨卫专用空调', model: 'CS-ME9D0AS9', coolingCapacity: 2.8, heatingCapacity: 3.2, power: null, size: '', maxCapacity: 2.8 },
  { type: 'indoor', series: '厨卫专用空调', model: 'CS-ME9D0AS9B', coolingCapacity: 2.8, heatingCapacity: 3.2, power: null, size: '', maxCapacity: 2.8 },

  // 室内机 - 暗藏管道式_中静压
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME7DIEX7', coolingCapacity: 2.2, heatingCapacity: 2.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME9DIEX7', coolingCapacity: 2.8, heatingCapacity: 3.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME12DIEX7', coolingCapacity: 3.6, heatingCapacity: 4.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME14DIEX7', coolingCapacity: 4.0, heatingCapacity: 4.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME16DIEX7', coolingCapacity: 4.5, heatingCapacity: 5.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME17DIEX7', coolingCapacity: 5.0, heatingCapacity: 5.6, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME18DIEX7', coolingCapacity: 5.6, heatingCapacity: 6.3, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME23DIEX7', coolingCapacity: 6.3, heatingCapacity: 7.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME27DIEX7', coolingCapacity: 7.3, heatingCapacity: 8.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME28DIEX7', coolingCapacity: 8.0, heatingCapacity: 9.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME32DIEX7', coolingCapacity: 9.0, heatingCapacity: 10.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME35DIEX7', coolingCapacity: 10.0, heatingCapacity: 11.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME38DIEX7', coolingCapacity: 11.2, heatingCapacity: 12.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME45DIEX7', coolingCapacity: 12.5, heatingCapacity: 14.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME54DIEX7', coolingCapacity: 14.0, heatingCapacity: 16.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压', model: 'CS-ME60DIEX7', coolingCapacity: 16.0, heatingCapacity: 18.0, power: null, size: '', maxCapacity: 16 },

  // 室内机 - 暗藏管道式_中静压_内置排水泵
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME7DIEX8', coolingCapacity: 2.2, heatingCapacity: 2.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME8DIEX8', coolingCapacity: 2.5, heatingCapacity: 3.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME9DIEX8', coolingCapacity: 2.8, heatingCapacity: 3.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME10DIEX8', coolingCapacity: 3.2, heatingCapacity: 3.6, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME12DIEX8', coolingCapacity: 3.6, heatingCapacity: 4.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME14DIEX8', coolingCapacity: 4.0, heatingCapacity: 4.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME15DIEX8', coolingCapacity: 4.3, heatingCapacity: 4.9, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME16DIEX8', coolingCapacity: 4.5, heatingCapacity: 5.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME17DIEX8', coolingCapacity: 5.0, heatingCapacity: 5.6, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME18DIEX8', coolingCapacity: 5.6, heatingCapacity: 6.3, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME23DIEX8', coolingCapacity: 6.3, heatingCapacity: 7.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME27DIEX8', coolingCapacity: 7.3, heatingCapacity: 8.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME28DIEX8', coolingCapacity: 8.0, heatingCapacity: 9.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME32DIEX8', coolingCapacity: 9.0, heatingCapacity: 10.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME34DIEX8', coolingCapacity: 9.3, heatingCapacity: 10.7, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME35DIEX8', coolingCapacity: 10.0, heatingCapacity: 11.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME36DIEX8', coolingCapacity: 10.6, heatingCapacity: 11.4, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME38DIEX8', coolingCapacity: 11.2, heatingCapacity: 12.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME45DIEX8', coolingCapacity: 12.5, heatingCapacity: 14.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME54DIEX8', coolingCapacity: 14.0, heatingCapacity: 16.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_内置排水泵', model: 'CS-ME60DIEX8', coolingCapacity: 16.0, heatingCapacity: 18.0, power: null, size: '', maxCapacity: 16 },

  // 室内机 - 暗藏管道式_中静压_nanoe_内置排水泵
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME7DIEX8B', coolingCapacity: 2.2, heatingCapacity: 2.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME9DIEX8B', coolingCapacity: 2.8, heatingCapacity: 3.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME12DIEX8B', coolingCapacity: 3.6, heatingCapacity: 4.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME14DIEX8B', coolingCapacity: 4.0, heatingCapacity: 4.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME16DIEX8B', coolingCapacity: 4.5, heatingCapacity: 5.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME17DIEX8B', coolingCapacity: 5.0, heatingCapacity: 5.6, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME18DIEX8B', coolingCapacity: 5.6, heatingCapacity: 6.3, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME23DIEX8B', coolingCapacity: 6.3, heatingCapacity: 7.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME27DIEX8B', coolingCapacity: 7.3, heatingCapacity: 8.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME28DIEX8B', coolingCapacity: 8.0, heatingCapacity: 9.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME32DIEX8B', coolingCapacity: 9.0, heatingCapacity: 10.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME35DIEX8B', coolingCapacity: 10.0, heatingCapacity: 11.2, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME38DIEX8B', coolingCapacity: 11.2, heatingCapacity: 12.5, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME45DIEX8B', coolingCapacity: 12.5, heatingCapacity: 14.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME54DIEX8B', coolingCapacity: 14.0, heatingCapacity: 16.0, power: null, size: '', maxCapacity: 16 },
  { type: 'indoor', series: '暗藏管道式_中静压_nanoe_内置排水泵', model: 'CS-ME60DIEX8B', coolingCapacity: 16.0, heatingCapacity: 18.0, power: null, size: '', maxCapacity: 16 },

  // 室外机 - S7系列
  { type: 'outdoor', series: 'S7', model: 'CU-ME27BS7', coolingCapacity: 8.4, power: null, size: '900*320*786', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME36BS7', coolingCapacity: 11.2, power: null, size: '1100*390*805', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME45BS7', coolingCapacity: 14.0, power: null, size: '1100*390*805', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME54BS7', coolingCapacity: 15.6, power: null, size: '1100*390*805', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME58BS7', coolingCapacity: 18.0, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME63BS7', coolingCapacity: 20.0, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME72BS7', coolingCapacity: 22.4, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME81BSY7', coolingCapacity: 25.2, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME90BSY7', coolingCapacity: 28.2, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME100BSY7', coolingCapacity: 30.0, power: null, size: '1100*390*1626', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME108BSY7', coolingCapacity: 33.5, power: null, size: '1100*390*1626', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME115BSY7', coolingCapacity: 35.0, power: null, size: '1100*390*1626', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME36BS7N', coolingCapacity: 8.4, power: null, size: '900*350*1340', maxCapacity: 14 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME45BS7N', coolingCapacity: 11.2, power: null, size: '900*350*1340', maxCapacity: 14 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME54BS7N', coolingCapacity: 14.0, power: null, size: '900*350*1340', maxCapacity: 14 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME58BYS7', coolingCapacity: 18.0, power: null, size: '980*370*1500', maxCapacity: 22.4 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME63BYS7', coolingCapacity: 20.0, power: null, size: '980*370*1500', maxCapacity: 22.4 },
  { type: 'outdoor', series: 'S7', model: 'CU-ME72BYS7', coolingCapacity: 22.4, power: null, size: '980*370*1500', maxCapacity: 22.4 },

  // 室外机 - S7R系列
  { type: 'outdoor', series: 'S7R', model: 'CU-ME36BS7R', coolingCapacity: 11.2, power: 2.65, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7R', model: 'CU-ME40BS7R', coolingCapacity: 12.5, power: 3.3, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7R', model: 'CU-ME45BS7R', coolingCapacity: 14.0, power: 3.85, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7R', model: 'CU-ME54BS7R', coolingCapacity: 15.5, power: 4.8, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7R', model: 'CU-ME58BS7R', coolingCapacity: 18.0, power: 6.0, size: '980*370*996', maxCapacity: 18 },

  // 室外机 - S7J系列
  { type: 'outdoor', series: 'S7J', model: 'CU-ME27BS7J', coolingCapacity: 8.4, power: null, size: '900*320*786', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME36BS7J', coolingCapacity: 11.2, power: null, size: '1100*390*805', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME45BS7J', coolingCapacity: 14.0, power: null, size: '1100*390*805', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME54BS7J', coolingCapacity: 15.6, power: null, size: '1100*390*805', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME36BS7NJ', coolingCapacity: 8.4, power: null, size: '900*350*1340', maxCapacity: 14 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME45BS7NJ', coolingCapacity: 11.2, power: null, size: '900*350*1340', maxCapacity: 14 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME54BS7NJ', coolingCapacity: 14.0, power: null, size: '900*350*1340', maxCapacity: 14 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME58BS7J', coolingCapacity: 18.0, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME63BS7J', coolingCapacity: 20.0, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME72BS7J', coolingCapacity: 22.4, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME58BYS7J', coolingCapacity: 18.0, power: null, size: '980*370*1500', maxCapacity: 22.4 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME63BYS7J', coolingCapacity: 20.0, power: null, size: '980*370*1500', maxCapacity: 22.4 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME72BYS7J', coolingCapacity: 22.4, power: null, size: '980*370*1500', maxCapacity: 22.4 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME81BYS7J', coolingCapacity: 25.2, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME90BYS7J', coolingCapacity: 28.2, power: null, size: '980*370*1500', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME100BYS7J', coolingCapacity: 30.0, power: null, size: '1100*390*1626', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME108BYS7J', coolingCapacity: 33.5, power: null, size: '1100*390*1626', maxCapacity: 35 },
  { type: 'outdoor', series: 'S7J', model: 'CU-ME115BYS7J', coolingCapacity: 35.0, power: null, size: '1100*390*1626', maxCapacity: 35 },

  // 室外机 - S7RJ系列
  { type: 'outdoor', series: 'S7RJ', model: 'CU-ME36BS7RJ', coolingCapacity: 11.2, power: 2.65, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7RJ', model: 'CU-ME40BS7RJ', coolingCapacity: 12.5, power: 3.3, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7RJ', model: 'CU-ME45BS7RJ', coolingCapacity: 14.0, power: 3.85, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7RJ', model: 'CU-ME54BS7RJ', coolingCapacity: 15.5, power: 4.8, size: '940*340*996', maxCapacity: 18 },
  { type: 'outdoor', series: 'S7RJ', model: 'CU-ME58BS7RJ', coolingCapacity: 18.0, power: 6.0, size: '980*370*996', maxCapacity: 18 },

  // 室外机 - S7P系列
  { type: 'outdoor', series: 'S7P', model: 'CU-ME36BS7P', coolingCapacity: 11.2, power: 2.92, size: '940*340*996', maxCapacity: 15.5 },

  // 室外机 - 8H系列
  { type: 'outdoor', series: '8H', model: 'CU-ME8B1YS8Z', coolingCapacity: 24.5, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME10B1YS8Z', coolingCapacity: 28.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME12B1YS8Z', coolingCapacity: 33.5, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME14B1YS8Z', coolingCapacity: 40.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME16B1YS8Z', coolingCapacity: 45.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME18B1YS8Z', coolingCapacity: 50.4, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME20B1YS8Z', coolingCapacity: 56.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME22B1YS8Z', coolingCapacity: 62.4, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME24B1YS8Z', coolingCapacity: 68.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME26B1YS8Z', coolingCapacity: 73.5, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME28B1YS8Z', coolingCapacity: 80.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME30B1YS8Z', coolingCapacity: 85.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME32B1YS8Z', coolingCapacity: 90.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME34B1YS8Z', coolingCapacity: 96.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME36B1YS8Z', coolingCapacity: 101.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME38B1YS8Z', coolingCapacity: 107.0, power: null, size: '', maxCapacity: 113 },
  { type: 'outdoor', series: '8H', model: 'CU-ME40B1YS8Z', coolingCapacity: 113.0, power: null, size: '', maxCapacity: 113 },
];

function findIndoorUnit(seriesName, coolingCapacity) {
  const units = acProducts.filter(p => p.type === 'indoor' && p.series === seriesName);
  if (units.length === 0) return null;
  units.sort((a, b) => a.coolingCapacity - b.coolingCapacity);
  
  for (const unit of units) {
    if (unit.coolingCapacity >= coolingCapacity) {
      return unit;
    }
  }
  
  return units[units.length - 1] || null;
}

function findBestIndoorCombo(seriesName, coolingCapacity) {
  const units = acProducts.filter(p => p.type === 'indoor' && p.series === seriesName);
  if (units.length === 0) return { unit: null, count: 1 };
  units.sort((a, b) => a.coolingCapacity - b.coolingCapacity);
  
  let bestUnit = null;
  let bestCount = Infinity;
  let bestTotalCapacity = Infinity;
  
  for (const unit of units) {
    for (let c = 1; c <= 5; c++) {
      const totalCap = unit.coolingCapacity * c;
      if (totalCap >= coolingCapacity) {
        if (c < bestCount || (c === bestCount && totalCap < bestTotalCapacity)) {
          bestUnit = unit;
          bestCount = c;
          bestTotalCapacity = totalCap;
        }
      }
    }
  }
  
  if (!bestUnit) {
    bestUnit = units[units.length - 1];
    bestCount = Math.ceil(coolingCapacity / bestUnit.coolingCapacity);
    if (bestCount > 5) bestCount = 5;
  }
  
  return { unit: bestUnit, count: bestCount };
}

function getMaxIndoorCapacity(seriesName) {
  const units = acProducts.filter(p => p.type === 'indoor' && p.series === seriesName);
  if (units.length === 0) return 0;
  return Math.max(...units.map(u => u.coolingCapacity));
}

function getIndoorUnitOptions(seriesName, selectedModel) {
  const units = acProducts.filter(p => p.type === 'indoor' && p.series === seriesName);
  const sorted = [...units].sort((a, b) => a.coolingCapacity - b.coolingCapacity);
  return sorted.map(unit => {
    const selected = selectedModel === unit.model ? 'selected' : '';
    return `<option value="${unit.model}" ${selected}>${unit.model} (${unit.coolingCapacity} kW)</option>`;
  }).join('');
}

function getIndoorUnitByModel(model) {
  return acProducts.find(p => p.type === 'indoor' && p.model === model);
}

function getOutdoorUnitOptions(seriesName, selectedModel) {
  const units = acProducts.filter(p => p.type === 'outdoor' && p.series === seriesName);
  const sorted = [...units].sort((a, b) => a.coolingCapacity - b.coolingCapacity);
  return sorted.map(unit => {
    const selected = selectedModel === unit.model ? 'selected' : '';
    return `<option value="${unit.model}" ${selected}>${unit.model} (${unit.coolingCapacity} kW)</option>`;
  }).join('');
}

function getOutdoorUnitByModel(model) {
  return acProducts.find(p => p.type === 'outdoor' && p.model === model);
}

function findOutdoorUnit(seriesName, totalCapacity, overRatio) {
  const requiredCapacity = totalCapacity / overRatio;
  const units = acProducts.filter(p => p.type === 'outdoor' && p.series === seriesName);
  units.sort((a, b) => a.coolingCapacity - b.coolingCapacity);
  
  for (const unit of units) {
    if (unit.coolingCapacity >= requiredCapacity) {
      return { ...unit, actualCapacity: unit.coolingCapacity, matchedCapacity: requiredCapacity };
    }
  }
  
  const maxUnit = units[units.length - 1];
  if (maxUnit) {
    return { ...maxUnit, actualCapacity: maxUnit.coolingCapacity, matchedCapacity: requiredCapacity, insufficient: true };
  }
  return null;
}

