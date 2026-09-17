export const webSystemLinks = [
  { id: "link-1", label: "Cập nhật", url: "https://dudi-page.vercel.app/" },
  { id: "link-2", label: "Dịch vụ", url: "https://dudi-dichvu.vercel.app/" },
  { id: "link-3", label: "Bán hàng", url: "https://dudi-banhang.vercel.app/" },
  { id: "link-4", label: "SEO", url: "https://dudisoftwareseo.vercel.app/" },
  { id: "link-5", label: "Bảo trì", url: "https://dudi-baotri.vercel.app/" },
  { id: "link-6", label: "Giới thiệu", url: "https://dudi-gioithieu.vercel.app/" },
  { id: "link-7", label: "Tổng hợp", url: "https://dudi-tonghop.vercel.app/" }
];

export const navItems = [
  { id: "s03-target", label: "Đối tượng", number: "02" },
  { id: "s05-output", label: "Dịch vụ", number: "04" },
  { id: "s06-pricing", label: "Bảng giá", number: "05" },
  { id: "s07-process", label: "Quy trình", number: "06" },
  { id: "web-system", label: "Hệ thống web", isDropdown: true, children: webSystemLinks },
  { id: "s10-faq", label: "FAQ", number: "09" },
  { id: "s13-footer", label: "Liên hệ", number: "12" }
];

export const sectionsConfig = [
  { id: "s02-hero", label: "Hero", number: "01" },
  { id: "s03-target", label: "Đối tượng", number: "02" },
  { id: "s04-problem", label: "Vấn đề", number: "03" },
  { id: "s05-output", label: "Đầu ra", number: "04" },
  { id: "s06-pricing", label: "Bảng giá", number: "05" },
  { id: "s07-process", label: "Quy trình", number: "06" },
  { id: "s08-cases", label: "Mẫu Case", number: "07" },
  { id: "s09-limits", label: "Giới hạn", number: "08" },
  { id: "s10-faq", label: "FAQ", number: "09" },
  { id: "s11-form", label: "Nhận yêu cầu", number: "10" },
  { id: "s12-cta", label: "Kêu gọi", number: "11" },
  { id: "s13-footer", label: "Thông tin DUDI", number: "12" }
];

export const companyDetails = {
  name: "CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM DUDI",
  taxCode: "0319641544",
  hotline: "0909 163 821",
  hotlineTel: "tel:0909163821",
  email: "contact@dudisoftware.com",
  emailMailto: "mailto:contact@dudisoftware.com",
  zaloUrl: "https://zalo.me/0909163821",
  address: "49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh",
  version: "1.0 – 10/09/2026"
};
