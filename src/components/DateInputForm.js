import React, { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import $ from "jquery";
import "bootstrap-datepicker";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import Inputmask from "inputmask"; // Import inputmask

const DateInputForm = ({
  solarDate,
  setSolarDate,
  activity,
  setActivity,
  onSubmit,
}) => {
  useEffect(() => {
    // Initialize input mask for YYYY-MM-DD format
    Inputmask({
      mask: "9999-99-99",
      placeholder: "YYYY-MM-DD",
      alias: "datetime",
      inputFormat: "yyyy-mm-dd",
      clearIncomplete: true,
    }).mask("#birthdatePicker");

    // Initialize bootstrap-datepicker
    $("#birthdatePicker")
      .datepicker({
        format: "yyyy-mm-dd",
        startDate: "1900-01-01",
        endDate: "2100-12-31",
        autoclose: true,
      })
      .on("changeDate", (e) => {
        // Handle date selection
        const date = e.date;
        setSolarDate((prev) => ({
          ...prev,
          day: date.getDate().toString(),
          month: (date.getMonth() + 1).toString(), // getMonth is 0-based
          year: date.getFullYear().toString(),
        }));
      });

    // Cleanup on component unmount
    return () => {
      $("#birthdatePicker").datepicker("destroy");
      Inputmask.remove("#birthdatePicker"); // Remove input mask
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
              placeholder="YYYY-MM-DD"
              className="fortune-input"
              pattern="\d{4}-\d{2}-\d{2}"
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
