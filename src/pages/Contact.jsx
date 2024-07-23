import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh", // Full viewport height
        padding: 30,
      }}
    >
      <h4 style={{ marginBottom: 20 }}>Let's Connect!</h4>
      <p>
        please feel free to contact me with any inquiries on career
        opportunities and collaborative projects!
      </p>
      <h5 style={{ marginBottom: 20 }}>267.229.1557</h5>
      <h5>skjastrow@gmail.com</h5>
    </div>
  );
}
