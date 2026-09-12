# HƯỚNG DẪN CẤU HÌNH GOOGLE APPS SCRIPT GỬI EMAIL VỀ `vtb22522005@gmail.com`

Hệ thống cho phép khi khách hàng điền form **"Gửi Thông Tin Backlog Để Nhận Ước Lượng"** trên website, thông tin sẽ được tự động:
1. Gửi email thông báo chi tiết (HTML đẹp mắt) về hòm thư: **`vtb22522005@gmail.com`**
2. Tự động lưu bản ghi vào Google Sheets để theo dõi và quản lý.

---

## 📌 BƯỚC 1: TẠO GOOGLE SHEET & APPS SCRIPT

1. Truy cập [Google Sheets](https://sheets.new) và tạo 1 bảng tính mới (đặt tên ví dụ: `DUDI - Danh Sách Backlog Leads`).
2. Trên thanh menu của Google Sheet, chọn **Tiện ích mở rộng (Extensions)** ➔ **Apps Script**.
3. Xóa toàn bộ đoạn mã mặc định trong file `Code.gs`.
4. Mở file [GOOGLE_APPS_SCRIPT.js](file:///d:/TaiLieu/Code/Intern/DUDI/DUDI_dongia/GOOGLE_APPS_SCRIPT.js), sao chép toàn bộ nội dung và dán vào `Code.gs`.
5. Nhấn biểu tượng **Lưu (Save / Ctrl + S)**.

---

## 🚀 BƯỚC 2: TRIỂN KHAI THÀNH WEB APP (DEPLOY)

1. Ở góc trên bên phải của màn hình Apps Script, nhấn nút **Triển khai (Deploy)** ➔ chọn **Triển khai mới (New deployment)**.
2. Nhấn biểu tượng bánh răng **Chọn loại (Select type)** ➔ chọn **Ứng dụng web (Web app)**.
3. Điền cấu hình như sau:
   - **Mô tả (Description)**: `DUDI Backlog Lead Email Webhook`
   - **Thực thi dưới dạng (Execute as)**: `Tôi (Me - email của bạn)`
   - **Ai có quyền truy cập (Who has access)**: **`Bất kỳ ai (Anyone)`** *(⚠️ Cực kỳ quan trọng: Phải chọn Anyone để website gửi được dữ liệu)*.
4. Nhấn nút **Triển khai (Deploy)**.
5. Một cửa sổ hiện lên yêu cầu cấp quyền:
   - Nhấn **Ủy quyền truy cập (Authorize access)**.
   - Chọn tài khoản Google của bạn.
   - Nếu thấy cảnh báo *"Google chưa xác minh ứng dụng này"*, nhấn **Nâng cao (Advanced)** ➔ Chọn **Đi tới ... (không an toàn)**.
   - Nhấn **Cho phép (Allow)**.
6. Sau khi triển khai thành công, Google sẽ cung cấp cho bạn một đường link **URL của ứng dụng web (Web app URL)** có dạng:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
   👉 Hãy **Sao chép (Copy)** đường link này.

---

## ⚙️ BƯỚC 3: DÁN LINK VÀO DỰ ÁN

1. Tạo file `.env` tại thư mục gốc của dự án `d:\TaiLieu\Code\Intern\DUDI\DUDI_dongia\.env`
2. Dán link vừa copy vào biến `VITE_GOOGLE_SCRIPT_URL`:
   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
   ```
3. Khởi động lại hoặc tiếp tục chạy `npm run dev` để website nhận link mới.

---

## 🧪 BƯỚC 4: KIỂM TRA (TEST)

1. Mở website và cuộn xuống form **Tiếp Nhận Backlog**.
2. Điền thông tin thử nghiệm và nhấn **Gửi backlog để nhận ước lượng**.
3. Kiểm tra hộp thư đến tại `vtb22522005@gmail.com` để nhận email thông báo.
