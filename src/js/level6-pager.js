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
 const intro=document.querySelector('#read-six .six-editor-intro');
 const start=document.getElementById('six-start');
 const prev=document.getElementById('six-prev');
 const next=document.getElementById('six-next');
 const counter=document.getElementById('six-page-counter');
 const pageState=document.getElementById('six-page-state');
 const chapter=document.getElementById('six-reading-chapter');
 if(!root||!host||!workspace||!intro||!start||!prev||!next)return;
 const KEY='meridian-six-pager-v3';
 const actNames=['ACT I — THE PROMISE','ACT II — THE FALL AND THE RETURN','ACT III — THE UNFINISHED'];
 let active=0,started=false,pages=[];
 try{
   const saved=JSON.parse(localStorage.getItem(KEY)||'null');
   if(saved && saved.version===3){
     started=saved.started===true;
     if(Number.isInteger(saved.active))active=Math.min(6,Math.max(0,saved.active));
   }
 }catch(e){/* storage is optional */}
 function persist(){
   try{localStorage.setItem(KEY,JSON.stringify({version:3,active,started}));}catch(e){}
 }
 function snapshot(){
   return window.MeridianSix?.snapshot?.()||{assessment:{count:0},decisions:{},ending:null};
 }
 function scrollArticle(){
   try{root.scrollIntoView({behavior:'instant',block:'start'});}catch(e){window.scrollTo(0,0);}
 }
 function sync(){
   // The intro is a separate navigable section, not a panel inside Level 6.
   // Do not hide its content when a saved playthrough is resumed.
   workspace.hidden=!started;
   const scene=snapshot();
   const now=pages[active];
   if(started&&!now){started=false;workspace.hidden=true;}
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
   // Navigation is immediate. The three-act bar gives the context without
   // inventing clues or interrupting the player's reading.
   active=index;persist();sync();scrollArticle();
 }
 function clearPager(){
   active=0;started=false;
   try{localStorage.removeItem(KEY);}catch(e){}
   sync();
 }
 start.addEventListener('click',()=>{
   started=true;persist();sync();
   show('six');
   scrollArticle();
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
   queueMicrotask(sync);
 });
 document.getElementById('six-reset').addEventListener('click',clearPager);
 // The ending Retry action is owned by level6.js so it can also navigate
 // to the dedicated introduction after resetting the editorial draft.
 window.MeridianLevel6Pager={onRender,goTo:navigate,reset:clearPager,
   ensureStarted:()=>{if(started)return;started=true;persist();sync();},
   status:()=>({active,started,pages:pages.length})};
 onRender();
})();