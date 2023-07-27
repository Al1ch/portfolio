import React from "react";
import styles from "./ArrowSlideButton.module.scss";
import ArrowLeft from "@/assets/vectors/arrowLeft.svg";
import cn from "classnames";

type Props = {
  direction: "left" | "right";
  onClick: () => void;
};

const ArrowSlideButton = ({ direction, onClick }: Props) => {
  return (
    <div>
      <ArrowLeft
        classNames={direction === "left" ? styles.left : styles.right}
      />
    </div>
  );
};

export default ArrowSlideButton;
