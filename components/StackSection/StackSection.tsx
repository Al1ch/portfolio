import React from "react";
import styles from "./StackSection.module.scss";
import SkillsCard from "../SkillsCard/SkillsCard";

const StackSection = () => {
  return (
    <section className={styles.stackSection}>
      <span className={styles.titleSection}>
        <h2 className={styles.stackTitle}>Skills</h2>
        <p>Some Knowledge Ive gained </p>
      </span>
      <div className={styles.stackCardContainer}>
        <SkillsCard titleCard="Front-end" />
        <SkillsCard titleCard="Back-end" />
        <SkillsCard titleCard="Database" />
      </div>
    </section>
  );
};

export default StackSection;
