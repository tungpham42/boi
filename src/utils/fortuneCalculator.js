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
  const currentDate = new Date(); // Ngày hiện tại: 11/04/2025
  const currentYear = currentDate.getFullYear();

  // Kiểm tra dữ liệu đầu vào
  if (!day || !month || !year || !gender) {
    return {
      result:
        "🚫 Vui lòng cung cấp đầy đủ thông tin để luận giải vận mệnh theo Ngọc Hạp! 🌟",
    };
  }

  // Chuyển đổi sang âm lịch
  const lunar = solarlunar.solar2lunar(
    parseInt(year),
    parseInt(month),
    parseInt(day)
  );

  if (!lunar || lunar.isValid === false) {
    return { result: "🔮 Ngày tháng không hợp lệ, thiên cơ chưa thể tiết lộ!" };
  }

  if (!lucThapHoaGiapData[lunar.lYear]) {
    return { result: "🔮 Năm sinh ngoài phạm vi luận giải của Ngọc Hạp!" };
  }

  // Lấy thông tin vận mệnh
  const { canChi, menh, moTa, napAm } = lucThapHoaGiapData[lunar.lYear];
  const hourBranch = hour ? getHourBranch(hour) : "Chưa rõ giờ";
  const cungMenh = calculateCungMenh(year, gender, hourBranch);
  const lucDieuResult = getLucDieu(lunar.lDay, lunar.lMonth);
  const nhiThapBatTuResult = getNhiThapBatTu(lunar.lDay, lunar.lMonth);
  const saoChieuMenh = getSaoChieuMenh(lunar.lYear, gender, lunar.lMonth);
  const thaiTue = calculateThaiTue(currentYear, lunar.lYear);
  const tamTai = calculateTamTai(lunar.lYear);
  const dayRecommendations = recommendGoodBadDays(
    lunar.lDay,
    lunar.lMonth,
    activity
  );
  const goodDaysCurrentYear = predictGoodDaysInCurrentYear(
    activity,
    currentDate,
    menh
  );
  const yearFortune = predictYearFortune(menh, currentYear, thaiTue, tamTai);

  // Kết hợp các hoạt động nên và không nên
  const combinedSuitable = [
    ...new Set([
      ...(lucDieuResult.suitable || []),
      ...(nhiThapBatTuResult.suitable || []),
    ]),
  ].filter(
    (act) =>
      !activity || act === getLabelByValue(activity).replace(/ [^\w\s]/g, "")
  );
  const combinedAvoid = [
    ...new Set([
      ...(lucDieuResult.avoid || []),
      ...(nhiThapBatTuResult.avoid || []),
    ]),
  ].filter(
    (act) =>
      !activity || act === getLabelByValue(activity).replace(/ [^\w\s]/g, "")
  );

  // Tạo kết quả luận giải
  const fortune = `
🌙 LUẬN GIẢI VẬN MỆNH THEO NGỌC HẠP THÔNG THƯ 🌙
📅 Ngày sinh dương lịch: ${day}/${month}/${year}
🪐 Ngày sinh âm lịch: ${lunar.lDay}/${lunar.lMonth}/${lunar.lYear} (${canChi})
⏰ Giờ sinh: ${hour ? `${hour}h - ${hourBranch}` : "Chưa rõ giờ"}
👤 Giới tính: ${gender === "male" ? "Nam" : "Nữ"}
🧧 Cung mệnh: ${cungMenh}
🔥 Mệnh ngũ hành: ${menh} (${napAm})
💡 Tính cách & vận mệnh: ${moTa}
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
📜 Tóm tắt ngày: ${nhiThapBatTuResult.summary || "Không có"}
⚖️ Thái Tuế năm ${currentYear}: ${thaiTue.status} (${thaiTue.advice})
☯️ Tam Tai: ${tamTai.status} (${tamTai.advice})
🔍 Đánh giá ngày sinh: ${dayRecommendations}
📈 Vận hạn năm ${currentYear}: ${yearFortune}
🪬 Bí kíp phong thủy: ${
    phongThuyAdvice[menh]?.tips?.join(" ") ||
    "Giữ tâm an, làm việc thiện, tránh thị phi."
  }
🌟 Ngày tốt trong năm ${currentYear} ${
    activity ? `cho ${getLabelByValue(activity)}` : "(tổng quát)"
  }:
${
  goodDaysCurrentYear.length > 0
    ? goodDaysCurrentYear
        .map((day) => `   🗓️ ${day.date}: ${day.recommendation}`)
        .join("\n")
    : "Không tìm thấy ngày phù hợp trong thời gian gần đây"
}
  `;

  return { result: fortune, lunarDate: lunar };
};

