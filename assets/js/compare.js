function renderFeatureValue(val, isText) {
  if (isText) return val;
  if (val === true) return `<span class="check-yes">✓</span>`;
  if (val === false) return `<span class="check-no">–</span>`;
  return val;
}
document.addEventListener('DOMContentLoaded', () => {
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
        zy1c: "ZY系列",
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
          if (row.colspan) {
            // 合并单元格（如保修期所有设备相同）
            const value = renderFeatureValue(row.text ? row.values : true, row.text);
            html += `<td class="feature-cell" colspan="${series.length}">${value}</td>`;
          } else {
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
          }
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

      const seriesIds = type === "freshAir" ? ["zjd3c", "zdp2c", "zm2c", "zy1c"] : ["zxh1c", "zxc2c", "nxc2c", "nc1c"];

      const seriesNames = type === "freshAir" ? {
        zjd3c: "智净系列",
        zdp2c: "薄型系列",
        zm2c: "迷你系列",
        zy1c: "ZY系列",
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

      // 除湿产品：在设备参数表格底部增加除湿量测试工况备注
      const paramsTableWrap = compareParams.closest('.table-wrap');
      let paramsNote = paramsTableWrap.querySelector('.params-note');
      if (type === "dehumidify") {
        if (!paramsNote) {
          paramsNote = document.createElement('div');
          paramsNote.className = 'params-note';
          paramsTableWrap.appendChild(paramsNote);
        }
        paramsNote.innerHTML = '<p>*1. 除湿全热类设备的除湿量测试工况为：室内27℃，50%相对湿度，室外35℃，60%相对湿度。</p><p>*2. 除湿新风类设备的除湿量测试工况为：室内30℃，80%相对湿度。</p>';
        paramsNote.style.display = '';
      } else {
        if (paramsNote) paramsNote.style.display = 'none';
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
