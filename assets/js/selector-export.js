function initSelectorExport() {
  document.querySelectorAll('[data-export-xlsx]').forEach(btn => {
    btn.addEventListener('click', () => exportXlsx(btn.dataset.exportXlsx));
  });
}

function getCellValue(td) {
  const input = td.querySelector('input, select');
  if (input) {
    if (input.tagName === 'SELECT') return input.options[input.selectedIndex]?.text || input.value || '';
    if (input.type === 'checkbox') return input.checked ? '是' : '';
    return input.value || '';
  }
  return td.textContent.trim().replace(/\s+/g, ' ');
}

function buildGrid(tableSelector) {
  let table = document.querySelector(tableSelector);
  if (!table) return null;
  if (table.tagName === 'TBODY') table = table.closest('table');
  if (!table) return null;
  const headerRow = table.querySelector('thead tr');
  if (!headerRow) return null;
  const tbody = table.querySelector('tbody');

  const headerCells = headerRow.querySelectorAll('th');
  const numCols = Array.from(headerCells).reduce((s, th) => s + (th.colSpan || 1), 0);
  const headers = [];
  headerCells.forEach(th => {
    const cs = th.colSpan || 1;
    const txt = th.textContent.trim().replace(/\s+/g, ' ');
    for (let c = 0; c < cs; c++) headers.push(c === 0 ? txt : '');
  });

  const bodyRows = tbody ? tbody.querySelectorAll('tr') : table.querySelectorAll('tbody tr');
  const merges = [];
  const occupied = new Set();
  const grid = [];

  bodyRows.forEach(tr => {
    const rowData = new Array(numCols).fill('');
    let col = 0;
    tr.querySelectorAll('td').forEach(td => {
      while (occupied.has(grid.length + ',' + col)) col++;
      const rs = td.rowSpan || 1;
      const cs = td.colSpan || 1;
      const val = getCellValue(td);
      for (let dr = 0; dr < rs; dr++) {
        for (let dc = 0; dc < cs; dc++) {
          occupied.add((grid.length + dr) + ',' + (col + dc));
          if (dr === 0 && dc === 0) rowData[col] = val;
        }
      }
      if (rs > 1 || cs > 1) merges.push({ s: { r: grid.length, c: col }, e: { r: grid.length + rs - 1, c: col + cs - 1 } });
      col += cs;
    });
    grid.push(rowData);
  });

  return { headers, grid, merges, numCols, isTotal: idx => {
    const tr = bodyRows[idx];
    return tr ? (tr.classList.contains('ac-system-total') || tr.classList.contains('fh-system-total')) : false;
  }};
}

function stripLastCol(gridData) {
  const h = gridData.headers.slice(0, -1);
  const g = gridData.grid.map(r => r.slice(0, -1));
  const m = gridData.merges
    .filter(ms => ms.s.c < h.length && ms.e.c < h.length)
    .map(ms => ({ s: { r: ms.s.r, c: ms.s.c }, e: { r: ms.e.r, c: Math.min(ms.e.c, h.length - 1) } }));
  return { headers: h, grid: g, merges: m };
}