const calculateThaiTue = (currentYear, birthYear) => {
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
  const yearBranchIndex = (currentYear - 1864) % 12;
  const birthBranchIndex = (birthYear - 1864) % 12;

  // Thái Tuế: Năm tuổi, xung, hình, hại
  const thaiTueStatus = {
    same: [
      "Tý",
      "Ngọ",
      "Tý",
      "Mão",
      "Thìn",
      "Tỵ",
      "Ngọ",
      "Mùi",
      "Thân",
      "Dậu",
      "Tuất",
      "Hợi",
    ],
    conflict: [
      "Ngọ",
      "Tý",
      "Thân",
      "Dậu",
      "Tuất",
      "Hợi",
      "Tý",
      "Sửu",
      "Dần",
      "Mão",
      "Thìn",
      "Tỵ",
    ],
    harm: [
      "Sửu",
      "Tý",
      "Mùi",
      "Thìn",
      "Sửu",
      "Mùi",
      "Sửu",
      "Ngọ",
      "Sửu",
      "Thìn",
      "Dậu",
      "Tuất",
    ],
    punish: [
      "Dần",
      "Sửu",
      "Dần",
      "Tỵ",
      "Thân",
      "Tỵ",
      "Dậu",
      "Thân",
      "Thân",
      "Dậu",
      "Hợi",
      "Hợi",
    ],
  };

  if (birthBranchIndex === yearBranchIndex) {
    return {
      status: "Phạm Thái Tuế (Năm tuổi)",
      advice:
        "Cẩn trọng mọi việc, tránh khởi sự lớn. Cúng Thái Tuế vào mùng 15 tháng Giêng, mặc đồ trắng, hướng Đông Bắc.",
    };
  } else if (
    thaiTueStatus.conflict[yearBranchIndex] ===
    earthlyBranches[birthBranchIndex]
  ) {
    return {
      status: "Xung Thái Tuế",
      advice:
        "Đề phòng tiểu nhân, sức khỏe yếu. Đeo thạch anh tím, làm thiện để hóa giải.",
    };
  } else if (
    thaiTueStatus.harm[yearBranchIndex] === earthlyBranches[birthBranchIndex]
  ) {
    return {
      status: "Hại Thái Tuế",
      advice:
        "Chú ý quan hệ xã hội, tránh tranh cãi. Đặt cây xanh hướng Đông để tăng sinh khí.",
    };
  } else if (
    thaiTueStatus.punish[yearBranchIndex] === earthlyBranches[birthBranchIndex]
  ) {
    return {
      status: "Hình Thái Tuế",
      advice:
        "Đề phòng kiện tụng, thị phi. Thiền định, tránh nóng giận để giữ tâm an.",
    };
  }

  return {
    status: "Bình an",
    advice:
      "Năm thuận lợi, tận dụng cơ hội để phát triển. Giữ tâm sáng, làm việc thiện.",
  };
};

