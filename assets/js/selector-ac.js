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

