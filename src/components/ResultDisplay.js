import React from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { getFiveElementsChart } from "../utils/chartUtils";
import { lucThapHoaGiapData } from "../data/lucThapHoaGiapData";

const ResultDisplay = ({ result, lunarDate }) => (
  <Card className="mt-4 fortune-result-card">
    <Card.Body>
      <Card.Title className="result-title">Kết quả Tướng Số</Card.Title>
      <Card.Text style={{ whiteSpace: "pre-line" }} className="result-text">
        {result}
      </Card.Text>
      {lunarDate && (
        <div className="chart-container">
          <Bar
            data={getFiveElementsChart(
              lucThapHoaGiapData[lunarDate.lYear].menh
            )}
            options={{
              responsive: true,
              plugins: {
                legend: { labels: { color: "#fff" } },
              },
              scales: {
                x: { ticks: { color: "#ffd700" } },
                y: { ticks: { color: "#ffd700" } },
              },
            }}
          />
        </div>
      )}
    </Card.Body>
  </Card>
);

export default ResultDisplay;
