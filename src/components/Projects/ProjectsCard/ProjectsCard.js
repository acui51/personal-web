import React from "react";
import styles from "./ProjectsCard.module.css";
import ProjectTechnology from "./ProjectTechnology/ProjectTechnology";
import { AiFillGithub } from "react-icons/ai";
import ALIdemo from "../../../assets/alidemo.gif";
import Telehistorydemo from "../../../assets/telehistorydemo.gif";
// import Sproutdemo from "../../../assets/sproutdemo.gif";
import Sproutdemo from "../../../assets/sproutdemo1.gif";

/**
 * Project Card Component Credit goes to markelrayes
 * https://codepen.io/markelrayes/pen/ZEGVBZm?__cf_chl_jschl_tk__=d8fb598d0b6378f54df98d875798aecf62c07cfb-1606072410-0-ATdnFCljbrkSFfdoLPQe-KPbZaOzuwZOqIH4nfvpQFehuYl8ro3XL-Oo-CuDAhoohZGpaRnvFcy4XGZKEIavt3dJmhwvWRnIGHJQU4jIk1GbOFXL427w3YFDNjV1ATmSpjp5ckNhRio1dxi6bda1TiwzCToyk0JLP2oYKwDMtronizYEt6YsWUmJojXY0pV-00Fz2FtqZJeG7h_dzKqJyF2lx31M5FEfDveoSlkBxM_FXHmxsqy6uEiyiWwVgyv-iNy8KwGNRtfdK1QYWsdIs6cgUk6XYMgziw0jlQ8uDvH90I6fNamg46h4uUDg8LyPsTRvznWCg-WauBoNisxeYW7kgcMJB9QLKANhbjkXvLhNj6veR5WO5J9aFFqP_v6tAweJvJb-COkp90ZqFgURoXc
 */

export default function ProjectsCard() {
  return (
    <div className={styles.wrapper}>
      {/* Telehistory */}
      <div className={styles.center}>
        <div className={styles.propertyCard}>
          <span>
            <div
              className={styles.propertyImage}
              style={{ backgroundImage: `url(${Telehistorydemo})` }}
            ></div>
          </span>
          <div className={styles.propertyDescription}>
            <h5> Telehistory</h5>
            <p>
              A web app that charts and analyzes data from your chat history on
              the popular messaging app, Telegram.
              <div className="d-flex flex-wrap justify-content-center">
                <ProjectTechnology>Next.js</ProjectTechnology>
                <ProjectTechnology>TypeScript</ProjectTechnology>
                <ProjectTechnology>Tailwind CSS</ProjectTechnology>
                <ProjectTechnology>Nivo Graphs</ProjectTechnology>
                <ProjectTechnology>Parallel Dots API</ProjectTechnology>
              </div>
            </p>
          </div>
          <a
            href="https://github.com/acui51/telehistory-v2.1"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.propertySocialIcons}>
              <AiFillGithub size={25} color={"#212529"} />
            </div>
          </a>
        </div>
      </div>

      {/* ALI */}
      <div className={styles.center}>
        <div className={styles.propertyCard}>
          <span>
            <div
              className={styles.propertyImage}
              style={{ backgroundImage: `url(${ALIdemo})` }}
            ></div>
          </span>
          <div className={styles.propertyDescription}>
            <h5> Applied Learning Initiative</h5>
            <p>
              A web app that allows students to find research opportunities with
              various PIs.
              <div className="d-flex flex-wrap justify-content-center">
                <ProjectTechnology>React/Redux</ProjectTechnology>
                <ProjectTechnology>TypeScript</ProjectTechnology>
                <ProjectTechnology>Node/Express</ProjectTechnology>
                <ProjectTechnology>MongoDB</ProjectTechnology>
                <ProjectTechnology>Firebase Auth</ProjectTechnology>
              </div>
            </p>
          </div>
          <a
            href="https://github.com/acui51/ali-site"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.propertySocialIcons}>
              <AiFillGithub size={25} color={"#212529"} />
            </div>
          </a>
        </div>
      </div>

      {/* Sprout */}
      <div className={styles.center}>
        <div className={styles.propertyCard}>
          <span>
            <div
              className={styles.propertyImage}
              style={{ backgroundImage: `url(${Sproutdemo})` }}
            ></div>
          </span>
          <div className={styles.propertyDescription}>
            <h5> Sprout App </h5>
            <p>
              A hi-fidelity prototype for an app that allows creators to train
              together sounds and connect effortlessly.
              <div className="d-flex flex-wrap justify-content-center">
                <ProjectTechnology>React Native</ProjectTechnology>
                <ProjectTechnology>Expo</ProjectTechnology>
                <ProjectTechnology>Firebase</ProjectTechnology>
              </div>
            </p>
          </div>
          <a
            href="https://github.com/acui51/sprout-app"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.propertySocialIcons}>
              <AiFillGithub size={25} color={"#212529"} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
