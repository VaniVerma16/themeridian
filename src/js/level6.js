/* The Meridian — Level 6 developer preview.
   Replace each [ARTICLE PLACEHOLDER ...] paragraph with the author's
   finished "A Life in Three Acts" article.
   Prototype correction tokens use [[misspelling|correct spelling]].
   The count adapts to the tokens inserted into the final article. */
(function(){
'use strict';
if(!developerPreview)return;
const article=[
 {act:'ACT I — BEFORE', paragraphs:[
   '[ARTICLE PLACEHOLDER: the author will write Adam’s school years and debate coverage.]',
   'The school report described Adam as a [[promissing|promising]] speaker. He made quite an [[impressionn|impression]] on the reporter.'
 ]},
 {act:'ACT II — AN ORDINARY LIFE', paragraphs:[
   '[ARTICLE PLACEHOLDER: the author will write Adam’s adult life and September 1996 engagement.]',
   'The announcement suggested a new [[begining|beginning]]. The newsroom saved even the most [[ordinery|ordinary]] details.'
 ]},
 {act:'ACT III — THE END', paragraphs:[
   '[ARTICLE PLACEHOLDER: the author will write the February 1997 death and unresolved inquest.]',
   'The body was discovered on 21 February 1997 by the eastern canal towpath. The circumstances remain [[uncertainn|uncertain]].'
 ]}
];
const count=article.reduce((n,act)=>n+act.paragraphs.reduce((v,p)=>v+[...p.matchAll(/\[\[([^\]|]+)\|([^\]]+)\]\]/g)].length,0),0);
const storageKey='meridian-six-proof-v1',completed=new Set();
try{const saved=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(saved))saved.filter(Number.isInteger).forEach(x=>{if(x>=0&&x<count)completed.add(x)});}catch(e){}
const pane=document.getElementById('six-article'),feedback=document.getElementById('six-feedback'),meter=document.getElementById('six-meter-fill');
const score=document.getElementById('six-score');let running=false,audioContext=null;
document.getElementById('six-dev-open').hidden=false;
document.getElementById('six-goal').textContent=String(count);
function save(){try{localStorage.setItem(storageKey,JSON.stringify([...completed]));}catch(e){}}
function update(){
 score.textContent=String(completed.size);meter.style.width=(count?completed.size/count*100:0)+'%';
 feedback.textContent=completed.size===count?'Proof verified. Thank you.':(count-completed.size)+' correction'+(count-completed.size===1?'':'s')+' remaining.';
 document.getElementById('six-reset').hidden=completed.size===0;
}
function render(){
 pane.replaceChildren();let index=0;
 for(const act of article){
   const div=document.createElement('section');div.className='six-act';
   const heading=document.createElement('h3');heading.textContent=act.act;div.append(heading);
   for(const source of act.paragraphs){
     const p=document.createElement('p');if(source.startsWith('[ARTICLE PLACEHOLDER'))p.className='six-placeholder';
     let pos=0;
     for(const match of source.matchAll(/\[\[([^\]|]+)\|([^\]]+)\]\]/g)){
       p.append(document.createTextNode(source.slice(pos,match.index)));
       const i=index++,wrong=match[1],correct=match[2],btn=document.createElement('button');
       btn.type='button';btn.className='six-err';btn.textContent=completed.has(i)?correct:wrong;
       btn.disabled=completed.has(i);if(btn.disabled)btn.classList.add('fixed');
       btn.setAttribute('aria-label',btn.disabled?'Corrected to '+correct:'Correct '+wrong);
       btn.addEventListener('click',()=>{
         if(running||completed.has(i))return;
         completed.add(i);btn.textContent=correct;btn.disabled=true;btn.classList.add('fixed');
         btn.setAttribute('aria-label','Corrected to '+correct);update();save();
         if(completed.size===count&&count>0){
           // Unlock the sound system inside this click gesture.
           prepareAudio();
           setTimeout(()=>{if(!sections.six.hidden)breach()},1250);
         }
       });
       p.append(btn);pos=match.index+match[0].length;
     }
     p.append(document.createTextNode(source.slice(pos)));div.append(p);
   }
   pane.append(div);
 }
 update();
}
function prepareAudio(){
 const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
 try{audioContext=audioContext||new C();if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});}catch(e){}
}
function scareSound(){
 prepareAudio();const ctx=audioContext;
 if(!ctx||ctx.state!=='running')return;
 try{
  const now=ctx.currentTime,lim=ctx.createDynamicsCompressor(),out=ctx.createGain();
  lim.threshold.value=-17;lim.ratio.value=12;lim.connect(ctx.destination);out.connect(lim);
  out.gain.setValueAtTime(.0001,now);out.gain.linearRampToValueAtTime(.20,now+.025);
  out.gain.exponentialRampToValueAtTime(.0001,now+1.8);
  const buf=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*1.8),ctx.sampleRate),d=buf.getChannelData(0);
  for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.exp(-2.2*i/ctx.sampleRate);
  const staticNoise=ctx.createBufferSource(),filter=ctx.createBiquadFilter();
  filter.type='highpass';filter.frequency.value=230;staticNoise.buffer=buf;
  staticNoise.connect(filter);filter.connect(out);staticNoise.start(now);staticNoise.stop(now+1.79);
  [55,82.41,116.54].forEach(freq=>{
   const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type='sawtooth';
   osc.frequency.setValueAtTime(freq*1.4,now);
   osc.frequency.exponentialRampToValueAtTime(freq*.7,now+1.7);
   gain.gain.value=.10;osc.connect(gain);gain.connect(out);osc.start(now);osc.stop(now+1.78);
  });
 }catch(e){console.warn('Level 6 sting unavailable',e);}
}
function breach(){
 if(!developerPreview||running)return;
 running=true;
 if(window.MeridianDesktop){
  scareSound();
  show('sixAfter');
  window.MeridianDesktop.fault('breach');
  setTimeout(()=>{running=false},1600);
  return;
 }
 const root=document.getElementById('six-breach'),cry=document.getElementById('six-cry'),lines=document.getElementById('six-lines');
 root.hidden=false;cry.hidden=false;lines.hidden=true;scareSound();
 setTimeout(()=>{cry.hidden=true;lines.hidden=false},830);
 setTimeout(()=>{root.hidden=true;lines.hidden=true;running=false;show('sixAfter')},4100);
}
document.getElementById('six-reset').addEventListener('click',()=>{completed.clear();save();render()});
document.getElementById('six-dev-open').addEventListener('click',()=>show('six'));
document.getElementById('six-back').addEventListener('click',()=>show('six',false));
render();
window.MeridianSix={breach,reset(){completed.clear();save();render()}};
})();