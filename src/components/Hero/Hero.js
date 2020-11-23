import React, { useState } from "react";
import Me from "../../assets/Me";
import styles from "./Hero.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Bubble2 from "../../assets/Bubble2";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Intro from "../Intro/Intro";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import MeExperience from "../../assets/MeExperience";
import MeProjects from "../../assets/MeProjects";
import Footer from "../Footer/Footer";

export default function Hero() {
  const [header, setHeader] = useState("Intro");

  const onHeaderClick = (header) => {
    setHeader(header);
  };

  let section;
  let sectionIcon;
  switch (header) {
    case "Intro":
      section = <Intro />;
      sectionIcon = <Me />;
      break;
    case "Experience":
      section = <Experience />;
      sectionIcon = <MeExperience />;
      break;
    case "Projects":
      section = <Projects />;
      sectionIcon = <MeProjects />;
      break;
    default:
      section = <Intro />;
  }

  return (
    <div className={styles.Hero}>
      <Container fluid>
        <Row>
          <Col sm={9}>
            <div className={styles.Content}>
              <div className={styles.Bubble}>
                <Bubble2 />
              </div>
              <Breadcrumb
                click={onHeaderClick}
                headers={["Intro", "Experience", "Projects"]}
                focused={header}
              />
              {section}
            </div>
          </Col>
          <Col sm={3}>{sectionIcon}</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
