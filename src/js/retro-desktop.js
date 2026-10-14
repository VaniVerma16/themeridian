/* The Meridian: shared browser desktop for public levels 1–5.
   The privileged dev navigation remains gated in core.js. */
(function(){
 'use strict';
 if(!document.body.classList.contains('dev-newsprint'))return;
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
 // Its developer controls are suppressed for public visitors; keep the
 // actual Start button, browser task and clock available to everyone.
 if(!developerPreview){
   nav.hidden=false;
   nav.setAttribute('aria-label','Desktop taskbar');
   nav.querySelectorAll('.dev-tag,label,#dev-level,#dev-pass,#dev-audio').forEach(el=>{el.hidden=true;el.tabIndex=-1;});
 }
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
   windows.classList.remove('retro-errors-active');
   wrapper.classList.remove('retro-under-attack');
 }
 function queueError(fn,delay){alertTimers.push(window.setTimeout(fn,delay));}
 function corruptError(windowEl,changes){
   if(!windowEl)return;
   const heading=windowEl.querySelector('.retro-error-title span');
   const message=windowEl.querySelector('.retro-error-message');
   const button=windowEl.querySelector('.retro-error-actions button');
   if(changes.title)queueError(()=>{if(heading?.isConnected)heading.textContent=changes.title;},changes.at||850);
   if(changes.message)queueError(()=>{if(message?.isConnected)message.firstChild.textContent=changes.message;},(changes.at||850)+180);
   if(changes.button)queueError(()=>{if(button?.isConnected)button.textContent=changes.button;},(changes.at||850)+350);
 }
 function fault(kind){
   clearAlerts();
   windows.classList.add('retro-errors-active');
   const haunted=kind==='cascade'||kind==='breach';
   wrapper.classList.toggle('retro-under-attack',haunted);
   if(kind==='soft'){
     const w=openAlert({
       title:'Internet Explorer — Script Error',
       body:'The archive has received a revised page from an unknown source.\nThe requested original is still open.',
       code:'FILE 04 · LINE 0 · REVISION NOT AUTHORISED',
       autoClose:4900
     });
     corruptError(w,{title:'Internet Explorer — SOURCE CONFLICT',at:1250});
   }else if(kind==='cascade'){
     const first=openAlert({
       title:'Microsoft Internet Explorer',
       body:'A previous instance of the archive is still running.\nYou did not open it.',
       code:'ARCHIVE.EXE / PID UNKNOWN',autoClose:7800
     });
     corruptError(first,{message:'This file is already open elsewhere.\nIt is currently being changed.',at:1800});
     queueError(()=>{
       const w=openAlert({
         title:'Windows Explorer — File Conflict',
         body:'Two originals were found in the same directory.\nBoth files report the same timestamp.',
         code:'C:\\MERIDIAN\\ARCHIVE\\ORIGINAL.HTM',
         kind:'severe',autoClose:7900
       });
       corruptError(w,{title:'C:\\MERIDIAN\\ARCHIVE\\DO_NOT_REPLACE.HTM',button:'CANCEL',at:1150});
     },340);
     queueError(()=>{
       const w=openAlert({
         title:'Archive Recovery Utility',
         body:'Restoration completed. The restored document was not created by this author.',
         code:'RETAINED COPY / OWNER: [UNAVAILABLE]',
         kind:'severe',corrupted:true,autoClose:7300
       });
       corruptError(w,{message:'Restoration completed.\nThe original document has been overwritten again.',button:'STAY',at:850});
     },1020);
     queueError(()=>openAlert({
       title:'Media Player — PLAYBACK ERROR',
       body:'The recording has stopped. A second track is still playing.',
       code:'TRACK 02 / SOURCE UNRESOLVED',
       kind:'severe',autoClose:6400
     }),1580);
   }else if(kind==='breach'){
     const first=openAlert({
       title:'Internet Explorer — ARCHIVE 1997',
       body:'The document has changed since it was first loaded.\nThe original copy is attempting to restore itself.',
       code:'EDITORIAL PROOF / CONFLICTING WRITES',autoClose:10500
     });
     corruptError(first,{title:'THE MERIDIAN — THIS IS NOT THE ORIGINAL',at:1500});
     queueError(()=>{
       const w=openAlert({
         title:'Explorer — Duplicate File',
         body:'The original site was found in two different locations.\nOne of these files does not belong here.',
         code:'C:\\MERIDIAN\\OLD_SITE\\INDEX.HTM',kind:'severe',autoClose:10000
       });
       corruptError(w,{message:'One of these files does not belong here.\nWhy does it keep returning?',at:1280});
     },260);
     queueError(()=>{
       const w=openAlert({
         title:'Write Protection Failure',
         body:'A retained document is requesting control of this browser window.',
         code:'ORIGINAL AUTHOR / ACCESS DENIED',kind:'severe',corrupted:true,autoClose:9000
       });
       corruptError(w,{title:'THE PAGE IS TRYING TO SPEAK',button:'DO NOT CLOSE',at:740});
     },740);
     queueError(()=>{
       const w=openAlert({
         title:'ARCHIVE.EXE — FATAL EXCEPTION',
         body:'This window was not opened by you.\nThe file you need was removed from the index.',
         code:'REF. UNAVAILABLE / FIND THE MISSING FILE',
         kind:'severe',corrupted:true,autoClose:8900
       });
       corruptError(w,{message:'FIND THE MISSING FILE.\nFIND THE MISSING FILE.\nIT WAS HERE BEFORE.',button:'STAY',at:1150});
     },1340);
     queueError(()=>{
       const w=openAlert({
         title:'Windows — Application Not Responding',
         body:'The previous window cannot be closed.\nIt has already opened again.',
         code:'THE MERIDIAN — UNKNOWN PROCESS',
         kind:'severe',autoClose:7700
       });
       corruptError(w,{title:'FIND THE MISSING FILE',at:1200});
     },2060);
   }
   queueError(()=>{wrapper.classList.remove('retro-under-attack');windows.classList.remove('retro-errors-active');},11500);
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
   if(!developerPreview){
     window.MeridianNavigate?.(section);
     return;
   }
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
