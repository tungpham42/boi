import solarlunar from "solarlunar";
import { lucThapHoaGiapData } from "../data/lucThapHoaGiapData";
import {
  lucDieu,
  nhiThapBatTu,
  phongThuyAdvice,
  getLucDieu,
  getNhiThapBatTu,
} from "../data/ngocHapData";

const activities = [
  { value: "", label: "Tất cả" },
  { value: "xay-dung", label: "Xây dựng 🏡" },
  { value: "ket-hon", label: "Kết hôn 💍" },
  { value: "xuat-hanh", label: "Xuất hành ✈️" },
  { value: "an-tang", label: "An táng ⚰️" },
];

const getLabelByValue = (value) =>
  activities.find((item) => item.value === value)?.label || "Tất cả 🌌";

export const calculateFortune = (solarDate, activity) => {
  const { day, month, year, hour, gender } = solarDate;
  const currentDate = new Date(); // Ngày hiện tại: 10/04/2025
  const currentYear = currentDate.getFullYear();

  // Kiểm tra dữ liệu đầu vào
  if (!day || !month || !year || !gender) {
    return {
      result: "🚫 Vui lòng cung cấp đầy đủ thông tin để khám phá vận mệnh! 🌟",
    };
  }

  // Chuyển đổi sang âm lịch
  const lunar = solarlunar.solar2lunar(
    parseInt(year),
    parseInt(month),
    parseInt(day)
  );

  if (!lucThapHoaGiapData[lunar.lYear]) {
    return { result: "🔮 Thiên cơ chưa thể tiết lộ vận mệnh năm này!" };
  }

  // Lấy thông tin vận mệnh
  const { canChi, menh, moTa, napAm } = lucThapHoaGiapData[lunar.lYear];
  const hourBranch = hour ? getHourBranch(hour) : "Chưa rõ giờ";
  const cungMenh = calculateCungMenh(year, gender, hour, hourBranch);
  const lucDieuResult = getLucDieu(lunar.lDay);
  const nhiThapBatTuResult = getNhiThapBatTu(lunar.lDay);
  const saoChieuMenh = getSaoChieuMenh(lunar.lYear, gender);
  const dayRecommendations = recommendGoodBadDays(lunar.lDay, activity);
  const goodDaysCurrentYear = predictGoodDaysInCurrentYear(
    activity,
    currentDate
  );
  const yearFortune = predictYearFortune(menh, currentYear);

  // Kết hợp các hoạt động nên và không nên
  const combinedSuitable = [
    ...new Set([
      ...(lucDieuResult.suitable || []),
      ...(nhiThapBatTuResult.suitable || []),
    ]),
  ];
  const combinedAvoid = [
    ...new Set([
      ...(lucDieuResult.avoid || []),
      ...(nhiThapBatTuResult.avoid || []),
    ]),
  ];

  // Tạo kết quả bói toán
  const fortune = `
🌙 BÓI TOÁN VẬN MỆNH - NGỌC HẠP THÔNG THƯ 🌙
📅 Ngày sinh dương lịch: ${day}/${month}/${year}
🪐 Ngày sinh âm lịch: ${lunar.lDay}/${lunar.lMonth}/${lunar.lYear} (${canChi})
⏰ Giờ sinh: ${hour ? `${hour}h - ${hourBranch}` : "Chưa rõ giờ"}
👤 Giới tính: ${gender === "male" ? "Nam" : "Nữ"}
🧧 Cung mệnh: ${cungMenh}
🔥 Mệnh ngũ hành: ${menh} (${napAm})
💡 Tính cách: ${moTa}
✨ Sao chiếu mệnh: ${saoChieuMenh.name} - ${saoChieuMenh.meaning}
🌟 Lục Diệu: ${lucDieuResult.name} (${lucDieu[lucDieuResult.name].meaning})
🌌 Nhị Thập Bát Tú: ${nhiThapBatTuResult.name} (${
    nhiThapBatTu[nhiThapBatTuResult.name].meaning
  })
✅ Nên làm: ${combinedSuitable.join(", ") || "Không có"}
🚫 Tránh: ${combinedAvoid.join(", ") || "Không có"}
🌱 Tương sinh: ${nhiThapBatTuResult.compatibleElements.join(", ") || "Không có"}
⚡ Tương khắc: ${
    nhiThapBatTuResult.conflictingElements.join(", ") || "Không có"
  }
🍂 Mùa hợp: ${nhiThapBatTuResult.suitableSeason || "Không rõ"}
📜 Tóm tắt: ${nhiThapBatTuResult.summary || "Không có"}
🔍 Đánh giá ngày sinh: ${dayRecommendations}
📈 Vận hạn năm ${currentYear}: ${yearFortune}
🪬 Bí kíp phong thủy: ${
    phongThuyAdvice[menh]?.tips?.join(" ") || "Giữ tâm an, tránh thị phi."
  }
🌟 Ngày tốt trong năm ${currentYear} ${
    activity ? `cho ${getLabelByValue(activity)}` : "(tổng quát)"
  }:
${goodDaysCurrentYear
  .map((day) => `   🗓️ ${day.date}: ${day.recommendation}`)
  .join("\n")}
  `;

  return { result: fortune, lunarDate: lunar };
};

