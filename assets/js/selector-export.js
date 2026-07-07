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

document.addEventListener('DOMContentLoaded', initSelectorExport);
