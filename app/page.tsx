import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import profile from "../assets/photo/profile.jpg";
import SkillsCard from "@/components/SkillsCard/SkillsCard";
import TestimonyCard from "@/components/TestimonyCard/TestimonyCard";
import TestimonySlider from "@/components/TestimonySlider/TestimonySlider";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import ExperiencesSection from "@/components/ExperiencesSection/ExperiencesSection";
import StackSection from "@/components/StackSection/StackSection";

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
        <StackSection />
        <ExperiencesSection />
        <TestimonySlider />
      </main>
    </>
  );
}
