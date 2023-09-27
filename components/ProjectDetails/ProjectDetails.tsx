import React from "react";
import styles from "./ProjectDetails.module.scss";
import Image, { StaticImageData } from "next/image";
import { SvgComponent } from "@/types/model";

type Props = {
  cardInfo: {
    title: string;
    role: string;
    description: string;
  };
  description: string;
  title: string;
  image: string | StaticImageData;
  stacks: { name: string; icon: SvgComponent }[];
};

const ProjectDetails = ({
  cardInfo,
  description,
  title,
  image,
  stacks,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <Image className={styles.image} alt="" src={image} />
        <div className={styles.infoImage}>
          <div className={styles.header}>
            <h4 className={styles.projectTitle}>{cardInfo.title}</h4>
            <span className={styles.role}>{cardInfo.role}</span>
          </div>
          <span className={styles.detailsProjectImage}>
            {cardInfo.description}
          </span>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.titleProject}>{title}</h3>
        <span className={styles.details}>{description}</span>
        <div className={styles.stackList}>
          {stacks.map((stack, index) => (
            <stack.icon key={index} className={styles.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
