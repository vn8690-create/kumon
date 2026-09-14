import test from 'node:test';
import assert from 'node:assert/strict';
import {activity,dateKey} from '../dashboard.js';
test('activity uses Japan day boundaries and seven-day window',()=>{
 const now=new Date('2026-09-14T15:30:00Z');
 assert.equal(dateKey(now),'2026-09-15');
 const s={stats:{triangle:{correct:4,attempts:5}},history:[{date:'2026-09-14T15:01:00Z',results:Array(5).fill({ok:true})},{date:'2026-09-13T01:00:00Z',results:Array(5).fill({ok:false})},{date:'2026-08-01T00:00:00Z',results:Array(5).fill({ok:true})}]};
 const a=activity(s,now);assert.equal(a.today,5);assert.equal(a.week,10);assert.equal(a.attempts,5);assert.equal(a.recent.length,7);
});
