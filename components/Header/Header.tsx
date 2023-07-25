import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import MessageIcon from "../../assets/vectors/message.svg";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.contactContainer}>
        <button className={styles.contactButton}>
          <MessageIcon />
        </button>
        <p>alain.chea@efrei.net</p>
      </div>
      <div className={styles.socialMediaContainer}>
        <Link href="#skills" className={styles.link}>
          Skills /
        </Link>
        <Link href="https://github.com/Al1ch" className={styles.link}>
          Career /
        </Link>
        <Link href="https://github.com/Al1ch" className={styles.link}>
          Hotmail
        </Link>
      </div>
    </header>
  );
};

export default Header;