// Các hàm hỗ trợ giữ nguyên, chỉ điều chỉnh giao diện nếu cần
const getHourBranch = (hour) => {
  const hourNum = parseInt(hour);
  const branches = [
    "Tý 🐀",
    "Sửu 🐂",
    "Dần 🐅",
    "Mão 🐇",
    "Thìn 🐉",
    "Tỵ 🐍",
    "Ngọ 🐎",
    "Mùi 🐐",
    "Thân 🐒",
    "Dậu 🐓",
    "Tuất 🐕",
    "Hợi 🐖",
  ];
  return branches[Math.floor(((hourNum + 1) % 24) / 2)] || "Tý 🐀";
};

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
    male: [
      "",
      "Khảm 💧",
      "Ly 🔥",
      "Chấn ⚡",
      "Tốn 🌬️",
      "Càn ☁️",
      "Đoài 🪞",
      "Cấn 🏔️",
      "Khôn 🌾",
      "Ly 🔥",
    ],
    female: [
      "",
      "Khôn 🌾",
      "Cấn 🏔️",
      "Đoài 🪞",
      "Càn ☁️",
      "Tốn 🌬️",
      "Chấn ⚡",
      "Ly 🔥",
      "Khảm 💧",
      "Càn ☁️",
    ],
  };
  const baseCung = cungMap[gender][cungNum];
  const hourAdjust = {
    "Tý 🐀": "Khảm 💧",
    "Sửu 🐂": "Cấn 🏔️",
    "Dần 🐅": "Chấn ⚡",
    "Mão 🐇": "Chấn ⚡",
    "Thìn 🐉": "Tốn 🌬️",
    "Tỵ 🐍": "Tốn 🌬️",
    "Ngọ 🐎": "Ly 🔥",
    "Mùi 🐐": "Khôn 🌾",
    "Thân 🐒": "Đoài 🪞",
    "Dậu 🐓": "Đoài 🪞",
    "Tuất 🐕": "Càn ☁️",
    "Hợi 🐖": "Càn ☁️",
  };
  return hour
    ? `${baseCung} (giờ ${hourBranch}: ${hourAdjust[hourBranch]})`
    : baseCung;
};

const recommendGoodBadDays = (lunarDay, selectedActivity) => {
  const lucDieuResult = getLucDieu(lunarDay).name;
  const nhiThapBatTuResult = getNhiThapBatTu(lunarDay).name;
  const goodLucDieu = ["Đại An", "Tốc Hỷ", "Tiểu Cát"];
  const activityStars = {
    "xay-dung": ["Đẩu", "Lâu", "Vị", "Sâm", "Trương", "Cang", "Vĩ"],
    "ket-hon": ["Ngưu", "Tất", "Tinh", "Đê", "Cơ"],
    "xuat-hanh": ["Thất", "Phòng", "Chẩn"],
    "an-tang": ["Hư", "Liễu"],
  };

  let advice = "";
  const activitiesToCheck = selectedActivity
    ? [selectedActivity]
    : Object.keys(activityStars);

  activitiesToCheck.forEach((act) => {
    const isGoodStar = activityStars[act]?.includes(nhiThapBatTuResult);
    const isGood = isGoodStar && goodLucDieu.includes(lucDieuResult);
    advice += `${getLabelByValue(act)}: ${isGood ? "Tốt ✅" : "Xấu 🚫"}, `;
  });

  advice = advice.replace(/, $/, ".");
  return advice || "🔍 Chưa rõ, hãy thận trọng trong mọi việc!";
};

