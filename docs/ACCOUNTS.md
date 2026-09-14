# Kích hoạt tài khoản và đồng bộ

## Trạng thái bản triển khai

Đã cấu hình Project URL và publishable key trong `config.js` cho dự án kbtrpdvoaxceswkmwojw. Bảng learning_progress và hàm lưu đã được áp dụng. Đã kiểm tra SQL bằng transaction rollback: chủ sở hữu đọc/ghi được, người khác không đọc/ghi được, khách không có quyền, phiên bản cũ bị từ chối. URL Configuration và SMTP chưa được xác minh/cấu hình vì kết nối hiện không có công cụ sửa Auth settings. Không có tài khoản giả hay mật khẩu lưu trong localStorage của ứng dụng.

## Thiết lập

1. Tạo/chọn dự án Supabase của chủ repo.
2. Chạy `supabase/schema.sql` trong SQL Editor. Đây là bảng riêng `learning_progress` và hàm `save_learning_progress`; không dùng các bảng khác.
3. Authentication → URL Configuration: Site URL và Redirect URL đều là `https://vn8690-create.github.io/kumon/` (thay nếu dùng tên miền khác).
4. Bật Email/password và xác nhận email. Cấu hình SMTP phù hợp để gửi email xác nhận và đặt lại mật khẩu; dịch vụ mail thử nghiệm có giới hạn người nhận/tần suất, không nên coi là gửi mail production.
5. Điền Project URL và **publishable key** hoặc legacy anon key vào `config.js`. Đây là cấu hình công khai. **Không dùng service_role, secret key hay database password trong repo.**
6. Publish thay đổi. Tạo hai tài khoản thử thuộc người quản lý, xác nhận email, kiểm tra đăng nhập, quên mật khẩu, tải lại và đăng xuất.
7. Kiểm tra tài khoản A không đọc/ghi được hàng của B và khách chưa đăng nhập không truy cập được bảng. SQL đã bật RLS nhưng cần kiểm chứng trực tiếp trên dự án được cấu hình.

## Dữ liệu và hành vi

- Một tài khoản phụ huynh có một hồ sơ bé: biệt danh, avatar, mục tiêu, lớp.
- Kết quả theo bài, lịch sử từng lượt và câu hỏi/đáp án mới được lưu trong tài khoản. Không tải ghi chú bài làm lên cloud; lượt đang làm dở chỉ lưu trên thiết bị.
- Cache tài khoản dùng khóa theo user ID, tách khỏi khách. Tiến độ khách chỉ nhập khi người dùng chủ động chọn và xác nhận.
- Sau thay đổi, đợi 800ms rồi lưu; hiển thị trạng thái thật. Mất mạng giữ bản trên thiết bị và thử lại khi online.
- Đồng bộ dùng số phiên bản ở máy chủ. Nếu hai máy cùng sửa, bản cũ bị từ chối; người dùng tải bản sao rồi chọn tải bản cloud. Chưa tự hợp nhất hai lịch sử.
- Không phải đồng bộ realtime: tải tiến độ lúc mở ứng dụng/đăng nhập hoặc bấm Đồng bộ lại. Hoàn tất đồng bộ trước khi chuyển thiết bị.
- Phiên đăng nhập do Supabase SDK quản lý. Không lưu mật khẩu trong dữ liệu học.
- Khi đăng xuất, cache tiến độ riêng theo tài khoản vẫn trên thiết bị; chỉ được app dùng lại sau đăng nhập đúng tài khoản. Trên thiết bị dùng chung nên quản lý dữ liệu trình duyệt phù hợp.
- Báo cáo 7 ngày dùng múi giờ Nhật Bản và chỉ tính lượt hoàn thành. Tổng câu đã làm tính cả lượt dở. Kết quả dựa trên tự đánh giá của bé.

## Kiểm tra đã chạy

`npm test`: phép tính, chọn bài ôn, cửa sổ ngày Nhật, điều hướng và luồng 5 câu với DOM adapter, tách khách/tài khoản, xử lý xung đột đồng bộ với cloud giả lập.

Chưa xác minh giao diện bằng trình duyệt thật trong môi trường này (không có browser executable). Chưa kiểm tra email, SDK CDN và đồng bộ đầu cuối trên trình duyệt. RLS và ghi dữ liệu đã được kiểm tra trực tiếp bằng SQL với hai danh tính thử trong transaction đã rollback.

## Tài liệu nhà cung cấp

- https://supabase.com/docs/guides/auth/passwords
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/auth/auth-smtp
