/* 1997 Meridian developer-only chrome/navigation. No public-game changes.
   Plain ES5-era interfaces are intentional, but code is modern and accessible. */
(function(){
 'use strict';
 if(!developerPreview)return;
 var tabs={front:'retro-six-welcome',proof:'retro-six-proof',index:'retro-six-index',help:'retro-six-help'};
 var currentTab='front';
 var labels={
  home:'index.htm',readOne:'assess/01.htm',level:'assess/01-work.htm',
  readTwo:'assess/02.htm',two:'assess/02-work.htm',
  readThree:'assess/03.htm',three:'assess/03-work.htm',
  readFour:'assess/04.htm',four:'assess/04-work.htm',
  readFive:'assess/05.htm',five:'assess/05-work.htm',
  complete:'index.htm',six:'archive/1997/index.htm',sixAfter:'archive/1997/catalogue.htm'
 };
 var bar=document.getElementById('retro-address'),status=document.getElementById('retro-status');
 function setPage(section){
   var address=labels[section]||'index.htm';
   if(section==='six'){
     var pages={front:'archive/1997/index.htm',proof:'archive/1997/proof.htm',
       index:'archive/1997/files.htm',help:'archive/1997/help.htm'};
     address=pages[currentTab]||address;
   }
   if(bar)bar.textContent='http://www.the-meridian.archive/'+address;
   if(status)status.textContent=section==='sixAfter'?'Error in archive index':section==='six'?'Document loaded':'Done';
 }
 function openTab(which){
   if(!tabs[which])return;
   currentTab=which;
   Object.keys(tabs).forEach(function(key){
      var node=document.getElementById(tabs[key]);
      if(node)node.hidden=key!==which;
   });
   document.querySelectorAll('#level-six [data-retro-tab]').forEach(function(button){
     if(button.getAttribute('data-retro-tab')===which)button.setAttribute('aria-current','page');
     else button.removeAttribute('aria-current');
   });
   setPage('six');
 }
 document.querySelectorAll('#level-six [data-retro-tab]').forEach(function(button){
   button.addEventListener('click',function(){openTab(button.getAttribute('data-retro-tab'))});
 });
 var back=document.getElementById('six-back');
 if(back)back.addEventListener('click',function(){
   // level6.js already navigates to six; select the proof view after that.
   openTab('proof');
 });
 window.MeridianRetro={setPage:setPage,openTab:openTab};
 openTab('front');
 setPage(document.getElementById('dev-level')?.value||'home');
})();