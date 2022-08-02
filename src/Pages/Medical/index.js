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
import journeyImg2 from "../../Assets/images/journey2.svg";
import AppButton from "../../Components/Button";
import Steps from "../../Components/Steps";

const Medical = () => {
  return (
    <div className={styles.medical}>
      <AppHeader back />
      <div className={styles.header}>
        <p>Wishes for medical care</p>
        <img src={journeyImg2} />
      </div>
      <div className={styles.content}>
        <Indicator />
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4}>
            <div className={styles.textSec}>
              <p className="title24">
                We are about to ask you a few questions, aimed to help
                understand your wishes for end of life medical care.{" "}
              </p>
              <p className="desc18">
                In most cases, people don’t get to communicate their wishes
                effectively. In this journey, we will ask you questions and have
                our experts extrapolate from them our recommendations for your
                wishes toward end of life. This will help you establish your
                wishes in a better way.
              </p>
              <p className="desc18b">
                At the end of the questions, we will lay out our recommendations
                in this regard.
              </p>
              <AppButton
                title="Let’s Go"
                className={styles.tsBtn}
                fontSize="15px"
              />
            </div>
            <SliderCard
              options={[
                {
                  quetion:
                    "Do you think rationally or emotionally about your large decisions?",
                  sLableOne: "Mostly rationally",
                  sLableTwo: "Mostly emotionally",
                },
                {
                  quetion:
                    "Do you want to think rationally or emotionally about your large decisions?",
                  sLableOne: "Mostly rationally",
                  sLableTwo: "Mostly emotionally",
                },
              ]}
            />
            <SliderCard
              options={[
                {
                  quetion:
                    "To what extent is it important for you to feel in control in general?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
                {
                  quetion:
                    "To what extent is it important for you to feel in control when it comes to your health?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
                {
                  quetion:
                    "To what extent are you willing to trust others to make health decisions for you?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
              ]}
            />
            <SliderCard
              options={[
                {
                  quetion:
                    "Do you have much experience as a patient in hospital?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
                {
                  quetion:
                    "To what extent will your quality of life be impacted by being hospitalized?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
                {
                  quetion:
                    "Do you have much experience as a visitor of a loved one in hospital?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
                {
                  quetion:
                    "To what extent has your quality of life impacted by visiting a loved one in hospital?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
              ]}
            />
            <SliderCard
              options={[
                {
                  quetion:
                    "Relative to other people how much do you suffer from pain?",
                  sLableOne: "Less than others",
                  sLableTwo: "More than others",
                },
                {
                  quetion:
                    "Do you have any moral or religious beliefs that would get you to hold onto life at all cost?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
                {
                  quetion:
                    "To what degree do you feel that you are living for yourself vs for other people?",
                  sLableOne: "Not At All",
                  sLableTwo: "Very Much",
                },
              ]}
            />
            <Steps
              title="Imagine someone you love has a terminal illness. Doctors estimate they have less than 6 months to live. Which of the following goals of care would you recommend?"
              options={[
                " Emphasis on prolonging life",
                "Emphasis on comfort and minimizing suffering",
              ]}
            />
            <Steps
              title="Imagine someone you love has a terminal illness. Doctors estimate they have less than 6 months to live. There is a new treatment that has low probability to prolong life by up to 6 months but has a high probability for impairing your loved one’s quality of life dramatically. Would you recommend your loved one to take the treatment?"
              options={[
                "Yes",
                "No",
                " I cannot answer that"
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
