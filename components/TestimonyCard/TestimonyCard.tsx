import React from "react";
import styles from "./TestimonyCard.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  name: string;
  role: string;
  testimony: string;
  profile: string | StaticImageData;
};

const TestimonyCard = ({ name, role, testimony, profile }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image
          src={profile}
          alt="profileTestimony"
          className={styles.image}
          width={75}
          height={75}
        />
        <div className={styles.profileInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <div className={styles.testimony}>{testimony}</div>
    </div>
  );
};

export default TestimonyCard;