async function exportXlsx(type) {
  if (typeof ExcelJS === 'undefined') { alert('导出库加载失败，请刷新页面重试'); return; }
  
  if (type === 'fresh') {
    await exportFreshXlsx();
    return;
  }
  
  const prefix = type === 'gen2' ? 'gen2' : 'smart';
  const typeName = type === 'gen2' ? '6恒2代' : '6恒智选';
  const wb = new ExcelJS.Workbook();
  const centerAlign = { horizontal: 'center', vertical: 'middle', wrapText: true };
  const headerFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF003366' } };
  const headerFont = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  const totalFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F3F6' } };
  const totalFont = { bold: true, size: 10 };
  const evenFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFAFBFC' } };
  const thinBorder = {
    top: { style: 'thin', color: { argb: 'FFD0D5DA' } },
    bottom: { style: 'thin', color: { argb: 'FFD0D5DA' } },
    left: { style: 'thin', color: { argb: 'FFD0D5DA' } },
    right: { style: 'thin', color: { argb: 'FFD0D5DA' } }
  };

  function toNum(v) {
    if (v === '' || v === null || v === undefined) return v;
    const s = String(v).trim();
    if (s === '' || isNaN(Number(s))) return v;
    return Number(s);
  }

  function addSheet(name, headers, grid, merges, totalIndices) {
    const ws = wb.addWorksheet(name);
    ws.addRow(headers.map(h => String(h)));
    const headerRow = ws.getRow(1);
    headerRow.eachCell(cell => {
      cell.alignment = centerAlign;
      cell.fill = headerFill;
      cell.font = headerFont;
      cell.border = thinBorder;
    });
    headerRow.height = 30;

    grid.forEach((row, ri) => {
      const r = ws.addRow(row.map(c => toNum(c)));
      const isTotal = totalIndices && totalIndices.has(ri);
      r.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        cell.alignment = centerAlign;
        cell.border = thinBorder;
        if (isTotal) {
          cell.fill = totalFill;
          cell.font = totalFont;
        } else if (ri % 2 === 0) {
          cell.fill = evenFill;
        }
      });
      r.height = 28;
    });

    if (merges && merges.length > 0) {
      merges.forEach(m => {
        ws.mergeCells(m.s.r + 2, m.s.c + 1, m.e.r + 2, m.e.c + 1);
      });
      for (let r = 2; r <= grid.length + 1; r++) {
        for (let c = 1; c <= headers.length; c++) {
          const cell = ws.getRow(r).getCell(c);
          cell.alignment = centerAlign;
          cell.border = thinBorder;
          const dataIdx = r - 2;
          if (totalIndices && totalIndices.has(dataIdx)) {
            cell.fill = totalFill;
            cell.font = totalFont;
          } else if (dataIdx % 2 === 0) {
            cell.fill = evenFill;
          }
        }
      }
    }

    ws.columns.forEach((col, i) => {
      let maxLen = String(headers[i] || '').length;
      grid.forEach(row => {
        const v = String(row[i] || '').length;
        if (v > maxLen) maxLen = v;
      });
      const cjkExtra = grid.reduce((sum, row) => {
        const s = String(row[i] || '');
        let extra = 0;
        for (const ch of s) { if (ch.charCodeAt(0) > 0x2E80) extra += 1; }
        return sum + extra;
      }, 0);
      const avgExtra = grid.length > 0 ? cjkExtra / grid.length : 0;
      col.width = Math.min(Math.max(maxLen + avgExtra + 6, 16), 60);
    });
  }

  const freshRaw = buildGrid('#' + prefix + 'FreshBody');
  const freshEquipRaw = buildGrid('#' + prefix + 'FreshEquipBody');
  if (freshRaw) {
    const fBase = stripLastCol(freshRaw);
    const airflowIdx = fBase.headers.indexOf('设计总风量(m³/h)');
    const insertAt = airflowIdx >= 0 ? airflowIdx + 1 : fBase.headers.length;

    if (freshEquipRaw && freshEquipRaw.grid.length > 0) {
      const equipSysidIdx = freshEquipRaw.headers.indexOf('系统编号');
      const equipHeaders = freshEquipRaw.headers.filter((_, i) => i !== equipSysidIdx);
      const equipData = freshEquipRaw.grid.map(row => ({ sysid: (row[equipSysidIdx] || '').replace(/\D/g, ''), values: row.filter((_, i) => i !== equipSysidIdx) }));

      fBase.headers.splice(insertAt, 0, ...equipHeaders);
      fBase.grid.forEach(row => row.splice(insertAt, 0, ...new Array(equipHeaders.length).fill('')));

      const sysidIdxFresh = fBase.headers.indexOf('系统编号');
      if (sysidIdxFresh >= 0) {
        const sysGroups = {};
        fBase.grid.forEach((row, idx) => {
          const sid = String(row[sysidIdxFresh]).trim();
          if (!sysGroups[sid]) sysGroups[sid] = [];
          sysGroups[sid].push(idx);
        });

        equipData.forEach(e => {
          const targetRows = sysGroups[e.sysid];
          if (!targetRows || targetRows.length === 0) return;
          const firstRow = targetRows[0];
          equipHeaders.forEach((_, ci) => {
            fBase.grid[firstRow][insertAt + ci] = e.values[ci] || '';
          });
          if (targetRows.length > 1) {
            equipHeaders.forEach((_, ci) => {
              fBase.merges.push({
                s: { r: firstRow, c: insertAt + ci },
                e: { r: targetRows[targetRows.length - 1], c: insertAt + ci }
              });
            });
          }
        });
      }
    }
    const totalIdx = new Set(freshRaw.grid.map((_, i) => i).filter(i => freshRaw.isTotal(i)));
    addSheet('新风选型', fBase.headers, fBase.grid, fBase.merges, totalIdx);
  }

  const acTableId = prefix === 'gen2' ? 'gen2AcRoomTableBody' : 'sixAcRoomTableBody';
  const acRaw = buildGrid('#' + acTableId);
  if (acRaw) {
    const ac = stripLastCol(acRaw);
    const totalIdx = new Set(acRaw.grid.map((_, i) => i).filter(i => acRaw.isTotal(i)));
    addSheet('空调选型', ac.headers, ac.grid, ac.merges, totalIdx);
  }

  const fhEnabled = document.querySelector('#' + prefix + 'FHEnable');
  if (!fhEnabled || fhEnabled.checked) {
    const fhRaw = buildGrid('#' + prefix + 'FHBody');
    if (fhRaw) {
      const totalIdx = new Set(fhRaw.grid.map((_, i) => i).filter(i => fhRaw.isTotal(i)));
      addSheet('地暖选型', fhRaw.headers, fhRaw.grid, fhRaw.merges, totalIdx);
    }
  }

  const sumTableId = prefix === 'gen2' ? 'gen2SummaryTable' : 'sumAllTable';
  const sumRaw = buildGrid('#' + sumTableId);
  if (sumRaw) addSheet('设备汇总', sumRaw.headers, sumRaw.grid, sumRaw.merges);

  if (wb._worksheets.length <= 1) { alert('没有可导出的数据，请先完成选型'); return; }
  const now = new Date();
  const ds = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = typeName + '_选型报告_' + ds + '.xlsx';
  a.click();
  URL.revokeObjectURL(url);
}