const calculateTamTai = (birthYear) => {
  const tamTaiGroups = {
    "Thân, Tý, Thìn": ["Dần", "Mão", "Thìn"],
    "Dần, Ngọ, Tuất": ["Thân", "Dậu", "Tuất"],
    "Hợi, Mão, Mùi": ["Tỵ", "Ngọ", "Mùi"],
    "Tỵ, Dậu, Sửu": ["Hợi", "Tý", "Sửu"],
  };

  const birthBranchIndex = (birthYear - 1864) % 12;
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
  const birthBranch = earthlyBranches[birthBranchIndex];

  let tamTaiYears = [];
  for (const group in tamTaiGroups) {
    if (group.includes(birthBranch)) {
      tamTaiYears = tamTaiGroups[group];
      break;
    }
  }

  const currentYearBranchIndex = (new Date().getFullYear() - 1864) % 12;
  const currentYearBranch = earthlyBranches[currentYearBranchIndex];

  if (tamTaiYears.includes(currentYearBranch)) {
    return {
      status: "Phạm Tam Tai",
      advice:
        "Tránh xây nhà, cưới hỏi, khởi sự lớn. Cúng giải hạn vào tháng 7 âm, đeo ngọc bích để bình an.",
    };
  }

  return {
    status: "Không phạm Tam Tai",
    advice: "Năm ổn định, thích hợp phát triển sự nghiệp và gia đạo.",
  };
};

// Các hàm hỗ trợ giữ nguyên, chỉ điều chỉnh giao diện nếu cần
const getHourBranch = (hour) => {
  const hourNum = parseInt(hour);
  const branches = [
    "Tý 🐀 (Tử vi: Trí tuệ, linh hoạt, thích hợp giao dịch)",
    "Sửu 🐂 (Tử vi: Kiên nhẫn, ổn định, tốt cho xây dựng)",
    "Dần 🐅 (Tử vi: Quyết đoán, mạnh mẽ, hợp xuất hành)",
    "Mão 🐇 (Tử vi: Dịu dàng, sáng tạo, tốt cho hôn lễ)",
    "Thìn 🐉 (Tử vi: Uy quyền, tham vọng, hợp khởi sự)",
    "Tỵ 🐍 (Tử vi: Sâu sắc, kín đáo, tốt cho cầu tài)",
    "Ngọ 🐎 (Tử vi: Năng động, nhiệt huyết, hợp ký kết)",
    "Mùi 🐐 (Tử vi: Ôn hòa, chăm chỉ, tốt cho cầu phúc)",
    "Thân 🐒 (Tử vi: Thông minh, linh hoạt, hợp kinh doanh)",
    "Dậu 🐓 (Tử vi: Tỉ mỉ, chính xác, tốt cho học hành)",
    "Tuất 🐕 (Tử vi: Trung thành, bảo vệ, hợp an táng)",
    "Hợi 🐖 (Tử vi: Bao dung, sáng tạo, tốt cho nghệ thuật)",
  ];
  return branches[Math.floor(((hourNum + 1) % 24) / 2)] || "Tý 🐀";
};

const calculateCungMenh = (year, gender, hourBranch) => {
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

  // Điều chỉnh theo bảng Cửu Trạch
  cungNum =
    gender === "male" ? (10 - cungNum) % 9 || 9 : (cungNum + 5) % 9 || 9;

  const cungMap = {
    male: [
      "", // 0
      "Khảm 💧 (Bắc, hợp cầu tài)",
      "Ly 🔥 (Nam, hợp danh vọng)",
      "Cấn 🏔️ (Đông Bắc, hợp ổn định)",
      "Đoài 🪞 (Tây, hợp giao tiếp)",
      "Càn ☁️ (Tây Bắc, hợp quyền lực)",
      "Khôn 🌾 (Tây Nam, hợp gia đạo)",
      "Tốn 🌬️ (Đông Nam, hợp tài lộc)",
      "Chấn ⚡ (Đông, hợp khởi sự)",
      "Trung cung (Tâm nhà, cân bằng)",
    ],
    female: [
      "", // 0
      "Càn ☁️ (Tây Bắc, hợp quyền lực)",
      "Đoài 🪞 (Tây, hợp giao tiếp)",
      "Khôn 🌾 (Tây Nam, hợp gia đạo)",
      "Tốn 🌬️ (Đông Nam, hợp tài lộc)",
      "Khảm 💧 (Bắc, hợp cầu tài)",
      "Ly 🔥 (Nam, hợp danh vọng)",
      "Cấn 🏔️ (Đông Bắc, hợp ổn định)",
      "Chấn ⚡ (Đông, hợp khởi sự)",
      "Trung cung (Tâm nhà, cân bằng)",
    ],
  };

  const baseCung = cungMap[gender][cungNum];
  return baseCung;
};

