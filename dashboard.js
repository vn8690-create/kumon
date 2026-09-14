export const dateKey=(date=new Date())=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Tokyo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(date));
export function activity(state,now=new Date()){
 const history=state.history.filter(h=>Array.isArray(h.results)&&Number.isFinite(Date.parse(h.date)));
 const today=dateKey(now);const recent=Array.from({length:7},(_,i)=>{const d=new Date(now);d.setUTCDate(d.getUTCDate()-6+i);const key=dateKey(d);return {key,label:new Intl.DateTimeFormat('vi',{timeZone:'Asia/Tokyo',weekday:'short'}).format(d),count:history.filter(h=>dateKey(h.date)===key).reduce((n,h)=>n+h.results.length,0)};});
 return {today:recent[6].count,week:recent.reduce((n,d)=>n+d.count,0),recent,rounds:history.length,correct:Object.values(state.stats).reduce((n,s)=>n+s.correct,0),attempts:Object.values(state.stats).reduce((n,s)=>n+s.attempts,0)};
}
