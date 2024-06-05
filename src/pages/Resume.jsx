import ResumePDF from "../assets/Resume.pdf";
import ResumePic from "../assets/resume.png";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <img src={ResumePic} alt="Resume" style={{ width: "50%", maxWidth: "800px", height: "80%", maxHeight: "800px", margin: "0 auto", display: "block" }}/>
      <a href={ResumePDF} download>
        Download
      </a>
    </div>
  );
}
