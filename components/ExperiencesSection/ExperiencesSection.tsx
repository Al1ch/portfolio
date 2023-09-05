"use client";
import React from "react";
import styles from "./ExperiencesSection.module.scss";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import { experiences } from "@/data/experiences";

const ExperiencesSection = () => {
  return (
    <section className={styles.experiencesSection}>
      <h2 className={styles.title}> Experiences </h2>
      <div className={styles.experiencesContainer}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            image={experience.logo}
            date={experience.date}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;
