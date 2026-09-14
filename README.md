# Vườn Toán · 算数の庭

Ứng dụng web tĩnh giúp trẻ ôn toán lớp 5 và chuẩn bị lớp 6. Tên repo `kumon` do chủ repo chọn; ứng dụng độc lập, không liên kết với KUMON.

## Bản 2: tài khoản và giao diện gia đình

- Dashboard mới: mục tiêu ngày, hoạt động 7 ngày, tiến độ và gợi ý ôn.
- Hồ sơ bé: biệt danh, avatar, lớp, mục tiêu. Nhật ký mở lại từng câu đã học.
- Đã viết đăng ký/đăng nhập email, xác nhận email, quên/đổi mật khẩu qua Supabase.
- Đồng bộ riêng theo tài khoản, RLS và kiểm tra phiên bản chống ghi đè giữa thiết bị.
- **Đã nối dự án Supabase và tạo bảng**: xem [hướng dẫn tài khoản](docs/ACCOUNTS.md). Còn xác nhận URL chuyển hướng và cấu hình gửi email trước khi mở đăng ký rộng rãi.

## Nền tảng bài học

- Mục lục chương → bài nhỏ cho lớp 5–6; mục chưa viết được ghi rõ **Đang biên soạn**.
- 25 bài đang mở có lý thuyết, đề và lời giải Nhật–Việt. Nút chọn ngôn ngữ trên đầu trang; mặc định tiếng Nhật. Một số trang quản lý và thông báo tài khoản vẫn bằng tiếng Việt.
- Hình SVG kèm số đo cho 13 dạng hình học, diện tích, chu vi và thể tích; đường cao nét đứt. Hình được tạo từ số đo câu hỏi. Góc và hình không gian là hình minh họa, không dùng để đo trực tiếp.
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

Khung đã đối chiếu với bốn tài liệu kế hoạch Tokyo Shoseki 2024 do phụ huynh cung cấp: 18 chương chính lớp 5, 13 chương chính lớp 6, một mục ôn lớp 5; tổng 88 bài nhỏ. Hiện 25 bài có thể luyện. Các mục mới đang biên soạn. Chưa phải bộ giáo trình hoàn chỉnh. Các mức hiện thay đổi chủ yếu phạm vi số; cần bổ sung bài vận dụng và nhận dạng khái niệm ở giai đoạn tiếp theo.
