/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Ecole =
  "https://www.freepnglogos.com/uploads/graduation-cap-png/file-font-awesome-solid-graduation-cap-svg-wikimedia-10.png";

export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start barFooter">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Les Statisque</span>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                <b>
                  L'
                  <img src={Ecole} alt="" />
                  Ecole
                </b>
              </h6>
              <h4>(+225) 0705364991</h4>
              <ul>
                <li>Abidjan(Bonou), Yaou</li>
                <li>Bathdorgeleskouakou@gmail.com</li>
              </ul>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Notre Espace</h6>
              <p>
                <a href="#!" className="text-reset">
                  Acceuil
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Devoir
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Interrogation & Devoir
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">L'Email</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                <div className="form-outline">
                  <input type="tel" id="typePhone" className="form-control" />
                  <br />
                </div>
                <button type="button" className="btn btn-info">
                  Button
                </button>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Bathdorgeleskouakou@gmail.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p>
          Copyright ©<i></i>
          Bathdorgeleskouakou-2021-All Right Reserved
        </p>
      </div>
    </MDBFooter>
  );
}