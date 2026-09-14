// Exact SVG primitives, generated from the same dimensions as each question.
const n=x=>String(Math.round(x*100)/100);
const text=(x,y,s)=>`<text x="${x}" y="${y}" text-anchor="middle">${s}</text>`;
const line=(x,y,u,v,dash=false)=>`<path d="M${x} ${y}L${u} ${v}" class="${dash?'height-line':'edge-line'}"/>`;
const poly=points=>`<polygon points="${points.map(p=>p.join(',')).join(' ')}" class="shape-fill"/>`;
export function geometrySVG(q,lang='vi'){
 const values=((q.originalPrompt||q.prompt).replace(/(\d),(\d)/g,'$1.$2').match(/\d+(?:\.\d+)?/g)||[]).map(Number);
 const [a,b,c,d]=values;if(!Number.isFinite(a))return '';
 let body='',caption=lang==='ja'?'図の数値を使って考えましょう。':'Dùng số đo ghi trên hình để tính nhé.';
 const right=(x,y)=>`<path d="M${x} ${y-12}h12v12" class="angle-mark"/>`;
 const scale=(w,h)=>Math.min(270/w,160/h);
 switch(q.id){
 case 'rectangle':{const s=scale(a,b),w=a*s,h=b*s,x=(400-w)/2,y=210-h;body=poly([[x,y],[x+w,y],[x+w,210],[x,210]])+text(200,236,`${a} cm`)+text(x+w+35,y+h/2,`${b} cm`)+right(x,210);break;}
 case 'triangle':case 'parallelogram':{const s=Math.min(230/a,155/b),w=a*s,h=b*s,x=65,y=215-h,shift=w*.32;
 body=q.id==='triangle'?poly([[x,215],[x+w*.65,y],[x+w,215]]):poly([[x,215],[x+shift,y],[x+shift+w,y],[x+w,215]]);
 const hx=q.id==='triangle'?x+w*.65:x+shift;
 body+=line(hx,y,hx,215,true)+right(hx,215)+text(x+w/2,242,`${a} cm`)+text(hx,y+h/2,`${b} cm`);
 caption=lang==='ja'?'破線は底辺に垂直な高さです。':'Nét đứt là chiều cao vuông góc với đáy.';break;}
 case 'trapezoid':{const s=scale(a,c),w=a*s,top=b*s,h=c*s,x=(400-w)/2,off=(w-top)/2,y=210-h;body=poly([[x,210],[x+off,y],[x+off+top,y],[x+w,210]])+line(x+off,y,x+off,210,true)+right(x+off,210)+text(200,y-16,`${b} cm`)+text(200,240,`${a} cm`)+text(x+off,y+h/2,`${c} cm`);break;}
 case 'rhombus':{const s=scale(a,b),w=a*s,h=b*s,y=135;body=poly([[200-w/2,y],[200,y-h/2],[200+w/2,y],[200,y+h/2]])+line(200-w/2,y,200+w/2,y,true)+line(200,y-h/2,200,y+h/2,true)+right(200,y)+line(200+w/2+15,y-h/2,200+w/2+15,y+h/2)+text(200+w/2+38,y,`${b} cm`);caption=lang==='ja'?'数値は2本の対角線全体の長さです。':'Số đo là chiều dài toàn bộ hai đường chéo.';body+=line(200-w/2,245,200+w/2,245)+text(200,268,`${a} cm`);break;}
 case 'composite':{const s=scale(a,b),w=a*s,h=b*s,lower=c*s,upperWidth=d*s,x=(400-w)/2,y=210-h;body=poly([[x,210],[x,y],[x+upperWidth,y],[x+upperWidth,210-lower],[x+w,210-lower],[x+w,210]])+text(x+upperWidth/2,y-15,`${d} cm`)+text(x-28,y+h/2,`${b} cm`)+text(x+w+30,210-lower/2,`${c} cm`)+text(200,240,`${a} cm`);break;}
 case 'circle-area':case 'circumference':{const diameter=q.id==='circumference'||(q.originalPrompt||q.prompt).includes('đường kính'),r=76;body=`<circle cx="200" cy="135" r="${r}" class="shape-fill"/><circle cx="200" cy="135" r="3" fill="#316853"/>`+line(diameter?124:200,135,276,135,true)+text(diameter?200:239,122,`${a} cm`);caption=lang==='ja'?'円周率は3.14とします。':'Dùng π = 3,14.';break;}
 case 'angle':body=poly([[90,210],[170,50],[315,210]])+text(124,195,`${a}°`)+text(173,89,`${b}°`)+text(278,195,'?');caption=lang==='ja'?'角度を表すための模式図です。図を測らずに計算しましょう。':'Hình minh họa, không đo góc trên hình để lấy đáp án.';break;
 case 'volume-box':case 'volume-cube':case 'prism':{const x=95,y=95,w=175,h=125,dx=45,dy=-45;body=poly([[x,y],[x+w,y],[x+w,y+h],[x,y+h]])+poly([[x,y],[x+dx,y+dy],[x+w+dx,y+dy],[x+w,y]])+poly([[x+w,y],[x+w+dx,y+dy],[x+w+dx,y+h+dy],[x+w,y+h]]);
 if(q.id==='prism')body+=text(180,150,`${a} cm²`)+text(345,150,`${b} cm`);else body+=text(180,246,`${a} cm`)+text(319,219,`${q.id==='volume-cube'?a:b} cm`)+text(58,158,`${q.id==='volume-cube'?a:c} cm`);
 caption=lang==='ja'?'立体の模式図です。表示された数値を使います。':'Hình không gian minh họa. Sử dụng số đo ghi trên hình.';break;}
 case 'volume-composite':{const f=q.figure;if(!f)return '';const {width,depth,lower,upper,total}=f;
 const x=80,y=230,w=215,h=145,u=100,lo=70,dx=40,dy=-30;
 body=poly([[x,y-h],[x+dx,y-h+dy],[x+u+dx,y-h+dy],[x+u,y-h]])+poly([[x+u,y-lo],[x+u+dx,y-lo+dy],[x+w+dx,y-lo+dy],[x+w,y-lo]])+poly([[x+u,y-h],[x+u+dx,y-h+dy],[x+u+dx,y-lo+dy],[x+u,y-lo]])+poly([[x+w,y],[x+w+dx,y+dy],[x+w+dx,y-lo+dy],[x+w,y-lo]])+poly([[x,y],[x,y-h],[x+u,y-h],[x+u,y-lo],[x+w,y-lo],[x+w,y]]);
 body+=line(x,y-lo,x+u,y-lo,true)+text(x+w/2,258,`${width} cm`)+text(44,y-h/2,`${total} cm`)+text(x+u/2,y-h-15,`${upper} cm`)+text(367,y-lo/2,`${lower} cm`)+text(x+w+35,y+11,`${depth} cm`);
 caption=lang==='ja'?'破線で上下に分けられます。図は正確な縮尺ではありません。':'Nét đứt chia phần trên và dưới. Hình minh họa không theo tỉ lệ.';break;}
 case 'cylinder':body=`<path d="M120 85V210A80 25 0 0 0 280 210V85" class="shape-fill"/><ellipse cx="200" cy="85" rx="80" ry="25" class="shape-fill"/>`+line(200,85,280,85,true)+text(235,74,`${a} cm`)+line(305,85,305,210)+text(338,150,`${b} cm`);caption=lang==='ja'?'円柱の模式図です。円周率は3.14とします。':'Hình trụ minh họa. Dùng π = 3,14.';break;
 default:return '';
 }
 return `<figure class="geometry-card"><svg viewBox="0 0 400 290" role="img" aria-label="${lang==='ja'?'問題の図。寸法は問題文にも書いてあります。':'Hình của bài toán. Số đo cũng được ghi đầy đủ trong đề.'}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
}
