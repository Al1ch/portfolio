"use client";
import React from "react";
import styles from "./TestimonySection.module.scss";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import { testimonies } from "@/data/testimonies";

const TestimonySection = () => {
  return (
    <div className={styles.testimonySection}>
      <h2 className={styles.testimonyTitle}>Testimonies </h2>
      <div className={styles.testimonyContainer}>
        {testimonies.map((testimony) => (
          <TestimonyCard key={testimony.id} {...testimony} />
        ))}
      </div>
    </div>
  );
};

export default TestimonySection;
