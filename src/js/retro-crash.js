/* THE MERIDIAN — desktop corruption / BIOS recovery (public and developer).
   Exactly one takeover at a time; original game text and puzzle code are intact. */
(function(){
 'use strict';
 if(!document.body.classList.contains('dev-newsprint'))return;
 const root=document.createElement('div');
 root.className='meridian-crash phase-desktop';
 root.id='meridian-crash';
 root.hidden=true;
 root.setAttribute('aria-hidden','true');
 root.innerHTML=
  '<div class="crash-desktop" aria-hidden="true">'+
  ' <div class="crash-ghost">'+
  '  <div class="crash-ghost-title"><span>THE MERIDIAN ONLINE — INTERNET EXPLORER</span><span>×</span></div>'+
  '  <div class="crash-ghost-body">THIS PAGE IS NOT RESPONDING'+
  '   <div class="crash-ghost-copy">ERROR READING ARCHIVE SOURCE<br>THE DOCUMENT HAS BEEN MODIFIED</div>'+
  '  </div>'+
  ' </div>'+
  '</div>'+
  '<div class="crash-bios" role="status" aria-live="off">'+
  ' <div class="bios-brand">MERIDIAN ARCHIVE SYSTEM BIOS 1997<br>Recovery Environment 1.0</div>'+
  ' <div class="bios-divider"></div>'+
  ' <div id="meridian-bios-log"></div>'+
  ' <div id="meridian-bios-transcript" class="bios-transcript"></div>'+
  ' <div class="bios-prompt">C:\\MERIDIAN\\ARCHIVE&gt; <span class="bios-cursor" aria-hidden="true"></span></div>'+
  '</div>';
 document.body.append(root);
 const log=document.getElementById('meridian-bios-log');
 const transcript=document.getElementById('meridian-bios-transcript');
 let serial=0,timers=[],playing=false,finishedAction=null;
 const scenarios={
  editorial:{
   duration:3100,
   code:'RECOVERY 03 → 04 / EDITORIAL RECORD',
   lines:['SYSTEM ERROR: SOURCE DOCUMENT CHANGED','An earlier copy is still running.','A previous revision has replaced the current page.']
  },
  survey:{
   duration:4100,
   code:'RECOVERY 04 → 05 / PHOTOGRAPHIC INDEX',
   lines:['THE ARCHIVE DID NOT REQUEST THIS DOCUMENT.','What... is happening?','Restoring previous document...','AUTHOR CANNOT BE VERIFIED.']
  },
  recording:{
   duration:4750,
   code:'RECOVERY 05 → 06 / MEDIA SOURCE',
   lines:['PLAYBACK INTERRUPTED.','Wait, what?',"There's another file?","Why didn't anyone look at this bef—",'ARCHIVE SOURCE: 1997 / ORIGINAL INDEX FOUND']
  },
  archivist:{
   duration:5150,
   code:'FILE 06 / RESTRICTED SYSTEM PROCESS',
   lines:['THIS DOCUMENT WAS MODIFIED WITHOUT AUTHORISATION.','STOP. HELP ME.','FIND THE MISSING FILE.','FIND THE MISSING FILE.']
  }
 };
 function defer(fn,ms){
   const id=window.setTimeout(fn,ms);timers.push(id);return id;
 }
 function clearTimers(){timers.forEach(clearTimeout);timers=[];}
 function write(parent,text,cl='bios-line'){
   const el=document.createElement('div');el.className=cl;el.textContent=text;
   parent.append(el);return el;
 }
 function dismiss(){
   clearTimers();playing=false;
   root.hidden=true;root.setAttribute('aria-hidden','true');
   root.className='meridian-crash phase-desktop';
   document.body.classList.remove('meridian-crashing');
   log.replaceChildren();transcript.replaceChildren();
 }
 function play({kind='survey',onComplete}={}){
   const spec=scenarios[kind]||scenarios.survey;
   if(playing)return false;
   playing=true;
   const id=++serial;finishedAction=onComplete;
   clearTimers();root.hidden=false;root.className='meridian-crash phase-desktop';
   root.setAttribute('aria-hidden','false');
   document.body.classList.add('meridian-crashing');
   log.replaceChildren();transcript.replaceChildren();
   const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   const duration=reduced?Math.max(1900,Math.round(spec.duration*.58)):spec.duration;
   const desktopDuration=reduced?220:820;
   defer(()=>{
     if(id!==serial)return;
     root.className='meridian-crash phase-bios';
     write(log,'MERIDIAN BIOS / COPYRIGHT 1984–1997', 'bios-line bios-code');
     write(log,'Checking system memory .......... 65536 KB OK','bios-line bios-code');
     write(log,'Detecting primary disk .......... C:\\MERIDIAN','bios-line bios-code');
     write(log,'[ FATAL EXCEPTION 0E ]','bios-line bios-critical');
     write(log,spec.code,'bios-line bios-code');
     const available=duration-desktopDuration-610;
     const spacing=Math.max(170,Math.floor(available/(spec.lines.length+1)));
     spec.lines.forEach((line,index)=>{
       defer(()=>{
         if(id!==serial)return;
         write(transcript,line,'bios-line');
       },spacing*(index+1));
     });
   },desktopDuration);
   defer(()=>{
     if(id!==serial)return;
     root.className='meridian-crash phase-restore';
   },duration-360);
   defer(()=>{
     if(id!==serial)return;
     const next=finishedAction;
     finishedAction=null;
     dismiss();
     if(typeof next==='function'){
       try{next()}catch(err){console.error('Meridian transition recovery failed',err);}
     }
   },duration);
   return true;
 }
 window.MeridianCrash={play,get playing(){return playing},dismiss};

 // All genuine developer-page progression buttons are routed through one
 // delegated capture handler. Moving their DOM nodes into 1997 table cells must
 // never make the original listeners inaccessible or permit double transitions.
 const introDestinations={
  'begin-one':'level','begin-two':'two','begin-three':'three',
  'begin-four':'four','begin-five':'five'
 };
 function reportFailure(error,where){
  console.error('Meridian navigation failed ('+where+'):',error);
  const status=document.getElementById('retro-status');
  if(status)status.textContent='Recovery needed — '+where;
 }
 document.addEventListener('click',event=>{
   if(!developerPreview)return; // Only dev may intercept progression buttons.
   const button=event.target.closest?.('button[id]');
   if(!button)return;
   const game=window.MeridianGame;
   if(!game || typeof game.show!=='function')return;
   const introDestination=introDestinations[button.id];
   const intro=button.closest('section.reading-page');

   if(introDestination && intro && !intro.hidden){
     event.preventDefault();
     event.stopImmediatePropagation();
     try{game.show(introDestination,true);}catch(error){reportFailure(error,button.id);}
     return;
   }

   if(button.id==='four-finish' && !document.getElementById('four-summary').hidden){
     event.preventDefault();
     event.stopImmediatePropagation();
     try{
       // Use the game's original crash, sound, and chapter transition.
       game.continueFromFour();
     }catch(error){
       reportFailure(error,'four-finish');
       // Even if optional audio/device APIs fail, progression is guaranteed.
       const next=()=>game.show('readFive',true);
       if(!window.MeridianCrash?.play({kind:'survey',onComplete:next}))next();
     }
     return;
   }

   if(button.id==='five-continue' && !document.getElementById('five-result').hidden){
     event.preventDefault();
     event.stopImmediatePropagation();
     try{
       // Never skip Jane, the narrator or the unknown speaker's recordings.
       game.continueFromFive();
     }catch(error){
       reportFailure(error,'five-continue');
       // A failed media subsystem may still recover into the original site.
       const next=()=>game.show('six',true);
       if(!window.MeridianTape?.play(next))next();
     }
     return;
   }

   if(button.id==='six-warning-continue' && !document.getElementById('six-warning').hidden){
     event.preventDefault();
     event.stopImmediatePropagation();
     try{game.dismissSixWarning();}catch(error){reportFailure(error,'six-warning-continue');}
   }
 },true);
})();
