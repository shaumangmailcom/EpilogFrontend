import React, { useCallback } from "react";
import { StepCard } from "../Cards";
import styles from "./style.module.scss";

const Steps = ({ lable, title, desc, data, options = [], onClick }) => {
  const cardHeight = options.length > 2 ? "unset" : "112px";
  const clickItem = useCallback(
    (text) => {
      onClick?.(text);
    },
    [onClick]
  );
  return (
    <div className={styles.steps}>
      {!!lable && (
        <p className={styles.lable}>
          {lable}/<span>5</span>
        </p>
      )}
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      {options.map((text, ind) => (
        <StepCard
          onClick={() => clickItem(text)}
          key={ind}
          text={text}
          active={data === text}
          cardHeight={cardHeight}
        />
      ))}
    </div>
  );
};

export default Steps;