async function exportFreshXlsx() {
  if (typeof ExcelJS === 'undefined') { alert('导出库加载失败，请刷新页面重试'); return; }

  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('新风选型');

  const centerAlign = { horizontal: 'center', vertical: 'middle', wrapText: true };
  const leftAlign = { vertical: 'middle', wrapText: true };
  const headerFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF003366' } };
  const headerFont = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
  const labelFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F3F6' } };
  const labelFont = { bold: true, size: 10 };
  const thinBorder = {
    top: { style: 'thin', color: { argb: 'FFD0D5DA' } },
    bottom: { style: 'thin', color: { argb: 'FFD0D5DA' } },
    left: { style: 'thin', color: { argb: 'FFD0D5DA' } },
    right: { style: 'thin', color: { argb: 'FFD0D5DA' } }
  };

  /* ── 基本信息 ── */
  const activeMode = document.querySelector('#selxMode .mode-btn.active');
  const mode = activeMode ? activeMode.dataset.mode : 'simple';

  const checkedFeature = document.querySelector('#selxFeatures input:checked');
  const featureLabel = checkedFeature
    ? checkedFeature.closest('.feat-btn')?.querySelector('.feat-label')?.textContent || checkedFeature.value
    : '未选择';

  const airflowEl = document.querySelector('#selxAirflow');
  const airflow = airflowEl ? airflowEl.textContent.trim() : '—';
  const reasonEl = document.querySelector('#selxReason');
  const reason = reasonEl ? reasonEl.textContent.trim() : '';

  const deviceEl = document.querySelector('#selxDevice .selx-device-item');
  let deviceName = '';
  let deviceModel = '';
  if (deviceEl) {
    const nameEl = deviceEl.querySelector('.dev-name');
    const modelEl = deviceEl.querySelector('.dev-model');
    if (nameEl) deviceName = nameEl.textContent.trim().replace(/<br.*$/s, '').trim();
    if (modelEl) deviceModel = modelEl.textContent.trim();
  }

  function addBorder(row, from, to) {
    for (let c = from; c <= to; c++) {
      row.getCell(c).border = thinBorder;
    }
  }

  function setStyle(row, from, to, fill, font, align) {
    for (let c = from; c <= to; c++) {
      const cell = row.getCell(c);
      if (fill) cell.fill = fill;
      if (font) cell.font = font;
      if (align) cell.alignment = align;
      cell.border = thinBorder;
    }
  }

  /* ── Section 1: 选型信息 ── */
  let r = 1;
  let row = ws.getRow(r);
  row.getCell(1).value = '新风选型报告';
  row.font = { bold: true, size: 14, color: { argb: 'FF003366' } };
  row.height = 30;

  r = 3;
  row = ws.getRow(r);
  row.getCell(1).value = '项目';
  row.getCell(2).value = '内容';
  setStyle(row, 1, 2, headerFill, headerFont, centerAlign);
  row.height = 28;

  const infoRows = [
    ['产品功能型号', featureLabel],
    ['选型模式', mode === 'simple' ? '简易选型' : '标准选型'],
  ];

  if (mode === 'simple') {
    const area = document.querySelector('#simpArea')?.value || '';
    const height = document.querySelector('#simpHeight')?.value || '';
    const areaRatio = document.querySelector('#simpAreaRatio')?.value || '';
    const achRadio = document.querySelector('input[name="simpAch"]:checked');
    let ach = achRadio ? achRadio.value : '';
    if (ach === 'custom') {
      ach = document.querySelector('#simpAchCustom')?.value || '自定义';
    }
    infoRows.push(['建筑面积', area + ' m²']);
    infoRows.push(['层高', height + ' m']);
    infoRows.push(['新风面积比例', (Number(areaRatio) || 0) + '%']);
    infoRows.push(['换气次数', ach + ' 次/h']);
  }

  infoRows.forEach(item => {
    r++;
    row = ws.getRow(r);
    row.getCell(1).value = item[0];
    row.getCell(2).value = item[1];
    setStyle(row, 1, 1, labelFill, labelFont, leftAlign);
    setStyle(row, 2, 2, null, null, centerAlign);
    row.height = 24;
  });

  /* ── Section 2: 房间明细（标准模式） ── */
  if (mode === 'standard') {
    r += 2;
    row = ws.getRow(r);
    row.getCell(1).value = '房间明细';
    row.font = { bold: true, size: 12, color: { argb: 'FF003366' } };
    row.height = 26;

    r++;
    row = ws.getRow(r);
    const roomHeaders = ['房间名称', '面积(m²)', '层高(m)', '换气次数(次/h)', '人数', '人均新风量(m³/h·人)', '换气风量(m³/h)', '人数风量(m³/h)', '需求风量(m³/h)'];
    roomHeaders.forEach((h, i) => row.getCell(i + 1).value = h);
    setStyle(row, 1, roomHeaders.length, headerFill, headerFont, centerAlign);
    row.height = 28;

    const roomRows = document.querySelectorAll('#freshRoomTableBody tr');
    roomRows.forEach(tr => {
      r++;
      row = ws.getRow(r);
      const cells = tr.querySelectorAll('td');
      const vals = [];
      cells.forEach((td, idx) => {
        if (idx === cells.length - 1) return; // 跳过删除按钮列
        const input = td.querySelector('input');
        vals.push(input ? input.value : td.textContent.trim().replace(/\s+/g, ' '));
      });
      vals.forEach((v, i) => row.getCell(i + 1).value = v);
      setStyle(row, 1, roomHeaders.length, null, null, centerAlign);
      row.height = 24;
    });

    // 合计行
    const foot = document.querySelector('#freshRoomTableFoot');
    if (foot) {
      const footTds = foot.querySelectorAll('td');
      if (footTds.length > 0) {
        r++;
        row = ws.getRow(r);
        // 第一个 td (colspan=6): "合计"
        row.getCell(1).value = footTds[0].textContent.trim();
        // 最后3个有效数据列: qAch, qPpl, total
        const qAchCell = footTds[footTds.length - 4];
        const qPplCell = footTds[footTds.length - 3];
        const totalCell = footTds[footTds.length - 2];
        row.getCell(7).value = qAchCell ? qAchCell.textContent.trim() : '';
        row.getCell(8).value = qPplCell ? qPplCell.textContent.trim() : '';
        row.getCell(9).value = totalCell ? totalCell.textContent.trim() : '';
        setStyle(row, 1, roomHeaders.length, { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F3F6' } }, { bold: true, size: 10 }, centerAlign);
        row.height = 24;
      }
    }
  }

  /* ── Section 3: 选型结果 ── */
  r += 2;
  row = ws.getRow(r);
  row.getCell(1).value = '选型结果';
  row.font = { bold: true, size: 12, color: { argb: 'FF003366' } };
  row.height = 26;

  r++;
  row = ws.getRow(r);
  row.getCell(1).value = '项目';
  row.getCell(2).value = '结果';
  setStyle(row, 1, 2, headerFill, headerFont, centerAlign);
  row.height = 28;

  const resultRows = [
    ['建议新风量', airflow],
    ['推荐设备型号', deviceModel],
    ['设备系列', deviceName],
    ['计算说明', reason],
  ];

  resultRows.forEach(item => {
    r++;
    row = ws.getRow(r);
    row.getCell(1).value = item[0];
    row.getCell(2).value = item[1];
    setStyle(row, 1, 1, labelFill, labelFont, leftAlign);
    setStyle(row, 2, 2, null, null, mode === 'standard' ? leftAlign : centerAlign);
    row.height = item[0] === '计算说明' ? Math.max(24, Math.ceil((item[1] || '').length / 50) * 20) : 24;
  });

  /* ── 列宽 ── */
  ws.getColumn(1).width = 20;
  ws.getColumn(2).width = 60;

  const now = new Date();
  const ds = now.getFullYear() + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
  const buffer = await wb.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = '新风选型_' + ds + '.xlsx';
  a.click();
  URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', function () {
  initSelectorExport();
  initSelectorImport();
});

/* ═══════════════════════════════════════════
   导入功能 — 从导出的 XLSX 文件恢复方案数据
   ═══════════════════════════════════════════ */

function initSelectorImport() {
  document.querySelectorAll('[data-import-xlsx]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      importXlsx(this.dataset.importXlsx);
    });
  });
}

