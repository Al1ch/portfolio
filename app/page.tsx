import ExperiencesSection from "@/components/ExperiencesSection/ExperiencesSection";
import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import StackSection from "@/components/StackSection/StackSection";
import TestimonySection from "@/components/TestimonySection/TestimonySection";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ProfileSection />
        <StackSection />
        <ExperiencesSection />
        <TestimonySection />
      </main>
    </>
  );
}
