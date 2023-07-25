import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import profile from "../assets/photo/profile.jpg";
import SkillsCard from "@/components/SkillsCard/SkillsCard";
import TestimonyCard from "@/components/TestimonyCard/TestimonyCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
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
        <div className={styles.stackSection}>
          <span className={styles.titleSection}>
            <h2 className={styles.stackTitle}>Skills</h2>
            <p>Some Knowledge I've gained 🙃 </p>
          </span>
          <div className={styles.stackCardContainer}>
            <SkillsCard titleCard="Front-end" />
            <SkillsCard titleCard="Back-end" />
            <SkillsCard titleCard="Database" />
          </div>
        </div>

        <div className={styles.testimonySection}>
          <h2 className={styles.stackTitle}>Testimonial </h2>
          <div className={styles.container}>
            <TestimonyCard />
          </div>
        </div>
      </main>
    </>
  );
}
