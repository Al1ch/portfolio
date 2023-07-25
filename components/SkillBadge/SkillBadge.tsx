import React from "react";
import styles from "./SkillBadge.module.scss";
import { StaticImageData } from "next/image";
import ReactIcon from "@/assets/vectors/react.svg";

type Props = {
  name: string;
  url?: string | StaticImageData;
};

const SkillBadge = ({ name, url }: Props) => {
  return (
    <div className={styles.container}>
      <ReactIcon className={styles.logo} />
      <span className={styles.infoName}>{name}</span>
    </div>
  );
};

export default SkillBadge;
