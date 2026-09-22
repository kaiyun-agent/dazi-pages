(function(root){
'use strict';
const events=[{id:'flood',name:'洪水',site:'江湖流域 · 演示区',color:'#39c9ec'},{id:'fire',name:'火灾',site:'山地林区 · 演示区',color:'#ffad66'},{id:'quake',name:'地震',site:'山前城镇 · 演示区',color:'#bdabff'}];
const satellites=[{id:'DEMO-01',sensor:'SAR',resolution:5,capacity:1800,wait:1,latency:2},{id:'DEMO-02',sensor:'光学',resolution:1,capacity:600,wait:2,latency:3},{id:'DEMO-03',sensor:'光学',resolution:2,capacity:3000,wait:4,latency:4}];
const states=['已提交','已受理','观测中','下传中','处理中','已交付'];
function plan(r){
if(!events.some(e=>e.id===r.event)||![r.area,r.deadline,r.resolution,r.cloud].every(Number.isFinite)||r.area<=0||r.deadline<=0||r.resolution<=0||r.cloud<0||r.cloud>100)throw Error('请检查区域、时限和影像要求');
return satellites.map(s=>{const strips=Math.ceil(r.area/s.capacity),hours=s.wait+s.latency+(strips-1)*2;const reasons=[];
if(r.resolution<s.resolution)reasons.push('分辨率不满足要求');
if(s.sensor==='光学'&&r.cloud>60)reasons.push('演示云量超过光学阈值');
if(hours>r.deadline)reasons.push('预计交付超过截止时限');
if(r.offline)reasons.push('资源不可用（模拟故障）');
return {...s,hours,strips,coverage:100,feasible:reasons.length===0,reasons,area:r.area,observedAt:r.base+s.wait*3600000,deliveredAt:r.base+hours*3600000};}).sort((a,b)=>a.hours-b.hours);
}
function createTask(r,p,id){const valid=plan(r).find(x=>x.id===p.id);if(!valid?.feasible)throw Error('此方案不可执行');return {id,request:{...r},plan:valid,step:0,history:[{state:states[0],at:Date.now()}],terminal:null};}
function advance(t,action='next'){if(t.terminal||t.step===5)return t;const n=JSON.parse(JSON.stringify(t));if(action==='fail')n.terminal='执行失败';else if(action==='cancel')n.terminal='已取消';else if(action==='next')n.step++;else throw Error('未知状态操作');n.history.push({state:n.terminal||states[n.step],at:Date.now()});return n;}
const api={events,satellites,states,plan,createTask,advance};if(typeof module!=='undefined')module.exports=api;else root.Domain=api;
})(globalThis);
