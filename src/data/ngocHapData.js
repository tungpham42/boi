// Lục Diệu
export const lucDieu = {
  "Đại An": {
    meaning: "Mọi việc đều tốt, bình an, cầu tài lộc thuận lợi.",
    element: "Thổ",
    direction: "Tây Bắc",
    luckyHours: "5-7h, 11-13h",
    suitable: ["Khởi sự", "Xuất hành", "Cưới hỏi", "Xây dựng"],
    avoid: ["Kiện tụng", "Mổ xẻ"],
    color: "Vàng, nâu",
  },
  "Lưu Niên": {
    meaning: "Công việc trì trệ, nên kiên nhẫn chờ thời cơ.",
    element: "Thủy",
    direction: "Bắc",
    luckyHours: "15-17h, 19-21h",
    suitable: ["Học tập", "Nghiên cứu", "Lập kế hoạch dài hạn"],
    avoid: ["Đầu tư lớn", "Khởi sự quan trọng"],
    color: "Xanh dương, đen",
  },
  "Tốc Hỷ": {
    meaning: "Tin vui đến nhanh, thích hợp cho việc gấp rút.",
    element: "Hỏa",
    direction: "Nam",
    luckyHours: "9-11h, 13-15h",
    suitable: ["Thi cử", "Cầu tài", "Tỏ tình", "Ký kết"],
    avoid: ["Thưa kiện", "Xây mộ"],
    color: "Đỏ, hồng",
  },
  "Xích Khẩu": {
    meaning: "Dễ gặp tranh cãi, kỵ khởi sự lớn.",
    element: "Kim",
    direction: "Tây",
    luckyHours: "17-19h, 21-23h",
    suitable: ["Giải quyết mâu thuẫn", "Đàm phán"],
    avoid: ["Khởi kiện", "Cưới hỏi", "Ký kết quan trọng"],
    color: "Trắng, bạc",
    warning: "Nên ăn nói cẩn thận, tránh xung đột",
  },
  "Tiểu Cát": {
    meaning: "Việc nhỏ thuận lợi, nhưng không nên làm việc lớn.",
    element: "Mộc",
    direction: "Đông",
    luckyHours: "3-5h, 7-9h",
    suitable: ["Mua sắm nhỏ", "Gặp gỡ bạn bè", "Sửa chữa nhỏ"],
    avoid: ["Đầu tư lớn", "Xây nhà"],
    color: "Xanh lá",
  },
  "Không Vong": {
    meaning: "Mọi sự bất thành, nên tránh làm việc quan trọng.",
    element: "Không (vô định)",
    direction: "Trung tâm",
    luckyHours: "Không có giờ tốt",
    suitable: ["Thiền định", "Dọn dẹp", "Bỏ cái cũ"],
    avoid: ["Tất cả việc quan trọng", "Xuất hành", "Ký kết"],
    color: "Xám",
    warning: "Ngày cực xấu, nên hạn chế mọi hoạt động quan trọng",
  },
};

// Hàm tính Lục Diệu dựa trên ngày Âm lịch (cập nhật)
export const getLucDieu = (lunarDay) => {
  const index = (lunarDay - 1) % 6;
  const starName = Object.keys(lucDieu)[index];
  return {
    name: starName,
    ...lucDieu[starName],
    position: index + 1,
  };
};

