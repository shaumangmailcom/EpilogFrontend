import React from "react";
import { Range } from "../SmallComponents";
import styles from "./style.module.scss";

export const StepCard = ({ text, cardHeight, color }) => {
  return (
    <div className={styles.stepCard} style={{ height: cardHeight }}>
      <p style={{ color }}>{text}</p>
    </div>
  );
};

export const SliderCard = ({ img, title, desc, options = [] }) => {
  return (
    <div className={styles.sliderCard}>
      <div className={styles.imgSec}>
        <img src={img} />
      </div>
      <p className={styles.title}>{title}</p>
      {desc && <p className={styles.desc}>{desc}</p>}
      {options.map((text, ind) => (
        <Range title="Work" />
      ))}
    </div>
  );
};
