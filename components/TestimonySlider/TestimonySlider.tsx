"use client";
import React, { useState } from "react";
import styles from "./TestimonySlider.module.scss";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import profile from "@/assets/photo/profile.jpg";
import Slider from "react-slick";
import ArrowSlideButton from "@/assets/vectors/arrowLeft.svg";

const slider = [
  {
    id: 1,
    text: "Alain is a very talented developer. He is very passionate about his work and is always looking for ways to improve. He is a great team player and is always willing to help others. He is a great asset toany team.",
    name: "Alain Chea",
    role: "CEO Founder",
    image: { profile },
  },
  {
    id: 2,
    text: "Alain is a very talented developer. He is very passionate about his work and is always looking for ways to improve. He is a great team player and is always willing to help others. He is a great asset toany team.",
    name: "Alain Chea",
    role: "CEO Founder",
    image: { profile },
  },
  {
    id: 2,
    text: "Alain is a very talented developer. He is very passionate about his work and is always looking for ways to improve. He is a great team player and is always willing to help others. He is a great asset toany team.",
    name: "Alain Chea",
    role: "CEO Founder",
    image: { profile },
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <ArrowSlideButton direction="right" />,
  prevArrow: <ArrowSlideButton direction="left" />,
};

const TestimonySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styles.testimonySection}>
      <h2 className={styles.testimonyTitle}>Testimonial </h2>
      <div className={styles.testimonyContainer}>
        {slider.map((slide) => (
          <TestimonyCard key={slide.id} />
        ))}
      </div>
    </div>
  );
};

export default TestimonySlider;
