// Chapter order and textbook page references checked against the four uploaded
// Tokyo Shoseki 2024 planning PDFs. Sublesson titles are original app breakdowns.
export function alignTextbook(oldChapters){
 const existing=new Map(oldChapters.flatMap(c=>c.lessons).map(l=>[l.id,l]));
 const fresh=(id,title,jp)=>{existing.set(id,{id,title,jp});return id;};
 const add=[
 ['decimal-units','Đếm theo đơn vị 0,001','0.001をもとにした数'],['decimal-smaller','Chia cho 10 và 100','10分の1、100分の1'],
 ['volume-composite','Thể tích hình ghép','組み合わせた立体の体積'],['proportion5-table','Điền bảng tỉ lệ','比例の表'],
 ['decimal-product-size','Tích lớn hơn hay nhỏ hơn?','積の大きさ'],['decimal-laws','Tính chất phép nhân thập phân','小数の計算のきまり'],
 ['decimal-quotient','Làm tròn thương','商の概数'],['decimal-remainder','Số dư trong phép chia thập phân','小数のわり算の余り'],['decimal-times','Gấp một số lần thập phân','小数の倍'],
 ['congruent-draw','Vẽ hình bằng nhau','合同な図形の作図'],['fraction-decimal','Đổi giữa phân số và thập phân','分数と小数の関係'],
 ['fraction-mixed-add','Cộng trừ phân số và thập phân','分数と小数の混じったたし算・ひき算'],['fraction-time','Thời gian biểu diễn bằng phân số','時間と分数'],
 ['average-total','Tìm tổng từ trung bình','平均から全体を求める'],['density','Mật độ dân số','人口密度'],
 ['parallelogram-outside','Chiều cao ngoài hình bình hành','平行四辺形の外にある高さ'],['triangle-outside','Đường cao ngoài tam giác','三角形の外にある高さ'],['triangle-height-area','Quan hệ chiều cao và diện tích','三角形の高さと面積'],
 ['percentage-rate','Tìm tỉ lệ và phần trăm','割合を求める'],['change-pattern','Quy luật qua bảng và biểu thức','変わり方調べ'],['nets','Hình khai triển của khối','立体の展開図'],
 ['grade5-review','Ôn tổng hợp lớp 5','5年のふくしゅう'],['symmetry-polygons','Đối xứng của các đa giác','多角形と対称'],
 ['fraction-times-integer','Phân số nhân số nguyên','分数×整数'],['fraction-div-integer','Phân số chia số nguyên','分数÷整数'],['fraction-mixed-mul','Phép tính hỗn hợp với phân số','分数・小数・整数の混じった計算'],
 ['approx-area','Ước lượng diện tích','およその面積'],['approx-volume','Ước lượng thể tích','およその体積'],['data-investigation','Dùng dữ liệu để trả lời câu hỏi','データを使った問題解決'],
 ['permutations','Liệt kê các cách sắp xếp','並べ方'],['data-life','Phân tích thời gian tự học','データを使って生活を見なおす']
 ];add.forEach(x=>fresh(...x));
 const specs=[
 [5,1,'decimal','Số nguyên và số thập phân','整数と小数','上',8,15,5,['place','decimal-units','decimal-smaller']],
 [5,2,'volume','Thể tích hình hộp và lập phương','直方体や立方体の体積','上',16,31,8,['volume-box','volume-cube','volume-composite','volume-unit']],
 [5,3,'relation5','Tỉ lệ: bước đầu','比例','上',32,38,4,['relation','proportion5-table']],
 [5,4,'decimal-multiplication','Nhân số thập phân','小数のかけ算','上',40,51,9,['decimal-mul','decimal-product-size','decimal-laws']],
 [5,5,'decimal-division','Chia số thập phân','小数のわり算','上',52,63,9,['decimal-div','decimal-quotient','decimal-remainder','decimal-times']],
 [5,6,'congruence','Hai hình bằng nhau','合同な図形','上',72,83,8,['congruent','congruent-draw']],
 [5,7,'shape','Góc trong các hình','図形の角','上',84,93,6,['angle','polygon']],
 [5,8,'integer','Chẵn lẻ, bội và ước','偶数と奇数、倍数と約数','上',94,107,12,['even','multiple','divisor']],
 [5,9,'fraction-relations','Phân số, thập phân và số nguyên','分数と小数、整数の関係','上',108,117,6,['fraction-meaning','fraction-decimal']],
 [5,10,'fraction','Cộng và trừ phân số','分数のたし算とひき算','下',2,17,10,['reduce','common','fraction-add','fraction-sub','fraction-mixed-add','fraction-time']],
 [5,11,'average-chapter','Số trung bình','平均','下',18,25,6,['average','average-total']],
 [5,12,'measure','Lượng trên một đơn vị','単位量あたりの大きさ','下',26,41,10,['unit-rate','density','speed']],
 [5,13,'area','Diện tích tứ giác và tam giác','四角形と三角形の面積','下',42,62,11,['rectangle','parallelogram','parallelogram-outside','triangle','triangle-outside','trapezoid','rhombus','triangle-height-area','composite']],
 [5,14,'percent','Tỉ lệ và phần trăm','割合','下',64,80,10,['percentage-rate','percent','percent-base']],
 [5,15,'graphs5','Biểu đồ băng và hình quạt','帯グラフと円グラフ','下',82,92,8,['chart']],
 [5,16,'patterns5','Tìm quy luật biến đổi','変わり方調べ','下',93,95,1,['change-pattern']],
 [5,17,'circle5','Đa giác đều và chu vi hình tròn','正多角形と円周の長さ','下',96,109,9,['regular','circumference']],
 [5,18,'solids5','Lăng trụ và hình trụ','角柱と円柱','下',110,119,7,['solids','nets']],
 [5,null,'review5','Ôn tập cuối lớp 5','5年のふくしゅう','下',124,128,5,['grade5-review']],
 [6,1,'symmetry','Hình đối xứng','対称な図形','',8,23,13,['line-symmetry','point-symmetry','symmetry-polygons']],
 [6,2,'algebra','Biểu thức có chữ','文字と式','',24,31,5,['expression']],
 [6,3,'fraction6','Nhân phân số; chia phân số cho số nguyên','分数×整数、分数÷整数、分数×分数','',32,49,13,['fraction-times-integer','fraction-div-integer','fraction-mul','reciprocal']],
 [6,4,'fraction-division6','Chia phân số cho phân số','分数÷分数','',50,65,7,['fraction-div','fraction-mixed-mul','fraction-word']],
 [6,5,'ratio','Tỉ số','比','',72,84,8,['ratio-simple','ratio-share']],
 [6,6,'scale','Phóng to và thu nhỏ','拡大図と縮図','',88,99,8,['scale','scale-draw']],
 [6,7,'data','Khảo sát dữ liệu','データの調べ方','',100,119,10,['data','frequency','data-investigation']],
 [6,8,'circle6','Diện tích hình tròn','円の面積','',120,132,6,['circle-area','circle-composite']],
 [6,9,'volume6','Thể tích lăng trụ và hình trụ','角柱と円柱の体積','',134,141,5,['prism','cylinder']],
 [6,10,'approx6','Ước lượng diện tích và thể tích','およその面積と体積','',142,146,5,['approx-area','approx-volume']],
 [6,11,'proportion','Tỉ lệ thuận và tỉ lệ nghịch','比例と反比例','',150,175,16,['proportion','proportion-graph','inverse']],
 [6,12,'counting6','Sắp xếp và chọn nhóm','並べ方と組み合わせ方','',176,185,6,['permutations','combinations']],
 [6,13,'finish','Tổng ôn toán tiểu học','算数のしあげ','',196,219,19,['final-number','final-shape','final-word','data-life']]
 ];
 const overrides={
 'rectangle':{supplement:true,pages:'Ôn kiến thức trước / 既習事項の復習'},'composite':{supplement:true,pages:'Bài luyện bổ sung / 補充問題'},
 'decimal-times':{pages:'上 p.64–69',supplement:true},'fraction-word':{pages:'p.66–70',supplement:true},'data-life':{pages:'p.190–195',supplement:true},
 'parallelogram':{pages:'下 p.43–46'},'parallelogram-outside':{pages:'下 p.46–48'},'triangle':{pages:'下 p.49–52'},'triangle-outside':{pages:'下 p.52–54'},'trapezoid':{pages:'下 p.55–57'},'rhombus':{pages:'下 p.58–59'},'triangle-height-area':{pages:'下 p.60'}
 };
 return specs.map(([grade,number,id,title,jp,volume,start,end,hours,ids])=>({grade,number,id,title,jp,source:{edition:2024,volume,start,end,hours},lessons:ids.map(key=>{
 const found=existing.get(key);if(!found)throw Error('Missing mapped lesson '+key);return {...found,...overrides[key]};})}));
}
