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
    body.dispatchEvent(new CustomEvent('freshRoomsChanged'));
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
    const area = data?.area ?? "";
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
    tr.querySelectorAll('input, select').forEach(el => el.addEventListener('input', () => { calcRoom(tr); }));
    tr.querySelectorAll('input, select').forEach(el => el.addEventListener('change', () => { rebuildSystems(); }));

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
      <td><input type="number" class="ac-r-area" min="5" max="200" value="${area || ''}" /></td>
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

  // 从新风选型同步房间信息（楼层、房间名称、面积总是取自新风；冷负荷、内机系列按行索引保留AC侧的修改）
  function syncFromFresh() {
    const freshRows = document.querySelectorAll('#smartFreshBody tr:not(.sf-system-row)');
    const existingRows = tableBody.querySelectorAll('tr:not(.ac-system-total)');
    
    // 保存AC侧用户已修改的字段（按行索引，不依赖房间名匹配）
    const savedSettings = [];
    existingRows.forEach(row => {
      savedSettings.push({
        load: row.querySelector('.ac-r-load')?.value || '220',
        series: row.querySelector('.ac-r-series')?.value || defaultIndoorSeries
      });
    });

    // 清空现有表格
    tableBody.innerHTML = '';

    // 根据新风房间重建
    freshRows.forEach((row, idx) => {
      const name = row.querySelector('.sf-name')?.value || '';
      const floor = row.querySelector('.sf-floor')?.value || '';
      const area = Number(row.querySelector('.sf-area')?.value || 0);
      
      // 按索引保留AC侧设置，面积始终取自新风
      const saved = savedSettings[idx] || {};
      const finalArea = area || '';
      const finalLoad = saved.load || '220';
      const finalSeries = saved.series || defaultIndoorSeries;
      
      addRoom(name, floor, finalArea, finalLoad, finalSeries, 1, 1);
    });
    tableBody.dispatchEvent(new CustomEvent('acRoomsChanged'));
  }

  // 监听新风表格变化（change 在失焦时触发，避免每输入一个字符就同步）
  const freshBody = document.querySelector('#smartFreshBody');
  if (freshBody) {
    freshBody.addEventListener('change', (e) => {
      if (e.target.matches('.sf-name, .sf-floor, .sf-area, .sf-sysid')) {
        syncFromFresh();
      }
    });
    freshBody.addEventListener('freshRoomsChanged', () => {
      syncFromFresh();
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
    acBody.addEventListener('acRoomsChanged', () => {
      setTimeout(syncFromAc, 50);
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

  function addOrMerge(category, type, model, count = 1, isOptional = false, selectOptions = null) {
    if (!model) return;
    const key = `${type}|||${model}`;
    if (itemMap.has(key)) {
      itemMap.get(key).count += count;
    } else {
      itemMap.set(key, { category, type, model, count, isOptional, selectOptions });
      itemOrder.push(key);
    }
  }

  /* ── 新风模块 ── */
  const freshSysRows = document.querySelectorAll('#smartFreshEquipBody .sf-system-row');
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

	  // 新风控制器：每台新风机一个控制器
	  const freshFanCount = [...document.querySelectorAll('#smartFreshEquipBody .sf-system-row')].filter(row => {
	    return row.querySelector('.sf-fan-model')?.value;
	  }).length;
	  if (freshFanCount > 0) addOrMerge('新风模块', '新风控制器', smartSelectorData.controllers.freshAirController, freshFanCount);

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
	  // 空调控制器：每台内机一个控制器
	  const prevCtrlSel = sumBody.querySelector('.sum-ac-ctrl-select')?.value;
	  const defCtrl = hasFHModule ? smartSelectorData.controllers.withFloorHeat : smartSelectorData.controllers.withoutFloorHeat;
	  const ctrlModel = prevCtrlSel || defCtrl;
	  const acTotalCount = [...document.querySelectorAll('#sixAcRoomTableBody tr:not(.ac-system-total)')].reduce((sum, row) => {
	    const model = row.querySelector('.ac-r-model-select')?.value;
	    const count = Number(row.querySelector('.ac-r-count')?.value) || 0;
	    return sum + (model && count > 0 ? count : 0);
	  }, 0);
	  addOrMerge('空调模块', '空调控制器', ctrlModel, acTotalCount, false, smartSelectorData.controllers.acControllers);

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
      if (item.selectOptions) {
        html += `<td><select class="sum-ac-ctrl-select" data-ctrl="true">`;
        item.selectOptions.forEach(opt => {
          html += `<option value="${opt}"${opt === item.model ? ' selected' : ''}>${opt}</option>`;
        });
        html += `</select></td>`;
      } else {
        html += `<td>${item.model}</td>`;
      }
      if (item.isOptional) {
        html += `<td class="sum-check-col"><input type="checkbox" checked /></td>`;
      } else {
        html += `<td>${item.count}</td>`;
      }
      html += '</tr>';
    });
  }
  sumBody.innerHTML = html;
  sumBody.querySelector('.sum-ac-ctrl-select')?.addEventListener('change', updateSixSummary);
}

document.addEventListener('DOMContentLoaded', initSixSmartSelector);