/**
 * 打开文件选择器，读取 XLSX 后按类型分发导入
 */
async function importXlsx(type) {
  return new Promise(function (resolve, reject) {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx';
    input.style.display = 'none';
    document.body.appendChild(input);

    input.addEventListener('change', async function () {
      try {
        var file = input.files[0];
        if (!file) { input.remove(); resolve(); return; }

        var buf = await file.arrayBuffer();
        var wb = new ExcelJS.Workbook();
        await wb.xlsx.load(buf);

        if (type === 'fresh') {
          await importFreshXlsx(wb);
        } else {
          await importGen2SmartXlsx(wb, type);
        }

        alert('导入成功！数据已填充到表格中。');
        resolve();
      } catch (e) {
        alert('导入失败：' + e.message);
        reject(e);
      } finally {
        input.remove();
      }
    });

    input.click();
  });
}

/* ── 工具：取单元格文本 ── */
function cellText(row, colIndex) {
  var cell = row.getCell(colIndex);
  return cell ? (cell.text || '').trim() : '';
}

/* ── 工具：解析数字 ── */
function parseNum(str) {
  var s = String(str || '').trim().replace(/[^\d.\-]/g, '');
  if (s === '' || isNaN(Number(s))) return '';
  return Number(s);
}

/* ── 工具：在首行中匹配列索引（支持部分匹配） ── */
function findCol(headerRow, keyword) {
  for (var c = 1; c <= headerRow.cellCount; c++) {
    var txt = cellText(headerRow, c);
    if (txt.indexOf(keyword) !== -1) return c;
  }
  return -1;
}

