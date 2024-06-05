import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";



export default function App() {
  return (
    <MDBFooter className="bg-dark text-center text-white fixed-bottom">
      <MDBContainer className="p-1 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/sirjastrow?igsh=cTA3MG5qd2NidnN1&utm_source=qr"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/in/stephen-jastrow-4b3a49b4/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/sjastrow92"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        A Stephen Jastrow Application
      </div>
    </MDBFooter>
  );
}
