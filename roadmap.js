// Recommendations are practice guidance based on the child's self-assessment.
export function recommend(available,stats,chapterIds=null){
 const focused=chapterIds?available.filter(l=>chapterIds.includes(l.id)):available;
 const pool=focused.length?focused:available;
 return pool.find(l=>stats[l.id]?.needsReview)||pool.find(l=>!stats[l.id]||stats[l.id].attempts<5||stats[l.id].streak<2)||pool[0];
}
