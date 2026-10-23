(function () {
  'use strict';
  // 本地模拟数据服务；所有坐标仅为 SVG 画布坐标。
  var MockData = {
    satellites: [
      { id: 'RS-01', name: '遥感一号', state: '跟踪中', station: '喀什站', altitude: 536.2, battery: 92, temperature: 24.6, rate: 0, x: 490, y: 125 },
      { id: 'RS-02', name: '遥感二号', state: '数传中', station: '三亚站', altitude: 628.5, battery: 86, temperature: 26.3, rate: 812, x: 710, y: 255 },
      { id: 'RS-03', name: '遥感三号', state: '待过站', station: '密云站', altitude: 504.8, battery: 78, temperature: 22.1, rate: 0, x: 380, y: 345 }
    ],
    stations: [
      { name: '喀什站', x: 300, y: 230, state: '跟踪', detail: 'S 频段 · 接收正常' },
      { name: '密云站', x: 650, y: 205, state: '待机', detail: 'S 频段 · 设备就绪' },
      { name: '三亚站', x: 585, y: 365, state: '数传', detail: 'X 频段 · 接收正常' }
    ],
    tasks: [
      { id: 'TTC-001', satellite: 'RS-01', station: '喀什站', window: '08:32—08:44', progress: 68, state: '执行中' },
      { id: 'TTC-002', satellite: 'RS-02', station: '三亚站', window: '08:35—08:47', progress: 42, state: '执行中' },
      { id: 'TTC-003', satellite: 'RS-03', station: '密云站', window: '09:06—09:18', progress: 0, state: '待执行' }
    ],
    alerts: [
      { id: 1, level: '提示', text: 'RS-03 即将进入预报可见窗口', acknowledged: false },
      { id: 2, level: '关注', text: '三亚站降雨，建议关注链路衰减', acknowledged: false }
    ],
    telemetry: function (sat, tick) {
      return { battery: Math.max(0, sat.battery - tick % 3), temperature: (sat.temperature + Math.sin(tick / 3) * 0.4).toFixed(1), rate: sat.rate };
    }
  };
  var state = { selectedId: 'RS-01', paused: false, tick: 0 };
  var timer = null;
  var byId = function (id) { return document.getElementById(id); };
  var text = function (id, value) { byId(id).textContent = value; };
  var selected = function () { return MockData.satellites.find(function (s) { return s.id === state.selectedId; }); };
  function announce(message) { text('announcement', message); }
  function renderResources() {
    MockData.satellites.forEach(function (sat) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'satellite';
      button.dataset.satellite = sat.id;
      button.innerHTML = '<span class="sat-icon" aria-hidden="true">◇</span><span class="sat-name"><b></b><small></small></span><span class="badge"></span>';
      button.querySelector('b').textContent = sat.name;
      button.querySelector('small').textContent = sat.id + ' · ' + sat.altitude + ' km';
      var badge = button.querySelector('.badge');
      badge.textContent = sat.state;
      badge.classList.toggle('muted', sat.state === '待过站');
      button.addEventListener('click', function () {
        state.selectedId = sat.id;
        renderSelection();
        announce('已切换至' + sat.name + '，态势、遥测和任务高亮已同步。');
      });
      byId('satellites').appendChild(button);
    });
    MockData.stations.forEach(function (station) {
      var row = document.createElement('div');
      row.className = 'station-row';
      row.innerHTML = '<i class="status-dot" aria-hidden="true"></i><div><b></b><small></small></div><span></span>';
      row.querySelector('b').textContent = station.name;
      row.querySelector('small').textContent = station.detail;
      row.lastElementChild.textContent = station.state;
      byId('stations').appendChild(row);
    });
  }
  function renderTasks() {
    MockData.tasks.forEach(function (task) {
      var row = document.createElement('tr');
      row.dataset.satellite = task.satellite;
      [task.id, task.satellite, task.station, task.window].forEach(function (value, index) {
        var cell = document.createElement('td');
        cell.textContent = value;
        if (index === 0) cell.className = 'task-id';
        row.appendChild(cell);
      });
      var progress = document.createElement('td');
      progress.innerHTML = '<div class="table-progress"><div class="progress" aria-hidden="true"><span></span></div><span></span></div>';
      progress.querySelector('.progress span').style.width = task.progress + '%';
      progress.querySelector('.table-progress').lastElementChild.textContent = task.progress + '%';
      row.appendChild(progress);
      var status = document.createElement('td');
      var badge = document.createElement('span');
      badge.className = 'badge' + (task.state === '待执行' ? ' muted' : '');
      badge.textContent = task.state;
      status.appendChild(badge);
      row.appendChild(status);
      byId('tasks').appendChild(row);
    });
  }
  function renderAlerts() {
    MockData.alerts.forEach(function (alert) {
      var row = document.createElement('article');
      row.className = 'alert-row';
      var level = document.createElement('span');
      level.className = 'alert-level' + (alert.level === '关注' ? ' warning' : '');
      level.textContent = alert.level;
      var description = document.createElement('p');
      description.textContent = alert.text;
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'text-button';
      button.textContent = '确认';
      button.setAttribute('aria-label', '确认告警：' + alert.text);
      button.addEventListener('click', function () {
        if (alert.acknowledged) return;
        alert.acknowledged = true;
        button.textContent = '已确认';
        button.disabled = true;
        button.setAttribute('aria-label', '已确认：' + alert.text);
        updateAlertCount();
        announce('已确认：' + alert.text);
      });
      row.appendChild(level);
      row.appendChild(description);
      row.appendChild(button);
      byId('alerts').appendChild(row);
    });
    updateAlertCount();
  }
  function updateAlertCount() {
    var count = MockData.alerts.filter(function (alert) { return !alert.acknowledged; }).length;
    text('pending-count', String(count).padStart(2, '0'));
    text('pending-label', count + ' 待确认');
    text('alert-note', count ? '请关注任务运行提示' : '全部演示告警已确认');
  }
  function renderSelection() {
    var sat = selected();
    document.querySelectorAll('.satellite').forEach(function (button) {
      var active = button.dataset.satellite === sat.id;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('#tasks tr').forEach(function (row) {
      row.classList.toggle('selected', row.dataset.satellite === sat.id);
    });
    text('current-target', sat.name + ' / ' + sat.id);
    text('current-station', sat.station);
    text('current-state', sat.state);
    text('telemetry-id', sat.id);
    text('marker-label', sat.id);
    byId('sat-marker').setAttribute('transform', 'translate(' + sat.x + ' ' + sat.y + ')');
    var station = MockData.stations.find(function (item) { return item.name === sat.station; });
    // 仅为选中对象与关联站的关系示意，不进行真实可见性判断。
    byId('station-link').setAttribute('d', sat.state === '待过站' ? '' : 'M' + station.x + ' ' + station.y + 'L' + sat.x + ' ' + sat.y);
    renderTelemetry();
  }
  function renderTelemetry() {
    var telemetry = MockData.telemetry(selected(), state.tick);
    text('battery', telemetry.battery);
    text('temperature', telemetry.temperature);
    text('rate', telemetry.rate);
    byId('battery-bar').style.width = telemetry.battery + '%';
    byId('battery-meter').setAttribute('aria-valuenow', String(telemetry.battery));
    var points = [];
    for (var i = 0; i < 48; i++) {
      var y = 62 - Math.sin(i * 0.48 + state.tick * 0.15) * 13 - Math.cos(i * 1.2) * 5;
      points.push((i * 300 / 47).toFixed(2) + ',' + y.toFixed(2));
    }
    byId('wave').setAttribute('points', points.join(' '));
  }
  function updateClock() {
    var now = new Date();
    byId('clock').dateTime = now.toISOString();
    text('clock', now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC');
  }
  function tick() {
    updateClock();
    if (!state.paused) {
      state.tick++;
      renderTelemetry();
    }
  }
  function startTimer() {
    if (timer === null) timer = window.setInterval(tick, 1000);
  }
  function stopTimer() {
    if (timer !== null) window.clearInterval(timer);
    timer = null;
  }
  byId('pause').addEventListener('click', function () {
    state.paused = !state.paused;
    this.textContent = state.paused ? '继续模拟' : '暂停模拟';
    this.setAttribute('aria-pressed', String(state.paused));
    text('simulation-state', state.paused ? '模拟已暂停' : '每秒模拟更新');
    announce(state.paused ? '遥测模拟已暂停，UTC 时钟继续更新。' : '遥测模拟已继续。');
  });
  renderResources();
  renderTasks();
  renderAlerts();
  renderSelection();
  updateClock();
  startTimer();
  window.addEventListener('pagehide', stopTimer);
  window.addEventListener('pageshow', function () { updateClock(); startTimer(); });
}());
