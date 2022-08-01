import React from "react";
import { Row, Col } from "react-bootstrap";
import { SliderCard, StepCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { Indicator } from "../../Components/SmallComponents";
import styles from "./style.module.scss";
import time from "../../Assets/images/time.svg";
import cup from "../../Assets/images/cup.svg";
import heart from "../../Assets/images/heart.svg";
import sunset from "../../Assets/images/sunset.svg";
import stars from "../../Assets/images/stars.svg";
import bird from "../../Assets/images/bird.svg";
import c1 from "../../Assets/images/c1.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";

const Medical = () => {
  return (
    <div className={styles.medical}>
      <AppHeader back />
      <div className={styles.header}>
        <p>Wishes for medical care</p>
        <img src={c1} />
      </div>
      <div className={styles.content}>
        <Indicator />
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4}>
            <SliderCard
              title="Do you think rationally or emotionally about your large decisions?"
              options={[
                {
                  sLableOne: "Mostly rationally",
                  sLableTwo: "Mostly emotionally",
                },
                {
                  quetion: "Do you want to think rationally or emotionally about your large decisions?",
                  sLableOne: "Mostly rationally",
                  sLableTwo: "Mostly emotionally",
                  
                },

              ]}
            />

          </Col>
        </Row>
        <Row className={styles.btnRow}>
          <Col xs={12} md={8} lg={6} xl={4}>
            <AppButton
              className={styles.btn}
              src={right}
              imgWidth="10px"
              imgMargin="0"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Medical;
