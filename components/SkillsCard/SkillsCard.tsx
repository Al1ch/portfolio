import React from "react";
import styles from "./SkillsCard.module.scss";
import SkillBadge from "../SkillBadge/SkillBadge";

const SkillsCard = () => {
  return (
    <section className={styles.container}>
      <div className={styles.stack}>
        <div className={styles.headerCard}>
          <div className={styles.dotsContainer}>
            <span className={styles.dot} style={{ backgroundColor: "#f87171" }}>
              {" "}
            </span>
            <span className={styles.dot} style={{ backgroundColor: "#facc15" }}>
              {" "}
            </span>
            <span className={styles.dot} style={{ backgroundColor: "#4ade80" }}>
              {" "}
            </span>
          </div>
          <h3 className={styles.titleCard}>Front-end</h3>
        </div>
        <div className={styles.badgeContainer}>
          <SkillBadge name={"strapi "} />
          <SkillBadge name={"strapi "} />
          <SkillBadge name={"strapi "} />
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
