# Vườn Toán · 算数の庭

Ứng dụng web tĩnh giúp trẻ ôn toán lớp 5 và chuẩn bị lớp 6. Tên repo `kumon` do chủ repo chọn; ứng dụng độc lập, không liên kết với KUMON.

## Bản 2: tài khoản và giao diện gia đình

- Dashboard mới: mục tiêu ngày, hoạt động 7 ngày, tiến độ và gợi ý ôn.
- Hồ sơ bé: biệt danh, avatar, lớp, mục tiêu. Nhật ký mở lại từng câu đã học.
- Đã viết đăng ký/đăng nhập email, xác nhận email, quên/đổi mật khẩu qua Supabase.
- Đồng bộ riêng theo tài khoản, RLS và kiểm tra phiên bản chống ghi đè giữa thiết bị.
- **Cần kích hoạt Supabase**: xem [hướng dẫn tài khoản](docs/ACCOUNTS.md). Hiện app vẫn dùng chế độ lưu trên thiết bị; không tuyên bố cloud hoạt động khi cấu hình còn trống.

## Nền tảng bài học

- Mục lục chương → bài nhỏ cho lớp 5–6; mục chưa viết được ghi rõ **Đang biên soạn**.
- Tên bài Nhật–Việt, lý thuyết và lời giải hiện bằng tiếng Việt.
- Công thức, ví dụ, hình minh họa cho chữ nhật, bình hành, tam giác, hình chữ L.
- Sinh đề có quy tắc, không gọi AI, không cần API key hoặc backend.
- Làm ra giấy hoặc ghi chú, mở lời giải, tự đánh giá đúng/sai.
- Mỗi 5 câu tổng kết; ưu tiên dạng sai, giảm mức khi sai; 2 câu đúng liên tiếp gỡ khỏi ôn tập.
- Tiến độ và lượt đang làm lưu localStorage; xuất/nhập JSON. Có tích hợp đồng bộ tài khoản khi Supabase được cấu hình.

## Chạy thử

```sh
python -m http.server 8000
```

Mở http://localhost:8000. Không mở index.html bằng file:// vì ứng dụng sử dụng ES modules.

## GitHub Pages

Trong repo: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
Sau khi GitHub hoàn tất, địa chỉ dự kiến: https://vn8690-create.github.io/kumon/
Không cần build. Chưa có service worker, vì vậy không cam kết mở app khi mất mạng.

## Kiểm tra

```sh
npm test
```

Node 20+; không cần cài gói npm. Kiểm tra các dạng bài, tính toán hình học, phân số và chọn bài ôn. Kiểm tra trình duyệt bổ sung trong `tests/browser.cjs` cần Playwright được cài ở môi trường phát triển.

## Mở rộng nội dung

- `content.js`: mục lục và lý thuyết. Chỉ thêm vào `teaching` khi bộ sinh đề đã sẵn sàng.
- `engine.js`: sinh đề, đáp án, lời giải và quy tắc luyện tập.
- `app.js`: giao diện và tiến độ.
- `docs/CURRICULUM.md`: toàn bộ khung bài học và nguyên tắc biên soạn.

Đây là khung tự biên soạn theo các chủ đề toán tiểu học Nhật. Chưa đối chiếu với đúng nhà xuất bản/ấn bản mà bé đang dùng; cần mục lục sách ở trường để khớp thứ tự chính xác. Chưa phải bộ giáo trình hoàn chỉnh. Các mức hiện thay đổi chủ yếu phạm vi số; cần bổ sung bài vận dụng và nhận dạng khái niệm ở giai đoạn tiếp theo.