/* ═══════════════════════════
   新风选型 导入
   ═══════════════════════════ */
async function importFreshXlsx(wb) {
  var ws = wb.getWorksheet(1);
  if (!ws) throw new Error('工作表中没有数据');

  // 查找表头行："房间名称" 出现在第一个单元格
  var tableHeaderRow = 0;
  ws.eachRow(function (row, rowNum) {
    if (cellText(row, 1) === '房间名称') tableHeaderRow = rowNum;
  });
  if (tableHeaderRow === 0) {
    // 检测是否是多工作表格式
    var sheetCount = wb._worksheets ? wb._worksheets.length : wb.worksheets ? wb.worksheets.length : 0;
    if (sheetCount > 1) throw new Error('检测到多工作表格式，请使用6恒2代/6恒智选的导入功能');
    throw new Error('未找到房间明细数据');
  }

  // 读取产品功能型号
  var featureValue = '';
  ws.eachRow(function (row, rowNum) {
    if (rowNum >= 3 && rowNum <= 10 && cellText(row, 1) === '产品功能型号') {
      featureValue = cellText(row, 2);
    }
  });

  var featureMap = {
    '分区控制-ZJD3C系列': 'zoning',
    '空气消毒-ZDP2C系列': 'disinfection',
    '小巧体积-ZM2C系列': 'compact',
    '经济实惠-ZY1C系列': 'economical'
  };

  // 设置产品功能
  if (featureValue && featureMap[featureValue]) {
    var radio = document.querySelector('#selxFeatures input[value="' + featureMap[featureValue] + '"]');
    if (radio) radio.checked = true;
  }

  // 切换到标准模式
  var standardBtn = document.querySelector('#selxMode .mode-btn[data-mode="standard"]');
  if (standardBtn) standardBtn.click();

  // 读取房间数据行
  var rooms = [];
  for (var r = tableHeaderRow + 1; r <= ws.rowCount; r++) {
    var row = ws.getRow(r);
    var first = cellText(row, 1);
    if (!first || first === '选型结果' || first === '合计' || first === '项目') break;
    if (first.indexOf('合计') !== -1 || first.indexOf('系统') !== -1) break;

    rooms.push({
      name: first,
      area: parseNum(cellText(row, 2)),
      height: parseNum(cellText(row, 3)),
      ach: parseNum(cellText(row, 4)),
      people: parseNum(cellText(row, 5)),
      pplRate: parseNum(cellText(row, 6))
    });
  }

  if (rooms.length === 0) throw new Error('未找到房间数据');

  var body = document.querySelector('#freshRoomTableBody');
  var addBtn = document.querySelector('#roomAddBtn');
  if (!body || !addBtn) throw new Error('未找到房间表格');

  // 清空并重建
  body.innerHTML = '';
  for (var i = 0; i < rooms.length; i++) addBtn.click();

  // 填充数据
  var rows = body.querySelectorAll('tr');
  rows.forEach(function (tr, idx) {
    if (idx >= rooms.length) return;
    var rm = rooms[idx];
    var inputs = tr.querySelectorAll('input');
    if (inputs[0]) inputs[0].value = rm.name || '';
    if (inputs[1]) inputs[1].value = rm.area;
    if (inputs[2]) inputs[2].value = rm.height;
    if (inputs[3]) inputs[3].value = rm.ach;
    if (inputs[4]) inputs[4].value = rm.people;
    if (inputs[5]) inputs[5].value = rm.pplRate;
    inputs.forEach(function (inp) { inp.dispatchEvent(new Event('input', { bubbles: true })); });
  });
}

/* ═══════════════════════════
   6恒2代 / 6恒智选 导入
   ═══════════════════════════ */
async function importGen2SmartXlsx(wb, prefix) {
  /* ── 新风选型 ── */
  if (wb.getWorksheet('新风选型')) {
    await importGen2FreshSheet(wb.getWorksheet('新风选型'), prefix);
  }

  /* ── 空调选型 ── */
  if (wb.getWorksheet('空调选型')) {
    await importGen2AcSheet(wb.getWorksheet('空调选型'), prefix);
  }

  /* ── 地暖选型 ── */
  if (wb.getWorksheet('地暖选型')) {
    await importGen2FhSheet(wb.getWorksheet('地暖选型'), prefix);
  }
}

