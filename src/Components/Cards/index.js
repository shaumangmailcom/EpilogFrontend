import React from "react";
import { Range } from "../SmallComponents";
import styles from "./style.module.scss";

export const StepCard = ({ text, cardHeight, color, rightImg,textWidth='100%',imgWidth }) => {
  return (
    <div className={styles.stepCard} style={{ height: cardHeight }}>
      <div style={{ width: textWidth }}>
        <p style={{ color }}>{text}</p>
      </div>
      <div style={{ width: imgWidth  }}>
        <img src={rightImg} />
      </div>
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
