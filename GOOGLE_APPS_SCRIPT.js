/**
 * GOOGLE APPS SCRIPT - DUDI SOFTWARE LEAD BACKLOG NOTIFICATION
 * 
 * Target Email: vtb22522005@gmail.com
 * 
 * HƯỚNG DẪN CÀI ĐẶT:
 * 1. Truy cập https://script.google.com/ hoặc tạo Google Sheet mới -> Tiện ích mở rộng (Extensions) -> Apps Script.
 * 2. Dán toàn bộ mã nguồn bên dưới vào file Code.gs (thay thế mã mặc định).
 * 3. Nhấn "Deploy" (Triển khai) -> "New deployment" (Triển khai mới).
 * 4. Chọn type: "Web app".
 * 5. Cấu hình:
 *    - Description: DUDI Backlog Lead Webhook
 *    - Execute as: Me (email của bạn)
 *    - Who has access: Anyone (Bất kỳ ai) -> Cực kỳ quan trọng để website gửi được data!
 * 6. Nhấn "Deploy" -> Cấp quyền truy cập (Authorize access).
 * 7. Copy URL Web App (có dạng https://script.google.com/macros/s/.../exec) và dán vào file .env (VITE_GOOGLE_SCRIPT_URL=...)
 */

const TARGET_EMAIL = "vtb22522005@gmail.com";

function doPost(e) {
  try {
    let data = {};
    
    // Parse incoming request payload
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const fullname = data.fullname || "Chưa cung cấp";
    const company = data.company || "Chưa cung cấp";
    const phone = data.phone || "Chưa cung cấp";
    const techStack = data.techStack || "Không yêu cầu cụ thể";
    const estimatedHours = data.estimatedHours || "10 - 40 giờ";
    const startDate = data.startDate || "Càng sớm càng tốt";
    const roles = data.roles || "Chưa chọn vai trò";
    const backlog = data.backlog || "Không có nội dung";
    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // 1. Ghi vào Google Sheet (nếu script gắn liền với Sheet)
    try {
      const sheet = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        let tab = sheet.getSheetByName("BacklogLeads");
        if (!tab) {
          tab = sheet.insertSheet("BacklogLeads");
          tab.appendRow([
            "Thời Gian", 
            "Họ và Tên", 
            "Công Ty", 
            "Điện Thoại / Zalo", 
            "Vai Trò Cần Thuê", 
            "Công Nghệ", 
            "Số Giờ Dự Kiến", 
            "Ngày Bắt Đầu", 
            "Mô Tả Backlog"
          ]);
          tab.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#DC2626").setFontColor("#FFFFFF");
        }
        tab.appendRow([
          timestamp,
          fullname,
          company,
          phone,
          roles,
          techStack,
          estimatedHours,
          startDate,
          backlog
        ]);
      }
    } catch (sheetErr) {
      Logger.log("Sheet Error: " + sheetErr.toString());
    }

    // 2. Soạn Email HTML giao diện cao cấp gửi về vtb22522005@gmail.com
    const subject = `[DUDI BACKLOG] Yêu Cầu Ước Lượng Mới: ${fullname} - ${company}`;
    
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #F8FAFC; margin: 0; padding: 20px; color: #1E293B; }
          .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 10px 25px rgba(0,0,0,0.06); }
          .header { background: linear-gradient(135deg, #EE2D2A 0%, #B91C1C 100%); padding: 26px 30px; color: #FFFFFF; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.3px; }
          .header p { margin: 6px 0 0 0; font-size: 13px; opacity: 0.9; }
          .content { padding: 28px 30px; }
          .section-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #DC2626; margin-bottom: 14px; border-bottom: 1px solid #FEE2E2; padding-bottom: 6px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 22px; }
          .info-table td { padding: 9px 0; font-size: 13.5px; vertical-align: top; border-bottom: 1px solid #F1F5F9; }
          .info-table td.label { width: 38%; color: #64748B; font-weight: 600; }
          .info-table td.value { color: #0F172A; font-weight: 700; }
          .badge { display: inline-block; background: #FEF2F2; color: #DC2626; padding: 3px 8px; border-radius: 6px; font-weight: 700; border: 1px solid #FECACA; font-size: 12px; }
          .backlog-box { background: #F8FAFC; border-left: 4px solid #DC2626; padding: 14px 16px; border-radius: 0 8px 8px 0; margin-top: 6px; }
          .backlog-text { font-size: 13.5px; line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap; font-weight: 500; }
          .footer { background: #0F172A; color: #94A3B8; padding: 18px 30px; font-size: 12px; text-align: center; }
          .footer a { color: #EF4444; text-decoration: none; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Yêu Cầu Ước Lượng Kỹ Thuật Mới</h1>
            <p>Hệ thống DUDI Software vừa nhận được thông tin backlog từ khách hàng</p>
          </div>
          
          <div class="content">
            <div class="section-title">👤 Thông Tin Khách Hàng</div>
            <table class="info-table">
              <tr>
                <td class="label">Họ và Tên:</td>
                <td class="value">${fullname}</td>
              </tr>
              <tr>
                <td class="label">Công ty / Doanh nghiệp:</td>
                <td class="value">${company}</td>
              </tr>
              <tr>
                <td class="label">Số điện thoại / Zalo:</td>
                <td class="value"><a href="tel:${phone}" style="color: #DC2626; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td class="label">Thời gian gửi:</td>
                <td class="value">${timestamp}</td>
              </tr>
            </table>

            <div class="section-title">⚙️ Nhu Cầu & Vai Trò Kỹ Thuật</div>
            <table class="info-table">
              <tr>
                <td class="label">Vai trò cần thuê:</td>
                <td class="value"><span class="badge">${roles}</span></td>
              </tr>
              <tr>
                <td class="label">Công nghệ yêu cầu:</td>
                <td class="value">${techStack}</td>
              </tr>
              <tr>
                <td class="label">Số giờ dự kiến:</td>
                <td class="value">${estimatedHours}</td>
              </tr>
              <tr>
                <td class="label">Thời điểm bắt đầu:</td>
                <td class="value">${startDate}</td>
              </tr>
            </table>

            <div class="section-title">📋 Nội Dung Mô Tả Backlog</div>
            <div class="backlog-box">
              <p class="backlog-text">${backlog}</p>
            </div>
          </div>

          <div class="footer">
            <p style="margin: 0 0 4px 0;">Thông báo tự động từ Website Báo Giá DUDI Software</p>
            <p style="margin: 0;">Hotline hỗ trợ: <a href="tel:0909163821">0909 163 821</a> | <a href="https://dudi.vn">dudi.vn</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email via Google MailApp
    MailApp.sendEmail({
      to: TARGET_EMAIL,
      subject: subject,
      htmlBody: htmlBody
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Đã gửi email thành công!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "DUDI Google Apps Script Webhook is running." }))
    .setMimeType(ContentService.MimeType.JSON);
}
