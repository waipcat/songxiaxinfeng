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
      { label: "消毒功能", values: { zjd3c: true, zdp2c: true, zm2c: false } },
    ],
  },
  {
    name: "滤网配置",
    rows: [
      { label: "活性炭滤网", values: { zjd3c: true, zdp2c: false, zm2c: false } },
      { label: "初效滤网", values: { zjd3c: true, zdp2c: true, zm2c: true } },
      { label: "抗菌PM2.5过滤网", values: { zjd3c: true, zdp2c: true, zm2c: false } },
      { label: "PM2.5过滤网", values: { zjd3c: false, zdp2c: false, zm2c: true } },
      { label: "加强PM2.5过滤网", values: { zjd3c: true, zdp2c: true, zm2c: false } },
      { label: "回风初效滤网", values: { zjd3c: true, zdp2c: true, zm2c: true } },
    ],
  },
  {
    name: "设备部材",
    rows: [
      { label: "马达", values: { zjd3c: "双直流马达", zdp2c: "双直流马达", zm2c: "双直流马达" }, text: true },
      { label: "御风箱（选配）", values: { zjd3c: true, zdp2c: false, zm2c: false } },
      { label: "温度传感器", values: { zjd3c: true, zdp2c: false, zm2c: true } },
      { label: "湿度传感器", values: { zjd3c: true, zdp2c: false, zm2c: false } },
      { label: "PM2.5传感器", values: { zjd3c: true, zdp2c: true, zm2c: false } },
      { label: "CO₂传感器", values: { zjd3c: true, zdp2c: false, zm2c: false } },
      { label: "甲醛传感器", values: { zjd3c: true, zdp2c: false, zm2c: false } },
      { label: "手机APP", values: { zjd3c: true, zdp2c: true, zm2c: true } },
    ],
  },
  {
    name: "运行模式",
    rows: [
      { label: "全热交换", values: { zjd3c: true, zdp2c: true, zm2c: true } },
      { label: "内循环", values: { zjd3c: true, zdp2c: true, zm2c: false } },
      { label: "旁通模式", values: { zjd3c: true, zdp2c: false, zm2c: false } },
      { label: "自动模式", values: { zjd3c: true, zdp2c: true, zm2c: false } },
      { label: "消毒模式", values: { zjd3c: true, zdp2c: true, zm2c: false } },
      { label: "度假模式", values: { zjd3c: true, zdp2c: true, zm2c: true } },
    ],
  },
  {
    name: "附加模式",
    rows: [
      { label: "正压模式", values: { zjd3c: true, zdp2c: true, zm2c: true } },
      { label: "高静压模式", values: { zjd3c: true, zdp2c: true, zm2c: false } },
    ],
  },
  {
    name: "保修",
    rows: [
      { label: "保修政策", values: { zjd3c: "整机3年·马达8年", zdp2c: "整机3年·马达8年", zm2c: "整机3年·马达8年" }, text: true },
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
      { label: "保修政策", values: { zxh1c: "全国联保，整机3年，马达8年", zxc2c: "全国联保，整机3年，马达8年", nxc2c: "全国联保，整机3年，马达8年", nc1c: "全国联保，整机3年，马达8年" }, text: true },
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
    /* 6恒2代 控制器 */
    gen2Main: "FV-SEZTB01",
    gen2Sub: "FV-SEZTB02",
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
      { label: "除湿量", values: [81, 110], unit: "L/D" },
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
      { label: "除湿量", values: [65, 77], unit: "L/D" },
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
      { label: "除湿量", values: [45], unit: "L/D" },
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
      { label: "除湿量", values: [45], unit: "L/D" },
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

const productGrid = document.querySelector("#productGrid");
const compareFeature = document.querySelector("#compareFeature");
const compareParams = document.querySelector("#compareParams");
const selectorForm = document.querySelector("#selectorForm");
const selectorResult = document.querySelector("#selectorResult");
const sixForm = document.querySelector("#sixForm");
const sixResult = document.querySelector("#sixResult");
const modal = document.querySelector("#productModal");
const modalContent = document.querySelector("#modalContent");

function productArt(product) {
  return `
    <div class="product-art" aria-hidden="true">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
    </div>
  `;
}

function renderProducts(filterCategory = "all") {
  if (!productGrid) return;

  let filteredProducts = products;
  if (filterCategory !== "all") {
    filteredProducts = products.filter((product) => product.category === filterCategory);
  }

  const limit = Number(productGrid.dataset.limit || filteredProducts.length);
  const visibleProducts = filteredProducts.slice(0, limit);

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          ${productArt(product)}
          <div class="product-body">
            <div>
              <p class="eyebrow">${product.model}</p>
              <h3>${product.name}</h3>
            </div>
            <div class="tags">
              ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <p>${product.highlight}</p>
            <div class="card-actions">
              <button class="button primary" type="button" data-product="${product.id}">详情</button>
              <a class="button secondary" href="compare.html">对比</a>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCompare() {
  if (!compareFeature) return;

  const seriesNames = {
    zjd3c: "智净系列",
    zdp2c: "薄型系列",
    zm2c: "迷你系列",
  };

  const zjd3cFeatures = ["活性炭滤网", "御风箱（选配）", "CO₂传感器", "甲醛传感器", "旁通模式"];
  const zdp2cFeatures = ["消毒功能", "加强PM2.5过滤网", "PM2.5传感器", "自动模式", "高静压模式", "内循环"];

  function isZjd3cFeature(featureLabel) {
    return zjd3cFeatures.includes(featureLabel);
  }

  function isZdp2cFeature(featureLabel) {
    return zdp2cFeatures.includes(featureLabel);
  }

  compareFeature.innerHTML = `
    <thead>
      <tr>
        <th>分类</th>
        <th>功能</th>
        ${featureSeries
          .map(
            (s) => `
          <th>
            <span class="series-badge" data-series="${s.id}">${seriesNames[s.id]}</span>
            <div class="series-highlight">${s.highlight}</div>
          </th>
        `,
          )
          .join("")}
      </tr>
    </thead>
    ${featureCategories
      .map(
        (cat) => `
      <tbody class="feature-group">
        ${cat.rows
          .map(
            (row, ri) => `
          <tr>
            ${ri === 0 ? `<td class="feature-category" rowspan="${cat.rows.length}">${cat.name}</td>` : ""}
            <td class="feature-label">${row.label}</td>
            ${featureSeries
              .map(
                (s) => {
                  const value = renderFeatureValue(row.values[s.id], row.text);
                  let highlightClass = '';
                  if (isZjd3cFeature(row.label) && s.id === 'zjd3c') {
                    highlightClass = 'feature-zjd3c';
                  }
                  if (isZdp2cFeature(row.label) && s.id === 'zdp2c') {
                    highlightClass = 'feature-zdp2c';
                  }
                  return `
              <td class="feature-cell ${highlightClass}" data-series="${s.id}">
                ${value}
              </td>
            `;
                }
              )
              .join("")}
          </tr>
        `,
          )
          .join("")}
      </tbody>
    `,
    )
    .join("")}
  `;
}

function renderCompareParams() {
  if (!compareParams) return;

  const seriesIds = ["zjd3c", "zdp2c", "zm2c"];

  const seriesNames = {
    zjd3c: "智净系列",
    zdp2c: "薄型系列",
    zm2c: "迷你系列",
  };

  const models = [];
  for (const id of seriesIds) {
    const p = paramsMap[id];
    for (const m of p.models) {
      models.push({ seriesId: id, model: m });
    }
  }

  compareParams.innerHTML = `
    <thead>
      <tr>
        <th>参数</th>
        ${seriesIds
          .map(
            (id) => `
          <th colspan="${paramsMap[id].models.length}" style="text-align:center">${seriesNames[id]}</th>
        `,
          )
          .join("")}
      </tr>
      <tr>
        <th></th>
        ${models
          .map(
            (m) => `
          <th>${m.model}</th>
        `,
          )
          .join("")}
      </tr>
    </thead>
    <tbody>
      ${paramsMap[seriesIds[0]].specs
        .map(
          (spec, si) => `
        <tr>
          <td class="param-label">${spec.label}${spec.unit ? `（${spec.unit}）` : ""}</td>
          ${models
            .map(
              (m) => `
            <td>${paramsMap[m.seriesId].specs[si].values[paramsMap[m.seriesId].models.indexOf(m.model)]}</td>
          `,
            )
            .join("")}
        </tr>
      `,
        )
        .join("")}
    </tbody>
  `;
}

function renderFeatureValue(val, isText) {
  if (isText) return val;
  if (val === true) return `<span class="check-yes">✓</span>`;
  if (val === false) return `<span class="check-no">–</span>`;
  return val;
}

function openProduct(id) {
  if (!modal || !modalContent) return;

  const product = products.find((item) => item.id === id);
  if (!product) return;

  const params = paramsMap[id];

  modalContent.innerHTML = `
    <div class="modal-detail">
      <div class="modal-detail-header">
        <div class="modal-detail-info">
          <p class="eyebrow">${product.model}</p>
          <h2 id="modalTitle">${product.name}</h2>
          <p>${product.highlight}</p>
        </div>
        <div class="modal-detail-img">
          <img src="${product.image}" alt="${product.name}" />
        </div>
      </div>
        ${
          params
            ? `
          <div class="params-section">
            <h3 class="params-title">技术参数</h3>
            <div class="params-scroll">
              <table class="params-table">
                <thead>
                  <tr>
                    <th>参数</th>
                    ${params.models.map((m) => `<th>${m}</th>`).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${params.specs
                    .map(
                      (spec) => `
                    <tr>
                      <td class="param-label">${spec.label}${spec.unit ? `（${spec.unit}）` : ""}</td>
                      ${spec.values
                        .map(
                          (v) => `<td>${v}</td>`,
                        )
                        .join("")}
                    </tr>
                  `,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
        `
            : ""
        }
        <ul class="download-list">
          ${product.catalog ? `<li><a href="${product.catalog}" target="_blank"><span>产品样本 PDF</span><span>下载</span></a></li>` : `<li><a href="#" aria-disabled="true"><span>产品样本 PDF</span><span>待上传</span></a></li>`}
          ${product.manual ? `<li><a href="${product.manual}" target="_blank"><span>安装说明书</span><span>下载</span></a></li>` : ""}
          ${product.accessories && product.accessories.length > 0 ? product.accessories.map(acc => `<li><a href="${acc.file}" target="_blank"><span>${acc.name}说明书</span><span>下载</span></a></li>`).join("") : ""}
          ${!product.manual && (!product.accessories || product.accessories.length === 0) ? `<li><a href="#" aria-disabled="true"><span>CAD/设计资料</span><span>待上传</span></a></li>` : ""}
        </ul>
      </div>
    </div>
  `;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProduct() {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function calculateSelector() {
  if (typeof selectorForm === "undefined" || !selectorForm) return;
  updateSelxResult();
}

/* ── 功能→系列固定映射 ── */
const featureSeriesMap = {
  zoning: { label: "分区控制", seriesId: "zjd3c", seriesName: "智净御风系列" },
  disinfection: { label: "空气消毒", seriesId: "zdp2c", seriesName: "家用薄型系列" },

  compact: { label: "小巧体积", seriesId: "zm2c", seriesName: "迷你系列" },
};

function getSelxFeature() {
  const checked = document.querySelector("#selxFeatures input:checked");
  if (!checked) return null;
  return checked.value;
}

function getSelxSeriesId() {
  const feat = getSelxFeature();
  if (feat && featureSeriesMap[feat]) return featureSeriesMap[feat].seriesId;
  return null;
}

function getSelxRoomData() {
  const items = document.querySelectorAll("#freshRoomTableBody tr");
  const rooms = [];
  for (const el of items) {
    const type = el.querySelector(".r-type").value;
    const area = Number(el.querySelector(".r-area").value) || 0;
    const height = Number(el.querySelector(".r-height")?.value || 2.7);
    const ach = Number(el.querySelector(".r-ach")?.value || 1.0);
    const people = Number(el.querySelector(".r-ppl").value) || 0;
    const pplRate = Number(el.querySelector(".r-pplrate")?.value || 30);
    rooms.push({ type, area, height, ach, people, pplRate });
  }
  return rooms;
}

function pickBestModel(seriesId, requiredAirflow) {
  const data = paramsMap[seriesId];
  if (!data) return null;

  const ai = data.specs.findIndex((s) => s.label === "设备风量");
  if (ai === -1) return null;

  const product = products.find((p) => p.id === seriesId);

  let best = null;
  for (let mi = 0; mi < data.models.length; mi++) {
    const af = Number(data.specs[ai].values[mi]);
    if (!isNaN(af) && af >= requiredAirflow) {
      if (!best || af < best.airflow) {
        best = { model: data.models[mi], airflow: af, insufficient: false };
      }
    }
  }

  if (!best) {
    let maxAf = 0;
    let maxMi = 0;
    for (let mi = 0; mi < data.models.length; mi++) {
      const af = Number(data.specs[ai].values[mi]);
      if (!isNaN(af) && af > maxAf) { maxAf = af; maxMi = mi; }
    }
    best = { model: data.models[maxMi], airflow: maxAf, insufficient: true };
  }

  return { ...best, seriesId, seriesName: data.series, productName: product ? product.name : data.series };
}

function updateFreshRoomCalc(details) {
  const rows = document.querySelectorAll('#freshRoomTableBody tr');
  rows.forEach((row, idx) => {
    const qAchCell = row.querySelector('.r-qach');
    const qPplCell = row.querySelector('.r-qppl');
    const qrCell = row.querySelector('.r-qr');
    if (details[idx]) {
      if (qAchCell) qAchCell.textContent = details[idx].qAch;
      if (qPplCell) qPplCell.textContent = details[idx].qPpl;
      if (qrCell) qrCell.textContent = details[idx].qr;
    }
  });
  const foot = document.querySelector('#freshRoomTableFoot');
  if (foot && details.length > 0) {
    const total = details.reduce((s, d) => s + d.qr, 0);
    const totalRounded = Math.ceil(total / 10) * 10;
    foot.innerHTML = `<tr><td colspan="6" style="text-align:right;font-weight:700;background:#f8f9fa">合计</td><td style="font-weight:700;background:#f8f9fa">${details.reduce((s, d) => s + d.qAch, 0)}</td><td style="font-weight:700;background:#f8f9fa">${details.reduce((s, d) => s + d.qPpl, 0)}</td><td style="font-weight:700;background:#f8f9fa">${totalRounded} m³/h</td><td style="background:#f8f9fa"></td></tr>`;
  } else if (foot) {
    foot.innerHTML = '';
  }
}

function updateSelxResult() {
  const rv = document.querySelector("#selxAirflow");
  const reason = document.querySelector("#selxReason");
  const device = document.querySelector("#selxDevice");
  if (!rv || !reason || !device) return;

  const activeMode = document.querySelector("#selxMode .mode-btn.active");
  const mode = activeMode ? activeMode.dataset.mode : "simple";
  const feat = getSelxFeature();

  let requiredAirflow = 0;
  let methodText = "";

  if (mode === "simple") {
    const area = Number(document.querySelector("#simpArea")?.value || 120);
    const height = Number(document.querySelector("#simpHeight")?.value || 2.7);
    const areaRatio = Number(document.querySelector("#simpAreaRatio")?.value || 70) / 100;
    const actualArea = area * areaRatio;
    const achEl = document.querySelector("input[name='simpAch']:checked");
    let ach = Number(achEl ? achEl.value : 0.7);
    
    if (achEl?.value === "custom") {
      const customInput = document.querySelector("#simpAchCustom")?.value?.trim();
      if (customInput && !isNaN(customInput)) {
        const customAch = Number(customInput);
        if (customAch >= 0.3 && customAch <= 3) {
          ach = customAch;
        }
      }
    }

    requiredAirflow = Math.ceil((actualArea * height * ach) / 10) * 10;
    methodText = `简易选型：${area} m² × ${(areaRatio * 100).toFixed(0)}% × ${height} m × ${ach} 次/h ≈ ${requiredAirflow} m³/h`;
  } else {
    const rooms = getSelxRoomData();

    if (rooms.length === 0) {
      rv.textContent = "—";
      reason.textContent = "请添加至少一个房间";
      device.innerHTML = "";
      updateFreshRoomCalc([]);
      return;
    }

    let totalAirflow = 0;
    const details = [];

    for (const rm of rooms) {
      const qAch = Math.ceil(rm.area * rm.height * rm.ach);
      const qPpl = Math.ceil(rm.people * rm.pplRate);
      const qr = Math.max(qAch, qPpl);
      totalAirflow += qr;
      details.push({ ...rm, qAch, qPpl, qr });
    }

    requiredAirflow = Math.ceil(totalAirflow / 10) * 10;

    updateFreshRoomCalc(details);

    methodText = `JGJ/T 440-2018 标准计算：各房间取换气次数法与人数法较大值之和 = ${requiredAirflow} m³/h`;
  }

  rv.textContent = `${requiredAirflow} m³/h`;
  reason.innerHTML = methodText;

  /* ── 推荐型号：功能→固定系列 → 匹配合适风量 ── */
  let targetSeriesId = getSelxSeriesId();
  if (!targetSeriesId) targetSeriesId = "zjd3c";

  const best = pickBestModel(targetSeriesId, requiredAirflow);

  if (!best) {
    device.innerHTML = `<div class="selx-empty">未找到匹配设备</div>`;
    return;
  }

  const note = best.insufficient
    ? '<br><span style="font-size:11px;color:var(--warning)">（最大风量略低，可考虑多台并联）</span>'
    : "";

  device.innerHTML = `
    <div class="selx-device-item">
      <span class="dev-badge">${best.seriesName}</span>
      <div class="dev-info">
        <div class="dev-name">${best.productName}${note}</div>
        <div class="dev-model">${best.model}</div>
      </div>
      <div class="dev-airflow">${best.airflow} m³/h</div>
      <button class="button primary dev-detail-btn" onclick="openProduct('${best.seriesId}')">查看详情</button>
    </div>
  `;
}

/* ── 六恒系统选型 ── */
function calculateSix() {
  if (!sixForm || !sixResult) return;

  const data = new FormData(sixForm);
  const area = Number(data.get("area"));
  const rooms = Number(data.get("rooms"));
  const priority = data.get("priority");
  const level = area > 220 || rooms >= 6 ? "别墅/大宅方案" : area > 120 ? "改善型全屋方案" : "精装平层方案";
  const humidityText = priority === "humidity" ? "重点配置调湿能力" : "按舒适均衡配置";
  const quietText = priority === "quiet" ? "优先控制设备噪声与风口风速" : "兼顾噪声、风量和效率";

  sixResult.innerHTML = `
    <h3>${level}</h3>
    <div class="result-number">${Math.ceil(area / rooms)} m²/间</div>
    <p>${humidityText}，${quietText}。后续可加入地区气候、外机位、层高和末端形式来生成更具体的设备清单。</p>
    <ul class="recommend-list">
      <li><strong>系统组成</strong><br />空调模块 + 新风模块 + 调湿模块 + 智能控制</li>
      <li><strong>资料位置</strong><br />六恒页面可单独放系统样本、调试手册和案例图。</li>
    </ul>
  `;
}

document.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-product]");
  if (detailButton) openProduct(detailButton.dataset.product);
  if (event.target.closest("[data-close]")) closeProduct();
  
  const categoryTab = event.target.closest("[data-category]");
  if (categoryTab) {
    document.querySelectorAll(".category-tab").forEach((tab) => tab.classList.remove("active"));
    categoryTab.classList.add("active");
    renderProducts(categoryTab.dataset.category);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProduct();
});

sixForm?.addEventListener("input", calculateSix);

/* ── 新风选型工具事件绑定 ── */
(function initSelxTool() {
  const modeTabs = document.querySelector("#selxMode");
  const simpleMode = document.querySelector("#selxSimple");
  const standardMode = document.querySelector("#selxStandard");
  const addRoomBtn = document.querySelector("#roomAddBtn");
  const roomTableBody = document.querySelector("#freshRoomTableBody");
  const selxLayout = document.querySelector(".selx-layout");

  if (!modeTabs || !simpleMode || !standardMode) return;

  modeTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".mode-btn");
    if (!tab) return;
    modeTabs.querySelectorAll(".mode-btn").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    simpleMode.style.display = tab.dataset.mode === "simple" ? "block" : "none";
    standardMode.style.display = tab.dataset.mode === "standard" ? "block" : "none";
    if (selxLayout) {
      if (tab.dataset.mode === "standard") {
        selxLayout.classList.add("selx-layout-vertical");
      } else {
        selxLayout.classList.remove("selx-layout-vertical");
      }
    }
    updateSelxResult();
  });

  const simpAchCustom = document.querySelector("#simpAchCustom");
  const simpAchCustomRadio = document.querySelector('input[name="simpAch"][value="custom"]');
  
  document.querySelectorAll("#selxAchs input[type='radio']").forEach((radio) => {
    radio.addEventListener("change", () => {
      if (simpAchCustom && radio.value === "custom") {
        simpAchCustom.focus();
      }
      updateSelxResult();
    });
  });
  
  simpAchCustom?.addEventListener("focus", () => {
    if (simpAchCustomRadio) {
      simpAchCustomRadio.checked = true;
      updateSelxResult();
    }
  });
  
  simpAchCustom?.addEventListener("input", updateSelxResult);

  let roomIdx = 0;

  function addRoom(data) {
    const type = data?.type !== undefined ? data.type : "客厅";
    const area = data?.area !== undefined ? data.area : 30;
    const height = data?.height ?? 2.7;
    const ach = data?.ach ?? 1.0;
    const ppl = data?.people ?? 2;
    const pplRate = data?.pplRate ?? 30;

    const tr = document.createElement("tr");
    tr.dataset.idx = roomIdx;
    tr.innerHTML = `
      <td><input type="text" class="r-type" value="${type}" placeholder="房间名称" style="width:90px" /></td>
      <td><input type="number" class="r-area" min="5" max="200" value="${area}" /></td>
      <td><input type="number" class="r-height" min="2.2" max="6" step="0.1" value="${height}" /></td>
      <td><input type="number" class="r-ach" min="0.3" max="3" step="0.1" value="${ach}" /></td>
      <td><input type="number" class="r-ppl" min="0" max="10" value="${ppl}" /></td>
      <td><input type="number" class="r-pplrate" min="10" max="100" step="5" value="${pplRate}" /></td>
      <td class="r-qach calc-cell">—</td>
      <td class="r-qppl calc-cell">—</td>
      <td class="r-qr calc-cell" style="font-weight:700">—</td>
      <td><button type="button" class="room-del" title="删除房间">×</button></td>
    `;
    roomTableBody.appendChild(tr);
    roomIdx++;
    tr.querySelector(".room-del").addEventListener("click", () => { tr.remove(); updateSelxResult(); });
    tr.querySelectorAll("input, select").forEach((el) => el.addEventListener("input", updateSelxResult));
    updateSelxResult();
  }

  addRoom({ type: "", area: "", height: 2.7, ach: 1.0, people: 2, pplRate: 30 });
  addRoom({ type: "", area: "", height: 2.7, ach: 1.0, people: 2, pplRate: 30 });
  addRoom({ type: "", area: "", height: 2.7, ach: 1.0, people: 1, pplRate: 30 });

  addRoomBtn?.addEventListener("click", () => addRoom());

  document.querySelectorAll("#selxFeatures input").forEach((cb) => cb.addEventListener("change", updateSelxResult));
  document.querySelectorAll("#simpArea, #simpHeight, #simpAreaRatio").forEach((el) => el.addEventListener("input", updateSelxResult));
  document.querySelectorAll("#selxAchs input").forEach((el) => el.addEventListener("change", updateSelxResult));

  updateSelxResult();
})();

renderProducts();
renderCompare();
renderCompareParams();
calculateSelector();
calculateSix();

function initHeroVideo() {
  const video = document.querySelector('.hero-video');
  const videoList = document.querySelector('.video-list');
  const playBtn = document.querySelector('.play-btn');
  const nextBtn = document.querySelector('.next-btn');
  const volBtn = document.querySelector('.vol-btn');
  const volSlider = document.querySelector('.vol-slider');
  const fsBtn = document.querySelector('.fs-btn');
  
  if (!video || !videoList) return;
  
  const videos = Array.from(videoList.querySelectorAll('span')).map(el => el.textContent.trim());
  if (videos.length <= 1) return;
  
  let currentIndex = Math.floor(Math.random() * videos.length);
  
  video.muted = true;
  
  const source = video.querySelector('source');
  if (source) {
    source.src = videos[currentIndex];
    video.load();
  }
  
  function playNextVideo() {
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * videos.length);
    }
    currentIndex = nextIndex;
    
    const source = video.querySelector('source');
    if (source) {
      source.src = videos[currentIndex];
      video.load();
      video.play();
      updatePlayIcon();
    }
  }
  
  video.addEventListener('ended', playNextVideo);
  
  video.addEventListener('loadeddata', () => {
    video.play();
    updatePlayIcon();
  });
  
  playBtn?.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    updatePlayIcon();
  });
  
  nextBtn?.addEventListener('click', () => {
    playNextVideo();
  });
  
  volBtn?.addEventListener('click', () => {
    video.muted = !video.muted;
    updateVolumeIcon();
  });
  
  volSlider?.addEventListener('input', (e) => {
    video.volume = e.target.value / 100;
    video.muted = false;
    updateVolumeIcon();
  });
  
  fsBtn?.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  });
  
  document.addEventListener('fullscreenchange', () => {
    updateFullscreenIcon();
  });
  
  function updatePlayIcon() {
    if (!playBtn) return;
    const playIcon = playBtn.querySelector('.play-icon');
    const pauseIcon = playBtn.querySelector('.pause-icon');
    if (video.paused) {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    } else {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    }
  }
  
  function updateVolumeIcon() {
    if (!volBtn) return;
    const volOn = volBtn.querySelector('.vol-on');
    const volOff = volBtn.querySelector('.vol-off');
    if (video.muted) {
      volOn.style.display = 'none';
      volOff.style.display = 'block';
    } else {
      volOn.style.display = 'block';
      volOff.style.display = 'none';
    }
  }
  
  function updateFullscreenIcon() {
    if (!fsBtn) return;
    const fsOn = fsBtn.querySelector('.fs-on');
    const fsOff = fsBtn.querySelector('.fs-off');
    if (document.fullscreenElement) {
      fsOn.style.display = 'none';
      fsOff.style.display = 'block';
    } else {
      fsOn.style.display = 'block';
      fsOff.style.display = 'none';
    }
  }
  
  updateVolumeIcon();
}