const recommendGoodBadDays = (lunarDay, lunarMonth, selectedActivity) => {
  const lucDieuResult = getLucDieu(lunarDay, lunarMonth).name;
  const nhiThapBatTuResult = getNhiThapBatTu(lunarDay, lunarMonth).name;
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

  advice = advice.replace(/, $/, ".") || "🔍 Chưa rõ, hãy chọn ngày cẩn thận!";
  return advice;
};

const predictGoodDaysInCurrentYear = (
  selectedActivity,
  currentDate,
  userMenh
) => {
  const goodDays = [];
  const startDate = new Date(currentDate);
  const activityStars = {
    "xay-dung": ["Đẩu", "Lâu", "Vị", "Sâm", "Trương", "Cang", "Vĩ"],
    "ket-hon": ["Ngưu", "Tất", "Tinh", "Đê", "Cơ"],
    "xuat-hanh": ["Thất", "Phòng", "Chẩn"],
    "an-tang": ["Hư", "Liễu"],
  };
  const badDays = ["Hắc Đạo", "Thiên Lao", "Nguyên Vũ", "Câu Trần"];

  for (let i = 0; i < 90; i++) {
    // Tăng phạm vi tìm kiếm lên 90 ngày
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + i);
    const lunar = solarlunar.solar2lunar(
      nextDate.getFullYear(),
      nextDate.getMonth() + 1,
      nextDate.getDate()
    );
    const lucDieuResult = getLucDieu(lunar.lDay, lunar.lMonth).name;
    const nhiThapBatTuResult = getNhiThapBatTu(lunar.lDay, lunar.lMonth).name;

    // Kiểm tra ngày Hoàng Đạo
    const isGoodDay = !badDays.some((bad) =>
      nhiThapBatTu[nhiThapBatTuResult].meaning.includes(bad)
    );

    if (
      ["Đại An", "Tốc Hỷ", "Tiểu Cát"].includes(lucDieuResult) &&
      isGoodDay &&
      (!selectedActivity ||
        activityStars[selectedActivity]?.includes(nhiThapBatTuResult)) &&
      isMenhCompatible(userMenh, lunar.lDay, lunar.lMonth)
    ) {
      goodDays.push({
        date: `${lunar.lDay}/${lunar.lMonth}/${
          lunar.lYear
        } (Âm) - ${nextDate.toLocaleDateString("vi-VN")}`,
        recommendation: recommendGoodBadDays(
          lunar.lDay,
          lunar.lMonth,
          selectedActivity
        ),
      });
    }
  }
  return goodDays.slice(0, 5);
};

// Hàm kiểm tra tương hợp mệnh với ngày
const isMenhCompatible = (userMenh, lunarDay, lunarMonth) => {
  const dayMenh = getNhiThapBatTu(lunarDay, lunarMonth).element;
  const tuongSinh = {
    Mộc: "Hỏa",
    Hỏa: "Thổ",
    Thổ: "Kim",
    Kim: "Thủy",
    Thủy: "Mộc",
  };
  return (
    userMenh === dayMenh ||
    tuongSinh[userMenh] === dayMenh ||
    tuongSinh[dayMenh] === userMenh
  );
};