// Nhị Thập Bát Tú (28 sao đầy đủ - mở rộng)
// Nhị Thập Bát Tú (28 sao đầy đủ - mở rộng hoàn chỉnh)
export const nhiThapBatTu = {
  Đẩu: {
    meaning: "Tốt cho xây dựng, cầu tài; xấu cho kiện tụng.",
    constellation: "Thanh Long",
    element: "Mộc",
    animal: "Giao long (rồng)",
    suitable: ["Xây dựng", "Khởi công", "Cầu tài lộc", "Mở cửa hàng"],
    avoid: ["Kiện tụng", "Tranh chấp", "Thưa gửi"],
    direction: "Đông",
    luckyColor: "Xanh lá",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về quyền lực và sự thăng tiến",
  },
  Ngưu: {
    meaning: "Tốt cho hôn lễ, cầu phúc; xấu cho xuất hành.",
    constellation: "Thanh Long",
    element: "Kim",
    animal: "Ngưu (trâu)",
    suitable: ["Cưới hỏi", "Cầu phúc", "Tế lễ", "An cư"],
    avoid: ["Xuất hành", "Đi xa", "Mua phương tiện"],
    direction: "Đông Bắc",
    luckyColor: "Trắng",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về sự ổn định và bền vững",
  },
  Nữ: {
    meaning: "Xấu cho mọi việc, nên cẩn thận.",
    constellation: "Thanh Long",
    element: "Thổ",
    animal: "Hư (dơi)",
    suitable: ["Dọn dẹp", "Sửa chữa nhỏ", "Không nên làm việc lớn"],
    avoid: ["Khởi sự", "Xuất hành", "Cưới hỏi", "Ký kết"],
    direction: "Bắc",
    luckyColor: "Vàng",
    starType: "Hung tinh",
    warning: "Ngày xấu, dễ gặp trở ngại",
  },
  Hư: {
    meaning: "Xấu cho khởi sự; tốt cho an táng.",
    constellation: "Thanh Long",
    element: "Hỏa",
    animal: "Thử (chuột)",
    suitable: ["An táng", "Sửa mộ", "Cúng bái tổ tiên"],
    avoid: ["Khởi công", "Khai trương", "Cưới hỏi"],
    direction: "Nam",
    luckyColor: "Đỏ",
    starType: "Hung tinh",
    additionalInfo: "Ngày tốt cho việc âm phần",
  },
  Nguy: {
    meaning: "Tốt cho cầu tài, hôn lễ; xấu cho kiện tụng.",
    constellation: "Thanh Long",
    element: "Thủy",
    animal: "Yến (én)",
    suitable: ["Cầu tài", "Hôn nhân", "Mua tài sản"],
    avoid: ["Kiện tụng", "Tranh chấp", "Thưa kiện"],
    direction: "Tây Nam",
    luckyColor: "Xanh dương",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về tài lộc và hạnh phúc",
  },
  Thất: {
    meaning: "Tốt cho xuất hành, cầu tài; xấu cho xây dựng.",
    constellation: "Thanh Long",
    element: "Hỏa",
    animal: "Trư (lợn)",
    suitable: ["Xuất hành", "Đi xa", "Kinh doanh", "Buôn bán"],
    avoid: ["Xây dựng", "Động thổ", "Sửa nhà"],
    direction: "Đông Nam",
    luckyColor: "Đỏ",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về sự di chuyển và giao thương",
  },
  Bích: {
    meaning: "Tốt cho mọi việc, đặc biệt xây dựng, hôn lễ.",
    constellation: "Thanh Long",
    element: "Thủy",
    animal: "Hải trư (lợn biển)",
    suitable: ["Xây dựng", "Hôn nhân", "Khai trương", "Ký kết"],
    avoid: ["Không có kiêng kỵ đặc biệt"],
    direction: "Bắc",
    luckyColor: "Xanh dương",
    starType: "Đại cát",
    additionalInfo: "Một trong những sao tốt nhất trong 28 sao",
  },
  Khuê: {
    meaning: "Tốt cho cầu phúc; xấu cho xuất hành.",
    constellation: "Chu Tước",
    element: "Mộc",
    animal: "Lang (sói)",
    suitable: ["Cầu phúc", "Tế lễ", "Học hành"],
    avoid: ["Xuất hành", "Đi xa", "Mua xe"],
    direction: "Tây",
    luckyColor: "Xanh lá",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về trí tuệ và học vấn",
  },
  Lâu: {
    meaning: "Tốt cho xây dựng, cầu tài; xấu cho kiện tụng.",
    constellation: "Chu Tước",
    element: "Thổ",
    animal: "Cẩu (chó)",
    suitable: ["Xây dựng", "Động thổ", "Mua nhà đất"],
    avoid: ["Kiện tụng", "Tranh chấp"],
    direction: "Tây Bắc",
    luckyColor: "Vàng",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về nhà cửa và bất động sản",
  },
  Vị: {
    meaning: "Tốt cho mọi việc, đặc biệt xây dựng.",
    constellation: "Chu Tước",
    element: "Hỏa",
    animal: "Trĩ (chim trĩ)",
    suitable: ["Xây dựng", "Khai trương", "Nhập trạch", "Cưới hỏi"],
    avoid: ["An táng", "Sửa mộ"],
    direction: "Nam",
    luckyColor: "Đỏ",
    starType: "Đại cát",
    additionalInfo: "Sao mang lại sự thịnh vượng",
  },
  Mão: {
    meaning: "Tốt cho cầu tài; xấu cho an táng.",
    constellation: "Chu Tước",
    element: "Kim",
    animal: "Kê (gà)",
    suitable: ["Cầu tài", "Kinh doanh", "Đầu tư"],
    avoid: ["An táng", "Sửa mộ", "Việc tang lễ"],
    direction: "Tây",
    luckyColor: "Trắng",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về tài lộc kinh doanh",
  },
  Tất: {
    meaning: "Tốt cho hôn lễ, xuất hành; xấu cho xây dựng.",
    constellation: "Chu Tước",
    element: "Thủy",
    animal: "Ô (quạ)",
    suitable: ["Hôn nhân", "Xuất hành", "Giao dịch"],
    avoid: ["Xây dựng", "Động thổ"],
    direction: "Bắc",
    luckyColor: "Xanh dương",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về quan hệ xã hội",
  },
  Chủy: {
    meaning: "Xấu cho mọi việc, nên tránh khởi sự.",
    constellation: "Chu Tước",
    element: "Hỏa",
    animal: "Hầu (khỉ)",
    suitable: ["Không có việc tốt", "Nên nghỉ ngơi"],
    avoid: ["Mọi việc quan trọng", "Khởi sự", "Xuất hành"],
    direction: "Nam",
    luckyColor: "Đỏ",
    starType: "Hung tinh",
    warning: "Ngày cực xấu, nên tránh mọi hoạt động quan trọng",
  },
  Sâm: {
    meaning: "Tốt cho cầu tài, xây dựng; xấu cho kiện tụng.",
    constellation: "Chu Tước",
    element: "Thủy",
    animal: "Viên (vượn)",
    suitable: ["Cầu tài", "Xây dựng", "Mua sắm lớn"],
    avoid: ["Kiện tụng", "Tranh chấp pháp lý"],
    direction: "Bắc",
    luckyColor: "Xanh dương",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về sự phát triển vật chất",
  },
  Tỉnh: {
    meaning: "Tốt cho cầu phúc; xấu cho xuất hành.",
    constellation: "Bạch Hổ",
    element: "Mộc",
    animal: "Hãn (tê giác)",
    suitable: ["Cầu phúc", "Tế lễ", "Cúng bái"],
    avoid: ["Xuất hành", "Đi xa"],
    direction: "Đông",
    luckyColor: "Xanh lá",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về phúc đức gia đình",
  },
  Quỷ: {
    meaning: "Xấu cho mọi việc, đặc biệt kỵ an táng.",
    constellation: "Bạch Hổ",
    element: "Kim",
    animal: "Dương (dê)",
    suitable: ["Không có việc tốt", "Nên dọn dẹp nhà cửa"],
    avoid: ["An táng", "Khởi sự", "Xuất hành", "Cưới hỏi"],
    direction: "Tây",
    luckyColor: "Trắng",
    starType: "Đại hung",
    warning: "Ngày rất xấu, đặc biệt kỵ việc âm phần",
  },
  Liễu: {
    meaning: "Xấu cho khởi sự, cầu tài; tốt cho an táng.",
    constellation: "Bạch Hổ",
    element: "Thổ",
    animal: "Hươu",
    suitable: ["An táng", "Sửa mộ", "Việc âm phần"],
    avoid: ["Khởi sự", "Kinh doanh", "Cầu tài"],
    direction: "Trung tâm",
    luckyColor: "Vàng",
    starType: "Hung tinh",
    additionalInfo: "Sao chủ về thế giới âm",
  },
  Tinh: {
    meaning: "Tốt cho hôn lễ; xấu cho xuất hành.",
    constellation: "Bạch Hổ",
    element: "Hỏa",
    animal: "Mã (ngựa)",
    suitable: ["Hôn nhân", "Lễ nghi", "Gặp gỡ gia đình"],
    avoid: ["Xuất hành", "Đi xa"],
    direction: "Nam",
    luckyColor: "Đỏ",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về hạnh phúc gia đình",
  },
  Trương: {
    meaning: "Tốt cho cầu tài, xây dựng; xấu cho kiện tụng.",
    constellation: "Bạch Hổ",
    element: "Thủy",
    animal: "Lộc (nai)",
    suitable: ["Cầu tài", "Xây dựng", "Đầu tư"],
    avoid: ["Kiện tụng", "Tranh chấp"],
    direction: "Bắc",
    luckyColor: "Xanh dương",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về sự mở rộng và phát triển",
  },
  Dực: {
    meaning: "Xấu cho mọi việc, nên cẩn thận.",
    constellation: "Bạch Hổ",
    element: "Hỏa",
    animal: "Xà (rắn)",
    suitable: ["Không có việc tốt", "Nên nghỉ ngơi"],
    avoid: ["Mọi việc quan trọng", "Khởi sự", "Xuất hành"],
    direction: "Nam",
    luckyColor: "Đỏ",
    starType: "Hung tinh",
    warning: "Ngày xấu, dễ gặp trở ngại và tai nạn",
  },
  Chẩn: {
    meaning: "Tốt cho xuất hành; xấu cho xây dựng.",
    constellation: "Bạch Hổ",
    element: "Mộc",
    animal: "Dẫn (giun)",
    suitable: ["Xuất hành", "Đi xa", "Giao dịch"],
    avoid: ["Xây dựng", "Động thổ"],
    direction: "Đông",
    luckyColor: "Xanh lá",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về sự lưu động",
  },
  Giác: {
    meaning: "Tốt cho cầu phúc; xấu cho an táng.",
    constellation: "Huyền Vũ",
    element: "Mộc",
    animal: "Giao (rồng đất)",
    suitable: ["Cầu phúc", "Tế lễ", "Học hành"],
    avoid: ["An táng", "Sửa mộ"],
    direction: "Đông",
    luckyColor: "Xanh lá",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về trí tuệ và minh mẫn",
  },
  Cang: {
    meaning: "Tốt cho xây dựng, cầu tài; xấu cho kiện tụng.",
    constellation: "Huyền Vũ",
    element: "Kim",
    animal: "Long (rồng)",
    suitable: ["Xây dựng", "Động thổ", "Mua nhà đất"],
    avoid: ["Kiện tụng", "Tranh chấp"],
    direction: "Tây",
    luckyColor: "Trắng",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về nền tảng vững chắc",
  },
  Đê: {
    meaning: "Tốt cho mọi việc, đặc biệt hôn lễ.",
    constellation: "Huyền Vũ",
    element: "Thổ",
    animal: "Lạc (nai nhỏ)",
    suitable: ["Hôn nhân", "Khai trương", "Ký kết", "Xuất hành"],
    avoid: ["Không có kiêng kỵ đặc biệt"],
    direction: "Trung tâm",
    luckyColor: "Vàng",
    starType: "Đại cát",
    additionalInfo: "Một trong những sao tốt nhất",
  },
  Phòng: {
    meaning: "Tốt cho xuất hành, cầu tài; xấu cho xây dựng.",
    constellation: "Huyền Vũ",
    element: "Thủy",
    animal: "Thố (thỏ)",
    suitable: ["Xuất hành", "Kinh doanh", "Buôn bán"],
    avoid: ["Xây dựng", "Động thổ"],
    direction: "Bắc",
    luckyColor: "Xanh dương",
    starType: "Cát tinh",
    additionalInfo: "Sao chủ về sự nhanh nhẹn và linh hoạt",
  },
  Tâm: {
    meaning: "Xấu cho mọi việc, nên tránh khởi sự.",
    constellation: "Huyền Vũ",
    element: "Hỏa",
    animal: "Hồ (cáo)",
    suitable: ["Không có việc tốt", "Nên nghỉ ngơi"],
    avoid: ["Mọi việc quan trọng", "Khởi sự", "Xuất hành"],
    direction: "Nam",
    luckyColor: "Đỏ",
    starType: "Hung tinh",
    warning: "Ngày cực xấu, nên tránh mọi hoạt động quan trọng",
  },
  Vĩ: {
    meaning: "Tốt cho xây dựng, cầu phúc; xấu cho kiện tụng.",
    constellation: "Huyền Vũ",
    element: "Hỏa",
    animal: "Hổ",
    suitable: ["Xây dựng", "Cầu phúc", "Tế lễ"],
    avoid: ["Kiện tụng", "Tranh chấp"],
    direction: "Nam",
    luckyColor: "Đỏ",
    starType: "Bình hòa",
    additionalInfo: "Sao chủ về sức mạnh và bảo vệ",
  },
  Cơ: {
    meaning: "Tốt cho mọi việc, đặc biệt hôn lễ.",
    constellation: "Huyền Vũ",
    element: "Thủy",
    animal: "Báo",
    suitable: ["Hôn nhân", "Khai trương", "Ký kết", "Xuất hành"],
    avoid: ["Không có kiêng kỵ đặc biệt"],
    direction: "Bắc",
    luckyColor: "Xanh dương",
    starType: "Đại cát",
    additionalInfo: "Sao kết thúc chu kỳ, mang lại may mắn trọn vẹn",
  },
};

