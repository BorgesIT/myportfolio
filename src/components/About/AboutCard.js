import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">José Alejandro Borges </span>
            de <span className="purple"> Anzoátegui, Venezuela</span>, aunque actualmente vivo en la ciudad de <span className="purple">Buenos Aires, Argentina.</span><br></br>
            <br />Estudio Desarrollo de Sotfware desde hace 3 años de manera autodidacta, y comencé a realizar proyectos a mediados del 2021.<br></br>
            <br />

            Soy un apasionado de la tecnología y de las finanzas descentralizadas, aunque también amo realizar otras actividades, como:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Practicar deportes.
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar instrumentos musicales.
            </li>
            <li className="about-activity">
              <ImPointRight /> Capturar fotos y videos de momentos especiales.
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            ""{" "}
          </p>
          <footer className="blockquote-footer">José Borges</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
