import React from "react";
import styles from "./ProjectDetails.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  cardInfo: {
    title: string;
    role: string;
    description: string;
  };
  description: string;
  title: string;
  image: string | StaticImageData;
};

const ProjectDetails = ({ cardInfo, description, title, image }: Props) => {
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
        <div className={styles.details}>{description}</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