// Hàm hỗ trợ xác định ngũ hành tương sinh
function getCompatibleElements(element) {
  const relationships = {
    Mộc: ["Hỏa", "Thủy"],
    Hỏa: ["Thổ", "Mộc"],
    Thổ: ["Kim", "Hỏa"],
    Kim: ["Thủy", "Thổ"],
    Thủy: ["Mộc", "Kim"],
  };
  return relationships[element] || [];
}

// Hàm hỗ trợ xác định ngũ hành tương khắc
function getConflictingElements(element) {
  const relationships = {
    Mộc: ["Kim", "Thổ"],
    Hỏa: ["Thủy", "Kim"],
    Thổ: ["Mộc", "Thủy"],
    Kim: ["Hỏa", "Mộc"],
    Thủy: ["Thổ", "Hỏa"],
  };
  return relationships[element] || [];
}
// Hàm tính Nhị Thập Bát Tú dựa trên ngày Âm lịch (hoàn chỉnh)
export const getNhiThapBatTu = (lunarDay) => {
  const index = (lunarDay - 1) % 28;
  const starName = Object.keys(nhiThapBatTu)[index];
  const starData = nhiThapBatTu[starName];

  return {
    name: starName,
    ...starData,
    position: index + 1,
    // Thêm thông tin phong thủy nâng cao
    compatibleElements: getCompatibleElements(starData.element),
    conflictingElements: getConflictingElements(starData.element),
    // Thêm thông tin về mùa phù hợp
    suitableSeason: getSuitableSeason(starData.constellation),
    // Thông tin tổng hợp
    summary: `Sao ${starName} (${starData.constellation}) - ${starData.starType}: ${starData.meaning}`,
  };
};