/* ── 新风表格导入（含设备选型） ── */
async function importGen2FreshSheet(ws, prefix) {
  var bodyId = prefix === 'gen2' ? 'gen2FreshBody' : 'smartFreshBody';
  var addBtnId = prefix === 'gen2' ? 'gen2FreshAddBtn' : 'smartFreshAddBtn';
  var body = document.querySelector('#' + bodyId);
  var addBtn = document.querySelector('#' + addBtnId);
  if (!body || !addBtn) return;

  var hdr = ws.getRow(1);
  var colFloor = findCol(hdr, '楼层');
  var colSysid = findCol(hdr, '系统编号');
  var colName = findCol(hdr, '房间名称');
  var colArea = findCol(hdr, '面积');
  var colHeight = findCol(hdr, '层高');
  var colAch = findCol(hdr, '换气次数');
  var colFan = findCol(hdr, '推荐新风机');
  var colHumid = findCol(hdr, '调湿模块');
  if (colName < 0 || colArea < 0) throw new Error('新风选型工作表缺少必要列');

  // 读取房间数据 + 设备信息（设备信息只取每系统首行）
  var rooms = [];
  var equipMap = {}; // sysid -> { fan, humid }
  for (var r = 2; r <= ws.rowCount; r++) {
    var row = ws.getRow(r);
    var name = cellText(row, colName);
    if (!name || name.indexOf('合计') !== -1 || name.indexOf('系统') !== -1) continue;
    if (name === '房间名称') continue;

    var sysid = colSysid > 0 ? parseInt(cellText(row, colSysid)) || 1 : 1;
    rooms.push({
      floor: colFloor > 0 ? cellText(row, colFloor) : '',
      sysid: sysid,
      name: name,
      area: parseNum(cellText(row, colArea)),
      height: colHeight > 0 ? parseNum(cellText(row, colHeight)) : '',
      ach: colAch > 0 ? parseNum(cellText(row, colAch)) : ''
    });

    // 记录设备信息（只存每个系统的第一条）
    if (!equipMap[sysid]) {
      equipMap[sysid] = {
        fan: colFan > 0 ? cellText(row, colFan) : '',
        humid: colHumid > 0 ? cellText(row, colHumid) : ''
      };
    }
  }

  if (rooms.length === 0) throw new Error('新风选型工作表中未找到房间数据');

  // 清空并重建
  body.innerHTML = '';
  for (var i = 0; i < rooms.length; i++) addBtn.click();

  // 填充房间数据
  var rows = body.querySelectorAll('tr');
  rows.forEach(function (tr, idx) {
    if (idx >= rooms.length) return;
    var rm = rooms[idx];

    var floorInp = tr.querySelector('.sf-floor');
    var sysidSel = tr.querySelector('.sf-sysid');
    var nameInp = tr.querySelector('.sf-name');
    var areaInp = tr.querySelector('.sf-area');
    var heightInp = tr.querySelector('.sf-height');
    var achInp = tr.querySelector('.sf-ach');

    if (floorInp) floorInp.value = rm.floor;
    if (sysidSel) sysidSel.value = String(rm.sysid);
    if (nameInp) nameInp.value = rm.name;
    if (areaInp) areaInp.value = rm.area;
    if (heightInp) heightInp.value = rm.height;
    if (achInp) achInp.value = rm.ach;

    [floorInp, nameInp, areaInp, heightInp, achInp].forEach(function (el) {
      if (el) el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  });

  // 触发系统重算（让设备表格生成）
  var lastSel = rows[rows.length - 1]?.querySelector('.sf-ach');
  if (lastSel) lastSel.dispatchEvent(new Event('change', { bubbles: true }));

  // 填充设备选型（需等待设备表格生成后执行）
  setTimeout(function () {
    var equipBodyId = prefix === 'gen2' ? 'gen2FreshEquipBody' : 'smartFreshEquipBody';
    var equipBody = document.querySelector('#' + equipBodyId);
    if (!equipBody) return;

    Object.keys(equipMap).forEach(function (sysid) {
      var eq = equipMap[sysid];
      // 找到对应系统的设备行
      var sysRow = equipBody.querySelector('.sf-system-row[data-system-id="' + sysid + '"]');
      if (!sysRow) return;

      var fanSel = sysRow.querySelector('.sf-fan-model');
      if (fanSel && eq.fan) {
        for (var fi = 0; fi < fanSel.options.length; fi++) {
          if (fanSel.options[fi].value.indexOf(eq.fan) !== -1 ||
              eq.fan.indexOf(fanSel.options[fi].value) !== -1) {
            fanSel.value = fanSel.options[fi].value;
            break;
          }
        }
      }

      var humidSel = sysRow.querySelector('.sf-humid-module');
      if (humidSel && eq.humid && eq.humid !== 'none' && eq.humid !== '不配置') {
        for (var hi = 0; hi < humidSel.options.length; hi++) {
          if (humidSel.options[hi].value.indexOf(eq.humid) !== -1 ||
              eq.humid.indexOf(humidSel.options[hi].value) !== -1) {
            humidSel.value = humidSel.options[hi].value;
            humidSel.dispatchEvent(new Event('change', { bubbles: true }));
            break;
          }
        }
      }
    });
  }, 300);
}

/* ── 空调表格导入 ── */
async function importGen2AcSheet(ws, prefix) {
  var tableBodyId = prefix === 'gen2' ? 'gen2AcRoomTableBody' : 'sixAcRoomTableBody';
  var addBtnId = prefix === 'gen2' ? 'gen2AcAddRoomBtn' : 'sixAcAddRoomBtn';
  var tableBody = document.querySelector('#' + tableBodyId);
  var addBtn = document.querySelector('#' + addBtnId);
  if (!tableBody || !addBtn) return;

  var hdr = ws.getRow(1);
  var colFloor = findCol(hdr, '楼层');
  var colName = findCol(hdr, '房间名称');
  var colArea = findCol(hdr, '面积');
  var colLoad = findCol(hdr, '冷负荷');
  var colSeries = findCol(hdr, '内机系列');
  var colModel = findCol(hdr, '选配型号');
  var colCount = findCol(hdr, '台数');
  var colSysid = findCol(hdr, '系统编号');
  var colOutdoor = findCol(hdr, '室外机型号');
  if (colName < 0) throw new Error('空调选型工作表缺少必要列');

  // 读取空调房间数据
  var rooms = [];
  for (var r = 2; r <= ws.rowCount; r++) {
    var row = ws.getRow(r);
    var name = cellText(row, colName);
    if (!name || name.indexOf('合计') !== -1 || name.indexOf('系统') !== -1) continue;
    if (name === '房间名称') continue;

    rooms.push({
      floor: colFloor > 0 ? cellText(row, colFloor) : '',
      name: name,
      area: parseNum(cellText(row, colArea)),
      load: colLoad > 0 ? parseNum(cellText(row, colLoad)) : '',
      series: colSeries > 0 ? cellText(row, colSeries) : '',
      model: colModel > 0 ? cellText(row, colModel) : '',
      count: colCount > 0 ? parseInt(cellText(row, colCount)) || 1 : 1,
      sysid: colSysid > 0 ? parseInt(cellText(row, colSysid)) || 1 : 1,
      outdoor: colOutdoor > 0 ? cellText(row, colOutdoor) : ''
    });
  }

  if (rooms.length === 0) throw new Error('空调选型工作表中未找到房间数据');

  // 清空表格
  tableBody.innerHTML = '';

  // 第1步：直接用导入数据创建所有行（避免 addRoom 空行被 updateTable 丢弃）
  var seriesOpts = [];
  var defaultSeries = '暗藏管道式_超薄_100×nanoe';

  // 获取系列选项（从 DOM 中的任意一个 select.ac-r-series 取，或硬编码）
  var sampleSeriesSel = document.querySelector('.ac-r-series');
  if (sampleSeriesSel) {
    for (var si = 0; si < sampleSeriesSel.options.length; si++) {
      seriesOpts.push({
        value: sampleSeriesSel.options[si].value,
        label: sampleSeriesSel.options[si].text
      });
    }
  } else {
    // 硬编码兜底
    var fallbackSeries = [
      ['暗藏管道式_超薄_100×nanoe', '超薄_100×nanoe'],
      ['暗藏管道式_超薄_100×nanoe_内置排水泵', '超薄_100×nanoe_内置排水泵'],
      ['暗藏管道式_超薄_100×nanoe_内置排水泵_PM2.5滤网', '超薄_100×nanoe_内置排水泵_PM2.5滤网'],
      ['暗藏管道式_超薄_100×nanoe_PM2.5滤网', '超薄_100×nanoe_PM2.5滤网'],
      ['厨卫专用空调', '厨卫专用空调'],
      ['暗藏管道式_中静压_nanoe_内置排水泵', '中静压_nanoe_内置排水泵'],
      ['暗藏管道式_中静压_内置排水泵', '中静压_内置排水泵'],
      ['暗藏管道式_中静压', '中静压']
    ];
    for (var fi = 0; fi < fallbackSeries.length; fi++) {
      seriesOpts.push({ value: fallbackSeries[fi][0], label: fallbackSeries[fi][1] });
    }
  }

  rooms.forEach(function (rm) {
    var seriesHtml = seriesOpts.map(function (o) {
      var sel = (rm.series && (o.value === rm.series || o.label.indexOf(rm.series) !== -1)) ? ' selected' : '';
      return '<option value="' + o.value + '"' + sel + '>' + o.label + '</option>';
    }).join('');
    var countHtml = [1,2,3,4,5].map(function (n) {
      return '<option value="' + n + '"' + (n === (rm.count || 1) ? ' selected' : '') + '>' + n + '</option>';
    }).join('');
    var sysidHtml = [1,2,3,4,5].map(function (n) {
      return '<option value="' + n + '"' + (n === (rm.sysid || 1) ? ' selected' : '') + '>' + n + '</option>';
    }).join('');

    var tr = document.createElement('tr');
    tr.innerHTML =
      '<td><input type="text" class="ac-r-floor" placeholder="楼层" value="' + (rm.floor || '') + '" /></td>' +
      '<td><input type="text" class="ac-r-name" placeholder="房间名称" value="' + (rm.name || '') + '" /></td>' +
      '<td><input type="number" class="ac-r-area" min="5" max="200" value="' + (rm.area !== '' ? rm.area : '') + '" /></td>' +
      '<td><input type="number" class="ac-r-load" min="80" max="300" value="' + (rm.load !== '' ? rm.load : '220') + '" /></td>' +
      '<td class="ac-r-required">-</td>' +
      '<td><select class="ac-r-series">' + seriesHtml + '</select></td>' +
      '<td><select class="ac-r-model-select" data-model-source="auto"><option value="">自动选型中...</option></select></td>' +
      '<td><select class="ac-r-count" data-count-source="auto">' + countHtml + '</select></td>' +
      '<td class="ac-r-capacity">-</td>' +
      '<td class="ac-r-actual">-</td>' +
      '<td><select class="ac-r-sysid" data-sysid-source="user">' + sysidHtml + '</select></td>' +
      '<td class="ac-r-outdoor"><select class="ac-r-outdoor-select" data-outdoor-source="auto"><option value="">计算中...</option></select></td>' +
      '<td class="ac-r-outdoor-capacity">-</td>' +
      '<td><button type="button" class="ac-del-btn" title="删除">×</button></td>';

    tableBody.appendChild(tr);

    // 设置选配型号选中的值（选项还未生成，先记下）
    tr.querySelector('.ac-r-model-select').dataset.importModel = rm.model || '';
    tr.querySelector('.ac-r-outdoor-select').dataset.importOutdoor = rm.outdoor || '';

    // 删除按钮
    tr.querySelector('.ac-del-btn').addEventListener('click', function () {
      this.closest('tr').remove();
      // 触发 series change 来调用 updateTable
      var anySeries = tableBody.querySelector('.ac-r-series');
      if (anySeries) anySeries.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });

  // 第2步：触发系列 change → updateTable 读取所有行，生成设备选项
  var firstSeries = tableBody.querySelector('.ac-r-series');
  if (firstSeries) firstSeries.dispatchEvent(new Event('change', { bubbles: true }));

  // 第3步：设置选配型号和室外机型号（此时选项已正确）
  var allRows = Array.from(tableBody.querySelectorAll('tr:not(.ac-system-total):not(.ac-humid-row)'));
  allRows.forEach(function (tr) {
    var modelSel = tr.querySelector('.ac-r-model-select');
    var importModel = modelSel ? modelSel.dataset.importModel : '';
    if (modelSel && importModel) {
      for (var mi = 0; mi < modelSel.options.length; mi++) {
        if (modelSel.options[mi].value.indexOf(importModel) !== -1 ||
            importModel.indexOf(modelSel.options[mi].value) !== -1) {
          modelSel.value = modelSel.options[mi].value;
          modelSel.dataset.modelSource = 'user';
          break;
        }
      }
    }

    var outSel = tr.querySelector('.ac-r-outdoor-select');
    var importOutdoor = outSel ? outSel.dataset.importOutdoor : '';
    if (outSel && importOutdoor) {
      for (var oi = 0; oi < outSel.options.length; oi++) {
        if (outSel.options[oi].value.indexOf(importOutdoor) !== -1 ||
            importOutdoor.indexOf(outSel.options[oi].value) !== -1) {
          outSel.value = outSel.options[oi].value;
          outSel.dataset.outdoorSource = 'user';
          break;
        }
      }
    }
  });

  // 第4步：触发最终重算
  var lastRow = allRows[allRows.length - 1];
  if (lastRow) {
    var lastModel = lastRow.querySelector('.ac-r-model-select');
    if (lastModel) lastModel.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

/* ── 地暖表格导入 ── */
async function importGen2FhSheet(ws, prefix) {
  var bodyId = prefix === 'gen2' ? 'gen2FHBody' : 'smartFHBody';
  var body = document.querySelector('#' + bodyId);
  if (!body) return;

  var hdr = ws.getRow(1);
  var colName = findCol(hdr, '房间名称');
  var colHeat = findCol(hdr, '单位面积制热量');
  var colA2w = findCol(hdr, 'A2W水力模块');
  if (colHeat < 0) return;

  // 读取制热量和A2W数据
  var data = [];
  for (var r = 2; r <= ws.rowCount; r++) {
    var row = ws.getRow(r);
    var name = colName > 0 ? cellText(row, colName) : '';
    if (!name || name.indexOf('合计') !== -1 || name.indexOf('系统') !== -1) continue;
    if (name === '房间名称') continue;
    data.push({
      heat: parseNum(cellText(row, colHeat)),
      a2w: colA2w > 0 ? cellText(row, colA2w) : ''
    });
  }

  if (data.length === 0) return;

  var existingRows = body.querySelectorAll('tr:not(.fh-system-total)');
  existingRows.forEach(function (tr, idx) {
    if (idx >= data.length) return;
    var d = data[idx];

    // 设置制热量
    var inp = tr.querySelector('.fh-heat-input');
    if (inp) {
      inp.value = d.heat;
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // 设置A2W模块
    if (d.a2w) {
      var a2wSel = tr.querySelector('.fh-a2w-select');
      if (a2wSel) {
        for (var si = 0; si < a2wSel.options.length; si++) {
          if (a2wSel.options[si].value.indexOf(d.a2w) !== -1 ||
              d.a2w.indexOf(a2wSel.options[si].value) !== -1) {
            a2wSel.value = a2wSel.options[si].value;
            a2wSel.dispatchEvent(new Event('change', { bubbles: true }));
            break;
          }
        }
      }
    }
  });
}
