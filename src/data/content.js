export const audiencesData = [
  {
    id: "agency",
    title: "Agency Sáng Tạo & Tech",
    tagline: "Cần bổ sung Developer / UI UX / PM cho backlog",
    description: "Cần bổ sung nguồn lực kỹ thuật tức thì để đáp ứng khối lượng backlog dồn dập từ nhiều dự án khách hàng cùng lúc mà không cần mở rộng đội ngũ nội bộ cố định.",
    recommendedModel: "Theo giờ hoặc theo sprint dự án",
    icon: "agency",
    image: "/images/audience-agency.jpg"
  },
  {
    id: "enterprise",
    title: "Doanh Nghiệp Đang Vận Hành",
    tagline: "Có backlog kỹ thuật thay đổi thường xuyên",
    description: "Có backlog tính năng, nâng cấp và bảo trì biến động liên tục theo thực tế kinh doanh. Cần đội ngũ kỹ thuật triển khai chuẩn chỉnh, minh bạch chi phí theo giờ thực tế.",
    recommendedModel: "Theo giờ và timesheet thực tế",
    icon: "enterprise",
    image: "/images/audience-enterprise.jpg"
  },
  {
    id: "whitelabel",
    title: "Đối Tác Hợp Tác White Label",
    tagline: "Cần đội kỹ thuật triển khai phía sau",
    description: "Cần một đối tác kỹ thuật tin cậy đứng phía sau thực hiện toàn diện sản phẩm dưới thương hiệu riêng của bạn, bảo mật tuyệt đối và bàn giao trọn vẹn tài sản mã nguồn.",
    recommendedModel: "Theo nhóm hoặc trọn gói backlog",
    icon: "whitelabel",
    image: "/images/audience-whitelabel.jpg"
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
  "Phân tích yêu cầu",
  "Ước lượng backlog",
  "Triển khai kỹ thuật",
  "Kiểm thử (Testing)",
  "Họp cần thiết",
  "Timesheet chi tiết",
  "Review code",
  "Nghiệm thu & Bàn giao"
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
