import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
import { SvgComponent } from "@/types/model";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  disable?: boolean;
  onClick?: () => void;
  color?: string;
  label?: string;
  icon?: SvgComponent;
};

const Button = ({ label, color = "white", icon: Icon }: Props) => {
  return (
    <button className={styles.button}>
      <Link href="mailto:alain.chea@efrei.net" className={styles.link}>
        {Icon && <Icon />}
        {label}
      </Link>
    </button>
  );
};

export default Button;
