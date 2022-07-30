import React from "react";
import { StepCard } from "../Cards";
import styles from "./style.module.scss";

const Steps = ({lable, title, desc, options = [] }) => {
    const cardHeight = options.length> 2? 'unset':'112px'
  return (
    <div className={styles.steps}>
      <p className={styles.lable}>
        {lable}/<span>5</span>
      </p>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      {options.map((text,ind) => (
        <StepCard key={ind} text={text} cardHeight={cardHeight} />
      ))}
    </div>
  );
};

export default Steps;
