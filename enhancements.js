(()=>{
  const SETTINGS_KEY='kt-house-settings-v2';
  const CONGRATS_KEY='kt-tess-new-job-congrats-v1';
  const defaults={kevin:1730.97,tess:1620,comfort:1400,stretch:1500,split:'equal',carKevin:150,carTess:25,reserveKevin:125,reserveTess:125};
  let prefs={...defaults,...safeJSON(localStorage.getItem(SETTINGS_KEY),{})};

  function safeJSON(value,fallback){try{return value?JSON.parse(value):fallback}catch{return fallback}}
  function money(n){return '£'+Math.round(Number(n)||0).toLocaleString('en-GB')}
  function billTotal(p){return Object.values(p.bills||{}).reduce((a,b)=>a+(Number(b)||0),0)}
  function homeTotal(p){return Number(p.rent||0)+billTotal(p)}
  function shares(total){if(prefs.split==='proportional'){const sum=Number(prefs.kevin)+Number(prefs.tess);return sum?[total*prefs.kevin/sum,total*prefs.tess/sum]:[total/2,total/2]}return[total/2,total/2]}
  function escapeQuote(s){return String(s).replaceAll("'","\\'")}

  function injectUI(){
    const topActions=document.querySelector('.top-actions');
    if(topActions&&!document.getElementById('settingsTopBtn')){
      const b=document.createElement('button');b.id='settingsTopBtn';b.className='icon-btn';b.setAttribute('aria-label','Open settings');b.textContent='⚙️';b.onclick=openSettings;topActions.appendChild(b);
    }
    const nav=document.querySelector('.bottom-nav');
    if(nav&&!document.getElementById('settingsNavBtn')){
      const b=document.createElement('button');b.id='settingsNavBtn';b.className='nav-btn';b.innerHTML='<span>⚙️</span>Settings';b.onclick=openSettings;nav.appendChild(b);
    }
    if(!document.getElementById('settingsSheet')){
      document.body.insertAdjacentHTML('beforeend',`<section id="settingsSheet" class="settings-sheet" aria-modal="true" role="dialog">
        <div class="settings-head"><h3>⚙️ Your house-hunt settings</h3><button class="sheet-close" id="settingsClose" aria-label="Close">×</button></div>
        <div class="settings-body">
          <div class="settings-card"><h4>💷 Monthly take-home pay</h4><p>Change these whenever either salary changes. They stay only on this browser and are never committed to GitHub.</p><div class="field-grid"><div class="field"><label>Kevin</label><input id="setKevin" type="number" step="1"></div><div class="field"><label>Tess</label><input id="setTess" type="number" step="1"></div></div></div>
          <div class="settings-card"><h4>🏠 Rent preferences</h4><div class="field-grid"><div class="field"><label>Comfortable maximum</label><input id="setComfort" type="number" step="25"></div><div class="field"><label>Absolute stretch maximum</label><input id="setStretch" type="number" step="25"></div><div class="field"><label>Housing split</label><select id="setSplit"><option value="equal">50 / 50</option><option value="proportional">Proportional to income</option></select></div></div></div>
          <div class="settings-card"><h4>🚗 Personal monthly car costs</h4><p>These appear in each property's detailed affordability view.</p><div class="field-grid"><div class="field"><label>Kevin insurance</label><input id="setCarKevin" type="number" step="1"></div><div class="field"><label>Tess insurance</label><input id="setCarTess" type="number" step="1"></div><div class="field"><label>Kevin fuel / repair reserve</label><input id="setReserveKevin" type="number" step="1"></div><div class="field"><label>Tess fuel / repair reserve</label><input id="setReserveTess" type="number" step="1"></div></div></div>
          <p class="privacy-note">🔒 Saved with localStorage on this device. Clearing browser data, private browsing or using another phone creates a fresh set of preferences.</p>
          <div class="settings-actions"><button class="settings-reset" id="resetPrefs">Reset</button><button class="settings-save" id="savePrefs">Save settings</button></div>
        </div></section>`);
      document.getElementById('settingsClose').onclick=closeSettings;
      document.getElementById('savePrefs').onclick=saveSettings;
      document.getElementById('resetPrefs').onclick=resetSettings;
    }
    if(!document.getElementById('jobCongrats')){
      document.body.insertAdjacentHTML('beforeend',`<section id="jobCongrats" class="congrats" aria-modal="true" role="dialog" aria-labelledby="congratsTitle">
        <div class="congrats-card"><i class="confetti c1"></i><i class="confetti c2"></i><i class="confetti c3"></i><i class="confetti c4"></i><i class="confetti c5"></i><i class="confetti c6"></i><div class="congrats-emoji">🎉💼✨</div><h2 id="congratsTitle">CONGRATS TESS ON YOUR NEW JOB!!</h2><p>The house hunt officially has a bigger budget and a promotion-worthy amount of confetti.</p><button id="woohooBtn" class="woohoo">WOOHOO!</button></div></section>`);
      document.getElementById('woohooBtn').onclick=()=>{localStorage.setItem(CONGRATS_KEY,'seen');document.getElementById('jobCongrats').classList.remove('open')};
    }
  }

  function populateSettings(){
    const ids={setKevin:'kevin',setTess:'tess',setComfort:'comfort',setStretch:'stretch',setSplit:'split',setCarKevin:'carKevin',setCarTess:'carTess',setReserveKevin:'reserveKevin',setReserveTess:'reserveTess'};
    Object.entries(ids).forEach(([id,key])=>{const el=document.getElementById(id);if(el)el.value=prefs[key]});
  }
  function openSettings(){populateSettings();document.getElementById('overlay')?.classList.add('open');document.getElementById('settingsSheet')?.classList.add('open')}
  function closeSettings(){document.getElementById('settingsSheet')?.classList.remove('open');if(!document.getElementById('detailSheet')?.classList.contains('open')&&!document.getElementById('filterSheet')?.classList.contains('open'))document.getElementById('overlay')?.classList.remove('open')}
  function saveSettings(){
    const num=id=>Math.max(0,Number(document.getElementById(id).value)||0);
    prefs={kevin:num('setKevin'),tess:num('setTess'),comfort:num('setComfort'),stretch:num('setStretch'),split:document.getElementById('setSplit').value,carKevin:num('setCarKevin'),carTess:num('setCarTess'),reserveKevin:num('setReserveKevin'),reserveTess:num('setReserveTess')};
    localStorage.setItem(SETTINGS_KEY,JSON.stringify(prefs));applyPrefs();closeSettings();render?.();
  }
  function resetSettings(){prefs={...defaults};localStorage.removeItem(SETTINGS_KEY);populateSettings();applyPrefs();render?.()}

  function applyPrefs(){
    if(window.RENTAL_DATA?.incomes){window.RENTAL_DATA.incomes.kevin=Number(prefs.kevin);window.RENTAL_DATA.incomes.tess=Number(prefs.tess)}
    if(window.state)window.state.split=prefs.split;
    if(window.RENTAL_DATA?.properties){window.RENTAL_DATA.properties.forEach(p=>{p.tags=p.tags||[];p.tags=p.tags.filter(t=>t!=='under1400');if(Number(p.rent)<=Number(prefs.comfort))p.tags.push('under1400')})}
    if(window.filters){const target=window.filters.find(x=>x[0]==='under1400');if(target)target[1]=`💷 Under ${money(prefs.comfort)}`}
    const stats=document.querySelectorAll('.mini-stats .mini-stat');if(stats[0])stats[0].textContent=`💷 Combined take-home ≈ ${money(Number(prefs.kevin)+Number(prefs.tess))}`;if(stats[1])stats[1].textContent=`🧘 Comfort rent ≤ ${money(prefs.comfort)}`;if(stats[2])stats[2].textContent=`😬 Stretch ≤ ${money(prefs.stretch)}`;
    if(typeof renderFilters==='function')renderFilters();
  }

  function patchFunctions(){
    const originalEnter=window.enterApp;
    if(typeof originalEnter==='function')window.enterApp=function(){originalEnter();if(!localStorage.getItem(CONGRATS_KEY))setTimeout(()=>document.getElementById('jobCongrats')?.classList.add('open'),720)};
    const originalClose=window.closeSheets;
    window.closeSheets=function(){if(typeof originalClose==='function')originalClose();closeSettings()};

    window.cardHTML=function(p,i){
      const bills=billTotal(p),total=Number(p.rent)+bills,[k,t]=shares(total),isSaved=saved.includes(p.name),hasImage=Boolean(p.image);
      const photo=hasImage?`<img src="${p.image}" alt="${p.name} property" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-failed');this.parentElement.querySelector('.photo-help')?.style.removeProperty('display')">`:'';
      const help=`<a class="photo-help" href="${p.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()" style="${hasImage?'display:none':''}">View real listing photos ↗</a>`;
      return `<article class="home-card ${p.rank<=5?'top-five':'simple'}" style="animation-delay:${Math.min(i,7)*55}ms" tabindex="0" onclick="openDetail(${p.rank})" onkeydown="if(event.key==='Enter')openDetail(${p.rank})"><div class="photo ${hasImage?'':'image-failed'}">${photo}${help}<span class="rank-pill">#${p.rank} · ${p.label}</span><button class="heart ${isSaved?'saved':''}" onclick="event.stopPropagation();toggleSave('${escapeQuote(p.name)}')" aria-label="Save ${p.name}">${isSaved?'♥':'♡'}</button><div class="photo-copy"><h4>${p.name}</h4><p>${p.area}</p></div></div><div class="card-body"><div class="card-top"><div><div class="rent">£${Number(p.rent).toLocaleString('en-GB')} <small>pcm</small></div><div class="total-line">About ${money(total)} all-in each month</div></div><div class="score"><b>${p.score}</b><span>fit score</span></div></div><div class="badges"><span class="badge ${['A','B','C'].includes(p.epc)?'good':'sunny'}">⚡ EPC ${p.epc}</span><span class="badge pink">🚗 ${p.parking}</span><span class="badge">🌿 ${p.garden}</span></div><p class="summary">${p.summary}</p><div class="money-strip"><div class="money-box"><span>Kevin pays</span><b>${money(k)}</b></div><div class="money-box"><span>Tess pays</span><b>${money(t)}</b></div><div class="money-box"><span>Left after housing</span><b>${money(prefs.kevin-k)} / ${money(prefs.tess-t)}</b></div></div><p class="tap-note">Tap for the full bill recipe 🧾</p></div></article>`;
    };

    window.openDetail=function(rank){
      const p=window.RENTAL_DATA.properties.find(x=>x.rank===rank);if(!p)return;const b=p.bills||{},bills=billTotal(p),total=Number(p.rent)+bills,[k,t]=shares(total),kAfterCars=Number(prefs.kevin)-k-Number(prefs.carKevin)-Number(prefs.reserveKevin),tAfterCars=Number(prefs.tess)-t-Number(prefs.carTess)-Number(prefs.reserveTess),sheet=document.getElementById('detailSheet');
      const image=p.image?`<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none';this.parentElement.classList.add('image-failed')">`:`<a class="photo-help" href="${p.link}" target="_blank" rel="noopener">View real listing photos ↗</a>`;
      sheet.innerHTML=`<button class="sheet-close" onclick="closeSheets()" aria-label="Close">×</button><div class="detail-hero photo ${p.image?'':'image-failed'}">${image}<div class="detail-heading"><h2>${p.name}</h2><p>${p.area} · £${Number(p.rent).toLocaleString('en-GB')} pcm</p></div></div><div class="detail-body"><div class="detail-ai"><b>✨ Why it scored ${p.score}/100</b>${p.summary}</div><div class="breakdown"><div class="break-row"><span>🏠 Rent</span><b>${money(p.rent)}</b></div><div class="break-row"><span>🏛️ Council tax estimate · Band ${p.councilBand}</span><b>${money(b.councilTax)}</b></div><div class="break-row"><span>⚡ Gas and electricity estimate · EPC ${p.epc}</span><b>${money(b.energy)}</b></div><div class="break-row"><span>💧 Water</span><b>${money(b.water)}</b></div><div class="break-row"><span>📶 Broadband</span><b>${money(b.broadband)}</b></div><div class="break-row"><span>🛋️ Contents / household cover</span><b>${money(b.contents)}</b></div><div class="break-row total"><span>Estimated monthly total</span><b>${money(total)}</b></div></div><p class="factor-note">Planning estimate only. Council tax varies by authority and band; energy depends on EPC, heating, usage and tariff. Settings let you change salaries, split method and car budgets.</p><div class="split-grid"><div class="person"><span>Kevin</span><b>${money(k)}</b><small>${money(prefs.kevin-k)} left after housing · ${money(kAfterCars)} after car budget</small></div><div class="person"><span>Tess</span><b>${money(t)}</b><small>${money(prefs.tess-t)} left after housing · ${money(tAfterCars)} after car budget</small></div></div><div class="detail-lists"><div class="list-box pro"><b>Reasons to like it</b><ul>${(p.pros||[]).map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="list-box con"><b>Things to check</b><ul>${(p.cons||[]).map(x=>`<li>${x}</li>`).join('')}</ul></div></div><a class="listing-link" href="${p.link}" target="_blank" rel="noopener">Open listing and all real photos ↗</a></div>`;
      document.getElementById('overlay').classList.add('open');sheet.classList.add('open');
    };
  }

  function init(){injectUI();applyPrefs();patchFunctions();render?.();document.getElementById('overlay')?.addEventListener('click',closeSettings)}
  if(document.readyState==='complete'||document.readyState==='interactive')setTimeout(init,0);else window.addEventListener('DOMContentLoaded',init,{once:true});
})();