import React from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <h1>Projects</h1>
      <ProjectsCard />
    </div>
  );
}
