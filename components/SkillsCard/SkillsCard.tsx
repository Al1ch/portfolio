import React from "react";
import styles from "./SkillsCard.module.scss";
import SkillBadge from "../SkillBadge/SkillBadge";
import NextIcon from "@/assets/vectors/next.svg";
import { SvgComponent } from "@/types/model";

type Props = {
  titleCard: string;
  skills: { name: string; icon: SvgComponent }[];
};

const SkillsCard = ({ titleCard, skills }: Props) => {
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
          {skills.map((skill) => (
            <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
          {/* <SkillBadge name={"strapi "} icon={<NextIcon />} />
          <SkillBadge name={"strapi "} icon="" />
          <SkillBadge name={"strapi "} icon="" />
          <SkillBadge name={"strapi "} icon="" /> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsCard;
