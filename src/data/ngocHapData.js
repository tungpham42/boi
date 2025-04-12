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

// Hàm tính Lục Diệu
export const getLucDieu = (lunarDay, lunarMonth) => {
  const cycle = (lunarDay + lunarMonth - 2) % 6;
  const starName = Object.keys(lucDieu)[cycle];
  return {
    name: starName,
    ...lucDieu[starName],
    position: cycle + 1,
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
// Hàm tính Nhị Thập Bát Tú
export const getNhiThapBatTu = (lunarDay, lunarMonth) => {
  const cycle = (lunarDay + lunarMonth - 2) % 28;
  const starName = Object.keys(nhiThapBatTu)[cycle];
  const starData = nhiThapBatTu[starName];

  return {
    name: starName,
    ...starData,
    position: cycle + 1,
    compatibleElements: getCompatibleElements(starData.element),
    conflictingElements: getConflictingElements(starData.element),
    suitableSeason: getSuitableSeason(starData.constellation),
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
    meaning: "Mộc tượng trưng cho sự sinh trưởng, sáng tạo.",
    colors: ["Xanh lá", "Xanh lam"],
    direction: "Đông, Đông Nam",
    items: ["Cây xanh", "Đồ gỗ", "Tranh cây cối"],
    plants: ["Kim tiền", "Ngọc bích", "Trầu bà"],
    gemstones: ["Ngọc lục bảo", "Peridot"],
    tips: [
      "Đặt cây xanh hướng Đông để kích hoạt tài lộc.",
      "Tránh đồ kim loại sắc nhọn vì Kim khắc Mộc.",
      "Dùng ánh sáng tự nhiên để tăng sinh khí.",
      "Giữ không gian thoáng, tránh lộn xộn.",
    ],
  },
  Hỏa: {
    meaning: "Hỏa tượng trưng cho đam mê, năng lượng.",
    colors: ["Đỏ", "Hồng", "Cam"],
    direction: "Nam",
    items: ["Đèn đỏ", "Nến", "Tranh mặt trời"],
    plants: ["Hồng môn", "Trạng nguyên", "Vạn lộc"],
    gemstones: ["Hồng ngọc", "Mã não đỏ"],
    tips: [
      "Đặt đèn đỏ hướng Nam để kích hoạt danh vọng.",
      "Hạn chế bể cá vì Thủy khắc Hỏa.",
      "Sử dụng ánh sáng ấm để tăng năng lượng.",
      "Tránh màu đen hoặc xanh dương quá nhiều.",
    ],
  },
  Thổ: {
    meaning: "Thổ tượng trưng cho sự ổn định, nuôi dưỡng.",
    colors: ["Vàng", "Nâu", "Beige"],
    direction: "Trung tâm, Đông Bắc",
    items: ["Gốm sứ", "Đá tự nhiên", "Thảm nâu"],
    plants: ["Lan quân tử", "Sống đời"],
    gemstones: ["Thạch anh vàng", "Mắt hổ"],
    tips: [
      "Đặt gốm sứ ở trung tâm nhà để củng cố ổn định.",
      "Tránh cây xanh quá nhiều vì Mộc khắc Thổ.",
      "Dùng ánh sáng dịu, đồ vuông vức.",
      "Giữ trung tâm nhà sạch sẽ, gọn gàng.",
    ],
  },
  Kim: {
    meaning: "Kim tượng trưng cho sự sắc sảo, tinh tế.",
    colors: ["Trắng", "Bạc", "Vàng kim"],
    direction: "Tây, Tây Bắc",
    items: ["Kim loại", "Chuông gió", "Tượng đồng"],
    plants: ["Bạch mã", "Lan ý"],
    gemstones: ["Thạch anh trắng", "Kim cương"],
    tips: [
      "Treo chuông gió hướng Tây để kích hoạt tài lộc.",
      "Tránh đồ đỏ hoặc hình tam giác vì Hỏa khắc Kim.",
      "Dùng đồ hình tròn để tăng hài hòa.",
      "Giữ vật kim loại sạch, sáng bóng.",
    ],
  },
  Thủy: {
    meaning: "Thủy tượng trưng cho trí tuệ, linh hoạt.",
    colors: ["Xanh dương", "Đen"],
    direction: "Bắc",
    items: ["Bể cá", "Gương", "Tranh sông nước"],
    plants: ["Thủy sinh", "Phát tài"],
    gemstones: ["Thạch anh đen", "Aquamarine"],
    tips: [
      "Đặt bể cá hướng Bắc để kích hoạt trí tuệ.",
      "Hạn chế đồ gốm vì Thổ khắc Thủy.",
      "Dùng ánh sáng dịu, đường nét uốn lượn.",
      "Giữ nước sạch, tránh nước đọng.",
    ],
  },
};

// Định nghĩa 12 Trực
export const truc = {
  Kiến: {
    meaning: "Tốt cho khởi sự, xây dựng, nhưng cần cẩn thận tranh chấp.",
    suitable: ["Xây dựng", "Khai trương", "Ký kết"],
    avoid: ["Kiện tụng", "Tranh cãi"],
    element: "Mộc",
    color: "Xanh lá",
    daoType: "Thanh Long Hoàng Đạo",
  },
  Trừ: {
    meaning: "Tốt cho dọn dẹp, loại bỏ cái cũ, chữa bệnh.",
    suitable: ["Dọn dẹp", "Sửa chữa", "Chữa bệnh"],
    avoid: ["Khởi sự mới", "Kết hôn"],
    element: "Thủy",
    color: "Xanh dương",
    daoType: "Minh Đường Hoàng Đạo",
  },
  Mãn: {
    meaning: "Tốt cho cầu tài, tích lũy, nhưng kỵ xuất hành xa.",
    suitable: ["Cầu tài", "Tích trữ", "Mua sắm"],
    avoid: ["Xuất hành", "Đi xa"],
    element: "Thổ",
    color: "Vàng",
    daoType: "Thiên Hình Hắc Đạo",
  },
  Bình: {
    meaning: "Tốt cho mọi việc, đặc biệt là lập kế hoạch.",
    suitable: ["Lập kế hoạch", "Kết hôn", "Giao dịch", "Xuất hành"],
    avoid: [],
    element: "Kim",
    color: "Trắng",
    daoType: "Chu Tước Hắc Đạo",
  },
  Định: {
    meaning: "Tốt cho ký kết, đàm phán, nhưng kỵ kiện tụng.",
    suitable: ["Ký kết", "Đàm phán", "Kết hôn", "Nhập trạch"],
    avoid: ["Kiện tụng", "Tranh chấp"],
    element: "Hỏa",
    color: "Đỏ",
    daoType: "Kim Quỹ Hoàng Đạo",
  },
  Chấp: {
    meaning: "Tốt cho xây dựng, sửa chữa, nhưng kỵ khởi sự lớn.",
    suitable: ["Xây dựng", "Sửa chữa", "Mua sắm nhỏ"],
    avoid: ["Khai trương", "Kết hôn"],
    element: "Thổ",
    color: "Vàng",
    daoType: "Thiên Lao Hắc Đạo",
  },
  Phá: {
    meaning: "Xấu cho hầu hết mọi việc, chỉ tốt cho phá dỡ.",
    suitable: ["Phá dỡ", "Chữa bệnh"],
    avoid: ["Khởi sự", "Kết hôn", "Xuất hành"],
    element: "Hỏa",
    color: "Đỏ",
    warning: "Ngày xấu, nên hạn chế hoạt động quan trọng.",
    daoType: "Huyền Vũ Hắc Đạo",
  },
  Nguy: {
    meaning: "Xấu, dễ gặp nguy hiểm, chỉ nên nghỉ ngơi.",
    suitable: ["Nghỉ ngơi", "Thiền định"],
    avoid: ["Mọi việc quan trọng", "Xuất hành"],
    element: "Thủy",
    color: "Xanh dương",
    warning: "Ngày rất xấu, nên tránh hoạt động lớn.",
    daoType: "Tư Mệnh Hoàng Đạo",
  },
  Thành: {
    meaning: "Tốt cho hoàn thành công việc, cưới hỏi.",
    suitable: ["Kết hôn", "Khai trương", "Hoàn thành dự án"],
    avoid: ["Phá dỡ", "Kiện tụng"],
    element: "Mộc",
    color: "Xanh lá",
    daoType: "Ngọc Đường Hoàng Đạo",
  },
  Thâu: {
    meaning: "Tốt cho thu hoạch, tích lũy, nhưng kỵ xuất hành.",
    suitable: ["Thu hoạch", "Tích lũy"],
    avoid: ["Xuất hành", "Đi xa"],
    element: "Kim",
    color: "Trắng",
    daoType: "Thiên Ngục Hắc Đạo",
  },
  Khai: {
    meaning: "Tốt cho mọi việc, đặc biệt khai trương, khởi sự.",
    suitable: ["Khai trương", "Khởi sự", "Kết hôn", "Xuất hành"],
    avoid: ["An táng"],
    element: "Thủy",
    color: "Xanh dương",
    daoType: "Thanh Long Hoàng Đạo",
  },
  Bế: {
    meaning: "Tốt cho kết thúc, cất giữ, nhưng kỵ khởi sự mới.",
    suitable: ["Kết thúc dự án", "Cất giữ"],
    avoid: ["Khởi sự", "Khai trương"],
    element: "Thổ",
    color: "Vàng",
    daoType: "Câu Trần Hắc Đạo",
  },
};

// Định nghĩa 24 Tiết khí
export const tietKhi = {
  "Lập Xuân": {
    meaning: "Bắt đầu mùa xuân, vạn vật khởi sinh.",
    suitable: ["Khởi sự", "Gieo trồng", "Cầu phúc"],
    avoid: ["Phá dỡ", "An táng"],
    season: "Xuân",
    element: "Mộc",
  },
  "Vũ Thủy": {
    meaning: "Mưa rơi, đất trời ẩm ướt, thích hợp gieo trồng.",
    suitable: ["Gieo trồng", "Tưới tiêu"],
    avoid: ["Xây dựng", "Động thổ"],
    season: "Xuân",
    element: "Thủy",
  },
  "Kinh Trập": {
    meaning: "Côn trùng tỉnh giấc, mùa xuân trỗi dậy.",
    suitable: ["Khởi công", "Cầu tài"],
    avoid: ["Kiện tụng"],
    season: "Xuân",
    element: "Mộc",
  },
  "Xuân Phân": {
    meaning: "Ngày và đêm bằng nhau, cân bằng âm dương.",
    suitable: ["Kết hôn", "Ký kết", "Hòa giải"],
    avoid: ["Phá dỡ"],
    season: "Xuân",
    element: "Thổ",
  },
  "Thanh Minh": {
    meaning: "Trời trong sáng, tốt cho cúng bái tổ tiên.",
    suitable: ["Cúng bái", "An táng", "Sửa mộ"],
    avoid: ["Khai trương"],
    season: "Xuân",
    element: "Mộc",
  },
  "Cốc Vũ": {
    meaning: "Mưa phùn, tốt cho mùa màng.",
    suitable: ["Gieo trồng", "Cầu phúc"],
    avoid: ["Xuất hành xa"],
    season: "Xuân",
    element: "Thủy",
  },
  "Lập Hạ": {
    meaning: "Bắt đầu mùa hè, thời tiết ấm áp.",
    suitable: ["Khởi sự", "Xây dựng"],
    avoid: ["An táng"],
    season: "Hạ",
    element: "Hỏa",
  },
  "Tiểu Mãn": {
    meaning: "Cây cối bắt đầu kết trái, mùa màng phát triển.",
    suitable: ["Thu hoạch nhỏ", "Cầu tài"],
    avoid: ["Động thổ lớn"],
    season: "Hạ",
    element: "Thổ",
  },
  "Mang Chủng": {
    meaning: "Thời điểm gieo hạt, mùa màng bận rộn.",
    suitable: ["Gieo trồng", "Làm nông"],
    avoid: ["Kết hôn"],
    season: "Hạ",
    element: "Thủy",
  },
  "Hạ Chí": {
    meaning: "Ngày dài nhất, dương khí mạnh mẽ.",
    suitable: ["Cầu tài", "Khởi công"],
    avoid: ["Sửa mộ"],
    season: "Hạ",
    element: "Hỏa",
  },
  "Tiểu Thử": {
    meaning: "Thời tiết bắt đầu nóng, mùa hè rõ rệt.",
    suitable: ["Mua sắm", "Giao dịch"],
    avoid: ["Xây dựng lớn"],
    season: "Hạ",
    element: "Hỏa",
  },
  "Đại Thử": {
    meaning: "Nắng nóng đỉnh điểm, cần chú ý sức khỏe.",
    suitable: ["Nghỉ ngơi", "Cầu phúc"],
    avoid: ["Khởi sự lớn"],
    season: "Hạ",
    element: "Hỏa",
  },
  "Lập Thu": {
    meaning: "Bắt đầu mùa thu, thời tiết mát mẻ.",
    suitable: ["Khởi sự", "Kết hôn"],
    avoid: ["Phá dỡ"],
    season: "Thu",
    element: "Kim",
  },
  "Xử Thử": {
    meaning: "Hết nóng, thời tiết dễ chịu.",
    suitable: ["Xuất hành", "Giao dịch"],
    avoid: ["An táng"],
    season: "Thu",
    element: "Kim",
  },
  "Bạch Lộ": {
    meaning: "Sương trắng xuất hiện, thời tiết lạnh dần.",
    suitable: ["Cầu phúc", "Học hành"],
    avoid: ["Động thổ"],
    season: "Thu",
    element: "Thủy",
  },
  "Thu Phân": {
    meaning: "Ngày và đêm bằng nhau, âm dương hòa hợp.",
    suitable: ["Kết hôn", "Ký kết", "Hòa giải"],
    avoid: ["Kiện tụng"],
    season: "Thu",
    element: "Thổ",
  },
  "Hàn Lộ": {
    meaning: "Sương lạnh xuất hiện, thời tiết se lạnh.",
    suitable: ["Thu hoạch", "Cất giữ"],
    avoid: ["Xuất hành xa"],
    season: "Thu",
    element: "Thủy",
  },
  "Sương Giáng": {
    meaning: "Sương mù dày đặc, trời lạnh rõ rệt.",
    suitable: ["Nghỉ ngơi", "Dọn dẹp"],
    avoid: ["Khởi sự lớn"],
    season: "Thu",
    element: "Thủy",
  },
  "Lập Đông": {
    meaning: "Bắt đầu mùa đông, thời tiết lạnh giá.",
    suitable: ["Cất giữ", "Kết thúc dự án"],
    avoid: ["Khởi sự mới"],
    season: "Đông",
    element: "Thủy",
  },
  "Tiểu Tuyết": {
    meaning: "Tuyết nhẹ rơi, thời tiết lạnh hơn.",
    suitable: ["Học hành", "Nghiên cứu"],
    avoid: ["Xuất hành xa"],
    season: "Đông",
    element: "Thủy",
  },
  "Đại Tuyết": {
    meaning: "Tuyết dày, mùa đông khắc nghiệt.",
    suitable: ["Nghỉ ngơi", "Cầu phúc"],
    avoid: ["Khởi sự lớn"],
    season: "Đông",
    element: "Thủy",
  },
  "Đông Chí": {
    meaning: "Ngày ngắn nhất, âm khí mạnh mẽ.",
    suitable: ["Cúng bái", "Sửa mộ"],
    avoid: ["Kết hôn"],
    season: "Đông",
    element: "Thủy",
  },
  "Tiểu Hàn": {
    meaning: "Lạnh nhẹ, mùa đông sâu sắc.",
    suitable: ["Dọn dẹp", "Kết thúc"],
    avoid: ["Khởi sự mới"],
    season: "Đông",
    element: "Thủy",
  },
  "Đại Hàn": {
    meaning: "Lạnh giá đỉnh điểm, cần giữ ấm.",
    suitable: ["Nghỉ ngơi", "Cầu phúc"],
    avoid: ["Khởi sự lớn"],
    season: "Đông",
    element: "Thủy",
  },
};

// Hàm tính Trực
export const getTruc = (lunarDay, lunarMonth) => {
  const trucOrder = [
    "Kiến",
    "Trừ",
    "Mãn",
    "Bình",
    "Định",
    "Chấp",
    "Phá",
    "Nguy",
    "Thành",
    "Thâu",
    "Khai",
    "Bế",
  ];
  const cycle = (lunarDay + lunarMonth - 2) % 12;
  const trucName = trucOrder[cycle];
  return {
    name: trucName,
    ...truc[trucName],
    position: cycle + 1,
  };
};

// Hàm tính Tiết khí
export const getTietKhi = (solarDate) => {
  const day = solarDate.getDate();
  const month = solarDate.getMonth() + 1;
  const tietKhiOrder = [
    { name: "Lập Xuân", month: 2, day: 4 },
    { name: "Vũ Thủy", month: 2, day: 19 },
    { name: "Kinh Trập", month: 3, day: 5 },
    { name: "Xuân Phân", month: 3, day: 20 },
    { name: "Thanh Minh", month: 4, day: 4 },
    { name: "Cốc Vũ", month: 4, day: 20 },
    { name: "Lập Hạ", month: 5, day: 5 },
    { name: "Tiểu Mãn", month: 5, day: 21 },
    { name: "Mang Chủng", month: 6, day: 5 },
    { name: "Hạ Chí", month: 6, day: 21 },
    { name: "Tiểu Thử", month: 7, day: 7 },
    { name: "Đại Thử", month: 7, day: 23 },
    { name: "Lập Thu", month: 8, day: 7 },
    { name: "Xử Thử", month: 8, day: 23 },
    { name: "Bạch Lộ", month: 9, day: 7 },
    { name: "Thu Phân", month: 9, day: 23 },
    { name: "Hàn Lộ", month: 10, day: 8 },
    { name: "Sương Giáng", month: 10, day: 23 },
    { name: "Lập Đông", month: 11, day: 7 },
    { name: "Tiểu Tuyết", month: 11, day: 22 },
    { name: "Đại Tuyết", month: 12, day: 7 },
    { name: "Đông Chí", month: 12, day: 21 },
    { name: "Tiểu Hàn", month: 1, day: 5 },
    { name: "Đại Hàn", month: 1, day: 20 },
  ];

  let closestTietKhi = null;
  let minDiff = Infinity;
  const inputDate = new Date(solarDate.getFullYear(), month - 1, day);

  for (const tk of tietKhiOrder) {
    const tkDate = new Date(solarDate.getFullYear(), tk.month - 1, tk.day);
    const diff = Math.abs(inputDate - tkDate);
    if (diff < minDiff) {
      minDiff = diff;
      closestTietKhi = tk.name;
    }
  }

  return {
    name: closestTietKhi,
    ...tietKhi[closestTietKhi],
  };
};

export const getHoangHacDao = (lunarDay, lunarMonth, solarDate) => {
  const lucDieuData = getLucDieu(lunarDay, lunarMonth);
  const nhiThapBatTuData = getNhiThapBatTu(lunarDay, lunarMonth);
  const trucData = getTruc(lunarDay, lunarMonth);
  const tietKhiData = getTietKhi(solarDate);

  const goodLucDieu = ["Đại An", "Tốc Hỷ", "Tiểu Cát"];
  const badLucDieu = ["Không Vong", "Xích Khẩu"];
  const goodTruc = ["Khai", "Thành", "Bình", "Định", "Kiến", "Trừ"];
  const badTruc = ["Phá", "Nguy", "Chấp", "Thâu", "Bế"];
  const hoangDaoTruc = [
    "Thanh Long Hoàng Đạo",
    "Minh Đường Hoàng Đạo",
    "Kim Quỹ Hoàng Đạo",
    "Ngọc Đường Hoàng Đạo",
    "Tư Mệnh Hoàng Đạo",
  ];
  const hacDaoTruc = [
    "Thiên Hình Hắc Đạo",
    "Chu Tước Hắc Đạo",
    "Thiên Lao Hắc Đạo",
    "Huyền Vũ Hắc Đạo",
    "Thiên Ngục Hắc Đạo",
    "Câu Trần Hắc Đạo",
  ];
  const goodStars = ["Bích", "Vị", "Đê", "Cơ"];
  const badStars = ["Nữ", "Hư", "Chủy", "Quỷ", "Liễu", "Dực", "Tâm"];

  let score = 0;

  // Đánh giá Lục Diệu
  if (goodLucDieu.includes(lucDieuData.name)) score += 2;
  if (badLucDieu.includes(lucDieuData.name)) score -= 2;

  // Đánh giá Nhị Thập Bát Tú
  if (goodStars.includes(nhiThapBatTuData.name)) score += 2;
  if (badStars.includes(nhiThapBatTuData.name)) score -= 2;
  if (nhiThapBatTuData.starType === "Đại cát") score += 1;
  if (
    nhiThapBatTuData.starType === "Hung tinh" ||
    nhiThapBatTuData.starType === "Đại hung"
  )
    score -= 1;

  // Đánh giá Trực
  if (goodTruc.includes(trucData.name)) score += 2;
  if (badTruc.includes(trucData.name)) score -= 2;
  if (hoangDaoTruc.includes(trucData.daoType)) score += 1; // Ưu tiên Hoàng Đạo
  if (hacDaoTruc.includes(trucData.daoType)) score -= 1; // Ưu tiên Hoàng Đạo

  // Đánh giá Tiết Khí
  if (
    [
      "Lập Xuân",
      "Xuân Phân",
      "Lập Hạ",
      "Hạ Chí",
      "Lập Thu",
      "Thu Phân",
      "Lập Đông",
    ].includes(tietKhiData.name)
  ) {
    score += 1;
  }

  // Kiểm tra tương hợp ngũ hành
  const compatibleElements = {
    Mộc: ["Hỏa", "Thủy"],
    Hỏa: ["Thổ", "Mộc"],
    Thổ: ["Kim", "Hỏa"],
    Kim: ["Thủy", "Thổ"],
    Thủy: ["Mộc", "Kim"],
  };
  if (
    compatibleElements[trucData.element]?.includes(nhiThapBatTuData.element)
  ) {
    score += 1;
  }
  if (
    ["Kim", "Hỏa"].includes(trucData.element) &&
    ["Mộc", "Thủy"].includes(nhiThapBatTuData.element)
  ) {
    score -= 1; // Tương khắc giảm điểm
  }

  const isHoangDao = score >= 2;
  const daoType = trucData.daoType || (isHoangDao ? "Hoàng Đạo" : "Hắc Đạo");
  const description = isHoangDao
    ? `Ngày ${daoType}: Tốt cho các việc quan trọng như kết hôn, khai trương, xuất hành.`
    : `Ngày ${daoType}: Nên cẩn thận, tránh các việc lớn như khởi sự, kết hôn.`;

  return {
    type: isHoangDao ? "Hoàng Đạo" : "Hắc Đạo",
    daoType: daoType,
    score: score,
    description: description,
    details: {
      lucDieu: lucDieuData.name,
      nhiThapBatTu: nhiThapBatTuData.name,
      truc: trucData.name,
      tietKhi: tietKhiData.name,
    },
  };
};
