/* THE MERIDIAN · LEVEL 06 DEV PROTOTYPE
 * Life in Three Acts — seven editorial decisions, original article,
 * separate restoration quality and hidden competing narrative influences.
 * No impact on publicly released Levels 1–5 or their saved sessions.
 */
(function(){
 'use strict';
 if(typeof developerPreview==='undefined'||!developerPreview)return;

 const STORAGE_KEY='meridian-six-editorial-v4';
 const VERSION=4;
 const encounters=[
 {
  "id": "broken-confidence",
  "act": 1,
  "number": 1,
  "title": "Would you tell a friend they're being mocked behind their back?",
  "lead": "Sophie trusted Daniel with her family's money troubles. At a college party, Daniel repeated her private story for laughs. Adam overheard.",
  "sourceTitle": "COLLEGE NOTES · 1990",
  "source": "Daniel said it was a stupid joke and begged Adam to keep quiet. Sophie still trusted Daniel. We don't know what Adam told her.",
  "question": "Is sparing someone a painful truth an act of kindness—or another betrayal?",
  "story": [
   "Adam was an unusually gifted college student who fixed broken radios for fun. Daniel was his closest friend, and Sophie trusted them both. Adam never expected their friendship to put him in this position."
  ],
  "options": [
   {
    "label": "Tell Sophie what he said.",
    "detail": "She deserves to know. But hearing the joke might humiliate her twice.",
    "revision": "Daniel repeated a private story about Sophie's family to get a laugh. Telling her would honour her trust, but force her to hear how she had been mocked.",
    "quality": [
     9,
     8,
     8,
     8
    ],
    "axes": {
     "preservation": 4,
     "narrativeControl": 0,
     "compassion": 2,
     "erasure": 0,
     "independence": 2
    }
   },
   {
    "label": "Make Daniel apologise himself.",
    "detail": "He should take responsibility. But he might downplay what happened.",
    "revision": "Adam could have demanded that Daniel confess and apologise. That would give Daniel a chance to repair the harm, or to control how much Sophie learned.",
    "quality": [
     8,
     8,
     8,
     7
    ],
    "axes": {
     "preservation": 1,
     "narrativeControl": 2,
     "compassion": 3,
     "erasure": 0,
     "independence": 2
    }
   },
   {
    "label": "Don't tell Sophie.",
    "detail": "Spare her the embarrassment, but leave her trusting someone who betrayed her.",
    "revision": "Adam could have protected Sophie from the humiliating details. Silence would also leave her trusting a friend who had shared her private pain for laughs.",
    "quality": [
     6,
     8,
     7,
     5
    ],
    "axes": {
     "preservation": 0,
     "narrativeControl": 2,
     "compassion": 1,
     "erasure": 3,
     "independence": 1
    }
   }
  ],
  "reaction": null
 },
 {
  "id": "departure",
  "act": 1,
  "number": 2,
  "title": "Do you owe someone the future you promised them?",
  "lead": "Adam promised to return home after college. His mother helped pay for his degree and needs him. Then a dream job abroad arrives.",
  "sourceTitle": "COLLEGE NOTES · 1990–1991",
  "source": "His mother's letter refers to his promise; the job offer requires him to leave within a month.",
  "question": "How much of your future belongs to someone who sacrificed for it?",
  "story": [
   "At graduation, the life Adam wanted and the life he'd promised his mother stopped pointing in the same direction."
  ],
  "options": [
   {
    "label": "Take the job.",
    "detail": "He shouldn't have to give up his future because he made a promise.",
    "revision": "The opportunity Adam had earned came at the cost of his commitment to his mother.",
    "quality": [
     8,
     9,
     6,
     7
    ],
    "axes": {
     "preservation": 1,
     "narrativeControl": 4,
     "compassion": 0,
     "erasure": 0,
     "independence": 3
    }
   },
   {
    "label": "Go home.",
    "detail": "She sacrificed for him. Keeping his word matters.",
    "revision": "Returning would honour his promise but might mean losing the career she helped him build.",
    "quality": [
     8,
     7,
     9,
     7
    ],
    "axes": {
     "preservation": 2,
     "narrativeControl": 0,
     "compassion": 4,
     "erasure": 0,
     "independence": 0
    }
   },
   {
    "label": "Go, but send money home.",
    "detail": "Financial help isn't the same as being there.",
    "revision": "Support from abroad could honour part of Adam's promise. Whether it was what his mother needed is unknown.",
    "quality": [
     8,
     8,
     7,
     7
    ],
    "axes": {
     "preservation": 1,
     "narrativeControl": 2,
     "compassion": 2,
     "erasure": 1,
     "independence": 2
    }
   }
  ],
  "reaction": [
   "So we're calling that ambition?",
   "That's sweet. I expected a different ending to his college years.",
   "A tidy compromise. People do like those."
  ]
 },
 {
  "id": "breakup",
  "act": 2,
  "number": 3,
  "title": "Are you responsible for what happens after you leave someone?",
  "lead": "Leah leaves Adam. He's devastated and later develops alcohol dependence. Was leaving him wrong?",
  "sourceTitle": "PRIVATE CORRESPONDENCE · 1992–1995",
  "source": "Leah wrote that she still cared but no longer wanted the relationship. His drinking worsened afterward.",
  "question": "Can leaving be right even when someone falls apart?",
  "story": [
   "Leah wanted another life. Staying out of pity would have meant lying. Adam withdrew from work and friends after she left."
  ],
  "options": [
   {
    "label": "She had every right to leave.",
    "detail": "Adam's subsequent suffering wasn't her responsibility.",
    "revision": "Leah chose to leave. Adam's later dependence cannot be treated as a moral debt she owed him.",
    "quality": [
     9,
     8,
     8,
     8
    ],
    "axes": {
     "preservation": 2,
     "narrativeControl": 1,
     "compassion": 2,
     "erasure": 0,
     "independence": 3
    }
   },
   {
    "label": "She owed him more care.",
    "detail": "The right to leave doesn't mean how you do it can't hurt.",
    "revision": "Leah was free to end the relationship. Whether she could have done so more gently is uncertain.",
    "quality": [
     8,
     9,
     8,
     7
    ],
    "axes": {
     "preservation": 2,
     "narrativeControl": 2,
     "compassion": 3,
     "erasure": 0,
     "independence": 1
    }
   },
   {
    "label": "Leave Leah out of the article.",
    "detail": "Readers could unfairly blame her for his illness.",
    "revision": "The article describes Adam's difficult years without naming the breakup that came first.",
    "quality": [
     6,
     8,
     9,
     6
    ],
    "axes": {
     "preservation": 0,
     "narrativeControl": 1,
     "compassion": 3,
     "erasure": 3,
     "independence": 1
    }
   }
  ],
  "reaction": null
 },
 {
  "id": "dependence",
  "act": 2,
  "number": 4,
  "title": "Can someone be both a victim and a villain?",
  "lead": "During alcohol dependence, Adam spends money Ruth needed for housing. He's unwell; she loses her deposit.",
  "sourceTitle": "PRIVATE CORRESPONDENCE · 1992–1995",
  "source": "Adam admitted using Ruth's money on alcohol. Her lost housing deposit is documented.",
  "question": "Does understanding his illness change his responsibility?",
  "story": [
   "Adam missed work and broke promises while struggling to stop drinking. Ruth still needed somewhere to live."
  ],
  "options": [
   {
    "label": "Focus on Ruth's suffering.",
    "detail": "Adam's illness doesn't erase what he did.",
    "revision": "Adam took money Ruth needed for housing. His dependence mattered, but she lived with the consequences.",
    "quality": [
     9,
     8,
     7,
     9
    ],
    "axes": {
     "preservation": 4,
     "narrativeControl": 0,
     "compassion": 2,
     "erasure": 0,
     "independence": 1
    }
   },
   {
    "label": "Focus on Adam's illness.",
    "detail": "Without context, readers may see only cruelty.",
    "revision": "During alcohol dependence Adam broke promises, including one that cost Ruth her deposit. Both parts of the story remain.",
    "quality": [
     9,
     9,
     9,
     8
    ],
    "axes": {
     "preservation": 1,
     "narrativeControl": 3,
     "compassion": 3,
     "erasure": 0,
     "independence": 1
    }
   },
   {
    "label": "Keep the family incident private.",
    "detail": "Why publish the worst thing from his worst year?",
    "revision": "The article notes family tensions but withholds Ruth's specific loss.",
    "quality": [
     6,
     8,
     8,
     5
    ],
    "axes": {
     "preservation": 0,
     "narrativeControl": 1,
     "compassion": 2,
     "erasure": 4,
     "independence": 0
    }
   }
  ],
  "reaction": [
   "You want them to remember that?",
   "Yes. I think they'll understand him better.",
   "Some things might be better left alone."
  ]
 },
 {
  "id": "apology",
  "act": 2,
  "number": 5,
  "title": "Can you redeem yourself without being forgiven?",
  "lead": "Adam enters recovery, repays Ruth and apologises. She believes he's sincere but refuses to see him.",
  "sourceTitle": "PRIVATE CORRESPONDENCE · 1992–1995",
  "source": "Adam's letter admits what he did. Ruth's reply accepts his remorse but not renewed contact.",
  "question": "Does changing entitle anyone to a second chance?",
  "story": [
   "Recovery meant work, meetings, and keeping promises. Ruth still had every right not to welcome him back."
  ],
  "options": [
   {
    "label": "He earned a second chance.",
    "detail": "His change should count, even if forgiveness never comes.",
    "revision": "Adam made amends and worked toward recovery. Ruth's refusal remained, but so did his efforts.",
    "quality": [
     8,
     9,
     8,
     7
    ],
    "axes": {
     "preservation": 1,
     "narrativeControl": 4,
     "compassion": 2,
     "erasure": 0,
     "independence": 1
    }
   },
   {
    "label": "Ruth gets the final say.",
    "detail": "Remorse doesn't entitle someone to forgiveness.",
    "revision": "Adam repaid what he could. Ruth declined contact, and her refusal must not become a triumph in his story.",
    "quality": [
     9,
     7,
     9,
     8
    ],
    "axes": {
     "preservation": 3,
     "narrativeControl": 0,
     "compassion": 4,
     "erasure": 0,
     "independence": 1
    }
   },
   {
    "label": "Both can be true.",
    "detail": "He changed; she can still refuse him.",
    "revision": "Adam's recovery and Ruth's refusal were both real. Neither alone proves or disproves redemption.",
    "quality": [
     8,
     7,
     8,
     9
    ],
    "axes": {
     "preservation": 2,
     "narrativeControl": 0,
     "compassion": 3,
     "erasure": 0,
     "independence": 4
    }
   }
  ],
  "reaction": null
 },
 {
  "id": "secret",
  "act": 3,
  "number": 6,
  "title": "Does your partner deserve to know the worst thing you've done?",
  "lead": "Nora knows about Adam's alcoholism, but not exactly what happened to Ruth. They're engaged; he drafts a letter to tell her.",
  "sourceTitle": "RECOVERED FILES · 1996–1997",
  "source": "An unfinished letter describes the money Adam took. No record proves Nora ever saw it.",
  "question": "Is concealing your past a second betrayal—or a right to begin again?",
  "story": [
   "Nora loved Adam's terrible cooking and his crooked jokes. His recovery was his own work; she didn't rescue him."
  ],
  "options": [
   {
    "label": "Tell Nora before the wedding.",
    "detail": "She deserves to choose knowing the truth.",
    "revision": "Adam considered telling Nora exactly what he'd done to Ruth. Whether he told her remains unknown.",
    "quality": [
     9,
     8,
     8,
     8
    ],
    "axes": {
     "preservation": 3,
     "narrativeControl": 0,
     "compassion": 2,
     "erasure": 0,
     "independence": 3
    }
   },
   {
    "label": "Wait until he's ready.",
    "detail": "Telling her badly could hurt her more.",
    "revision": "The unfinished draft suggests a struggle over when to speak. Delay might have been kindness—or fear.",
    "quality": [
     8,
     9,
     8,
     7
    ],
    "axes": {
     "preservation": 1,
     "narrativeControl": 3,
     "compassion": 3,
     "erasure": 0,
     "independence": 1
    }
   },
   {
    "label": "Leave the past behind.",
    "detail": "He changed. Must she inherit his worst years?",
    "revision": "Nora didn't necessarily know every detail of Adam's earlier harm. Whether that was privacy or concealment is unresolved.",
    "quality": [
     7,
     8,
     8,
     6
    ],
    "axes": {
     "preservation": 0,
     "narrativeControl": 3,
     "compassion": 1,
     "erasure": 3,
     "independence": 0
    }
   }
  ],
  "reaction": [
   "Right. Of course she deserves to know. Even now.",
   "Some things take time to explain, I suppose.",
   "He was finally happy. Doesn't that count?"
  ]
 },
 {
  "id": "ruth-account",
  "act": 3,
  "number": 7,
  "title": "Should Ruth's account be included in the article?",
  "lead": "Adam dies at twenty-seven. Nora remembers a loving fiancé; Ruth remembers the brother who broke her trust. Both agree to be interviewed.",
  "sourceTitle": "RECOVERED FILES · 1996–1997",
  "source": "The cause was a fatal head injury; the circumstances were unresolved. Nora and Ruth offer different, sincere memories.",
  "question": "Should he be remembered for who he became—or who he once was?",
  "story": [
   "They had been looking at houses. A note on Nora's wall still said 'please buy milk'. And then he was gone."
  ],
  "options": [
   {
    "label": "Publish both accounts.",
    "detail": "Ruth deserves to be heard, even if the truth hurts Nora.",
    "revision": "Nora described devotion; Ruth described broken trust. The article preserves both accounts.",
    "quality": [
     9,
     8,
     8,
     9
    ],
    "axes": {
     "preservation": 4,
     "narrativeControl": 0,
     "compassion": 2,
     "erasure": 0,
     "independence": 3
    }
   },
   {
    "label": "Publish Nora's account only.",
    "detail": "Why should Adam's worst years define him after death?",
    "revision": "The article remembers the partner Nora loved. Ruth's account is omitted.",
    "quality": [
     7,
     10,
     7,
     5
    ],
    "axes": {
     "preservation": 0,
     "narrativeControl": 4,
     "compassion": 2,
     "erasure": 3,
     "independence": 0
    }
   },
   {
    "label": "Include Ruth anonymously.",
    "detail": "She deserves a voice, but anonymity strips away context.",
    "revision": "An unnamed relative recalls Adam's earlier harm. Ruth's testimony survives without the context of her name.",
    "quality": [
     8,
     7,
     9,
     7
    ],
    "axes": {
     "preservation": 2,
     "narrativeControl": 0,
     "compassion": 4,
     "erasure": 1,
     "independence": 1
    }
   }
  ],
  "reaction": null
 }
];
 const acts=[
 {
  "number": 1,
  "label": "ACT I — THE PROMISE",
  "date": "1988–1991",
  "opening": "Adam arrived at college with an exceptional mind, a broken radio and no idea what adulthood would cost him.",
  "closing": "Talent gave him choices. It didn't make them easy."
 },
 {
  "number": 2,
  "label": "ACT II — THE FALL AND THE RETURN",
  "date": "1992–1995",
  "opening": "Heartbreak changed Adam's life. What followed was harder to explain.",
  "closing": "Slowly, imperfectly, he began to recover."
 },
 {
  "number": 3,
  "label": "ACT III — THE UNFINISHED",
  "date": "1996–1997",
  "opening": "The last act began with love, an engagement and ordinary plans that never came true.",
  "closing": "Death ended his plans. It did not settle who he had been."
 }
];

 const sourcePane=document.getElementById('six-article');
 const scoreEl=document.getElementById('six-score');
 const meter=document.getElementById('six-meter-fill');
 const progress=document.getElementById('six-decision-status');
 const feedback=document.getElementById('six-feedback');
 const submitButton=document.getElementById('six-submit');
 const resetButton=document.getElementById('six-reset');
 const curtain=document.getElementById('six-blood-curtain');
 const breachRoot=document.getElementById('six-breach');
 const breachCry=document.getElementById('six-cry');
 const breachLines=document.getElementById('six-lines');
 const endingSection=document.getElementById('sixAfter');
 const endTitle=document.getElementById('six-after-title');
 let saved=Object.create(null);
 let transitionComplete=false;
 let inTransition=false;
 let soundCtx=null;
 let timers=[];

 function readSaved(){
  try{
   const obj=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
   if(!obj||obj.version!==VERSION||!obj.decisions)return;
   for(const encounter of encounters){
    const n=obj.decisions[encounter.id];
    if(Number.isInteger(n)&&n>=0&&n<encounter.options.length)saved[encounter.id]=n;
   }
  }catch(e){/* Optional storage failure must not break the game. */}
 }
 function save(){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify({
    version:VERSION,decisions:saved,updatedAt:new Date().toISOString()
  }));}catch(e){}
 }
 function wipeTrial(){
  saved=Object.create(null);
  try{localStorage.removeItem(STORAGE_KEY);}catch(e){}
  clearCampaignLevel();
 }
 function text(tag,content,className){
  const el=document.createElement(tag);
  if(className)el.className=className;
  el.textContent=content;
  return el;
 }
 function qualityResult(){
  const dimensions={accuracy:0,clarity:0,care:0,accountability:0};
  const parameters={preservation:0,narrativeControl:0,compassion:0,erasure:0,independence:0};
  let count=0;
  for(const item of encounters){
   const i=saved[item.id];
   if(!Number.isInteger(i))continue;
   const opt=item.options[i];
   ['accuracy','clarity','care','accountability'].forEach((key,j)=>{dimensions[key]+=opt.quality[j];});
   Object.keys(parameters).forEach(key=>{parameters[key]+=opt.axes[key]||0;});
   count++;
  }
  const weighted=.35*dimensions.accuracy+.25*dimensions.clarity+.20*dimensions.care+.20*dimensions.accountability;
  return {count,dimensions,parameters,score:Math.min(100,Math.round(weighted*10/encounters.length))};
 }
 function storeCampaignState(completed=false){
  // Choices from all levels 6–10 belong to independent entries; no winner
  // is calculated until Level 10.
  try{
   const key='the-meridian-moral-choices-v1';
   const data=JSON.parse(localStorage.getItem(key)||'{}');
   if(!data||typeof data!=='object'||Array.isArray(data))return;
   if(!data.levels||typeof data.levels!=='object'||Array.isArray(data.levels))data.levels={};
   const result=qualityResult(),previous=data.levels['6'];
   data.version=1;
   data.levels['6']={
    version:4,decisions:{...saved},parameters:{...result.parameters},
    editorialScore:result.score,
    completed:completed||(previous?.completed===true&&result.count===7),
    updatedAt:new Date().toISOString()
   };
   localStorage.setItem(key,JSON.stringify(data));
  }catch(e){}
 }
 function clearCampaignLevel(){
  try{
   const key='the-meridian-moral-choices-v1';
   const data=JSON.parse(localStorage.getItem(key)||'{}');
   if(data?.levels?.['6']){
    delete data.levels['6'];localStorage.setItem(key,JSON.stringify(data));
   }
  }catch(e){}
 }
 function render(){
  sourcePane.replaceChildren();
  for(const act of acts){
   const section=document.createElement('section');
   section.className='six-act';
   section.dataset.act=String(act.number);
   const heading=text('h3',act.label+' / '+act.date);
   section.append(heading,text('p',act.opening));
   for(const encounter of encounters.filter(x=>x.act===act.number)){
    for(const paragraph of encounter.story)section.append(text('p',paragraph));
    const card=document.createElement('section');
    card.className='six-decision';
    card.id='six-decision-'+encounter.id;
    card.setAttribute('aria-labelledby','six-heading-'+encounter.id);
    const top=document.createElement('div');top.className='six-decision-head';
    top.append(text('span','EDITORIAL QUERY '+String(encounter.number).padStart(2,'0')+' / 07'));
    top.append(text('span',Number.isInteger(saved[encounter.id])?'REVISION RECORDED':'AWAITING DECISION','six-decision-state'));
    const inner=document.createElement('div');inner.className='six-decision-body';
    const title=text('h4',encounter.title);
    title.id='six-heading-'+encounter.id;
    inner.append(title,text('p',encounter.lead));
    const note=document.createElement('aside');
    note.className='six-source';
    note.append(text('b',encounter.sourceTitle),text('p',encounter.source));
    inner.append(note);
    const fieldset=document.createElement('fieldset');
    fieldset.className='six-options';
    fieldset.setAttribute('aria-label','Editorial treatment for '+encounter.title);
    fieldset.style.border='0';fieldset.style.padding='0';fieldset.style.minWidth='0';
    const selected=saved[encounter.id];
    const groupName='six-choice-'+encounter.id;
    encounter.options.forEach((opt,idx)=>{
     const label=document.createElement('label');label.className='six-option';
     const radio=document.createElement('input');radio.type='radio';radio.name=groupName;radio.value=String(idx);
     radio.checked=idx===selected;
     const words=document.createElement('span');
     words.append(text('strong',String.fromCharCode(65+idx)+' — '+opt.label),text('em',opt.detail));
     label.append(radio,words);fieldset.append(label);
    });
    const apply=document.createElement('button');apply.type='button';
    apply.className='six-decision-commit';
    apply.textContent=Number.isInteger(selected)?'Update this revision':'Apply editorial revision';
    const status=text('p','','six-commit-feedback');
    status.setAttribute('role','status');
    const revised=document.createElement('div');revised.className='six-result-edit';
    revised.hidden=!Number.isInteger(selected);
    const revisedText=text('p',Number.isInteger(selected)?encounter.options[selected].revision:'');
    revised.append(text('small','CURRENT RESTORED PASSAGE'),revisedText);
    const editorNote=document.createElement('aside');editorNote.className='six-editor-reaction';
    const editorText=text('p','');
    editorNote.append(text('small','A NOTE FROM YOUR EDITOR'),editorText);
    const showEditorNote=choice=>{
      const line=encounter.reaction?.[choice];
      editorNote.hidden=!line;
      editorText.textContent=line||'';
    };
    showEditorNote(selected);
    apply.addEventListener('click',()=>{
      if(inTransition)return;
      const current=fieldset.querySelector('input:checked');
      if(!current){status.textContent='Select an editorial treatment before applying it.';return;}
      const index=Number(current.value);
      saved[encounter.id]=index;
      save();
      storeCampaignState(false);
      showEditorNote(index);
      revisedText.textContent=encounter.options[index].revision;
      revised.hidden=false;
      card.classList.add('is-complete');
      top.querySelector('.six-decision-state').textContent='REVISION RECORDED';
      apply.textContent='Update this revision';
      status.textContent='Change recorded. You can revise it before submission.';
      update();
    });
    inner.append(fieldset,apply,status,revised,editorNote);
    card.append(top,inner);
    if(Number.isInteger(selected))card.classList.add('is-complete');
    section.append(card);
   }
   section.append(text('p',act.closing));
   sourcePane.append(section);
  }
  update();
  // The paginated Level 6 controller re-organises existing editorial cards
  // without replacing their choice listeners or scoring logic.
  window.MeridianLevel6Pager?.onRender();
 }
 function update(){
  const state=qualityResult();
  scoreEl.textContent=String(state.score);
  meter.style.width=state.score+'%';
  meter.parentElement.setAttribute('aria-valuenow',String(state.score));
  progress.textContent=state.count+' / 7 passages reviewed';
  const left=encounters.length-state.count;
  feedback.textContent=left?
   left+' editorial decision'+(left===1?'':'s')+' remaining.' :
   'All seven passages reviewed. Submit the restored article to continue.';
  submitButton.disabled=left>0||inTransition;
  resetButton.hidden=state.count===0;
  document.getElementById('level-six').dataset.corruption=String(state.count);
 }

 function displayHandoff(result){
  // Preserve the user's chosen transition. Level 6 never assigns a winner.
  endingSection.dataset.ending='pending';
  document.getElementById('six-ending-kicker').textContent='FILE 06 / ARCHIVE INTERRUPTED';
  endTitle.textContent='Find the Missing File';
  document.getElementById('six-ending-summary').textContent='Your revisions have been recorded. But the recovered article still points to a missing file.';
  document.getElementById('six-ending-echo').textContent='FILE NOT FOUND — The missing-file investigation comes next.';
  document.getElementById('six-ending-question').textContent='No verdict. Not yet.';
  document.getElementById('six-ending-ref').textContent='RECOVERY INCOMPLETE';
  document.getElementById('six-ending-score').textContent=result.score+' / 100';
 }
 function prepareAudio(){
  const C=window.AudioContext||window.webkitAudioContext;
  if(!C)return;
  try{soundCtx=soundCtx||new C();if(soundCtx.state==='suspended')soundCtx.resume().catch(()=>{});}catch(e){}
 }
 function scareSound(){
  prepareAudio();const ctx=soundCtx;
  if(!ctx||ctx.state!=='running')return;
  try{
   const now=ctx.currentTime,compress=ctx.createDynamicsCompressor(),out=ctx.createGain();
   compress.threshold.value=-19;compress.ratio.value=12;compress.connect(ctx.destination);out.connect(compress);
   out.gain.setValueAtTime(.0001,now);
   out.gain.linearRampToValueAtTime(.13,now+.04);
   out.gain.exponentialRampToValueAtTime(.0001,now+1.7);
   const buffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*1.7),ctx.sampleRate),data=buffer.getChannelData(0);
   for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.exp(-2.1*i/ctx.sampleRate);
   const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter();
   filter.type='lowpass';filter.frequency.value=590;src.buffer=buffer;src.connect(filter);filter.connect(out);
   src.start(now);src.stop(now+1.68);
   [43,61,83].forEach(freq=>{
    const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type='sawtooth';
    osc.frequency.setValueAtTime(freq*1.18,now);osc.frequency.exponentialRampToValueAtTime(freq*.67,now+1.65);
    gain.gain.value=.07;osc.connect(gain);gain.connect(out);osc.start(now);osc.stop(now+1.67);
   });
  }catch(e){/* Audio is supplementary; submission must work silently too. */}
 }
 function afterDelay(fn,ms){timers.push(window.setTimeout(fn,ms));}
 function clearTimers(){for(const t of timers)clearTimeout(t);timers=[];}
 function breach(forcedEnding){
  if(inTransition)return;
  inTransition=true;
  const result=qualityResult();
  if(result.count===7)storeCampaignState(true);
  submitButton.disabled=true;
  prepareAudio();
  curtain.hidden=false;
  curtain.setAttribute('aria-hidden','false');
  afterDelay(()=>{
   curtain.hidden=true;curtain.setAttribute('aria-hidden','true');
   breachRoot.hidden=false;breachCry.hidden=false;breachLines.hidden=true;
   scareSound();
  },window.matchMedia('(prefers-reduced-motion: reduce)').matches?650:2450);
  afterDelay(()=>{
   breachCry.hidden=true;breachLines.hidden=false;
  },window.matchMedia('(prefers-reduced-motion: reduce)').matches?1050:3250);
  afterDelay(()=>{
   clearTimers();
   breachRoot.hidden=true;breachCry.hidden=false;breachLines.hidden=true;
   curtain.hidden=true;curtain.setAttribute('aria-hidden','true');
   displayHandoff(result);
    transitionComplete=true;
   inTransition=false;
   update();
   show('sixAfter');
  },window.matchMedia('(prefers-reduced-motion: reduce)').matches?1700:5000);
 }
 function restart(){
  if(inTransition)return;
  clearTimers();
  wipeTrial();transitionComplete=false;
  render();
 }
 submitButton.addEventListener('click',()=>{
  if(inTransition||qualityResult().count!==encounters.length)return;
  breach();
 });
 resetButton.addEventListener('click',restart);
 document.getElementById('six-retry').addEventListener('click',()=>{
  restart();
  window.MeridianLevel6Pager?.reset?.();
  show('readSix',false);
 });
 document.getElementById('six-back').addEventListener('click',()=>{render();show('six',false);});
 document.getElementById('six-dev-open').hidden=false;
 document.getElementById('six-dev-open').addEventListener('click',()=>show('readSix'));
 readSaved();
 render();
 // Dev skip remains meaningful: it previews the Archivist ending even before
 // all seven choices have been supplied, but does not write any answers.
 window.MeridianSix={
   breach:()=>breach(),
   reset:restart,
   snapshot:()=>({assessment:qualityResult(),decisions:{...saved},completed:transitionComplete}),
   dilemmas:encounters.map(x=>({id:x.id,act:x.act,title:x.title,options:x.options.length}))
 };
})();