import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import MessageIcon from "../../assets/vectors/message.svg";
import GithubIcon from "@/assets/vectors/github.svg";
import LinkedInIcon from "@/assets/vectors/linkedin.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.socialMediaContainer}>
        <Link href="https://github.com/Al1ch" className={styles.contact}>
          <GithubIcon className={styles.icon} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alain-chea-b53b1b1a2/"
          className={styles.contact}
        >
          <LinkedInIcon className={styles.icon} />
        </Link>
        <Button size={"sm"}>
          <Link href="mailto:alain.chea@efrei.net" className={styles.link}>
            {<MessageIcon />}
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
