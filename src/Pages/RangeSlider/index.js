import React from "react";
import { Row, Col } from "react-bootstrap";
import { SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { Indicator } from "../../Components/SmallComponents";
import styles from "./style.module.scss";
import time from "../../Assets/images/time.svg";
import cup from "../../Assets/images/cup.svg";
import heart from "../../Assets/images/heart.svg";
import sunset from "../../Assets/images/sunset.svg";
import stars from "../../Assets/images/stars.svg";
import bird from "../../Assets/images/bird.svg";
import prop from "../../Assets/images/prop.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";

const Range = () => {
  return (
    <div className={styles.range}>
      <AppHeader back />
      <div className={styles.content}>
        <Indicator />
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4}>
            <SliderCard
              img={time}
              title="During a typical day, how much time do you spend on:"
              desc="Distress is an unpleasant experience of a mental, physical, social or spiritual nature. It can affect the way you think, feel, or act. Distress may make it harder to cope with a severe illness, its symptoms, or its treatment."
              options={[
                {
                  lable: "work",
                  sLableOne: "Not Enough",
                  sLableTwo: "Too Much",
                },
                {
                  lable: "Friends & Family",
                  sLableOne: "Not Enough",
                  sLableTwo: "Too Much",
                },
                {
                  lable: "Health",
                  sLableOne: "Not Enough",
                  sLableTwo: "Too Much",
                },
                {
                  lable: "Other meaningful activities",
                  sLableOne: "Not Enough",
                  sLableTwo: "Too Much",
                },
                {
                  lable: "Sleep",
                  sLableOne: "Not Enough",
                  sLableTwo: "Too Much",
                },
                {
                  lable: "Having Fun",
                  sLableOne: "Not Enough",
                  sLableTwo: "Too Much",
                },
              ]}
            />
            <SliderCard
              img={cup}
              title="When you wake up in the morning to what extent do you have something to look forward to?"
              options={[
                {
                  sLableOne: "Not at all",
                  sLableTwo: "Very Much",
                },
              ]}
            />
            <SliderCard
              img={heart}
              title="How much distress you are experiencing in the past few days, including today."
              desc="Distress is an unpleasant experience of a mental, physical, social or spiritual nature. It can affect the way you think, feel, or act. Distress may make it harder to cope with a severe illness, its symptoms, or its treatment."
              options={[
                {
                  sLableOne: "No distress",
                  sLableTwo: "No distress",
                },
              ]}
            />
            <SliderCard
              img={sunset}
              title="What was the level of pain you experienced in last 24 hours?"
              desc="On a scale from no pain at all to the worst pain you can imagine please select"
              options={[
                {
                  sLableOne: "No distress",
                  sLableTwo: "Worst pain",
                },
                {
                  quetion: "How about 2 weeks ago?",
                  sLableOne: "No distress",
                  sLableTwo: "Worst pain",
                },
              ]}
            />
            <SliderCard
              img={stars}
              title="Do you feel any difficulties falling asleep, or staying asleep?"
              desc="On a scale from not at all to constantly please select"
              options={[
                {
                  sLableOne: "Not at all",
                  sLableTwo: "Constantly",
                },
                {
                  quetion: "How about 2 weeks ago?",
                  sLableOne: "Not at all",
                  sLableTwo: "Constantly",
                },
              ]}
            />

            <SliderCard
              img={bird}
              title="Are you experiencing concerns regarding any of your significant relationships?"
              desc="On a scale from not at all to constantly please select"
              options={[
                {
                  sLableOne: "Not at all",
                  sLableTwo: "Constantly",
                },
                {
                  quetion: "How about 2 weeks ago?",
                  sLableOne: "Not at all",
                  sLableTwo: "Constantly",
                },
              ]}
            />
            <SliderCard
              img={prop}
              title="Are you experiencing concerns regarding any “practical” element of your life? (taking care of yourself/others, finances, work)"
              desc="On a scale from not at all to constantly please select"
              options={[
                {
                  sLableOne: "Not at all",
                  sLableTwo: "Constantly",
                },
                {
                  quetion: "How about 2 weeks ago?",
                  sLableOne: "Not at all",
                  sLableTwo: "Constantly",
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

export default Range;
