import test from 'node:test';import assert from 'node:assert/strict';
import {chapters,lessons,teaching} from '../content.js';
test('Tokyo Shoseki chapter sequence and page references',()=>{
 for(const [grade,count] of [[5,18],[6,13]])assert.deepEqual(chapters.filter(c=>c.grade===grade&&c.number!==null).map(c=>c.number),Array.from({length:count},(_,i)=>i+1));
 assert.equal(chapters.find(c=>c.grade===5&&c.number===2).id,'volume');
 assert.equal(chapters.find(c=>c.grade===6&&c.number===7).id,'data');
 assert.equal(chapters.find(c=>c.grade===5&&c.number===13).source.start,42);
 assert.equal(new Set(lessons.map(l=>l.id)).size,lessons.length);
 for(const id of Object.keys(teaching))assert(lessons.some(l=>l.id===id),id);
});
