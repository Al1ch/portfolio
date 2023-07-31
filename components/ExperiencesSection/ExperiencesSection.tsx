import React from "react";
import styles from "./ExperiencesSection.module.scss";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Efrei from "@/assets/photo/efrei.jpg";

const ExperiencesSection = () => {
  return (
    <section className={styles.experiencesSection}>
      <h2 className={styles.title}> Experiences </h2>
      <div className={styles.experiencesContainer}>
        <ExperienceCard
          title="Master Degree"
          company="EFREI PARIS"
          image={Efrei}
        />
        <ExperienceCard
          title="Master Degree"
          company="EFREI PARIS"
          image={Efrei}
        />
        <ExperienceCard
          title="Master Degree"
          company="EFREI PARIS"
          image={Efrei}
        />
      </div>
    </section>
  );
};

export default ExperiencesSection;
