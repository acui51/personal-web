import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectTechnology from "../../Projects/ProjectsCard/ProjectTechnology/ProjectTechnology";
import styles from "./ExperienceCard.module.css";

export default function ExperienceCard(props) {
  const descriptionList = props.description.map((elem, id) => {
    return <li key={id}>{elem}</li>;
  });

  const technologyList = props.technologies.map((elem, id) => {
    return <ProjectTechnology key={id}>{elem}</ProjectTechnology>;
  });

  return (
    <div className={styles.ExperienceCard}>
      <Container>
        <Row>
          <Col md={4}>
            <h2 style={{ color: "#B83A4B" }}>{props.company}</h2>
            <h5>{props.occupation}</h5>
            <h6>{props.dates}</h6>
          </Col>
          <Col md={8}>
            <ul>
              {descriptionList}
              <div className="d-flex flex-wrap mt-2">{technologyList}</div>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
