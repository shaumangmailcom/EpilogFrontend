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

const Match = () => {
  return (
    <div className={styles.match}>
      <AppHeader back />
      <div className={styles.header}>
        <p>Sharing with family and friends</p>
        <img src={c1} />
      </div>
      <div className={styles.content}>
        <Indicator />
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4}>
            <SliderCard
              title="In general, how freely do you share your personal life with your close..."
              options={[
                {
                  lable: "Family",
                  sLableOne: "Not Very",
                  sLableTwo: "Very Much",
                },
                {
                  lable: "Friends",
                  sLableOne: "Not Very",
                  sLableTwo: "Very Much",
                },
                {
                  lable: "Co-workers",
                  sLableOne: "Not Very",
                  sLableTwo: "Very Much",
                },
              ]}
            />
            <SliderCard
              title="After sharing something personal, do you usually feel better or worse?"
              options={[
                {
                  sLableOne: "Worse",
                  sLableCenter: "No change",
                  sLableTwo: "Better",
                },
              ]}
            />
            <div className={styles.crdSec}>
              <p className={styles.title}>
                Do you feel more free to share personal information online or in
                person?
              </p>
              <StepCard cardHeight="60px" text="Online" />
              <StepCard cardHeight="60px" text="In person" />
              <StepCard cardHeight="60px" text="Doesn’t matter" />
            </div>
            <SliderCard
              title="To what degree do you want people who are close to you to feel your pain?"
              options={[
                {
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  quetion: "To what degree do you want people to empathize with your pain?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  quetion: "To what degree do you want people who are close to you to talk to you about your illness?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  quetion: "To what degree do you really want to get advice about your illness and treatment from people who are close to you?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
              ]}
            />
            <SliderCard
              options={[
                {
                  quetion: "To what degree do you enjoy being the center of attention in good times?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  quetion: "To what degree do you enjoy being the center of attention in general?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
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

export default Match;
