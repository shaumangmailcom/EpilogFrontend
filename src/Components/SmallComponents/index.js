import React from "react";
import Slider from 'react-rangeslider'
import styles from "./style.module.scss";


const items = 14;
const active = 0;
export const Indicator = () => {
  return (
    <div className={styles.questionDots}>
      {[...Array(items)].map((_, ind) => (
        <div key={ind} className={ind <= active && styles.active} />
      ))}
    </div>
  );
};

export const Range = ({ title }) => {
  return (
    <div className={styles.range}>
      <Lable lable={title} />
      <Slider
        min={0}
        max={10}
        step={Number}
        value={Number}
        orientation={String}
        reverse={Boolean}
        tooltip={Boolean}
        labels={Object}
        handleLabel={String}
        format={Function}
        onChangeStart={Function}
        onChange={Function}
        onChangeComplete={Function}
      />
    </div>
  );
};
export const Lable = ({ lable }) => {
  return (
    <div className={styles.lableSec}>
      <p>{lable}</p>
    </div>
  );
};
