import {generateSupplement} from './supplement.js';
export const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a);
export const fraction=(n,d)=>{const g=gcd(n,d);return d/g===1?String(n/g):`${n/g}/${d/g}`};
export const fmt=n=>String(Math.round(n*10000)/10000).replace('.',',');
export function generate(id,level=1,rng=Math.random){
 const extra=generateSupplement(id,level,rng);if(extra)return extra;
 const ri=(lo,hi)=>lo+Math.floor(rng()*(hi-lo+1));const a=ri(2,level===1?7:level===2?12:20),b=ri(2,9),c=ri(2,6);let prompt,answer,steps,unit='',figure=null;
 const set=(p,n,s,u='')=>{prompt=p;answer=typeof n==='number'?fmt(n):n;steps=s;unit=u};
 switch(id){
 case 'place':set(`${fmt(a/10)} × 100 = ?`,a*10,[`Nhân với 100 làm giá trị tăng 100 lần.`,`${fmt(a/10)} × 10 = ${a}; ${a} × 10 = ${a*10}.`]);break;
 case 'decimal-mul':set(`${fmt(a/10)} × ${fmt(b/10)} = ?`,a*b/100,[`Tính ${a} × ${b} = ${a*b}.`,`Hai thừa số có tổng 2 chữ số sau dấu phẩy → chia ${a*b} cho 100.`]);break;
 case 'decimal-div':set(`${fmt(a*b/10)} ÷ ${fmt(b/10)} = ?`,a,[`Nhân cả hai số với 10: ${a*b} ÷ ${b}.`,`${a*b} ÷ ${b} = ${a}.`]);break;
 case 'angle':set(`Tam giác có hai góc ${a*5}° và ${b*5}°. Góc còn lại bằng bao nhiêu?`,180-a*5-b*5,[`Tổng hai góc: ${a*5} + ${b*5} = ${(a+b)*5}°.`,`Góc còn lại: 180 − ${(a+b)*5} = ${180-(a+b)*5}°.`],'°');break;
 case 'reduce':set(`Rút gọn phân số ${a*c}/${b*c}.`,fraction(a*c,b*c),[`Ước chung lớn nhất của ${a*c} và ${b*c} là ${gcd(a*c,b*c)}.`,`Chia cả tử và mẫu cho ${gcd(a*c,b*c)} → ${fraction(a*c,b*c)}.`]);break;
 case 'fraction-add':case 'fraction-sub':case 'fraction-mul':case 'fraction-div':{
 const n=ri(1,b-1),m=ri(1,c-1);const sub=id==='fraction-sub',mul=id==='fraction-mul',div=id==='fraction-div';let x=n,y=b,z=m,w=c;if(sub&&x*w<z*y)[x,y,z,w]=[z,w,x,y];const op=sub?'−':mul?'×':div?'÷':'+';
 const numerator=mul?x*z:div?x*w:sub?x*w-z*y:x*w+z*y;const denominator=div?y*z:y*w;
 const s=mul?[`Nhân tử: ${x} × ${z} = ${numerator}.`,`Nhân mẫu: ${y} × ${w} = ${denominator}.`]:div?[`Đảo phân số thứ hai: ${z}/${w} → ${w}/${z}.`,`Nhân: ${x}/${y} × ${w}/${z} = ${numerator}/${denominator}.`]:[`Quy đồng: ${x}/${y} = ${x*w}/${y*w}; ${z}/${w} = ${z*y}/${y*w}.`,`Tính tử: ${x*w} ${op} ${z*y} = ${numerator}, giữ mẫu ${denominator}.`];
 set(`${x}/${y} ${op} ${z}/${w} = ?`,fraction(numerator,denominator),[...s,`Rút gọn: ${fraction(numerator,denominator)}.`]);break;}
 case 'rectangle':case 'parallelogram':case 'triangle':{
 const name={rectangle:'Hình chữ nhật',parallelogram:'Hình bình hành',triangle:'Tam giác'}[id];const half=id==='triangle';set(`${name} có ${id==='rectangle'?'chiều dài':'đáy'} ${a} cm và ${id==='rectangle'?'chiều rộng':'chiều cao'} ${b} cm. Tính diện tích.`,a*b/(half?2:1),[`${id==='rectangle'?'Chiều dài × chiều rộng':'Đáy × chiều cao'}: ${a} × ${b} = ${a*b}.`,half?`Chia đôi: ${a*b} ÷ 2 = ${fmt(a*b/2)} cm².`:`Diện tích = ${a*b} cm².`],'cm²');figure={type:id,a,b};break;}
 case 'trapezoid':set(`Hình thang có hai đáy ${a+b} cm và ${a} cm, chiều cao ${c} cm. Tính diện tích.`,(2*a+b)*c/2,[`Tổng hai đáy: ${a+b} + ${a} = ${2*a+b}.`,`Diện tích: ${2*a+b} × ${c} ÷ 2 = ${fmt((2*a+b)*c/2)} cm².`],'cm²');break;
 case 'rhombus':set(`Hình thoi có hai đường chéo ${a} cm và ${b} cm. Tính diện tích.`,a*b/2,[`Nhân hai đường chéo: ${a} × ${b} = ${a*b}.`,`Chia 2: ${a*b} ÷ 2 = ${fmt(a*b/2)} cm².`],'cm²');break;
 case 'composite':set(`Hình chữ L có đáy dài ${a+b} cm, cao toàn bộ ${b+c} cm. Phần dưới cao ${b} cm, phần nhô lên rộng ${a} cm. Tính diện tích.`,(a+b)*b+a*c,[`Phần dưới: ${a+b} × ${b} = ${(a+b)*b} cm².`,`Chiều cao phần nhô: ${b+c} − ${b} = ${c} cm.`,`Phần nhô: ${a} × ${c} = ${a*c} cm².`,`Cộng: ${(a+b)*b} + ${a*c} = ${(a+b)*b+a*c} cm².`],'cm²');figure={type:id,a,b,c};break;
 case 'volume-box':set(`Hộp chữ nhật dài ${a} cm, rộng ${b} cm, cao ${c} cm. Tính thể tích.`,a*b*c,[`Diện tích đáy: ${a} × ${b} = ${a*b} cm².`,`Thể tích: ${a*b} × ${c} = ${a*b*c} cm³.`],'cm³');break;
 case 'volume-cube':set(`Hình lập phương cạnh ${a} cm có thể tích bao nhiêu?`,a*a*a,[`Diện tích đáy: ${a} × ${a} = ${a*a} cm².`,`Thể tích: ${a*a} × ${a} = ${a*a*a} cm³.`],'cm³');break;
 case 'average':set(`Ba ngày, bé đọc lần lượt ${a} trang, ${a+b} trang và ${a+2*b} trang. Trung bình mỗi ngày đọc bao nhiêu trang?`,a+b,[`Tổng: ${a} + ${a+b} + ${a+2*b} = ${3*(a+b)} trang.`,`Trung bình: ${3*(a+b)} ÷ 3 = ${a+b} trang.`],'trang');break;
 case 'percent':set(`Một cuốn sách có ${a*20} trang. Bé đọc ${b*10}% số trang. Bé đã đọc bao nhiêu trang?`,a*2*b,[`Đổi ${b*10}% = ${fmt(b/10)}.`,`Số trang: ${a*20} × ${fmt(b/10)} = ${a*2*b}.`],'trang');break;
 case 'circumference':set(`Hình tròn có đường kính ${a} cm. Tính chu vi, dùng π = 3,14.`,a*3.14,[`Chu vi = đường kính × 3,14.`,`${a} × 3,14 = ${fmt(a*3.14)} cm.`],'cm');break;
 case 'expression':set(`Với x = ${a}, tính ${b} × x + ${c}.`,b*a+c,[`Thay x bằng ${a}: ${b} × ${a} + ${c}.`,`Nhân trước: ${b*a} + ${c} = ${b*a+c}.`]);break;
 case 'circle-area':set(`Hình tròn có ${level===3?'đường kính':'bán kính'} ${level===3?a*2:a} cm. Tính diện tích, dùng π = 3,14.`,a*a*3.14,[`Bán kính = ${a} cm.`,`Diện tích: ${a} × ${a} × 3,14 = ${fmt(a*a*3.14)} cm².`],'cm²');break;
 case 'ratio-share':set(`Chia ${(a+b)*c} viên bi cho An và Bình theo tỉ số ${a} : ${b}. An nhận bao nhiêu viên?`,a*c,[`Tổng số phần: ${a} + ${b} = ${a+b}.`,`Một phần: ${(a+b)*c} ÷ ${a+b} = ${c}.`,`An: ${c} × ${a} = ${a*c} viên.`],'viên');break;
 case 'prism':set(`Lăng trụ có diện tích đáy ${a*b} cm², chiều cao ${c} cm. Tính thể tích.`,a*b*c,[`Thể tích = diện tích đáy × chiều cao.`,`${a*b} × ${c} = ${a*b*c} cm³.`],'cm³');break;
 case 'cylinder':set(`Hình trụ bán kính đáy ${a} cm, cao ${c} cm. Tính thể tích, dùng π = 3,14.`,a*a*3.14*c,[`Diện tích đáy: ${a} × ${a} × 3,14 = ${fmt(a*a*3.14)} cm².`,`Thể tích: ${fmt(a*a*3.14)} × ${c} = ${fmt(a*a*3.14*c)} cm³.`],'cm³');break;
 default:throw new Error(`Unsupported lesson ${id}`);
 }return {id,level,prompt,answer,steps,unit,figure};
}
export function record(stats,id,ok,level){const old=stats[id]||{attempts:0,correct:0,streak:0,needsReview:false,level:1};return {...stats,[id]:{...old,attempts:old.attempts+1,correct:old.correct+Number(ok),streak:ok?old.streak+1:0,needsReview:!ok||(old.needsReview&&old.streak+1<2),level:Math.max(1,Math.min(3,ok&&old.streak+1>=5?level+1:!ok?level-1:level)),last:new Date().toISOString()}};}
export function makeRound(ids,stats,rng=Math.random){if(!ids.length)throw new Error('No available lessons');const weak=ids.filter(id=>stats[id]?.needsReview);const pool=weak.length?weak:ids;const seen=new Set();return Array.from({length:5},(_,i)=>{const id=pool[i%pool.length];let q;let tries=0;do{q=generate(id,stats[id]?.level||1,rng)}while(seen.has(q.prompt)&&++tries<30);seen.add(q.prompt);return q});}
