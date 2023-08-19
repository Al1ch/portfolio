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
      <div className={styles.content}>
        <div className={styles.testimony}>
          <p className={styles.text}>{testimony}</p>
        </div>
        <div className={styles.profile}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.infoRole}> {role} </p>
        </div>
      </div>
      <Image
        src={profile}
        alt={""}
        width={100}
        height={100}
        className={styles.image}
      />
    </div>
  );
};

export default TestimonyCard;
