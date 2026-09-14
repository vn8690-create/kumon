import test from 'node:test';import assert from 'node:assert/strict';
// DOM adapter tests exercise the real app module and its event handlers.
// These are not a substitute for visual browser tests or live Supabase tests.
test('guest profile, round history, account configuration state and navigation',async()=>{
 const elements=new Map();const listeners={};const storage=new Map();
 const el=(id)=>{if(!elements.has(id))elements.set(id,{textContent:'',innerHTML:'',classList:{toggle(){}}});return elements.get(id);};
 globalThis.document={querySelector:el,querySelectorAll:()=>[],addEventListener:(type,fn)=>(listeners[type]??=[]).push(fn)};
 globalThis.window={scrollTo(){},addEventListener(){}};
 globalThis.localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
 globalThis.confirm=()=>true;
 await import('../app.js');
 const click=async(dataset)=>{const b={dataset};for(const fn of listeners.click||[])await fn({target:{closest:()=>b}});};
 assert.match(el('#app').innerHTML,/Nhịp học 7 ngày/);
 await click({action:'profile'});assert.match(el('#app').innerHTML,/profile-form/);
 await click({view:'account'});assert.match(el('#app').innerHTML,/đang chờ kích hoạt/);assert.match(el('#app').innerHTML,/disabled/);
 await click({action:'lesson:triangle'});await click({action:'start:triangle'});
 for(let i=0;i<5;i++){await click({action:'reveal'});await click({action:i===0?'incorrect':'correct'});}
 assert.match(el('#app').innerHTML,/4 \/ 5 câu đúng/);
 const state=JSON.parse(storage.get('math-garden-v1'));assert.equal(state.history.length,1);assert.equal(state.history[0].results.length,5);assert(state.history[0].results[0].prompt);assert(state.history[0].id);
 await click({view:'progress'});assert.match(el('#app').innerHTML,/Nhật ký luyện tập/);assert.match(el('#app').innerHTML,/Tam giác/);
});
