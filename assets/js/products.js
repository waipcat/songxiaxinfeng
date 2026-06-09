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

function renderFeatureValue(val, isText) {
  if (isText) return val;
  if (val === true) return '<span class="check-yes">✓</span>';
  if (val === false) return '<span class="check-no">–</span>';
  return val;
}

function openProduct(id) {
  const modal = document.querySelector("#productModal");
  const modalContent = document.querySelector("#modalContent");
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
  const modal = document.querySelector("#productModal");
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
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

document.addEventListener('DOMContentLoaded', () => renderProducts());

