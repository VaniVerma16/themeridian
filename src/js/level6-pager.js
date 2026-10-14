/* The Meridian / Level 6 — progressive restored-proof reader.
 * This controller moves the seven existing, fully functional editorial
 * questions into separate pages. Scoring and ending logic stay in level6.js.
 */
(function(){
 'use strict';
 if(typeof developerPreview==='undefined'||!developerPreview)return;
 const root=document.getElementById('level-six');
 const host=document.getElementById('six-article');
 const workspace=document.getElementById('six-workspace');
 const intro=root?.querySelector('.six-editor-intro');
 const start=document.getElementById('six-start');
 const prev=document.getElementById('six-prev');
 const next=document.getElementById('six-next');
 const counter=document.getElementById('six-page-counter');
 const pageState=document.getElementById('six-page-state');
 const chapter=document.getElementById('six-reading-chapter');
 const signal=document.getElementById('six-signal');
 const signalText=document.getElementById('six-signal-message');
 const actScreen=document.getElementById('six-act-interrupt');
 const actLabel=document.getElementById('six-act-interrupt-label');
 const actMessage=document.getElementById('six-act-interrupt-message');
 if(!root||!host||!workspace||!intro||!start||!prev||!next)return;
 const KEY='meridian-six-pager-v1';
 const actNames=['ACT I — THE PROMISE','ACT II — THE FALL AND THE RETURN','ACT III — THE UNFINISHED'];
 const intrusion=[
  'ANOTHER NAME WAS HERE.',
  'THEY REMEMBER IT DIFFERENTLY.',
  'DID YOU ASK HER?',
  'SHE NEVER FORGAVE HIM.',
  'SHE ONLY KNEW THIS VERSION.',
  'THERE IS BLOOD ON THIS PAGE.',
  'YOU ARE NOT THE AUTHOR.'
 ];
 let active=0,started=false,pages=[],timer=null,actTimer=null;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 try{
   const saved=JSON.parse(localStorage.getItem(KEY)||'null');
   if(saved && saved.version===1){
     started=saved.started===true;
     if(Number.isInteger(saved.active))active=Math.min(6,Math.max(0,saved.active));
   }
 }catch(e){/* storage is optional */}
 function persist(){
   try{localStorage.setItem(KEY,JSON.stringify({version:1,active,started}));}catch(e){}
 }
 function stopVisuals(){
   if(timer!==null){clearTimeout(timer);timer=null;}
   if(actTimer!==null){clearTimeout(actTimer);actTimer=null;}
   signal.hidden=true;actScreen.hidden=true;
 }
 function snapshot(){
   return window.MeridianSix?.snapshot?.()||{assessment:{count:0},decisions:{},ending:null};
 }
 function scrollArticle(){
   try{root.scrollIntoView({behavior:'instant',block:'start'});}catch(e){window.scrollTo(0,0);}
 }
 function indicate(type,index){
   if(reduced||!started)return;
   if(timer!==null)clearTimeout(timer);
   signalText.textContent=intrusion[index]||'THE RECORD WAS CHANGED.';
   signal.dataset.intensity=type;
   signal.hidden=false;
   root.classList.remove('six-flicker');
   void root.offsetWidth;
   root.classList.add('six-flicker');
   timer=setTimeout(()=>{
     signal.hidden=true;root.classList.remove('six-flicker');timer=null;
   },type==='severe'?1200:680);
 }
 function actInterruption(target){
   if(reduced||target===1)return;
   if(actTimer!==null)clearTimeout(actTimer);
   actLabel.textContent=actNames[target-1];
   actMessage.textContent=target===2?
     'HE DID NOT WANT YOU TO READ THIS.' :
     'THERE WAS SUPPOSED TO BE MORE.';
   actScreen.dataset.act=String(target);
   actScreen.hidden=false;
   actTimer=setTimeout(()=>{actScreen.hidden=true;actTimer=null;},1450);
 }
 function sync(){
   intro.hidden=started;
   workspace.hidden=!started;
   const scene=snapshot();
   const now=pages[active];
   if(started&&!now){started=false;workspace.hidden=true;intro.hidden=false;}
   pages.forEach((page,i)=>{
     page.hidden=!started||i!==active;
     page.setAttribute('aria-hidden',String(!started||i!==active));
   });
   if(!started)return;
   const act=Number(now.dataset.act)||1;
   chapter.textContent=actNames[act-1];
   counter.textContent='DOCUMENT '+String(active+1).padStart(2,'0')+' / 07';
   pageState.textContent=(active+1)+' OF 7';
   prev.disabled=active===0;
   const currentId=now.dataset.question;
   const hasAnswer=Number.isInteger(scene.decisions[currentId]);
   next.disabled=!hasAnswer || (active===6 && scene.assessment.count!==7);
   next.textContent=active===6?'SUBMIT FINAL PROOF →':'NEXT RECORD →';
   root.dataset.currentAct=String(act);
   root.dataset.page=String(active+1);
   root.dataset.horror=String(Math.max(active,scene.assessment.count));
   document.querySelectorAll('#level-six [data-six-act]').forEach(item=>{
     const rank=Number(item.dataset.sixAct);
     item.classList.toggle('is-current',rank===act);
     item.classList.toggle('is-past',rank<act);
   });
 }
 function onRender(){
   const acts=[...host.children].filter(el=>el.classList.contains('six-act'));
   // When the original renderer restarts, reconstruct the same seven pages
   // and move the original DOM nodes: all their button listeners survive.
   if(acts.length){
     const built=[];
     for(const section of acts){
       const actNumber=Number(section.dataset.act)||1;
       const heading=section.querySelector('h3');
       let prose=[];
       for(const node of [...section.children].slice(1)){
         if(node.classList.contains('six-decision')){
           const page=document.createElement('section');
           page.className='six-editor-page';
           page.dataset.act=String(actNumber);
           page.dataset.question=node.id.replace('six-decision-','');
           if(heading)page.append(heading.cloneNode(true));
           page.append(...prose,node);
           prose=[];
           built.push(page);
         }else prose.push(node);
       }
       if(prose.length && built.length)built[built.length-1].append(...prose);
     }
     if(built.length===7){
       host.replaceChildren(...built);
       pages=built;
     }
   }else{
     pages=[...host.children].filter(el=>el.classList.contains('six-editor-page'));
   }
   if(pages.length!==7)return;
   const state=snapshot();
   if(state.ending==='erasure'){
     started=false;active=0;
     try{localStorage.removeItem(KEY);}catch(e){}
   }else{
     active=Math.min(6,Math.max(0,active));
   }
   sync();
 }
 function navigate(index){
   if(!started||index<0||index>=7)return;
   const data=snapshot();
   if(index>active && !Number.isInteger(data.decisions[pages[active].dataset.question]))return;
   const from=Number(pages[active].dataset.act);
   active=index;persist();sync();scrollArticle();
   const target=Number(pages[index].dataset.act);
   if(from!==target)actInterruption(target);
   else if(index>=3)indicate(index>=5?'severe':'minor',index);
 }
 function clearPager(){
   stopVisuals();
   active=0;started=false;
   try{localStorage.removeItem(KEY);}catch(e){}
   sync();
 }
 start.addEventListener('click',()=>{
   started=true;persist();sync();scrollArticle();
   indicate('minor',0);
 });
 prev.addEventListener('click',()=>navigate(active-1));
 next.addEventListener('click',()=>{
   if(next.disabled)return;
   if(active===6){
     document.getElementById('six-submit').click();
   }else navigate(active+1);
 });
 host.addEventListener('click',event=>{
   if(!event.target.closest('.six-decision-commit'))return;
   // This runs after level6.js applies, scores, and saves the chosen option.
   queueMicrotask(()=>{
     sync();
     indicate(active>=5?'severe':'minor',active);
   });
 });
 document.getElementById('six-reset').addEventListener('click',clearPager);
 document.getElementById('six-retry').addEventListener('click',clearPager);
 window.MeridianLevel6Pager={onRender,goTo:navigate,reset:clearPager,
   status:()=>({active,started,pages:pages.length})};
 onRender();
})();