import classNames from "classnames";
import React, { useState } from "react";
import Slider from "react-rangeslider";
import styles from "./style.module.scss";

export const Indicator = ({ active, items }) => {
  return (
    <div className={styles.questionDots}>
      {[...Array(items)].map((_, ind) => (
        <div key={ind} className={ind <= active && styles.active} />
      ))}
    </div>
  );
};

export const Range = ({
  lable,
  className,
  sLableOne,
  sLableTwo,
  sLableCenter,
  quetion,
  id,
  value = 0,
  onChange,
}) => {
  // console.log("value", value, id);
  // const [slider, setSlider] = useState(1);

  return (
    <div className={classNames(styles.range, className)}>
      {lable && <Lable className={styles.rgLabel} lable={lable} />}
      {quetion && <p className={styles.qs}>{quetion}</p>}
      <Slider
        min={0}
        max={10}
        step={1}
        onChange={(v) => onChange?.(id, v)}
        value={value}
        // orientation={String}
        // reverse={Boolean}
        tooltip={false}
        // labels={Object}
        // handleLabel={String}
        // format={Function}
        // onChangeStart={Function}
        // onChange={Function}
        // onChangeComplete={Function}
      />
      <div className={styles.lblSec}>
        <p>{sLableOne}</p>
        <p>{sLableCenter}</p>
        <p>{sLableTwo}</p>
      </div>
    </div>
  );
};
export const Lable = ({ lable, className }) => {
  return (
    <div className={classNames(styles.lableSec, className)}>
      <p>{lable}</p>
    </div>
  );
};
