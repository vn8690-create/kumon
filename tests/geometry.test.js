import test from 'node:test';import assert from 'node:assert/strict';
import {geometrySVG} from '../geometry.js';import {generate} from '../engine.js';import {japaneseQuestion} from '../japanese.js';
test('all geometry lessons render with original dimensions in either language',()=>{
 for(const id of ['rectangle','triangle','parallelogram','trapezoid','rhombus','composite','circle-area','circumference','angle','volume-box','volume-cube','prism','cylinder'])for(let level=1;level<=3;level++){
 const q=generate(id,level,()=>.3);for(const lang of ['vi','ja']){const svg=geometrySVG(lang==='ja'?japaneseQuestion(q):q,lang);assert(svg.includes('<svg'));assert(!/NaN|undefined/.test(svg));assert(svg.includes('<figcaption>'));}
 }
});
test('circle diameter and radius draw different measurement lines',()=>{
 const a=geometrySVG(generate('circle-area',1,()=>0));const b=geometrySVG(generate('circle-area',3,()=>0));assert.match(a,/M200 135L276 135/);assert.match(b,/M124 135L276 135/);
});
