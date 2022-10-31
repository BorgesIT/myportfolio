import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> ME </span> PRESENTO
            </h1>
            <p className="home-about-body">
              Amo programar, lo considero como un arte: el arte de crear, de innovar, la carrera del autodidacta eterno...
              <br />
              <br />Me concentro principalmente en crear programas lógicos y altamente funcionales en
              <i>
                <b className="purple"> Javascript y Python, </b> combinado siempre con un buen diseño.
              </i>
              <br />
              <br />
              Me gusta mucho trabajar en equipo, y aprender de mis compañeros,
              <i>
                <b className="purple"> la unión hace la fuerza. </b> Aunque estando sólo puedes ir rápido, estar acompañado te permitirá llegar más lejos.
              </i>
              <br />
              <br />
              Mi campo de interés está inclinado hacia la &nbsp;
              <i>
                <b className="purple">Tecnología Blockchain </b> y
                la creación de{" "}
                <b className="purple">
                  DApps interactivas 
                </b>, brindando la mejor experiencia de usuario, en el hermoso mundo descentralizado que nos ofrece la <b className="purple">Web 3.</b>
              </i>
              <br />
              <br />
              Mi pasión por crear cosas nuevas, puedo combinarla con herramientas como <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Modernas Librerías y Frameworks de Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js</b>, que se asocian perfectamente con <b className="purple">Python, Flask y Solidity</b>, creando así modelos de negocios únicos, totalmente funcionales, e interactivos para los usuarios.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ACÁ PUEDES CONSEGUIRME</h1>
            <p>
              Con toda confianza <span className="purple">contáctate </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BorgesIT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/BorgesIT"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jose-borges-4711a9254/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/borgesit3.0?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
