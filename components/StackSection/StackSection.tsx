import React from "react";
import styles from "./StackSection.module.scss";
import SkillsCard from "../SkillsCard/SkillsCard";
import { stacks } from "@/data/stacks";

const StackSection = () => {
  return (
    <section className={styles.stackSection}>
      <span className={styles.titleSection}>
        <h2 className={styles.stackTitle}>Skills</h2>
        <p>Some Knowledge Ive gained </p>
      </span>
      <div className={styles.stackCardContainer}>
        {stacks.map((stack) => (
          <SkillsCard key={stack.id} {...stack} />
        ))}
      </div>
    </section>
  );
};

export default StackSection;
