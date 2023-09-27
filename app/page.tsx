import ExperiencesSection from "@/components/ExperiencesSection/ExperiencesSection";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import StackSection from "@/components/StackSection/StackSection";
import TestimonySection from "@/components/TestimonySection/TestimonySection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.body}>
          <ProfileSection />
          <StackSection />
          <ExperiencesSection />
          <ProjectSection />
          <TestimonySection />
        </div>
      </main>
    </>
  );
}
