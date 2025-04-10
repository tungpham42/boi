const heavenlyStems = [
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
  "Canh",
  "Tân",
  "Nhâm",
  "Quý",
];
const earthlyBranches = [
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
];

const napAm = [
  "Hải Trung Kim",
  "Lô Trung Hỏa",
  "Đại Lâm Mộc",
  "Lộ Bàng Thổ",
  "Kiếm Phong Kim",
  "Sơn Đầu Hỏa",
  "Giản Hạ Thủy",
  "Thành Đầu Thổ",
  "Bạch Lạp Kim",
  "Dương Liễu Mộc",
  "Tuyền Trung Thủy",
  "Ốc Thượng Thổ",
  "Tích Lịch Hỏa",
  "Tùng Bách Mộc",
  "Trường Lưu Thủy",
  "Sa Trung Kim",
  "Sơn Hạ Hỏa",
  "Bình Địa Mộc",
  "Bích Thượng Thổ",
  "Kim Bạch Kim",
  "Phúc Đăng Hỏa",
  "Thiên Hà Thủy",
  "Đại Trạch Thổ",
  "Thoa Xuyến Kim",
  "Tang Đố Mộc",
  "Đại Khê Thủy",
  "Sa Trung Thổ",
  "Thiên Thượng Hỏa",
  "Thạch Lựu Mộc",
  "Đại Hải Thủy",
];

const napAmElements = [
  "Kim",
  "Hỏa",
  "Mộc",
  "Thổ",
  "Kim",
  "Hỏa",
  "Thủy",
  "Thổ",
  "Kim",
  "Mộc",
  "Thủy",
  "Thổ",
  "Hỏa",
  "Mộc",
  "Thủy",
  "Kim",
  "Hỏa",
  "Mộc",
  "Thổ",
  "Kim",
  "Hỏa",
  "Thủy",
  "Thổ",
  "Kim",
  "Mộc",
  "Thủy",
  "Thổ",
  "Hỏa",
  "Mộc",
  "Thủy",
];

const napAmDescriptions = {
  "Hải Trung Kim":
    "Vàng trong biển, quý hiếm nhưng khó phát huy, cần cơ hội để tỏa sáng.",
  "Lô Trung Hỏa":
    "Lửa trong lò, ấm áp, bền bỉ, thích hợp cho sự ổn định lâu dài.",
  "Đại Lâm Mộc": "Cây rừng lớn, mạnh mẽ, kiên định, thích phát triển rộng lớn.",
  "Lộ Bàng Thổ":
    "Đất ven đường, kiên trì, thực tế, dễ bị ảnh hưởng bởi môi trường.",
  "Kiếm Phong Kim":
    "Vàng mũi kiếm, sắc bén, quyết đoán, phù hợp với những việc cần dứt khoát.",
  "Sơn Đầu Hỏa": "Lửa trên núi, rực rỡ nhưng dễ tắt, cần kiểm soát cảm xúc.",
  "Giản Hạ Thủy":
    "Nước dưới khe, nhẹ nhàng, linh hoạt, thích nghi tốt với hoàn cảnh.",
  "Thành Đầu Thổ":
    "Đất trên thành, vững chắc, bảo vệ, phù hợp với vai trò lãnh đạo.",
  "Bạch Lạp Kim":
    "Vàng sáp trắng, tinh tế, mềm dẻo, cần tôi luyện để mạnh mẽ hơn.",
  "Dương Liễu Mộc":
    "Cây dương liễu, mềm mại, uyển chuyển, dễ bị tác động bởi ngoại cảnh.",
  "Tuyền Trung Thủy":
    "Nước trong suối, thanh khiết, thông minh, thích tự do chảy trôi.",
  "Ốc Thượng Thổ":
    "Đất trên mái nhà, kiên cố nhưng cô lập, cần sự hỗ trợ để phát triển.",
  "Tích Lịch Hỏa": "Lửa sấm sét, mạnh mẽ, đột phá, nhưng dễ gây xung đột.",
  "Tùng Bách Mộc":
    "Cây tùng bách, cứng cáp, trường tồn, biểu tượng của sự bền vững.",
  "Trường Lưu Thủy":
    "Nước sông dài, trôi chảy không ngừng, linh hoạt và kiên nhẫn.",
  "Sa Trung Kim": "Vàng trong cát, tiềm ẩn giá trị lớn nhưng cần khai phá.",
  "Sơn Hạ Hỏa":
    "Lửa dưới núi, âm ỉ, bền bỉ, thích hợp cho sự phát triển từ từ.",
  "Bình Địa Mộc":
    "Cây trên đồng bằng, bình dị, dễ gần, thích nghi tốt với cộng đồng.",
  "Bích Thượng Thổ":
    "Đất trên vách, kiên cường, độc lập, nhưng đôi khi cứng nhắc.",
  "Kim Bạch Kim":
    "Vàng trắng tinh khiết, cao quý, mạnh mẽ, hướng tới sự hoàn hảo.",
  "Phúc Đăng Hỏa": "Lửa đèn rực sáng, ấm áp, mang lại may mắn và hạnh phúc.",
  "Thiên Hà Thủy":
    "Nước trên trời, bao la, sáng tạo, thích hợp với tư duy lớn.",
  "Đại Trạch Thổ":
    "Đất đầm lớn, rộng rãi, bao dung, phù hợp với vai trò kết nối.",
  "Thoa Xuyến Kim": "Vàng trang sức, tinh xảo, quý giá, cần sự nâng niu.",
  "Tang Đố Mộc": "Cây dâu tằm, thực dụng, kiên nhẫn, mang lại lợi ích lâu dài.",
  "Đại Khê Thủy":
    "Nước khe lớn, mạnh mẽ, linh hoạt, thích nghi với mọi thử thách.",
  "Sa Trung Thổ":
    "Đất trong cát, kiên định, bền bỉ, nhưng cần cơ hội để nổi bật.",
  "Thiên Thượng Hỏa":
    "Lửa trên trời, rực rỡ, nhiệt huyết, dễ gây ấn tượng mạnh.",
  "Thạch Lựu Mộc":
    "Cây thạch lựu, cứng cáp, sinh sôi, biểu tượng của sự phát triển bền vững.",
  "Đại Hải Thủy": "Nước biển lớn, sâu thẳm, bao la, thích tự do và khám phá.",
};

const generateLucThapHoaGiapData = () => {
  const data = {};
  for (let year = 1900; year <= 2100; year++) {
    const cycleIndex = (year - 1864) % 60;
    const stemIndex = cycleIndex % 10;
    const branchIndex = cycleIndex % 12;
    const napAmIndex = Math.floor(cycleIndex / 2);
    const element = napAmElements[napAmIndex];
    data[year] = {
      canChi: `${heavenlyStems[stemIndex]} ${earthlyBranches[branchIndex]}`,
      napAm: napAm[napAmIndex],
      menh: element,
      moTa: napAmDescriptions[napAm[napAmIndex]],
    };
  }
  return data;
};

export const lucThapHoaGiapData = generateLucThapHoaGiapData();
