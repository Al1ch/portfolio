"use client";
import React from "react";
import profile from "@/assets/photo/profile.jpg";
import { testimonies } from "@/data/testimonies";
import styles from "./TestimonySection.module.scss";
import TestimonyCard from "../TestimonyCard/TestimonyCard";

const TestimonySection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.testimonyTitle}>Testimonies </h2>
      <div className={styles.testimonySection}>
        {testimonies.map((testimony) => (
          <TestimonyCard {...testimony} key={testimony.id} />
        ))}
      </div>
    </div>
  );
};

export default TestimonySection;
