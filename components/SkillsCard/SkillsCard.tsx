import React from "react";
import styles from "./SkillsCard.module.scss";
import SkillBadge from "../SkillBadge/SkillBadge";

type Props = {
  titleCard: string;
};

const SkillsCard = ({ titleCard }: Props) => {
  return (
    <section className={styles.container} id="skills">
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
          <h3 className={styles.titleCard}>{titleCard}</h3>
        </div>
        <div className={styles.badgeContainer}>
          <SkillBadge name={"strapi "} />
          <SkillBadge name={"strapi "} />
          <SkillBadge name={"strapi "} />
          <SkillBadge name={"strapi "} />
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
