import photo from "../assets/few.jpg";

export default function Home() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${photo})`,
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Stephen Jastrow here,</h1>
              <h4 className="mb-3">
                It's nice to meet you. Let's Build Something{" "}
              </h4>
              <br></br>
              <h5 className="mb-3">
                Full Stack React Developer | Philadelphia.{" "}
              </h5>
              <a
                className="btn btn-outline-light btn-lg"
                href="./Contact"
                role="button"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
