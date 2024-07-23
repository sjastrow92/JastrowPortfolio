import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/send", formData);
      if (response.status === 200) {
        alert("Email sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to send email");
    }
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Contact Me</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Click here to submit form
        </Button>
      </Form>
    </div>
  );
}
