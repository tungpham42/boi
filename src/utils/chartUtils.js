import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const getFiveElementsChart = (menh) => {
  // Tỷ lệ ngũ hành cơ bản (có thể mở rộng từ dữ liệu người dùng)
  const elements = { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0 };
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

  // Gán giá trị dựa trên mệnh chính, tương sinh và tương khắc
  elements[menh] = 100; // Mệnh chính
  elements[tuongSinh[menh]] = 60; // Mệnh tương sinh
  elements[tuongKhac[menh]] = 20; // Mệnh tương khắc

  return {
    labels: ["Mộc", "Hỏa", "Thổ", "Kim", "Thủy"],
    datasets: [
      {
        label: "Cân bằng Ngũ Hành",
        data: [
          elements.Mộc,
          elements.Hỏa,
          elements.Thổ,
          elements.Kim,
          elements.Thủy,
        ],
        backgroundColor: [
          "#2ecc71", // Mộc - Xanh lá
          "#e74c3c", // Hỏa - Đỏ
          "#f1c40f", // Thổ - Vàng
          "#95a5a6", // Kim - Xám bạc
          "#3498db", // Thủy - Xanh dương
        ],
        borderColor: "#ffd700", // Viền vàng phong thủy
        borderWidth: 2,
      },
    ],
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#fff", font: { size: 14 } } },
        tooltip: {
          callbacks: {
            label: (context) => {
              const element = context.label;
              const value = context.raw;
              return `${element}: ${value}% - ${
                element === menh
                  ? "Mệnh chính"
                  : tuongSinh[menh] === element
                  ? "Tương sinh"
                  : "Tương khắc"
              }`;
            },
          },
        },
      },
      scales: {
        x: { ticks: { color: "#ffd700", font: { size: 12 } } },
        y: {
          ticks: { color: "#ffd700" },
          max: 120,
          beginAtZero: true,
        },
      },
    },
  };
};
