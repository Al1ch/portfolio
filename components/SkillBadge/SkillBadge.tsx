import React from "react";
import styles from "./SkillBadge.module.scss";
import { SvgComponent } from "@/types/model";

type Props = {
  name: string;
  icon: SvgComponent;
};

const SkillBadge = ({ name, icon: Icon }: Props) => {
  return (
    <div className={styles.container}>
      <Icon className={styles.logo} />
      <span className={styles.infoName}>{name}</span>
    </div>
  );
};

export default SkillBadge;