initHeroVideo();

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

function updateAcTable() {
  const outdoorSeries = document.querySelector('#acOutdoorSeries')?.value || 'S7';
  const overRatio = parseFloat(document.querySelector('#acOverRatio')?.value || '1.2');
  
  const tableBody = document.querySelector('#acRoomTableBody');
  
  if (!tableBody) return;
  
  const rows = tableBody.querySelectorAll('tr:not(.ac-system-total)');
  const roomData = [];
  
  rows.forEach(row => {
    const name = row.querySelector('.ac-r-name')?.value || '';
    const floor = row.querySelector('.ac-r-floor')?.value || '';
    const area = parseFloat(row.querySelector('.ac-r-area')?.value || '0');
    const load = parseFloat(row.querySelector('.ac-r-load')?.value || '220');
    const series = row.querySelector('.ac-r-series')?.value || document.querySelector('#acIndoorSeries')?.value || '暗藏管道式_超薄_100×nanoe';
    const modelSelect = row.querySelector('.ac-r-model-select');
    const model = modelSelect?.value || '';
    const modelSource = modelSelect?.dataset?.modelSource || '';
    const countSelect = row.querySelector('.ac-r-count');
    const count = parseInt(countSelect?.value || '1', 10);
    const countSource = countSelect?.dataset?.countSource || '';
    const sysid = parseInt(row.querySelector('.ac-r-sysid')?.value || '1', 10);
    const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
    const outdoorModel = outdoorSelect?.value || '';
    const outdoorSource = outdoorSelect?.dataset?.outdoorSource || 'auto';
    
    const requiredCooling = area > 0 ? (area * load) / 1000 : 0;
      
      let unit = null;
      let finalCount = count;
      let isAuto = true;
      let isAutoCount = true;
      
      if (model && modelSource === 'user') {
        unit = getIndoorUnitByModel(model);
        isAuto = false;
        if (countSource === 'user') {
          finalCount = count;
          isAutoCount = false;
        } else {
          finalCount = Math.ceil(requiredCooling / (unit?.coolingCapacity || 1));
          if (finalCount < 1) finalCount = 1;
          if (finalCount > 5) finalCount = 5;
          isAutoCount = true;
        }
      } else if (countSource === 'user' && model) {
        unit = getIndoorUnitByModel(model);
        finalCount = count;
        isAuto = modelSource === 'user';
        isAutoCount = false;
      } else if (area > 0) {
        const combo = findBestIndoorCombo(series, requiredCooling);
        unit = combo.unit;
        finalCount = combo.count;
        isAuto = true;
        isAutoCount = true;
      }
      
      roomData.push({
        name, floor, area, load, series, model: unit?.model || '', count: finalCount, sysid,
        requiredCooling,
        unit,
        totalCapacity: unit && area > 0 ? unit.coolingCapacity * finalCount : 0,
        outdoorModel,
        outdoorSource,
        isAuto,
        isAutoCount,
        modelSource: isAuto ? 'auto' : 'user',
        countSource: isAutoCount ? 'auto' : 'user'
      });
  });
  
  const sysGroups = {};
  roomData.forEach(r => {
    if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
    sysGroups[r.sysid].push(r);
  });
  
  Object.keys(sysGroups).forEach(sysid => {
    const group = sysGroups[sysid];
    const groupCooling = group.reduce((sum, r) => sum + r.requiredCooling * r.count, 0);
    const groupCapacity = group.reduce((sum, r) => sum + r.totalCapacity, 0);
    
    const firstRoom = group[0];
    let outdoorUnit = null;
    if (firstRoom && firstRoom.outdoorModel && firstRoom.outdoorSource === 'user') {
      outdoorUnit = getOutdoorUnitByModel(firstRoom.outdoorModel);
    }
    if (!outdoorUnit) {
      outdoorUnit = findOutdoorUnit(outdoorSeries, groupCapacity, overRatio);
    }
    
    group.outdoorUnit = outdoorUnit;
    group.totalCooling = groupCooling;
    group.totalCapacity = groupCapacity;
  });
  
  const sysIds = Object.keys(sysGroups).sort((a, b) => a - b);
  let html = '';
  let totalCooling = 0;
  let totalCapacity = 0;
  
  roomData.forEach(r => {
    totalCooling += r.requiredCooling * r.count;
    totalCapacity += r.totalCapacity;
  });
  
  sysIds.forEach((sysid, sysIdx) => {
    const group = sysGroups[sysid];
    const outdoorUnit = group.outdoorUnit;
    const isLastSystem = sysIdx === sysIds.length - 1;
    
      group.forEach((r, idx) => {
        const humidMods = group.humidModules || [];
        const totalRows = group.length + humidMods.length;
        const rowspan = idx === 0 ? `rowspan="${totalRows}"` : '';
      const indoorOptions = getIndoorUnitOptions(r.series, r.model);
      const actualCooling = r.unit ? r.unit.coolingCapacity * r.count : 0;
      const isInsufficient = r.requiredCooling > 0 && actualCooling < r.requiredCooling;
      const actualCoolingPerArea = (r.unit && r.area > 0) ? (r.unit.coolingCapacity * r.count / r.area * 1000) : 0;
      const outdoorOptions = idx === 0 && outdoorUnit ? getOutdoorUnitOptions(outdoorSeries, outdoorUnit.model) : '';
      
      html += `
        <tr data-name="${r.name}" data-floor="${r.floor}" data-area="${r.area}" data-load="${r.load}" data-series="${r.series}" data-count="${r.count}" data-sysid="${r.sysid}">
          <td><input type="text" class="ac-r-floor" placeholder="楼层" value="${r.floor}" /></td>
          <td><input type="text" class="ac-r-name" placeholder="房间名称" value="${r.name}" /></td>
          <td><input type="number" class="ac-r-area" min="5" max="200" value="${r.area}" /></td>
          <td><input type="number" class="ac-r-load" min="80" max="300" value="${r.load}" /></td>
          <td class="ac-r-required">${r.requiredCooling.toFixed(2)}</td>
          <td>
            <select class="ac-r-series">
              <option value="暗藏管道式_超薄_100×nanoe" ${r.series === '暗藏管道式_超薄_100×nanoe' ? 'selected' : ''}>超薄_100×nanoe</option>
              <option value="暗藏管道式_超薄_100×nanoe_内置排水泵" ${r.series === '暗藏管道式_超薄_100×nanoe_内置排水泵' ? 'selected' : ''}>超薄_100×nanoe_内置排水泵</option>
              <option value="暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网" ${r.series === '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网' ? 'selected' : ''}>超薄_100×nanoe_内置排水泵_PM2.5滤网</option>
              <option value="暗藏管道式_超薄_100×nanoe_PM2.5滤网" ${r.series === '暗藏管道式_超薄_100×nanoe_PM2.5滤网' ? 'selected' : ''}>超薄_100×nanoe_PM2.5滤网</option>
              <option value="厨卫专用空调" ${r.series === '厨卫专用空调' ? 'selected' : ''}>厨卫专用空调</option>
              <option value="暗藏管道式_中静压_nanoe_内置排水泵" ${r.series === '暗藏管道式_中静压_nanoe_内置排水泵' ? 'selected' : ''}>中静压_nanoe_内置排水泵</option>
              <option value="暗藏管道式_中静压_内置排水泵" ${r.series === '暗藏管道式_中静压_内置排水泵' ? 'selected' : ''}>中静压_内置排水泵</option>
              <option value="暗藏管道式_中静压" ${r.series === '暗藏管道式_中静压' ? 'selected' : ''}>中静压</option>
            </select>
          </td>
          <td>
            <select class="ac-r-model-select" data-model-source="${r.modelSource || (r.isAuto ? 'auto' : 'user')}">
              ${indoorOptions || '<option value="">未匹配</option>'}
            </select>
          </td>
          <td>
            <select class="ac-r-count" data-count-source="${r.countSource || (r.isAutoCount ? 'auto' : 'user')}">
              <option value="1" ${r.count === 1 ? 'selected' : ''}>1</option>
              <option value="2" ${r.count === 2 ? 'selected' : ''}>2</option>
              <option value="3" ${r.count === 3 ? 'selected' : ''}>3</option>
              <option value="4" ${r.count === 4 ? 'selected' : ''}>4</option>
              <option value="5" ${r.count === 5 ? 'selected' : ''}>5</option>
            </select>
          </td>
          <td class="ac-r-capacity">${r.unit ? (r.unit.coolingCapacity * r.count).toFixed(1) : '-'}</td>
          <td class="ac-r-actual${isInsufficient ? ' insufficient' : ''}">${actualCoolingPerArea ? actualCoolingPerArea.toFixed(0) : '-'}</td>
          <td>
            <select class="ac-r-sysid">
              ${[1,2,3,4,5].map(n => `<option value="${n}" ${r.sysid === n ? 'selected' : ''}>${n}</option>`).join('')}
            </select>
          </td>
          ${rowspan ? `<td class="ac-r-outdoor" ${rowspan}>
            <select class="ac-r-outdoor-select" data-outdoor-source="${r.outdoorSource || 'auto'}">
              ${outdoorOptions || '<option value="">未匹配</option>'}
            </select>
          </td>` : ''}
          ${rowspan ? `<td class="ac-r-outdoor-capacity" ${rowspan}>${outdoorUnit ? outdoorUnit.coolingCapacity : '-'}</td>` : ''}
          <td><button type="button" class="ac-del-btn" title="删除">×</button></td>
        </tr>`;
    });
    
    const isOverRatioInsufficient = outdoorUnit?.insufficient === true;
    const overRatioPct = outdoorUnit ? ((group.totalCapacity / outdoorUnit.coolingCapacity) * 100) : 0;
    const overRatioStr = outdoorUnit ? overRatioPct.toFixed(0) + '%' : '-';
    const overRatioStyle = isOverRatioInsufficient
      ? 'font-weight:700;background:#fef2f2;color:#ef4444;border-color:#fecaca'
      : 'font-weight:700;background:#f8f9fa';
    const overRatioWarning = isOverRatioInsufficient
      ? `<br><span style="font-size:11px;color:#ef4444;font-weight:400;display:block;margin-top:2px">⚠ 超出最大外机冷量 ${outdoorUnit.coolingCapacity}kW</span>`
      : '';

    html += `
      <tr class="ac-system-total">
        <td colspan="4" style="text-align:right;font-weight:700;background:#f8f9fa">系统${sysid}合计</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="font-weight:700;background:#f8f9fa">${group.totalCapacity.toFixed(1)} kW</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td colspan="2" style="${overRatioStyle}">超配率: ${overRatioStr}${overRatioWarning}</td>
        <td style="background:#f8f9fa"></td>
      </tr>`;
  });
  
  tableBody.innerHTML = html;
  
  tableBody.querySelectorAll('.ac-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('tr').remove();
      updateAcTable();
    });
  });
  
  tableBody.querySelectorAll('input, select').forEach(el => {
    el.addEventListener("change", function() {
      if (this.classList.contains('ac-r-series')) {
        const row = this.closest('tr');
        const modelSelect = row.querySelector('.ac-r-model-select');
        const series = this.value;
        const options = getIndoorUnitOptions(series, '');
        modelSelect.innerHTML = options || '<option value="">未匹配</option>';
        modelSelect.dataset.modelSource = 'auto';
        const countSelect = row.querySelector('.ac-r-count');
        if (countSelect) countSelect.dataset.countSource = 'auto';
        const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
        if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
      }
      if (this.classList.contains('ac-r-model-select')) {
        this.dataset.modelSource = 'user';
        const row = this.closest('tr');
        const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
        if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
      }
      if (this.classList.contains('ac-r-count')) {
        this.dataset.countSource = 'user';
        const row = this.closest('tr');
        const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
        if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
      }
      if (this.classList.contains('ac-r-sysid')) {
        const row = this.closest('tr');
        const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
        if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
      }
      if (this.classList.contains('ac-r-outdoor-select')) {
        this.dataset.outdoorSource = 'user';
      }
      updateAcTable();
    });
    if (el.tagName === "INPUT") {
      el.addEventListener("blur", function() {
        if (this.classList.contains('ac-r-area') || this.classList.contains('ac-r-load')) {
          const row = this.closest('tr');
          const modelSelect = row.querySelector('.ac-r-model-select');
          if (modelSelect) modelSelect.dataset.modelSource = 'auto';
          const countSelect = row.querySelector('.ac-r-count');
          if (countSelect) countSelect.dataset.countSource = 'auto';
          const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
          if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
        }
        updateAcTable();
      });
    }
  });
  
  const tableFoot = document.querySelector('#acTableFoot');
  if (tableFoot) {
    tableFoot.innerHTML = '';
  }
}

