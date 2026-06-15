function exportSelectorPDF(type) {
  const existing = document.querySelector('.export-dialog-overlay');
  if (existing) existing.remove();

  const isGen2 = type === 'gen2';
  const label = isGen2 ? '6恒2代' : '6恒智选';

  const overlay = document.createElement('div');
  overlay.className = 'export-dialog-overlay';
  overlay.innerHTML = `
    <div class="export-dialog">
      <div class="export-dialog-header">
        <h3>导出${label}报价单</h3>
        <button class="export-dialog-close" aria-label="关闭">&times;</button>
      </div>
      <div class="export-dialog-body">
        <p class="export-dialog-desc">请填写项目信息，将生成 PDF 格式的选型报价单。</p>
        <div class="export-form-row">
          <label>客户名称</label>
          <input type="text" id="exportCustomer" placeholder="请输入客户名称" />
        </div>
        <div class="export-form-row">
          <label>项目地址</label>
          <input type="text" id="exportAddress" placeholder="请输入项目地址" />
        </div>
        <div class="export-form-row">
          <label>联系电话</label>
          <input type="text" id="exportPhone" placeholder="请输入联系电话" />
        </div>
        <div class="export-form-row">
          <label>备注</label>
          <textarea id="exportNotes" placeholder="可填写特殊要求或说明"></textarea>
        </div>
      </div>
      <div class="export-dialog-footer">
        <button class="export-cancel-btn">取消</button>
        <button class="export-confirm-btn">生成报价单</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('.export-dialog-close').addEventListener('click', () => overlay.remove());
  overlay.querySelector('.export-cancel-btn').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

  overlay.querySelector('.export-confirm-btn').addEventListener('click', () => {
    const info = {
      customer: document.querySelector('#exportCustomer')?.value || '',
      address: document.querySelector('#exportAddress')?.value || '',
      phone: document.querySelector('#exportPhone')?.value || '',
      notes: document.querySelector('#exportNotes')?.value || '',
    };
    overlay.remove();
    generatePDF(type, info);
  });
}

function generatePDF(type, info) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 15;

  const isGen2 = type === 'gen2';
  const title = isGen2 ? '松下6恒气候站2代 · 选型报价单' : '松下6恒气候站智选 · 选型报价单';

  const headerBg = [96, 93, 236];
  const headerText = [255, 255, 255];
  const altRowBg = [248, 249, 252];
  const borderColor = [210, 215, 225];
  const sectionColor = [96, 93, 236];

  let currentY = margin;
  let footerAdded = false;

  function checkNewPage(needed) {
    if (currentY + needed > pageH - 20) {
      addFooter();
      doc.addPage();
      currentY = margin;
      footerAdded = false;
      return true;
    }
    return false;
  }

  function addFooter() {
    if (footerAdded) return;
    footerAdded = true;
    const pg = doc.internal.getCurrentPageInfo().pageNumber;
    const total = doc.internal.getNumberOfPages();
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('Panasonic · 松下新风产品中心', margin, pageH - 8);
    doc.text(`第 ${pg} 页 / 共 ${total} 页`, pageW - margin, pageH - 8, { align: 'right' });
    doc.setDrawColor(220, 220, 220);
    doc.line(margin, pageH - 12, pageW - margin, pageH - 12);
  }

  function drawHeader() {
    doc.setFillColor(96, 93, 236);
    doc.rect(0, 0, pageW, 38, 'F');
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text(title, margin, 16);
    doc.setFontSize(9);
    doc.setTextColor(200, 200, 255);
    doc.text('Panasonic · 6恒气候站全屋舒适系统', margin, 25);

    if (info.customer || info.address || info.phone) {
      doc.setFontSize(9);
      doc.setTextColor(180, 180, 255);
      let infoLine = '';
      if (info.customer) infoLine += '客户：' + info.customer;
      if (info.phone) infoLine += (infoLine ? '  |  ' : '') + '电话：' + info.phone;
      doc.text(infoLine, margin, 33);
      if (info.address) {
        doc.text('地址：' + info.address, pageW - margin, 33, { align: 'right' });
      }
    } else {
      doc.setFontSize(9);
      doc.setTextColor(180, 180, 255);
      doc.text('生成日期：' + new Date().toLocaleDateString('zh-CN'), pageW - margin, 25);
    }
    currentY = 44;
  }

  function drawSectionTitle(text) {
    checkNewPage(18);
    doc.setFillColor(...sectionColor);
    doc.roundedRect(margin, currentY, 4, 10, 1, 1, 'F');
    doc.setFontSize(12);
    doc.setTextColor(...sectionColor);
    doc.text(text, margin + 8, currentY + 7);
    currentY += 14;
  }

  function drawTable(headers, rows, colWidths, opts) {
    opts = opts || {};
    checkNewPage(16);

    doc.autoTable({
      startY: currentY,
      margin: { left: margin, right: margin },
      head: [headers],
      body: rows,
      theme: 'grid',
      styles: {
        fontSize: opts.fontSize || 7.5,
        cellPadding: 2.2,
        overflow: 'linebreak',
        textColor: [30, 30, 30],
        lineColor: borderColor,
        lineWidth: 0.25,
        minCellHeight: opts.rowH || 7,
        halign: 'center',
        valign: 'middle',
      },
      headStyles: {
        fillColor: headerBg,
        textColor: headerText,
        fontStyle: 'bold',
        fontSize: opts.fontSize || 7.5,
        halign: 'center',
        minCellHeight: (opts.rowH || 7) + 1,
      },
      alternateRowStyles: {
        fillColor: altRowBg,
      },
      columnStyles: opts.columnStyles || {},
    });

    currentY = doc.lastAutoTable.finalY + 6;
  }

  function readTableData(bodyId) {
    const tbody = document.querySelector(bodyId);
    if (!tbody) return [];
    const rows = [];
    tbody.querySelectorAll('tr').forEach(tr => {
      if (tr.classList.contains('sf-system-row')) return;
      const cells = [];
      tr.querySelectorAll('td').forEach(td => {
        if (td.querySelector('.room-del') || td.querySelector('.ac-del-btn')) return;
        const input = td.querySelector('input:not([type="button"]):not([type="checkbox"])');
        const select = td.querySelector('select');
        if (select) {
          cells.push(select.options[select.selectedIndex]?.text || select.value || '');
        } else if (input) {
          cells.push(input.value || '');
        } else {
          cells.push(td.textContent?.trim() || '');
        }
      });
      if (cells.length > 0) rows.push(cells);
    });
    return rows;
  }

  function readEquipTable(bodyId) {
    const tbody = document.querySelector(bodyId);
    if (!tbody) return [];
    const rows = [];
    tbody.querySelectorAll('.sf-system-row').forEach(tr => {
      const cells = [];
      tr.querySelectorAll('td').forEach(td => {
        const select = td.querySelector('select');
        if (select) {
          cells.push(select.options[select.selectedIndex]?.text || select.value || '');
        } else {
          cells.push(td.textContent?.trim() || '');
        }
      });
      if (cells.length > 0) rows.push(cells);
    });
    return rows;
  }

  function readSummaryTable(bodyId) {
    const tbody = document.querySelector(bodyId);
    if (!tbody) return [];
    const rows = [];
    tbody.querySelectorAll('tr').forEach(tr => {
      const cells = [];
      tr.querySelectorAll('td').forEach(td => {
        const select = td.querySelector('select');
        if (select) {
          cells.push(select.options[select.selectedIndex]?.text || select.value || '');
        } else {
          cells.push(td.textContent?.trim() || '');
        }
      });
      if (cells.length > 0) rows.push(cells);
    });
    return rows;
  }

  drawHeader();

  // === 新风选型 ===
  const freshBodyId = isGen2 ? '#gen2FreshBody' : '#smartFreshBody';
  const freshData = readTableData(freshBodyId);
  if (freshData.length > 0) {
    drawSectionTitle('一、新风选型');
    drawTable(
      ['楼层', '系统', '房间名称', '面积(m\u00B2)', '层高(m)', '换气次数(次/h)', '计算风量(m\u00B3/h)', '风口数量'],
      freshData.map(r => [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]]),
      [20, 18, 40, 22, 22, 28, 28, 22],
      { columnStyles: { 2: { halign: 'left' } } }
    );
  }

  // 新风设备选型
  const freshEquipBodyId = isGen2 ? '#gen2FreshEquipBody' : '#smartFreshEquipBody';
  const equipData = readEquipTable(freshEquipBodyId);
  if (equipData.length > 0) {
    drawSectionTitle('新风设备选型');
    if (isGen2) {
      drawTable(
        ['系统编号', '推荐新风机', '调湿模块（选配）'],
        equipData.map(r => [r[0], r[1], r[2]]),
        [30, 80, 80]
      );
    } else {
      drawTable(
        ['系统编号', '调湿类型', '推荐新风机', '加湿模块', '御风箱', '御风组件'],
        equipData.map(r => [r[0], r[1], r[2], r[3], r[4], r[5] || '']),
        [24, 30, 60, 40, 40, 40]
      );
    }
  }

  // === 空调选型 ===
  const acBodyId = isGen2 ? '#gen2AcRoomTableBody' : '#sixAcRoomTableBody';
  const acData = [];
  const acTbody = document.querySelector(acBodyId);
  if (acTbody) {
    acTbody.querySelectorAll('tr').forEach(tr => {
      if (tr.classList.contains('ac-system-total')) {
        const totalText = tr.querySelector('td:nth-child(1)')?.textContent?.trim() || '';
        const capacityText = tr.querySelector('td:nth-child(9)')?.textContent?.trim() || '';
        const overRatioText = tr.querySelector('td:nth-child(12)')?.textContent?.trim() || '';
        acData.push({
          isTotal: true,
          cells: [totalText, '', '', '', '', '', '', capacityText, '', overRatioText, '']
        });
        return;
      }
      if (tr.classList.contains('ac-humid-row')) {
        const cells = [];
        tr.querySelectorAll('td').forEach((td, idx) => {
          if (td.querySelector('.ac-del-btn') || td.querySelector('.humid-del-btn')) return;
          const select = td.querySelector('select');
          if (select) {
            cells.push(select.options[select.selectedIndex]?.text || select.value || '');
          } else {
            cells.push(td.textContent?.trim() || '');
          }
        });
        if (cells.length > 0) acData.push({ isHumid: true, cells });
        return;
      }
      const cells = [];
      tr.querySelectorAll('td').forEach((td, idx) => {
        if (td.querySelector('.ac-del-btn')) return;
        const select = td.querySelector('select');
        const input = td.querySelector('input');
        if (select) {
          cells.push(select.options[select.selectedIndex]?.text || select.value || '');
        } else if (input) {
          cells.push(input.value || '');
        } else {
          cells.push(td.textContent?.trim() || '');
        }
      });
      if (cells.length > 0) acData.push({ cells });
    });
  }

  if (acData.length > 0) {
    checkNewPage(30);
    drawSectionTitle('二、空调选型');
    const acHeaders = ['楼层', '房间', '面积(m\u00B2)', '冷负荷(W/m\u00B2)', '所需冷量(kW)', '选配型号', '台数', '设备制冷量(kW)', '系统编号', '室外机型号', '外机制冷量(kW)'];
    const acRows = acData.map(d => {
      const c = d.cells;
      if (d.isTotal) return ['', c[0], '', '', '', '', '', '', c[8] || '', '', c[10] || ''];
      return [c[0], c[1], c[2], c[3], c[4], c[6] || c[5], c[7], c[8], c[10] || c[9], c[11], c[12]];
    });
    drawTable(acHeaders, acRows, [18, 28, 20, 24, 24, 50, 12, 26, 18, 50, 26], { fontSize: 7, rowH: 6 });
  }

  // === 地暖选型 ===
  const fhEnabled = isGen2
    ? document.querySelector('#gen2FHEnable')?.checked
    : document.querySelector('#smartFHEnable')?.checked;
  const fhBodyId = isGen2 ? '#gen2FHBody' : '#smartFHBody';
  const fhData = [];
  const fhTbody = document.querySelector(fhBodyId);
  if (fhTbody && fhEnabled !== false) {
    fhTbody.querySelectorAll('tr').forEach(tr => {
      const cells = [];
      tr.querySelectorAll('td').forEach(td => {
        const input = td.querySelector('input');
        if (input) {
          cells.push(input.value || '');
        } else {
          cells.push(td.textContent?.trim() || '');
        }
      });
      if (cells.length > 0) fhData.push(cells);
    });
  }
  if (fhData.length > 0) {
    checkNewPage(30);
    drawSectionTitle('三、地暖选型');
    drawTable(
      ['楼层', '房间名称', '面积(m\u00B2)', '单位面积制热量(W/m\u00B2)', '所需制热量(kW)', '系统编号', 'A2W水力模块', '设备制热量(kW)'],
      fhData.map(r => [r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]]),
      [20, 35, 22, 30, 26, 20, 60, 26]
    );
  }

  // === 设备汇总 ===
  const sumBodyId = isGen2 ? '#gen2SummaryBody' : '#sumAllBody';
  const sumData = readSummaryTable(sumBodyId);
  if (sumData.length > 0) {
    checkNewPage(30);
    drawSectionTitle('四、设备汇总');
    drawTable(
      ['大类', '设备类型', '型号', '数量'],
      sumData.map(r => [r[0] || '', r[1] || '', r[2] || '', r[3] || '']),
      [40, 50, 80, 30],
      { columnStyles: { 2: { halign: 'left' } } }
    );
  }

  // 备注
  if (info.notes) {
    checkNewPage(20);
    drawSectionTitle('备注');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(info.notes, margin, currentY, { maxWidth: contentW, lineHeightFactor: 1.6 });
    currentY += Math.ceil(info.notes.length / 60) * 5 + 8;
  }

  addFooter();

  // Fix page counts
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`第 ${i} 页 / 共 ${totalPages} 页`, pageW - margin, pageH - 8, { align: 'right' });
  }

  const fileName = (isGen2 ? '松下6恒2代' : '松下6恒智选') + '选型报价单_' + new Date().toISOString().slice(0, 10) + '.pdf';
  doc.save(fileName);
}
