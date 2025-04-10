import solarlunar from "solarlunar";
import { lucThapHoaGiapData } from "../data/lucThapHoaGiapData";
import {
  lucDieu,
  nhiThapBatTu,
  phongThuyAdvice,
  getLucDieu,
  getNhiThapBatTu,
} from "../data/ngocHapData";

// Danh sách các hoạt động
const activities = [
  { value: "", label: "Tất cả" },
  { value: "xay-dung", label: "Xây dựng" },
  { value: "ket-hon", label: "Kết hôn" },
  { value: "xuat-hanh", label: "Xuất hành" },
  { value: "an-tang", label: "An táng" },
];

const getLabelByValue = (value) =>
  activities.find((item) => item.value === value)?.label || "Tất cả";

export const calculateFortune = (solarDate, activity) => {
  const { day, month, year, hour, gender } = solarDate;
  const currentDate = new Date(); // Ngày hiện tại: 10/04/2025
  const currentYear = currentDate.getFullYear();

  // Kiểm tra dữ liệu đầu vào
  if (!day || !month || !year || !gender) {
    return {
      result: "Hãy khai báo đầy đủ thông tin để tiên tri vận mệnh của bạn!",
    };
  }

  // Chuyển đổi sang âm lịch
  const lunar = solarlunar.solar2lunar(
    parseInt(year),
    parseInt(month),
    parseInt(day)
  );

  if (!lucThapHoaGiapData[lunar.lYear]) {
    return { result: "Thiên cơ chưa thể hé lộ vận mệnh của năm này!" };
  }

  // Lấy thông tin cơ bản từ dữ liệu
  const { canChi, menh, moTa, napAm } = lucThapHoaGiapData[lunar.lYear];
  const hourBranch = hour ? getHourBranch(hour) : "Chưa định giờ";
  const cungMenh = calculateCungMenh(year, gender, hour, hourBranch); // Truyền hourBranch vào
  const lucDieuResult = getLucDieu(lunar.lDay);
  const nhiThapBatTuResult = getNhiThapBatTu(lunar.lDay);
  const dayRecommendations = recommendGoodBadDays(lunar.lDay, activity);
  const goodDaysCurrentYear = predictGoodDaysInCurrentYear(
    activity,
    currentDate
  );
  const yearFortune = predictYearFortune(menh, currentYear);
  const saoChieuMenh = getSaoChieuMenh(lunar.lYear, gender);

  // Tạo kết quả chi tiết với phong cách bói toán
  const fortune = `
    🌟 **Vận Mệnh Tiên Tri - Ngọc Hạp Thông Thư** 🌟
    Ngày sinh Dương lịch: ${day}/${month}/${year}
    Ngày sinh Âm lịch: ${lunar.lDay}/${lunar.lMonth}/${lunar.lYear} (${canChi})
    Giờ sinh: ${hour ? `${hour}h - ${hourBranch}` : "Chưa định giờ"}
    Giới tính: ${gender === "male" ? "Nam" : "Nữ"}
    Cung mệnh: ${cungMenh}
    Mệnh ngũ hành: ${menh} (${napAm})
    Tính cách định mệnh: ${moTa}
    Sao chiếu mệnh: ${saoChieuMenh.name} - ${saoChieuMenh.meaning}
    Lục Diệu: ${lucDieuResult} (${lucDieu[lucDieuResult]})
    Nhị Thập Bát Tú: ${nhiThapBatTuResult} (${nhiThapBatTu[nhiThapBatTuResult]})
    Đánh giá ngày sinh: ${dayRecommendations}
    Vận hạn năm ${currentYear}: ${yearFortune}
    Bí pháp phong thủy: ${
      phongThuyAdvice[menh] || "Giữ tâm an, tránh xa thị phi."
    }
    \n🌟 **Ngày tốt trong năm ${currentYear}** ${
    activity ? `cho "${getLabelByValue(activity)}"` : "(tổng quát)"
  }:
    ${goodDaysCurrentYear
      .map((day) => `✨ ${day.date}: ${day.recommendation}`)
      .join("\n")}
  `;

  return { result: fortune, lunarDate: lunar };
};

