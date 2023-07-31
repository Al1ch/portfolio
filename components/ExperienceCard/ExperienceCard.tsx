import React from "react";
import styles from "./ExperienceCard.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: string | StaticImageData;
  title: string;
  company: string;
};

const ExperienceCard = ({ image, title, company }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt="" width={75} height={75} />
      <div className={styles.infoContainer}>
        <h3>{title}</h3>
        <p className={styles.description}> {company} </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
