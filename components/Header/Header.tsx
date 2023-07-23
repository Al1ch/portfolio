import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import MessageIcon from '../../assets/vectors/message.svg'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <button className={styles.contactButton}>
        <MessageIcon/>
        </button>
        <p>alain.chea@efrei.net</p>
      </div>
      <div className={styles.socialMediaContainer}>
          <Link href="https://www.linkedin.com/in/alain-chea-6b1b3a1b2/" className={styles.link}>
            LinkedIn /
          </Link>
          <Link href="https://github.com/Al1ch"  className={styles.link}>
            GitHub /
          </Link>
          <Link href="https://github.com/Al1ch"  className={styles.link}>
            Hotmail
          </Link>
      </div>
    </div>
  )
}

export default Header