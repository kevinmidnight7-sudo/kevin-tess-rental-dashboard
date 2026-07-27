(async()=>{
  const VERSION='20260728-v4';
  const joinFiles=async paths=>(await Promise.all(paths.map(async path=>{
    const response=await fetch(`${path}?v=${VERSION}`);
    if(!response.ok)throw new Error(`Could not load ${path}`);
    return response.text();
  }))).join('');

  const css=await joinFiles([
    'assets/v4/css-1.txt','assets/v4/css-2.txt','assets/v4/css-3.txt','assets/v4/css-4.txt'
  ]);
  const style=document.createElement('style');
  style.dataset.dashboardVersion=VERSION;
  style.textContent=css;
  document.head.appendChild(style);

  const data=window.RENTAL_DATA||{properties:[]};
  data.targetCount=50;
  const accessFor=area=>{
    const value=String(area||'').toLowerCase();
    if(value.includes('guildford'))return{miles:1,access:'Central Guildford or a short local journey'};
    if(value.includes('ash vale'))return{miles:9,access:'Approx. 20–25 min drive to Guildford'};
    if(value.includes('aldershot'))return{miles:10,access:'Approx. 20–25 min drive to Guildford'};
    if(value.includes('farnborough'))return{miles:12,access:'Approx. 25–30 min drive to Guildford'};
    if(value.includes('farnham'))return{miles:11,access:'Approx. 25–30 min drive to Guildford'};
    if(value.includes('woking'))return{miles:7,access:'Approx. 15–25 min drive or rail access'};
    return{miles:null,access:'Guildford journey needs confirming'};
  };
  const sourceFor=link=>{
    const value=String(link||'').toLowerCase();
    if(value.includes('rightmove'))return'Rightmove';
    if(value.includes('zoopla'))return'Zoopla';
    if(value.includes('openrent'))return'OpenRent';
    if(value.includes('onthemarket'))return'OnTheMarket';
    return'Agent site';
  };
  const idFor=(link,index)=>{
    const match=String(link||'').match(/(?:properties|details)\/(\d+)/);
    return match?`${sourceFor(link).toLowerCase().replaceAll(' ','-')}-${match[1]}`:`listing-${index+1}-${String(link||'').slice(-18)}`;
  };
  data.properties=(data.properties||[]).map((property,index)=>{
    const p={...property};
    const access=accessFor(p.area);
    p.source=p.source||sourceFor(p.link);
    p.verifiedAt=p.verifiedAt||data.checkedAt||`${data.updated||'2026-07-28'}T08:00:00+01:00`;
    p.availabilityStatus=p.availabilityStatus||p.status||'Reconfirm with agent';
    p.duplicateKey=p.duplicateKey||idFor(p.link,index);
    p.distanceMiles=p.distanceMiles??access.miles;
    p.guildfordAccess=p.guildfordAccess||access.access;
    const parking=String(p.parking||'').toLowerCase();
    p.parkingConfidence=p.parkingConfidence??(parking.includes('two')?.98:parking.includes('resident')?.82:parking.includes('allocated')||parking.includes('off-street')||parking.includes('one ')?.65:.15);
    const outdoor=String(p.garden||'').toLowerCase();
    p.outdoorConfidence=p.outdoorConfidence??(outdoor.includes('private')?.95:outdoor.includes('communal')?.82:outdoor.includes('garden')||outdoor.includes('terrace')?.72:.12);
    p.tags=[...new Set(p.tags||[])];
    if(/available/i.test(p.status||''))p.tags.push('available');
    if(p.image)p.tags.push('photo');
    if(String(p.area||'').toLowerCase().includes('guildford'))p.tags.push('guildford');
    if(['A','B','C'].includes(p.epc))p.tags.push('epcC');
    p.tags=[...new Set(p.tags)];
    return p;
  });

  let script=await joinFiles([
    'assets/v4/js-1.txt','assets/v4/js-2.txt','assets/v4/js-3.txt','assets/v4/js-4.txt','assets/v4/js-5.txt'
  ]);
  script=script.replace(
    "let prefs={...defaults,...json(localStorage.getItem(SET),{})},saved=json(localStorage.getItem(SAVE),[]),compared=json(localStorage.getItem(CMP),[]);",
    "const parse=(value,fallback)=>{try{return value?JSON.parse(value):fallback}catch{return fallback}};let prefs={...defaults,...parse(localStorage.getItem(SET),{})},saved=parse(localStorage.getItem(SAVE),[]),compared=parse(localStorage.getItem(CMP),[]);"
  );
  (0,eval)(script);
})().catch(error=>{
  console.error('Dashboard v4 failed to load',error);
  const note=document.createElement('div');
  note.style.cssText='position:fixed;inset:auto 12px 12px;z-index:9999;padding:14px;border-radius:16px;background:#332743;color:white;font:600 13px system-ui;text-align:center';
  note.textContent='The house dashboard update did not load. Refresh once, then check your connection.';
  document.body.appendChild(note);
});