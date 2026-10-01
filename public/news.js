(function(){
 const buttons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.news-card')];
 function apply(value){
  const selected=buttons.some(b=>b.dataset.filter===value)?value:'all';
  buttons.forEach(b=>{const on=b.dataset.filter===selected;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
  let count=0;cards.forEach(c=>{c.hidden=selected!=='all'&&c.dataset.type!==selected;if(!c.hidden)count++});
  document.querySelector('.news-count').textContent=count+' bài viết';
 }
 buttons.forEach(b=>b.addEventListener('click',()=>{apply(b.dataset.filter);const u=new URL(location.href);if(b.dataset.filter==='all')u.searchParams.delete('type');else u.searchParams.set('type',b.dataset.filter);history.replaceState(null,'',u)}));
 apply(new URLSearchParams(location.search).get('type')||'all');
})();