// Hàm lấy chi (12 địa chi) theo giờ sinh
const getHourBranch = (hour) => {
  const hourNum = parseInt(hour);
  const branches = [
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
  return branches[Math.floor(((hourNum + 1) % 24) / 2)] || "Tý";
};

// Tính cung mệnh theo năm, giới tính và giờ (đã sửa để nhận hourBranch)
const calculateCungMenh = (year, gender, hour, hourBranch) => {
  const yearNum = parseInt(year);
  const sum = yearNum
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  let cungNum =
    sum > 9
      ? sum
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit), 0)
      : sum;

  cungNum = gender === "male" ? 10 - cungNum || 9 : (cungNum + 5) % 9 || 9;

  const cungMap = {
    male: ["", "Khảm", "Ly", "Chấn", "Tốn", "Càn", "Đoài", "Cấn", "Khôn", "Ly"],
    female: [
      "",
      "Khôn",
      "Cấn",
      "Đoài",
      "Càn",
      "Tốn",
      "Chấn",
      "Ly",
      "Khảm",
      "Càn",
    ],
  };
  const baseCung = cungMap[gender][cungNum];
  const hourAdjust = {
    Tý: "Khảm",
    Sửu: "Cấn",
    Dần: "Chấn",
    Mão: "Chấn",
    Thìn: "Tốn",
    Tỵ: "Tốn",
    Ngọ: "Ly",
    Mùi: "Khôn",
    Thân: "Đoài",
    Dậu: "Đoài",
    Tuất: "Càn",
    Hợi: "Càn",
  };
  return hour
    ? `${baseCung} (giờ ${hourBranch}: ${hourAdjust[hourBranch]})`
    : baseCung;
};

// Đánh giá ngày tốt/xấu theo Lục Diệu và Nhị Thập Bát Tú
const recommendGoodBadDays = (lunarDay, selectedActivity) => {
  const lucDieuResult = getLucDieu(lunarDay);
  const nhiThapBatTuResult = getNhiThapBatTu(lunarDay);
  const goodLucDieu = ["Đại An", "Tốc Hỷ", "Tiểu Cát"];
  const activityStars = {
    "xay-dung": ["Đẩu", "Lâu", "Vị", "Sâm", "Trương", "Cang", "Vĩ"],
    "ket-hon": ["Ngưu", "Tất", "Tinh", "Đê", "Cơ"],
    "xuat-hanh": ["Thất", "Phòng", "Chẩn"],
    "an-tang": ["Hư", "Liễu"],
  };

  let advice = goodLucDieu.includes(lucDieuResult)
    ? "Ngày này đại cát: "
    : "Ngày này hung hiểm: ";
  const activitiesToCheck = selectedActivity
    ? [selectedActivity]
    : Object.keys(activityStars);

  activitiesToCheck.forEach((act) => {
    const isGood = activityStars[act]?.includes(nhiThapBatTuResult);
    advice += `${getLabelByValue(act)}: ${
      isGood && goodLucDieu.includes(lucDieuResult) ? "Tốt" : "Xấu"
    }, `;
  });

  return advice.replace(/, $/, ".") || "Ngày này trung bình, cần thận trọng.";
};

// Dự đoán ngày tốt trong năm
const predictGoodDaysInCurrentYear = (selectedActivity, currentDate) => {
  const goodDays = [];
  const startDate = new Date(currentDate);

  for (let i = 0; i < 60; i++) {
    // Tăng lên 60 ngày để có nhiều lựa chọn hơn
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + i);
    const lunar = solarlunar.solar2lunar(
      nextDate.getFullYear(),
      nextDate.getMonth() + 1,
      nextDate.getDate()
    );
    const lucDieuResult = getLucDieu(lunar.lDay);
    const nhiThapBatTuResult = getNhiThapBatTu(lunar.lDay);

    if (
      ["Đại An", "Tốc Hỷ", "Tiểu Cát"].includes(lucDieuResult) &&
      (!selectedActivity ||
        activityStars[selectedActivity]?.includes(nhiThapBatTuResult))
    ) {
      goodDays.push({
        date: `${lunar.lDay}/${lunar.lMonth}/${
          lunar.lYear
        } (Âm) - ${nextDate.toLocaleDateString("vi-VN")}`,
        recommendation: recommendGoodBadDays(lunar.lDay, selectedActivity),
      });
    }
  }
  return goodDays.slice(0, 5); // Lấy 5 ngày tốt nhất
};

