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

  elements[menh] = 100;
  elements[tuongSinh[menh]] = 60;
  elements[tuongKhac[menh]] = 20;

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
          "#2ecc71",
          "#e74c3c",
          "#f1c40f",
          "#95a5a6",
          "#3498db",
        ],
        borderColor: "#ffd700",
        borderWidth: 2,
      },
    ],
  };
};