const predictYearFortune = (userMenh, currentYear, thaiTue, tamTai) => {
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

  let baseFortune = "";
  if (userMenh === currentYearMenh) {
    baseFortune = `
🌟 Thiên thời hòa hợp 🌟
Mệnh bạn hòa hợp với năm nay, mọi sự hanh thông. Sự nghiệp dễ thăng tiến, tài lộc dồi dào nếu biết nắm cơ hội. Tình cảm bền vững, sức khỏe ổn định.
🪬 Bí kíp: Làm việc thiện, tận dụng năng lượng tích cực.
🏡 Phong thủy: Đặt vật phẩm mệnh ${userMenh} ở trung tâm nhà.
    `;
  } else if (tuongSinh[userMenh] === currentYearMenh) {
    baseFortune = `
🌱 Ngũ hành tương sinh 🌱
Mệnh bạn được nâng đỡ, quý nhân phù trợ, tài lộc tăng trưởng. Công việc thuận lợi, tình cảm hài hòa. Chú ý nghỉ ngơi để giữ sức khỏe.
🪬 Bí kíp: Thử sức với dự án mới, làm từ thiện.
🏡 Phong thủy: Đặt vật phẩm mệnh ${currentYearMenh} hướng Bắc.
    `;
  } else if (tuongSinh[currentYearMenh] === userMenh) {
    baseFortune = `
☁️ Bình an vô sự ☁️
Năm nay mệnh bạn ổn định, công việc trôi chảy, tài lộc đủ dùng. Tình cảm êm ấm, chú ý bệnh theo mùa.
🪬 Bí kíp: Giữ cân bằng, cầu an vào rằm tháng Giêng.
🏡 Phong thủy: Đặt vật phẩm mệnh ${userMenh} hướng Đông.
    `;
  } else if (tuongKhac[userMenh] === currentYearMenh) {
    baseFortune = `
⚠️ Tương khắc thử thách ⚠️
Năm nay nhiều trở ngại, sự nghiệp trắc trở, tài lộc hao hụt. Tình cảm cần chân thành, chú ý stress và sức khỏe.
🪬 Bí kíp: Bình tĩnh, cúng sao giải hạn vào tháng 3 hoặc 7 âm.
🏡 Phong thủy: Đặt vật phẩm hóa giải (thạch anh tím, gương bát quái) hướng Tây.
    `;
  } else {
    baseFortune = `
⚖️ Vận mệnh cân bằng ⚖️
Mọi việc ổn định, sự nghiệp tiến chậm nhưng chắc. Tài lộc bình thường, tình cảm cần thấu hiểu. Giữ sức khỏe bằng tập luyện.
🪬 Bí kíp: Đặt mục tiêu rõ ràng, thư giãn với thiền.
🏡 Phong thủy: Đặt pha lê hoặc chuông gió ở trung tâm nhà.
    `;
  }

  // Điều chỉnh theo Thái Tuế và Tam Tai
  let additionalAdvice = "";
  if (thaiTue.status !== "Bình an") {
    additionalAdvice += `\n⚠️ ${thaiTue.status}: ${thaiTue.advice}`;
  }
  if (tamTai.status === "Phạm Tam Tai") {
    additionalAdvice += `\n⚠️ ${tamTai.status}: ${tamTai.advice}`;
  }

  return baseFortune + additionalAdvice;
};

