    // Local development preview only. This flag is NOT authentication or content protection.
    const developerPreview = new URLSearchParams(window.location.search).get("dev") === "1";
    const devNavigation = document.getElementById("dev-navigation");
    if (developerPreview) devNavigation.hidden = false;
    // The original completion narration is preserved for public and developer views.

    const archivedArticles={
      orchards:{title:"New Concerns Raised About Pesticide Use Near Orchards",section:"LOCAL NEWS",paragraphs:[
        "Residents along the northern edge of town have asked the council to review pesticide spraying near commercial orchards following complaints about drifting chemicals and strong odours during the growing season. Several households said they received little advance notice of the most recent application.",
        "Orchard operators maintain that spraying is conducted in accordance with current agricultural guidance. A representative said the work was necessary to protect crops and that crews had been instructed to avoid periods of high wind.",
        "Council members have requested further information from local environmental officers before deciding whether additional restrictions are warranted. A public discussion is expected at next month's council meeting. Residents have been encouraged to submit written accounts of any incidents."
      ]},
      debate:{title:"Students Bring Home Regional Debate Victory",section:"EDUCATION",paragraphs:[
        "The town's secondary school debate team returned with the regional championship title on Friday after defeating six competing schools in a day of closely contested rounds. The final debate, held before a panel of teachers and visiting adjudicators, was decided by a narrow margin.",
        "One of the team's speakers received particular praise for his closing argument, which challenged several assumptions made earlier in the competition. His coach described him as unusually gifted.",
        "The coach credited the team's success to months of preparation and an enthusiasm for questioning even the most convincing arguments.",
        "The school plans to recognise the students at its next assembly. Organisers said this year's tournament attracted a larger field than in previous years, reflecting growing interest in competitive debating across the district."
      ]},
            library:{title:"Town Library Unveils Newly Restored Reading Hall",section:"COMMUNITY",paragraphs:[
        "The town library reopened its main reading hall this week following a programme of repairs intended to preserve one of the building's most frequently used public spaces. The work included restoration of the original woodwork, repairs to several windows and the installation of improved reading lamps.",
        "Library staff said the renovation was planned around the hall's historic features, many of which had deteriorated after years of daily use. Regular visitors attending the reopening welcomed the brighter room, although some expressed concern about the temporary reduction in available seating.",
        "The library expects to resume its full programme of public readings and school visits next month. Officials said additional improvements to the building remain under consideration, subject to approval of next year's budget."
      ]}
    };
        const articleModal=document.getElementById('article-modal');
    const articleBody=document.getElementById('article-body');
    document.querySelectorAll('.archive-open').forEach(button=>button.addEventListener('click',()=>{
      const article=archivedArticles[button.dataset.article];
      articleBody.replaceChildren();
      const images={orchards:'orchards-article.png',debate:'debate-article.png',library:'library-article.png'};
      const scan=document.createElement('img');
      scan.className='archived-full-clipping';
      scan.src=images[button.dataset.article];
      scan.alt=article.title;
      articleBody.appendChild(scan);
      if(button.dataset.article==='debate'){
        const caption=document.createElement('p');
        caption.className='archive-supplement';
        caption.textContent='Photograph caption, filed separately: The closing speaker is pictured with the small red notebook he carried to every round.';
        articleBody.appendChild(caption);
      }
      articleModal.hidden=false;articleModal.setAttribute('aria-hidden','false');
    }));
    function closeArchivedArticle(){articleModal.hidden=true;articleModal.setAttribute('aria-hidden','true')}
    document.getElementById('close-article').addEventListener('click',closeArchivedArticle);
    articleModal.addEventListener('click',event=>{if(event.target===articleModal)closeArchivedArticle()});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!articleModal.hidden)closeArchivedArticle()});
    const originalTranscript = [
      'After a lengthy public hearing, the town council voted 114 on June 13 to approve renovation plans for Market Square.',
      'Several residents described the proposed redesign as necessary, citing concerns about the loss of parking and the cost of replacing the original stone pavement.',
      'Officials said the work would begin in 1996, once the necessary permits had been issued. Local shopkeepers were told that pedestrian access would be maintained throughout construction.'
    ];
    const transcriptionErrors = new Set(['114','13','necessary:0','1996']);
    const markedTranscript = new Set();
    const feedback=document.getElementById('feedback');
    const verify=document.getElementById('verify');
    function renderTranscript(){
      const host=document.getElementById('transcription-text');host.replaceChildren();
      let necessaryCount=0;
      originalTranscript.forEach(paragraph=>{
        const p=document.createElement('p');
        paragraph.split(/(\s+)/).forEach(piece=>{
          if(/^\s+$/.test(piece)){p.append(document.createTextNode(piece));return;}
          const word=piece.replace(/^[^\w]+|[^\w]+$/g,'');
          const key=word==='necessary'?'necessary:'+(necessaryCount++):word;
          const b=document.createElement('button');b.type='button';b.className='transcript-word';b.textContent=piece;
          b.dataset.key=key;b.setAttribute('aria-pressed',String(markedTranscript.has(key)));
          b.addEventListener('click',()=>{
            if(markedTranscript.has(key))markedTranscript.delete(key);else markedTranscript.add(key);
            b.classList.toggle('marked',markedTranscript.has(key));b.setAttribute('aria-pressed',String(markedTranscript.has(key)));
            feedback.classList.remove('error');feedback.textContent='Review your marks, then verify the transcription.';
          });p.appendChild(b);
        });host.appendChild(p);
      });
    }
    function reset(){
      markedTranscript.clear();renderTranscript();feedback.classList.remove('error');
      feedback.textContent='Select four suspected transcription errors.';
    }
    const articles=[
      {id:'library',date:'MONDAY, SEPTEMBER 14, 1992',order:19920914,title:'Town Library Reopens After Six-Month Renovation',image:'library.jpg'},
      {id:'fair',date:'SATURDAY, JUNE 3, 1995',order:19950603,title:'Annual Summer Fair Draws Record Crowds',image:'fair.jpg'},
      {id:'bus',date:'THURSDAY, FEBRUARY 21, 1991',order:19910221,title:'New Bus Route Approved Following Residents’ Petition',image:'bus.jpg'},
      {id:'science',date:'MONDAY, NOVEMBER 8, 1993',order:19931108,title:'Local Students Win Regional Science Competition',image:'science.jpg'}
    ];

    const initialOrder=['fair','science','library','bus'];
    let sortOrder=[...initialOrder];
    let draggedId=null;

    const sections={readOne:document.getElementById("read-one"),readTwo:document.getElementById("read-two"),readThree:document.getElementById("read-three"),readFour:document.getElementById("read-four"),home:document.getElementById('home'),level:document.getElementById('level-one'),two:document.getElementById('level-two'),three:document.getElementById('level-three'),four:document.getElementById('level-four'),readFive:document.getElementById('read-five'),five:document.getElementById('level-five'),complete:document.getElementById('completed'),six:document.getElementById('level-six'),sixAfter:document.getElementById('sixAfter')};
    const sortFeedback=document.getElementById('sort-feedback');
    const modal=document.getElementById('modal');
    const modalTitle=document.getElementById('modal-title');
    const modalImage=document.getElementById('modal-image');
    const SESSION_KEY='the-meridian-session-v1';
    const LEVEL_FOUR_MAP_VERSION=2;
    let sessionRestoring=false;
    function safelySaveSession(){
      if(sessionRestoring)return;
      try{
        const section=document.getElementById('dev-level').value||'home';
        const puzzleThree=[...document.querySelectorAll('#answer-fields select')].map(el=>el.value);
        const gridMarks=[...document.querySelectorAll('.logic-cell')].map(el=>el.textContent);
        const draftFour=fourMarker?{lat:fourMarker.lat,lng:fourMarker.lng,bearing:Number(fourBearing.value)}:null;
        localStorage.setItem(SESSION_KEY,JSON.stringify({version:1,section,furthestSection,sortOrder:[...sortOrder],markedTranscript:[...markedTranscript],puzzleThree,gridMarks,fourCurrent,fourGuesses,fourVerified,draftFour,mapVersion:LEVEL_FOUR_MAP_VERSION,caseFile:activeCaseFile,caseZoom,caseNotepad:document.getElementById('case-notepad').value,caseStage,caseTheory,casePicked,caseEditorial,deskOpen,slipIndex,caseNoteOpen:!document.getElementById('case-archivist-note').hidden,caseNoteDismissed,caseVerified:!document.getElementById('five-result').hidden,caseLampOn:physicalDesk.classList.contains('desk-lit')}));
      }catch(err){/* Browsers with storage disabled may still play normally. */}
    }
    function restoreSession(){
      let data;
      try{data=JSON.parse(localStorage.getItem(SESSION_KEY)||'null');}catch(err){return;}
      if(!data||data.version!==1)return;
      sessionRestoring=true;
      try{
        if(Array.isArray(data.sortOrder)&&data.sortOrder.length===sortOrder.length&&sortOrder.every(id=>data.sortOrder.includes(id))){sortOrder=[...data.sortOrder];renderClippings();}
        if(Array.isArray(data.markedTranscript)){markedTranscript.clear();data.markedTranscript.forEach(key=>markedTranscript.add(key));renderTranscript();}
        if(Array.isArray(data.puzzleThree))document.querySelectorAll('#answer-fields select').forEach((el,i)=>{if(typeof data.puzzleThree[i]==='string')el.value=data.puzzleThree[i]});
        if(Array.isArray(data.gridMarks))document.querySelectorAll('.logic-cell').forEach((el,i)=>{const v=data.gridMarks[i];if(['','×','✓'].includes(v)){el.textContent=v;el.dataset.state=String(['','×','✓'].indexOf(v));}});
        if(typeof data.caseNotepad==='string')document.getElementById('case-notepad').value=data.caseNotepad;
        if(Number.isInteger(data.caseStage))caseStage=Math.min(3,Math.max(0,data.caseStage));
        if(typeof data.caseTheory==='string')caseTheory=data.caseTheory;
        if(Array.isArray(data.casePicked))casePicked=data.casePicked.filter(x=>typeof x==='string').slice(0,2);
        if(typeof data.caseEditorial==='string')caseEditorial=data.caseEditorial;
        renderCaseStage();
        if(Number.isInteger(data.caseZoom))caseZoom=Math.min(140,Math.max(80,data.caseZoom));
        if(Number.isInteger(data.caseFile))openCaseFile(data.caseFile);
        document.getElementById('case-zoom-label').textContent=caseZoom+'%';
        if(data.caseLampOn===true)lampButton.click();
        if(data.caseNoteDismissed){caseNoteDismissed=true;document.getElementById('case-note-dismiss').classList.add('crumpled');document.getElementById('case-note-dismiss').setAttribute('aria-label','Open crumpled note');}if(data.caseNoteOpen)document.getElementById('case-note-dismiss').click();
        if(data.caseVerified){document.getElementById('case-form-panel').hidden=true;document.getElementById('five-result').hidden=false;}
        if(Number.isInteger(data.slipIndex))slipIndex=Math.max(0,Math.min(5,data.slipIndex));
        if(['book','slips','pad','case'].includes(data.deskOpen))openDeskView(data.deskOpen);
        furthestSection=Math.max(0,Math.min(progressOrder.length-1,Number(data.furthestSection)||0));
        if(!developerPreview)furthestSection=Math.min(furthestSection,progressOrder.indexOf('complete'));
        // Continue old public-demo saves into the newly released fifth assessment.
        const legacyDemoEnd=data.section==='complete' && data.caseVerified!==true;
        if(legacyDemoEnd)furthestSection=Math.max(furthestSection,progressOrder.indexOf('readFive'));
        if(data.mapVersion===LEVEL_FOUR_MAP_VERSION&&Array.isArray(data.fourGuesses))data.fourGuesses.slice(0,3).forEach((guess,i)=>{fourGuesses[i]=guess});
        if(data.mapVersion===LEVEL_FOUR_MAP_VERSION&&Number.isInteger(data.fourCurrent)&&data.fourCurrent>=0&&data.fourCurrent<3){fourCurrent=data.fourCurrent;renderFourPhoto();}
        const section=legacyDemoEnd?'readFive':progressOrder.includes(data.section)&&progressOrder.indexOf(data.section)<=furthestSection?data.section:'home';
        show(section,false);
        if(data.mapVersion===LEVEL_FOUR_MAP_VERSION&&data.draftFour&&section==='four'&&window.L)requestAnimationFrame(()=>{if(!fourLeaflet)ensureFourMap();if(fourLeaflet){updateFourMarker(data.draftFour.lat,data.draftFour.lng);fourBearing.value=String(data.draftFour.bearing||0);updateBearing();if(data.fourVerified){fourVerified=true;document.getElementById('four-next').textContent=fourCurrent===2?'Review reconstructed records':'Next photograph';}}});
      }catch(err){show('home',false);}
      finally{sessionRestoring=false;}
    }
    const progressOrder=['home','readOne','level','readTwo','two','readThree','three','readFour','four','readFive','five','complete','six','sixAfter'];
    let sixWarningSeen=false;
    let furthestSection=0;
    const historySelect=document.getElementById('history-select');
    const historyNav=document.getElementById('player-history');
    const historyTrigger=document.getElementById('history-trigger');
    const historyMenu=document.getElementById('history-menu');
    function closeHistory(){historyMenu.hidden=true;historyTrigger.setAttribute('aria-expanded','false')}
    historyTrigger.addEventListener('click',()=>{
      const open=historyMenu.hidden;
      historyMenu.hidden=!open;
      historyTrigger.setAttribute('aria-expanded',String(open));
      if(open)historyMenu.querySelector('button')?.focus();
    });
    document.addEventListener('click',e=>{if(!historyNav.contains(e.target))closeHistory()});
    historyNav.addEventListener('keydown',e=>{if(e.key==='Escape'){closeHistory();historyTrigger.focus()}});

    const historyNames={home:'Home',readOne:'Level 1 introduction',level:'Level 1',readTwo:'Level 2 introduction',two:'Level 2',readThree:'Level 3 introduction',three:'Level 3',readFour:'Level 4 introduction',four:'Level 4',readFive:'Level 5 introduction',five:'Level 5',six:'Level 6 proof (developer)',sixAfter:'Level 6 aftermath (developer)'};
    function canRevisit(section){
      const index=progressOrder.indexOf(section);
      return index>=0 && (developerPreview || index<=furthestSection);
    }
    function refreshHistory(current){
      historySelect.replaceChildren();
      historyMenu.replaceChildren();
      const index=progressOrder.indexOf(current);
      progressOrder.slice(0,furthestSection+1).forEach((section,i)=>{
        if(!canRevisit(section))return;
        if(section==='complete'||i===index)return;
        const label=historyNames[section]||section;
        const option=document.createElement('option');option.value=section;option.textContent=label;historySelect.appendChild(option);
        const button=document.createElement('button');button.type='button';button.setAttribute('role','menuitem');button.textContent=label;
        if(section==='home'||section.startsWith('read'))button.classList.add('history-intro');
        button.addEventListener('click',()=>{closeHistory();if(canRevisit(section))show(section,false)});
        historyMenu.appendChild(button);
      });
      historyNav.hidden=furthestSection===0||historyMenu.children.length===0;
      if(!historyNav.hidden)historySelect.selectedIndex=-1;
      closeHistory();
    }
    let pageTransitionBusy=false;
    function enterPuzzle(section,caption){
      if(pageTransitionBusy)return;
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){show(section);return;}
      pageTransitionBusy=true;
      const screen=document.getElementById('page-transition');
      document.getElementById('transition-caption').textContent=caption;
      screen.classList.add('open');
      window.setTimeout(()=>{
        show(section);
        window.setTimeout(()=>{screen.classList.remove('open');pageTransitionBusy=false;},210);
      },320);
    }
    function show(section,recordProgress=true){
      // All five assessments are publicly playable; the progress guard below still applies.
      // Untrusted navigation (history, manually changed dropdown, or restored view)
      // must not advance progress. Forward story transitions explicitly record progress.
      if(!recordProgress && !canRevisit(section))return;
      if(!developerPreview&&(section==='six'||section==='sixAfter'))section='complete';
      if(recordProgress){const index=progressOrder.indexOf(section);if(index>furthestSection)furthestSection=index;}
      // Horror styling belongs only to the unreleased Level 6 screens.
      // Leaving Level 6 must restore the standard dark Meridian site.
      document.body.classList.toggle('blood-era',
        developerPreview&&(section==='six'||section==='sixAfter'));
      document.body.classList.toggle('game-active',section!=='home');
      Object.entries(sections).forEach(([name,element])=>element.hidden=name!==section);
      document.getElementById('dev-level').value=section;
      refreshHistory(section);
      window.scrollTo({top:0,left:0,behavior:'instant'});
      if(section==='four')requestAnimationFrame(()=>ensureFourMap());
      // First Level 6 visit: warning is system text, not spoken by the Archivist.
      if(developerPreview&&section==='six'&&!sixWarningSeen){
        sixWarningSeen=true;
        document.getElementById('six-warning').hidden=false;
        document.body.classList.add('six-intro-lock');
        requestAnimationFrame(()=>document.getElementById('six-warning-continue').focus());
      }
      if(recordProgress)safelySaveSession();
    }
    document.getElementById('six-warning-continue').addEventListener('click',()=>{
      const dialog=document.getElementById('six-warning');
      dialog.hidden=true;
      document.body.classList.remove('six-intro-lock');
      document.getElementById('six-title').focus({preventScroll:true});
    });
    historySelect.addEventListener('change',e=>{if(canRevisit(e.target.value))show(e.target.value,false);else refreshHistory(document.getElementById('dev-level').value)});
    
    function getArticle(id){return articles.find(a=>a.id===id)}

    function openModal(article){
      modalTitle.textContent=article.title;
      modalImage.src=article.image;
      modalImage.alt=`Enlarged clipping: ${article.title}`;
      modal.hidden=false;
      modal.setAttribute('aria-hidden','false');
    }

    function closeModal(){
      modal.hidden=true;
      modal.setAttribute('aria-hidden','true');
      modalImage.src='';
    }

    function renderClippings(){
      const host=document.getElementById('clipping-grid');
      host.replaceChildren();
      sortOrder.forEach((id,index)=>{
        const article=getArticle(id);
        const card=document.createElement('article');
        card.className='clipping-card';card.dataset.id=id;card.draggable=true;
        const pin=document.createElement('span');pin.className='cork-pin';pin.setAttribute('aria-hidden','true');card.appendChild(pin);
        card.setAttribute('aria-label',`Position ${index+1}: ${article.title}. Drag to rearrange`);
        card.tabIndex=0;
        card.addEventListener('dragstart',e=>{draggedId=id;card.classList.add('dragging');e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',id)});
        card.addEventListener('dragend',()=>{draggedId=null;document.querySelectorAll('.clipping-card').forEach(x=>x.classList.remove('dragging','drag-over'))});
        card.addEventListener('dragover',e=>{e.preventDefault();card.classList.add('drag-over')});
        card.addEventListener('dragleave',()=>card.classList.remove('drag-over'));
        card.addEventListener('drop',e=>{e.preventDefault();reorderList(id)});
        // Touch-friendly fallback: select one card then tap another card to move it.
        card.addEventListener('click',e=>{if(e.target.closest('button'))return;if(selectedClipping===null){selectedClipping=id;card.classList.add('chosen')}else{const from=selectedClipping;selectedClipping=null;moveCard(from,id)}});
        const zoom=document.createElement('button');zoom.type='button';zoom.className='zoom-button';zoom.textContent='View larger ↗';zoom.addEventListener('click',()=>openModal(article));
        const img=document.createElement('img');img.src=article.image;img.alt=`Scanned article: ${article.title}`;img.draggable=false;
        const caption=document.createElement('div');caption.className='clipping-caption';caption.textContent=`${String(index+1).padStart(2,'0')} · ${article.title}`;
        card.append(img,caption,zoom);host.appendChild(card);
      });
    }
    let selectedClipping=null;
    function moveCard(source,target){
      if(source!==target){const from=sortOrder.indexOf(source),to=sortOrder.indexOf(target);if(from>=0&&to>=0){sortOrder.splice(from,1);sortOrder.splice(to,0,source)}}
      selectedClipping=null;renderClippings();sortFeedback.classList.remove('error');sortFeedback.textContent='Order updated. Submit when you’re ready.';
    }
    function reorderList(target){if(draggedId)moveCard(draggedId,target)}
    function isCorrectOrder(){
      for(let i=1;i<sortOrder.length;i++){
        if(getArticle(sortOrder[i-1]).order>getArticle(sortOrder[i]).order) return false;
      }
      return true;
    }

    document.getElementById('get-started').addEventListener('click',()=>{reset();show('readOne')});
    document.getElementById('begin-one').addEventListener('click',()=>enterPuzzle('level','UNFOLDING TRANSCRIPT'));
    document.getElementById('begin-two').addEventListener('click',()=>enterPuzzle('two','PINNING THE CLIPPINGS'));
    document.getElementById('reset').addEventListener('click',reset);
    verify.addEventListener('click',()=>{if(markedTranscript.size===4 && [...markedTranscript].every(key=>transcriptionErrors.has(key))){show('readTwo')}else{feedback.classList.add('error');feedback.textContent='Not quite. Check the original clipping again and reconsider your four marks.'}});
    document.getElementById('return-home').addEventListener('click',()=>{reset();sortOrder=[...initialOrder];renderClippings();show('home')});
    document.getElementById('sort-reset').addEventListener('click',()=>{
      sortOrder=[...initialOrder];
      renderClippings();
      sortFeedback.textContent='Drag the clippings into chronological order.';
      sortFeedback.classList.remove('error');
    });
    document.getElementById('sort-verify').addEventListener('click',()=>{
      if(isCorrectOrder()){
        show('readThree');
      }else{
        sortFeedback.textContent='Ah, not quite! These old scans aren’t always easy to read. Try once more?';
        sortFeedback.classList.add('error');
      }
    });
    document.getElementById('close-modal').addEventListener('click',closeModal);
    modal.addEventListener('click',e=>{if(e.target===modal) closeModal()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape' && !modal.hidden) closeModal()});

    renderClippings();
    const sampleArticles=['Pesticides','School Debate Victory','Library Renovation'];
    const sampleReporters=['Harriet','Jane','Elliot'];
    const sampleSections=['1986','1991','1998'];
    const gridReporterOrder=['Jane','Elliot','Harriet'];
    const gridYearOrder=['1998','1986','1991'];
    const pairs=[['Stories × Reporters',sampleArticles,gridReporterOrder],['Stories × Years',sampleArticles,gridYearOrder],['Reporters × Years',gridReporterOrder,gridYearOrder]];
    function renderLogicGrid(){
      const host=document.getElementById('logic-grids');host.replaceChildren();
      pairs.forEach(([name,rows,columns],index)=>{
        const panel=document.createElement('div');panel.className='logic-panel';
        panel.classList.add('logic-panel-'+index);
        const heading=document.createElement('h3');heading.textContent=name;
        const table=document.createElement('table');table.className='logic-table';
        const tr=document.createElement('tr');const corner=document.createElement('th');corner.textContent='';tr.appendChild(corner);
        columns.forEach(c=>{const th=document.createElement('th');th.textContent=c;tr.appendChild(th)});table.appendChild(tr);
        rows.forEach(r=>{
          const row=document.createElement('tr');const th=document.createElement('th');th.textContent=r;row.appendChild(th);
          columns.forEach(c=>{
            const td=document.createElement('td'),b=document.createElement('button');
            b.type='button';b.className='logic-cell';b.setAttribute('aria-label',r+' and '+c+': unmarked');
            b.addEventListener('click',()=>{
              const states=['','×','✓'];const next=(states.indexOf(b.textContent)+1)%3;
              b.textContent=states[next];b.dataset.state=String(next);
              b.setAttribute('aria-label',r+' and '+c+': '+['unmarked','ruled out','confirmed'][next]);
            });
            td.appendChild(b);row.appendChild(td);
          });table.appendChild(row);
        });
        panel.append(heading,table);host.appendChild(panel);
      });
      const stamp=document.createElement('div');stamp.className='board-stamp';stamp.innerHTML='<span>M.</span><small>THE MERIDIAN<br>ARCHIVE RECORD 03</small>';host.appendChild(stamp);
    }
    function renderAnswers(){
      const host=document.getElementById('answer-fields');host.replaceChildren();
      sampleArticles.forEach((article,i)=>{
        const row=document.createElement('div');row.className='answer-row';
        const title=document.createElement('strong');title.textContent=article;row.append(title);
        [sampleReporters,sampleSections].forEach((options,j)=>{const select=document.createElement('select');select.dataset.article=String(i);select.dataset.kind=String(j);const empty=document.createElement('option');empty.value='';empty.textContent=j?'Choose year':'Choose reporter';select.appendChild(empty);[...options].sort(()=>Math.random()-.5).forEach(x=>{const o=document.createElement('option');o.value=x;o.textContent=x;select.appendChild(o)});row.appendChild(select)});
        host.appendChild(row);
      });
    }
    const intro=document.getElementById('narrator-intro'),workspace=document.getElementById('deduction-workspace');
    document.getElementById('begin-three').addEventListener('click',()=>enterPuzzle('three','OPENING EDITORIAL FILE'));
    document.getElementById('read-guide').addEventListener('click',()=>show('readThree'));
    document.getElementById('check-three').addEventListener('click',()=>{
      const selections=[...document.querySelectorAll('#answer-fields select')].map(x=>x.value);
      const correct=['Harriet','1991','Jane','1986','Elliot','1998'];
      const f=document.getElementById('three-feedback');
      if(selections.every((v,i)=>v===correct[i])){flashToLevelFour()}else{f.textContent='Not quite! Have another look at the editorial notes. I know you can work it out.';f.classList.add('error')}
    });
    document.getElementById('dev-level').addEventListener('change',e=>{if(developerPreview)show(e.target.value,false)});
    // DEV ONLY — bypass puzzles while preserving scripted transitions. Remove before release.
    document.getElementById('dev-pass').addEventListener('click',()=>{
      if(!developerPreview)return;
      const current=document.getElementById('dev-level').value;
      const next={home:'readOne',readOne:'level',level:'readTwo',readTwo:'two',two:'readThree',readThree:'three',three:'flashFour',readFour:'four',four:'flashFive',readFive:'five',five:'flashOutro',complete:'six',six:'sixBreach',sixAfter:'six'};
      const destination=next[current];
      if(destination==='flashFour')flashToLevelFour();
      else if(destination==='flashFive')flashToLevelFive();
      else if(destination==='flashOutro')flashAfterFive();
      else if(destination==='sixBreach'&&window.MeridianSix)window.MeridianSix.breach();
      else if(destination)show(destination,false);
    });
    document.getElementById('begin-four').addEventListener('click',()=>enterPuzzle('four','UNROLLING THE SURVEY'));
    document.getElementById('begin-five').addEventListener('click',()=>enterPuzzle('five','OPENING CASE DOSSIER'));
