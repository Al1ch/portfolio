import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import profile from '../assets/photo/profile.jpg'

export default function Home() {
  return (
    <>
    <Header />
    <main className={styles.main}>
      <div className={styles.profileContainer}>
        <Image src={profile} alt="Picture of the author" width={500} height={500} className={styles.profile}/>
        <span className={styles.message}> Hi, I am Alain 👋 </span>
      </div>
      <div className={styles.text}>
        <span>Building digital </span>
        <span>products, exploring new technologies and </span>
        <span>creating awesome user experiences.</span>
      </div>
    </main>
   </>
  )
}
