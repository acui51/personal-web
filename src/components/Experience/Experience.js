import React from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.Experience}>
      <h1>Experience</h1>
      <ExperienceCard
        company={"Stanford"}
        occupation={"Full Stack Engineer Intern"}
        description={[
          "Converting a logic courseware application to a newly improved web-based application using the MVC paradigm",
          "Refashioned the model component of the design pattern by serializing data from the backend into abstracted components",
          "Integrating REST API endpoints with Java using Jersey",
          "Migrated from Bootstrap V3 to Bootstrap V4 with a complete responsive redesign of the application chrome",
        ]}
        technologies={["JavaScript (ES6)", "jQuery", "Java", "Subversion SVN"]}
        dates={"Jun 2020 - Present"}
      />
      <ExperienceCard
        company={"Stanford Carta"}
        occupation={"Front-end Engineer"}
        description={[
          "Aiding in front-end development for Carta V2 and V3",
          "Built out new landing page for unlogged in users",
          <a
            href="http://carta-beta.stanford.edu/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Carta Beta{" "}
          </a>,
        ]}
        technologies={["React/Redux", "TypeScript"]}
        dates={"Sep 2020 - Present"}
      />
    </div>
  );
}
