"use client";
import React, { useEffect, useRef } from "react";
import styles from "./ExperiencesSection.module.scss";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import Efrei from "@/assets/photo/efrei.jpg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const ExperiencesSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom  bottom",
          scrub: true,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className={styles.experiencesSection}>
      <div ref={triggerRef}>
        {/* <h2 className={styles.title}> Experiences </h2> */}
        <div ref={sectionRef} className={styles.experiencesContainer}>
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
          <ExperienceCard
            title="Master Degree"
            company="EFREI PARIS"
            image={Efrei}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
