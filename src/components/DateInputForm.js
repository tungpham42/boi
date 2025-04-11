import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const DateInputForm = ({
  solarDate,
  setSolarDate,
  activity,
  setActivity,
  onSubmit,
}) => {
  const handleSolarInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthdate") {
      // Parse the date string (YYYY-MM-DD) to update day, month, year
      const date = new Date(value);
      setSolarDate((prev) => ({
        ...prev,
        day: date.getDate().toString(),
        month: (date.getMonth() + 1).toString(), // getMonth is 0-based
        year: date.getFullYear().toString(),
      }));
    } else {
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
              type="date"
              name="birthdate"
              onChange={handleSolarInputChange}
              className="fortune-input"
              min="1900-01-01"
              max="2100-12-31"
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
