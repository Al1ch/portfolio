import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
import { SvgComponent } from "@/types/model";
import cn from "classnames";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  disable?: boolean;
  onClick?: () => void;
  size: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  radius?: "circle" | "rounded";
  children: React.ReactNode;
};

const Button = ({ children, color = "white", radius = "rounded" }: Props) => {
  return (
    <button className={cn(styles.button, styles[color], styles[radius])}>
      {children}
    </button>
  );
};

export default Button;
