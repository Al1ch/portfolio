import React from "react";
import styles from "./ProfileSection.module.scss";
import Image from "next/image";
import profile from "@/assets/photo/profile.jpg";

const ProfileSection = () => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profileContainer}>
        <Image
          src={profile}
          alt="Picture of the author"
          width={500}
          height={500}
          className={styles.profile}
        />
        <span className={styles.message}> Hi, I am Alain 👋 </span>
      </div>
      <div className={styles.catchPhraseContainer}>
        <span className={styles.catchPhrase}>Building digital </span>
        <span className={styles.catchPhrase}>products, brands and</span>
        <span className={styles.catchPhrase}>
          creating awesome user experiences.
        </span>
      </div>
    </div>
  );
};

export default ProfileSection;
