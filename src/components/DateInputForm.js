import React, { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import $ from "jquery";
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import Inputmask from "inputmask";

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
        autoclose: true,
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
              Ngày sinh (Dương lịch)
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