const predictGoodDaysInCurrentYear = (selectedActivity, currentDate) => {
  const goodDays = [];
  const startDate = new Date(currentDate);

  for (let i = 0; i < 60; i++) {
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + i);
    const lunar = solarlunar.solar2lunar(
      nextDate.getFullYear(),
      nextDate.getMonth() + 1,
      nextDate.getDate()
    );
    const lucDieuResult = getLucDieu(lunar.lDay).name;
    const nhiThapBatTuResult = getNhiThapBatTu(lunar.lDay).name;

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
  return goodDays.slice(0, 5);
};

const predictYearFortune = (userMenh, currentYear) => {
  const currentYearMenh = lucThapHoaGiapData[currentYear]?.menh || "Thổ";
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

  if (userMenh === currentYearMenh) {
    return `
🌟 Thiên thời hòa hợp 🌟
Năm nay mệnh bạn hòa hợp vũ trụ, mọi sự hanh thông. Sự nghiệp thăng hoa nếu nắm cơ hội. Tài lộc dồi dào, quản lý chi tiêu cẩn thận. Tình cảm bền vững, sức khỏe tốt.
🪬 Bí kíp: Tận dụng năng lượng tích cực, làm việc thiện.
🏡 Phong thủy: Đặt vật phẩm mệnh ${userMenh} ở trung tâm nhà.
    `;
  }

  if (tuongSinh[userMenh] === currentYearMenh) {
    return `
🌱 Ngũ hành tương sinh 🌱
Mệnh bạn được nâng đỡ, tài lộc dồi dào, quý nhân phù trợ. Công việc thuận lợi, tình cảm hài hòa. Sức khỏe tốt, chú ý nghỉ ngơi.
🪬 Bí kíp: Thử sức ý tưởng mới, làm từ thiện.
🏡 Phong thủy: Đặt vật phẩm mệnh ${currentYearMenh} hướng Bắc.
    `;
  }

  if (tuongSinh[currentYearMenh] === userMenh) {
    return `
☁️ Bình an vô sự ☁️
Năm nay mệnh bạn ổn định, công việc trôi chảy, tài lộc đủ dùng. Tình cảm êm ấm, sức khỏe cần chú ý bệnh mùa.
🪬 Bí kíp: Giữ cân bằng, cầu an ngày rằm.
🏡 Phong thủy: Đặt vật phẩm mệnh ${userMenh} hướng Đông.
    `;
  }

  if (tuongKhac[userMenh] === currentYearMenh) {
    return `
⚠️ Tương khắc thử thách ⚠️
Năm nay gặp khó khăn, sự nghiệp trắc trở, tài lộc hao hụt. Tình cảm cần chân thành, sức khỏe chú ý stress.
🪬 Bí kíp: Bình tĩnh, cúng sao giải hạn tháng 3 hoặc 7 âm.
🏡 Phong thủy: Đặt vật phẩm hóa giải hướng Tây.
    `;
  }

  return `
⚖️ Vận mệnh cân bằng ⚖️
Mọi việc ổn định, sự nghiệp tiến chậm, tài lộc bình thường. Tình cảm cần thấu hiểu, sức khỏe giữ bằng tập luyện.
🪬 Bí kíp: Đặt mục tiêu rõ, thư giãn với thiền.
🏡 Phong thủy: Đặt pha lê ở trung tâm nhà.
  `;
};

