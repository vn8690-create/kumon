import test from 'node:test';import assert from 'node:assert/strict';
import {generate} from '../engine.js';import {geometrySVG} from '../geometry.js';import {recommend} from '../roadmap.js';
test('composite volume agrees with whole box minus missing piece',()=>{
 for(let level=1;level<=3;level++)for(let i=0;i<100;i++){
 const q=generate('volume-composite',level),f=q.figure;
 const expected=f.width*f.depth*f.total-(f.width-f.upper)*f.depth*(f.total-f.lower);
 assert.equal(Number(q.answer),expected);assert.match(geometrySVG(q,'ja'),/<svg/);
 }
});
test('school chapter focus and incomplete rounds guide recommendations',()=>{
 const list=[{id:'a'},{id:'b'},{id:'c'}];
 assert.equal(recommend(list,{a:{attempts:1,streak:1}}).id,'a');
 assert.equal(recommend(list,{a:{attempts:5,streak:5}}).id,'b');
 assert.equal(recommend(list,{a:{needsReview:true}},['c']).id,'c');
 assert.equal(recommend(list,{b:{needsReview:true}}).id,'b');
 assert.equal(recommend(list,{},['missing']).id,'a');
});
test('fraction reciprocal and integer division preserve exact values',()=>{
 for(let i=0;i<100;i++)for(const id of ['reciprocal','fraction-div-integer','fraction-times-integer']){
 const q=generate(id,3),nums=q.prompt.match(/\d+/g).map(Number),[a,b,c]=nums;
 const [x,y=1]=q.answer.split('/').map(Number);
 const expected=id==='reciprocal'?b/a:id==='fraction-div-integer'?a/(b*c):a*c/b;
 assert(Math.abs(x/y-expected)<1e-10);
 }
});
