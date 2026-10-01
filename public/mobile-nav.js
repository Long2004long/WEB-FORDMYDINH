(function(){
const header=document.querySelector('.header');
if(header){
 const syncHeaderHeight=()=>document.documentElement.style.setProperty('--site-header-height',header.getBoundingClientRect().height+'px');
 syncHeaderHeight();
 if(window.ResizeObserver)new ResizeObserver(syncHeaderHeight).observe(header);
 else window.addEventListener('resize',syncHeaderHeight);
}

const button=document.getElementById('menuBtn'),menu=document.getElementById('navlinks');
if(!button||!menu)return;
button.type='button';button.setAttribute('aria-controls','navlinks');menu.setAttribute('aria-label','Điều hướng chính');
function setOpen(open){menu.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Đóng menu':'Mở menu');button.textContent=open?'×':'☰';document.body.classList.toggle('mobile-menu-open',open)}
setOpen(false);
button.addEventListener('click',()=>setOpen(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){setOpen(false);button.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.header')&&menu.classList.contains('open'))setOpen(false)});
window.matchMedia('(max-width:980px)').addEventListener('change',()=>setOpen(false));
})();
