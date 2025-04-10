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
    setSolarDate((prev) => ({ ...prev, [name]: value }));
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
              type="number"
              name="day"
              value={solarDate.day}
              onChange={handleSolarInputChange}
              placeholder="Ví dụ: 15"
              min="1"
              max="31"
              className="fortune-input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">
              Tháng sinh (Dương lịch)
            </Form.Label>
            <Form.Control
              type="number"
              name="month"
              value={solarDate.month}
              onChange={handleSolarInputChange}
              placeholder="Ví dụ: 3"
              min="1"
              max="12"
              className="fortune-input"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">
              Năm sinh (Dương lịch)
            </Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={solarDate.year}
              onChange={handleSolarInputChange}
              placeholder="Ví dụ: 1995"
              min="1900"
              max="2100"
              className="fortune-input"
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
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">
              Chọn việc cần xem ngày tốt
            </Form.Label>
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
