import React from "react";
import AppButton from "../Button";
import { Range } from "../SmallComponents";
import right from "../../Assets/images/right.svg"
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
      {img && <div className={styles.imgSec}>
        <img src={img} />
      </div>}
      <p className={styles.title}>{title}</p>
      {desc && <p className={styles.desc}>{desc}</p>}
      {options.map((obj, ind) => (
        <Range className={styles.rgSlider} key={ind} {...obj} />
      ))}
    </div>
  );
};
