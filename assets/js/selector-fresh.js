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


