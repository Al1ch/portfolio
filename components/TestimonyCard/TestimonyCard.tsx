import React from "react";
import styles from "./TestimonyCard.module.scss";
import Image from "next/image";
import profile from "@/assets/photo/profile.jpg";

const TestimonyCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.testimony}>
        <p className={styles.text}>
          Alain is a very talented developer. He is very passionate about his
          work and is always looking for ways to improve. He is a great team
          player and is always willing to help others. He is a great asset to
          any team.
        </p>
      </div>
      <div className={styles.profile}>
        <h3 className={styles.name}>Alain Chea</h3>
        <p className={styles.infoRole}> CEO Founder </p>
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
