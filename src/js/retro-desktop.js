/* The Meridian: desktop shell for ?dev=1 only.
   Never routes the public game or overrides puzzle answers. */
(function(){
 'use strict';
 if(typeof developerPreview==='undefined'||!developerPreview)return;
 const $=id=>document.getElementById(id);
 const wrapper=document.querySelector('.wrapper');
 const chrome=document.querySelector('.retro-browser-chrome');
 const header=$('full-header'),footer=wrapper.querySelector('footer');
 if(!wrapper||!chrome||!header||!footer)return;

 // The document is the ONLY scrolling region. Chrome and desktop are stationary.
 const page=document.createElement('div');
 page.id='retro-browser-page';
 page.className='retro-browser-page';
 wrapper.insertBefore(page,header);
 let node=header;
 while(node){
   const next=node.nextElementSibling;
   page.appendChild(node);
   if(node===footer)break;
   node=next;
 }
 wrapper.setAttribute('role','region');
 wrapper.setAttribute('aria-label','The Meridian - Internet Explorer browser window');

 const status=$('retro-status');
 const originalAddress=$('retro-address');
 const load=document.createElement('div');
 load.className='retro-load-shade';load.id='retro-load-shade';load.hidden=true;
 load.setAttribute('aria-hidden','true');
 load.innerHTML='<div class="retro-load-document"><strong id="retro-load-title">Opening page...</strong><p id="retro-load-description">Contacting The Meridian Online.</p><div class="retro-load-progress"><span></span></div></div>';
 wrapper.insertBefore(load,page.nextSibling);

 // Give the browser's toolbar and title buttons real, reversible behaviour.
 const tools=chrome.querySelector('.retro-browser-toolbar');
 tools.innerHTML='';
 const controls=[
  ['retro-back','←','Back'],
  ['retro-forward','→','Forward'],
  ['retro-stop','×','Stop'],
  ['retro-refresh','↻','Refresh'],
  ['retro-home','⌂','Home']
 ];
 controls.forEach(([id,icon,label])=>{
   const button=document.createElement('button');
   button.type='button';button.id=id;button.className='retro-tool';
   const mark=document.createElement('span');mark.className='retro-tool-icon';mark.textContent=icon;mark.setAttribute('aria-hidden','true');
   const word=document.createElement('span');word.textContent=label;
   button.append(mark,word);button.setAttribute('aria-label',label);tools.append(button);
 });
 const titleActions=chrome.querySelector('.retro-window-controls');
 titleActions.innerHTML='';
 [['retro-minimise','_','Minimize browser'],['retro-maximise','□','Maximize browser'],['retro-close-window','×','Close browser window']].forEach(([id,label,alt])=>{
   const button=document.createElement('button');button.type='button';button.id=id;
   button.textContent=label;button.setAttribute('aria-label',alt);button.title=alt;
   titleActions.append(button);
 });

 const nav=$('dev-navigation');
 // A Windows taskbar belongs to the desktop, not the scrolled website.
 if(page.contains(nav))document.body.appendChild(nav);
 const start=document.createElement('button');
 start.id='retro-start';start.className='retro-start';start.type='button';start.textContent='▦ Start';
 const task=document.createElement('button');
 task.id='retro-task-button';task.className='retro-task';task.type='button';
 task.textContent='The Meridian - Internet Explorer';
 const clock=document.createElement('span');
 clock.id='retro-clock';clock.className='retro-clock';
 clock.setAttribute('aria-label','Desktop clock');
 nav.prepend(task);nav.prepend(start);nav.append(clock);
 function clockTick(){
   clock.textContent=new Date().toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});
 }
 clockTick();window.setInterval(clockTick,30000);

 const startMenu=document.createElement('div');startMenu.className='retro-start-menu';startMenu.hidden=true;
 startMenu.innerHTML='<button type="button" data-command="browser">Internet Explorer — The Meridian</button><button type="button" data-command="documents">Documents</button><button type="button" data-command="computer">My Computer</button><button type="button" data-command="bin">Recycle Bin</button>';
 document.body.append(startMenu);
 start.addEventListener('click',()=>{
   startMenu.hidden=!startMenu.hidden;start.setAttribute('aria-expanded',String(!startMenu.hidden));
 });
 document.addEventListener('click',ev=>{
   if(!startMenu.hidden&&!start.contains(ev.target)&&!startMenu.contains(ev.target))startMenu.hidden=true;
 });
 function toggleMinimize(forceVisible){
   const minimize=forceVisible===true?false:!wrapper.classList.contains('retro-minimized');
   wrapper.classList.toggle('retro-minimized',minimize);
   task.setAttribute('aria-pressed',String(!minimize));
 }
 $('retro-minimise').addEventListener('click',()=>toggleMinimize());
 $('retro-close-window').addEventListener('click',()=>toggleMinimize());
 $('retro-maximise').addEventListener('click',()=>wrapper.classList.toggle('retro-maximized'));
 task.addEventListener('click',()=>toggleMinimize(wrapper.classList.contains('retro-minimized')));

 const windows=document.createElement('div');
 windows.className='retro-errors';windows.id='retro-errors';
 windows.setAttribute('aria-label','Desktop application windows');
 document.body.append(windows);
 let alertSerial=0;let alertTimers=[];
 function closeAlert(w){
   if(!w||!w.isConnected)return;
   w.remove();
 }
 const screenPositions=[
  [38,23],[51,33],[29,42],[57,15],[21,26],[43,48]
 ];
 function openAlert({title='Internet Explorer',body='',code='',kind='normal',autoClose=0,corrupted=false}={}){
   const i=alertSerial++;
   const box=document.createElement('div');
   box.className='retro-error'+(corrupted?' corrupted':'');box.dataset.fault=kind;
   box.setAttribute('role','alertdialog');box.setAttribute('aria-label',title);
   box.style.zIndex=String(i+1);
   const [x,y]=screenPositions[i%screenPositions.length];
   // Keep the dialog on-screen, even at 800x600.
   box.style.left='min('+x+'vw, max(9px, calc(100vw - 410px)))';
   box.style.top='min('+y+'vh, max(15px, calc(100dvh - 205px)))';
   const top=document.createElement('div');top.className='retro-error-title';
   const name=document.createElement('span');name.textContent=title;
   const xButton=document.createElement('button');xButton.type='button';xButton.className='retro-error-close';
   xButton.textContent='×';xButton.setAttribute('aria-label','Close '+title);
   xButton.addEventListener('click',()=>closeAlert(box));
   top.append(name,xButton);
   const bodyEl=document.createElement('div');bodyEl.className='retro-error-body';
   const symbol=document.createElement('span');symbol.className='retro-error-symbol';symbol.textContent=kind==='severe'?'!':'×';
   symbol.setAttribute('aria-hidden','true');
   const message=document.createElement('div');message.className='retro-error-message';message.textContent=body;
   if(code){const tiny=document.createElement('small');tiny.textContent=code;message.appendChild(tiny);}
   bodyEl.append(symbol,message);
   const actions=document.createElement('div');actions.className='retro-error-actions';
   const okay=document.createElement('button');okay.type='button';okay.textContent='OK';
   okay.addEventListener('click',()=>closeAlert(box));actions.append(okay);
   box.append(top,bodyEl,actions);windows.append(box);
   if(autoClose)alertTimers.push(window.setTimeout(()=>closeAlert(box),autoClose));
   // Windows can be dragged by their title bars, like real applications.
   let drag=null;
   top.addEventListener('pointerdown',event=>{
     if(event.target.closest('button'))return;
     drag={x:event.clientX,y:event.clientY,left:box.offsetLeft,top:box.offsetTop};
     top.setPointerCapture(event.pointerId);
   });
   top.addEventListener('pointermove',event=>{
     if(!drag)return;
     const nx=Math.min(window.innerWidth-box.offsetWidth,Math.max(0,drag.left+event.clientX-drag.x));
     const ny=Math.min(window.innerHeight-box.offsetHeight-43,Math.max(0,drag.top+event.clientY-drag.y));
     box.style.left=nx+'px';box.style.top=ny+'px';
   });
   top.addEventListener('pointerup',()=>{drag=null});
   top.addEventListener('pointercancel',()=>{drag=null});
   return box;
 }
 function clearAlerts(){
   alertTimers.forEach(clearTimeout);alertTimers=[];
   windows.replaceChildren();
 }
 function fault(kind){
   // An ordinary old browser error becomes a collection of contradictory
   // application warnings. The archive's content underneath is never changed.
   if(kind==='soft'){
     openAlert({title:'Microsoft Internet Explorer',body:'An error has occurred in the script on this page.\nContinue loading the document?',code:'Line 97 · archive/index.htm',autoClose:3100});
   }else if(kind==='cascade'){
     clearAlerts();
     openAlert({title:'Internet Explorer',body:'The document you are viewing has been modified by another application.',code:'File state: changed',autoClose:6500});
     alertTimers.push(setTimeout(()=>openAlert({title:'Archive Index — Application Error',body:'The original file cannot be located.\nA different version is already open.',code:'FILE_NOT_FOUND · 0x80070002',autoClose:6400}),310));
     alertTimers.push(setTimeout(()=>openAlert({title:'Microsoft WordPad',body:'This document is currently in use.\nDo you want to open another copy?',code:'AUTHOR UNVERIFIED',autoClose:5900}),760));
   }else if(kind==='breach'){
     clearAlerts();
     openAlert({title:'The Meridian Online — Notice',body:'The page was restored from an unexpected location.',code:'Source path does not match the archive index.',autoClose:8400});
     alertTimers.push(setTimeout(()=>openAlert({title:'Explorer — File Conflict',body:'Two versions of this document exist.\nBoth claim to be the original.',code:'C:\\MERIDIAN\\ARCHIVE\\INDEX.HTM',autoClose:8100}),310));
     alertTimers.push(setTimeout(()=>openAlert({title:'INTERNET EXPLORER',body:'The document has changed while you were reading it.',code:'A previous instance is still running.',kind:'severe',autoClose:8300}),660));
     alertTimers.push(setTimeout(()=>openAlert({title:'SYSTEM ERROR',body:'The recovered index is not the index that was requested.',code:'REF: [CANNOT RESOLVE]',kind:'severe',corrupted:true,autoClose:6900}),1150));
   }
 }
 const shortcuts=document.querySelector('.retro-desktop-shortcuts');
 if(shortcuts){
   shortcuts.removeAttribute('aria-hidden');
   shortcuts.setAttribute('aria-label','Desktop icons');
   shortcuts.innerHTML='';
   [['computer','My Computer'],['meridian','The Meridian'],['bin','Recycle Bin']].forEach(([action,label])=>{
     const button=document.createElement('button');button.className='retro-desktop-item';button.type='button';
     button.dataset.desktopShortcut=action;button.title='Open '+label;
     const icon=document.createElement('span');icon.className='retro-desktop-icon';icon.setAttribute('aria-hidden','true');
     const caption=document.createElement('span');caption.textContent=label;
     button.append(icon,caption);shortcuts.append(button);
     button.addEventListener('click',()=>activateDesktop(action));
   });
 }
 function activateDesktop(action){
   if(action==='meridian'){toggleMinimize(true);return;}
   if(action==='computer')openAlert({title:'My Computer',body:'3½ Floppy (A:)\nLocal Disk (C:)\nThe Meridian Online — shortcut',code:'Windows Explorer',autoClose:0});
   if(action==='documents')openAlert({title:'My Documents',body:'ARCHIVE_NOTES.TXT\nEDITORIAL.DOC\nReference materials',code:'3 object(s)',autoClose:0});
   if(action==='bin')openAlert({title:'Recycle Bin',body:'The Recycle Bin is empty.',autoClose:0});
 }
 startMenu.addEventListener('click',event=>{
   const button=event.target.closest('button[data-command]');
   if(!button)return;
   startMenu.hidden=true;activateDesktop(button.dataset.command);
 });

 let trail=[],trailPos=-1,historyNavigation=false;
 function navigateTo(section){
   if(!section)return;
   const menu=$('dev-level');menu.value=section;
   menu.dispatchEvent(new Event('change',{bubbles:true}));
 }
 function pageChanged(section){
   if(!historyNavigation){
     if(trail[trailPos]!==section){trail=trail.slice(0,trailPos+1);trail.push(section);trailPos=trail.length-1;}
   }
   historyNavigation=false;
   $('retro-back').disabled=trailPos<1;
   $('retro-forward').disabled=trailPos>=trail.length-1;
   page.scrollTop=0;
 }
 $('retro-back').addEventListener('click',()=>{
   if(trailPos<1)return;
   historyNavigation=true;trailPos--;navigateTo(trail[trailPos]);
 });
 $('retro-forward').addEventListener('click',()=>{
   if(trailPos>=trail.length-1)return;
   historyNavigation=true;trailPos++;navigateTo(trail[trailPos]);
 });
 $('retro-home').addEventListener('click',()=>navigateTo('home'));
 $('retro-refresh').addEventListener('click',()=>{
   beginNavigation($('dev-level').value||'home');
   page.scrollTop=0;
 });
 $('retro-stop').addEventListener('click',()=>finishNavigation(true));
 let loadingTimer=null,readyTimer=null;
 function finishNavigation(stopped=false){
   if(loadingTimer)clearTimeout(loadingTimer);
   if(readyTimer)clearTimeout(readyTimer);
   load.hidden=true;load.classList.remove('ready');
   if(status)status.textContent=stopped?'Stopped':'Done';
 }
 function beginNavigation(section){
   if(loadingTimer)clearTimeout(loadingTimer);
   if(readyTimer)clearTimeout(readyTimer);
   wrapper.classList.remove('retro-minimized');
   load.classList.remove('ready');load.hidden=false;
   const path=originalAddress?.textContent?.replace(/^https?:\/\//,'')||'www.the-meridian.archive/';
   $('retro-load-title').textContent='Opening '+path;
   $('retro-load-description').textContent='Waiting for reply from The Meridian Online...';
   if(status)status.textContent='Opening page...';
   readyTimer=window.setTimeout(()=>{load.classList.add('ready');if(status)status.textContent='Receiving data...';},160);
   loadingTimer=window.setTimeout(()=>finishNavigation(),590);
 }
 // Recover stale/incorrect relative paths once, including dynamically created scans.
 // Genuine missing assets remain clearly marked instead of being silently cropped.
 document.addEventListener('error',event=>{
   const img=event.target;
   if(!(img instanceof HTMLImageElement))return;
   const supplied=img.getAttribute('src')||'';
   if(!img.dataset.meridianRetry && !/^(?:data:|https?:|blob:)/i.test(supplied)){
     const file=supplied.split('?')[0].split('/').pop();
     if(file && /\.(?:png|jpe?g|gif|webp|svg)$/i.test(file)){
       img.dataset.meridianRetry='1';
       img.src='/'+encodeURIComponent(file)+'?archive-image-retry=1';
       return;
     }
   }
   img.classList.add('retro-missing-asset');
   img.title='Archive image unavailable: '+supplied;
   if(status)status.textContent='Image could not be loaded';
 },true);
 document.addEventListener('keydown',event=>{
   if(event.key==='Escape'){
     if(!startMenu.hidden){startMenu.hidden=true;return;}
     const last=windows.lastElementChild;if(last)closeAlert(last);
   }
 });
 window.MeridianDesktop={beginNavigation,pageChanged,fault,openAlert,clearAlerts};
 pageChanged($('dev-level').value||'home');
})();
