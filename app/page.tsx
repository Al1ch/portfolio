import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import profile from "../assets/photo/profile.jpg";
import SkillsCard from "@/components/SkillsCard/SkillsCard";

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
        <div className={styles.stackContainer}>
          <span className={styles.titleSection}>
            <h2 className={styles.stackTitle}>Skills</h2>
            <p>Some Knowledge I've gained 🙃 </p>
          </span>
          <SkillsCard />
        </div>
      </main>
    </>
  );
}
