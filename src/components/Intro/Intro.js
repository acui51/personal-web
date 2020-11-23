import React from "react";
import styles from "./Intro.module.css";
import Resume from "../../assets/resume.pdf";
import {
  AiFillGithub,
  AiFillFilePdf,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

export default function Intro() {
  return (
    <div className={styles.Intro}>
      <h1>Hi, I'm Alix ⛰️</h1>
      <p>
        I'm currently a sophomore studying Computer Science at Stanford, and I'm
        considering the Human Computer Interaction track. On the side, I enjoy
        creating web applications and learning about new modern frameworks and
        technologies.
      </p>
      <div className={styles.Icons}>
        <div className={styles.Icon}>
          <a
            style={{ color: "#212529" }}
            href="https://github.com/acui51"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={25} />
          </a>
        </div>
        <div className={styles.Icon}>
          <a
            style={{ color: "#212529" }}
            href="https://www.linkedin.com/in/alix-cui/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={25} />
          </a>
        </div>
        <div className={styles.Icon}>
          <a style={{ color: "#212529" }} href="mailto:acui@stanford.edu">
            <AiFillMail size={25} />
          </a>
        </div>
        <div className={styles.Icon}>
          <a
            style={{ color: "#212529" }}
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFilePdf size={25} />
          </a>
        </div>
      </div>
    </div>
  );
}
