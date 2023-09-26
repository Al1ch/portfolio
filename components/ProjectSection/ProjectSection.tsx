import React from "react";
import styles from "./ProjectSection.module.scss";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { projects } from "@/data/projects";

const ProjectSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Some Project </h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectDetails key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
