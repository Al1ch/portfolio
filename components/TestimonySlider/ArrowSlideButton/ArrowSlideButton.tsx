import React from "react";
import styles from "./ArrowSlideButton.module.scss";
import ArrowLeft from "@/assets/vectors/arrowLeft.svg";
import ArrowRight from "@/assets/vectors/arrowRight.svg";
import cn from "classnames";

type Props = {
  direction: "left" | "right";
};

const ArrowSlideButton = ({ direction }: Props) => {
  return (
    <button className={styles.button}>
      {direction === "right" ? <ArrowRight /> : <ArrowRight />}
    </button>
  );
};

export default ArrowSlideButton;
