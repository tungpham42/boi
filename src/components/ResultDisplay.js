import React, { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { getFiveElementsChart } from "../utils/chartUtils";
import { lucThapHoaGiapData } from "../data/lucThapHoaGiapData";

const ResultDisplay = ({ result, lunarDate }) => {
  const chartRef = useRef(null);

  // Debounce function to limit resize event frequency
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  };

  // Handle window resize to update chart
  useEffect(() => {
    const handleResize = debounce(() => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    }, 100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card className="mt-4 fortune-result-card">
      <Card.Body>
        <Card.Title className="result-title">Kết quả Tướng Số</Card.Title>
        <Card.Text style={{ whiteSpace: "pre-line" }} className="result-text">
          {result}
        </Card.Text>
        {lunarDate && (
          <div
            className="chart-container"
            style={{ position: "relative", width: "100%", height: "400px" }}
          >
            <Bar
              ref={chartRef}
              data={getFiveElementsChart(
                lucThapHoaGiapData[lunarDate.lYear].menh
              )}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Allow chart to resize freely
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
};

export default ResultDisplay;
