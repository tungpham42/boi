import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DateInputForm from "./components/DateInputForm";
import ResultDisplay from "./components/ResultDisplay";
import { calculateFortune } from "./utils/fortuneCalculator";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  const [solarDate, setSolarDate] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    gender: "",
  });
  const [activity, setActivity] = useState("");
  const [lunarDate, setLunarDate] = useState(null);
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const fortuneResult = calculateFortune(solarDate, activity);
    setResult(fortuneResult.result);
    setLunarDate(fortuneResult.lunarDate);
  };

  return (
    <div className="app-wrapper">
      <Container className="my-5 fortune-container">
        <h1 className="text-center mb-4 fortune-title">
          Tướng Số Âm Lịch - Ngọc Hạp Thông Thư
        </h1>
        <DateInputForm
          solarDate={solarDate}
          setSolarDate={setSolarDate}
          activity={activity}
          setActivity={setActivity}
          onSubmit={handleSubmit}
        />
        {result && <ResultDisplay result={result} lunarDate={lunarDate} />}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
