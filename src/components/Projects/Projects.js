import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crud from "../../Assets/Projects/crud.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import staking from "../../Assets/Projects/staking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mi reciente <strong className="purple">Trabajo </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que trabajé recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio personal"
              description="Mi portafolio personal, construído con HTML, CSS, y JavaScript, combinado con NodeJS para el Backend, y los frameworks de ReactJS y Bootstrap para el Frontend, utilizando mi paleta de colores para conservar mi identidad, haciendo un modelo intuitivo e innovador."
              ghLink=""
              demoLink="https://borgesit.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={staking}
              isBlog={false}
              title="DApp Staking de NFT"
              description="Diseño de una DApp para Staking de la colección NFT Bitk2Water del proyecto Bitk2Coin totalmente funcional; conectada con ReactJS y JavaScript, a SmartContracts de solidity, invocando las funciones por medio de las ABI en formato JSON y las respectivas dependencias de la web3."
              ghLink=""
              demoLink="https://bitk2water.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="CRUD con Python"
              description="CRUD creado con Python, Flask y MySQL, para descarga de ebooks, con login para administrador. También puede modificarse para crear tienda de artículos, con la misma integración en la base de datos."
              ghLink=""
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