const getSaoChieuMenh = (lunarYear, gender, lunarMonth) => {
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
    "La Hầu 🌑": {
      meaning:
        "Sao hung, dễ gặp thị phi, kiện tụng. Chú ý lời nói, sức khỏe đầu, mắt.",
      advice:
        "Cúng sao vào mùng 8 âm lịch, dùng 9 ngọn đèn, hướng Bắc, mặc đồ đen hoặc xanh dương. Làm việc thiện, tránh tranh cãi.",
      items: "Thạch anh đen, vòng gỗ trầm hương",
    },
    "Thổ Tú 🪨": {
      meaning:
        "Sao trung, trầm lắng, bất an. Gặp tiểu nhân, cô đơn. Chú ý tiêu hóa.",
      advice:
        "Cúng sao vào mùng 5 âm lịch, dùng 5 ngọn đèn, hướng Tây, mặc đồ vàng. Tránh thị phi, thiền định.",
      items: "Gốm sứ, đá mắt hổ",
    },
    "Thủy Diệu 💧": {
      meaning:
        "Sao cát, tài lộc, giao tiếp tốt. Thuận lợi kinh doanh, đàm phán. Đề phòng tai nạn nước.",
      advice:
        "Cúng sao vào mùng 4 âm lịch, dùng 7 ngọn đèn, hướng Bắc, mặc đồ xanh dương. Tận dụng cơ hội, đeo ngọc trai.",
      items: "Ngọc trai, thạch anh xanh",
    },
    "Thái Bạch ⚪": {
      meaning:
        "Sao hung, hao tài. Dễ mất tiền, đầu tư không thuận. Chú ý hô hấp.",
      advice:
        "Cúng sao vào mùng 15 âm lịch, dùng 8 ngọn đèn, hướng Tây, mặc đồ trắng. Quản lý tài chính, làm thiện.",
      items: "Đá trắng, bạc",
    },
    "Thái Dương ☀️": {
      meaning:
        "Sao cát, sự nghiệp thăng hoa. Gặp quý nhân, công việc thuận. Tránh quá sức.",
      advice:
        "Cúng sao vào mùng 27 âm lịch, dùng 12 ngọn đèn, hướng Đông, mặc đồ đỏ. Giữ khiêm tốn, tận dụng cơ hội.",
      items: "Đèn sáng, thạch anh vàng",
    },
    "Vân Hớn 🔥": {
      meaning: "Sao trung, dễ gặp tiểu nhân, bất hòa. Chú ý gan.",
      advice:
        "Cúng sao vào mùng 29 âm lịch, dùng 15 ngọn đèn, hướng Nam, mặc đồ đỏ. Tránh tranh chấp, đeo vòng gỗ.",
      items: "Gỗ đàn hương, thạch anh đỏ",
    },
    "Kế Đô 🌪️": {
      meaning:
        "Sao hung, buồn phiền, trắc trở. Khó khăn công việc, tình cảm. Chú ý bệnh mãn tính.",
      advice:
        "Cúng sao vào mùng 18 âm lịch, dùng 21 ngọn đèn, hướng Tây, mặc đồ tím. Làm thiện, cúng tháng 3 hoặc 7 âm.",
      items: "Thạch anh tím, đá obsidian",
    },
    "Thái Âm 🌙": {
      meaning:
        "Sao cát, hạnh phúc gia đạo. May mắn tình cảm, hôn nhân. Tránh căng thẳng.",
      advice:
        "Cúng sao vào mùng 26 âm lịch, dùng 7 ngọn đèn, hướng Tây, mặc đồ trắng. Nuôi dưỡng quan hệ, đeo thạch anh hồng.",
      items: "Thạch anh hồng, ngọc bích",
    },
    "Mộc Đức 🌳": {
      meaning:
        "Sao cát, may mắn, sức khỏe tốt. Thuận lợi học tập, dự án dài hạn.",
      advice:
        "Cúng sao vào mùng 25 âm lịch, dùng 10 ngọn đèn, hướng Đông, mặc đồ xanh lá. Đầu tư tri thức, đặt cây xanh.",
      items: "Cây xanh, ngọc lục bảo",
    },
  };

  const sao = saoList[yearCycle];
  return {
    name: sao,
    meaning: saoMeanings[sao].meaning,
    advice: saoMeanings[sao].advice,
    items: saoMeanings[sao].items,
  };
};
