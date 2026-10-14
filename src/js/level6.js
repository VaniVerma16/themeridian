/* THE MERIDIAN · LEVEL 06 DEV PROTOTYPE
 * A Life in Three Acts — seven editorial decisions, original article,
 * separate restoration quality and hidden competing narrative influences.
 * No impact on publicly released Levels 1–5 or their saved sessions.
 */
(function(){
 'use strict';
 if(typeof developerPreview==='undefined'||!developerPreview)return;

 const STORAGE_KEY='meridian-six-editorial-v2';
 const VERSION=2;
 const encounters=[
  {
   id:'prize',act:1,number:1,
   title:'The prize that belonged to two people',
   lead:'The university celebrated Adam as an exceptional mathematician. There is a discrepancy in how his first major achievement was credited.',
   sourceTitle:'UNIVERSITY RESEARCH OFFICE · 1990',
   source:'Award announcement: Adam E., single recipient. Laboratory notebook: two distinct sets of calculations, one signed by Adam and the other by Miriam Vale. Her name was crossed out on the printed programme. No evidence establishes who removed it.',
   question:'Is success ever entirely individual?',
   story:[
    'At college Adam was the sort of student lecturers used as an example. He could disentangle an argument before anyone had quite finished making it, though he sometimes forgot to explain how he arrived at the answer. He filled the margins of his lecture notes with little diagrams of radios, bicycle gears and weather patterns. His roommate remembered him mending the same stubborn cassette player six times because he disliked the idea of throwing away something that could still make music.',
    'In 1990 a student engineering project won a national university prize. Adam gave an awkward acceptance speech, thanked his mother, and almost dropped the microphone. It was the first of several occasions on which people began speaking about his future as though it were already certain.'
   ],
   options:[
    {label:'Retain the official credit',detail:'Publish the documented award while noting that the attribution remains disputed. A published record should not silently replace an official one.',revision:'The official prize listed Adam alone. Surviving notebooks suggest that Miriam Vale also contributed, although the extent of her work and the decision to omit her name remain uncertain.',quality:[9,8,7,8],influence:{archivist:3,storyteller:0,erasure:0,commons:1},preserves:true},
    {label:'Tell the story of the gifted prodigy',detail:'Keep the achievement central to the portrait; the discrepancies are not sufficiently substantiated to displace the narrative.',revision:'The university prize confirmed what Adam’s teachers had long suspected: his ability could carry him far beyond the modest expectations of his childhood.',quality:[6,10,5,3],influence:{archivist:0,storyteller:4,erasure:0,commons:0},preserves:true},
    {label:'Credit the collaboration, with a caveat',detail:'Make the evidence of shared work visible but explicitly distinguish it from proof of misconduct.',revision:'The celebrated project was not entirely solitary. Miriam Vale’s calculations appear beside Adam’s in the working notebook. The award went to him alone; the reason remains undocumented.',quality:[9,7,8,10],influence:{archivist:1,storyteller:0,erasure:0,commons:4},preserves:true}
   ]
  },
  {
   id:'departure',act:1,number:2,
   title:'What ambition costs other people',
   lead:'A prestigious post took Adam away from his closest friend just when their plans had become commitments.',
   sourceTitle:'CORRESPONDENCE · JUNE–AUGUST 1991',
   source:'Adam accepted a paid research post in another city after he and his roommate Daniel signed a twelve-month lease. Daniel paid the remaining deposit alone. Adam later reimbursed part of it; their friendship never fully recovered.',
   question:'Does the right to choose a future release us from promises made in the past?',
   story:[
    'Daniel, the roommate with the cassette player, had been his closest friend through university. They lived on burnt toast and inexpensive tea, collected unwanted furniture and planned to rent a place together after graduation. On an August afternoon, Adam received a job offer far better than anything he had expected.',
    'He left. The job was an opportunity for which he had worked since arriving at college. It was also a departure that left another person responsible for plans they had made together. Years afterward Daniel would remember both the generosity of his friend and the empty half of their rented flat.'
   ],
   options:[
    {label:'Frame the departure as a necessary opportunity',detail:'The agreement mattered, but expecting a young person to sacrifice an exceptional career might also have been unreasonable.',revision:'A rare research appointment required Adam to leave abruptly. The move strained a friendship he valued, yet gave him the professional foothold he had spent years trying to earn.',quality:[7,9,6,6],influence:{archivist:0,storyteller:4,erasure:0,commons:0},preserves:true},
    {label:'Centre the unfulfilled commitment',detail:'The injury to Daniel was concrete, regardless of Adam’s promising prospects or later payments.',revision:'Adam accepted the appointment despite a shared lease. Daniel was left to cover the deposit. Later reimbursement did not undo the damage, and the two were never as close again.',quality:[9,7,7,8],influence:{archivist:4,storyteller:0,erasure:0,commons:1},preserves:true},
    {label:'Leave the personal breach out',detail:'The housing disagreement was private and may be disproportionate in a story about a twenty-seven-year life.',revision:'After graduation, Adam moved away to take up a research position. His university friendships gradually dispersed.',quality:[5,9,8,4],influence:{archivist:0,storyteller:0,erasure:4,commons:0},preserves:false}
   ]
  },
  {
   id:'dependence',act:2,number:3,
   title:'The years nobody knew how to describe',
   lead:'Following a devastating breakup, Adam developed alcohol dependence. His family’s accounts describe a medical struggle, but also a series of choices that harmed other people.',
   sourceTitle:'PRIVATE LETTERS · 1992–1994',
   source:'After his relationship with Leah ended in 1992, Adam withdrew from work and friends. In 1993 he borrowed money from his sister Ruth for rent and spent part of it on alcohol. Ruth lost a housing deposit as a result. Adam later acknowledged what he had done.',
   question:'Can understanding why someone caused harm coexist with holding them responsible?',
   story:[
    'When Leah ended their relationship, Adam did not announce its devastation. At first he simply stopped returning calls. He began sleeping through appointments and drinking more heavily, then began drinking in secret. There were mornings when he made earnest plans to stop and evenings when he could not keep them.',
    'To Ruth, his younger sister, the hardest memory was not of the bottles. It was of the ordinary assurances. He would be there on Saturday. He would send the money back. He would call before it got late. She learned that loving someone did not make those promises reliable.',
    'Alcohol dependence narrowed Adam’s world and damaged his health. It also brought consequences to other people who had never agreed to live inside his suffering.'
   ],
   options:[
    {label:'Describe the dependence as an illness',detail:'Illness provides context essential to understanding a period of behaviour that otherwise looks inexplicable.',revision:'After the breakup Adam developed alcohol dependence, withdrew from his work and struggled repeatedly to stop. His condition affected his family as well as himself; Ruth’s lost deposit was among its consequences.',quality:[9,8,8,8],influence:{archivist:1,storyteller:2,erasure:0,commons:2},preserves:true},
    {label:'Give priority to the damage he caused',detail:'People who experienced his broken promises should not disappear behind an account of his pain.',revision:'During his period of heavy drinking Adam used money Ruth had entrusted to him, contributing to her loss of a housing deposit. His struggles were real; so were the costs to others.',quality:[9,8,6,9],influence:{archivist:4,storyteller:0,erasure:0,commons:1},preserves:true},
    {label:'Keep the period private',detail:'The correspondence was never written for publication and may unfairly reduce him to his lowest years.',revision:'Adam’s early working years were interrupted by a difficult period of ill health and personal loss. He gradually returned to work in the years that followed.',quality:[5,9,9,4],influence:{archivist:0,storyteller:0,erasure:4,commons:0},preserves:false}
   ]
  },
  {
   id:'apology',act:2,number:4,
   title:'The apology Ruth never accepted',
   lead:'Adam tried to repay the money and repair his relationship with Ruth. Her surviving correspondence makes clear that repayment was not the same as forgiveness.',
   sourceTitle:'UNSENT LETTER · AUTUMN 1994',
   source:'Adam wrote that he had no excuse for taking the money and had begun repayment. Ruth’s annotation on the envelope reads: “I know he means it. I still don’t want to see him.” The letter was never posted.',
   question:'Is redemption possible when the person you hurt refuses to forgive you?',
   story:[
    'In the autumn of 1994, Adam began making small repairs to the life he had damaged. He took irregular work. He repaid what he could. He attended meetings he once would have avoided. The progress came in ordinary increments, not in a single declaration that he was suddenly well.',
    'He wrote Ruth a letter. It contained no defence of his actions, only an admission of what he had taken from her and a promise to make repayment. She did not send an answer. Neither of them could have known how little time remained.'
   ],
   options:[
    {label:'Include the apology as evidence of change',detail:'Even unaccepted remorse can have value when it is followed by sustained action.',revision:'Adam acknowledged the harm, made repayments and attempted to apologise. These efforts suggest change, though Ruth did not resume the relationship and never offered forgiveness.',quality:[9,8,8,9],influence:{archivist:1,storyteller:2,erasure:0,commons:3},preserves:true},
    {label:'Give Ruth the final word',detail:'Repentance does not entitle the person responsible to restoration of a relationship.',revision:'Adam began paying back the money he had taken. Ruth declined contact. Her refusal remained part of the record and should not be recast as a stage in his redemption.',quality:[8,7,8,9],influence:{archivist:4,storyteller:0,erasure:0,commons:2},preserves:true},
    {label:'Omit the unresolved apology',detail:'Publishing an unsent letter could make private pain into a public verdict on both siblings.',revision:'In 1994 Adam began rebuilding his working life, repaying outstanding debts and seeking help. The personal consequences of that period remained unsettled.',quality:[7,9,9,6],influence:{archivist:0,storyteller:0,erasure:4,commons:0},preserves:false}
   ]
  },
  {
   id:'renewal',act:2,number:5,
   title:'The woman who met him afterward',
   lead:'By 1995 Adam was participating in recovery and rebuilding ordinary routines. He met Nora, who would become his fiancée. They understood his past differently from those who had known him during the worst years.',
   sourceTitle:'ENGAGEMENT ANNOUNCEMENT · SEPTEMBER 1996',
   source:'The announcement describes Adam and Nora’s engagement and refers to “a welcome new beginning.” Nora’s notes mention Sunday walks and repairing radios at the library. Ruth’s later interview says: “I hope he changed. I couldn’t know that for myself.”',
   question:'When someone changes, do the people they hurt owe that new person recognition?',
   story:[
    'Nora met Adam at the lending library, where he volunteered to repair broken radios donated for a community sale. One afternoon the two of them spent forty minutes searching for a missing screw that had been stuck to the back of his sleeve the entire time. She laughed so hard that the librarian asked them to leave.',
    'Nora did not save him. By the time they met, Adam had already begun treatment, returned to work and learnt to ask for help without pretending he had everything under control. She loved him without making herself responsible for his recovery. He learnt her impossible tea preferences; she learnt that he was an enthusiastic and unreliable cook.',
    'Their engagement was announced in September 1996. The notice called it a new beginning. Those who remembered the earlier years could not agree how completely the old Adam had disappeared.'
   ],
   options:[
    {label:'Tell the story of his transformation',detail:'A person who has worked to change deserves the possibility of being known for more than an earlier failure.',revision:'With recovery came renewed work and the love of Nora, whom Adam planned to marry. Their engagement suggested a life once made fragile was being carefully built again.',quality:[8,10,8,7],influence:{archivist:0,storyteller:4,erasure:0,commons:1},preserves:true},
    {label:'Set the memories beside one another',detail:'Nora’s happiness and Ruth’s mistrust can both be sincere. Neither account cancels the other.',revision:'To Nora, Adam was patient, funny and committed to recovery. Ruth, who had lived through an earlier period, could not verify the change for herself. Both memories belong to the history of the same man.',quality:[9,7,9,10],influence:{archivist:2,storyteller:0,erasure:0,commons:4},preserves:true},
    {label:'Publish only the happy announcement',detail:'An engagement notice should not have to carry a complete account of someone’s private medical history.',revision:'Adam and Nora announced their engagement in September 1996. They hoped to marry the following year and looked forward to their first home together.',quality:[6,10,8,5],influence:{archivist:0,storyteller:2,erasure:3,commons:0},preserves:false}
   ]
  },
  {
   id:'death',act:3,number:6,
   title:'The last night',
   lead:'The recovered medical and location evidence establishes how Adam died, but not exactly how the fatal injury occurred. The engagement and their plans for a home make speculation particularly tempting.',
   sourceTitle:'POLICE & INQUEST NOTES · FEBRUARY 1997',
   source:'Adam E. was found on 21 February on the eastern canal towpath beneath the old railway bridge. Death was estimated between 10 PM on 20 February and 2 AM on 21 February. The medical cause was a fatal blunt-force head injury. Accident, suicide and homicide were not established by the recovered findings.',
   question:'Does an abrupt death give the preceding life a meaning it did not have while it was being lived?',
   story:[
    'In February 1997 Adam and Nora were looking at houses. They argued amiably about curtains and had not yet decided whether the wedding should be in May or June. On the kitchen wall she kept a scrap of paper with the words “please buy milk” written in Adam’s tall, sloping handwriting. It remained there after he was gone.',
    'On 21 February he was found beneath the old railway bridge by the eastern canal towpath. He had sustained a fatal head injury. The recorded estimate placed his death sometime between ten o’clock the preceding night and two in the morning.',
    'The papers did not establish whether his death resulted from an accident, his own actions or someone else’s. Every later telling of the story began with that absence. The life preceding it had contained a great deal more.'
   ],
   options:[
    {label:'Emphasise the future that was taken',detail:'The shock of his death cannot be understood without the ordinary hopes and plans that preceded it.',revision:'He died at twenty-seven, engaged and planning a home with Nora. The future they had begun to imagine would not arrive. What happened in his last hours remains unknown.',quality:[8,10,8,7],influence:{archivist:0,storyteller:4,erasure:0,commons:1},preserves:true},
    {label:'Record only what the investigation supports',detail:'The article must resist turning unresolved circumstances into a theory or symbolic conclusion.',revision:'Adam died of a fatal head injury during the night of 20–21 February 1997. He was found on the eastern canal towpath. The circumstances of the injury remained undetermined.',quality:[10,7,7,9],influence:{archivist:4,storyteller:0,erasure:0,commons:1},preserves:true},
    {label:'Reject a retrospective moral of the story',detail:'The ending should not retroactively turn the preceding years into either a warning or a triumph.',revision:'Adam had been planning a life with Nora. His death ended those plans abruptly; it does not decide whether the earlier years were successes, failures or steps toward something else. Its circumstances remain undetermined.',quality:[9,8,9,10],influence:{archivist:0,storyteller:0,erasure:0,commons:4},preserves:true}
   ]
  },
  {
   id:'verdict',act:3,number:7,
   title:'The final word',
   lead:'The corrected proof now contains contradictory memories, recovered testimony and an unfinished future. The publication desk demands a definitive editorial treatment.',
   sourceTitle:'EDITOR’S ROUTING SLIP · APRIL 1997',
   source:'The surviving draft bears three handwritten commands in different inks: “KEEP EVERYTHING”; “MAKE IT MEAN SOMETHING”; and “LET HIM DISAPPEAR.” A fourth, unsigned annotation reads: “Who gave any of us the last word?”',
   question:'Can any human life deserve a final verdict?',
   story:[
    'A good obituary is supposed to arrive somewhere. It begins with a life and ends by telling the reader what that life was for. But Adam’s history did not resolve itself with the neatness of its title. He could be brilliant and thoughtless, loved and resented, accountable for harm and capable of change.',
    'The finished article had to choose what would survive. Readers might remember the gifted student, the man who hurt Ruth, the patient partner Nora loved, or a body recovered from the canal. Each version would contain evidence. None would be the whole of him.'
   ],
   options:[
    {label:'Preserve the complete substantiated record',detail:'Retain every surviving account and discrepancy under archival authority. Do not delete facts to make Adam easier to remember.',revision:'The complete dossier remains available: achievement and disputed credit, addiction and harm, attempted amends and renewed happiness, and an unexplained death. Nothing is suppressed merely because it unsettles a portrait of the deceased.',quality:[10,6,5,8],influence:{archivist:12,storyteller:0,erasure:0,commons:1},preserves:true},
    {label:'Publish the most coherent account of his life',detail:'Create an intelligible story from verified events, accepting that coherence requires selection and interpretation.',revision:'Adam’s life was a story of promise, collapse and a hard-won return to hope. His unexpected death interrupted the future he had begun to build, leaving a final chapter no one could finish.',quality:[7,10,7,5],influence:{archivist:0,storyteller:12,erasure:0,commons:1},preserves:true},
    {label:'Withdraw the biography and identifying files',detail:'No surviving editor is entitled to fix a final account of a man unable to answer back. Withhold the record rather than turn it into a verdict.',revision:'The completed biography was withdrawn from publication. The index identifies no surviving personal file. The details of the life have been withheld.',quality:[3,5,10,3],influence:{archivist:0,storyteller:0,erasure:15,commons:0},preserves:false},
    {label:'Publish an accountable, layered edition',detail:'Separate evidence from interpretation, document omissions and disagreements, and let no single narrator claim the whole person.',revision:'The original records and their limits remain identifiable. Where memories conflict, the disagreement is left visible. Where disclosure would cause unnecessary harm, the restriction is recorded. Adam’s life is not assigned one conclusive meaning.',quality:[9,7,9,10],influence:{archivist:1,storyteller:0,erasure:0,commons:12},preserves:true}
   ]
  }
 ];

 const acts=[
  {number:1,label:'ACT I — THE PROMISE',date:'1988–1991',
   opening:'There were people who could recall the first time they met Adam E. Mostly, they remembered the impression that he had somewhere important to be. He did not yet know where. At eighteen, leaving home for university, he took a suitcase, a radio with a broken dial and two books he never returned to the library.',
   closing:'The bright years did not finish badly, exactly. They simply ended without consulting the people who thought they would last forever.'},
  {number:2,label:'ACT II — THE FALL AND THE RETURN',date:'1992–1996',
   opening:'The second act is difficult to write because the evidence is not kind, and kindness alone cannot make it false. There was a breakup, then a long and bewildering period in which Adam became difficult to reach even when he was sitting beside someone.',
   closing:'By the end of 1996 his days were no longer shaped entirely by what had gone wrong. He was learning to inhabit the life in front of him, one small ordinary pleasure at a time.'},
  {number:3,label:'ACT III — THE UNFINISHED',date:'FEBRUARY 1997',
   opening:'The final act does not behave like the ending of a story. It begins with lists, telephone messages and plans that would make no sense unless everybody expected the next month to arrive.',
   closing:'No one wrote a satisfactory ending to Adam’s life. What followed were attempts to make one out of the facts he had left behind.'}
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
 let lastEnding=null;
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
 }
 function text(tag,content,className){
  const el=document.createElement(tag);
  if(className)el.className=className;
  el.textContent=content;
  return el;
 }
 function qualityResult(){
  const dimensions={accuracy:0,clarity:0,care:0,accountability:0};
  const influence={archivist:0,storyteller:0,erasure:0,commons:0};
  let count=0,preserved=0;
  for(const item of encounters){
   const optionIndex=saved[item.id];
   if(!Number.isInteger(optionIndex))continue;
   const opt=item.options[optionIndex];
   ['accuracy','clarity','care','accountability'].forEach((key,i)=>{dimensions[key]+=opt.quality[i];});
   Object.keys(influence).forEach(key=>{influence[key]+=(opt.influence[key]||0);});
   if(opt.preserves)preserved++;
   count++;
  }
  const weighted=.35*dimensions.accuracy+.25*dimensions.clarity+
    .20*dimensions.care+.20*dimensions.accountability;
  return {
   count,preserved,dimensions,influence,
   score:Math.min(100,Math.round(weighted*10/encounters.length))
  };
 }
 function calculateEnding(result){
  const finalOption=saved.verdict;
  // The Commons ending is not awarded merely for clicking D. The preceding
  // review must have retained sources and demonstrated accountability.
  const qualifies=finalOption===3 &&
    result.influence.commons>=21 &&
    result.preserved>=5 &&
    result.dimensions.accountability>=48;
  if(qualifies)return 'commons';
  if(finalOption===2 && result.influence.erasure>=15)return 'erasure';
  const order=['archivist','storyteller','erasure','commons'];
  // Failed shared authority cannot be imposed by an unsupported declaration:
  // the dominant established position determines what happens instead.
  const candidates=finalOption===3?['archivist','storyteller','erasure']:order;
  return candidates.reduce((best,key)=>result.influence[key]>result.influence[best]?key:best,candidates[0]);
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
    apply.addEventListener('click',()=>{
      if(inTransition)return;
      const current=fieldset.querySelector('input:checked');
      if(!current){status.textContent='Select an editorial treatment before applying it.';return;}
      const index=Number(current.value);
      saved[encounter.id]=index;
      save();
      revisedText.textContent=encounter.options[index].revision;
      revised.hidden=false;
      card.classList.add('is-complete');
      top.querySelector('.six-decision-state').textContent='REVISION RECORDED';
      apply.textContent='Update this revision';
      status.textContent='Change recorded. You can revise it before submission.';
      update();
    });
    inner.append(fieldset,apply,status,revised,text('p',encounter.question,'six-ethical-query'));
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
   'All seven passages reviewed. Submit the restored article to receive your result.';
  submitButton.disabled=left>0||inTransition;
  resetButton.hidden=state.count===0;
  document.getElementById('level-six').dataset.corruption=String(state.count);
 }

 const endings={
  archivist:{
   kicker:'ENDING 01 / THE UNALTERED RECORD',
   title:'The Archivist Wins',
   summary:'Every admissible source is kept: the prize, the wrongs, the apology Ruth never accepted, Nora’s memories, and the limits of the death investigation. Adam’s contradictions have been preserved. So has material that some of the living never wanted published. The archive calls this completeness.',
   echo:'“Nothing has been lost,” the Archivist writes. You cannot tell whether this is a promise or a threat.',
   question:'If everything about someone can be known, does that make it right to know it?'
  },
  storyteller:{
   kicker:'ENDING 02 / THE PERFECT STORY',
   title:'The Storyteller Wins',
   summary:'The article is moving, clear and difficult to forget. A gifted boy falls, struggles, and finds love before an untimely death. Readers weep at the final paragraph. The ambiguities have quietly disappeared. The people who remember Adam differently can no longer find their version in the public record.',
   echo:'“That,” the Storyteller says, “is what he was always meant to become.” No one asks Adam.',
   question:'When a beautiful story is built from true events, what happens to the truths it leaves behind?'
  },
  erasure:{
   kicker:'ENDING 03 / NO RECORD FOUND',
   title:'Nobody Wins',
   summary:'The manuscript vanishes. References disappear from the index; the correspondence no longer resolves to a name. The Archivist has no record to protect. The Storyteller has no life to retell. Adam’s harm and his kindness are erased together. The archive behaves as though it never knew him.',
   echo:'The next search returns: NO SUCH PERSON. The system has forgotten your editorial choices too.',
   question:'If erasure prevents judgment, what else does it prevent?'
  },
  commons:{
   kicker:'ENDING 04 / NO SINGLE AUTHOR',
   title:'The Player Refuses the Verdict',
   summary:'Neither the Archivist nor the Storyteller receives the final proof. The preserved evidence is labelled, each interpretation remains distinguishable, and some sensitive details stay restricted with the restriction itself recorded. Ruth and Nora are allowed to remember different men. Adam is not assigned a final moral value.',
   echo:'For the first time, the archive does not answer with a single voice. It is messier. It is also possible to disagree with.',
   question:'Maybe a life is not a story that anyone gets to finish.'
  }
 };
 function displayEnding(key,assessment){
  const ending=endings[key]||endings.archivist;
  lastEnding=key;
  endingSection.dataset.ending=key;
  document.getElementById('six-ending-kicker').textContent=ending.kicker;
  endTitle.textContent=ending.title;
  document.getElementById('six-ending-summary').textContent=ending.summary;
  document.getElementById('six-ending-echo').textContent=ending.echo;
  document.getElementById('six-ending-question').textContent=ending.question;
  document.getElementById('six-ending-ref').textContent=ending.kicker;
  document.getElementById('six-ending-score').textContent=assessment.score+' / 100';
  if(key==='erasure'){
    // Erase only this unreleased Level 6 draft, not Levels 1–5 game progress.
    // The score shown in the ending is the last thing retained on screen.
    wipeTrial();
    render();
  }
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
  const outcome=forcedEnding||calculateEnding(result);
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
   displayEnding(outcome,result);
   inTransition=false;
   update();
   show('sixAfter');
  },window.matchMedia('(prefers-reduced-motion: reduce)').matches?1700:5000);
 }
 function restart(){
  if(inTransition)return;
  clearTimers();
  wipeTrial();lastEnding=null;
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
   breach:()=>breach(qualityResult().count===7?undefined:'archivist'),
   reset:restart,
   snapshot:()=>({assessment:qualityResult(),decisions:{...saved},ending:lastEnding}),
   dilemmas:encounters.map(x=>({id:x.id,act:x.act,title:x.title,options:x.options.length}))
 };
})();