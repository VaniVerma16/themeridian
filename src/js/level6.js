/* THE MERIDIAN · LEVEL 06 DEV PROTOTYPE
 * Life in Three Acts — seven editorial decisions, original article,
 * separate restoration quality and hidden competing narrative influences.
 * No impact on publicly released Levels 1–5 or their saved sessions.
 */
(function(){
 'use strict';
 if(typeof developerPreview==='undefined'||!developerPreview)return;

 const STORAGE_KEY='meridian-six-editorial-v6';
 const LEGACY_STORAGE_KEY='meridian-six-editorial-v5';
 const VERSION=6;
 const encounters=[
 {
  "id": "broken-confidence",
  "act": 1,
  "number": 1,
  "title": "Did Adam betray Sophie—or defend her?",
  "lead": "Two sides of Adam survive in the college accounts: a possible betrayal, and an undeniable act of kindness.",
  "sourceTitle": "SOPHIE'S ACCOUNT / STUDENT INTERVIEWS · 1990",
  "source": "Sophie couldn't prove who leaked the story. Students remembered Adam confronting the bullies; her former boyfriend lived in the same dorm.",
  "question": "Should an accusation nobody can prove become part of a man's life story?",
  "story": [
   "Adam lived a very predictable life, at least initially. He was a gifted student attending college on a full scholarship, even though his family could have bought his way in. An ideal son, he grew up with his family's hopes and dreams resting on his shoulders. He was a very bright kid going to big places.",
   "An old college recollection interrupts the glowing accounts of Adam's talent. One of his former friends remembers an evening that puts him in a very different light.",
   "Late on a Saturday, Sophie, a friend of Adam's, told him about her family's financial problems. By Sunday evening, everyone knew. Sophie faced incessant bullying at the relatively wealthy college, to the point where she could barely escape the ridicule. When she confronted Adam, he suggested that someone might have overheard their conversation in the shared dorm room. Sophie wasn't quite sure what to believe, especially since one of her former flames lived there too. Adam did, however, help quell the bullying considerably."
  ],
  "options": [
   {
    "label": "Publish Sophie's suspicions.",
    "detail": "She deserves to be heard—but nobody proved Adam was responsible.",
    "revision": "Sophie had trusted Adam with her family's financial troubles. When the secret spread, she doubted his explanation. No account proves he leaked it; he later helped stop the bullying.",
    "quality": [
     7,
     8,
     7,
     8
    ],
    "axes": {
     "preservation": 4,
     "narrativeControl": 0,
     "compassion": 1,
     "erasure": 0,
     "independence": 3
    }
   },
   {
    "label": "Print Adam as her defender.",
    "detail": "His intervention was real, but Sophie's doubts disappear.",
    "revision": "Adam confronted classmates who bullied Sophie after news of her family's financial difficulties spread. Former students remembered him as her defender; her doubts about the leak are omitted.",
    "quality": [
     8,
     9,
     6,
     5
    ],
    "axes": {
     "preservation": 1,
     "narrativeControl": 4,
     "compassion": 1,
     "erasure": 2,
     "independence": 0
    }
   },
   {
    "label": "Leave the incident out.",
    "detail": "Spare Sophie another humiliation—but erase a revealing uncertainty.",
    "revision": "The article leaves out Sophie's college ordeal. Nobody established who leaked her secret, and publishing the story would expose her family's private difficulties again.",
    "quality": [
     8,
     7,
     9,
     6
    ],
    "axes": {
     "preservation": 0,
     "narrativeControl": 1,
     "compassion": 4,
     "erasure": 4,
     "independence": 2
    }
   }
  ],
  "reaction": null
 },
 {
  "id": "departure",
  "act": 1,
  "number": 2,
  "title": "Was Adam's big break also a broken promise?",
  "lead": "Adam accepted a research job abroad after promising his mother he'd come home to help. His appointment letter celebrates him. Her letter asks when he'll return.",
  "sourceTitle": "APPOINTMENT LETTER & FAMILY LETTER · 1991",
  "source": "Research office: “We are pleased to confirm your appointment.” His mother: “You told me you'd come home when college ended.”",
  "question": "Does a career success still look heroic when someone else paid its price?",
  "story": [
   "The university celebrated Adam's potential. At home, his mother was counting on a promise he could no longer keep."
  ],
  "options": [
   {
    "label": "Celebrate the research appointment.",
    "detail": "True to his achievements, but leaves his mother's sacrifices invisible.",
    "revision": "Adam accepted a prestigious research appointment abroad, an opportunity he had worked years to earn.",
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
    "label": "Include his mother's letter.",
    "detail": "Readers see the human cost, but she never wrote those words for a newspaper.",
    "revision": "Adam left for a research post despite a promise to return home. His mother's private letter described what his absence meant to her.",
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
    "label": "Mention both, without quoting her.",
    "detail": "Respects her privacy, but reduces a difficult choice to one neat sentence.",
    "revision": "Adam's new post took him abroad, away from a mother who had helped him through college and expected him home.",
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
   "So we're calling that success? Fine. Leave the rest out.",
   "You'd print her letter? She didn't write it for strangers.",
   "Both sides in one sentence. Convenient, isn't it?"
  ]
 },
 {
  "id": "breakup",
  "act": 2,
  "number": 3,
  "title": "Would naming Leah make readers blame her?",
  "lead": "Leah ended their relationship. Adam withdrew and later developed alcohol dependence. The dates are clear; the cause of his illness isn't.",
  "sourceTitle": "LEAH'S LETTER & WORK RECORD · 1992",
  "source": "Leah: “I still care for him. I can't stay.” His missed appointments and worsening health are recorded later. The documents do not establish causation.",
  "question": "Should a true detail be published if readers are likely to draw an unfair conclusion?",
  "story": [
   "Adam's years of illness did not happen in isolation. But telling events in order can make one person seem responsible for the next."
  ],
  "options": [
   {
    "label": "Name Leah and the breakup.",
    "detail": "It's part of his life, but readers may blame her for his decline.",
    "revision": "After his relationship with Leah ended, Adam withdrew from work and later developed alcohol dependence. The records establish sequence, not cause.",
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
    "label": "Mention the breakup, not Leah.",
    "detail": "Protects her identity, but still invites readers to treat heartbreak as the explanation.",
    "revision": "A relationship ended before Adam's withdrawal and later illness. The article withholds his former partner's identity.",
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
    "label": "Leave the breakup out.",
    "detail": "Avoids making Leah a villain, but removes important context from Adam's life.",
    "revision": "The article describes Adam's withdrawal and period of alcohol dependence without discussing his private relationship.",
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
  "title": "Should his illness soften the account of what he did?",
  "lead": "During alcohol dependence, Adam spent money Ruth needed for housing. He was struggling to recover. She lost her deposit.",
  "sourceTitle": "RUTH'S RECEIPTS & ADAM'S LETTER · 1993",
  "source": "Ruth documented the lost deposit. Adam acknowledged spending the money. His letters also describe his struggle with drinking.",
  "question": "How do you write about his suffering without erasing hers?",
  "story": [
   "Ruth remembered a brother she loved and promises she could no longer trust. Adam's illness was real. The lost deposit was real too."
  ],
  "options": [
   {
    "label": "Lead with Ruth's loss.",
    "detail": "Shows who was hurt, but readers may reduce Adam to his worst act.",
    "revision": "Adam used money Ruth needed for housing, leaving her without the deposit. His alcohol dependence was part of the context, not an excuse.",
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
    "label": "Lead with Adam's illness.",
    "detail": "May inspire compassion, but risks making Ruth's suffering a footnote.",
    "revision": "While struggling with alcohol dependence, Adam broke promises and used money Ruth needed for housing. She lost her deposit.",
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
    "label": "Omit the private incident.",
    "detail": "Protects family details, but leaves readers unable to understand why Ruth kept her distance.",
    "revision": "Adam's dependence damaged some family relationships. The article does not describe the specific harm Ruth experienced.",
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
   "You want that to be how they remember him?",
   "That's better. People might understand him that way.",
   "Some things really should remain private."
  ]
 },
 {
  "id": "apology",
  "act": 2,
  "number": 5,
  "title": "Can the article call this redemption?",
  "lead": "Adam sought treatment, repaid Ruth and apologised. Ruth believed his regret but never welcomed him back. The draft calls him “redeemed.”",
  "sourceTitle": "RECOVERY RECORD & FAMILY LETTERS · 1994",
  "source": "Adam documented his repayments and apology. Ruth wrote that she believed his remorse but did not wish to resume contact.",
  "question": "Who has the right to call someone forgiven—or redeemed?",
  "story": [
   "The improvement was slow and imperfect. Adam changed his actions. Ruth did not change her mind."
  ],
  "options": [
   {
    "label": "Keep the word “redeemed.”",
    "detail": "Honours his progress, but turns Ruth's pain into a chapter he overcame.",
    "revision": "Adam worked toward recovery and made amends. The article presents those efforts as his redemption, though Ruth never forgave him.",
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
    "label": "Remove the claim of redemption.",
    "detail": "Respects Ruth's refusal, but may deny the significance of his efforts.",
    "revision": "Adam sought treatment and repaid what he could. Ruth declined contact; the article does not present his attempts as moral absolution.",
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
    "label": "Print the private apology.",
    "detail": "Readers can judge for themselves, but Ruth's family correspondence becomes public evidence.",
    "revision": "Adam acknowledged his wrongdoing in a personal apology. The article reproduces that private admission while noting that Ruth did not accept renewed contact.",
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
  "title": "Should Adam's unfinished confession be published?",
  "lead": "Among Adam's papers is a private letter addressed to Nora, never finished. It refers to what happened with Ruth. We don't know whether Nora heard the story from Adam.",
  "sourceTitle": "UNFINISHED PERSONAL LETTER · 1996",
  "source": "The draft begins, “There's something I should have told you about Ruth.” It stops before Adam explains further. No complete version survives.",
  "question": "Does someone's death give an editor the right to publish words they never sent?",
  "story": [
   "Nora remembered a patient, funny partner. The unfinished letter suggests that even during their happy years, Adam still wrestled with what to share about his past."
  ],
  "options": [
   {
    "label": "Print the unfinished letter.",
    "detail": "Shows Adam's private uncertainty, but exposes Nora to words not intended for the public.",
    "revision": "An unfinished letter addressed to Nora shows Adam struggled to talk about his past with Ruth. The article quotes the draft, without assuming Nora ever saw it.",
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
    "label": "Mention the letter, not its words.",
    "detail": "Protects intimate details, but leaves readers imagining something worse.",
    "revision": "Among Adam's papers was an unfinished letter to Nora about his past. The article notes its existence without reproducing his private words.",
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
    "label": "Leave the letter out.",
    "detail": "Protects Nora's privacy, but hides how difficult honesty remained for Adam.",
    "revision": "The article does not publish Adam's unfinished correspondence to Nora. What he told her privately remains unknown.",
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
   "You'd publish a letter he never sent?",
   "Just enough for readers to invent the rest. Interesting.",
   "Yes. Let their happier years have some peace."
  ]
 },
 {
  "id": "ruth-account",
  "act": 3,
  "number": 7,
  "title": "Should Ruth's account be included in the article?",
  "lead": "After Adam's death, Nora remembered a loving fiancé. Ruth remembered the brother who broke her trust. Both agreed to speak to the newspaper.",
  "sourceTitle": "NORA & RUTH · INTERVIEWS, 1997",
  "source": "Nora recalled a patient, funny partner. Ruth described an earlier period of broken promises. Both gave sincere accounts.",
  "question": "Does someone deserve to be remembered for who they became—or who they once were?",
  "story": [
   "The last weeks of Adam's life were filled with ordinary plans. The people left behind did not agree on which memories should outlive him."
  ],
  "options": [
   {
    "label": "Publish both accounts.",
    "detail": "Ruth deserves to be heard, but Nora may feel her grief has been overshadowed.",
    "revision": "Nora described devotion; Ruth described broken trust. The article preserves both women's memories of Adam.",
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
    "detail": "Honours his later happiness, but erases the hurt Ruth still carries.",
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
    "detail": "Preserves her testimony, but readers lose the context of who she was to him.",
    "revision": "An unnamed relative recalls Adam's earlier harm. Ruth's testimony survives without her name, leaving readers less context for judging it.",
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
   const current=localStorage.getItem(STORAGE_KEY);
   const legacy=current?null:localStorage.getItem(LEGACY_STORAGE_KEY);
   const obj=JSON.parse(current||legacy||'null');
   if(!obj||!obj.decisions||!(obj.version===VERSION||(legacy&&obj.version===5)))return;
   for(const encounter of encounters){
    // Q1 has been rewritten; do not silently reinterpret a previous answer.
    if(legacy&&encounter.number===1)continue;
    const n=obj.decisions[encounter.id];
    if(Number.isInteger(n)&&n>=0&&n<encounter.options.length)saved[encounter.id]=n;
   }
   if(legacy){
    save();storeCampaignState(false);
    localStorage.removeItem(LEGACY_STORAGE_KEY);
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
  try{localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(LEGACY_STORAGE_KEY);}catch(e){}
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
    version:6,decisions:{...saved},parameters:{...result.parameters},
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