// Dự đoán vận mệnh năm hiện tại
const predictYearFortune = (userMenh, currentYear) => {
  const currentYearMenh = lucThapHoaGiapData[currentYear].menh;
  const tuongSinh = {
    Mộc: "Hỏa",
    Hỏa: "Thổ",
    Thổ: "Kim",
    Kim: "Thủy",
    Thủy: "Mộc",
  };
  const tuongKhac = {
    Mộc: "Thổ",
    Hỏa: "Thủy",
    Thổ: "Mộc",
    Kim: "Hỏa",
    Thủy: "Kim",
  };

  if (userMenh === currentYearMenh)
    return "Thiên thời hòa hợp, vạn sự hanh thông.";
  if (tuongSinh[userMenh] === currentYearMenh)
    return "Ngũ hành tương sinh, tài lộc dồi dào.";
  if (tuongSinh[currentYearMenh] === userMenh)
    return "Được trời nâng đỡ, bình an vô sự.";
  if (tuongKhac[userMenh] === currentYearMenh)
    return "Tương khắc đè nén, cẩn thận tai ương.";
  return "Vận mệnh trung bình, cần giữ tâm vững vàng.";
};

// Thêm sao chiếu mệnh
const getSaoChieuMenh = (lunarYear, gender) => {
  const saoNam = [
    "La Hầu",
    "Thổ Tú",
    "Thủy Diệu",
    "Thái Bạch",
    "Thái Dương",
    "Vân Hớn",
    "Kế Đô",
    "Thái Âm",
    "Mộc Đức",
  ];
  const saoNu = [
    "Kế Đô",
    "Vân Hớn",
    "Thổ Tú",
    "Thái Âm",
    "Thủy Diệu",
    "La Hầu",
    "Thái Bạch",
    "Mộc Đức",
    "Thái Dương",
  ];
  const yearCycle = (lunarYear - 1924) % 9; // Chu kỳ 9 sao bắt đầu từ 1924
  const saoList = gender === "male" ? saoNam : saoNu;

  const saoMeanings = {
    "La Hầu": "Sao hung, dễ gặp thị phi, cần giữ miệng lưỡi.",
    "Thổ Tú": "Sao trung, sức khỏe yếu, tránh xa tranh cãi.",
    "Thủy Diệu": "Sao cát, tài lộc đến từ lời nói.",
    "Thái Bạch": "Sao hung, hao tài tốn của, cẩn thận tiền bạc.",
    "Thái Dương": "Sao cát, vượng phát sự nghiệp, đặc biệt với nam.",
    "Vân Hớn": "Sao trung, tiểu nhân quấy phá, cần đề phòng.",
    "Kế Đô": "Sao hung, buồn phiền, dễ gặp trắc trở.",
    "Thái Âm": "Sao cát, hạnh phúc gia đạo, đặc biệt với nữ.",
    "Mộc Đức": "Sao cát, may mắn, sức khỏe dồi dào.",
  };

  const sao = saoList[yearCycle];
  return { name: sao, meaning: saoMeanings[sao] };
};

// Danh sách sao tốt cho từng hoạt động
const activityStars = {
  "xay-dung": ["Đẩu", "Lâu", "Vị", "Sâm", "Trương", "Cang", "Vĩ"],
  "ket-hon": ["Ngưu", "Tất", "Tinh", "Đê", "Cơ"],
  "xuat-hanh": ["Thất", "Phòng", "Chẩn"],
  "an-tang": ["Hư", "Liễu"],
};
