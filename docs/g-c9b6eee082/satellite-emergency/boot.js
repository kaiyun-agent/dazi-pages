const status=document.getElementById('boot-status');
const timeout=setTimeout(()=>{if(status)status.textContent='加载时间较长，请检查网络后重试。';document.getElementById('boot-retry')?.removeAttribute('hidden')},18000);
import('./app.js').then(()=>clearTimeout(timeout)).catch(error=>{clearTimeout(timeout);if(status)status.textContent='界面资源加载失败，请检查网络后重试。';document.getElementById('boot-retry')?.removeAttribute('hidden');console.error('Application startup failed',error)});
