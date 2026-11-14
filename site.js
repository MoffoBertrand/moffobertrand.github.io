(function(){
  var root=document.documentElement, lb=document.getElementById('langBtn'), tb=document.getElementById('themeBtn');
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  function setLang(l){root.lang=l; lb.textContent=l==='fr'?'EN':'FR'; set('lang',l);}
  var saved=get('lang'); setLang(saved || ((navigator.language||'fr').slice(0,2)==='en'?'en':'fr'));
  lb.onclick=function(){setLang(root.lang==='fr'?'en':'fr')};
  var t=get('theme'); if(t) root.dataset.theme=t;
  tb.onclick=function(){
    var dark = root.dataset.theme ? root.dataset.theme==='dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark?'light':'dark'; set('theme',root.dataset.theme);
  };
})();
