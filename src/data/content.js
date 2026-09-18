export const audiencesData = [
  {
    id: "agency",
    badge: "AGENCY",
    title: "Agency & Tech",
    tagline: "Bổ sung Dev, UI/UX tức thì",
    description: "",
    recommendedModel: "Theo giờ hoặc sprint dự án",
    icon: "agency",
    features: [
      "Bổ sung Senior Dev theo giờ hoặc Sprint",
      "Kèm Designer UI/UX & PM điều phối",
      "Minh bạch timesheet, bảo mật 100%"
    ],
    detailedSpecs: [
      { label: "Mô hình", value: "Theo giờ / Sprint 2 tuần" },
      { label: "Bàn giao", value: "Mã nguồn sạch, Figma, Git" },
      { label: "Khởi động", value: "Sẵn sàng trong 24h - 48h" }
    ]
  },
  {
    id: "enterprise",
    badge: "DOANH NGHIỆP",
    title: "Doanh Nghiệp Vận Hành",
    tagline: "Xử lý backlog linh hoạt",
    description: "",
    recommendedModel: "Theo giờ và timesheet thực tế",
    icon: "enterprise",
    features: [
      "Phát triển tính năng & bảo trì liên tục",
      "Chỉ thanh toán theo số giờ thực tế",
      "Báo cáo tiến độ & nghiệm thu từng mốc"
    ],
    detailedSpecs: [
      { label: "Mô hình", value: "Timesheet theo đầu việc" },
      { label: "Bàn giao", value: "Module hoàn chỉnh & Báo cáo test" },
      { label: "Khởi động", value: "Ngay sau khi duyệt backlog" }
    ]
  },
  {
    id: "whitelabel",
    badge: "ẨN DANH",
    title: "White Label (Ẩn Danh)",
    tagline: "Đội ngũ kỹ thuật đứng sau",
    description: "",
    recommendedModel: "Theo nhóm hoặc trọn gói backlog",
    icon: "whitelabel",
    features: [
      "Đội ngũ kỹ thuật ẩn danh dưới tên bạn",
      "Cam kết bảo mật thỏa thuận NDA 100%",
      "Chuyển giao toàn quyền sở hữu mã nguồn"
    ],
    detailedSpecs: [
      { label: "Mô hình", value: "Đội ngũ chuyên trách / Trọn gói" },
      { label: "Bàn giao", value: "Toàn bộ Source Code & Tài liệu" },
      { label: "Khởi động", value: "Theo lịch trình của đối tác" }
    ]
  }
];

export const problemsData = [
  {
    id: "prob-1",
    title: "Thiếu Developer cho backlog",
    desc: "Khối lượng task dồn ứ, các đầu việc kỹ thuật bị trì hoãn do thiếu lập trình viên chuyên môn phù hợp."
  },
  {
    id: "prob-2",
    title: "Backlog thay đổi thường xuyên",
    desc: "Yêu cầu thay đổi nhanh theo bài toán kinh doanh, khó cố định phạm vi công việc từ đầu."
  },
  {
    id: "prob-3",
    title: "Cần bổ sung UI/UX chuyên sâu",
    desc: "Giao diện thiếu tính nhất quán và trải nghiệm người dùng chưa được tối ưu hóa chuẩn mực."
  },
  {
    id: "prob-4",
    title: "Cần PM điều phối chuyên nghiệp",
    desc: "Thiếu người bám sát tiến độ, phân rã task kỹ thuật và kiểm soát chất lượng bàn giao."
  },
  {
    id: "prob-5",
    title: "Dự án cần nhiều vai trò kết hợp",
    desc: "Cần sự phối hợp đồng bộ giữa Dev, UI/UX và PM mà không thể thuê lẻ từng nhân sự rời rạc."
  },
  {
    id: "prob-6",
    title: "Tối ưu chi phí nhân sự cố định",
    desc: "Tránh gánh nặng tài chính và rủi ro quản trị lâu dài khi duy trì bộ máy cồng kềnh."
  }
];

export const outputPills = [
  "Phân tích & Ước lượng backlog",
  "Lập trình & Review mã nguồn",
  "Kiểm thử (Testing) toàn diện",
  "Timesheet & Bàn giao nghiệm thu"
];

export const cooperationModels = [
  {
    id: "task-based",
    name: "Theo Việc",
    fitFor: "Việc nhỏ có đầu ra rõ",
    estimateBy: "Theo đầu việc",
    acceptBy: "Theo đầu ra",
    highlight: "Đầu ra xác định cụ thể"
  },
  {
    id: "hourly-based",
    name: "Theo Giờ",
    fitFor: "Backlog thay đổi thường xuyên",
    estimateBy: "Theo giờ và timesheet",
    acceptBy: "Theo timesheet và kết quả",
    highlight: "Linh hoạt tối đa"
  },
  {
    id: "sprint-based",
    name: "Theo Nhóm",
    fitFor: "Dự án cần nhiều vai trò",
    estimateBy: "Theo sprint hoặc tháng",
    acceptBy: "Theo sprint và backlog",
    highlight: "Toàn diện đa vai trò"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Tiếp nhận",
    desc: "Khách hàng gửi backlog và thông tin dự án cần hỗ trợ."
  },
  {
    number: "02",
    title: "Xác nhận",
    desc: "DUDI xác nhận: Vai trò, Phạm vi, Công nghệ & Số giờ ước lượng."
  },
  {
    number: "03",
    title: "Triển khai",
    desc: "Thực hiện công việc theo đúng phạm vi được hai bên phê duyệt."
  },
  {
    number: "04",
    title: "Test & Review",
    desc: "Kiểm thử, review mã nguồn và ghi nhận đầy đủ timesheet."
  },
  {
    number: "05",
    title: "Nghiệm thu & Bàn giao",
    desc: "Khách hàng nghiệm thu theo phạm vi và kết quả đã thống nhất."
  }
];

export const limitationsData = [
  "License phần mềm & bản quyền",
  "Máy chủ, Cloud & Hosting",
  "Thiết bị kiểm thử chuyên dụng",
  "Tài khoản store (Apple/Google)",
  "Dữ liệu / API trả phí bên thứ ba",
  "Chi phí công tác ngoài văn phòng",
  "Trực ngoài giờ không thỏa thuận",
  "Bảo hành ngoài đầu ra đã duyệt"
];

export const sampleCases = [
  {
    id: "case-1",
    title: "Backlog: Hệ Thống Dashboard Quản Trị & Báo Cáo",
    status: "Hoàn thành",
    roles: "1 Senior Developer, 1 UI/UX",
    estimatedHours: "40 giờ",
    actualHours: "38.5 giờ",
    output: "Figma UI Kit + Source code React/NodeJS chuẩn modular",
    resultNote: "Bàn giao đúng tiến độ, timesheet đối soát minh bạch 100%."
  },
  {
    id: "case-2",
    title: "Backlog: Tối Ưu Hiệu Năng & Tích Hợp API Mobile",
    status: "Hoàn thành",
    roles: "1 Senior Backend Developer",
    estimatedHours: "25 giờ",
    actualHours: "24.0 giờ",
    output: "API response latency giảm 65%, tài liệu Swagger đầy đủ",
    resultNote: "Dữ liệu được bảo mật danh tính khách hàng và repository tuyệt đối."
  }
];
