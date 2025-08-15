// Small interactive behaviors: copy telegram handle, analytics placeholder
document.addEventListener('DOMContentLoaded',function(){
  const tgBtn = document.querySelector('[data-tg]');
  if(!tgBtn) return;
  tgBtn.addEventListener('click', async function(e){
    const handle = tgBtn.getAttribute('data-tg');
    try{
      await navigator.clipboard.writeText(handle);
      // temporary UI feedback
      const old = tgBtn.innerHTML;
      tgBtn.innerHTML = '<i class="fas fa-check"></i> تم النسخ';
      setTimeout(()=> tgBtn.innerHTML = old,1500);
    }catch(err){
      // fallback: open t.me link if clipboard failed
      const url = 'https://t.me/'+handle.replace('@','');
      window.open(url,'_blank');
    }
  });
});
