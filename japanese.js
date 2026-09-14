const num=n=>String(Math.round(n*10000)/10000);
const dec=s=>String(s).replace(/(\d),(\d)/g,'$1.$2');
export const teachingJa={
place:['10倍、100倍すると、それぞれの数字の位が上がります。','数 × 10、数 × 100','100倍すると、小数点は右に2けた分移ります。'],
'decimal-mul':['整数と同じようにかけてから、小数点の位置を決めます。','1.2 × 0.3 = 0.36','小数点より右のけた数を、2つの数で合わせます。'],
'decimal-div':['わられる数とわる数を同じ数だけ10倍して、わる数を整数にします。','3.6 ÷ 0.4 = 36 ÷ 4 = 9','両方の数を同じように変えましょう。'],
angle:['三角形の3つの角の大きさの和は180°です。','残りの角 = 180° − わかっている2つの角の和','まず、わかっている角をたしましょう。'],
reduce:['分子と分母を同じ公約数でわることを約分といいます。','6/8 = (6 ÷ 2)/(8 ÷ 2) = 3/4','これ以上約分できない形にしましょう。'],
'fraction-add':['通分して分母をそろえ、分子どうしをたします。','1/2 + 1/3 = 3/6 + 2/6 = 5/6','分母はたしません。最後に約分します。'],
'fraction-sub':['通分して分母をそろえ、分子どうしをひきます。','3/4 − 1/2 = 3/4 − 2/4 = 1/4','分母をそろえてから計算しましょう。'],
rectangle:['1 cm²の正方形が何個分あるかを考えます。','長方形の面積 = たて × 横','長さの単位をそろえ、面積にはcm²をつけます。'],
parallelogram:['三角形の部分を切って動かすと、面積を変えずに長方形にできます。','平行四辺形の面積 = 底辺 × 高さ','高さは底辺に垂直な長さです。ななめの辺ではありません。'],
triangle:['同じ三角形2つで、底辺と高さが同じ平行四辺形を作れます。','三角形の面積 = 底辺 × 高さ ÷ 2','二等辺三角形でも同じ公式です。高さは底辺に垂直です。'],
trapezoid:['同じ台形2つを合わせると、底辺が上底と下底の和になる平行四辺形になります。','台形の面積 = (上底 + 下底) × 高さ ÷ 2','平行な2つの辺が上底と下底です。'],
rhombus:['ひし形の2本の対角線は垂直に交わります。','ひし形の面積 = 対角線 × 対角線 ÷ 2','対角線全体の長さを使いましょう。'],
composite:['L字形を、重ならない2つの長方形に分けます。','全体の面積 = 下の長方形 + 上の長方形','上の部分の高さは、全体の高さから下の高さをひいて求めます。'],
'volume-box':['底の1段にある単位の立方体の数を求め、段数をかけます。','直方体の体積 = たて × 横 × 高さ','体積の単位はcm³です。'],
'volume-cube':['立方体は、たて、横、高さがすべて同じ長さです。','立方体の体積 = 一辺 × 一辺 × 一辺','一辺を3倍するのではありません。'],
average:['いくつかの数量を同じ大きさにならしたものが平均です。','平均 = 合計 ÷ 個数','0の値があっても個数に入れます。'],
percent:['百分率は、もとにする量を100とした割合です。','比べられる量 = もとにする量 × 百分率 ÷ 100','20% = 20/100 = 0.2です。'],
circumference:['円周は円のまわりの長さです。直径は半径の2倍です。','円周 = 直径 × 円周率','この練習では円周率を3.14として計算します。'],
expression:['文字に指定された数をあてはめて計算します。','x = 4のとき、3 × x + 2 = 14','かけ算・わり算を先に計算しましょう。'],
'fraction-mul':['分子どうし、分母どうしをかけます。','a/b × c/d = (a × c)/(b × d)','途中で約分すると、計算が楽になることがあります。'],
'fraction-div':['わる数を逆数にして、かけ算に直します。','a/b ÷ c/d = a/b × d/c','逆数にするのは、わる数だけです。'],
'circle-area':['円の面積は、半径を2回かけてから円周率をかけます。','円の面積 = 半径 × 半径 × 3.14','直径がわかっているときは、2でわって半径を求めます。'],
'ratio-share':['比の数をたして全体の部分の数を求め、1つ分の量を計算します。','20を2 : 3に分ける → 1つ分 = 20 ÷ (2 + 3)','分けた2つの量の合計が、もとの量になるか確認します。'],
prism:['底面と同じ形の層が、高さの分だけ重なっていると考えます。','角柱の体積 = 底面積 × 高さ','底面積の単位はcm²、体積の単位はcm³です。'],
cylinder:['円柱の底面は円です。底面積を求めてから高さをかけます。','円柱の体積 = 半径 × 半径 × 3.14 × 高さ','高さは2つの底面の間の垂直な長さです。']};
export function japaneseQuestion(q){
 const v=dec(q.prompt),ns=(v.match(/\d+(?:\.\d+)?/g)||[]).map(Number),[a,b,c,d]=ns;let prompt,steps;let answer=dec(q.answer),unit=({trang:'ページ',viên:'個'})[q.unit]||q.unit;
 switch(q.id){
 case 'place':prompt=`計算しましょう。 ${v}`;steps=['100倍すると、小数点が右に2けた分移ります。',`${a} × 100 = ${answer}`];break;
 case 'decimal-mul':prompt=`計算しましょう。 ${v}`;steps=[`小数点を考えずに計算します：${num(a*10)} × ${num(b*10)} = ${num(a*b*100)}`,`小数部分は合わせて2けたです：${num(a*b*100)} ÷ 100 = ${answer}`];break;
 case 'decimal-div':prompt=`計算しましょう。 ${v}`;steps=[`両方を10倍します：${num(a*10)} ÷ ${num(b*10)}`,`わり算をします：${num(a*10)} ÷ ${num(b*10)} = ${answer}`];break;
 case 'angle':prompt=`三角形の2つの角は${a}°と${b}°です。残りの角は何度ですか。`;steps=[`2つの角の和：${a} + ${b} = ${a+b}°`,`残りの角：180 − ${a+b} = ${answer}°`];break;
 case 'reduce':prompt=`${a}/${b} を約分しましょう。`;{const gcd=(x,y)=>y?gcd(y,x%y):x,g=gcd(a,b);steps=[`分子と分母の最大公約数は${g}です。`,`両方を${g}でわります：(${a} ÷ ${g})/(${b} ÷ ${g}) = ${answer}`];}break;
 case 'fraction-add':case 'fraction-sub':case 'fraction-mul':case 'fraction-div':{
 prompt=`計算して、約分しましょう。 ${v}`;const op=q.id==='fraction-add'?'+':'−';steps=q.id==='fraction-mul'?[`分子をかけます：${a} × ${c} = ${a*c}`,`分母をかけます：${b} × ${d} = ${b*d}`]:q.id==='fraction-div'?[`わる数を逆数にします：${c}/${d} → ${d}/${c}`,`かけ算に直します：${a}/${b} × ${d}/${c} = ${a*d}/${b*c}`]:[`通分します：${a}/${b} = ${a*d}/${b*d}、${c}/${d} = ${c*b}/${b*d}`,`分母はそのままで分子を計算します：${a*d} ${op} ${c*b} = ${op==='+'?a*d+c*b:a*d-c*b}`];steps.push(`約分した答え：${answer}`);break;}
 case 'rectangle':case 'parallelogram':case 'triangle':prompt=q.id==='rectangle'?`たて${a} cm、横${b} cmの長方形の面積を求めましょう。`:`底辺${a} cm、高さ${b} cmの${q.id==='triangle'?'三角形':'平行四辺形'}の面積を求めましょう。`;steps=[`${q.id==='rectangle'?'たて × 横':'底辺 × 高さ'}：${a} × ${b} = ${a*b}`,q.id==='triangle'?`2でわります：${a*b} ÷ 2 = ${answer} cm²`:`面積は${answer} cm²です。`];break;
 case 'trapezoid':prompt=`下底${a} cm、上底${b} cm、高さ${c} cmの台形の面積を求めましょう。`;steps=[`上底と下底の和：${b} + ${a} = ${a+b}`,`面積：${a+b} × ${c} ÷ 2 = ${answer} cm²`];break;
 case 'rhombus':prompt=`2本の対角線が${a} cmと${b} cmのひし形の面積を求めましょう。`;steps=[`対角線をかけます：${a} × ${b} = ${a*b}`,`2でわります：${a*b} ÷ 2 = ${answer} cm²`];break;
 case 'composite':prompt=`L字形の横の長さは${a} cm、全体の高さは${b} cmです。下の長方形の高さは${c} cm、上に出ている部分の横の長さは${d} cmです。面積を求めましょう。`;steps=[`下の面積：${a} × ${c} = ${a*c} cm²`,`上の高さ：${b} − ${c} = ${b-c} cm`,`上の面積：${d} × ${b-c} = ${d*(b-c)} cm²`,`合計：${a*c} + ${d*(b-c)} = ${answer} cm²`];break;
 case 'volume-box':prompt=`たて${a} cm、横${b} cm、高さ${c} cmの直方体の体積を求めましょう。`;steps=[`底面積：${a} × ${b} = ${a*b} cm²`,`体積：${a*b} × ${c} = ${answer} cm³`];break;
 case 'volume-cube':prompt=`一辺が${a} cmの立方体の体積を求めましょう。`;steps=[`底面積：${a} × ${a} = ${a*a} cm²`,`体積：${a*a} × ${a} = ${answer} cm³`];break;
 case 'average':prompt=`3日間で、それぞれ${a}ページ、${b}ページ、${c}ページ読みました。1日あたりの平均は何ページですか。`;steps=[`合計：${a} + ${b} + ${c} = ${a+b+c}ページ`,`平均：${a+b+c} ÷ 3 = ${answer}ページ`];break;
 case 'percent':prompt=`${a}ページの本の${b}%を読みました。何ページ読みましたか。`;steps=[`百分率を小数にします：${b}% = ${num(b/100)}`,`ページ数：${a} × ${num(b/100)} = ${answer}ページ`];break;
 case 'circumference':prompt=`直径${a} cmの円の円周を求めましょう。円周率は3.14とします。`;steps=['円周 = 直径 × 円周率',`${a} × 3.14 = ${answer} cm`];break;
 case 'expression':prompt=`x = ${a} のとき、${b} × x + ${c} の値を求めましょう。`;steps=[`xに${a}を入れます：${b} × ${a} + ${c}`,`かけ算を先にします：${a*b} + ${c} = ${answer}`];break;
 case 'circle-area':{const diameter=q.prompt.includes('đường kính'),r=diameter?a/2:a;prompt=`${diameter?'直径':'半径'}${a} cmの円の面積を求めましょう。円周率は3.14とします。`;steps=[diameter?`半径：${a} ÷ 2 = ${r} cm`:`半径は${r} cmです。`,`面積：${r} × ${r} × 3.14 = ${answer} cm²`];break;}
 case 'ratio-share':prompt=`${a}個のビー玉をアンさんとビンさんに${b} : ${c}の比で分けます。アンさんは何個もらいますか。`;steps=[`比の数の和：${b} + ${c} = ${b+c}`,`1つ分：${a} ÷ ${b+c} = ${a/(b+c)}`,`アンさんの分：${a/(b+c)} × ${b} = ${answer}個`];break;
 case 'prism':prompt=`底面積${a} cm²、高さ${b} cmの角柱の体積を求めましょう。`;steps=['体積 = 底面積 × 高さ',`${a} × ${b} = ${answer} cm³`];break;
 case 'cylinder':prompt=`底面の半径${a} cm、高さ${b} cmの円柱の体積を求めましょう。円周率は3.14とします。`;steps=[`底面積：${a} × ${a} × 3.14 = ${num(a*a*3.14)} cm²`,`体積：${num(a*a*3.14)} × ${b} = ${answer} cm³`];break;
 default:return q;
 }return {...q,originalPrompt:q.prompt,prompt,steps,answer,unit};
}