// Hàm hỗ trợ xác định mùa phù hợp
function getSuitableSeason(constellation) {
  const seasonMap = {
    "Thanh Long": "Xuân",
    "Chu Tước": "Hạ",
    "Bạch Hổ": "Thu",
    "Huyền Vũ": "Đông",
  };
  return seasonMap[constellation] || "Tất cả các mùa";
}

// Gợi ý phong thủy
export const phongThuyAdvice = {
  Mộc: {
    meaning:
      "Ngũ hành Mộc tượng trưng cho sự sinh trưởng, phát triển và sáng tạo.",
    colors: ["Xanh lá cây", "Xanh lam nhạt"],
    direction: "Đông, Đông Nam",
    items: ["Cây xanh", "Đồ nội thất gỗ", "Tranh ảnh cây cối", "Sổ sách"],
    plants: ["Cây kim tiền", "Cây ngọc bích", "Cây trầu bà", "Cây lưỡi hổ"],
    gemstones: ["Ngọc lục bảo", "Đá peridot", "Đá cẩm thạch xanh"],
    suitablePlaces: ["Phòng học", "Phòng làm việc", "Khu vực sáng tạo"],
    tips: [
      "Đặt cây xanh ở góc Đông hoặc Đông Nam để kích hoạt năng lượng Mộc.",
      "Tránh sử dụng quá nhiều đồ kim loại trong không gian Mộc vì Kim khắc Mộc.",
      "Sử dụng ánh sáng tự nhiên để tăng cường sự phát triển của năng lượng Mộc.",
      "Giữ không gian thông thoáng, tránh lộn xộn để Mộc lưu thông tốt.",
    ],
    compatibleElements: ["Thủy (tương sinh)", "Hỏa (tương hỗ)"],
    conflictingElements: ["Kim (tương khắc)", "Thổ (kị)"],
  },
  Hỏa: {
    meaning: "Ngũ hành Hỏa tượng trưng cho đam mê, năng lượng và sự biến đổi.",
    colors: ["Đỏ", "Hồng", "Cam", "Tím"],
    direction: "Nam",
    items: ["Đèn đỏ", "Nến", "Tranh mặt trời", "Vật phẩm hình tam giác"],
    plants: ["Cây hồng môn", "Cây trạng nguyên", "Cây kim ngân", "Cây vạn lộc"],
    gemstones: ["Hồng ngọc", "Thạch anh đỏ", "Đá mã não đỏ"],
    suitablePlaces: ["Phòng khách", "Khu vực tụ họp", "Không gian sáng tạo"],
    tips: [
      "Đặt một chiếc đèn đỏ hoặc nến ở hướng Nam để kích hoạt năng lượng Hỏa.",
      "Hạn chế đặt bể cá hoặc gương lớn ở khu vực Hỏa vì Thủy khắc Hỏa.",
      "Sử dụng ánh sáng ấm áp để tăng cường sự ấm cúng và đam mê.",
      "Tránh lạm dụng màu đen hoặc xanh dương trong không gian Hỏa.",
    ],
    compatibleElements: ["Mộc (tương sinh)", "Thổ (tương hỗ)"],
    conflictingElements: ["Thủy (tương khắc)", "Kim (kị)"],
  },
  Thổ: {
    meaning:
      "Ngũ hành Thổ tượng trưng cho sự ổn định, nuôi dưỡng và đáng tin cậy.",
    colors: ["Vàng", "Nâu đất", "Beige"],
    direction: "Trung tâm, Đông Bắc, Tây Nam",
    items: ["Đồ gốm", "Tượng đất nung", "Thảm màu nâu", "Đá tự nhiên"],
    plants: ["Cây lan quân tử", "Cây sống đời", "Cây đa búp đỏ"],
    gemstones: ["Thạch anh vàng", "Đá mắt hổ", "Ngọc bích vàng"],
    suitablePlaces: ["Phòng ăn", "Phòng ngủ", "Khu vực trung tâm nhà"],
    tips: [
      "Đặt một bình gốm hoặc đá tự nhiên ở trung tâm nhà để củng cố năng lượng Thổ.",
      "Tránh trồng quá nhiều cây xanh trong không gian Thổ vì Mộc khắc Thổ.",
      "Sử dụng ánh sáng dịu nhẹ và đồ nội thất vuông vức để tăng cường sự ổn định.",
      "Giữ khu vực trung tâm nhà sạch sẽ, không để đồ đạc lộn xộn.",
    ],
    compatibleElements: ["Hỏa (tương sinh)", "Kim (tương hỗ)"],
    conflictingElements: ["Mộc (tương khắc)", "Thủy (kị)"],
  },
  Kim: {
    meaning: "Ngũ hành Kim tượng trưng cho sự sắc sảo, rõ ràng và tinh tế.",
    colors: ["Trắng", "Bạc", "Xám", "Vàng ánh kim"],
    direction: "Tây, Tây Bắc",
    items: ["Vật phẩm kim loại", "Đồng hồ", "Chuông gió", "Tượng đồng"],
    plants: ["Cây bạch mã hoàng tử", "Cây lan ý", "Cây ngọc ngân"],
    gemstones: ["Thạch anh trắng", "Đá mặt trăng", "Kim cương"],
    suitablePlaces: ["Phòng làm việc", "Khu vực tài chính", "Phòng khách"],
    tips: [
      "Treo chuông gió kim loại ở hướng Tây để kích hoạt năng lượng Kim.",
      "Tránh sử dụng màu đỏ hoặc đồ trang trí hình tam giác vì Hỏa khắc Kim.",
      "Sử dụng đồ nội thất hình tròn hoặc oval để tăng cường sự hài hòa.",
      "Giữ các vật phẩm kim loại sạch sẽ, sáng bóng để duy trì năng lượng tích cực.",
    ],
    compatibleElements: ["Thổ (tương sinh)", "Thủy (tương hỗ)"],
    conflictingElements: ["Hỏa (tương khắc)", "Mộc (kị)"],
  },
  Thủy: {
    meaning:
      "Ngũ hành Thủy tượng trưng cho sự linh hoạt, trí tuệ và dòng chảy.",
    colors: ["Xanh dương", "Đen", "Xanh đậm"],
    direction: "Bắc",
    items: ["Bể cá", "Gương", "Đài phun nước", "Tranh sông nước"],
    plants: ["Cây thủy sinh", "Cây lan bình rượu", "Cây phát tài"],
    gemstones: ["Thạch anh đen", "Đá aquamarine", "Ngọc trai"],
    suitablePlaces: ["Phòng tắm", "Khu vực nghỉ ngơi", "Phòng thiền"],
    tips: [
      "Đặt bể cá nhỏ hoặc đài phun nước ở hướng Bắc để kích hoạt năng lượng Thủy.",
      "Hạn chế sử dụng màu vàng hoặc đồ gốm trong khu vực Thủy vì Thổ khắc Thủy.",
      "Sử dụng ánh sáng dịu và các đường nét uốn lượn để tăng cường dòng chảy.",
      "Tránh để nước đọng hoặc bẩn, vì điều này làm cản trở năng lượng Thủy.",
    ],
    compatibleElements: ["Kim (tương sinh)", "Mộc (tương hỗ)"],
    conflictingElements: ["Thổ (tương khắc)", "Hỏa (kị)"],
  },
};
