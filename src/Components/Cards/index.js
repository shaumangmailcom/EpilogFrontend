import React from "react";
import AppButton from "../Button";
import { Lable, Range } from "../SmallComponents";
import right from "../../Assets/images/right.svg";
import Form from "react-bootstrap/Form";
import styles from "./style.module.scss";

export const StepCard = ({
  text,
  cardHeight,
  color,
  rightImg,
  textWidth = "100%",
  imgWidth,
}) => {
  return (
    <div className={styles.stepCard} style={{ height: cardHeight }}>
      <div style={{ width: textWidth }}>
        <p style={{ color }}>{text}</p>
      </div>
      <div style={{ width: imgWidth }}>
        <img src={rightImg} />
      </div>
    </div>
  );
};

export const SliderCard = ({ img, title, desc, options = [] }) => {
  return (
    <div className={styles.sliderCard}>
      {img && (
        <div className={styles.imgSec}>
          <img src={img} />
        </div>
      )}
      <p className={styles.title}>{title}</p>
      {desc && <p className={styles.desc}>{desc}</p>}
      {options.map((obj, ind) => (
        <Range className={styles.rgSlider} key={ind} {...obj} />
      ))}
    </div>
  );
};

export const CatgCard = ({ title, number, desc }) => {
  return (
    <div className={styles.catgCard}>
      <div className={styles.header}>
        <Lable lable={title} />
        <p className={styles.lbl}>{number}</p>
      </div>
      <p className={styles.dtl}>{desc}</p>
    </div>
  );
};

export const CheckCard = ({ title, question, options = [] }) => {
  return (
    <div className={styles.checkCard}>
      <p className={styles.title}>{title}</p>
      {options.map((obj, ind) => (
        <div className={styles.content} key={ind} {...obj}>
          <p className={styles.dtl}>{question}</p>
          <div className={styles.checkBox}>
            <Form.Check inline label="Yes" name="group1" />
          </div>
          <div className={styles.checkBox}>
            <Form.Check inline label="No" name="group1" />
          </div>
        </div>
      ))}
    </div>
  );
};
