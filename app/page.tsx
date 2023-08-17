import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import StackSection from "@/components/StackSection/StackSection";
import TestimonySection from "@/components/TestimonySlider/TestimonySection";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ProfileSection />
        <StackSection />
        <TestimonySection />
        {/* <ExperiencesSection /> */}
      </main>
    </>
  );
}
