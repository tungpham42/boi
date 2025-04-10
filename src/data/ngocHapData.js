// Lục Diệu
export const lucDieu = {
  "Đại An": "Mọi việc đều tốt, bình an, cầu tài lộc thuận lợi.",
  "Lưu Niên": "Công việc trì trệ, nên kiên nhẫn chờ thời cơ.",
  "Tốc Hỷ": "Tin vui đến nhanh, thích hợp cho việc gấp rút.",
  "Xích Khẩu": "Dễ gặp tranh cãi, kỵ khởi sự lớn.",
  "Tiểu Cát": "Việc nhỏ thuận lợi, nhưng không nên làm việc lớn.",
  "Không Vong": "Mọi sự bất thành, nên tránh làm việc quan trọng.",
};

// Nhị Thập Bát Tú (28 sao đầy đủ)
export const nhiThapBatTu = {
  Đẩu: "Tốt cho xây dựng, cầu tài; xấu cho kiện tụng.", // Thanh Long
  Ngưu: "Tốt cho hôn lễ, cầu phúc; xấu cho xuất hành.",
  Nữ: "Xấu cho mọi việc, nên cẩn thận.",
  Hư: "Xấu cho khởi sự; tốt cho an táng.",
  Nguy: "Tốt cho cầu tài, hôn lễ; xấu cho kiện tụng.",
  Thất: "Tốt cho xuất hành, cầu tài; xấu cho xây dựng.",
  Bích: "Tốt cho mọi việc, đặc biệt xây dựng, hôn lễ.",
  Khuê: "Tốt cho cầu phúc; xấu cho xuất hành.", // Chu Tước
  Lâu: "Tốt cho xây dựng, cầu tài; xấu cho kiện tụng.",
  Vị: "Tốt cho mọi việc, đặc biệt xây dựng.",
  Mão: "Tốt cho cầu tài; xấu cho an táng.",
  Tất: "Tốt cho hôn lễ, xuất hành; xấu cho xây dựng.",
  Chủy: "Xấu cho mọi việc, nên tránh khởi sự.",
  Sâm: "Tốt cho cầu tài, xây dựng; xấu cho kiện tụng.",
  Tỉnh: "Tốt cho cầu phúc; xấu cho xuất hành.", // Bạch Hổ
  Quỷ: "Xấu cho mọi việc, đặc biệt kỵ an táng.",
  Liễu: "Xấu cho khởi sự, cầu tài; tốt cho an táng.",
  Tinh: "Tốt cho hôn lễ; xấu cho xuất hành.",
  Trương: "Tốt cho cầu tài, xây dựng; xấu cho kiện tụng.",
  Dực: "Xấu cho mọi việc, nên cẩn thận.",
  Chẩn: "Tốt cho xuất hành; xấu cho xây dựng.",
  Giác: "Tốt cho cầu phúc; xấu cho an táng.", // Huyền Vũ
  Cang: "Tốt cho xây dựng, cầu tài; xấu cho kiện tụng.",
  Đê: "Tốt cho mọi việc, đặc biệt hôn lễ.",
  Phòng: "Tốt cho xuất hành, cầu tài; xấu cho xây dựng.",
  Tâm: "Xấu cho mọi việc, nên tránh khởi sự.",
  Vĩ: "Tốt cho xây dựng, cầu phúc; xấu cho kiện tụng.",
  Cơ: "Tốt cho mọi việc, đặc biệt hôn lễ.",
};

// Gợi ý phong thủy
export const phongThuyAdvice = {
  Mộc: "Màu xanh lá, hướng Đông, vật phẩm: cây xanh.",
  Hỏa: "Màu đỏ, hướng Nam, vật phẩm: đèn đỏ.",
  Thổ: "Màu vàng, hướng Trung tâm, vật phẩm: đồ gốm.",
  Kim: "Màu trắng, hướng Tây, vật phẩm: kim loại.",
  Thủy: "Màu xanh dương, hướng Bắc, vật phẩm: bể cá.",
};

// Hàm tính Lục Diệu dựa trên ngày Âm lịch
export const getLucDieu = (lunarDay) => {
  const index = (lunarDay - 1) % 6;
  return Object.keys(lucDieu)[index];
};

// Hàm tính Nhị Thập Bát Tú dựa trên ngày Âm lịch
export const getNhiThapBatTu = (lunarDay) => {
  const index = (lunarDay - 1) % 28;
  return Object.keys(nhiThapBatTu)[index];
};
