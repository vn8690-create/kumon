import {chapters,lessons,teaching} from './content.js';
import {teachingJa} from './japanese.js';
export const uiJa={
'⌂ Hôm nay':'⌂ ホーム','▤ Sách bài học':'▤ 学習もくじ','↻ Ôn bài sai':'↻ 復習','◷ Báo cáo học tập':'◷ 学習レポート','☺ Hồ sơ của bé':'☺ プロフィール','Tài khoản ↗':'アカウント ↗',
'← Sách bài học':'← 学習もくじ','Sách bài học':'学習もくじ','Hôm nay con sẽ học':'今日のめあて','Cùng xem một ví dụ':'例題を見てみよう','Đáp án:':'答え：','Con làm ra giấy, bấm xem lời giải rồi tự đánh giá. Sau 5 câu, mình cùng tổng kết.':'紙に解いてから解説を見て、できたかどうかを選びましょう。5問ごとにふり返ります。','Con sẵn sàng • Luyện 5 câu →':'準備できた • 5問にチャレンジ →','Khoảng 10–15 phút':'約10〜15分','Thử sức nào!':'やってみよう！','Bài làm của con':'自分の答え・計算','(không bắt buộc, không tự chấm)':'（入力は自由・自動採点ではありません）','Con có thể viết phép tính ở đây hoặc làm ra giấy.':'ここに式を書いても、紙に解いても大丈夫です。','Làm xong • Xem lời giải':'できた • 解説を見る','Cùng đối chiếu':'答えを確かめよう','Con đã làm thế nào?':'できたかな？','✓ Đúng và con đã hiểu':'✓ 正解・わかった','↻ Sai hoặc chưa hiểu':'↻ 間違えた・まだわからない','Tick thật lòng nhé. Bài sai giúp mình biết cần học lại điều gì.':'正直に選んでね。間違いは、次に学ぶことを教えてくれます。','Tạm nghỉ • Về hôm nay':'ひと休み • ホームへ','Hình minh họa không theo tỉ lệ.':'図は正確な縮尺ではありません。',
'HOÀN THÀNH MỘT LƯỢT':'5問クリア','Con đã cố gắng rồi! 🌱':'よくがんばりました！ 🌱','Theo phần tự đánh giá của con.':'自分で確かめた結果です。','Lượt sau có thể thử mức cao hơn.':'次は少し難しい問題にも挑戦できます。','Mình sẽ luyện thêm những dạng chưa chắc.':'まだ自信のない問題を復習しましょう。','Mình quay lại bài mẫu và luyện chậm hơn nhé.':'例題を見直して、ゆっくり練習しましょう。','Nhìn lại từng câu':'1問ずつふり返ろう','Lượt học tiếp theo':'次の練習','Tiếp tục củng cố và tăng nhẹ độ khó.':'復習しながら、少しずつレベルアップ。','Ôn các dạng sai • 5 câu':'間違えた問題を復習 • 5問','Luyện thêm • 5 câu':'もう一度練習 • 5問','Về trang chủ':'ホームへ','Xem lại:':'見直す：',
'TỦ SÁCH CỦA CON':'学習もくじ','Từng bài nhỏ, hiểu thật chắc.':'ひとつずつ、しっかりわかる。','Đang biên soạn':'準備中','Học bài':'学習する','Ôn lại':'復習する','Bắt đầu bài học →':'学習を始める →','Tiếp tục học →':'学習を続ける →','Xem lộ trình':'もくじを見る','Mục tiêu mỗi ngày':'1日の目標','Hôm nay, mình tiến thêm một bước.':'今日も、一歩ずつ。','LỘ TRÌNH DÀNH CHO CON':'今日のおすすめ','MỤC TIÊU HÔM NAY':'今日の目標','◷ 10–15 phút':'◷ 10〜15分','✎ 5 câu mỗi lượt':'✎ 1回5問','Nhịp học 7 ngày':'7日間の学習','Câu đã tự đánh giá':'答えを確かめた問題','Tỉ lệ tự đánh giá đúng':'自分で確認した正答率','Điều chỉnh mục tiêu':'目標を変える','Tính các lượt đã hoàn thành · Giờ Nhật Bản':'完了した練習を集計・日本時間','BƯỚC NHỎ TIẾP THEO':'次の一歩','Ôn lại, hiểu sâu hơn':'復習して、もっとわかる','Giữ nhịp mỗi ngày':'毎日少しずつ','Mở sổ ôn tập':'復習を開く','Khám phá bài học':'学習もくじを見る','Mỗi lượt 5 câu, vừa sức để học đều.':'1回5問。無理なく続けましょう。','Đã hoàn thành mục tiêu. Con làm tốt lắm!':'今日の目標達成！よくがんばりました。',
'Ôn lại để hiểu chắc hơn.':'復習して、しっかり理解しよう。','Những dạng con tick sai sẽ ở đây. Làm đúng liên tiếp 2 câu cùng dạng để ra khỏi danh sách ôn.':'間違えた問題がここに集まります。同じ種類で2問続けて正解すると、復習リストから外れます。','Xem lại bài mẫu':'例題を見直す','Chưa có dạng cần ôn ở lớp đang chọn. Con có thể mở sách để bắt đầu học.':'この学年では、まだ復習する問題はありません。もくじから学習を始めましょう。','Học từng chút, hiểu thật sâu. Dành cho học sinh lớp 5–6 và gia đình.':'少しずつ学んで、しっかり理解。小学5・6年生と家族のために。'
};
const dictionary={...uiJa};
for(const l of lessons)dictionary[l.title]=l.jp;
for(const c of chapters)dictionary[c.title]=c.jp;
for(const [id,t] of Object.entries(teaching))t.forEach((v,i)=>dictionary[v]=teachingJa[id][i]);
const entries=Object.entries(dictionary).sort((a,b)=>b[0].length-a[0].length);
export function japaneseMarkup(html){
 // Translate generated display text only. Preserve tags, values and learner notes.
 return html.split(/(<textarea\b[^>]*>[\s\S]*?<\/textarea>|<[^>]+>)/gi).map(part=>{
 if(part.startsWith('<'))return part;
 for(const [vi,ja] of entries)part=part.split(vi).join(ja);
 return part.replace(/LỚP (\d)/g,'$1年生').replace(/Lớp (\d)/g,'$1年生').replace(/Câu (\d+)\/5 · Mức (\d+)/g,'$1問目 / 5問 · レベル$2').replace(/Câu (\d+)/g,'第$1問').replace(/(\d+) \/ 5 câu đúng/g,'5問中 $1問正解').replace(/GÓC HỌC TẬP · /g,'学習スペース · ');
 }).join('');
}
