import test from 'node:test';import assert from 'node:assert/strict';
import {generate} from '../engine.js';import {teaching} from '../content.js';
import {japaneseQuestion,teachingJa} from '../japanese.js';
test('every active lesson has Japanese theory and unchanged numeric answers',()=>{
 for(const id of Object.keys(teaching)){assert.equal(teachingJa[id].length,3);for(let level=1;level<=3;level++)for(let i=0;i<30;i++){
 const q=generate(id,level),ja=japaneseQuestion(q);assert.notEqual(ja.prompt,q.prompt);assert.equal(ja.answer,q.answer.replace(/(\d),(\d)/g,'$1.$2'));assert(ja.steps.length>=2);assert(!/undefined|NaN/.test(JSON.stringify(ja)));assert(!/[àáảãạăâđêôơư]/i.test(ja.prompt+ja.steps.join('')));
 }}
});
test('Japanese retains known geometry quantities and decimal steps',()=>{
 const ja=japaneseQuestion(generate('composite',1,()=>0));assert.match(ja.prompt,/横の長さは4 cm/);assert.match(ja.steps[3],/8 \+ 4 = 12/);
 const d=japaneseQuestion(generate('decimal-mul',1,()=>0));assert.match(d.prompt,/0.2 × 0.2/);assert.match(d.steps[1],/4 ÷ 100 = 0.04/);
});
