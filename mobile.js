/* 한글 하위 페이지 모바일 메뉴 (햄버거) - 상단 메뉴에서 자동으로 만들어짐 */
(function(){
  var inner=document.querySelector('header .header-inner'), nav=document.querySelector('header nav');
  if(!inner||!nav||document.getElementById('enMenu'))return;
  var chip=inner.querySelector('.lang-chip-m'); if(chip)chip.classList.add('has-menu');
  var b=document.createElement('button'); b.className='en-burger'; b.setAttribute('aria-label','메뉴 열기');
  b.innerHTML='<span></span><span></span><span></span>'; inner.appendChild(b);
  var ov=document.createElement('div'); ov.className='en-menu-overlay'; ov.id='koOverlay';
  var m=document.createElement('div'); m.className='en-menu'; m.id='koMenu';
  var h='<div class="mm-head"><span style="font-family:\'Bebas Neue\';color:#fff;font-size:20px;letter-spacing:3px">HYUN SUNG</span><button class="mm-close" aria-label="닫기">✕</button></div>';
  var items=nav.querySelectorAll(':scope > .nav-item');
  for(var i=0;i<items.length;i++){
    var a=items[i].querySelector('a.nav-link'), dd=items[i].querySelectorAll('.dropdown a');
    if(!a)continue;
    if(dd.length){h+='<div class="mm-cat">'+a.textContent+'</div>';
      for(var j=0;j<dd.length;j++)h+='<a class="mm-item" href="'+dd[j].getAttribute('href')+'">'+dd[j].textContent+'</a>';}
    else h+='<a class="mm-main" href="'+a.getAttribute('href')+'">'+a.textContent+'</a>';
  }
  var cta=nav.querySelector('a.nav-cta'); if(cta)h+='<a class="mm-btn" href="'+cta.getAttribute('href')+'">'+cta.textContent+'</a>';
  var en=nav.querySelector('.lang-switch a'); if(en)h+='<a class="mm-lang" href="'+en.getAttribute('href')+'">English</a>';
  m.innerHTML=h; document.body.appendChild(ov); document.body.appendChild(m);
  function open(){m.classList.add('open');ov.style.display='block';document.body.style.overflow='hidden'}
  function close(){m.classList.remove('open');ov.style.display='none';document.body.style.overflow=''}
  b.addEventListener('click',open); ov.addEventListener('click',close); m.querySelector('.mm-close').addEventListener('click',close);
})();
