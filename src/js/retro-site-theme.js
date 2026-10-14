/* The Meridian Online period site / archival VCR playback for public Levels 1–5.
   Keep all puzzle handlers, IDs, progress rules and recorded dialogue intact. */
(function(){
 'use strict';
 if(!document.body.classList.contains('dev-newsprint'))return;

 const siteSpecs=[
  {id:'level-one',serial:'01',title:'Transcription Review',
   subtitle:'Archived newspaper scan and electronic transcription · proofreading assignment',
   ticker:'RETAINED NEWSPAPER ISSUE · PROOFREAD THE ELECTRONIC TRANSCRIPTION',
   links:[
     ['Original Newspaper Scan','.transcription-source'],
     ['Digital Proof Sheet','.transcription-review'],
     ['Verification Form','#verify']]},
  {id:'level-four',serial:'04',title:'Photographic Survey Archive',
   subtitle:'Original location survey · photographic evidence and camera orientation records',
   ticker:'TOWN SURVEY MAP · HISTORICAL PHOTOGRAPHS · EDITORIAL FIELD NOTES',
   links:[
     ['Recovered Photograph','.four-photograph-col'],
     ['Town Survey Map','#four-map'],
     ['Supplementary Notes','#directory-open'],
     ['File Review','#four-summary']]},
  {id:'level-two',serial:'02',title:'Chronological Newspaper Index',
   subtitle:'Retained local-news editions · arranged for manual date verification',
   ticker:'DIGITISED CLIPPINGS · NEWSROOM SCANS · SORT OLDEST TO NEWEST',
   links:[
     ['Clippings Directory','.corkboard-frame'],
     ['Sorting Instructions','.task-line'],
     ['Submit Sequence','#sort-verify']]},
  {id:'level-three',serial:'03',title:'Missing Editorial Records',
   subtitle:'Publication and reporter attribution · working editorial worksheet',
   ticker:'EDITORIAL CORRESPONDENCE · REPORTER INDEX · ORIGINAL ISSUE DATES',
   links:[
     ['Recovered Headlines','.archive-roster'],
     ['Editor’s Memorandum','.editorial-memo'],
     ['Deduction Tables','.logic-grids'],
     ['Submit Attribution','#answer-fields']]},
  {id:'level-five',serial:'05',title:'Original Case File — Retained Papers',
   subtitle:'Document catalogue M/97 · retained editorial copies and reconstruction forms',
   ticker:'ARCHIVE REFERENCE M/97 · SOURCE DOCUMENTS · PERSONAL NOTES',
   links:[
     ['Original Case Files','desk-open-book'],
     ['Loose Inserts','desk-open-slips'],
     ['Personal Notepad','desk-open-pad'],
     ['Reconstruction Form','desk-open-case']]}
 ];
 // Introduction letters use the same site chrome so entering a puzzle
 // never changes the website's design language.
 siteSpecs.push(
   {id:'read-one',serial:'01',title:'A Brief Assessment',subtitle:'Editorial assignment notice',
    ticker:'THE MERIDIAN · ARCHIVAL QUALITY REVIEW · TRANSCRIPTION ASSESSMENT',
    links:[['Begin Transcription Review','#begin-one']]},
   {id:'read-four',serial:'04',title:'Annual Revival Project',subtitle:'Editorial assignment notice',
    ticker:'THE MERIDIAN · PHOTOGRAPHIC SURVEY · REVIVAL PROJECT',
    links:[['Open Survey Records','#begin-four']]},
   {id:'read-two',serial:'02',title:'Newspaper Date Review',subtitle:'Editorial assignment notice',
    ticker:'THE MERIDIAN · NEWSROOM CLIPPINGS · CHRONOLOGICAL REVIEW',
    links:[['Open Date Review','#begin-two']]},
   {id:'read-three',serial:'03',title:'The Missing Editions',subtitle:'Editorial assignment notice',
    ticker:'THE MERIDIAN · REPORTER RECORDS · MISSING EDITIONS',
    links:[['Begin Attribution','#begin-three']]},
   {id:'read-five',serial:'05',title:'Original Case File',subtitle:'Editorial assignment notice',
    ticker:'THE MERIDIAN · ORIGINAL CASE RECORDS · INTERNAL ARCHIVE',
    links:[['Open Case File','#begin-five']]}
 );

 // The released demo ending is an ordinary Meridian Online archive page.
 siteSpecs.push({
   id:'completed',serial:'END',title:'Archive Status — Additional File',
   subtitle:'Research & Preservation · status of the retained case records',
   ticker:'ARCHIVE STATUS · ADDITIONAL RECORD LOCATED · FURTHER REVIEW PENDING',
   links:[
     ['Archive Notice','#completed-title'],
     ['Personal Message','.beta-corner-note'],
     ['Return to Front Page','#return-home']
   ]
 });
 siteSpecs.forEach(spec=>{
   const section=document.getElementById(spec.id);
   if(!section || section.querySelector('.meridian-era-site'))return;
   let assignment=section.querySelector(':scope > .assignment, :scope > .reading-inner');
   if(spec.id==='completed' && !assignment){
     // Move existing nodes; their IDs and click handlers stay unchanged.
     assignment=document.createElement('div');
     assignment.className='assignment archive-completion';
     while(section.firstChild)assignment.appendChild(section.firstChild);
     section.appendChild(assignment);
   }
   if(!assignment)return;
   const shell=document.createElement('div');
   shell.className='meridian-era-site';shell.dataset.archivePage=spec.serial;
   const head=document.createElement('div');head.className='era-top';
   head.innerHTML='<div class="era-logo">The Meridian <em>Online!</em></div>'+
     '<span class="era-tagline">INDEPENDENT PUBLISHING &amp; RESEARCH ARCHIVES</span>'+
     '<p class="era-dateline">ESTABLISHED 1972 &nbsp; | &nbsp; ELECTRONIC ARCHIVE · APRIL 1997 &nbsp; | &nbsp; STORIES WORTH PRESERVING</p>';
   const ticker=document.createElement('div');ticker.className='era-ticker';ticker.textContent=spec.ticker;
   const table=document.createElement('table');table.className='era-table';
   table.setAttribute('role','presentation');
   const tr=document.createElement('tr');
   const side=document.createElement('td');side.className='era-sidebar';
   const navLabel=document.createElement('div');navLabel.className='era-sidehead';navLabel.textContent='SITE DIRECTORY';
   side.append(navLabel);
   const front=document.createElement('button');front.type='button';front.className='era-link';
   front.textContent='Front Page';
   front.addEventListener('click',()=>{
     const select=document.getElementById('dev-level');
     if(developerPreview && select){select.value='home';select.dispatchEvent(new Event('change',{bubbles:true}));}
     else window.MeridianNavigate?.('home');
   });side.append(front);
   const chapter=document.createElement('div');chapter.className='era-side-label';
   chapter.textContent='FILE ROOM / '+spec.serial;side.append(chapter);
   spec.links.forEach(([label,target])=>{
     const link=document.createElement('button');
     link.type='button';link.className='era-link';link.textContent=label;
     link.addEventListener('click',()=>{
       const targetEl=target.startsWith('#')?section.querySelector(target):target.startsWith('.')?section.querySelector(target):document.getElementById(target);
       if(!targetEl)return;
       if(target.startsWith('desk-') || targetEl.matches('button[id^="begin-"], #return-home')){
         targetEl.click();
         if(target.startsWith('desk-'))document.getElementById('desk-overlay')?.scrollIntoView({block:'nearest',behavior:'instant'});
       }else{
         targetEl.scrollIntoView({block:'start',behavior:'instant'});
         if(targetEl.matches('button'))targetEl.focus({preventScroll:true});
       }
     });side.append(link);
   });
   const counter=document.createElement('div');counter.className='era-counter';
   counter.innerHTML='YOU ARE VISITOR NUMBER<strong>004297</strong>TO THE ARCHIVE';
   const sidefoot=document.createElement('div');sidefoot.className='era-sidefoot';
   sidefoot.innerHTML='THE MERIDIAN<br>Electronic reference copy<br><br>Last updated:<br>APR 1997';
   side.append(counter,sidefoot);
   const mainCell=document.createElement('td');mainCell.className='era-body';
   const breadcrumb=document.createElement('div');breadcrumb.className='era-breadcrumb';
   breadcrumb.textContent='HOME > RESEARCH & PRESERVATION > FILE '+spec.serial;
   const title=document.createElement('h2');title.className='era-title';title.textContent=spec.title;
   const subtitle=document.createElement('p');subtitle.className='era-subtitle';subtitle.textContent=spec.subtitle;
   mainCell.append(breadcrumb,title,subtitle,assignment);
   tr.append(side,mainCell);table.append(tr);
   const footer=document.createElement('div');footer.className='era-end';
   footer.textContent='THE MERIDIAN ONLINE · ELECTRONIC ARCHIVE · FILE '+spec.serial+' · RETAINED FOR REFERENCE';
   shell.append(head,ticker,table,footer);
   section.append(shell);
 });
 // In the 1997 site, the handwritten editorial marginalia belongs in the
 // archive index beside the other document entries. The original physical
 // desk positioned it above the records, leaving a 58px-wide torn-paper label.
 // Moving the existing node preserves the original click listener, note,
 // opened/crumpled state and session persistence without duplicating controls.
 const retainedDocuments=document.querySelector('#level-five .desk-objects');
 const marginalia=document.querySelector('#level-five .case-note-wrap');
 if(retainedDocuments && marginalia && marginalia.parentElement!==retainedDocuments){
   retainedDocuments.appendChild(marginalia);
 }
 // The original HTML source of Level 6 is intentionally left untouched.

 // At the end of the already-written recordings, an analogue cassette changes
 // from 'PLAY' to 'STOP', then the ORIGINAL site appears. No dialogue is skipped.
 const tape=document.createElement('div');
 tape.id='meridian-tape';tape.className='meridian-tape';tape.hidden=true;
 tape.setAttribute('aria-hidden','true');
 tape.innerHTML='<div class="tape-image">'+
  '<div class="tape-head"><span id="tape-state">PLAY ▸</span><span>SP</span><span>TAPE 03</span></div>'+
  '<div class="tape-tracking" aria-hidden="true"></div>'+
  '<div class="tape-intertitle"><span id="tape-intertitle-main">END OF RECORDED MATERIAL</span>'+
  '<span id="tape-intertitle-sub">REWINDING SOURCE...</span></div>'+
  '<div class="tape-foot"><span>CH 03</span><span>TRACKING <span class="tape-bars">|||||</span></span>'+
  '<span id="tape-time">00:00:00</span></div>'+
  '</div>';
 document.body.append(tape);
 let tapeTimer=null,tapeInterval=null,playId=0;
 function finishTape(){
   clearInterval(tapeInterval);clearTimeout(tapeTimer);
   tapeInterval=null;tapeTimer=null;
   tape.hidden=true;tape.setAttribute('aria-hidden','true');
 }
 function playTape(callback){
   finishTape();const run=++playId;
   tape.hidden=false;tape.setAttribute('aria-hidden','false');
   tape.classList.remove('tape-seeking','tape-failed');
   document.getElementById('tape-state').textContent='PLAY ▸';
   document.getElementById('tape-intertitle-main').textContent='END OF RECORDED MATERIAL';
   document.getElementById('tape-intertitle-sub').textContent='REWINDING SOURCE...';
   const time=document.getElementById('tape-time');let frames=0;
   const reduced=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
   time.textContent='00:00:00';
   tapeInterval=setInterval(()=>{
     frames++;
     time.textContent='00:00:'+String(Math.floor(frames/4)).padStart(2,'0');
   },240);
   tapeTimer=setTimeout(()=>{
     tape.classList.add('tape-seeking');
     document.getElementById('tape-state').textContent='STOP ■';
     document.getElementById('tape-intertitle-main').textContent='ARCHIVE SOURCE FOUND';
     document.getElementById('tape-intertitle-sub').textContent='THE MERIDIAN ONLINE · APRIL 1997';
   },reduced?160:1330);
   const end=setTimeout(()=>{
     if(run!==playId)return;
     finishTape();callback?.();
   },reduced?510:2800);
   // On cancellation, both callback and display must be cleared.
   const oldFinish=finishTape;
   tape.addEventListener('keydown',event=>{if(event.key==='Escape')event.preventDefault()},{once:true});
   return ()=>{if(run===playId){++playId;clearTimeout(end);oldFinish();}};
 }
 window.MeridianTape={play:playTape};

 // The old player itself looks like a 1990s analogue capture, rather than
 // a modern title-card video. Captions and timing remain the authored original.
 const film=document.querySelector('#five-outro .outro-film');
 if(film){
   const marker=document.createElement('div');marker.className='vhs-rec-indicator';marker.setAttribute('aria-hidden','true');
   marker.textContent='●  PLAY  ▸  SP';
   film.append(marker);
 }
})();
