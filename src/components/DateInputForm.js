import React, { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import $ from "jquery";
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import Inputmask from "inputmask";

$.fn.datepicker.dates["vi"] = {
  days: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ],
  daysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  months: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthsShort: [
    "Th1",
    "Th2",
    "Th3",
    "Th4",
    "Th5",
    "Th6",
    "Th7",
    "Th8",
    "Th9",
    "Th10",
    "Th11",
    "Th12",
  ],
  today: "Hôm nay",
  clear: "Xóa",
  format: "dd/mm/yyyy",
  titleFormat: "MM / yyyy",
  weekStart: 0,
};

const DateInputForm = ({
  solarDate,
  setSolarDate,
  activity,
  setActivity,
  onSubmit,
}) => {
  useEffect(() => {
    // Initialize input mask for DD/MM/YYYY format
    const inputMask = Inputmask({
      mask: "99/99/9999",
      placeholder: "DD/MM/YYYY",
      alias: "datetime",
      inputFormat: "dd/mm/yyyy",
      clearIncomplete: true,
      oncomplete: function () {
        // Trigger when the input mask is fully completed
        const value = this.value;
        const [day, month, year] = value.split("/").map(Number);
        // Validate date
        const date = new Date(year, month - 1, day);
        if (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day
        ) {
          setSolarDate((prev) => ({
            ...prev,
            day: day.toString(),
            month: month.toString(),
            year: year.toString(),
          }));
        }
      },
    }).mask("#birthdatePicker");

    // Initialize bootstrap-datepicker
    $("#birthdatePicker")
      .datepicker({
        format: "dd/mm/yyyy",
        startDate: "01/01/1900",
        endDate: "31/12/2100",
        language: "vi",
        autoclose: true,
        todayHighlight: true,
      })
      .on("changeDate", (e) => {
        // Handle date selection via datepicker
        const date = e.date;
        setSolarDate((prev) => ({
          ...prev,
          day: date.getDate().toString(),
          month: (date.getMonth() + 1).toString(),
          year: date.getFullYear().toString(),
        }));
      });

    // Cleanup on component unmount
    return () => {
      $("#birthdatePicker").datepicker("destroy");
      inputMask.remove();
    };
  }, [setSolarDate]);

  const handleSolarInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== "birthdate") {
      setSolarDate((prev) => ({ ...prev, [name]: value }));
    }
  };

  const activities = [
    { value: "", label: "Tất cả" },
    { value: "xay-dung", label: "Xây dựng" },
    { value: "ket-hon", label: "Kết hôn" },
    { value: "xuat-hanh", label: "Xuất hành" },
    { value: "an-tang", label: "An táng" },
  ];

  return (
    <Form className="fortune-form">
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">
              Xem ngày (Dương lịch)
            </Form.Label>
            <Form.Control
              type="text"
              id="birthdatePicker"
              name="birthdate"
              placeholder="DD/MM/YYYY"
              className="fortune-input"
              pattern="\d{2}\/\d{2}\/\d{4}"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Giờ sinh (24h)</Form.Label>
            <Form.Control
              type="number"
              name="hour"
              value={solarDate.hour}
              onChange={handleSolarInputChange}
              placeholder="Ví dụ: 14"
              min="0"
              max="23"
              className="fortune-input"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Giới tính</Form.Label>
            <Form.Select
              name="gender"
              value={solarDate.gender}
              onChange={handleSolarInputChange}
              className="fortune-input"
            >
              <option value="">Chọn giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Chọn việc cần xem</Form.Label>
            <Form.Select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="fortune-input"
            >
              {activities.map((act) => (
                <option key={act.value} value={act.value}>
                  {act.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" onClick={onSubmit} className="fortune-button">
        Xem Tướng Số
      </Button>
    </Form>
  );
};

export default DateInputForm;
