    const caseFiles=[
  {
    "type": "NEWSROOM RESEARCH NOTES",
    "title": "The first call",
    "date": "21 FEB 1997",
    "ref": "NEWS/97-01",
    "body": [
      "Friday, 21 February. I've started a folder, although I'm not completely sure yet what sort of a story this is. A man was found dead early this morning, somewhere by the canal path I think? Police were called shortly after 6:40. There was an ambulance, but it was already too late.",
      "I rang the press office. They would only say the eastern side of town, near the canal access path, and that they were still trying to identify him. They sounded tired. I probably asked the same question twice!",
      "You know, I keep thinking about how ordinary that path is. People take it to the station every day. That isn't useful for the article, I know, but I wanted to write it down. We should find out exactly where he was discovered.",
      "Nothing about a cause yet. I'm going to keep the statements together and see what turns up."
    ],
    "note": "I think this one is very initial. Can't tell a lot from it."
  },
  {
    "type": "NEWSROOM RESEARCH NOTES",
    "title": "A name, perhaps",
    "date": "24 FEB 1997",
    "ref": "NEWS/97-02",
    "body": [
      "Monday. We have a little more now. A police follow-up says he was twenty-seven, that his surname began with E, and that his birthday was in January. I found three possible names in our enquiry book. One looks promising, but I want to be really certain.",
      "One of the names seemed familiar. I think I remember seeing an engagement announcement last September. Something about a new beginning after a difficult few years. I've kept the cutting; we can compare it once we know the name."
    ],
    "note": "Finally, some identifying information. We can use this with the other slips to narrow down who the victim was."
  },
  {
    "type": "NEWSROOM RESEARCH NOTES",
    "title": "The person near the path",
    "date": "25 FEB 1997",
    "ref": "NEWS/97-03",
    "body": [
      "Tuesday. I spoke to someone yesterday who was coming back towards Station Road late on Thursday, the twentieth. They remember a man near the entrance to the canal path. They didn't recognise him. I asked if they could be sure it was our man; they couldn't.",
      "They said it was 'getting on for eleven'. I asked whether that meant before or after, which wasn't a terribly helpful question because they hadn't seen a clock. I think I made them feel as though there was a correct answer.",
      "The man seemed to slow down, or perhaps stumble. It was dark, and the witness couldn't tell why. They heard no argument or shouting. They couldn't say whether anyone else was there.",
      "I wrote all this down because it might matter later. At present it's only a possible sighting. I wish there had been someone else on the path who could remember a little more."
    ],
    "note": "That witness was trying to help, even when they weren't sure. That's nice I guess."
  },
  {
    "type": "NEWSROOM RESEARCH NOTES",
    "title": "What we know by April",
    "date": "APR 1997",
    "ref": "NEWS/97-04",
    "body": [
      "April. I went back to the folder after the inquest evidence was reported. It feels strange to read my February notes now. There are still so many holes in them.",
      "The medical witness described the injury, and I copied the wording onto a separate slip because I didn't want to muddle it. There was also an estimated time of death. I've put that on its own page too. I always get the hour of discovery tangled up with the hour he actually died.",
      "The testimony explains what killed him, but not how it happened. A fall? Someone else? Nobody seemed able to say. I thought the hearing might resolve everything, which was probably foolish.",
      "We have enough for a factual outline, I think. Mercer has offered to arrange the material into a draft, and perhaps that will make it clearer. At least I hope it will."
    ],
    "note": "There it is. Four pages, and still not a complete answer. Maybe we can use the loose inserts and slips?"
  }
];
    const caseInserts=[
  {
    "tag": "MAP SCRAP",
    "title": "The canal footbridge",
    "text": "Friday, 21 February, afternoon. I finally got the precise location for our photographer: the body was found on the eastern canal towpath, beneath the old railway bridge. The steps from Station Road were taped off because they were the nearest access point, not where he was discovered. I've marked the bridge and the steps separately on the sketch so nobody gets them mixed up."
  },
  {
    "tag": "ENQUIRY PAGE",
    "title": "The three names",
    "text": "Monday, 24 February, morning. Three names from old newsroom entries, none independently confirmed. Adam E. — 18 January 1970 (birth notice); Arthur E. — 6 January 1965 (birth notice); Martin Vale — 9 January 1970 (birth notice). These are the names as they appear in the files. I've kept the sources beside them, in case any of the enquiries turn out to be wrong. People have been calling in guesses all morning. A list of names isn't an identification."
  },
  {
    "tag": "MERCER / PHONE NOTE",
    "title": "Police called back",
    "text": "24 February, 2:05 p.m. Press office returned the call. They will not confirm any of the names we have put forward until the family has been informed. Also checked Friday's dispatch: 6:40 a.m. is when the emergency call was logged, not a medical estimate. The steps off Station Road were closed to keep people off the path; that does not tell us where the body was picked up. — E. Mercer"
  },
  {
    "tag": "MERCER / HEARING NOTE",
    "title": "The estimated hours",
    "text": "April — from the medical evidence. The first examination was recorded at approximately 7 a.m. on Friday 21 February. The doctor allowed a broad interval of roughly five to nine hours before that examination for the death to have occurred. Conditions outdoors make it an estimate, not a precise clock time. Do not confuse it with the earlier emergency call. — E. Mercer"
  },
  {
    "tag": "MARGIN NOTE",
    "title": "What the doctor said",
    "text": "April. I tried to copy this carefully. Fracture at the back of the skull, with bleeding inside the head. The doctor said the damage was consistent with a heavy impact against something solid. Someone asked about the canal, but there was no evidence of drowning. The awkward bit is that a fall and a blow from someone else could leave much the same injury. Nobody at the hearing could say which it was."
  },
  {
    "tag": "MERCER / ARCHIVE & DRAFT",
    "title": "The feature title",
    "text": "24 February — Found the September 1996 engagement announcement filed under A.E. The accompanying caption gave his age as twenty-six; the piece mentions a couple hoping for a new beginning after difficult years. Might be useful background, but a newspaper cutting isn't proof of anyone's identity. Wait for the police to confirm it before using the name in print. Working title for a possible feature: The Death of the Ordinary Man. Suggested by: [[REDACTED]]. Editor to review before copy is set. — E. Mercer"
  }
];
    // Draw archival redactions as the same corrupted mark in every surface,
    // including small document labels; never show the placeholder literally.
    function showRedactedText(target,value){
      target.replaceChildren();
      const marker='[[REDACTED]]';
      const fragments=String(value).split(marker);
      fragments.forEach((fragment,index)=>{
        if(index){
          const seal=document.createElement('span');
          seal.className='archive-redaction';
          seal.textContent='██████████';
          seal.setAttribute('aria-label','name redacted');
          target.appendChild(seal);
        }
        if(fragment)target.appendChild(document.createTextNode(fragment));
      });
    }
    const extraHost=document.getElementById('case-extra-cards');
    let slipIndex=0;
    caseInserts.forEach((item,i)=>{
      const btn=document.createElement('button');btn.type='button';btn.className='case-extra-card';btn.setAttribute('aria-pressed','false');
      const num=document.createElement('small');num.textContent='SLIP '+String(i+1).padStart(2,'0');
      const title=document.createElement('span');title.textContent=item.title;btn.append(num,title);
      btn.addEventListener('click',()=>{
        slipIndex=i;
        showRedactedText(document.getElementById('case-extra-type'),item.tag);
        document.getElementById('case-extra-title').textContent=item.title;
        showRedactedText(document.getElementById('case-extra-text'),item.text);
        document.getElementById('case-extra-view').hidden=false;
        document.getElementById('desk-slip-counter').textContent='SLIP '+String(i+1).padStart(2,'0')+' / '+String(caseInserts.length).padStart(2,'0');
        document.getElementById('case-pin-slip').dataset.caseEvidence='slip:'+i;
        paintCasePins();
        extraHost.querySelectorAll('.case-extra-card').forEach((b,n)=>{
          b.classList.toggle('selected',n===i);b.setAttribute('aria-pressed',String(n===i));
        });
      });
      extraHost.appendChild(btn);
    });
    let activeCaseFile=0,caseZoom=100;
    let casePinsReady=false;
    const caseTabs=document.getElementById('case-tabs');
    caseFiles.forEach((file,i)=>{
      const button=document.createElement('button');button.type='button';button.className='case-tab';
      button.innerHTML='<small>RECORD 0'+(i+1)+'</small><span>'+file.title+'</span>';
      button.addEventListener('click',()=>openCaseFile(i));caseTabs.appendChild(button);
    });
    function openCaseFile(i){
      activeCaseFile=Math.max(0,Math.min(caseFiles.length-1,i));
      const file=caseFiles[activeCaseFile],paper=document.getElementById('case-active-document');
      paper.replaceChildren();
      const heading=document.createElement('div');heading.className='case-paper-heading';
      heading.innerHTML='<span>THE MERIDIAN · NEWSROOM ARCHIVE</span><span>'+file.ref+'</span>';paper.appendChild(heading);
      const kind=document.createElement('div');kind.className='case-paper-kind';showRedactedText(kind,file.type);paper.appendChild(kind);
      const h=document.createElement('h2');h.textContent=file.title;paper.appendChild(h);
      const date=document.createElement('p');date.className='case-paper-date';date.textContent='FILED '+file.date;paper.appendChild(date);
      file.body.forEach((t,n)=>{
        const section=document.createElement('div');section.className='case-source-block';
        section.dataset.caseEvidence='file:'+activeCaseFile+':'+n;
        const p=document.createElement('p');showRedactedText(p,t);section.appendChild(p);
        const pin=document.createElement('button');pin.type='button';pin.className='case-pin-source';
        pin.textContent='Pin paragraph as evidence';
        pin.addEventListener('click',()=>pinCaseEvidence('file:'+activeCaseFile+':'+n));
        section.appendChild(pin);paper.appendChild(section);
      });
      if(casePinsReady)paintCasePins();
      const foot=document.createElement('div');foot.className='case-paper-foot';foot.textContent='RETAINED NEWSROOM COPY · NOT AN OFFICIAL CASE FILE';paper.appendChild(foot);
      document.getElementById('case-page-counter').textContent='DOCUMENT 0'+(activeCaseFile+1)+' / 0'+caseFiles.length;
      document.getElementById('case-narrator-note').textContent=file.note;
      [...caseTabs.children].forEach((el,n)=>{el.classList.toggle('active',n===activeCaseFile);el.setAttribute('aria-pressed',String(n===activeCaseFile))});
      document.getElementById('case-prev').disabled=activeCaseFile===0;
      document.getElementById('case-next').disabled=activeCaseFile===caseFiles.length-1;
      paper.style.fontSize=caseZoom+'%';
    }
    const physicalDesk=document.getElementById('case-physical-desk');
    const lampButton=document.getElementById('desk-bulb');
    lampButton.addEventListener('click',()=>{
      const lit=physicalDesk.classList.toggle('desk-lit');
      lampButton.setAttribute('aria-pressed',String(lit));
      lampButton.setAttribute('aria-label',lit?'Switch desk lamp off':'Switch desk lamp on');
      safelySaveSession();
    });
    document.getElementById('case-prev').addEventListener('click',()=>openCaseFile(activeCaseFile-1));
    document.getElementById('case-next').addEventListener('click',()=>openCaseFile(activeCaseFile+1));
    document.getElementById('case-zoom-in').addEventListener('click',()=>{caseZoom=Math.min(140,caseZoom+10);openCaseFile(activeCaseFile);document.getElementById('case-zoom-label').textContent=caseZoom+'%'});
    document.getElementById('case-zoom-out').addEventListener('click',()=>{caseZoom=Math.max(80,caseZoom-10);openCaseFile(activeCaseFile);document.getElementById('case-zoom-label').textContent=caseZoom+'%'});
    document.getElementById('case-open-reconstruction').addEventListener('click',()=>document.getElementById('case-form-panel').scrollIntoView({behavior:'smooth',block:'center'}));
    let caseNoteDismissed=false;
    document.getElementById('case-note-dismiss').addEventListener('click',()=>{
      const note=document.getElementById('case-archivist-note');
      note.hidden=!note.hidden;
      const folded=document.getElementById('case-note-dismiss');
      folded.setAttribute('aria-expanded',String(!note.hidden));
      if(note.hidden){caseNoteDismissed=true;folded.classList.add('crumpled');folded.setAttribute('aria-label','Open crumpled note');}
      safelySaveSession();
    });
    openCaseFile(0);
    // Four deductions, each requiring actual documents pinned from the desk.
    const caseStages=[
      {title:'01 — Where was he found?',instruction:'Find the confirmed recovery location in the loose inserts.',options:['Canal steps off Station Road','Eastern towpath beneath the old rail bridge','Prince Arthur / Milton Street corner'],answer:'Eastern towpath beneath the old rail bridge',clue:'The first loose insert records the exact location. The Station Road steps were only the way down to the canal.',evidence:['slip:0']},
      {title:'02 — Who was the deceased?',instruction:'Which of the three names is the best-supported match for the unidentified man?',options:['Adam E.','Arthur E.','Martin Vale'],answer:'Adam E.',clue:'Two people fit the birth month and year, but not every surname matches the police description. Compare all three details in the notebook with the enquiry page.',evidence:['file:1:0','slip:1']},
      {title:'03 — When did he die?',instruction:'Use the medical estimate, not the time the emergency call was made.',options:['20 February 18:00–22:00','20 February 22:00 – 21 February 02:00','21 February 02:00–06:00'],answer:'20 February 22:00 – 21 February 02:00',clue:'The doctor examined him at approximately 7 a.m. Count back both ends of the estimated five-to-nine-hour interval.',evidence:['slip:3']},
      {title:'04 — What was the medical cause?',instruction:'Select the cause shown by the injuries, not an unproven explanation of how they occurred.',options:['Drowning in the canal','Fatal blunt-force head injury','A fall onto the towpath'],answer:'Fatal blunt-force head injury',clue:'The hearing notes describe a skull fracture and bleeding inside the head; whether it was an accident or an assault was not established.',evidence:['slip:4']}
    ];
    let caseStage=0,caseTheory='',casePicked=[],caseEditorial='';
    function caseEvidenceDetails(key){
      const match=/^(file|slip):(\d+)(?::(\d+))?$/.exec(key);
      if(!match)return null;
      const i=Number(match[2]);
      if(match[1]==='slip'){
        if(i>=caseInserts.length)return null;
        const slip=caseInserts[i];
        return {label:'SLIP '+String(i+1).padStart(2,'0')+' · '+slip.title,quote:slip.text};
      }
      const para=Number(match[3]);
      const file=caseFiles[i];
      if(!file||!Number.isInteger(para)||para<0||para>=file.body.length)return null;
      return {label:file.ref+' · '+file.title+' / ¶'+(para+1),quote:file.body[para]};
    }
    function paintCasePins(){
      document.querySelectorAll('[data-case-evidence]').forEach(el=>{
        const active=casePicked.includes(el.dataset.caseEvidence);
        el.classList.toggle('case-evidence-selected',active);
        const btn=el.matches('button')?el:el.querySelector('.case-pin-source');
        if(btn){
          btn.setAttribute('aria-pressed',String(active));
          btn.textContent=active?'Pinned ✓':el.matches('button')?'Pin this slip to the deduction':'Pin paragraph as evidence';
        }
      });
      document.getElementById('case-extra-text').classList.toggle('case-evidence-selected',casePicked.includes('slip:'+slipIndex));
    }
    function renderPinnedCaseEvidence(){
      const host=document.getElementById('case-evidence-picks');host.replaceChildren();
      if(!casePicked.length){
        const hint=document.createElement('p');hint.className='case-pin-empty';
        hint.textContent='No supporting documents pinned. Open the notebook or slips and pin a passage.';
        host.append(hint);
      }
      for(const key of casePicked){
        const documentData=caseEvidenceDetails(key);
        if(!documentData)continue;
        const card=document.createElement('div');card.className='case-pin-card';
        const ref=document.createElement('strong');ref.textContent=documentData.label;
        const quote=document.createElement('p');
        quote.textContent='“'+documentData.quote.slice(0,190)+(documentData.quote.length>190?'…':'')+'”';
        const remove=document.createElement('button');remove.type='button';remove.textContent='Remove pin ×';
        remove.addEventListener('click',()=>pinCaseEvidence(key));
        card.append(ref,quote,remove);host.append(card);
      }
    }
    function pinCaseEvidence(key){
      if(!caseEvidenceDetails(key))return;
      const chosen=casePicked.includes(key);
      if(chosen){casePicked=casePicked.filter(k=>k!==key);}
      else if(casePicked.length<2){casePicked.push(key);}
      else{
        document.getElementById('five-feedback').textContent='Only two citations can be pinned. Remove one to make room.';
        return;
      }
      document.getElementById('five-feedback').textContent='';
      paintCasePins();renderPinnedCaseEvidence();safelySaveSession();
    }
    document.getElementById('case-pin-slip').addEventListener('click',()=>pinCaseEvidence('slip:'+slipIndex));

    function renderCaseStage(){
      const stage=caseStages[caseStage];
      document.getElementById('case-stage-title').textContent=stage.title;
      document.getElementById('case-stage-instruction').textContent=stage.instruction;
      document.getElementById('case-stage-count').textContent=String(caseStage+1).padStart(2,'0')+' / 04';
      const progress=document.getElementById('case-progress');progress.replaceChildren();
      caseStages.forEach((_,i)=>{const mark=document.createElement('span');mark.className=i<caseStage?'done':i===caseStage?'current':'';progress.appendChild(mark)});
      const theories=document.getElementById('case-theories');theories.replaceChildren();
      stage.options.forEach(value=>{
        const button=document.createElement('button');button.type='button';button.textContent=value;button.className='case-theory'+(value===caseTheory?' selected':'');
        button.setAttribute('aria-pressed',String(value===caseTheory));
        button.addEventListener('click',()=>{caseTheory=value;document.getElementById('five-feedback').textContent='';renderCaseStage();safelySaveSession()});
        theories.appendChild(button);
      });
      document.querySelector('#case-form-panel .case-support').hidden=false;
      const evidenceHeading=document.querySelector('#case-form-panel .case-support>small');
      evidenceHeading.textContent='SUPPORTING EVIDENCE · '+stage.evidence.length+
        (stage.evidence.length===1?' SOURCE REQUIRED':' SOURCES REQUIRED');
      renderPinnedCaseEvidence();paintCasePins();
      document.getElementById('five-finish').textContent=caseStage===3?'Finish case reconstruction →':'Save finding →';
    }
    document.getElementById('five-finish').addEventListener('click',()=>{
      const stage=caseStages[caseStage],feedback=document.getElementById('five-feedback');
      if(!caseTheory){feedback.textContent='Choose one answer before continuing.';return}
      if(caseTheory!==stage.answer){feedback.textContent=stage.clue;return}
      if(casePicked.length!==stage.evidence.length||!stage.evidence.every(key=>casePicked.includes(key))){
        feedback.textContent='The hypothesis needs a matching document citation'+(stage.evidence.length>1?' from each of two independent records':'')+'. Pin supporting material directly from the notebook or loose slips.';
        return;
      }
      if(caseStage<3){
        caseStage++;caseTheory='';casePicked=[];renderCaseStage();safelySaveSession();
      }else{
        caseEditorial='Evidence inconclusive';
        document.getElementById('case-form-panel').hidden=true;
        const result=document.getElementById('five-result');result.hidden=false;
        result.querySelector('h2').textContent='Case facts reconstructed.';
        result.querySelector('p').textContent='Adam E. was found by the eastern canal towpath. Death was estimated between 10 PM on 20 February and 2 AM on 21 February 1997. The medical cause was a fatal head injury. The records do not establish whether it was an accident, suicide, or homicide.';
        safelySaveSession();
      }
    });
    casePinsReady=true;
    renderCaseStage();

    let fiveOutroPending=false;
    let outroRun=0,outroMusic=null,outroFrame=0;
    const outroTimers=new Set();
    const outroMedia={
      jane:document.getElementById('outro-jane-audio'),
      narrator:document.getElementById('outro-narrator-audio'),
      unknown:document.getElementById('outro-other-audio')
    };
    function outroDelay(fn,ms){
      const id=setTimeout(()=>{outroTimers.delete(id);fn();},ms);
      outroTimers.add(id);return id;
    }
    function clearOutroTimers(){
      for(const id of outroTimers)clearTimeout(id);
      outroTimers.clear();
      if(outroFrame)cancelAnimationFrame(outroFrame);
      outroFrame=0;
    }
    const outroGhost=document.getElementById('outro-ghost-audio');
    // Barely-audible minor-second drone under NATURAL-SPEED voices.
    // Never pitch-shift the actors: the creepiness belongs in the ambience.
    function startOutroMusic(){
      const C=window.AudioContext||window.webkitAudioContext;
      if(!C)return;
      try{
        const ctx=new C(),t=ctx.currentTime;
        if(ctx.state==='suspended')ctx.resume().catch(()=>{});
        const master=ctx.createGain();
        master.gain.setValueAtTime(.0001,t);
        master.gain.exponentialRampToValueAtTime(.042,t+.9);
        master.connect(ctx.destination);
        const sources=[];
        [55,58.27,82.4].forEach((hz,i)=>{
          const osc=ctx.createOscillator(),gain=ctx.createGain();
          osc.type=i===2?'triangle':'sine';osc.frequency.value=hz;gain.gain.value=i===2?.095:.28;
          osc.connect(gain);gain.connect(master);osc.start();sources.push(osc);
        });
        const buffer=ctx.createBuffer(1,ctx.sampleRate,ctx.sampleRate),samples=buffer.getChannelData(0);
        let brown=0;
        for(let i=0;i<samples.length;i++){brown=(brown+.037*(Math.random()*2-1))*.994;samples[i]=brown;}
        const hiss=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),hissGain=ctx.createGain();
        hiss.buffer=buffer;hiss.loop=true;filter.type='lowpass';filter.frequency.value=820;hissGain.gain.value=.10;
        hiss.connect(filter);filter.connect(hissGain);hissGain.connect(master);hiss.start();sources.push(hiss);
        outroMusic={ctx,master,sources};
      }catch(err){console.warn('Ambient audio unavailable',err);}
    }
    function stopOutroMusic(closeAfterMs=430){
      if(!outroMusic)return;
      const music=outroMusic;outroMusic=null;
      try{
        const t=music.ctx.currentTime;
        music.master.gain.cancelScheduledValues(t);
        music.master.gain.setTargetAtTime(.0001,t,.08);
        setTimeout(()=>{
          music.sources.forEach(source=>{try{source.stop();}catch(err){}});
          music.ctx.close().catch(()=>{});
        },closeAfterMs);
      }catch(err){music.ctx.close().catch(()=>{});}
    }

    // One-shot jump-scare sting: a harsh impact followed by a dissonant,
    // descending metallic chord and granular static. It uses the SAME audio
    // context unlocked when the player clicked Continue, so playback does not
    // depend on a second autoplay permission.
    function playOutroJumpScare(){
      if(!outroMusic||outroMusic.ctx.state!=='running')return;
      try{
        const ctx=outroMusic.ctx,t=ctx.currentTime+.015;
        const limiter=ctx.createDynamicsCompressor();
        limiter.threshold.value=-17;limiter.knee.value=4;
        limiter.ratio.value=16;limiter.attack.value=.002;limiter.release.value=.18;
        limiter.connect(ctx.destination);
        const out=ctx.createGain();
        out.gain.setValueAtTime(.0001,t);
        out.gain.linearRampToValueAtTime(.72,t+.009);
        out.gain.setValueAtTime(.67,t+.085);
        out.gain.exponentialRampToValueAtTime(.0001,t+1.66);
        out.connect(limiter);
        // Instant distorted impact / tearing tape.
        const n=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*1.7),ctx.sampleRate);
        const d=n.getChannelData(0);
        for(let i=0;i<d.length;i++){
          const time=i/ctx.sampleRate,gate=(Math.floor(time*55)%7===0?.18:1);
          const edge=time<.12?1:time<.32?.68:Math.exp(-(time-.32)*3.5);
          d[i]=(Math.random()*2-1)*edge*gate;
        }
        const noise=ctx.createBufferSource(),hp=ctx.createBiquadFilter(),ng=ctx.createGain();
        noise.buffer=n;hp.type='highpass';hp.frequency.value=350;
        ng.gain.value=.40;noise.connect(hp);hp.connect(ng);ng.connect(out);
        noise.start(t);noise.stop(t+1.69);
        // A distorted bass drop against tritone- and semitone-spaced notes.
        const pitches=[64,92.5,116.54,174.61,185.0];
        pitches.forEach((freq,i)=>{
          const o=ctx.createOscillator(),g=ctx.createGain(),low=ctx.createBiquadFilter();
          o.type=i===0?'sine':i%2?'sawtooth':'square';
          o.frequency.setValueAtTime(freq*(i===0?1.35:1),t);
          o.frequency.exponentialRampToValueAtTime(freq*(i===0?.70:.83),t+1.3);
          low.type='lowpass';low.frequency.value=i===0?420:1100;
          g.gain.setValueAtTime(.0001,t);
          g.gain.linearRampToValueAtTime(i===0?.32:.095,t+.012);
          g.gain.exponentialRampToValueAtTime(.0001,t+1.65);
          o.connect(low);low.connect(g);g.connect(out);
          o.start(t);o.stop(t+1.68);
        });
        // Rapid, uneven stereo-independent pulses give the sting a glitch edge.
        const chops=ctx.createOscillator(),chopGain=ctx.createGain();
        chops.type='triangle';chops.frequency.value=43;
        chopGain.gain.setValueAtTime(.0001,t);
        chopGain.gain.linearRampToValueAtTime(.12,t+.015);
        chopGain.gain.setValueAtTime(.12,t+.18);
        chopGain.gain.exponentialRampToValueAtTime(.0001,t+.85);
        chops.connect(chopGain);chopGain.connect(out);chops.start(t);chops.stop(t+.86);
      }catch(err){console.warn('RED ACTED sting could not start',err);}
    }
    function outroTitle(year){
      const root=document.getElementById('five-outro');
      root.className='five-outro';
      document.getElementById('outro-reel-id').textContent=year===1986?'01 / 02':'02 / 02';
      document.getElementById('outro-timestamp').textContent=String(year);
      document.getElementById('outro-signal').textContent='SOURCE · UNVERIFIED';
      const title=document.getElementById('outro-title');
      title.hidden=false;title.replaceChildren();
      const date=document.createElement('span');
      date.className='outro-title-year';date.textContent=year+' —';
      const name=document.createElement('span');name.textContent=year===1986?'JANE /':'UNKNOWN';
      title.append(date,name);
      if(year===1986){
        const censored=document.createElement('span');censored.className='outro-title-redacted';
        censored.textContent='REDACTED';title.append(censored);
      }
      document.getElementById('outro-dialogue').hidden=true;
      document.getElementById('outro-redacted-end').hidden=true;
    }
    function outroSubtitle(speaker,line,kind,year){
      const root=document.getElementById('five-outro');
      root.className='five-outro '+kind;
      document.getElementById('outro-title').hidden=true;
      document.getElementById('outro-dialogue').hidden=false;
      document.getElementById('outro-speaker').textContent=speaker;
      document.getElementById('outro-caption').textContent=line;
      document.getElementById('outro-signal').textContent=kind==='outro-unknown'?'WARNING · SIGNAL CORRUPTED':'PLAYBACK · UNSTABLE';
      document.getElementById('outro-timestamp').textContent=String(year);
    }
    const outroSpeech={
      jane:{duration:7.079,year:1986,speaker:'JANE',kind:'outro-jane',
        cues:[
          {at:0,line:'You know that school debate I covered last week?'},
          {at:2.77,line:'There was a boy there, Adam.'},
          {at:4.60,line:'Really sharp.'},
          {at:5.70,line:"I reckon he'll go far."}
        ]},
      narrator:{duration:2.717,year:1986,speaker:'[REDACTED]',kind:'outro-narrator',
        cues:[{at:0,line:'Adam?'},{at:1.545,line:'Interesting.'}]},
      unknown:{duration:5.381,cutoff:4.695,year:2027,speaker:'UNKNOWN',kind:'outro-unknown',
        cues:[
          {at:0,line:'Wait, what?'},
          {at:1.81,line:"There's another file?"},
          {at:3.18,line:"Why didn't anyone look at this bef—"}
        ]}
    };
    function triggerFinalGlitch(run){
      if(!fiveOutroPending||run!==outroRun)return;
      Object.values(outroMedia).forEach(a=>a.pause());
      outroGhost.pause();
      const root=document.getElementById('five-outro');
      root.className='five-outro outro-final-glitch';
      document.getElementById('outro-title').hidden=true;
      document.getElementById('outro-dialogue').hidden=true;
      document.getElementById('outro-redacted-end').hidden=false;
      playOutroJumpScare();
      // Leave the sound context alive until the full sting has rung out.
      stopOutroMusic(2050);
      outroDelay(()=>finishOutro(run),1750);
    }
    function playOutroVoice(key,run){
      if(!fiveOutroPending||run!==outroRun)return;
      const audio=outroMedia[key],conf=outroSpeech[key];
      let finished=false,lastCue=-1,fallback=false;
      let hardCutTimer=null;
      const cutoffNow=()=>{if(!finished&&key==='unknown'&&!fallback)advance();};
      const onMediaProgress=()=>{if(conf.cutoff&&audio.currentTime>=conf.cutoff)cutoffNow();};
      const render=time=>{
        let next=0;
        conf.cues.forEach((cue,i)=>{if(time>=cue.at)next=i});
        if(next!==lastCue){
          lastCue=next;
          outroSubtitle(conf.speaker,conf.cues[next].line,conf.kind,conf.year);
        }
      };
      const advance=()=>{
        if(finished||run!==outroRun)return;
        finished=true;
        if(key==='unknown')audio.muted=true; // Mute synchronously, then stop the source.
        audio.pause();audio.onended=null;audio.onerror=null;
        audio.removeEventListener('timeupdate',onMediaProgress);
        if(hardCutTimer!==null){clearTimeout(hardCutTimer);hardCutTimer=null;}
        if(key==='narrator')outroGhost.pause();
        if(outroFrame)cancelAnimationFrame(outroFrame);
        if(key==='jane')outroDelay(()=>playOutroVoice('narrator',run),650);
        else if(key==='narrator')outroDelay(()=>{outroTitle(2027);outroDelay(()=>playOutroVoice('unknown',run),1850);},1100);
        else triggerFinalGlitch(run);
      };
      const silentFallback=()=>{
        if(finished||fallback)return;
        fallback=true;audio.pause();
        const deadline=conf.cutoff||conf.duration;
        conf.cues.slice(1).forEach(c=>outroDelay(()=>{
          if(!finished&&run===outroRun)render(c.at);
        },c.at*1000));
        outroDelay(advance,deadline*1000);
      };
      render(0);
      audio.muted=false;
      audio.playbackRate=1;
      audio.volume=key==='narrator'?.86:.96;
      try{audio.currentTime=0;}catch(err){}
      if(key==='narrator'){
        outroGhost.pause();
        try{outroGhost.currentTime=0;}catch(err){}
        outroGhost.volume=.18;
        outroGhost.playbackRate=1;
      }
      audio.onerror=silentFallback;
      audio.onended=advance;
      const tick=()=>{
        if(finished||fallback||run!==outroRun)return;
        render(audio.currentTime||0);
        // Cut decisively at B-E-F, without allowing the vowel in "before".
        if(conf.cutoff && audio.currentTime>=conf.cutoff){cutoffNow();return;}
        outroFrame=requestAnimationFrame(tick);
      };
      try{
        const p=audio.play();
        if(p&&typeof p.then==='function')p.then(()=>{
          if(!fallback&&!finished){
            if(key==='unknown'){
              // Audio clocks can lag a paint frame: the timeout is an
              // independent wall-clock stop, and timeupdate covers seeking.
              audio.addEventListener('timeupdate',onMediaProgress);
              hardCutTimer=setTimeout(cutoffNow,Math.round(conf.cutoff*1000));
            }
            tick();
            if(key==='narrator')outroDelay(()=>{
              if(finished||fallback||run!==outroRun)return;
              // A subtle delayed reflection: unsettling without pitch-shifting speech.
              const ghostPlay=outroGhost.play();
              if(ghostPlay&&typeof ghostPlay.catch==='function')ghostPlay.catch(()=>{});
            },230);
          }
        }).catch(silentFallback);
        else tick();
      }catch(err){silentFallback();}
      // Fallback is captions and atmosphere only: never robotic browser TTS.
      outroDelay(()=>{
        if(!finished&&!fallback&&run===outroRun&&audio.readyState<2)silentFallback();
      },1600);
      outroDelay(()=>{
        if(!finished&&run===outroRun)advance();
      },(conf.cutoff||conf.duration)*1000+2200);
    }
    function finishOutro(run){
      if(!fiveOutroPending||run!==outroRun)return;
      fiveOutroPending=false;clearOutroTimers();
      Object.values(outroMedia).forEach(a=>{a.pause();a.onended=null;a.onerror=null;});
      outroGhost.pause();
      stopOutroMusic();
      const root=document.getElementById('five-outro');root.hidden=true;root.className='five-outro';
      show('complete');
    }
    function flashAfterFive(){
      if(fiveOutroPending||(!developerPreview&&document.getElementById('five-result').hidden))return;
      fiveOutroPending=true;
      const run=++outroRun;
      document.getElementById('five-outro').hidden=false;
      startOutroMusic();
      outroTitle(1986);
      outroDelay(()=>playOutroVoice('jane',run),1700);
      // A media play promise or external voice download must never strand the
      // player on the recording screen. The normal ending takes ~25 seconds;
      // this is a last-resort completion guard, not a skipped scene.
      outroDelay(()=>{if(fiveOutroPending&&run===outroRun)finishOutro(run);},45000);
    }
    // The Continue listeners are registered centrally in core.js so a
    // problem initializing the physical desk cannot leave them unbound.
