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

document.addEventListener('DOMContentLoaded', initBannerCarousel);

/**
 * 为选型表格启用 Excel 批量粘贴功能
 * 
 * 用户从 Excel 复制数据后，点击表格中起始单元格，按 Ctrl+V 即可批量粘贴。
 * 粘贴数据按制表符(\t)分隔列、换行符(\n)分隔行，从聚焦单元格位置开始填充，
 * 超出表格行数时自动调用 addRowFn 添加新行。
 *
 * @param {HTMLElement} tbody - 表格的 tbody 元素
 * @param {Function} addRowFn - 添加一行数据的函数（无参调用）
 */
function enableTablePaste(tbody, addRowFn) {
  if (!tbody) return;

  tbody.addEventListener('paste', function (e) {
    // 只处理在 input/select 元素上的粘贴
    const target = e.target;
    if (target.tagName !== 'INPUT' && target.tagName !== 'SELECT') return;
    if (target.closest('.room-del, .ac-del-btn, .humid-del-btn')) return;

    e.preventDefault();

    const clipboardData = e.clipboardData || window.clipboardData;
    if (!clipboardData) return;

    const pastedText = clipboardData.getData('text/plain');
    if (!pastedText || !pastedText.trim()) return;

    // 解析 TSV：按行分割，过滤空行
    const lines = pastedText.split('\n').filter(function (r) { return r.trim(); });
    if (lines.length === 0) return;

    const data = lines.map(function (l) { return l.split('\t'); });

    // 确定当前聚焦的行和列位置
    var currentRow = target.closest('tr');
    if (!currentRow) return;

    var allRows = Array.from(tbody.querySelectorAll('tr'));
    var rowIdx = allRows.indexOf(currentRow);
    if (rowIdx === -1) return;

    // 获取当前行中所有可编辑元素（input + select）
    var editableEls = Array.from(currentRow.querySelectorAll('input, select'));
    var colIdx = editableEls.indexOf(target);
    if (colIdx === -1) return;

    // 计算需要添加的行数
    var neededRows = rowIdx + data.length;
    var currentRows = allRows.length;

    // 先添加行，再填充数据
    if (neededRows > currentRows && typeof addRowFn === 'function') {
      var rowsToAdd = neededRows - currentRows;
      for (var k = 0; k < rowsToAdd; k++) {
        addRowFn();
      }
    }

    // 重新获取所有行（添加行后 DOM 已更新）
    allRows = Array.from(tbody.querySelectorAll('tr'));

    // 逐行填充数据
    for (var ri = 0; ri < data.length; ri++) {
      var tr = allRows[rowIdx + ri];
      if (!tr) continue;

      var els = Array.from(tr.querySelectorAll('input, select'));
      var rowData = data[ri];

      for (var ci = 0; ci < rowData.length; ci++) {
        var inputIdx = colIdx + ci;
        if (inputIdx >= els.length) break;

        var el = els[inputIdx];
        if (el.tagName !== 'INPUT' && el.tagName !== 'SELECT') continue;

        var val = rowData[ci].trim();

        // 跳过空字符串（防止覆盖已有默认值）
        if (val === '') continue;

        el.value = val;

        // 触发 input 事件实时计算
        el.dispatchEvent(new Event('input', { bubbles: true }));
      }

      // 在最后一行触发 change 事件驱动完整计算
      var lastEl = els[els.length - 1];
      if (lastEl) {
        lastEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  });
}

