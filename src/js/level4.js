    // New survey uses image pixels (1448 x 1086); Leaflet lat = 1086 - image y.
    const fourPhotos=[
      {label:'A',file:'towncentre-left-readable.jpg',ref:'PH–01',answer:{lat:565,lng:1105,bearing:270},site:'Albert Road / Meridian Secondary School'},
      {label:'B',file:'station-road2.jpg',ref:'PH–02',answer:{lat:753,lng:1070,bearing:286},site:'Station Road / Filling Station approach'},
      {label:'C',file:'pub.jpg',ref:'PH–03',answer:{lat:500,lng:1010,bearing:315},site:'Prince Arthur / Milton Street corner'}
    ];
    const fourLandmarks=[
      {name:'West Bridge',lat:735,lng:153},
      {name:'Civic Hall',lat:744,lng:446},
      {name:'Clock Tower',lat:786,lng:676},
      {name:'Meridian Station',lat:1012,lng:808},
      {name:'Filling Station',lat:744,lng:1210},
      {name:'Prince Arthur Public House',lat:583,lng:929},
      {name:'Library',lat:462,lng:811},
      {name:'Meridian Secondary School',lat:416,lng:1260}
    ];
    const fourChecks=[{location:75,bearing:45},{location:70,bearing:30},{location:105,bearing:55}];
    const fourGuesses=[];let fourCurrent=0,fourMarker=null,fourLeaflet=null,fourCameraMarker=null,fourVerified=false;
    const fourBearing=document.getElementById('four-bearing'),fourBearingOutput=document.getElementById('four-bearing-output');
    function formatBearing(v){const deg=Number(v);return ['North','North-east','East','South-east','South','South-west','West','North-west'][Math.round(deg/45)%8]+' · '+deg+'°'}
    function cameraIcon(){return L.divIcon({className:'meridian-camera',html:'<svg width="52" height="52" viewBox="0 0 52 52"><g transform="rotate('+fourBearing.value+' 26 26)"><path d="M26 19V4 M20 12L26 4L32 12" stroke="#343b38" stroke-width="2" fill="none"/></g><circle cx="26" cy="26" r="7.5" fill="#f5f1e7" stroke="#343b38" stroke-width="2"/><circle cx="26" cy="26" r="2" fill="#343b38"/></svg>',iconSize:[52,52],iconAnchor:[26,26]})}
    function updateBearing(){fourBearingOutput.textContent=formatBearing(fourBearing.value);if(fourCameraMarker)fourCameraMarker.setIcon(cameraIcon());if(fourMarker){fourVerified=false;document.getElementById('four-next').textContent='Check position';}}
    fourBearing.addEventListener('input',updateBearing);
    function nearestLandmark(lat,lng){let best=fourLandmarks[0],distance=Infinity;fourLandmarks.forEach(site=>{const d=Math.hypot(lat-site.lat,lng-site.lng);if(d<distance){best=site;distance=d}});return distance<=110?'Near '+best.name:'Unmarked street / area'}
    function ensureFourMap(){if(fourLeaflet){fourLeaflet.invalidateSize();return}if(!window.L){document.getElementById('four-feedback').textContent='The map could not load. Please refresh.';return}
      const canvas=[[0,0],[1086,1448]];
      fourLeaflet=L.map('four-map',{crs:L.CRS.Simple,minZoom:-1.4,maxZoom:2,zoomSnap:.25,scrollWheelZoom:false,zoomControl:true,attributionControl:false,maxBounds:[[-70,-70],[1156,1518]],maxBoundsViscosity:1});
      L.imageOverlay('meridian-town-map.png?v=survey-2026',canvas,{interactive:false,alt:'Meridian County fictional street survey'}).addTo(fourLeaflet);
      fourLeaflet.fitBounds(canvas,{padding:[8,8]});
      fourLeaflet.on('click',event=>updateFourMarker(event.latlng.lat,event.latlng.lng));
      requestAnimationFrame(()=>fourLeaflet.invalidateSize());
    }
    function updateFourMarker(lat,lng){if(!fourLeaflet)return;fourVerified=false;document.getElementById('four-next').textContent='Check position';fourMarker={lat,lng,name:nearestLandmark(lat,lng)};if(fourCameraMarker){fourCameraMarker.setLatLng([lat,lng]);fourCameraMarker.setIcon(cameraIcon())}else fourCameraMarker=L.marker([lat,lng],{icon:cameraIcon(),keyboard:false}).addTo(fourLeaflet);document.getElementById('four-location-name').textContent=fourMarker.name;document.getElementById('four-feedback').textContent='Ready to save this estimate.';document.getElementById('four-next').disabled=false;}
    function renderFourPhoto(){
      const item=fourPhotos[fourCurrent];


      const pic=document.getElementById('four-photo-img');const placeholder=document.getElementById('four-photo-placeholder');
      pic.hidden=true;placeholder.hidden=false;placeholder.querySelector('span').textContent='PHOTOGRAPH '+item.label;
      pic.onload=()=>{pic.hidden=false;placeholder.hidden=true};pic.onerror=()=>{pic.hidden=true;placeholder.hidden=false};
      pic.src=item.file;updatePhotoNote();
      fourVerified=false;fourBearing.value='0';updateBearing();fourMarker=null;if(fourCameraMarker){fourCameraMarker.remove();fourCameraMarker=null;}
      document.getElementById('four-location-name').textContent='Not placed';
      document.getElementById('four-feedback').textContent='Place the camera on the street plan.';
      document.getElementById('four-next').disabled=true;
      document.getElementById('four-next').textContent='Check position';
      document.getElementById('four-summary').hidden=true;
    }
    document.getElementById('four-next').addEventListener('click',()=>{
      if(!fourMarker)return;
      const button=document.getElementById('four-next');
      const feedback=document.getElementById('four-feedback');
      if(!fourVerified){
        const expected=fourPhotos[fourCurrent].answer;
        const distance=Math.hypot(fourMarker.lat-expected.lat,fourMarker.lng-expected.lng);
        const heading=Math.abs(((Number(fourBearing.value)-expected.bearing+540)%360)-180);
        // PH-01 depicts a stretch of Albert Road, not an exact survey point.
        // Leaflet lat is measured upwards from the map's bottom edge.
        const pointToSegmentDistance=(lat,lng,a,b)=>{
          const dx=b.lng-a.lng,dy=b.lat-a.lat;
          const t=Math.max(0,Math.min(1,((lng-a.lng)*dx+(lat-a.lat)*dy)/(dx*dx+dy*dy)));
          return Math.hypot(lng-(a.lng+t*dx),lat-(a.lat+t*dy));
        };
        const locationOK=fourCurrent===0
          ?pointToSegmentDistance(fourMarker.lat,fourMarker.lng,{lat:535,lng:1010},{lat:590,lng:1330})<=85
          :fourCurrent===1
          // The station photograph covers a stretch of Station Road, not a single pinpoint.
          ?pointToSegmentDistance(fourMarker.lat,fourMarker.lng,{lat:773,lng:900},{lat:721,lng:1360})<=80
          :fourCurrent===2
          // The pub appears at the junction; allow positions on both approaches.
          ?Math.min(
            pointToSegmentDistance(fourMarker.lat,fourMarker.lng,{lat:505,lng:920},{lat:450,lng:1055}),
            pointToSegmentDistance(fourMarker.lat,fourMarker.lng,{lat:590,lng:940},{lat:550,lng:1110})
          )<=105
          :distance<=fourChecks[fourCurrent].location;
        // The illustrated town map is not perspective-accurate enough to establish
        // which end of this Station Road section the photographer faced.
        // Accept either direction along its east–west axis for PH-02.
        const directionOK=fourCurrent===1
          ?Math.min(heading,Math.abs(((Number(fourBearing.value)-100+540)%360)-180))<=35
          :heading<=fourChecks[fourCurrent].bearing;
                if(!locationOK||!directionOK){
          const subtleHints=[
            ['Check the buildings and road junctions visible in the photograph before choosing a spot.','Compare the arrangement of nearby streets and buildings, rather than pinning the landmark itself.','The location is plausible; use the direction of the receding road and the side of the frame occupied by the landmark.'],
            ['Look for distinctive roadside structures and how the road continues beyond them.','Try following the road layout and nearby junctions in the survey.','The location is plausible; check which side of the road the main landmark appears on.'],
            ['The corner building and its adjoining streets should help narrow this down.','Compare the shape of the junction with the photograph.','The location is plausible; rotate until both streets line up with the photograph.']
          ];
          feedback.textContent=subtleHints[fourCurrent][!locationOK&&!directionOK?0:!locationOK?1:2];
          feedback.classList.add('error');
          return;
        }
        fourVerified=true;
        fourGuesses[fourCurrent]={ref:fourPhotos[fourCurrent].ref,location:fourPhotos[fourCurrent].site,lat:fourMarker.lat,lng:fourMarker.lng,bearing:Number(fourBearing.value)};
        feedback.classList.remove('error');
        feedback.textContent='Location and direction verified. The photographic record has been restored.';
        button.textContent=fourCurrent===2?'Review reconstructed records':'Next photograph';
        return;
      }
      if(fourCurrent<2){fourCurrent++;renderFourPhoto();return;}
      const list=document.getElementById('four-summary-items');list.replaceChildren();
      fourGuesses.forEach((guess,i)=>{
        const item=fourPhotos[i];
        const record=document.createElement('article');record.className='four-record';
        const image=document.createElement('img');image.src=item.file;image.alt='Recovered photograph '+item.ref;image.loading='lazy';record.appendChild(image);
        const ref=document.createElement('div');ref.className='four-record-ref';ref.textContent=item.ref+' · VERIFIED';record.appendChild(ref);
        const location=document.createElement('h3');location.textContent=guess.location;record.appendChild(location);
        const bearing=document.createElement('p');bearing.className='four-record-direction';bearing.textContent='Camera facing '+formatBearing(guess.bearing);record.appendChild(bearing);
        const note=document.createElement('div');note.className='four-record-note';note.innerHTML=photoNotes[i];record.appendChild(note);
        list.appendChild(record);
      });
      document.querySelector('.four-workspace').hidden=true;
      document.getElementById('four-summary').hidden=false;
    });
    const directoryModal=document.getElementById('directory-modal');
    let directoryReturnFocus=null;
    const photoNotes=[
      '<p class="directory-kicker">FIELD NOTE · PH–01</p><h2>Along the road</h2><p>I was looking at the school building again, and then I noticed how much of the street is in the photograph too. The older buildings farther along seemed familiar, though I might be mixing things up. Perhaps the position of the school and the road between them will help?</p>',
      '<p class="directory-kicker">FIELD NOTE · PH–02</p><h2>Commercial frontage</h2><p>The modern frontage is on one side of the street, older premises on the other. One business sign is visible farther down the road; check which way the street runs.</p>',
      '<p class="directory-kicker">FIELD NOTE · PH–03</p><h2>A small distraction</h2><p>Oh, this one is probably not important! Someone on the team seems to have wandered off for a break and taken a photograph while they were at it. I almost left it out, actually. But it was filed with the others, so we might as well keep it. Maybe the building in the background will help you place it!</p>'
    ];
    function updatePhotoNote(){document.getElementById('directory-content').innerHTML=photoNotes[fourCurrent];}
    updatePhotoNote();
    document.getElementById('directory-folio').textContent='01';
    function closeDirectory(){directoryModal.hidden=true;if(directoryReturnFocus&&directoryReturnFocus.focus)directoryReturnFocus.focus()}
    document.getElementById('directory-open').addEventListener('click',()=>{directoryReturnFocus=document.activeElement;directoryModal.hidden=false;document.getElementById('directory-close').focus()});
    document.getElementById('directory-close').addEventListener('click',closeDirectory);
    directoryModal.addEventListener('click',event=>{if(event.target===directoryModal)closeDirectory()});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!directoryModal.hidden)closeDirectory()});
    renderFourPhoto();
    let flashPending=false;
    function flashToLevelFour(){
      if(flashPending)return;
      flashPending=true;
      const overlay=document.getElementById('transition-flash');
      overlay.classList.add('visible');
      window.setTimeout(()=>{
        overlay.classList.remove('visible');
        window.setTimeout(()=>{
          overlay.classList.add('visible');
          window.setTimeout(()=>{
            show('readFour');
            overlay.classList.remove('visible');
            flashPending=false;
          },65);
        },90);
      },65);
    }
    // A short, self-contained interference sound. Starts only on the player's click.
    // No audio downloads or autoplay permissions required.
    // Horror-sting synthesis: attack, dissonant cluster, noisy scrape and sub impact.
    // Web Audio envelopes and scheduled sources keep the entire sting within the visual interruption.
    const INTERFERENCE_SECONDS=.9;
    let glitchAudioContext=null;
    function unlockInterferenceAudio(){
      try{
        const AudioContextClass=window.AudioContext||window.webkitAudioContext;
        if(!AudioContextClass)return;
        if(!glitchAudioContext)glitchAudioContext=new AudioContextClass();
        if(glitchAudioContext.state==='suspended')glitchAudioContext.resume().catch(()=>{});
      }catch(error){console.warn('Audio unlock unavailable:',error);}
    }
    // Prepare audio on the initial gesture instead of at the moment of the flash.
    document.addEventListener('pointerdown',unlockInterferenceAudio,{once:true});
    document.addEventListener('keydown',unlockInterferenceAudio,{once:true});
    // Fast, click-triggered, deliberately corrupted analogue/digital audio sting.
    // Schedule the video glitch against the audio output clock, not the click clock.
    // This prevents iOS/mobile audio startup latency from causing a silent flash.
    let glitchNoiseBuffer=null;
    function playInterference(onAudibleStart){
      try{
        const AudioContextClass=window.AudioContext||window.webkitAudioContext;
        if(!AudioContextClass){if(onAudibleStart)onAudibleStart();return;}
        if(!glitchAudioContext)glitchAudioContext=new AudioContextClass();
        const ctx=glitchAudioContext;
        // An AudioContext may be suspended after backgrounding the app. Wait for
        // its actual resumed state before scheduling BOTH sides of the effect.
        if(ctx.state!=='running'){
          ctx.resume().then(()=>{
            if(ctx.state==='running')playInterference(onAudibleStart);
            else if(onAudibleStart)onAudibleStart();
          }).catch(()=>{if(onAudibleStart)onAudibleStart()});
          return;
        }
        // A short shared scheduling lead gives the audio hardware time to queue
        // the harsh onset before the CSS frame is painted.
        const t=ctx.currentTime+.075;
        const end=t+INTERFERENCE_SECONDS;

        const limiter=ctx.createDynamicsCompressor();
        limiter.threshold.value=-23;
        limiter.knee.value=6;
        limiter.ratio.value=16;
        limiter.attack.value=.001;
        limiter.release.value=.07;
        limiter.connect(ctx.destination);

        const master=ctx.createGain();
        master.gain.setValueAtTime(.0001,t);
        master.gain.linearRampToValueAtTime(.27,t+.014);
        master.gain.setValueAtTime(.24,t+.08);
        master.gain.setValueAtTime(.13,t+.19);
        master.gain.setValueAtTime(.21,t+.36);
        master.gain.setValueAtTime(.12,t+.61);
        master.gain.linearRampToValueAtTime(.17,t+.74);
        master.gain.exponentialRampToValueAtTime(.0001,end);
        master.connect(limiter);

        const distortion=ctx.createWaveShaper();
        const curve=new Float32Array(1024);
        for(let i=0;i<curve.length;i++){
          const x=2*i/(curve.length-1)-1;
          curve[i]=Math.tanh(7*x);
        }
        distortion.curve=curve;
        distortion.oversample='2x';
        distortion.connect(master);

        // Dissonant sawtooth cluster: immediate impact followed by pitch collapse.
        [158,171,229,339,472].forEach((frequency,i)=>{
          const osc=ctx.createOscillator();
          osc.type=i%2===0?'sawtooth':'square';
          osc.frequency.setValueAtTime(frequency,t);
          osc.frequency.exponentialRampToValueAtTime(frequency*(.48+i*.025),end);
          const gain=ctx.createGain();
          gain.gain.setValueAtTime(.001,t);
          gain.gain.linearRampToValueAtTime(.075,t+.009);
          gain.gain.setValueAtTime(.047,t+.12);
          gain.gain.setValueAtTime(.005,t+.18);
          gain.gain.setValueAtTime(.057,t+.33);
          gain.gain.setValueAtTime(.012,t+.47);
          gain.gain.setValueAtTime(.043,t+.7);
          gain.gain.exponentialRampToValueAtTime(.0001,end);
          osc.connect(gain);gain.connect(distortion);
          osc.start(t);osc.stop(end);
        });

        // Stuttering broadband radio static with jagged dropouts.
        if(!glitchNoiseBuffer || glitchNoiseBuffer.sampleRate!==ctx.sampleRate){
          glitchNoiseBuffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*INTERFERENCE_SECONDS),ctx.sampleRate);
          const samples=glitchNoiseBuffer.getChannelData(0);
          for(let i=0;i<samples.length;i++)samples[i]=Math.random()*2-1;
        }
        const staticSource=ctx.createBufferSource();
        staticSource.buffer=glitchNoiseBuffer;
        const hiss=ctx.createBiquadFilter();
        hiss.type='bandpass';hiss.Q.value=.56;
        hiss.frequency.setValueAtTime(3400,t);
        hiss.frequency.exponentialRampToValueAtTime(760,end);
        const staticGate=ctx.createGain();
        staticGate.gain.setValueAtTime(.02,t);
        for(let offset=0;offset<INTERFERENCE_SECONDS-.055;offset+=.095){
          staticGate.gain.setValueAtTime(.01,t+offset);
          staticGate.gain.linearRampToValueAtTime(.18,t+offset+.008);
          staticGate.gain.setValueAtTime(.18,t+offset+.038);
          staticGate.gain.linearRampToValueAtTime(.008,t+offset+.055);
        }
        staticGate.gain.exponentialRampToValueAtTime(.0001,end);
        staticSource.connect(hiss);hiss.connect(staticGate);staticGate.connect(distortion);
        staticSource.start(t);staticSource.stop(end);

        // Low impact keeps the first instant unsettling, without increasing peak volume.
        const impact=ctx.createOscillator();
        impact.type='triangle';
        impact.frequency.setValueAtTime(105,t);
        impact.frequency.exponentialRampToValueAtTime(39,t+.34);
        const impactGain=ctx.createGain();
        impactGain.gain.setValueAtTime(.24,t);
        impactGain.gain.exponentialRampToValueAtTime(.0001,t+.35);
        impact.connect(impactGain);impactGain.connect(master);
        impact.start(t);impact.stop(t+.35);

        if(onAudibleStart){
          // getOutputTimestamp relates AudioContext's clock to real output time.
          // When unavailable (notably on some iOS versions), use base/output
          // latency as a conservative fallback for the same audible onset.
          const stamp=typeof ctx.getOutputTimestamp==='function'?ctx.getOutputTimestamp():null;
          const audioLead=(t-ctx.currentTime)*1000;
          let visualDelay=audioLead+((ctx.baseLatency||0)+(ctx.outputLatency||0))*1000;
          if(stamp && stamp.performanceTime>0 && Number.isFinite(stamp.contextTime)){
            visualDelay=stamp.performanceTime+(t-stamp.contextTime)*1000-performance.now();
          }
          window.setTimeout(onAudibleStart,Math.max(0,Math.min(350,visualDelay)));
        }
      }catch(error){
        console.warn('Interference audio unavailable:',error);
        if(onAudibleStart)onAudibleStart();
      }
    }
    document.getElementById('dev-audio').addEventListener('click',()=>{if(developerPreview)playInterference()});
    let fiveFlashPending=false;
    function flashToLevelFive(){
      if(fiveFlashPending)return;
      fiveFlashPending=true;
      const overlay=document.getElementById('five-interference');
      // Audio is unlocked during earlier gestures; if the browser suspended it,
      // wait for resume and schedule both against the same hardware clock.
      playInterference(()=>{
        overlay.classList.remove('active');
        // Restart the CSS animation on every replay, without altering its length.
        void overlay.offsetWidth;
        overlay.classList.add('active');
        window.setTimeout(()=>{
          overlay.classList.remove('active');
          show('readFive');
          fiveFlashPending=false;
        },INTERFERENCE_SECONDS*1000);
      });
    }
    // Physical desk: the objects are the navigation. Only one workspace opens at a time.
    const deskOverlay=document.getElementById('desk-overlay');
    const deskPanels={book:document.getElementById('desk-notebook-panel'),slips:document.getElementById('desk-slips-panel'),pad:document.getElementById('desk-pad-panel'),case:document.getElementById('desk-case-panel')};
    deskPanels.book.append(document.querySelector('#level-five .case-center'));
    deskPanels.pad.append(document.querySelector('#level-five .case-scratch'));
    deskPanels.case.append(document.getElementById('case-form-panel'),document.getElementById('five-result'));
    deskPanels.book.append(document.getElementById('case-guidance'));
    deskPanels.slips.append(document.querySelector('#level-five .case-extras'));
    let deskOpen='';
    const slipButtons=[...document.querySelectorAll('#case-extra-cards .case-extra-card')];
    function showSlip(index){
      slipIndex=(index+slipButtons.length)%slipButtons.length;
      slipButtons[slipIndex].click();
    }
    function openDeskView(view){
      deskOpen=view;
      Object.entries(deskPanels).forEach(([key,el])=>el.hidden=key!==view);
      deskOverlay.hidden=false;
      const labels={book:'CASE NOTEBOOK',slips:'SUPPLEMENTARY RECORDS',pad:'YOUR NOTEPAD',case:'RECONSTRUCT THE FACTS'};
      document.getElementById('desk-overlay-title').textContent=labels[view];
      if(view==='book')openCaseFile(0);
      if(view==='slips')showSlip(slipIndex);
      if(view==='pad')document.getElementById('case-notepad').focus();
      safelySaveSession();
    }
    function closeDeskView(){deskOpen='';deskOverlay.hidden=true;safelySaveSession();}
    ['book','slips','pad','case'].forEach(view=>document.getElementById('desk-open-'+view).addEventListener('click',()=>openDeskView(view)));
    document.getElementById('desk-close-overlay').addEventListener('click',closeDeskView);
    document.getElementById('desk-slip-prev').addEventListener('click',()=>showSlip(slipIndex-1));
    document.getElementById('desk-slip-next').addEventListener('click',()=>showSlip(slipIndex+1));
    // Keyboard-accessible document paging when the slip reader is in focus.
    deskPanels.slips.setAttribute('tabindex','-1');
    deskPanels.slips.addEventListener('keydown',e=>{
      if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
        e.preventDefault();showSlip(slipIndex+(e.key==='ArrowRight'?1:-1));
      }
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!deskOverlay.hidden)closeDeskView()});
    document.getElementById('case-open-reconstruction').addEventListener('click',()=>openDeskView('case'));
    document.getElementById('five-finish').addEventListener('click',()=>{if(!document.getElementById('five-result').hidden)openDeskView('case')});
    renderLogicGrid();renderAnswers();
    renderClippings();
    renderTranscript();
    restoreSession();
    document.addEventListener("click",()=>setTimeout(safelySaveSession,0));
    document.addEventListener("change",()=>setTimeout(safelySaveSession,0));
    document.addEventListener("input",()=>setTimeout(safelySaveSession,0));
