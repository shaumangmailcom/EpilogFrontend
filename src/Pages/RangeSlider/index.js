import React from "react";
import { SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { Indicator } from "../../Components/SmallComponents";
import styles from "./style.module.scss";
import time from "../../Assets/images/time.svg";

const Range = () => {
  return (
    <div className={styles.range}>
      <AppHeader back />
      <Indicator />
      <div className={styles.content}>
        <SliderCard
          img={time}
          title="During a typical day, how much time do you spend on:"
          desc="Distress is an unpleasant experience of a mental, physical, social or spiritual nature. It can affect the way you think, feel, or act. Distress may make it harder to cope with a severe illness, its symptoms, or its treatment."
        />
      </div>
    </div>
  );
};

export default Range;