const getSaoChieuMenh = (lunarYear, gender) => {
  const saoNam = [
    "La Hầu 🌑",
    "Thổ Tú 🪨",
    "Thủy Diệu 💧",
    "Thái Bạch ⚪",
    "Thái Dương ☀️",
    "Vân Hớn 🔥",
    "Kế Đô 🌪️",
    "Thái Âm 🌙",
    "Mộc Đức 🌳",
  ];
  const saoNu = [
    "Kế Đô 🌪️",
    "Vân Hớn 🔥",
    "Thổ Tú 🪨",
    "Thái Âm 🌙",
    "Thủy Diệu 💧",
    "La Hầu 🌑",
    "Thái Bạch ⚪",
    "Mộc Đức 🌳",
    "Thái Dương ☀️",
  ];
  const yearCycle = (lunarYear - 1924) % 9;
  const saoList = gender === "male" ? saoNam : saoNu;

  const saoMeanings = {
    "La Hầu 🌑":
      "Sao hung, dễ gặp thị phi, kiện tụng. Chú ý lời nói, sức khỏe đầu, mắt. 🪬 Bí kíp: Tránh tranh cãi, làm thiện. 🏡 Phong thủy: Đeo thạch anh đen.",
    "Thổ Tú 🪨":
      "Sao trung, trầm lắng, bất an. Gặp tiểu nhân, cô đơn. Chú ý tiêu hóa. 🪬 Bí kíp: Tránh thị phi, thiền. 🏡 Phong thủy: Đặt gốm sứ trong nhà.",
    "Thủy Diệu 💧":
      "Sao cát, tài lộc, giao tiếp tốt. Thuận lợi kinh doanh, đàm phán. Đề phòng tai nạn nước. 🪬 Bí kíp: Tận dụng cơ hội. 🏡 Phong thủy: Đeo ngọc trai.",
    "Thái Bạch ⚪":
      "Sao hung, hao tài. Dễ mất tiền, đầu tư không thuận. Chú ý hô hấp. 🪬 Bí kíp: Quản lý tài chính, làm thiện. 🏡 Phong thủy: Đặt đá trắng.",
    "Thái Dương ☀️":
      "Sao cát, sự nghiệp thăng hoa. Gặp quý nhân, công việc thuận. Tránh quá sức. 🪬 Bí kíp: Giữ khiêm tốn. 🏡 Phong thủy: Đặt đèn sáng hướng Đông.",
    "Vân Hớn 🔥":
      "Sao trung, dễ gặp tiểu nhân, bất hòa. Chú ý gan. 🪬 Bí kíp: Tránh tranh chấp. 🏡 Phong thủy: Đeo vòng gỗ đàn hương.",
    "Kế Đô 🌪️":
      "Sao hung, buồn phiền, trắc trở. Khó khăn công việc, tình cảm. Chú ý bệnh mãn tính. 🪬 Bí kíp: Làm thiện, cúng tháng 3. 🏡 Phong thủy: Đeo thạch anh tím.",
    "Thái Âm 🌙":
      "Sao cát, hạnh phúc gia đạo. May mắn tình cảm, hôn nhân. Tránh căng thẳng. 🪬 Bí kíp: Nuôi dưỡng quan hệ. 🏡 Phong thủy: Đặt thạch anh hồng hướng Tây.",
    "Mộc Đức 🌳":
      "Sao cát, may mắn, sức khỏe tốt. Thuận lợi học tập, dự án dài hạn. 🪬 Bí kíp: Đầu tư tri thức. 🏡 Phong thủy: Đặt cây xanh hướng Đông.",
  };

  const sao = saoList[yearCycle];
  return { name: sao, meaning: saoMeanings[sao] };
};

const activityStars = {
  "xay-dung": ["Đẩu", "Lâu", "Vị", "Sâm", "Trương", "Cang", "Vĩ"],
  "ket-hon": ["Ngưu", "Tất", "Tinh", "Đê", "Cơ"],
  "xuat-hanh": ["Thất", "Phòng", "Chẩn"],
  "an-tang": ["Hư", "Liễu"],
};
