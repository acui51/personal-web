import React from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.Experience}>
      <h1>Experience</h1>

      <ExperienceCard
        company={"Amazon"}
        color={"#FF9900"}
        occupation={"Software Development Engineer Intern"}
        description={["Incoming Summer 2021 (AWS)"]}
        dates={"Jun 2021 - Sep 2021"}
      />
      <ExperienceCard
        company="The Washington Post"
        color="#212121"
        occupation="Software Engineer Intern"
        description={[
          "Building front-end components using React.js for the home and article pages",
          "Writing unit tests using Jest and Enzyme and E2E tests using Cypress",
          "Working in agile development following scrum methodologies",
        ]}
        technologies={["Next.js", "Jest", "Enzyme", "Cypress", "Storybook"]}
        dates="Mar 2021 - June 2021"
      />
      <ExperienceCard
        company={"Stanford"}
        color={"#B83A4B"}
        occupation={"Full Stack Engineer Intern"}
        description={[
          "Converting a logic courseware application to a newly improved web-based application using the MVC paradigm",
          "Refashioned the model component of the design pattern by serializing data from the backend into abstracted components",
          "Integrating REST API endpoints with Java using Jersey",
          "Migrated from Bootstrap V3 to Bootstrap V4 with a complete responsive redesign of the application chrome",
        ]}
        technologies={["JavaScript (ES6)", "jQuery", "Java", "Subversion SVN"]}
        dates={"Jun 2020 - April 2021"}
      />
      <ExperienceCard
        company={"Stanford Carta"}
        color={"#B83A4B"}
        occupation={"Front-end Engineer"}
        description={[
          "Improving on Carta V2 and help building Carta V3 from the ground up",
          <a
            href="http://carta-beta.stanford.edu/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Carta V2{" "}
          </a>,
        ]}
        technologies={["React", "Redux", "TypeScript", "Storybook"]}
        dates={"Sep 2020 - Present"}
      />
    </div>
  );
}
