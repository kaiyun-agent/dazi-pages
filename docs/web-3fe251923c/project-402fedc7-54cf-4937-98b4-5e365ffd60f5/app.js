(function () {
'use strict';
var $ = function(id){return document.getElementById(id);};
var text = function(id,value){$(id).textContent=value;};
var data = {
 satellites:[
  {id:'RS-01',name:'遥感一号',state:'跟踪中',station:'喀什站',altitude:536.2,battery:92,temperature:24.6,rate:0,inclination:97.4,node:60,phase:31},
  {id:'RS-02',name:'遥感二号',state:'数传中',station:'三亚站',altitude:628.5,battery:86,temperature:26.3,rate:812,inclination:98,node:115,phase:67},
  {id:'RS-03',name:'遥感三号',state:'待过站',station:'密云站',altitude:504.8,battery:78,temperature:22.1,rate:0,inclination:97.2,node:165,phase:220}
 ],
 stations:[
  {name:'喀什站',lon:75.99,lat:39.47,state:'跟踪',detail:'S 频段 · 接收正常'},
  {name:'密云站',lon:116.85,lat:40.38,state:'待机',detail:'S 频段 · 设备就绪'},
  {name:'三亚站',lon:109.5,lat:18.25,state:'数传',detail:'X 频段 · 接收正常'}
 ],
 tasks:[
  {id:'TTC-001',satellite:'RS-01',station:'喀什站',window:'08:32—08:44',progress:68,state:'执行中'},
  {id:'TTC-002',satellite:'RS-02',station:'三亚站',window:'08:35—08:47',progress:42,state:'执行中'},
  {id:'TTC-003',satellite:'RS-03',station:'密云站',window:'09:06—09:18',progress:0,state:'待执行'}
 ],
 alerts:[{id:1,level:'提示',text:'RS-03 即将进入预报可见窗口',acknowledged:false},{id:2,level:'关注',text:'三亚站降雨，建议关注链路衰减',acknowledged:false}]
};
var state={selectedId:'RS-01',paused:false,tick:0,tracking:false};
var timer=null,manager=null,engineUrl=null;
function selected(){return data.satellites.find(function(s){return s.id===state.selectedId;});}
function announce(message){text('announcement',message);}
function renderResources(){
 data.satellites.forEach(function(sat){
  var b=document.createElement('button');b.type='button';b.className='satellite';b.dataset.satellite=sat.id;
  b.innerHTML='<span class="sat-icon" aria-hidden="true">◇</span><span class="sat-name"><b></b><small></small></span><span class="badge"></span>';
  b.querySelector('b').textContent=sat.name;b.querySelector('small').textContent=sat.id+' · '+sat.altitude+' km';
  b.querySelector('.badge').textContent=sat.state;b.querySelector('.badge').classList.toggle('muted',sat.state==='待过站');
  b.addEventListener('click',function(){choose(sat.id,true);});$('satellites').appendChild(b);
 });
 data.stations.forEach(function(s){var row=document.createElement('div');row.className='station-row';row.innerHTML='<i class="status-dot" aria-hidden="true"></i><div><b></b><small></small></div><span></span>';row.querySelector('b').textContent=s.name;row.querySelector('small').textContent=s.detail;row.lastElementChild.textContent=s.state;$('stations').appendChild(row);});
}
function renderTasks(){data.tasks.forEach(function(t){var row=document.createElement('tr');row.dataset.satellite=t.satellite;[t.id,t.satellite,t.station,t.window].forEach(function(v,i){var td=document.createElement('td');td.textContent=v;if(i===0)td.className='task-id';row.appendChild(td);});var p=document.createElement('td');p.innerHTML='<div class="table-progress"><div class="progress" aria-hidden="true"><span></span></div><span></span></div>';p.querySelector('.progress span').style.width=t.progress+'%';p.querySelector('.table-progress').lastElementChild.textContent=t.progress+'%';row.appendChild(p);var status=document.createElement('td');var badge=document.createElement('span');badge.className='badge'+(t.state==='待执行'?' muted':'');badge.textContent=t.state;status.appendChild(badge);row.appendChild(status);$('tasks').appendChild(row);});}
function updateAlertCount(){var n=data.alerts.filter(function(a){return !a.acknowledged;}).length;text('pending-count',String(n).padStart(2,'0'));text('pending-label',n+' 待确认');text('alert-note',n?'请关注任务运行提示':'全部演示告警已确认');}
function renderAlerts(){data.alerts.forEach(function(a){var row=document.createElement('article');row.className='alert-row';var level=document.createElement('span');level.className='alert-level'+(a.level==='关注'?' warning':'');level.textContent=a.level;var p=document.createElement('p');p.textContent=a.text;var b=document.createElement('button');b.className='text-button';b.type='button';b.textContent='确认';b.setAttribute('aria-label','确认告警：'+a.text);b.addEventListener('click',function(){a.acknowledged=true;b.disabled=true;b.textContent='已确认';b.setAttribute('aria-label','已确认：'+a.text);updateAlertCount();announce('已确认：'+a.text);});row.appendChild(level);row.appendChild(p);row.appendChild(b);$('alerts').appendChild(row);});updateAlertCount();}
function choose(id,fly){state.selectedId=id;renderSelection();if(manager){manager.select();if(fly)manager.locate();}announce('已切换至'+selected().name+'，态势、遥测和任务高亮已同步。');}
function renderSelection(){var s=selected();document.querySelectorAll('.satellite').forEach(function(b){var active=b.dataset.satellite===s.id;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});document.querySelectorAll('#tasks tr').forEach(function(r){r.classList.toggle('selected',r.dataset.satellite===s.id);});text('current-target',s.name+' / '+s.id);text('current-station',s.station);text('current-state',s.state);text('telemetry-id',s.id);renderTelemetry();}
function renderTelemetry(){var s=selected(),battery=Math.max(0,s.battery-state.tick%3);text('battery',battery);text('temperature',(s.temperature+Math.sin(state.tick/3)*.4).toFixed(1));text('rate',s.rate);$('battery-bar').style.width=battery+'%';$('battery-meter').setAttribute('aria-valuenow',String(battery));var points=[];for(var i=0;i<48;i++){points.push((i*300/47).toFixed(2)+','+(62-Math.sin(i*.48+state.tick*.15)*13-Math.cos(i*1.2)*5).toFixed(2));}$('wave').setAttribute('points',points.join(' '));}
function updateClock(){var now=new Date();$('clock').dateTime=now.toISOString();text('clock',now.toISOString().replace('T',' ').slice(0,19)+' UTC');}
function startTimer(){if(timer!==null)return;timer=window.setInterval(function(){updateClock();if(!state.paused){state.tick++;renderTelemetry();}},1000);}
function stopTimer(){if(timer!==null)window.clearInterval(timer);timer=null;}
$('pause').addEventListener('click',function(){state.paused=!state.paused;this.textContent=state.paused?'继续模拟':'暂停模拟';this.setAttribute('aria-pressed',String(state.paused));text('simulation-state',state.paused?'模拟已暂停':'每秒模拟更新');announce(state.paused?'遥测模拟已暂停，场景时间独立控制。':'遥测模拟已继续。');});

// SceneManager 仅使用 Cesium Scene 和同步 Primitive，不依赖影像、Worker、Widgets 或外部资源。
function SceneManager(C){
 this.C=C;this.canvas=$('scene');this.scene=null;this.handler=null;this.raf=null;this.lastWall=0;this.lastUI=0;this.lastOrbit=-1e9;this.running=false;this.destroyed=false;this.items={};this.start=C.JulianDate.fromIso8601('2026-10-23T08:32:00Z');
 this.clock=new C.Clock({startTime:C.JulianDate.clone(this.start),stopTime:C.JulianDate.addSeconds(this.start,7200,new C.JulianDate()),currentTime:C.JulianDate.clone(this.start),clockStep:C.ClockStep.SYSTEM_CLOCK_MULTIPLIER,clockRange:C.ClockRange.CLAMPED,multiplier:1,shouldAnimate:true});
}
SceneManager.prototype.init=function(){
 var C=this.C;
 this.scene=new C.Scene({canvas:this.canvas,scene3DOnly:true,contextOptions:{webgl:{alpha:false,antialias:true}}});
 this.scene.backgroundColor=C.Color.fromCssColorString('#070c12');
 this.scene.screenSpaceCameraController.minimumZoomDistance=6500000;
 this.scene.screenSpaceCameraController.maximumZoomDistance=45000000;
 this.scene.fog.enabled=false;
 var ellipsoid=C.Ellipsoid.WGS84;
 var geometry=new C.EllipsoidGeometry({radii:ellipsoid.radii,stackPartitions:96,slicePartitions:128,vertexFormat:C.PerInstanceColorAppearance.VERTEX_FORMAT});
 this.scene.primitives.add(new C.Primitive({geometryInstances:new C.GeometryInstance({geometry:geometry,attributes:{color:C.ColorGeometryInstanceAttribute.fromColor(C.Color.fromCssColorString('#162e3e'))}}),appearance:new C.PerInstanceColorAppearance({closed:true,translucent:false,flat:true}),asynchronous:false}));
 this.grid=this.scene.primitives.add(new C.PolylineCollection());
 var gridColor=C.Color.fromCssColorString('#476371').withAlpha(.38);
 function gridLine(positions){return {positions:positions,width:1,material:C.Material.fromType('Color',{color:gridColor})};}
 var lon,lat,positions;
 for(lon=-180;lon<180;lon+=30){positions=[];for(lat=-90;lat<=90;lat+=2)positions.push(C.Cartesian3.fromDegrees(lon,lat,1500));this.grid.add(gridLine(positions));}
 for(lat=-60;lat<=60;lat+=30){positions=[];for(lon=-180;lon<=180;lon+=2)positions.push(C.Cartesian3.fromDegrees(lon,lat,1500));this.grid.add(gridLine(positions));}
 this.points=this.scene.primitives.add(new C.PointPrimitiveCollection());
 this.labels=this.scene.primitives.add(new C.LabelCollection());
 this.lines=this.scene.primitives.add(new C.PolylineCollection());
 var self=this;
 data.stations.forEach(function(s){var p=C.Cartesian3.fromDegrees(s.lon,s.lat,5000);self.points.add({position:p,pixelSize:6,color:C.Color.fromCssColorString('#72c9b6'),outlineColor:C.Color.BLACK,outlineWidth:1});self.labels.add({position:p,text:s.name,font:'12px sans-serif',fillColor:C.Color.fromCssColorString('#9fbeb9'),pixelOffset:new C.Cartesian2(10,-7),horizontalOrigin:C.HorizontalOrigin.LEFT,style:C.LabelStyle.FILL_AND_OUTLINE,outlineColor:C.Color.fromCssColorString('#0b1720'),outlineWidth:3});});
 data.satellites.forEach(function(s){var p=self.position(s,0);self.items[s.id]={point:self.points.add({id:s.id,position:p,pixelSize:8,color:C.Color.fromCssColorString('#e6c17b'),outlineColor:C.Color.BLACK,outlineWidth:2}),label:self.labels.add({id:s.id,position:p,text:s.id,font:'12px sans-serif',fillColor:C.Color.fromCssColorString('#e6d5b5'),pixelOffset:new C.Cartesian2(12,-10),horizontalOrigin:C.HorizontalOrigin.LEFT,style:C.LabelStyle.FILL_AND_OUTLINE,outlineColor:C.Color.BLACK,outlineWidth:3})};});
 this.orbits=this.scene.primitives.add(new C.PolylineCollection());
 this.history=this.orbits.add({positions:[],width:2,material:C.Material.fromType('Color',{color:C.Color.fromCssColorString('#46616b')})});
 this.future=this.orbits.add({positions:[],width:2,material:C.Material.fromType('PolylineDash',{color:C.Color.fromCssColorString('#79bfae'),dashLength:14})});
 this.ground=this.orbits.add({positions:[],width:1,material:C.Material.fromType('Color',{color:C.Color.fromCssColorString('#486776')})});
 this.link=this.lines.add({positions:[],width:2,material:C.Material.fromType('Color',{color:C.Color.fromCssColorString('#a4dfbe')})});
 this.handler=new C.ScreenSpaceEventHandler(this.canvas);
 this.handler.setInputAction(function(click){var p=self.scene.pick(click.position);if(C.defined(p)&&typeof p.id==='string'&&self.items[p.id])choose(p.id,false);},C.ScreenSpaceEventType.LEFT_CLICK);
 this.handler.setInputAction(function(){if(state.tracking){state.tracking=false;$('track').setAttribute('aria-pressed','false');}},C.ScreenSpaceEventType.LEFT_DOWN);
 this.overview();this.select();this.startRender();
};
// 理想圆轨道模型：惯性轨道平面 + 简化地球自转，不是 TLE/SGP4。
SceneManager.prototype.position=function(s,seconds){var C=this.C,d=Math.PI/180,r=6378137+s.altitude*1000,n=Math.sqrt(3.986004418e14/(r*r*r)),u=s.phase*d+n*seconds,i=s.inclination*d,node=s.node*d-7.292115e-5*seconds;var x=r*(Math.cos(node)*Math.cos(u)-Math.sin(node)*Math.sin(u)*Math.cos(i)),y=r*(Math.sin(node)*Math.cos(u)+Math.cos(node)*Math.sin(u)*Math.cos(i)),z=r*Math.sin(u)*Math.sin(i);return new C.Cartesian3(x,y,z);};
SceneManager.prototype.seconds=function(){return this.C.JulianDate.secondsDifference(this.clock.currentTime,this.start);};
SceneManager.prototype.select=function(){var self=this,C=this.C;data.satellites.forEach(function(s){var active=s.id===state.selectedId;self.items[s.id].point.pixelSize=active?12:7;self.items[s.id].point.color=C.Color.fromCssColorString(active?'#f3d38e':'#a0b7c4');self.items[s.id].label.fillColor=C.Color.fromCssColorString(active?'#f3dca7':'#9fb0be');});this.lastOrbit=-1e9;};
SceneManager.prototype.overview=function(){var C=this.C;state.tracking=false;$('track').setAttribute('aria-pressed','false');this.scene.camera.flyTo({destination:C.Cartesian3.fromDegrees(100,25,19000000),duration:window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:1.2});};
SceneManager.prototype.locate=function(){var C=this.C,p=this.position(selected(),this.seconds()),g=C.Cartographic.fromCartesian(p);this.scene.camera.flyTo({destination:C.Cartesian3.fromRadians(g.longitude,g.latitude,10500000),duration:window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:1});};
SceneManager.prototype.updateOrbit=function(t){var C=this.C,s=selected(),r=6378137+s.altitude*1000,period=2*Math.PI*Math.sqrt(r*r*r/3.986004418e14),past=[],future=[],ground=[];for(var k=0;k<=100;k++){past.push(this.position(s,t-period/2+k*period/200));var p=this.position(s,t+k*period/200);future.push(p);var g=C.Cartographic.fromCartesian(p);ground.push(C.Cartesian3.fromRadians(g.longitude,g.latitude,2000));}this.history.positions=past;this.future.positions=future;this.ground.positions=ground;this.lastOrbit=t;};
SceneManager.prototype.update=function(){
 var C=this.C,t=this.seconds(),self=this;
 data.satellites.forEach(function(s){var p=self.position(s,t);self.items[s.id].point.position=p;self.items[s.id].label.position=p;});
 if(Math.abs(t-this.lastOrbit)>10)this.updateOrbit(t);
 this.orbits.show=$('orbits').checked;this.grid.show=$('grid').checked;
 var s=selected(),p=this.items[s.id].point.position,station=data.stations.find(function(st){return st.name===s.station;}),sp=C.Cartesian3.fromDegrees(station.lon,station.lat,0),normal=C.Ellipsoid.WGS84.geodeticSurfaceNormal(sp,new C.Cartesian3()),delta=C.Cartesian3.subtract(p,sp,new C.Cartesian3()),distance=C.Cartesian3.magnitude(delta),unit=C.Cartesian3.normalize(delta,new C.Cartesian3()),elevation=Math.asin(Math.max(-1,Math.min(1,C.Cartesian3.dot(normal,unit))))*180/Math.PI,visible=elevation>=10;
 this.link.show=$('links').checked&&visible;this.link.positions=visible?[sp,p]:[];
 if(state.tracking){var g=C.Cartographic.fromCartesian(p);this.scene.camera.setView({destination:C.Cartesian3.fromRadians(g.longitude,g.latitude,10500000)});}
 var now=performance.now();if(now-this.lastUI>200){var geo=C.Cartographic.fromCartesian(p);text('position',(geo.longitude*180/Math.PI).toFixed(2)+'° E / '+(geo.latitude*180/Math.PI).toFixed(2)+'° N · '+(geo.height/1000).toFixed(1)+' km');text('visibility',station.name+' · 仰角 '+elevation.toFixed(1)+'° · '+(visible?'几何可见':'不可见')+' / 阈值 10°');text('simulation-time',C.JulianDate.toIso8601(this.clock.currentTime,0).replace('T',' ').replace('Z',' UTC'));$('timeline').value=Math.floor(t);if(t>=7200){this.clock.shouldAnimate=false;$('play').textContent='播放';$('play').setAttribute('aria-pressed','true');}this.lastUI=now;}
};
SceneManager.prototype.startRender=function(){if(this.running||this.destroyed)return;this.running=true;var self=this;function frame(){if(!self.running||self.destroyed)return;try{var canvas=self.canvas,ratio=Math.min(window.devicePixelRatio||1,2),w=Math.max(1,Math.round(canvas.clientWidth*ratio)),h=Math.max(1,Math.round(canvas.clientHeight*ratio));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}self.clock.tick();self.update();self.scene.initializeFrame();self.scene.render(self.clock.currentTime);self.raf=requestAnimationFrame(frame);}catch(error){self.running=false;showSceneError(error);}}this.clock.tick();this.raf=requestAnimationFrame(frame);};
SceneManager.prototype.stopRender=function(){this.running=false;if(this.raf!==null)cancelAnimationFrame(this.raf);this.raf=null;};
SceneManager.prototype.destroy=function(){if(this.destroyed)return;this.stopRender();this.destroyed=true;if(this.handler&&!this.handler.isDestroyed())this.handler.destroy();if(this.scene&&!this.scene.isDestroyed())this.scene.destroy();};
function enableControls(enabled){['overview','locate','track','play','speed','timeline','reset-time'].forEach(function(id){$(id).disabled=!enabled;});}
function showSceneError(error){enableControls(false);$('engine-gate').hidden=false;text('engine-status','三维场景不可用');text('engine-error','初始化或渲染失败：'+(error&&error.message?error.message:'请检查浏览器 WebGL 和 Cesium 文件。'));if(manager){manager.destroy();manager=null;}}
function initializeEngine(){var candidate=null;try{if(!window.Cesium||!window.Cesium.Scene)throw new Error('文件没有导出 Cesium，请选择官方 Build/Cesium/Cesium.js。');candidate=new SceneManager(window.Cesium);manager=candidate;candidate.init();$('engine-gate').hidden=true;$('scene-help').hidden=false;text('engine-status','Cesium '+window.Cesium.VERSION+' · 本地运行');enableControls(true);announce('Cesium 三维场景已初始化，当前为模拟数据。');}catch(e){if(candidate)candidate.destroy();manager=null;showSceneError(e);}}
$('engine-file').addEventListener('change',function(){var file=this.files&&this.files[0];if(!file)return;this.value='';if(manager){manager.destroy();manager=null;}enableControls(false);text('engine-error','');text('engine-status','正在载入本地 Cesium…');if(engineUrl)URL.revokeObjectURL(engineUrl);engineUrl=URL.createObjectURL(file);var script=document.createElement('script');script.src=engineUrl;script.onload=function(){script.remove();URL.revokeObjectURL(engineUrl);engineUrl=null;initializeEngine();};script.onerror=function(){script.remove();if(engineUrl)URL.revokeObjectURL(engineUrl);engineUrl=null;showSceneError(new Error('脚本无法加载，请选择可信的 Cesium 官方发行文件。'));};document.head.appendChild(script);});
$('overview').addEventListener('click',function(){if(manager)manager.overview();});
$('locate').addEventListener('click',function(){if(manager)manager.locate();});
$('track').addEventListener('click',function(){if(!manager)return;state.tracking=!state.tracking;this.setAttribute('aria-pressed',String(state.tracking));if(state.tracking)manager.scene.camera.cancelFlight();});
$('play').addEventListener('click',function(){if(!manager)return;if(manager.seconds()>=7200)manager.clock.currentTime=manager.C.JulianDate.clone(manager.start);manager.clock.shouldAnimate=!manager.clock.shouldAnimate;this.textContent=manager.clock.shouldAnimate?'暂停':'播放';this.setAttribute('aria-pressed',String(!manager.clock.shouldAnimate));});
$('speed').addEventListener('change',function(){if(manager)manager.clock.multiplier=Number(this.value);});
$('timeline').addEventListener('input',function(){if(!manager)return;manager.clock.currentTime=manager.C.JulianDate.addSeconds(manager.start,Number(this.value),new manager.C.JulianDate());manager.lastOrbit=-1e9;});
$('reset-time').addEventListener('click',function(){if(!manager)return;manager.clock.currentTime=manager.C.JulianDate.clone(manager.start);manager.lastOrbit=-1e9;manager.clock.shouldAnimate=true;$('play').textContent='暂停';$('play').setAttribute('aria-pressed','false');});
renderResources();renderTasks();renderAlerts();renderSelection();updateClock();startTimer();
window.addEventListener('pagehide',function(e){stopTimer();if(manager){if(e.persisted)manager.stopRender();else{manager.destroy();manager=null;}}if(!e.persisted&&engineUrl)URL.revokeObjectURL(engineUrl);});
window.addEventListener('pageshow',function(){updateClock();startTimer();if(manager){manager.clock.tick();manager.startRender();}});
}());