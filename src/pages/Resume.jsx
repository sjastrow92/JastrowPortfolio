import ResumePDF from "../assets/StephenJastrow.Resume.pdf";
import ResumePic from "../assets/resumeupdatedscreenshot.png";

export default function Resume() {
  return (
    <div style={{ minHeight: "100vh", padding: "20px" }}>
      <h1>Resume</h1>
      <a href={ResumePDF} download>
        Download
      </a>
      <div
        style={{
          overflowY: "auto",
          maxHeight: "calc(100vh - 200px)",
          textAlign: "center",
        }}
      >
        <img
          src={ResumePic}
          alt="Resume"
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            maxHeight: "100%",
          }}
        />
      </div>
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          textAlign: "center",
          padding: "10px",
          background: "#f1f1f1",
        }}
      >
        © 2024 Your Name. All rights reserved.
      </footer>
    </div>
  );
}