function initAcSelector() {
  const tableBody = document.querySelector('#acRoomTableBody');
  const defaultIndoorSeries = document.querySelector('#acIndoorSeries')?.value || '暗藏管道式_超薄_100×nanoe';
  
  if (!tableBody) return;
  
  const indoorSeriesOptions = `
    <select class="ac-r-series">
      <option value="暗藏管道式_超薄_100×nanoe">超薄_100×nanoe</option>
      <option value="暗藏管道式_超薄_100×nanoe_内置排水泵">超薄_100×nanoe_内置排水泵</option>
      <option value="暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网">超薄_100×nanoe_内置排水泵_PM2.5滤网</option>
      <option value="暗藏管道式_超薄_100×nanoe_PM2.5滤网">超薄_100×nanoe_PM2.5滤网</option>
      <option value="厨卫专用空调">厨卫专用空调</option>
      <option value="暗藏管道式_中静压_nanoe_内置排水泵">中静压_nanoe_内置排水泵</option>
      <option value="暗藏管道式_中静压_内置排水泵">中静压_内置排水泵</option>
      <option value="暗藏管道式_中静压">中静压</option>
    </select>
  `;
  
  const sysIdOptions = `
    <select class="ac-r-sysid">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  `;
  
  const countOptions = `
    <select class="ac-r-count">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  `;
  
  function addRoom(name = '', floor = '', area = 20, load = 220, series = defaultIndoorSeries, count = 1, sysid = 1) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="text" class="ac-r-floor" placeholder="楼层" value="${floor}" /></td>
      <td><input type="text" class="ac-r-name" placeholder="房间名称" value="${name}" /></td>
      <td><input type="number" class="ac-r-area" min="5" max="200" value="${area}" /></td>
      <td><input type="number" class="ac-r-load" min="80" max="300" value="${load}" /></td>
      <td class="ac-r-required">-</td>
      <td>
        <select class="ac-r-series">
          <option value="暗藏管道式_超薄_100×nanoe">超薄_100×nanoe</option>
          <option value="暗藏管道式_超薄_100×nanoe_内置排水泵">超薄_100×nanoe_内置排水泵</option>
          <option value="暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网">超薄_100×nanoe_内置排水泵_PM2.5滤网</option>
          <option value="暗藏管道式_超薄_100×nanoe_PM2.5滤网">超薄_100×nanoe_PM2.5滤网</option>
          <option value="厨卫专用空调">厨卫专用空调</option>
          <option value="暗藏管道式_中静压_nanoe_内置排水泵">中静压_nanoe_内置排水泵</option>
          <option value="暗藏管道式_中静压_内置排水泵">中静压_内置排水泵</option>
          <option value="暗藏管道式_中静压">中静压</option>
        </select>
      </td>
      <td>
        <select class="ac-r-model-select" data-model-source="auto">
          <option value="">自动选型中...</option>
        </select>
      </td>
      <td>${countOptions}</td>
      <td class="ac-r-capacity">-</td>
      <td class="ac-r-actual">-</td>
      <td>${sysIdOptions}</td>
      <td class="ac-r-outdoor">
        <select class="ac-r-outdoor-select">
          <option value="">计算中...</option>
        </select>
      </td>
      <td class="ac-r-outdoor-capacity">-</td>
      <td><button type="button" class="ac-del-btn" title="删除">×</button></td>
    `;
    
    const seriesSelect = row.querySelector('.ac-r-series');
    const countSelect = row.querySelector('.ac-r-count');
    const sysidSelect = row.querySelector('.ac-r-sysid');
    const modelSelect = row.querySelector('.ac-r-model-select');
    
    if (seriesSelect) seriesSelect.value = series;
    if (countSelect) countSelect.value = String(count);
    if (sysidSelect) sysidSelect.value = String(sysid);
    
    row.querySelector('.ac-del-btn').addEventListener('click', () => {
      row.remove();
      updateAcTable();
    });
    
    row.querySelectorAll('input, select').forEach(el => {
      el.addEventListener("change", function() {
        if (this.classList.contains('ac-r-series')) {
          const r = this.closest('tr');
          const ms = r.querySelector('.ac-r-model-select');
          const opts = getIndoorUnitOptions(this.value, '');
          if (ms) {
            ms.innerHTML = opts || '<option value="">未匹配</option>';
            ms.dataset.modelSource = 'auto';
          }
          const cs = r.querySelector('.ac-r-count');
          if (cs) cs.dataset.countSource = 'auto';
        }
        if (this.classList.contains('ac-r-model-select')) {
          this.dataset.modelSource = 'user';
        }
        if (this.classList.contains('ac-r-count')) {
          this.dataset.countSource = 'user';
        }
        updateAcTable();
      });
      if (el.tagName === "INPUT") {
        el.addEventListener("blur", function() {
          if (this.classList.contains('ac-r-area') || this.classList.contains('ac-r-load')) {
            const r = this.closest('tr');
            const ms = r.querySelector('.ac-r-model-select');
            if (ms) ms.dataset.modelSource = 'auto';
            const cs = r.querySelector('.ac-r-count');
            if (cs) cs.dataset.countSource = 'auto';
            const os = r.querySelector('.ac-r-outdoor-select');
            if (os) os.dataset.outdoorSource = 'auto';
          }
          updateAcTable();
        });
      }
    });
    
    row.querySelector('.ac-r-outdoor-select')?.addEventListener('change', function() {
      this.dataset.outdoorSource = 'user';
      updateAcTable();
    });
    
    tableBody.appendChild(row);
    updateAcTable();
  }
  
  document.querySelectorAll('#acIndoorSeries, #acOutdoorSeries, #acOverRatio').forEach(el => {
    el.addEventListener('change', updateAcTable);
  });
  
  const acAddRoomBtn = document.querySelector('#acAddRoomBtn');
  if (acAddRoomBtn) {
    acAddRoomBtn.addEventListener('click', () => {
      const currentDefaultSeries = document.querySelector('#acIndoorSeries')?.value || '暗藏管道式_超薄_100×nanoe';
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td><input type="text" class="ac-r-floor" placeholder="楼层" value="" /></td>
        <td><input type="text" class="ac-r-name" placeholder="房间名称" value="" /></td>
        <td><input type="number" class="ac-r-area" min="5" max="200" value="20" /></td>
        <td><input type="number" class="ac-r-load" min="80" max="300" value="220" /></td>
        <td class="ac-r-required">-</td>
        <td>
          <select class="ac-r-series">
            <option value="暗藏管道式_超薄_100×nanoe">超薄_100×nanoe</option>
            <option value="暗藏管道式_超薄_100×nanoe_内置排水泵">超薄_100×nanoe_内置排水泵</option>
            <option value="暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网">超薄_100×nanoe_内置排水泵_PM2.5滤网</option>
            <option value="暗藏管道式_超薄_100×nanoe_PM2.5滤网">超薄_100×nanoe_PM2.5滤网</option>
            <option value="厨卫专用空调">厨卫专用空调</option>
            <option value="暗藏管道式_中静压_nanoe_内置排水泵">中静压_nanoe_内置排水泵</option>
            <option value="暗藏管道式_中静压_内置排水泵">中静压_内置排水泵</option>
            <option value="暗藏管道式_中静压">中静压</option>
          </select>
        </td>
        <td>
          <select class="ac-r-model-select" data-model-source="auto">
            <option value="">自动选型中...</option>
          </select>
        </td>
        <td>
          <select class="ac-r-count">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
        <td class="ac-r-capacity">-</td>
        <td class="ac-r-actual">-</td>
        <td>
          <select class="ac-r-sysid">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
        <td class="ac-r-outdoor">
          <select class="ac-r-outdoor-select">
            <option value="">计算中...</option>
          </select>
        </td>
        <td class="ac-r-outdoor-capacity">-</td>
        <td><button type="button" class="ac-del-btn" title="删除">×</button></td>
      `;
      const seriesSelect = newRow.querySelector('.ac-r-series');
      if (seriesSelect) seriesSelect.value = currentDefaultSeries;
      newRow.querySelector('.ac-del-btn').addEventListener('click', () => {
        newRow.remove();
        updateAcTable();
      });
      newRow.querySelectorAll('input, select').forEach(el => {
        el.addEventListener("change", function() {
          if (this.classList.contains('ac-r-series')) {
            const r = this.closest('tr');
            const ms = r.querySelector('.ac-r-model-select');
            const opts = getIndoorUnitOptions(this.value, '');
            if (ms) {
              ms.innerHTML = opts || '<option value="">未匹配</option>';
              ms.dataset.modelSource = 'auto';
            }
            const cs = r.querySelector('.ac-r-count');
            if (cs) cs.dataset.countSource = 'auto';
          }
          if (this.classList.contains('ac-r-model-select')) {
            this.dataset.modelSource = 'user';
          }
          if (this.classList.contains('ac-r-count')) {
            this.dataset.countSource = 'user';
          }
          updateAcTable();
        });
        if (el.tagName === "INPUT") {
          el.addEventListener("blur", function() {
            if (this.classList.contains('ac-r-area') || this.classList.contains('ac-r-load')) {
              const r = this.closest('tr');
              const ms = r.querySelector('.ac-r-model-select');
              if (ms) ms.dataset.modelSource = 'auto';
              const cs = r.querySelector('.ac-r-count');
              if (cs) cs.dataset.countSource = 'auto';
              const os = r.querySelector('.ac-r-outdoor-select');
              if (os) os.dataset.outdoorSource = 'auto';
            }
            updateAcTable();
          });
        }
      });
      
      newRow.querySelector('.ac-r-outdoor-select')?.addEventListener('change', function() {
        this.dataset.outdoorSource = 'user';
        updateAcTable();
      });
      const lastTotalRow = tableBody.querySelector('.ac-system-total:last-child');
      if (lastTotalRow) {
        lastTotalRow.parentNode.insertBefore(newRow, lastTotalRow);
      } else {
        tableBody.appendChild(newRow);
      }
      updateAcTable();
    });
  }
  
  addRoom('', '', '', 220, defaultIndoorSeries, 1, 1);
  addRoom('', '', '', 220, defaultIndoorSeries, 1, 1);
  addRoom('', '', '', 220, defaultIndoorSeries, 1, 1);
  
  updateAcTable();
}

document.addEventListener('DOMContentLoaded', initAcSelector);

function initSixSmartSelector() {
  const smartModule = document.querySelector('#mod-sixSmart');
  if (!smartModule) return;

  const tabs = smartModule.querySelectorAll('.selx-tab');
  const contents = smartModule.querySelectorAll('.selx-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      contents.forEach(c => c.style.display = 'none');
      const target = smartModule.querySelector('#tab-' + tab.dataset.tab);
      if (target) target.style.display = 'block';
      if (tab.dataset.tab === 'summary') updateSixSummary();
    });
  });

  initSixFresh();
  initSixAc();
  initSixFloorHeat();
}

