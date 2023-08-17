"use client";
import React from "react";
import styles from "./TestimonySlider.module.scss";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import profile from "@/assets/photo/profile.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonySlider.css";
import { testimonies } from "@/data/testimonies";

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
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "120px",
  slidesToShow: 1,
  speed: 500,
  dot: true,
  adaptiveHeight: true,
  // nextArrow: <ArrowSlideButton direction="right" />,
  // prevArrow: <ArrowSlideButton direction="left" />,
};

const TestimonySection = () => {
  return (
    <div className={styles.testimonySection}>
      <h2 className={styles.testimonyTitle}>Testimonial </h2>
      <div className={styles.testimonyContainer}>
        <Slider {...settings} className={styles.sliderContainer}>
          {testimonies.map((testimony) => (
            <TestimonyCard key={testimony.id} {...testimony} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonySection;