function initSixFresh() {
  const body = document.querySelector('#smartFreshBody');
  const addBtn = document.querySelector('#smartFreshAddBtn');
  if (!body || !addBtn) return;

  function calcRoom(row) {
    const area = Number(row.querySelector('.sf-area')?.value || 0);
    const height = Number(row.querySelector('.sf-height')?.value || 2.7);
    const ach = Number(row.querySelector('.sf-ach')?.value || 1.0);
    const qAch = Math.ceil((area * height * ach) / 10) * 10;
    const vents = Math.max(1, Math.ceil(qAch / 40));
    row.querySelector('.sf-qr').textContent = qAch > 0 ? qAch : '—';
    row.querySelector('.sf-vents').textContent = qAch > 0 ? vents : '—';
    return { area, height, ach, qAch, vents };
  }

  function rebuildSystems() {
    const rows = body.querySelectorAll('tr:not(.sf-system-row)');
    const rooms = [];
    rows.forEach(row => {
      const floor = row.querySelector('.sf-floor')?.value || '1';
      const sysid = parseInt(row.querySelector('.sf-sysid')?.value || '1', 10);
      const name = row.querySelector('.sf-name')?.value || '';
      const area = Number(row.querySelector('.sf-area')?.value || 0);
      const height = Number(row.querySelector('.sf-height')?.value || 2.7);
      const ach = Number(row.querySelector('.sf-ach')?.value || 1.0);
      const qAch = Math.ceil((area * height * ach) / 10) * 10;
      rooms.push({ floor, sysid, name, area, height, ach, qAch, _row: row });
    });

    const sysGroups = {};
    rooms.forEach(r => {
      const key = r.sysid;
      if (!sysGroups[key]) sysGroups[key] = [];
      sysGroups[key].push(r);
    });

    const systems = Object.keys(sysGroups).sort((a, b) => a - b).map(sysid => {
      const group = sysGroups[sysid];
      const totalAirflow = group.reduce((s, r) => s + r.qAch, 0);
      return { id: Number(sysid), rooms: group, totalAirflow };
    });

    // 还原所有行的"设计总风量"单元格（上一轮可能已被 rowspan 吸收）
    body.querySelectorAll('tr').forEach(r => {
      if (r.querySelector('.sf-total-airflow')) return;
      const td = document.createElement('td');
      td.className = 'sf-total-airflow calc-cell';
      const lastTd = r.querySelector('td:last-child');
      if (lastTd) r.insertBefore(td, lastTd);
      else r.appendChild(td);
    });

    // 重置所有"设计总风量"单元格
    body.querySelectorAll('.sf-total-airflow').forEach(td => {
      td.removeAttribute('rowspan');
      td.textContent = '';
      td.style.fontWeight = '';
      td.style.verticalAlign = '';
      td.style.color = '';
    });

    // 重新按 sysid 顺序排列 DOM 行，保证同一系统行在 DOM 中连续
    systems.forEach(sys => {
      sys.rooms.forEach(r => body.appendChild(r._row));
    });

    // 合并设计总风量单元格：首格 rowspan，删除其余被吸收的单元
    systems.forEach(sys => {
      if (sys.rooms.length === 0) return;
      const firstTd = sys.rooms[0]._row.querySelector('.sf-total-airflow');
      if (!firstTd) return;
      firstTd.rowSpan = sys.rooms.length;
      firstTd.textContent = sys.totalAirflow;
      firstTd.style.fontWeight = '700';
      firstTd.style.verticalAlign = 'middle';
      firstTd.style.color = 'var(--primary)';
      for (let i = 1; i < sys.rooms.length; i++) {
        const td = sys.rooms[i]._row.querySelector('.sf-total-airflow');
        if (td) td.remove();
      }
    });

    renderSystems(systems);
    updateSixSummary();
  }

  function pickFanModel(airflow, fanType) {
    const seriesKey = fanType;
    const seriesIds = smartSelectorData.fanTypes[seriesKey]?.series;
    const seriesIdList = Array.isArray(seriesIds) ? seriesIds : [seriesIds];
    for (const sid of seriesIdList) {
      const data = paramsMap[sid];
      if (!data) continue;
      const ai = data.specs.findIndex(s => s.label === "设备风量");
      if (ai === -1) continue;
      for (let mi = 0; mi < data.models.length; mi++) {
        const af = Number(data.specs[ai].values[mi]);
        if (!isNaN(af) && af >= airflow) {
          return { seriesId: sid, model: data.models[mi], airflow: af, seriesName: data.series };
        }
      }
    }
    const sid = seriesIdList[0];
    const data = paramsMap[sid];
    if (data) {
      const ai = data.specs.findIndex(s => s.label === "设备风量");
      if (ai !== -1) {
        let maxAf = 0, maxMi = 0;
        for (let mi = 0; mi < data.models.length; mi++) {
          const af = Number(data.specs[ai].values[mi]);
          if (!isNaN(af) && af > maxAf) { maxAf = af; maxMi = mi; }
        }
        return { seriesId: sid, model: data.models[maxMi], airflow: maxAf, seriesName: data.series, insufficient: true };
      }
    }
    return null;
  }

  function getHumidOptions(airflow) {
    const m = smartSelectorData.humidModuleMap;
    const keys = Object.keys(m).map(Number).sort((a,b) => a-b);
    for (const k of keys) {
      if (airflow <= k) return m[k];
    }
    return keys.length > 0 ? m[keys[keys.length-1]] : null;
  }

  function getYufengModel(airflow) {
    const models = smartSelectorData.yufengModels;
    if (airflow <= 250) return models[0];
    if (airflow <= 350) return models[1];
    return models[2];
  }

  function getYufengComponentModel(airflow) {
    const models = smartSelectorData.yufengComponentModels;
    if (airflow <= 250) return models[0];
    return models[1];
  }

  function renderSystems(systems) {
    const equipBody = document.querySelector('#smartFreshEquipBody');
    const equipCard = document.querySelector('#smartFreshEquipCard');
    if (!equipBody || !equipCard) return;

    equipBody.innerHTML = '';
    if (systems.length === 0) {
      equipCard.style.display = 'none';
      return;
    }
    equipCard.style.display = '';

    const fanTypeOptions = Object.entries(smartSelectorData.fanTypes).map(([key, val]) =>
      `<option value="${key}"${key === 'humidity' ? ' selected' : ''}>${val.label}</option>`
    ).join('');

    systems.forEach(sys => {
      const defaultModel = pickFanModel(sys.totalAirflow, 'humidity');

      const tr = document.createElement('tr');
      tr.className = 'sf-system-row';
      tr.dataset.systemId = sys.id;
      tr.dataset.airflow = sys.totalAirflow;
      tr.innerHTML = `
        <td class="sf-sys-cell" style="text-align:center;font-weight:700;color:var(--primary);font-size:16px">系统 ${sys.id}</td>
        <td>
          <select class="sf-fan-type" data-sys="${sys.id}">${fanTypeOptions}</select>
        </td>
        <td>
          <select class="sf-fan-model" data-sys="${sys.id}">
            ${defaultModel ? `<option value="${defaultModel.model}">${defaultModel.model}（${defaultModel.seriesName}）</option>` : '<option>无法匹配</option>'}
          </select>
        </td>
        <td>
          <select class="sf-humid-module" data-sys="${sys.id}"><option value="none">不配置</option></select>
        </td>
        <td>
          <select class="sf-yufeng" data-sys="${sys.id}"><option value="none">不配置</option></select>
        </td>
        <td>
          <select class="sf-yufeng-comp" data-sys="${sys.id}" style="display:none"><option value="none">不配置</option></select>
        </td>
      `;

      equipBody.appendChild(tr);
    });

    updateSystemEquipment();
  }

  function updateSystemEquipment() {
    const equipBody = document.querySelector('#smartFreshEquipBody');
    if (!equipBody) return;
    const systemRows = equipBody.querySelectorAll('.sf-system-row');
    systemRows.forEach(row => {
      const airflow = Number(row.dataset.airflow || 0);
      const fanType = row.querySelector('.sf-fan-type')?.value || 'humidity';
      const fanTypeInfo = smartSelectorData.fanTypes[fanType];

      const model = pickFanModel(airflow, fanType);
      const fanModelEl = row.querySelector('.sf-fan-model');
      if (fanModelEl) {
        const currentVal = fanModelEl.value;
        const seriesIds = Array.isArray(fanTypeInfo?.series) ? fanTypeInfo.series : [fanTypeInfo?.series];
        let options = '<option value="">请选择</option>';
        const allModels = [];
        seriesIds.forEach(sid => {
          const data = paramsMap[sid];
          if (!data) return;
          const ai = data.specs.findIndex(s => s.label === "设备风量");
          data.models.forEach((m, mi) => {
            const af = ai !== -1 ? Number(data.specs[ai].values[mi]) : '—';
            const label = isNaN(af) ? m : `${m}（${af}m³/h）`;
            options += `<option value="${m}">${label}</option>`;
            allModels.push(m);
          });
        });
        fanModelEl.innerHTML = options;
        const bestMatch = model?.model || '';
        fanModelEl.value = allModels.includes(currentVal) ? currentVal : bestMatch;
      }

      const humidSel = row.querySelector('.sf-humid-module');
      if (humidSel) {
        const needsHumid = fanTypeInfo?.hasHumidModule;
        const currentVal = humidSel.value;
        humidSel.innerHTML = '<option value="none">不配置</option>';
        if (needsHumid) {
          const opt = getHumidOptions(airflow);
          const allHumid = [];
          Object.entries(smartSelectorData.humidModuleMap)
            .map(([af, m]) => [Number(af), m])
            .sort((a, b) => a[0] - b[0])
            .forEach(([af, m]) => {
              humidSel.innerHTML += `<option value="${m.noJ}">${m.noJ}（${af}m³/h·普通）</option>`;
              humidSel.innerHTML += `<option value="${m.withJ}">${m.withJ}（${af}m³/h·除菌）</option>`;
              allHumid.push(m.noJ, m.withJ);
            });
          humidSel.value = allHumid.includes(currentVal) ? currentVal : (opt?.noJ || '');
        }
        humidSel.disabled = !needsHumid;
      }

      const yufengSel = row.querySelector('.sf-yufeng');
      if (yufengSel) {
        const canYufeng = fanTypeInfo?.canYufeng && model && model.seriesId !== 'zdt2c';
        const currentYufeng = yufengSel.value;
        yufengSel.innerHTML = '<option value="none">不配置</option>';
        if (canYufeng) {
          const autoYf = getYufengModel(airflow);
          smartSelectorData.yufengModels.forEach(m => {
            yufengSel.innerHTML += `<option value="${m}">${m}</option>`;
          });
          yufengSel.value = smartSelectorData.yufengModels.includes(currentYufeng) ? currentYufeng : autoYf;
        }
      }

      const yufengCompSel = row.querySelector('.sf-yufeng-comp');
      const humidVal = humidSel?.value || 'none';
      const hasHumidModule = humidVal !== 'none' && fanTypeInfo?.hasHumidModule;

      if (yufengCompSel) {
        yufengCompSel.style.display = hasHumidModule ? '' : 'none';
        if (hasHumidModule) {
          const currentComp = yufengCompSel.value;
          yufengCompSel.innerHTML = '<option value="none">不配置</option>';
          const autoComp = getYufengComponentModel(airflow);
          smartSelectorData.yufengComponentModels.forEach(m => {
            yufengCompSel.innerHTML += `<option value="${m}">${m}</option>`;
          });
          yufengCompSel.value = smartSelectorData.yufengComponentModels.includes(currentComp) ? currentComp : autoComp;
        }
      }

      updateSixSummary();
    });
  }

  let roomIdx = 0;

  function addRoom(data) {
    const name = data?.name || '';
    const area = data?.area ?? 30;
    const height = data?.height ?? 2.7;
    const ach = data?.ach ?? 1.0;
    const floor = data?.floor ?? '1';
    const sysid = data?.sysid ?? 1;

    const tr = document.createElement('tr');
    tr.dataset.idx = roomIdx++;
    tr.innerHTML = `
      <td><input type="text" class="sf-floor" value="${floor}" placeholder="楼层" style="width:50px" /></td>
      <td><select class="sf-sysid">${Array.from({length:10},(_,i)=>i+1).map(n => `<option value="${n}"${n === sysid ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
      <td><input type="text" class="sf-name" value="${name}" placeholder="房间名称" /></td>
      <td><input type="number" class="sf-area" min="5" max="200" value="${area}" /></td>
      <td><input type="number" class="sf-height" min="2.2" max="6" step="0.1" value="${height}" /></td>
      <td><input type="number" class="sf-ach" min="0.3" max="3" step="0.1" value="${ach}" /></td>
      <td class="sf-qr calc-cell" style="font-weight:700">—</td>
      <td class="sf-vents calc-cell">—</td>
      <td class="sf-total-airflow calc-cell"></td>
      <td><button type="button" class="room-del" title="删除">×</button></td>
    `;
    body.appendChild(tr);
    tr.querySelector('.room-del').addEventListener('click', () => { tr.remove(); calcAll(); rebuildSystems(); });
    tr.querySelectorAll('input, select').forEach(el => el.addEventListener('input', () => { calcRoom(tr); rebuildSystems(); }));

    const focusable = Array.from(tr.querySelectorAll('input, select')).filter(el => !el.disabled && el.type !== 'button');
    focusable.forEach((el, idx) => {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const next = focusable[idx + 1];
          if (next) next.focus();
        }
      });
    });

    calcRoom(tr);
    rebuildSystems();
  }

  function calcAll() {
    body.querySelectorAll('tr:not(.sf-system-row)').forEach(tr => calcRoom(tr));
  }

  addRoom({ floor: '', name: '', area: '' });
  addRoom({ floor: '', name: '', area: '' });
  addRoom({ floor: '', name: '', area: '' });

  addBtn.addEventListener('click', () => addRoom({ sysid: 1 }));

  // 楼层解析：B1 / -1 / 地下1层 / 负1层 → { isBasement: true, level: 1 }
  function parseFloor(floorStr) {
    const s = (floorStr || '').trim().toLowerCase();
    if (!s) return { isBasement: false, level: 0 };
    if (/[地下b负]/.test(s) || s.startsWith('-')) {
      const n = parseInt(s.replace(/[^-\d]/g, ''), 10);
      return { isBasement: true, level: isNaN(n) ? 0 : Math.abs(n) };
    }
    const n = parseInt(s, 10);
    return { isBasement: false, level: isNaN(n) ? 0 : n };
  }

  /* 楼层归一化：B1 / -1 / 地下1层 / 负1层 → B1；1F / 1层 / 1 → 1 */
  function normalizeFloor(floorStr) {
    const p = parseFloor(floorStr);
    if (p.isBasement) return p.level > 0 ? `B${p.level}` : 'B?';
    if (p.level > 0) return String(p.level);
    const raw = (floorStr || '1').trim();
    return raw || '1';
  }

  // 按楼层自动分系统
  function autoSplitByFloor() {
    const rows = Array.from(body.querySelectorAll('tr:not(.sf-system-row)'));
    const floorOrder = [];
    const floorSet = new Set();
    rows.forEach(row => {
      const raw = (row.querySelector('.sf-floor')?.value || '1').trim();
      const floor = normalizeFloor(raw);
      if (!floorSet.has(floor)) {
        floorSet.add(floor);
        floorOrder.push(floor);
      }
    });

    floorOrder.sort((a, b) => {
      const pa = parseFloor(a);
      const pb = parseFloor(b);
      if (pa.isBasement && pb.isBasement) return pb.level - pa.level;
      if (pa.isBasement && !pb.isBasement) return -1;
      if (!pa.isBasement && pb.isBasement) return 1;
      return pa.level - pb.level;
    });

    // 地下部分总风量不超过350则合并为一个系统
    const basementFloors = floorOrder.filter(f => parseFloor(f).isBasement);
    let basementTotalAirflow = 0;
    rows.forEach(row => {
      const raw = (row.querySelector('.sf-floor')?.value || '1').trim();
      const floor = normalizeFloor(raw);
      if (parseFloor(floor).isBasement) {
        const area = Number(row.querySelector('.sf-area')?.value || 0);
        const height = Number(row.querySelector('.sf-height')?.value || 2.7);
        const ach = Number(row.querySelector('.sf-ach')?.value || 1.0);
        basementTotalAirflow += Math.ceil((area * height * ach) / 10) * 10;
      }
    });
    const mergeBasement = basementFloors.length > 1 && basementTotalAirflow <= 350;

    const floorToSys = {};
    let sysIdx = 0;
    if (mergeBasement) {
      basementFloors.forEach(f => { floorToSys[f] = 1; });
      sysIdx = 1;
    }
    floorOrder.forEach(floor => {
      if (parseFloor(floor).isBasement && mergeBasement) return;
      sysIdx++;
      floorToSys[floor] = sysIdx;
    });

    rows.forEach(row => {
      const raw = (row.querySelector('.sf-floor')?.value || '1').trim();
      const floor = normalizeFloor(raw);
      const sysidSelect = row.querySelector('.sf-sysid');
      if (sysidSelect && floorToSys[floor]) {
        sysidSelect.value = String(floorToSys[floor]);
      }
    });

    calcAll();
    rebuildSystems();
  }

  /* 楼层输入失焦时自动归一 + 重新分系统 */
  body.addEventListener('change', (e) => {
    if (e.target.matches('.sf-floor')) {
      const normalized = normalizeFloor(e.target.value);
      if (normalized !== e.target.value) e.target.value = normalized;
      autoSplitByFloor();
    }
  });

  // 事件委托：监听系统设备行的 select 变化
  const equipBody = document.querySelector('#smartFreshEquipBody');
  if (equipBody) {
    equipBody.addEventListener('change', (e) => {
      if (e.target.matches('.sf-fan-type')) {
        updateSystemEquipment();
      } else if (e.target.matches('.sf-fan-model') || e.target.matches('.sf-yufeng') || e.target.matches('.sf-yufeng-comp')) {
        updateSixSummary();
      } else if (e.target.matches('.sf-humid-module')) {
        updateSystemEquipment();
      }
    });
  }

  autoSplitByFloor();
}

function initSixAc() {
  const tableBody = document.querySelector('#sixAcRoomTableBody');
  const defaultIndoorSeries = document.querySelector('#sixAcIndoorSeries')?.value || '暗藏管道式_超薄_100×nanoe';
  if (!tableBody) return;

  const seriesOptions = [
    { value: '暗藏管道式_超薄_100×nanoe', label: '超薄_100×nanoe' },
    { value: '暗藏管道式_超薄_100×nanoe_内置排水泵', label: '超薄_100×nanoe_内置排水泵' },
    { value: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', label: '超薄_100×nanoe_内置排水泵_PM2.5滤网' },
    { value: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', label: '超薄_100×nanoe_PM2.5滤网' },
    { value: '厨卫专用空调', label: '厨卫专用空调' },
    { value: '暗藏管道式_中静压_nanoe_内置排水泵', label: '中静压_nanoe_内置排水泵' },
    { value: '暗藏管道式_中静压_内置排水泵', label: '中静压_内置排水泵' },
    { value: '暗藏管道式_中静压', label: '中静压' },
  ];

  function getIndoorUnitOptions(series, selectedModel) {
    const units = acProducts.filter(p => p.type === 'indoor' && p.series === series);
    return units.map(u =>
      `<option value="${u.model}"${u.model === selectedModel ? ' selected' : ''}>${u.model} (${u.coolingCapacity}kW)</option>`
    ).join('');
  }

  function getIndoorUnitByModel(model) {
    return acProducts.find(p => p.type === 'indoor' && p.model === model);
  }

  function findBestIndoorCombo(series, requiredCooling) {
    const units = acProducts.filter(p => p.type === 'indoor' && p.series === series);
    units.sort((a, b) => a.coolingCapacity - b.coolingCapacity);
    if (units.length === 0) return { unit: null, count: 1 };
    for (let count = 1; count <= 5; count++) {
      for (const unit of units) {
        if (unit.coolingCapacity * count >= requiredCooling) {
          return { unit, count };
        }
      }
    }
    return { unit: units[units.length - 1], count: Math.ceil(requiredCooling / units[units.length - 1].coolingCapacity) };
  }

  function getOutdoorUnitByModel(model) {
    return acProducts.find(p => p.type === 'outdoor' && p.model === model);
  }

  function findOutdoorUnit(seriesName, totalCapacity, overRatio) {
    const requiredCapacity = totalCapacity / overRatio;
    const units = acProducts.filter(p => p.type === 'outdoor' && p.series === seriesName);
    units.sort((a, b) => a.coolingCapacity - b.coolingCapacity);
    for (const unit of units) {
      if (unit.coolingCapacity >= requiredCapacity) return { ...unit, actualCapacity: unit.coolingCapacity, matchedCapacity: requiredCapacity };
    }
    const maxUnit = units[units.length - 1];
    if (maxUnit) return { ...maxUnit, actualCapacity: maxUnit.coolingCapacity, matchedCapacity: requiredCapacity, insufficient: true };
    return null;
  }

  function getOutdoorUnitOptions(series, selectedModel) {
    const units = acProducts.filter(p => p.type === 'outdoor' && p.series === series);
    if (units.length === 0) {
      return `<option value="">该系列无匹配外机</option>`;
    }
    return units.map(u =>
      `<option value="${u.model}"${u.model === selectedModel ? ' selected' : ''}>${u.model} (${u.coolingCapacity}kW)</option>`
    ).join('');
  }

  function updateTable() {
    const outdoorSeries = document.querySelector('#sixAcOutdoorSeries')?.value || 'S7';
    const overRatio = parseFloat(document.querySelector('#sixAcOverRatio')?.value || '1.2');
    const rows = tableBody.querySelectorAll('tr:not(.ac-system-total)');
    const roomData = [];
    let splitWarning = '';

    rows.forEach(row => {
      const name = row.querySelector('.ac-r-name')?.value || '';
      const floor = row.querySelector('.ac-r-floor')?.value || '';
      const area = parseFloat(row.querySelector('.ac-r-area')?.value || '0');
      const load = parseFloat(row.querySelector('.ac-r-load')?.value || '220');
      const series = row.querySelector('.ac-r-series')?.value || defaultIndoorSeries;
      const modelSelect = row.querySelector('.ac-r-model-select');
      const model = modelSelect?.value || '';
      const modelSource = modelSelect?.dataset?.modelSource || 'auto';
      const countSelect = row.querySelector('.ac-r-count');
      const count = parseInt(countSelect?.value || '1', 10);
      const countSource = countSelect?.dataset?.countSource || 'auto';
      const sysidSelect = row.querySelector('.ac-r-sysid');
      const sysid = parseInt(sysidSelect?.value || '1', 10);
      const sysidSource = sysidSelect?.dataset?.sysidSource || 'auto';
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      const outdoorModel = outdoorSelect?.value || '';
      const outdoorSource = outdoorSelect?.dataset?.outdoorSource || 'auto';

      if (area > 0 || name) {
        const requiredCooling = area > 0 ? (area * load) / 1000 : 0;
        let unit = null;
        let finalCount = count;

        if (model && modelSource === 'user') {
          unit = getIndoorUnitByModel(model);
          if (countSource === 'user') {
            finalCount = count;
          } else {
            finalCount = Math.ceil(requiredCooling / (unit?.coolingCapacity || 1));
            if (finalCount < 1) finalCount = 1;
            if (finalCount > 5) finalCount = 5;
          }
        } else if (countSource === 'user' && model) {
          unit = getIndoorUnitByModel(model);
          finalCount = count;
        } else if (area > 0) {
          const combo = findBestIndoorCombo(series, requiredCooling);
          unit = combo.unit;
          finalCount = combo.count;
        }

        roomData.push({
          name, floor, area, load, series, model: unit?.model || '', count: finalCount, sysid, sysidSource,
          requiredCooling, unit,
          totalCapacity: unit && area > 0 ? unit.coolingCapacity * finalCount : 0,
          outdoorModel, outdoorSource,
          modelSource, countSource
        });
      }
    });

    const sysGroups = {};
    roomData.forEach(r => {
      if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
      sysGroups[r.sysid].push(r);
    });

    Object.keys(sysGroups).forEach(sysid => {
      const group = sysGroups[sysid];
      const groupCapacity = group.reduce((sum, r) => sum + r.totalCapacity, 0);
      const firstRoom = group[0];
      let outdoorUnit = null;
      if (firstRoom && firstRoom.outdoorModel && firstRoom.outdoorSource === 'user') {
        outdoorUnit = getOutdoorUnitByModel(firstRoom.outdoorModel);
      }
      if (!outdoorUnit) {
        outdoorUnit = findOutdoorUnit(outdoorSeries, groupCapacity, overRatio);
      }
      group.outdoorUnit = outdoorUnit;
      group.totalCapacity = groupCapacity;
    });

    // === 别墅自动拆系统逻辑 ===
    function parseFloorLevel(floorStr) {
      const s = (floorStr || '').trim().toLowerCase();
      if (!s) return { isBasement: false, level: 0 };
      // 识别地下楼层：-2, -1, b1, b2, 地下1层, 负1层等
      if (/[地下b负]/.test(s) || s.startsWith('-')) {
        const n = parseInt(s.replace(/[^-\d]/g, ''), 10);
        return { isBasement: true, level: isNaN(n) ? 0 : Math.abs(n) };
      }
      const n = parseInt(s, 10);
      if (!isNaN(n)) {
        if (n <= 0) return { isBasement: true, level: Math.abs(n) };
        return { isBasement: false, level: n };
      }
      return { isBasement: false, level: 0 };
    }

    // 计算所有房间的总冷负荷
    const totalCapacity = roomData.reduce((sum, r) => sum + r.totalCapacity, 0);
    const outdoorUnits = acProducts.filter(p => p.type === 'outdoor' && p.series === outdoorSeries);
    const maxOutdoorCapacity = outdoorUnits.length > 0
      ? Math.max(...outdoorUnits.map(u => u.coolingCapacity)) : 0;
    const maxAllowed = maxOutdoorCapacity * overRatio;

    // 只有当总冷负荷超过最大允许冷量，且所有房的系统编号都是自动分配时，才触发自动拆分
    const allSysidAuto = roomData.every(r => r.sysidSource === 'auto');
    const needsSplit = totalCapacity > maxAllowed && allSysidAuto;

    if (needsSplit) {
      const basementRooms = [];
      const firstFloorRooms = [];
      const upperFloorRooms = [];

      roomData.forEach(r => {
        const fl = parseFloorLevel(r.floor);
        if (fl.isBasement) basementRooms.push(r);
        else if (fl.level === 1) firstFloorRooms.push(r);
        else upperFloorRooms.push(r);
      });

      // 判断是否有地下部分
      const hasBasement = basementRooms.length > 0;

      if (hasBasement) {
        // 方案：地下部分和一楼划成一个系统，2楼及以上划成一个系统
        const lowerRooms = [...basementRooms, ...firstFloorRooms];
        const lowerCapacity = lowerRooms.reduce((s, r) => s + r.totalCapacity, 0);
        const upperCapacity = upperFloorRooms.reduce((s, r) => s + r.totalCapacity, 0);

        // 首先按地下+一楼 / 二楼及以上拆分
        lowerRooms.forEach(r => { r.sysid = 1; r.sysidSource = 'auto'; r.outdoorSource = 'auto'; });

        // 如果二楼及以上超出最大冷量，再继续拆分
        let currentSysId = 2;
        let currentGroupCapacity = 0;
        
        upperFloorRooms.forEach(r => {
          // 检查加入当前系统是否会超出容量
          if (currentGroupCapacity > 0 && currentGroupCapacity + r.totalCapacity > maxAllowed) {
            currentSysId++;
            currentGroupCapacity = 0;
          }
          r.sysid = currentSysId;
          r.sysidSource = 'auto';
          r.outdoorSource = 'auto';
          currentGroupCapacity += r.totalCapacity;
        });

        // 重建系统分组
        for (const key of Object.keys(sysGroups)) delete sysGroups[key];
        roomData.forEach(r => {
          if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
          sysGroups[r.sysid].push(r);
        });
        Object.keys(sysGroups).forEach(sid => {
          const g = sysGroups[sid];
          g.totalCapacity = g.reduce((sum, r) => sum + r.totalCapacity, 0);
          g.outdoorUnit = findOutdoorUnit(outdoorSeries, g.totalCapacity, overRatio);
        });

        // 检查是否还有系统超出容量
        const stillInsufficient = Object.values(sysGroups).some(g => g.outdoorUnit?.insufficient);
        if (stillInsufficient) {
          splitWarning = '⚠ 自动拆分后仍有系统超出最大外机冷量，请手动调整系统编号。';
        }
      } else {
        // 没有地下室，按楼层顺序拆分
        let currentSysId = 1;
        let currentGroupCapacity = 0;
        
        // 按楼层排序
        roomData.sort((a, b) => {
          const fa = parseFloorLevel(a.floor);
          const fb = parseFloorLevel(b.floor);
          if (fa.isBasement && !fb.isBasement) return -1;
          if (!fa.isBasement && fb.isBasement) return 1;
          return fa.level - fb.level;
        });

        roomData.forEach(r => {
          if (currentGroupCapacity > 0 && currentGroupCapacity + r.totalCapacity > maxAllowed) {
            currentSysId++;
            currentGroupCapacity = 0;
          }
          r.sysid = currentSysId;
          r.sysidSource = 'auto';
          r.outdoorSource = 'auto';
          currentGroupCapacity += r.totalCapacity;
        });

        // 重建系统分组
        for (const key of Object.keys(sysGroups)) delete sysGroups[key];
        roomData.forEach(r => {
          if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
          sysGroups[r.sysid].push(r);
        });
        Object.keys(sysGroups).forEach(sid => {
          const g = sysGroups[sid];
          g.totalCapacity = g.reduce((sum, r) => sum + r.totalCapacity, 0);
          g.outdoorUnit = findOutdoorUnit(outdoorSeries, g.totalCapacity, overRatio);
        });
      }
    }
    // === 自动拆系统逻辑结束 ===

    const sysIds = Object.keys(sysGroups).sort((a, b) => a - b);
    let html = '';

    sysIds.forEach((sysid, sysIdx) => {
      const group = sysGroups[sysid];
      const outdoorUnit = group.outdoorUnit;
      const humidModCount = (group.humidModules || []).length;
      const totalRowCount = group.length + humidModCount;

      group.forEach((r, idx) => {
        const rowspan = idx === 0 ? `rowspan="${totalRowCount}"` : '';
        const indoorOptions = getIndoorUnitOptions(r.series, r.model);
        const actualCooling = r.unit ? r.unit.coolingCapacity * r.count : 0;
        const isInsufficient = r.requiredCooling > 0 && actualCooling < r.requiredCooling;
        const actualCoolingPerArea = (r.unit && r.area > 0) ? (r.unit.coolingCapacity * r.count / r.area * 1000) : 0;
        const outdoorOptions = idx === 0 && outdoorUnit ? getOutdoorUnitOptions(outdoorSeries, outdoorUnit.model) : '';

        html += `<tr data-sysid="${r.sysid}">
          <td><input type="text" class="ac-r-floor" placeholder="楼层" value="${r.floor}" /></td>
          <td><input type="text" class="ac-r-name" placeholder="房间名称" value="${r.name}" /></td>
          <td><input type="number" class="ac-r-area" min="5" max="200" value="${r.area}" /></td>
          <td><input type="number" class="ac-r-load" min="80" max="300" value="${r.load}" /></td>
          <td class="ac-r-required">${r.requiredCooling.toFixed(2)}</td>
          <td><select class="ac-r-series">${seriesOptions.map(o => `<option value="${o.value}"${r.series === o.value ? ' selected' : ''}>${o.label}</option>`).join('')}</select></td>
          <td><select class="ac-r-model-select" data-model-source="${r.modelSource}">${indoorOptions || '<option value="">未匹配</option>'}</select></td>
          <td><select class="ac-r-count" data-count-source="${r.countSource}">${[1,2,3,4,5].map(n => `<option value="${n}"${r.count === n ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
          <td class="ac-r-capacity">${r.unit ? (r.unit.coolingCapacity * r.count).toFixed(1) : '-'}</td>
          <td class="ac-r-actual${isInsufficient ? ' insufficient' : ''}">${actualCoolingPerArea ? actualCoolingPerArea.toFixed(0) : '-'}</td>
          <td><select class="ac-r-sysid" data-sysid-source="${r.sysidSource}">${[1,2,3,4,5].map(n => `<option value="${n}"${r.sysid === n ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
          ${rowspan ? `<td class="ac-r-outdoor" ${rowspan}><select class="ac-r-outdoor-select" data-outdoor-source="${r.outdoorSource}">${outdoorOptions || '<option value="">未匹配</option>'}</select></td>` : ''}
          ${rowspan ? `<td class="ac-r-outdoor-capacity" ${rowspan}>${outdoorUnit ? outdoorUnit.coolingCapacity : '-'}</td>` : ''}
          <td><button type="button" class="ac-del-btn" title="删除">×</button></td>
        </tr>`;
      });

      const isOverRatioInsufficient = outdoorUnit?.insufficient === true;
      const overRatioPct = outdoorUnit ? ((group.totalCapacity / outdoorUnit.coolingCapacity) * 100) : 0;
      const overRatioStr = outdoorUnit ? overRatioPct.toFixed(0) + '%' : '-';
      const overRatioStyle = isOverRatioInsufficient
        ? 'font-weight:700;background:#fef2f2;color:#ef4444;border-color:#fecaca'
        : 'font-weight:700;background:#f8f9fa';
      const overRatioWarning = isOverRatioInsufficient
        ? `<br><span style="font-size:11px;color:#ef4444;font-weight:400;display:block;margin-top:2px">⚠ 超出最大外机冷量 ${outdoorUnit.coolingCapacity}kW</span>`
        : '';

      html += `<tr class="ac-system-total">
        <td colspan="4" style="text-align:right;font-weight:700;background:#f8f9fa">系统${sysid}合计</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="font-weight:700;background:#f8f9fa">${group.totalCapacity.toFixed(1)} kW</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td colspan="2" style="${overRatioStyle}">超配率: ${overRatioStr}${overRatioWarning}</td>
        <td style="background:#f8f9fa"></td>
      </tr>`;
    });

    tableBody.innerHTML = html;

    // 显示/隐藏自动拆分提示
    let warnEl = document.querySelector('#sixAcSplitWarning');
    if (splitWarning) {
      if (!warnEl) {
        warnEl = document.createElement('div');
        warnEl.id = 'sixAcSplitWarning';
        warnEl.style.cssText = 'padding:10px 14px;margin-top:8px;background:#fffbeb;border:1px solid #fbbf24;border-radius:6px;color:#92400e;font-size:13px;line-height:1.5';
        tableBody.parentNode.insertBefore(warnEl, tableBody.nextSibling);
      }
      warnEl.textContent = splitWarning;
      warnEl.style.display = 'block';
    } else if (warnEl) {
      warnEl.style.display = 'none';
    }

    tableBody.querySelectorAll('.ac-del-btn').forEach(btn => {
      btn.addEventListener('click', () => { btn.closest('tr').remove(); updateTable(); });
    });
  }

  // 事件委托：监听表格内所有 input 和 select 的 change 和 blur 事件
  tableBody.addEventListener('change', function(e) {
    const target = e.target;
    if (target.classList.contains('ac-r-series')) {
      const row = target.closest('tr');
      const modelSelect = row.querySelector('.ac-r-model-select');
      modelSelect.innerHTML = getIndoorUnitOptions(target.value, '') || '<option value="">未匹配</option>';
      modelSelect.dataset.modelSource = 'auto';
      const countSelect = row.querySelector('.ac-r-count');
      if (countSelect) countSelect.dataset.countSource = 'auto';
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-model-select')) {
      target.dataset.modelSource = 'user';
      const row = target.closest('tr');
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-count')) {
      target.dataset.countSource = 'user';
      const row = target.closest('tr');
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-sysid')) {
      target.dataset.sysidSource = 'user';
      const row = target.closest('tr');
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-outdoor-select')) {
      target.dataset.outdoorSource = 'user';
    }
    updateTable();
  });

  // 输入框失去焦点时才触发更新
  tableBody.addEventListener('blur', function(e) {
    const target = e.target;
    if (target.tagName === 'INPUT' && (target.classList.contains('ac-r-area') || target.classList.contains('ac-r-load') || target.classList.contains('ac-r-name') || target.classList.contains('ac-r-floor'))) {
      const row = target.closest('tr');
      if (target.classList.contains('ac-r-area') || target.classList.contains('ac-r-load')) {
        const modelSelect = row.querySelector('.ac-r-model-select');
        if (modelSelect) modelSelect.dataset.modelSource = 'auto';
        const countSelect = row.querySelector('.ac-r-count');
        if (countSelect) countSelect.dataset.countSource = 'auto';
        const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
        if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
      }
      updateTable();
    }
  }, true);

  // Enter键也触发更新
  tableBody.addEventListener('keydown', function(e) {
    const target = e.target;
    if (e.key === 'Enter' && target.tagName === 'INPUT') {
      e.preventDefault();
      target.blur();
    }
  });

  let roomIdCounter = 0;
  function addRoom(name, floor, area, load, series, count, sysid) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="text" class="ac-r-floor" placeholder="楼层" value="${floor || ''}" /></td>
      <td><input type="text" class="ac-r-name" placeholder="房间名称" value="${name || ''}" /></td>
      <td><input type="number" class="ac-r-area" min="5" max="200" value="${area || 20}" /></td>
      <td><input type="number" class="ac-r-load" min="80" max="300" value="${load || 220}" /></td>
      <td class="ac-r-required">-</td>
      <td><select class="ac-r-series">${seriesOptions.map(o => `<option value="${o.value}"${(series || defaultIndoorSeries) === o.value ? ' selected' : ''}>${o.label}</option>`).join('')}</select></td>
      <td><select class="ac-r-model-select" data-model-source="auto"><option value="">自动选型中...</option></select></td>
      <td><select class="ac-r-count" data-count-source="auto">${[1,2,3,4,5].map(n => `<option value="${n}"${n === (count || 1) ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
      <td class="ac-r-capacity">-</td>
      <td class="ac-r-actual">-</td>
      <td><select class="ac-r-sysid" data-sysid-source="auto">${[1,2,3,4,5].map(n => `<option value="${n}"${n === (sysid || 1) ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
      <td class="ac-r-outdoor"><select class="ac-r-outdoor-select" data-outdoor-source="auto"><option value="">计算中...</option></select></td>
      <td class="ac-r-outdoor-capacity">-</td>
      <td><button type="button" class="ac-del-btn" title="删除">×</button></td>
    `;
    const seriesSelect = tr.querySelector('.ac-r-series');
    if (series) seriesSelect.value = series;
    const lastTotal = tableBody.querySelector('.ac-system-total:last-child');
    if (lastTotal) {
      lastTotal.parentNode.insertBefore(tr, lastTotal);
    } else {
      tableBody.appendChild(tr);
    }
    tr.querySelector('.ac-del-btn').addEventListener('click', () => { tr.remove(); updateTable(); });
    updateTable();
  }

  document.querySelector('#sixAcAddRoomBtn')?.addEventListener('click', () => addRoom());

  document.querySelector('#sixAcIndoorSeries')?.addEventListener('change', () => {
    // 全局内机系列变更时，重置所有行的自动选型
    tableBody.querySelectorAll('.ac-r-model-select').forEach(ms => { ms.dataset.modelSource = 'auto'; });
    tableBody.querySelectorAll('.ac-r-count').forEach(cs => { cs.dataset.countSource = 'auto'; });
    tableBody.querySelectorAll('.ac-r-outdoor-select').forEach(os => { os.dataset.outdoorSource = 'auto'; });
    updateTable();
  });
  document.querySelector('#sixAcOutdoorSeries')?.addEventListener('change', () => {
    tableBody.querySelectorAll('.ac-r-outdoor-select').forEach(os => { os.dataset.outdoorSource = 'auto'; });
    updateTable();
  });
  document.querySelector('#sixAcOverRatio')?.addEventListener('input', updateTable);

  // 从新风选型同步房间信息（只同步楼层、房间名称、面积）
  function syncFromFresh() {
    const freshRows = document.querySelectorAll('#smartFreshBody tr:not(.sf-system-row)');
    const existingRows = tableBody.querySelectorAll('tr:not(.ac-system-total)');
    
    // 获取现有房间数据（保留用户已修改的字段，但不保留sysid）
    const existingData = new Map();
    existingRows.forEach(row => {
      const name = row.querySelector('.ac-r-name')?.value || '';
      const floor = row.querySelector('.ac-r-floor')?.value || '';
      const key = `${floor}-${name}`;
      existingData.set(key, {
        area: row.querySelector('.ac-r-area')?.value || '20',
        load: row.querySelector('.ac-r-load')?.value || '220',
        series: row.querySelector('.ac-r-series')?.value || defaultIndoorSeries
      });
    });

    // 清空现有表格
    tableBody.innerHTML = '';

    // 根据新风房间重建（只同步楼层、房间名称、面积）
    freshRows.forEach(row => {
      const name = row.querySelector('.sf-name')?.value || '';
      const floor = row.querySelector('.sf-floor')?.value || '';
      const area = Number(row.querySelector('.sf-area')?.value || 0);
      const key = `${floor}-${name}`;
      
      // 如果该房间已存在，保留用户的自定义设置（但不保留sysid）
      const existing = existingData.get(key);
      const finalArea = existing ? existing.area : (area || 20);
      const finalLoad = existing ? existing.load : '220';
      const finalSeries = existing ? existing.series : defaultIndoorSeries;
      
      addRoom(name, floor, finalArea, finalLoad, finalSeries, 1, 1); // sysid默认设为1，由系统划分逻辑处理
    });
  }

  // 监听新风表格变化
  const freshBody = document.querySelector('#smartFreshBody');
  if (freshBody) {
    freshBody.addEventListener('input', (e) => {
      if (e.target.matches('.sf-name, .sf-floor, .sf-area, .sf-sysid')) {
        syncFromFresh();
      }
    });
    freshBody.addEventListener('change', (e) => {
      if (e.target.matches('.sf-sysid')) {
        syncFromFresh();
      }
    });
  }

  // 初始同步（如果新风有数据）
  syncFromFresh();
}

function initSixFloorHeat() {
  const enableCheck = document.querySelector('#smartFHEnable');
  const fhContent = document.querySelector('#smartFHContent');
  const fhBody = document.querySelector('#smartFHBody');
  if (!enableCheck || !fhContent || !fhBody) return;

  enableCheck.addEventListener('change', () => {
    fhContent.style.display = enableCheck.checked ? 'block' : 'none';
    updateSixSummary();
  });

  function updateFloorHeat() {
    // 读取所有行数据
    const rows = fhBody.querySelectorAll('tr:not(.fh-system-total)');
    const rooms = [];
    rows.forEach(tr => {
      const floor = tr.querySelector('.fh-floor')?.textContent || '';
      const name = tr.querySelector('.fh-name')?.textContent || '';
      const area = Number(tr.querySelector('.fh-area')?.textContent || 0);
      const heatInput = tr.querySelector('.fh-heat-input');
      const heatPerArea = Number(heatInput?.value || 160);
      const sysid = tr.dataset.sysid || '1';
      const heatTotal = Math.ceil((area * heatPerArea) / 100) / 10;
      rooms.push({ floor, name, area, heatPerArea, heatTotal, sysid });
    });

    // 按系统分组
    const sysGroups = {};
    rooms.forEach(r => {
      if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
      sysGroups[r.sysid].push(r);
    });

    const a2w = smartSelectorData.a2wModels;
    const sysIds = Object.keys(sysGroups).sort((a, b) => a - b);
    let html = '';

    sysIds.forEach(sysid => {
      const group = sysGroups[sysid];
      const totalHeat = group.reduce((s, r) => s + r.heatTotal, 0);

      // 匹配A2W型号
      let matched = a2w[a2w.length - 1];
      for (const m of a2w) {
        if (m.heating >= totalHeat) { matched = m; break; }
      }

      group.forEach((r, idx) => {
        const rowspan = idx === 0 ? `rowspan="${group.length}"` : '';

        html += `<tr data-sysid="${sysid}">
          <td class="fh-floor">${r.floor}</td>
          <td class="fh-name">${r.name}</td>
          <td class="fh-area">${r.area}</td>
          <td><input type="number" class="fh-heat-input" value="${r.heatPerArea}" min="80" max="300" step="10" style="width:60px" /></td>
          <td class="fh-total">${r.heatTotal.toFixed(1)}</td>
          <td class="fh-sysid-cell">${sysid}</td>
          ${rowspan ? `<td class="fh-a2w-cell" ${rowspan}>
            <select class="fh-a2w-select" data-sysid="${sysid}">
              <option value="${matched.model}">${matched.model}（${matched.heating}kW·普通款）</option>
              <option value="${matched.suffixE}">${matched.suffixE}（${matched.heating}kW·电加热款）</option>
            </select>
          </td>
          <td class="fh-a2w-capacity" ${rowspan}>${matched.heating}</td>` : ''}
        </tr>`;
      });

      // 系统合计行
      html += `<tr class="fh-system-total">
        <td colspan="4" style="text-align:right;font-weight:700;background:#f8f9fa">系统${sysid}合计</td>
        <td style="font-weight:700;background:#f8f9fa">${totalHeat.toFixed(1)}</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
      </tr>`;
    });

    fhBody.innerHTML = html;
    updateSixSummary();
  }

  function syncFromAc() {
    const acRows = document.querySelectorAll('#sixAcRoomTableBody tr:not(.ac-system-total)');
    fhBody.innerHTML = '';
    acRows.forEach(row => {
      const name = row.querySelector('.ac-r-name')?.value || '';
      const floor = row.querySelector('.ac-r-floor')?.value || '';
      const area = parseFloat(row.querySelector('.ac-r-area')?.value || '0');
      const sysid = row.querySelector('.ac-r-sysid')?.value || '1';
      if (!name && area <= 0) return;
      const tr = document.createElement('tr');
      tr.dataset.sysid = sysid;
      tr.innerHTML = `
        <td class="fh-floor">${floor}</td>
        <td class="fh-name">${name}</td>
        <td class="fh-area">${area}</td>
        <td><input type="number" class="fh-heat-input" value="160" min="80" max="300" step="10" style="width:60px" /></td>
        <td class="fh-total">—</td>
        <td class="fh-sysid-cell">${sysid}</td>
      `;
      fhBody.appendChild(tr);
    });
    updateFloorHeat();
  }

  // 事件委托：监听 fhBody 内的 input 和 select 变化
  fhBody.addEventListener('input', (e) => {
    if (e.target.matches('.fh-heat-input')) {
      updateFloorHeat();
    }
  });
  fhBody.addEventListener('change', (e) => {
    if (e.target.matches('.fh-a2w-select')) {
      updateSixSummary();
    }
  });

  syncFromAc();

  // 监听空调表格变化，同步地暖房间
  const acBody = document.querySelector('#sixAcRoomTableBody');
  if (acBody) {
    acBody.addEventListener('input', (e) => {
      if (e.target.matches('.ac-r-name, .ac-r-area, .ac-r-floor, .ac-r-sysid')) {
        setTimeout(syncFromAc, 50);
      }
    });
    acBody.addEventListener('change', (e) => {
      if (e.target.matches('.ac-r-sysid')) {
        setTimeout(syncFromAc, 50);
      }
    });
  }

  document.querySelector('#sixAcAddRoomBtn')?.addEventListener('click', () => {
    setTimeout(syncFromAc, 100);
  });
}

function updateSixSummary() {
  const sumBody = document.querySelector('#sumAllBody');
  if (!sumBody) return;

  const hasFHModule = document.querySelector('#smartFHEnable')?.checked;
  const itemMap = new Map();
  const itemOrder = [];

  function addOrMerge(category, type, model, count = 1, isOptional = false) {
    if (!model) return;
    const key = `${type}|||${model}`;
    if (itemMap.has(key)) {
      itemMap.get(key).count += count;
    } else {
      itemMap.set(key, { category, type, model, count, isOptional });
      itemOrder.push(key);
    }
  }

  /* ── 新风模块 ── */
  const freshSysRows = document.querySelectorAll('.sf-system-row');
  freshSysRows.forEach(row => {
    const fanTypeVal = row.querySelector('.sf-fan-type')?.value || 'freshAir';
    const fanTypeName = smartSelectorData.fanTypes[fanTypeVal]?.label || '新风';
    const fanModel = row.querySelector('.sf-fan-model')?.value || '';
    const humidVal = row.querySelector('.sf-humid-module')?.value || '';
    const yufengVal = row.querySelector('.sf-yufeng')?.value || '';
    const yufengCompVal = row.querySelector('.sf-yufeng-comp')?.value || '';
    const airflow = Number(row.dataset.airflow || 0);
    const ventCount = Math.max(1, Math.ceil(airflow / 40));

    addOrMerge('新风模块', `新风机（${fanTypeName}）`, fanModel);
    if (humidVal && humidVal !== 'none') addOrMerge('新风模块', '加湿模块', humidVal);
    if (yufengVal && yufengVal !== 'none') addOrMerge('新风模块', '御风箱', yufengVal);
    if (yufengCompVal && yufengCompVal !== 'none') addOrMerge('新风模块', '御风组件', yufengCompVal);
  });

  addOrMerge('新风模块', '新风控制器', smartSelectorData.controllers.freshAirController);

  /* ── 空调模块 ── */
  const acRows = document.querySelectorAll('#sixAcRoomTableBody tr:not(.ac-system-total)');
  acRows.forEach(row => {
    const model = row.querySelector('.ac-r-model-select')?.value || '';
    const count = Number(row.querySelector('.ac-r-count')?.value) || 0;
    if (model && count > 0) addOrMerge('空调模块', '空调内机', model, count);
  });
  const seenOutdoor = new Set();
  document.querySelectorAll('#sixAcRoomTableBody tr').forEach(row => {
    const outdoorCell = row.querySelector('.ac-r-outdoor select');
    if (outdoorCell && outdoorCell.value && !seenOutdoor.has(outdoorCell.value)) {
      seenOutdoor.add(outdoorCell.value);
      addOrMerge('空调模块', '空调外机', outdoorCell.value);
    }
  });
  addOrMerge('空调模块', '空调控制器', hasFHModule ? smartSelectorData.controllers.withFloorHeat : smartSelectorData.controllers.withoutFloorHeat);

  /* ── 地暖模块 ── */
  if (hasFHModule) {
    document.querySelectorAll('.fh-a2w-select').forEach(sel => {
      const a2wModel = sel.value || '';
      if (a2wModel) addOrMerge('地暖模块', 'A2W水力模块', a2wModel);
    });
  }

  /* ── 控制系统 ── */
  addOrMerge('控制系统', '空调网关', smartSelectorData.controllers.gateway);
  addOrMerge('控制系统', '6恒控制器', smartSelectorData.controllers.sixController);

  /* ── 渲染（按大类 rowspan 合并） ── */
  if (itemOrder.length === 0) {
    sumBody.innerHTML = '<tr><td colspan="4" class="summary-empty">请先完成选型</td></tr>';
    return;
  }

  const categoryOrder = ['新风模块', '空调模块', '地暖模块', '控制系统'];
  const grouped = new Map();
  for (const key of itemOrder) {
    const cat = itemMap.get(key).category;
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat).push(key);
  }

  let html = '';
  for (const cat of categoryOrder) {
    const keys = grouped.get(cat);
    if (!keys || keys.length === 0) continue;
    keys.forEach((key, idx) => {
      const item = itemMap.get(key);
      html += '<tr>';
      if (idx === 0) {
        html += `<td class="sum-category" rowspan="${keys.length}">${cat}</td>`;
      }
      html += `<td>${item.type}</td>`;
      html += `<td>${item.model}</td>`;
      if (item.isOptional) {
        html += `<td class="sum-check-col"><input type="checkbox" checked /></td>`;
      } else {
        html += `<td>${item.count}</td>`;
      }
      html += '</tr>';
    });
  }
  sumBody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', initSixSmartSelector);

function initSixGen2Selector() {
  const gen2Module = document.querySelector('#mod-sixGen2');
  if (!gen2Module) return;

  const tabs = gen2Module.querySelectorAll('.selx-tab');
  const contents = gen2Module.querySelectorAll('.selx-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      contents.forEach(c => c.style.display = 'none');
      const target = gen2Module.querySelector('#tab-' + tab.dataset.tab);
      if (target) target.style.display = 'block';
      if (tab.dataset.tab === 'gen2-summary') updateGen2Summary();
    });
  });

  initGen2Fresh();
  initGen2Ac();
  initGen2FloorHeat();
}

function initGen2Fresh() {
  const body = document.querySelector('#gen2FreshBody');
  const addBtn = document.querySelector('#gen2FreshAddBtn');
  if (!body || !addBtn) return;

  function calcRoom(row) {
    const area = Number(row.querySelector('.sf-area')?.value || 0);
    const height = Number(row.querySelector('.sf-height')?.value || 2.7);
    const ach = Number(row.querySelector('.sf-ach')?.value || 1.0);
    const qAch = Math.ceil((area * height * ach) / 10) * 10;
    const vents = Math.max(1, Math.ceil(qAch / 40));
    row.querySelector('.sf-qr').textContent = qAch > 0 ? qAch : '—';
    row.querySelector('.sf-vents').textContent = qAch > 0 ? vents : '—';
    return { area, height, ach, qAch, vents };
  }

  function rebuildSystems() {
    const rows = body.querySelectorAll('tr:not(.sf-system-row)');
    const rooms = [];
    rows.forEach(row => {
      const floor = row.querySelector('.sf-floor')?.value || '1';
      const sysid = parseInt(row.querySelector('.sf-sysid')?.value || '1', 10);
      const name = row.querySelector('.sf-name')?.value || '';
      const area = Number(row.querySelector('.sf-area')?.value || 0);
      const height = Number(row.querySelector('.sf-height')?.value || 2.7);
      const ach = Number(row.querySelector('.sf-ach')?.value || 1.0);
      const qAch = Math.ceil((area * height * ach) / 10) * 10;
      rooms.push({ floor, sysid, name, area, height, ach, qAch, _row: row });
    });

    const sysGroups = {};
    rooms.forEach(r => {
      const key = r.sysid;
      if (!sysGroups[key]) sysGroups[key] = [];
      sysGroups[key].push(r);
    });

    const systems = Object.keys(sysGroups).sort((a, b) => a - b).map(sysid => {
      const group = sysGroups[sysid];
      const totalAirflow = group.reduce((s, r) => s + r.qAch, 0);
      return { id: Number(sysid), rooms: group, totalAirflow };
    });

    // 还原所有行的"设计总风量"单元格（上一轮可能已被 rowspan 吸收）
    body.querySelectorAll('tr').forEach(r => {
      if (r.querySelector('.sf-total-airflow')) return;
      const td = document.createElement('td');
      td.className = 'sf-total-airflow calc-cell';
      const lastTd = r.querySelector('td:last-child');
      if (lastTd) r.insertBefore(td, lastTd);
      else r.appendChild(td);
    });

    // 重置所有"设计总风量"单元格
    body.querySelectorAll('.sf-total-airflow').forEach(td => {
      td.removeAttribute('rowspan');
      td.textContent = '';
      td.style.fontWeight = '';
      td.style.verticalAlign = '';
      td.style.color = '';
    });

    // 重新按 sysid 顺序排列 DOM 行
    systems.forEach(sys => {
      sys.rooms.forEach(r => body.appendChild(r._row));
    });

    // 合并设计总风量单元格
    systems.forEach(sys => {
      if (sys.rooms.length === 0) return;
      const firstTd = sys.rooms[0]._row.querySelector('.sf-total-airflow');
      if (!firstTd) return;
      firstTd.rowSpan = sys.rooms.length;
      firstTd.textContent = sys.totalAirflow;
      firstTd.style.fontWeight = '700';
      firstTd.style.verticalAlign = 'middle';
      firstTd.style.color = 'var(--primary)';
      for (let i = 1; i < sys.rooms.length; i++) {
        const td = sys.rooms[i]._row.querySelector('.sf-total-airflow');
        if (td) td.remove();
      }
    });

    renderSystems(systems);
    updateGen2Summary();
  }

  function pickFanModel(airflow, fanType) {
    const seriesKey = fanType;
    const seriesIds = gen2SelectorData.fanTypes[seriesKey]?.series;
    const seriesIdList = Array.isArray(seriesIds) ? seriesIds : [seriesIds];
    for (const sid of seriesIdList) {
      const data = paramsMap[sid];
      if (!data) continue;
      const ai = data.specs.findIndex(s => s.label === "设备风量");
      if (ai === -1) continue;
      for (let mi = 0; mi < data.models.length; mi++) {
        const af = Number(data.specs[ai].values[mi]);
        if (!isNaN(af) && af >= airflow) {
          return { seriesId: sid, model: data.models[mi], airflow: af, seriesName: data.series };
        }
      }
    }
    const sid = seriesIdList[0];
    const data = paramsMap[sid];
    if (data) {
      const ai = data.specs.findIndex(s => s.label === "设备风量");
      if (ai !== -1) {
        let maxAf = 0, maxMi = 0;
        for (let mi = 0; mi < data.models.length; mi++) {
          const af = Number(data.specs[ai].values[mi]);
          if (!isNaN(af) && af > maxAf) { maxAf = af; maxMi = mi; }
        }
        return { seriesId: sid, model: data.models[maxMi], airflow: maxAf, seriesName: data.series, insufficient: true };
      }
    }
    return null;
  }

  function getHumidOptions(airflow) {
    const m = gen2SelectorData.humidModuleMap;
    const keys = Object.keys(m).map(Number).sort((a,b) => a-b);
    for (const k of keys) {
      if (airflow <= k) return m[k];
    }
    return keys.length > 0 ? m[keys[keys.length-1]] : null;
  }

  function getYufengModel(airflow) {
    return null;
  }

  function getYufengComponentModel(airflow) {
    return null;
  }

  function renderSystems(systems) {
    const equipBody = document.querySelector('#gen2FreshEquipBody');
    const equipCard = document.querySelector('#gen2FreshEquipCard');
    if (!equipBody || !equipCard) return;

    equipBody.innerHTML = '';
    if (systems.length === 0) {
      equipCard.style.display = 'none';
      return;
    }
    equipCard.style.display = '';

    systems.forEach(sys => {
      const defaultModel = pickFanModel(sys.totalAirflow, 'humidity');

      const tr = document.createElement('tr');
      tr.className = 'sf-system-row';
      tr.dataset.systemId = sys.id;
      tr.dataset.airflow = sys.totalAirflow;
      tr.innerHTML = `
        <td class="sf-sys-cell" style="text-align:center;font-weight:700;color:var(--primary);font-size:16px">系统 ${sys.id}</td>
        <td>
          <select class="sf-fan-model" data-sys="${sys.id}">
            ${defaultModel ? `<option value="${defaultModel.model}">${defaultModel.model}（${defaultModel.seriesName}）</option>` : '<option>无法匹配</option>'}
          </select>
        </td>
        <td>
          <select class="sf-humid-module" data-sys="${sys.id}"><option value="none">不配置</option></select>
        </td>
      `;

      equipBody.appendChild(tr);
    });

    updateSystemEquipment();
  }

  function updateSystemEquipment() {
    const equipBody = document.querySelector('#gen2FreshEquipBody');
    if (!equipBody) return;
    const systemRows = equipBody.querySelectorAll('.sf-system-row');
    systemRows.forEach(row => {
      const airflow = Number(row.dataset.airflow || 0);
      const fanTypeInfo = gen2SelectorData.fanTypes.humidity;

      const model = pickFanModel(airflow, 'humidity');
      const fanModelEl = row.querySelector('.sf-fan-model');
      if (fanModelEl) {
        const currentVal = fanModelEl.value;
        const seriesIds = Array.isArray(fanTypeInfo?.series) ? fanTypeInfo.series : [fanTypeInfo?.series];
        let options = '<option value="">请选择</option>';
        const allModels = [];
        seriesIds.forEach(sid => {
          const data = paramsMap[sid];
          if (!data) return;
          const ai = data.specs.findIndex(s => s.label === "设备风量");
          data.models.forEach((m, mi) => {
            const af = ai !== -1 ? Number(data.specs[ai].values[mi]) : '—';
            const label = isNaN(af) ? m : `${m}（${af}m³/h）`;
            options += `<option value="${m}">${label}</option>`;
            allModels.push(m);
          });
        });
        fanModelEl.innerHTML = options;
        const bestMatch = model?.model || '';
        fanModelEl.value = allModels.includes(currentVal) ? currentVal : bestMatch;
      }

      const humidSel = row.querySelector('.sf-humid-module');
      if (humidSel) {
        const needsHumid = fanTypeInfo?.hasHumidModule;
        const currentVal = humidSel.value;
        humidSel.innerHTML = '<option value="none">不配置</option>';
        if (needsHumid) {
          const opt = getHumidOptions(airflow);
          const allHumid = [];
          Object.entries(gen2SelectorData.humidModuleMap)
            .map(([af, m]) => [Number(af), m])
            .sort((a, b) => a[0] - b[0])
            .forEach(([af, m]) => {
              humidSel.innerHTML += `<option value="${m.noJ}">${m.noJ}（${af}m³/h·普通）</option>`;
              humidSel.innerHTML += `<option value="${m.withJ}">${m.withJ}（${af}m³/h·除菌）</option>`;
              allHumid.push(m.noJ, m.withJ);
            });
          humidSel.value = allHumid.includes(currentVal) ? currentVal : (opt?.noJ || '');
        }
        humidSel.disabled = !needsHumid;
      }

      updateGen2Summary();
    });
  }

  let roomIdx = 0;

  function addRoom(data) {
    const name = data?.name || '';
    const area = data?.area ?? 30;
    const height = data?.height ?? 2.7;
    const ach = data?.ach ?? 1.0;
    const floor = data?.floor ?? '1';
    const sysid = data?.sysid ?? 1;

    const tr = document.createElement('tr');
    tr.dataset.idx = roomIdx++;
    tr.innerHTML = `
      <td><input type="text" class="sf-floor" value="${floor}" placeholder="楼层" style="width:50px" /></td>
      <td><select class="sf-sysid">${Array.from({length:10},(_,i)=>i+1).map(n => `<option value="${n}"${n === sysid ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
      <td><input type="text" class="sf-name" value="${name}" placeholder="房间名称" /></td>
      <td><input type="number" class="sf-area" min="5" max="200" value="${area}" /></td>
      <td><input type="number" class="sf-height" min="2.2" max="6" step="0.1" value="${height}" /></td>
      <td><input type="number" class="sf-ach" min="0.3" max="3" step="0.1" value="${ach}" /></td>
      <td class="sf-qr calc-cell" style="font-weight:700">—</td>
      <td class="sf-vents calc-cell">—</td>
      <td class="sf-total-airflow calc-cell"></td>
      <td><button type="button" class="room-del" title="删除">×</button></td>
    `;
    body.appendChild(tr);
    tr.querySelector('.room-del').addEventListener('click', () => { tr.remove(); calcAll(); rebuildSystems(); });
    tr.querySelectorAll('input, select').forEach(el => el.addEventListener('input', () => { calcRoom(tr); rebuildSystems(); }));

    const focusable = Array.from(tr.querySelectorAll('input, select')).filter(el => !el.disabled && el.type !== 'button');
    focusable.forEach((el, idx) => {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const next = focusable[idx + 1];
          if (next) next.focus();
        }
      });
    });

    calcRoom(tr);
    rebuildSystems();
  }

  function calcAll() {
    body.querySelectorAll('tr:not(.sf-system-row)').forEach(tr => calcRoom(tr));
  }

  addRoom({ floor: '', name: '', area: '' });
  addRoom({ floor: '', name: '', area: '' });
  addRoom({ floor: '', name: '', area: '' });

  addBtn.addEventListener('click', () => addRoom({ sysid: 1 }));

  function parseFloor(floorStr) {
    const s = (floorStr || '').trim().toLowerCase();
    if (!s) return { isBasement: false, level: 0 };
    if (/[地下b负]/.test(s) || s.startsWith('-')) {
      const n = parseInt(s.replace(/[^-\d]/g, ''), 10);
      return { isBasement: true, level: isNaN(n) ? 0 : Math.abs(n) };
    }
    const n = parseInt(s, 10);
    return { isBasement: false, level: isNaN(n) ? 0 : n };
  }

  function normalizeFloor(floorStr) {
    const p = parseFloor(floorStr);
    if (p.isBasement) return p.level > 0 ? `B${p.level}` : 'B?';
    if (p.level > 0) return String(p.level);
    const raw = (floorStr || '1').trim();
    return raw || '1';
  }

  function autoSplitByFloor() {
    const rows = Array.from(body.querySelectorAll('tr:not(.sf-system-row)'));
    const floorOrder = [];
    const floorSet = new Set();
    rows.forEach(row => {
      const raw = (row.querySelector('.sf-floor')?.value || '1').trim();
      const floor = normalizeFloor(raw);
      if (!floorSet.has(floor)) {
        floorSet.add(floor);
        floorOrder.push(floor);
      }
    });

    floorOrder.sort((a, b) => {
      const pa = parseFloor(a);
      const pb = parseFloor(b);
      if (pa.isBasement && pb.isBasement) return pb.level - pa.level;
      if (pa.isBasement && !pb.isBasement) return -1;
      if (!pa.isBasement && pb.isBasement) return 1;
      return pa.level - pb.level;
    });

    // 地下部分总风量不超过350则合并为一个系统
    const basementFloors = floorOrder.filter(f => parseFloor(f).isBasement);
    let basementTotalAirflow = 0;
    rows.forEach(row => {
      const raw = (row.querySelector('.sf-floor')?.value || '1').trim();
      const floor = normalizeFloor(raw);
      if (parseFloor(floor).isBasement) {
        const area = Number(row.querySelector('.sf-area')?.value || 0);
        const height = Number(row.querySelector('.sf-height')?.value || 2.7);
        const ach = Number(row.querySelector('.sf-ach')?.value || 1.0);
        basementTotalAirflow += Math.ceil((area * height * ach) / 10) * 10;
      }
    });
    const mergeBasement = basementFloors.length > 1 && basementTotalAirflow <= 350;

    const floorToSys = {};
    let sysIdx = 0;
    if (mergeBasement) {
      basementFloors.forEach(f => { floorToSys[f] = 1; });
      sysIdx = 1;
    }
    floorOrder.forEach(floor => {
      if (parseFloor(floor).isBasement && mergeBasement) return;
      sysIdx++;
      floorToSys[floor] = sysIdx;
    });

    rows.forEach(row => {
      const raw = (row.querySelector('.sf-floor')?.value || '1').trim();
      const floor = normalizeFloor(raw);
      const sysidSelect = row.querySelector('.sf-sysid');
      if (sysidSelect && floorToSys[floor]) {
        sysidSelect.value = String(floorToSys[floor]);
      }
    });

    calcAll();
    rebuildSystems();
  }

  body.addEventListener('change', (e) => {
    if (e.target.matches('.sf-floor')) {
      const normalized = normalizeFloor(e.target.value);
      if (normalized !== e.target.value) e.target.value = normalized;
      autoSplitByFloor();
    }
  });

  const equipBody = document.querySelector('#gen2FreshEquipBody');
  if (equipBody) {
    equipBody.addEventListener('change', (e) => {
      if (e.target.matches('.sf-fan-type')) {
        updateSystemEquipment();
      } else if (e.target.matches('.sf-fan-model') || e.target.matches('.sf-yufeng') || e.target.matches('.sf-yufeng-comp')) {
        updateGen2Summary();
      } else if (e.target.matches('.sf-humid-module')) {
        updateSystemEquipment();
        // 调湿模块变化时更新空调超配率
        if (window._gen2AcUpdateTable) window._gen2AcUpdateTable();
      }
    });
  }

  autoSplitByFloor();
}

function initGen2Ac() {
  const tableBody = document.querySelector('#gen2AcRoomTableBody');
  const defaultIndoorSeries = document.querySelector('#gen2AcIndoorSeries')?.value || '暗藏管道式_超薄_100×nanoe';
  if (!tableBody) return;

  const humidModuleOverrides = new Map();

  const seriesOptions = [
    { value: '暗藏管道式_超薄_100×nanoe', label: '超薄_100×nanoe' },
    { value: '暗藏管道式_超薄_100×nanoe_内置排水泵', label: '超薄_100×nanoe_内置排水泵' },
    { value: '暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', label: '超薄_100×nanoe_内置排水泵_PM2.5滤网' },
    { value: '暗藏管道式_超薄_100×nanoe_PM2.5滤网', label: '超薄_100×nanoe_PM2.5滤网' },
    { value: '厨卫专用空调', label: '厨卫专用空调' },
    { value: '暗藏管道式_中静压_nanoe_内置排水泵', label: '中静压_nanoe_内置排水泵' },
    { value: '暗藏管道式_中静压_内置排水泵', label: '中静压_内置排水泵' },
    { value: '暗藏管道式_中静压', label: '中静压' },
  ];

  function getIndoorUnitOptions(series, selectedModel) {
    const units = acProducts.filter(p => p.type === 'indoor' && p.series === series);
    return units.map(u =>
      `<option value="${u.model}"${u.model === selectedModel ? ' selected' : ''}>${u.model} (${u.coolingCapacity}kW)</option>`
    ).join('');
  }

  function getIndoorUnitByModel(model) {
    return acProducts.find(p => p.type === 'indoor' && p.model === model);
  }

  function findBestIndoorCombo(series, requiredCooling) {
    const units = acProducts.filter(p => p.type === 'indoor' && p.series === series);
    units.sort((a, b) => a.coolingCapacity - b.coolingCapacity);
    if (units.length === 0) return { unit: null, count: 1 };
    for (let count = 1; count <= 5; count++) {
      for (const unit of units) {
        if (unit.coolingCapacity * count >= requiredCooling) {
          return { unit, count };
        }
      }
    }
    return { unit: units[units.length - 1], count: Math.ceil(requiredCooling / units[units.length - 1].coolingCapacity) };
  }

  function getOutdoorUnitByModel(model) {
    return acProducts.find(p => p.type === 'outdoor' && p.model === model);
  }

  function findOutdoorUnit(seriesName, totalCapacity, overRatio) {
    const requiredCapacity = totalCapacity / overRatio;
    const units = acProducts.filter(p => p.type === 'outdoor' && p.series === seriesName);
    units.sort((a, b) => a.coolingCapacity - b.coolingCapacity);
    for (const unit of units) {
      if (unit.coolingCapacity >= requiredCapacity) return { ...unit, actualCapacity: unit.coolingCapacity, matchedCapacity: requiredCapacity };
    }
    const maxUnit = units[units.length - 1];
    if (maxUnit) return { ...maxUnit, actualCapacity: maxUnit.coolingCapacity, matchedCapacity: requiredCapacity, insufficient: true };
    return null;
  }

  function getOutdoorUnitOptions(series, selectedModel) {
    const units = acProducts.filter(p => p.type === 'outdoor' && p.series === series);
    if (units.length === 0) {
      return `<option value="">该系列无匹配外机</option>`;
    }
    return units.map(u =>
      `<option value="${u.model}"${u.model === selectedModel ? ' selected' : ''}>${u.model} (${u.coolingCapacity}kW)</option>`
    ).join('');
  }

  function getHumidModuleCooling(model) {
    if (!model || model === 'none') return 0;
    if (model.startsWith('FV-12')) return 1.0;  // 12系列 = 1000W = 1kW
    if (model.startsWith('FV-26')) return 2.2;  // 26系列 = 2200W = 2.2kW
    return 0;
  }

  function getHumidModuleOptions(selectedModel) {
    const m = gen2SelectorData.humidModuleMap;
    let options = '';
    Object.entries(m)
      .map(([af, models]) => [Number(af), models])
      .sort((a, b) => a[0] - b[0])
      .forEach(([af, models]) => {
        const s1 = selectedModel === models.noJ ? ' selected' : '';
        const s2 = selectedModel === models.withJ ? ' selected' : '';
        options += `<option value="${models.noJ}"${s1}>${models.noJ}（${af}m³/h·普通）</option>`;
        options += `<option value="${models.withJ}"${s2}>${models.withJ}（${af}m³/h·除菌）</option>`;
      });
    return options;
  }

  function getHumidModulesFromFresh() {
    const modules = [];
    const freshRows = document.querySelectorAll('#gen2FreshBody tr:not(.sf-system-row)');
    const freshEquipRows = document.querySelectorAll('#gen2FreshEquipBody .sf-system-row');

    const sysidToHumid = {};
    freshEquipRows.forEach(row => {
      const sysid = row.dataset.systemId;
      const humidVal = row.querySelector('.sf-humid-module')?.value || 'none';
      if (humidVal !== 'none') {
        sysidToHumid[sysid] = humidVal;
      }
    });

    const sysidToFloors = {};
    freshRows.forEach(row => {
      const sysid = row.querySelector('.sf-sysid')?.value || '1';
      const floor = row.querySelector('.sf-floor')?.value || '1';
      if (!sysidToFloors[sysid]) sysidToFloors[sysid] = new Set();
      sysidToFloors[sysid].add(floor);
    });

    Object.entries(sysidToHumid).forEach(([freshSysid, model]) => {
      const override = humidModuleOverrides.get(freshSysid);
      if (override?.deleted) return;
      const finalModel = override?.model || model;
      const cooling = getHumidModuleCooling(finalModel);
      const floors = Array.from(sysidToFloors[freshSysid] || new Set()).sort();
      if (cooling > 0) {
        modules.push({ freshSysid, model: finalModel, cooling, floors, acSysid: override?.acSysid || null });
      }
    });

    return modules;
  }

  function updateTable() {
    const outdoorSeries = document.querySelector('#gen2AcOutdoorSeries')?.value || 'S7';
    const overRatio = parseFloat(document.querySelector('#gen2AcOverRatio')?.value || '1.15');
    const rows = tableBody.querySelectorAll('tr:not(.ac-system-total):not(.ac-humid-row)');
    const roomData = [];
    let splitWarning = '';

    rows.forEach(row => {
      const name = row.querySelector('.ac-r-name')?.value || '';
      const floor = row.querySelector('.ac-r-floor')?.value || '';
      const area = parseFloat(row.querySelector('.ac-r-area')?.value || '0');
      const load = parseFloat(row.querySelector('.ac-r-load')?.value || '220');
      const series = row.querySelector('.ac-r-series')?.value || defaultIndoorSeries;
      const modelSelect = row.querySelector('.ac-r-model-select');
      const model = modelSelect?.value || '';
      const modelSource = modelSelect?.dataset?.modelSource || 'auto';
      const countSelect = row.querySelector('.ac-r-count');
      const count = parseInt(countSelect?.value || '1', 10);
      const countSource = countSelect?.dataset?.countSource || 'auto';
      const sysidSelect = row.querySelector('.ac-r-sysid');
      const sysid = parseInt(sysidSelect?.value || '1', 10);
      const sysidSource = sysidSelect?.dataset?.sysidSource || 'auto';
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      const outdoorModel = outdoorSelect?.value || '';
      const outdoorSource = outdoorSelect?.dataset?.outdoorSource || 'auto';

      if (area > 0 || name) {
        const requiredCooling = area > 0 ? (area * load) / 1000 : 0;
        let unit = null;
        let finalCount = count;

        if (model && modelSource === 'user') {
          unit = getIndoorUnitByModel(model);
          if (countSource === 'user') {
            finalCount = count;
          } else {
            finalCount = Math.ceil(requiredCooling / (unit?.coolingCapacity || 1));
            if (finalCount < 1) finalCount = 1;
            if (finalCount > 5) finalCount = 5;
          }
        } else if (countSource === 'user' && model) {
          unit = getIndoorUnitByModel(model);
          finalCount = count;
        } else if (area > 0) {
          const combo = findBestIndoorCombo(series, requiredCooling);
          unit = combo.unit;
          finalCount = combo.count;
        }

        roomData.push({
          name, floor, area, load, series, model: unit?.model || '', count: finalCount, sysid, sysidSource,
          requiredCooling, unit,
          totalCapacity: unit && area > 0 ? unit.coolingCapacity * finalCount : 0,
          outdoorModel, outdoorSource,
          modelSource, countSource
        });
      }
    });

    const sysGroups = {};
    roomData.forEach(r => {
      if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
      sysGroups[r.sysid].push(r);
    });

    // 获取新风调湿模块（每个模块单独一行）
    const humidModules = getHumidModulesFromFresh();

    Object.keys(sysGroups).forEach(sysid => {
      const group = sysGroups[sysid];
      const groupCapacity = group.reduce((sum, r) => sum + r.totalCapacity, 0);
      // 将调湿模块分配到对应的空调系统
      const groupFloors = new Set(group.map(r => r.floor));
      group.humidModules = [];
      let humidCooling = 0;
      humidModules.forEach(hm => {
        if (hm.acSysid) {
          if (String(hm.acSysid) === String(sysid)) {
            group.humidModules.push(hm);
            humidCooling += hm.cooling;
          }
        } else {
          if (hm.floors.some(f => groupFloors.has(f))) {
            group.humidModules.push(hm);
            humidCooling += hm.cooling;
          }
        }
      });
      group.humidCooling = humidCooling;
      const totalWithHumid = groupCapacity + humidCooling;
      const firstRoom = group[0];
      let outdoorUnit = null;
      if (firstRoom && firstRoom.outdoorModel && firstRoom.outdoorSource === 'user') {
        outdoorUnit = getOutdoorUnitByModel(firstRoom.outdoorModel);
      }
      if (!outdoorUnit) {
        outdoorUnit = findOutdoorUnit(outdoorSeries, totalWithHumid, overRatio);
      }
      group.outdoorUnit = outdoorUnit;
      group.totalCapacity = groupCapacity;
    });

    function parseFloorLevel(floorStr) {
      const s = (floorStr || '').trim().toLowerCase();
      if (!s) return { isBasement: false, level: 0 };
      if (/[地下b负]/.test(s) || s.startsWith('-')) {
        const n = parseInt(s.replace(/[^-\d]/g, ''), 10);
        return { isBasement: true, level: isNaN(n) ? 0 : Math.abs(n) };
      }
      const n = parseInt(s, 10);
      if (!isNaN(n)) {
        if (n <= 0) return { isBasement: true, level: Math.abs(n) };
        return { isBasement: false, level: n };
      }
      return { isBasement: false, level: 0 };
    }

    const totalCapacity = roomData.reduce((sum, r) => sum + r.totalCapacity, 0);
    const outdoorUnits = acProducts.filter(p => p.type === 'outdoor' && p.series === outdoorSeries);
    const maxOutdoorCapacity = outdoorUnits.length > 0
      ? Math.max(...outdoorUnits.map(u => u.coolingCapacity)) : 0;
    const maxAllowed = maxOutdoorCapacity * overRatio;

    const allSysidAuto = roomData.every(r => r.sysidSource === 'auto');
    const needsSplit = totalCapacity > maxAllowed && allSysidAuto;

    if (needsSplit) {
      const basementRooms = [];
      const firstFloorRooms = [];
      const upperFloorRooms = [];

      roomData.forEach(r => {
        const fl = parseFloorLevel(r.floor);
        if (fl.isBasement) basementRooms.push(r);
        else if (fl.level === 1) firstFloorRooms.push(r);
        else upperFloorRooms.push(r);
      });

      const hasBasement = basementRooms.length > 0;

      if (hasBasement) {
        const lowerRooms = [...basementRooms, ...firstFloorRooms];
        const lowerCapacity = lowerRooms.reduce((s, r) => s + r.totalCapacity, 0);
        const upperCapacity = upperFloorRooms.reduce((s, r) => s + r.totalCapacity, 0);

        lowerRooms.forEach(r => { r.sysid = 1; r.sysidSource = 'auto'; r.outdoorSource = 'auto'; });

        let currentSysId = 2;
        let currentGroupCapacity = 0;

        upperFloorRooms.forEach(r => {
          if (currentGroupCapacity > 0 && currentGroupCapacity + r.totalCapacity > maxAllowed) {
            currentSysId++;
            currentGroupCapacity = 0;
          }
          r.sysid = currentSysId;
          r.sysidSource = 'auto';
          r.outdoorSource = 'auto';
          currentGroupCapacity += r.totalCapacity;
        });

        for (const key of Object.keys(sysGroups)) delete sysGroups[key];
        roomData.forEach(r => {
          if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
          sysGroups[r.sysid].push(r);
        });
        Object.keys(sysGroups).forEach(sid => {
          const g = sysGroups[sid];
          g.totalCapacity = g.reduce((sum, r) => sum + r.totalCapacity, 0);
          // 重新分配调湿模块到各系统
          const gFloors = new Set(g.map(r => r.floor));
          g.humidModules = [];
          let hCooling = 0;
          humidModules.forEach(hm => {
            const targetSysid = hm.acSysid ? String(hm.acSysid) : null;
            if (targetSysid === String(sid)) {
              g.humidModules.push(hm);
              hCooling += hm.cooling;
            } else if (!hm.acSysid && hm.floors.some(f => gFloors.has(f))) {
              g.humidModules.push(hm);
              hCooling += hm.cooling;
            }
          });
          g.humidCooling = hCooling;
          g.outdoorUnit = findOutdoorUnit(outdoorSeries, g.totalCapacity + hCooling, overRatio);
        });

        const stillInsufficient = Object.values(sysGroups).some(g => g.outdoorUnit?.insufficient);
        if (stillInsufficient) {
          splitWarning = '⚠ 自动拆分后仍有系统超出最大外机冷量，请手动调整系统编号。';
        }
      } else {
        let currentSysId = 1;
        let currentGroupCapacity = 0;

        roomData.sort((a, b) => {
          const fa = parseFloorLevel(a.floor);
          const fb = parseFloorLevel(b.floor);
          if (fa.isBasement && !fb.isBasement) return -1;
          if (!fa.isBasement && fb.isBasement) return 1;
          return fa.level - fb.level;
        });

        roomData.forEach(r => {
          if (currentGroupCapacity > 0 && currentGroupCapacity + r.totalCapacity > maxAllowed) {
            currentSysId++;
            currentGroupCapacity = 0;
          }
          r.sysid = currentSysId;
          r.sysidSource = 'auto';
          r.outdoorSource = 'auto';
          currentGroupCapacity += r.totalCapacity;
        });

        for (const key of Object.keys(sysGroups)) delete sysGroups[key];
        roomData.forEach(r => {
          if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
          sysGroups[r.sysid].push(r);
        });
        Object.keys(sysGroups).forEach(sid => {
          const g = sysGroups[sid];
          g.totalCapacity = g.reduce((sum, r) => sum + r.totalCapacity, 0);
          // 重新分配调湿模块到各系统
          const gFloors = new Set(g.map(r => r.floor));
          g.humidModules = [];
          let hCooling = 0;
          humidModules.forEach(hm => {
            const targetSysid = hm.acSysid ? String(hm.acSysid) : null;
            if (targetSysid === String(sid)) {
              g.humidModules.push(hm);
              hCooling += hm.cooling;
            } else if (!hm.acSysid && hm.floors.some(f => gFloors.has(f))) {
              g.humidModules.push(hm);
              hCooling += hm.cooling;
            }
          });
          g.humidCooling = hCooling;
          g.outdoorUnit = findOutdoorUnit(outdoorSeries, g.totalCapacity + hCooling, overRatio);
        });
      }
    }

    const sysIds = Object.keys(sysGroups).sort((a, b) => a - b);
    let html = '';

    sysIds.forEach((sysid, sysIdx) => {
      const group = sysGroups[sysid];
      const outdoorUnit = group.outdoorUnit;
      const humidModCount = (group.humidModules || []).length;
      const totalRowCount = group.length + humidModCount;

      group.forEach((r, idx) => {
        const rowspan = idx === 0 ? `rowspan="${totalRowCount}"` : '';
        const indoorOptions = getIndoorUnitOptions(r.series, r.model);
        const actualCooling = r.unit ? r.unit.coolingCapacity * r.count : 0;
        const isInsufficient = r.requiredCooling > 0 && actualCooling < r.requiredCooling;
        const actualCoolingPerArea = (r.unit && r.area > 0) ? (r.unit.coolingCapacity * r.count / r.area * 1000) : 0;
        const outdoorOptions = idx === 0 && outdoorUnit ? getOutdoorUnitOptions(outdoorSeries, outdoorUnit.model) : '';

        html += `<tr data-sysid="${r.sysid}">
          <td><input type="text" class="ac-r-floor" placeholder="楼层" value="${r.floor}" /></td>
          <td><input type="text" class="ac-r-name" placeholder="房间名称" value="${r.name}" /></td>
          <td><input type="number" class="ac-r-area" min="5" max="200" value="${r.area}" /></td>
          <td><input type="number" class="ac-r-load" min="80" max="300" value="${r.load}" /></td>
          <td class="ac-r-required">${r.requiredCooling.toFixed(2)}</td>
          <td><select class="ac-r-series">${seriesOptions.map(o => `<option value="${o.value}"${r.series === o.value ? ' selected' : ''}>${o.label}</option>`).join('')}</select></td>
          <td><select class="ac-r-model-select" data-model-source="${r.modelSource}">${indoorOptions || '<option value="">未匹配</option>'}</select></td>
          <td><select class="ac-r-count" data-count-source="${r.countSource}">${[1,2,3,4,5].map(n => `<option value="${n}"${r.count === n ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
          <td class="ac-r-capacity">${r.unit ? (r.unit.coolingCapacity * r.count).toFixed(1) : '-'}</td>
          <td class="ac-r-actual${isInsufficient ? ' insufficient' : ''}">${actualCoolingPerArea ? actualCoolingPerArea.toFixed(0) : '-'}</td>
          <td><select class="ac-r-sysid" data-sysid-source="${r.sysidSource}">${[1,2,3,4,5].map(n => `<option value="${n}"${r.sysid === n ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
          ${rowspan ? `<td class="ac-r-outdoor" ${rowspan}><select class="ac-r-outdoor-select" data-outdoor-source="${r.outdoorSource}">${outdoorOptions || '<option value="">未匹配</option>'}</select></td>` : ''}
          ${rowspan ? `<td class="ac-r-outdoor-capacity" ${rowspan}>${outdoorUnit ? outdoorUnit.coolingCapacity : '-'}</td>` : ''}
          <td><button type="button" class="ac-del-btn" title="删除">×</button></td>
        </tr>`;
      });

      // 调湿模块行（每个模块单独一行）
      const humidMods = group.humidModules || [];
      humidMods.forEach(hm => {
        const humidOpts = getHumidModuleOptions(hm.model);
        const currentAcSysid = hm.acSysid || String(sysid);
        html += `<tr class="ac-humid-row" data-sysid="${sysid}" data-fresh-sysid="${hm.freshSysid}">
          <td><span class="ac-humid-floor">${hm.floors.join(',')}</span></td>
          <td><span class="ac-humid-name">调湿模块</span></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><select class="ac-r-humid-model">${humidOpts}</select></td>
          <td></td>
          <td class="ac-humid-capacity">${hm.cooling.toFixed(1)}</td>
          <td></td>
          <td><select class="ac-r-humid-sysid">${[1,2,3,4,5].map(n => `<option value="${n}"${Number(currentAcSysid) === n ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
          <td><button type="button" class="ac-del-btn humid-del-btn" title="删除调湿模块">×</button></td>
        </tr>`;
        group.totalCapacity += hm.cooling;
      });

      const isOverRatioInsufficient = outdoorUnit?.insufficient === true;
      const overRatioPct = outdoorUnit ? ((group.totalCapacity / outdoorUnit.coolingCapacity) * 100) : 0;
      const overRatioStr = outdoorUnit ? overRatioPct.toFixed(0) + '%' : '-';
      const overRatioStyle = isOverRatioInsufficient
        ? 'font-weight:700;background:#fef2f2;color:#ef4444;border-color:#fecaca'
        : 'font-weight:700;background:#f8f9fa';
      const overRatioWarning = isOverRatioInsufficient
        ? `<br><span style="font-size:11px;color:#ef4444;font-weight:400;display:block;margin-top:2px">⚠ 超出最大外机冷量 ${outdoorUnit.coolingCapacity}kW</span>`
        : '';

      html += `<tr class="ac-system-total">
        <td colspan="4" style="text-align:right;font-weight:700;background:#f8f9fa">系统${sysid}合计</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="font-weight:700;background:#f8f9fa">${group.totalCapacity.toFixed(1)} kW</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td colspan="2" style="${overRatioStyle}">超配率: ${overRatioStr}${overRatioWarning}</td>
        <td style="background:#f8f9fa"></td>
      </tr>`;
    });

    tableBody.innerHTML = html;

    let warnEl = document.querySelector('#gen2AcSplitWarning');
    if (splitWarning) {
      if (!warnEl) {
        warnEl = document.createElement('div');
        warnEl.id = 'gen2AcSplitWarning';
        warnEl.style.cssText = 'padding:10px 14px;margin-top:8px;background:#fffbeb;border:1px solid #fbbf24;border-radius:6px;color:#92400e;font-size:13px;line-height:1.5';
        tableBody.parentNode.insertBefore(warnEl, tableBody.nextSibling);
      }
      warnEl.textContent = splitWarning;
      warnEl.style.display = 'block';
    } else if (warnEl) {
      warnEl.style.display = 'none';
    }

    tableBody.querySelectorAll('.ac-del-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const row = btn.closest('tr');
        if (row.classList.contains('ac-humid-row')) {
          const freshSysid = row.dataset.freshSysid;
          if (freshSysid) {
            const override = humidModuleOverrides.get(freshSysid) || {};
            override.deleted = true;
            humidModuleOverrides.set(freshSysid, override);
          }
        }
        row.remove();
        updateTable();
      });
    });
  }

  tableBody.addEventListener('change', function(e) {
    const target = e.target;
    if (target.classList.contains('ac-r-series')) {
      const row = target.closest('tr');
      const modelSelect = row.querySelector('.ac-r-model-select');
      modelSelect.innerHTML = getIndoorUnitOptions(target.value, '') || '<option value="">未匹配</option>';
      modelSelect.dataset.modelSource = 'auto';
      const countSelect = row.querySelector('.ac-r-count');
      if (countSelect) countSelect.dataset.countSource = 'auto';
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-model-select')) {
      target.dataset.modelSource = 'user';
      const row = target.closest('tr');
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-count')) {
      target.dataset.countSource = 'user';
      const row = target.closest('tr');
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-sysid')) {
      target.dataset.sysidSource = 'user';
      const row = target.closest('tr');
      const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
      if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
    }
    if (target.classList.contains('ac-r-outdoor-select')) {
      target.dataset.outdoorSource = 'user';
    }
    if (target.classList.contains('ac-r-humid-model')) {
      const row = target.closest('tr');
      const freshSysid = row.dataset.freshSysid;
      const cooling = getHumidModuleCooling(target.value);
      const capacityCell = row.querySelector('.ac-humid-capacity');
      if (capacityCell) capacityCell.textContent = cooling.toFixed(1);
      if (freshSysid) {
        const override = humidModuleOverrides.get(freshSysid) || {};
        override.model = target.value;
        humidModuleOverrides.set(freshSysid, override);
      }
      updateTable();
      return;
    }
    if (target.classList.contains('ac-r-humid-sysid')) {
      const row = target.closest('tr');
      const freshSysid = row.dataset.freshSysid;
      if (freshSysid) {
        const override = humidModuleOverrides.get(freshSysid) || {};
        override.acSysid = target.value;
        humidModuleOverrides.set(freshSysid, override);
      }
      updateTable();
      return;
    }
    updateTable();
  });

  tableBody.addEventListener('blur', function(e) {
    const target = e.target;
    if (target.tagName === 'INPUT' && (target.classList.contains('ac-r-area') || target.classList.contains('ac-r-load') || target.classList.contains('ac-r-name') || target.classList.contains('ac-r-floor'))) {
      const row = target.closest('tr');
      if (target.classList.contains('ac-r-area') || target.classList.contains('ac-r-load')) {
        const modelSelect = row.querySelector('.ac-r-model-select');
        if (modelSelect) modelSelect.dataset.modelSource = 'auto';
        const countSelect = row.querySelector('.ac-r-count');
        if (countSelect) countSelect.dataset.countSource = 'auto';
        const outdoorSelect = row.querySelector('.ac-r-outdoor-select');
        if (outdoorSelect) outdoorSelect.dataset.outdoorSource = 'auto';
      }
      updateTable();
    }
  }, true);

  tableBody.addEventListener('keydown', function(e) {
    const target = e.target;
    if (e.key === 'Enter' && target.tagName === 'INPUT') {
      e.preventDefault();
      target.blur();
    }
  });

  function addRoom(name, floor, area, load, series, count, sysid) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="text" class="ac-r-floor" placeholder="楼层" value="${floor || ''}" /></td>
      <td><input type="text" class="ac-r-name" placeholder="房间名称" value="${name || ''}" /></td>
      <td><input type="number" class="ac-r-area" min="5" max="200" value="${area || 20}" /></td>
      <td><input type="number" class="ac-r-load" min="80" max="300" value="${load || 220}" /></td>
      <td class="ac-r-required">-</td>
      <td><select class="ac-r-series">${seriesOptions.map(o => `<option value="${o.value}"${(series || defaultIndoorSeries) === o.value ? ' selected' : ''}>${o.label}</option>`).join('')}</select></td>
      <td><select class="ac-r-model-select" data-model-source="auto"><option value="">自动选型中...</option></select></td>
      <td><select class="ac-r-count" data-count-source="auto">${[1,2,3,4,5].map(n => `<option value="${n}"${n === (count || 1) ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
      <td class="ac-r-capacity">-</td>
      <td class="ac-r-actual">-</td>
      <td><select class="ac-r-sysid" data-sysid-source="auto">${[1,2,3,4,5].map(n => `<option value="${n}"${n === (sysid || 1) ? ' selected' : ''}>${n}</option>`).join('')}</select></td>
      <td class="ac-r-outdoor"><select class="ac-r-outdoor-select" data-outdoor-source="auto"><option value="">计算中...</option></select></td>
      <td class="ac-r-outdoor-capacity">-</td>
      <td><button type="button" class="ac-del-btn" title="删除">×</button></td>
    `;
    const seriesSelect = tr.querySelector('.ac-r-series');
    if (series) seriesSelect.value = series;
    const lastTotal = tableBody.querySelector('.ac-system-total:last-child');
    if (lastTotal) {
      lastTotal.parentNode.insertBefore(tr, lastTotal);
    } else {
      tableBody.appendChild(tr);
    }
    tr.querySelector('.ac-del-btn').addEventListener('click', () => { tr.remove(); updateTable(); });
    updateTable();
  }

  document.querySelector('#gen2AcAddRoomBtn')?.addEventListener('click', () => addRoom());

  document.querySelector('#gen2AcIndoorSeries')?.addEventListener('change', () => {
    tableBody.querySelectorAll('.ac-r-model-select').forEach(ms => { ms.dataset.modelSource = 'auto'; });
    tableBody.querySelectorAll('.ac-r-count').forEach(cs => { cs.dataset.countSource = 'auto'; });
    tableBody.querySelectorAll('.ac-r-outdoor-select').forEach(os => { os.dataset.outdoorSource = 'auto'; });
    updateTable();
  });
  document.querySelector('#gen2AcOutdoorSeries')?.addEventListener('change', () => {
    tableBody.querySelectorAll('.ac-r-outdoor-select').forEach(os => { os.dataset.outdoorSource = 'auto'; });
    updateTable();
  });
  document.querySelector('#gen2AcOverRatio')?.addEventListener('input', updateTable);

  function syncFromFresh() {
    const freshRows = document.querySelectorAll('#gen2FreshBody tr:not(.sf-system-row)');
    const existingRows = tableBody.querySelectorAll('tr:not(.ac-system-total)');

    const existingData = new Map();
    existingRows.forEach(row => {
      const name = row.querySelector('.ac-r-name')?.value || '';
      const floor = row.querySelector('.ac-r-floor')?.value || '';
      const key = `${floor}-${name}`;
      existingData.set(key, {
        area: row.querySelector('.ac-r-area')?.value || '20',
        load: row.querySelector('.ac-r-load')?.value || '220',
        series: row.querySelector('.ac-r-series')?.value || defaultIndoorSeries
      });
    });

    tableBody.innerHTML = '';

    freshRows.forEach(row => {
      const name = row.querySelector('.sf-name')?.value || '';
      const floor = row.querySelector('.sf-floor')?.value || '';
      const area = Number(row.querySelector('.sf-area')?.value || 0);
      const key = `${floor}-${name}`;

      const existing = existingData.get(key);
      const finalArea = existing ? existing.area : (area || 20);
      const finalLoad = existing ? existing.load : '220';
      const finalSeries = existing ? existing.series : defaultIndoorSeries;

      addRoom(name, floor, finalArea, finalLoad, finalSeries, 1, 1);
    });
  }

  const freshBody = document.querySelector('#gen2FreshBody');
  if (freshBody) {
    freshBody.addEventListener('input', (e) => {
      if (e.target.matches('.sf-name, .sf-floor, .sf-area, .sf-sysid')) {
        syncFromFresh();
      }
    });
    freshBody.addEventListener('change', (e) => {
      if (e.target.matches('.sf-sysid')) {
        syncFromFresh();
      }
    });
  }

  syncFromFresh();

  // 暴露 updateTable 供新风模块调湿模块变化时调用
  window._gen2AcUpdateTable = updateTable;
}

function initGen2FloorHeat() {
  const enableCheck = document.querySelector('#gen2FHEnable');
  const fhContent = document.querySelector('#gen2FHContent');
  const fhBody = document.querySelector('#gen2FHBody');
  if (!enableCheck || !fhContent || !fhBody) return;

  enableCheck.addEventListener('change', () => {
    fhContent.style.display = enableCheck.checked ? 'block' : 'none';
    updateGen2Summary();
  });

  function updateFloorHeat() {
    const rows = fhBody.querySelectorAll('tr:not(.fh-system-total)');
    const rooms = [];
    rows.forEach(tr => {
      const floor = tr.querySelector('.fh-floor')?.textContent || '';
      const name = tr.querySelector('.fh-name')?.textContent || '';
      const area = Number(tr.querySelector('.fh-area')?.textContent || 0);
      const heatInput = tr.querySelector('.fh-heat-input');
      const heatPerArea = Number(heatInput?.value || 160);
      const sysid = tr.dataset.sysid || '1';
      const heatTotal = Math.ceil((area * heatPerArea) / 100) / 10;
      rooms.push({ floor, name, area, heatPerArea, heatTotal, sysid });
    });

    const sysGroups = {};
    rooms.forEach(r => {
      if (!sysGroups[r.sysid]) sysGroups[r.sysid] = [];
      sysGroups[r.sysid].push(r);
    });

    const a2w = smartSelectorData.a2wModels;
    const sysIds = Object.keys(sysGroups).sort((a, b) => a - b);
    let html = '';

    sysIds.forEach(sysid => {
      const group = sysGroups[sysid];
      const totalHeat = group.reduce((s, r) => s + r.heatTotal, 0);

      let matched = a2w[a2w.length - 1];
      for (const m of a2w) {
        if (m.heating >= totalHeat) { matched = m; break; }
      }

      group.forEach((r, idx) => {
        const rowspan = idx === 0 ? `rowspan="${group.length}"` : '';

        html += `<tr data-sysid="${sysid}">
          <td class="fh-floor">${r.floor}</td>
          <td class="fh-name">${r.name}</td>
          <td class="fh-area">${r.area}</td>
          <td><input type="number" class="fh-heat-input" value="${r.heatPerArea}" min="80" max="300" step="10" style="width:60px" /></td>
          <td class="fh-total">${r.heatTotal.toFixed(1)}</td>
          <td class="fh-sysid-cell">${sysid}</td>
          ${rowspan ? `<td class="fh-a2w-cell" ${rowspan}>
            <select class="fh-a2w-select" data-sysid="${sysid}">
              <option value="${matched.model}">${matched.model}（${matched.heating}kW·普通款）</option>
              <option value="${matched.suffixE}">${matched.suffixE}（${matched.heating}kW·电加热款）</option>
            </select>
          </td>
          <td class="fh-a2w-capacity" ${rowspan}>${matched.heating}</td>` : ''}
        </tr>`;
      });

      html += `<tr class="fh-system-total">
        <td colspan="4" style="text-align:right;font-weight:700;background:#f8f9fa">系统${sysid}合计</td>
        <td style="font-weight:700;background:#f8f9fa">${totalHeat.toFixed(1)}</td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
        <td style="background:#f8f9fa"></td>
      </tr>`;
    });

    fhBody.innerHTML = html;
    updateGen2Summary();
  }

  function syncFromAc() {
    const acRows = document.querySelectorAll('#gen2AcRoomTableBody tr:not(.ac-system-total):not(.ac-humid-row)');
    fhBody.innerHTML = '';
    acRows.forEach(row => {
      const name = row.querySelector('.ac-r-name')?.value || '';
      const floor = row.querySelector('.ac-r-floor')?.value || '';
      const area = parseFloat(row.querySelector('.ac-r-area')?.value || '0');
      const sysid = row.querySelector('.ac-r-sysid')?.value || '1';
      if (!name && area <= 0) return;
      const tr = document.createElement('tr');
      tr.dataset.sysid = sysid;
      tr.innerHTML = `
        <td class="fh-floor">${floor}</td>
        <td class="fh-name">${name}</td>
        <td class="fh-area">${area}</td>
        <td><input type="number" class="fh-heat-input" value="160" min="80" max="300" step="10" style="width:60px" /></td>
        <td class="fh-total">—</td>
        <td class="fh-sysid-cell">${sysid}</td>
      `;
      fhBody.appendChild(tr);
    });
    updateFloorHeat();
  }

  fhBody.addEventListener('input', (e) => {
    if (e.target.matches('.fh-heat-input')) {
      updateFloorHeat();
    }
  });
  fhBody.addEventListener('change', (e) => {
    if (e.target.matches('.fh-a2w-select')) {
      updateGen2Summary();
    }
  });

  syncFromAc();

  const acBody = document.querySelector('#gen2AcRoomTableBody');
  if (acBody) {
    acBody.addEventListener('input', (e) => {
      if (e.target.matches('.ac-r-name, .ac-r-area, .ac-r-floor, .ac-r-sysid')) {
        setTimeout(syncFromAc, 50);
      }
    });
    acBody.addEventListener('change', (e) => {
      if (e.target.matches('.ac-r-sysid')) {
        setTimeout(syncFromAc, 50);
      }
    });
  }

  document.querySelector('#gen2AcAddRoomBtn')?.addEventListener('click', () => {
    setTimeout(syncFromAc, 100);
  });
}

function updateGen2Summary() {
  const sumBody = document.querySelector('#gen2SummaryBody');
  if (!sumBody) return;

  const hasFHModule = document.querySelector('#gen2FHEnable')?.checked;
  const itemMap = new Map();
  const itemOrder = [];

  function addOrMerge(category, type, model, count = 1, isOptional = false) {
    if (!model) return;
    const key = `${type}|||${model}`;
    if (itemMap.has(key)) {
      itemMap.get(key).count += count;
    } else {
      itemMap.set(key, { category, type, model, count, isOptional });
      itemOrder.push(key);
    }
  }

  const freshSysRows = document.querySelectorAll('#gen2FreshEquipBody .sf-system-row');
  freshSysRows.forEach(row => {
    const fanTypeName = gen2SelectorData.fanTypes.humidity?.label || '调湿';
    const fanModel = row.querySelector('.sf-fan-model')?.value || '';
    const humidVal = row.querySelector('.sf-humid-module')?.value || '';
    const airflow = Number(row.dataset.airflow || 0);
    const ventCount = Math.max(1, Math.ceil(airflow / 40));

    addOrMerge('新风模块', `新风机（${fanTypeName}）`, fanModel);
    if (humidVal && humidVal !== 'none') addOrMerge('新风模块', '调湿模块', humidVal);
  });

  const acRows = document.querySelectorAll('#gen2AcRoomTableBody tr:not(.ac-system-total):not(.ac-humid-row)');
  acRows.forEach(row => {
    const model = row.querySelector('.ac-r-model-select')?.value || '';
    const count = Number(row.querySelector('.ac-r-count')?.value) || 0;
    if (model && count > 0) addOrMerge('空调模块', '空调内机', model, count);
  });
  const seenOutdoor = new Set();
  document.querySelectorAll('#gen2AcRoomTableBody tr').forEach(row => {
    const outdoorCell = row.querySelector('.ac-r-outdoor select');
    if (outdoorCell && outdoorCell.value && !seenOutdoor.has(outdoorCell.value)) {
      seenOutdoor.add(outdoorCell.value);
      addOrMerge('空调模块', '空调外机', outdoorCell.value);
    }
  });
  addOrMerge('空调模块', '空调控制器', hasFHModule ? smartSelectorData.controllers.withFloorHeat : smartSelectorData.controllers.withoutFloorHeat);

  if (hasFHModule) {
    document.querySelectorAll('#gen2FHBody .fh-a2w-select').forEach(sel => {
      const a2wModel = sel.value || '';
      if (a2wModel) addOrMerge('地暖模块', 'A2W水力模块', a2wModel);
    });
  }

  addOrMerge('控制系统', '空调网关', smartSelectorData.controllers.gateway);
  addOrMerge('控制系统', '6恒控制器', smartSelectorData.controllers.gen2Main);

  if (itemOrder.length === 0) {
    sumBody.innerHTML = '<tr><td colspan="4" class="summary-empty">请先完成选型</td></tr>';
    return;
  }

  const categoryOrder = ['新风模块', '空调模块', '地暖模块', '控制系统'];
  const grouped = new Map();
  for (const key of itemOrder) {
    const cat = itemMap.get(key).category;
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat).push(key);
  }

  let html = '';
  for (const cat of categoryOrder) {
    const keys = grouped.get(cat);
    if (!keys || keys.length === 0) continue;
    keys.forEach((key, idx) => {
      const item = itemMap.get(key);
      html += '<tr>';
      if (idx === 0) {
        html += `<td class="sum-category" rowspan="${keys.length}">${cat}</td>`;
      }
      html += `<td>${item.type}</td>`;
      html += `<td>${item.model}</td>`;
      if (item.isOptional) {
        html += `<td class="sum-check-col"><input type="checkbox" checked /></td>`;
      } else {
        html += `<td>${item.count}</td>`;
      }
      html += '</tr>';
    });
  }
  sumBody.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', initSixGen2Selector);

function initSelectorHub() {
  const hub = document.querySelector('#selxHub');
  if (!hub) return;

  const modules = document.querySelectorAll('.selx-module');
  const hubCards = hub.querySelectorAll('.selx-hub-card');
  const backBtns = document.querySelectorAll('.selx-back-btn');

  function showModule(targetId) {
    hub.style.display = 'none';
    modules.forEach(m => {
      m.style.display = m.id === 'mod-' + targetId ? 'block' : 'none';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showHub() {
    modules.forEach(m => { m.style.display = 'none'; });
    hub.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hubCards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.target;
      if (target) showModule(target);
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', showHub);
  });

  const hash = window.location.hash.replace('#', '');
  if (hash && document.querySelector('#mod-' + hash)) {
    showModule(hash);
  }
}

document.addEventListener('DOMContentLoaded', initSelectorHub);

// 首页头图轮播
function initBannerCarousel() {
  const carousels = document.querySelectorAll('.banner-carousel');
  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll('.banner-slide');
    const dots = carousel.querySelectorAll('.banner-dot');
    const prevBtn = carousel.querySelector('.banner-prev');
    const nextBtn = carousel.querySelector('.banner-next');
    if (slides.length === 0) return;

    let index = 0;
    let timer = null;
    const INTERVAL = 4500;

    const show = (i) => {
      const next = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === next));
      dots.forEach((d, k) => d.classList.toggle('active', k === next));
      index = next;
    };

    const start = () => {
      stop();
      timer = setInterval(() => show(index + 1), INTERVAL);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    if (prevBtn) prevBtn.addEventListener('click', () => { show(index - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { show(index + 1); start(); });
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = Number(dot.dataset.index);
        if (!Number.isNaN(target)) {
          show(target);
          start();
        }
      });
    });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    // 触摸滑动支持
    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
      stop();
    }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
      start();
    }, { passive: true });

    start();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initBannerCarousel();
  
  const compareTabs = document.querySelectorAll('.compare-tab');
  if (compareTabs.length > 0) {
    const activeTab = document.querySelector('.compare-tab.active');
    const initialType = activeTab ? activeTab.dataset.tab : 'freshAir';
    
    // 创建包装函数来处理切换
    const renderCompareWithType = (type = "freshAir") => {
      if (!compareFeature) return;

      const series = type === "freshAir" ? featureSeries : dehumidifySeries;
      const categories = type === "freshAir" ? featureCategories : dehumidifyCategories;

      const seriesNames = type === "freshAir" ? {
        zjd3c: "智净系列",
        zdp2c: "薄型系列",
        zm2c: "迷你系列",
      } : {
        zxh1c: "智爽除湿",
        zxc2c: "除湿全热",
        nxc2c: "新风除湿",
        nc1c: "新风除湿",
      };

      let html = `<thead><tr><th>分类</th><th>功能</th>`;
      
      if (type === "dehumidify") {
        // 除湿产品：每个产品单独一列，添加类型装饰背景
        html += series.map(s => `
          <th>
            <div class="dehumidify-type-bg" data-type="${s.type}">${s.type}</div>
            <div class="series-badge" data-series="${s.id}">${s.name}</div>
            <div class="series-highlight">${s.highlight}</div>
          </th>
        `).join("");
      } else {
        // 新风产品：系列合并显示
        html += series.map(s => `
          <th>
            <span class="series-badge" data-series="${s.id}">${seriesNames[s.id]}</span>
            <div class="series-highlight">${s.highlight}</div>
          </th>
        `).join("");
      }
      html += `</tr></thead>`;

      categories.forEach(cat => {
        html += `<tbody class="feature-group">`;
        cat.rows.forEach((row, ri) => {
          html += `<tr>`;
          if (ri === 0) html += `<td class="feature-category" rowspan="${cat.rows.length}">${cat.name}</td>`;
          html += `<td class="feature-label">${row.label}</td>`;
          series.forEach(s => {
            const value = renderFeatureValue(row.values[s.id], row.text);
            let highlightClass = '';
            if (type === 'freshAir') {
              const zjd3cFeatures = ["活性炭滤网", "御风箱（选配）", "CO₂传感器", "甲醛传感器", "旁通模式"];
              const zdp2cFeatures = ["消毒功能", "加强PM2.5过滤网", "PM2.5传感器", "自动模式", "高静压模式", "内循环"];
              if (zjd3cFeatures.includes(row.label) && s.id === 'zjd3c') highlightClass = 'feature-zjd3c';
              if (zdp2cFeatures.includes(row.label) && s.id === 'zdp2c') highlightClass = 'feature-zdp2c';
            }
            html += `<td class="feature-cell ${highlightClass}" data-series="${s.id}">${value}</td>`;
          });
          html += `</tr>`;
        });
        html += `</tbody>`;
      });

      compareFeature.innerHTML = html;
      if (type === "dehumidify") {
        compareFeature.classList.add("dehumidify");
      } else {
        compareFeature.classList.remove("dehumidify");
      }
    };

    const renderCompareParamsWithType = (type = "freshAir") => {
      if (!compareParams) return;

      const seriesIds = type === "freshAir" ? ["zjd3c", "zdp2c", "zm2c"] : ["zxh1c", "zxc2c", "nxc2c", "nc1c"];

      const seriesNames = type === "freshAir" ? {
        zjd3c: "智净系列",
        zdp2c: "薄型系列",
        zm2c: "迷你系列",
      } : {
        zxh1c: "智爽除湿",
        zxc2c: "除湿全热",
        nxc2c: "新风除湿",
        nc1c: "新风除湿",
      };

      const models = [];
      for (const id of seriesIds) {
        const p = paramsMap[id];
        if (p) {
          for (const m of p.models) {
            models.push({ seriesId: id, model: m });
          }
        }
      }

      if (models.length === 0) {
        compareParams.innerHTML = `<tbody><tr><td colspan="100">暂无参数数据</td></tr></tbody>`;
        return;
      }

      let html = `<thead><tr><th>参数</th>`;
      
      if (type === "dehumidify") {
        // 除湿产品：添加类型装饰背景
        seriesIds.forEach(id => {
          const p = paramsMap[id];
          const count = p ? p.models.length : 0;
          const series = dehumidifySeries.find(s => s.id === id);
          const typeName = series ? series.type : seriesNames[id];
          html += `<th colspan="${count}" style="text-align:center"><div class="dehumidify-type-bg" data-type="${typeName}">${typeName}</div></th>`;
        });
      } else {
        seriesIds.forEach(id => {
          const p = paramsMap[id];
          const count = p ? p.models.length : 0;
          html += `<th colspan="${count}" style="text-align:center">${seriesNames[id]}</th>`;
        });
      }
      html += `</tr><tr><th></th>`;
      models.forEach(m => { html += `<th>${m.model}</th>`; });
      html += `</tr></thead><tbody>`;

      paramsMap[seriesIds[0]].specs.forEach((spec, si) => {
        html += `<tr><td class="param-label">${spec.label}${spec.unit ? `（${spec.unit}）` : ""}</td>`;
        models.forEach(m => {
          const p = paramsMap[m.seriesId];
          if (!p) {
            html += `<td>-</td>`;
          } else {
            html += `<td>${p.specs[si].values[p.models.indexOf(m.model)]}</td>`;
          }
        });
        html += `</tr>`;
      });

      html += `</tbody>`;
      compareParams.innerHTML = html;
      if (type === "dehumidify") {
        compareParams.classList.add("dehumidify");
      } else {
        compareParams.classList.remove("dehumidify");
      }
    };

    renderCompareWithType(initialType);
    renderCompareParamsWithType(initialType);
    
    compareTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const type = tab.dataset.tab;
        
        compareTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        renderCompareWithType(type);
        renderCompareParamsWithType(type);
      });
    });
  }
});
