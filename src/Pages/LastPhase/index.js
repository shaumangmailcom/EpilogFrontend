import React, { useCallback } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { Indicator } from "../../Components/SmallComponents";
import styles from "./style.module.scss";
import cup from "../../Assets/images/cup.svg";
import heart from "../../Assets/images/heart.svg";
import sunset from "../../Assets/images/sunset.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";

const LastPhase = () => {
  return (
    <div className={styles.phase}>
      <AppHeader back />
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5} className={styles.grid}>
            <div>
              {/* <Indicator active={current_page} items={moreStateKeys.length} className={styles.indi} /> */}

              <SliderCard
                desc="When the system is ready, there will be many journeys that will be offered to people who are facing complex medical situations. These journeys will be offered at the right time and based on both personality and preferences. These journeys will cover a range of topics from what information to share with whom, to how to deal with stress, to how to get more out of conversations with doctors."
                options={[
                  {
                    quetion:
                      "When our system is fully ready: To what extent would you recommend using it to others?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    quetion:
                      "If you were in a complex medical situation: To what extent would you want to use our system?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    quetion:
                      "To what extent would you be willing to pay a modest fee to use this system?    ",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                ]}
              />

              <SliderCard
                desc="If you were in a complex medical situation when our system is fully ready, to what extent would you find each of the following journeys useful:"
                options={[
                  {
                    quetion: "Dealing with fear of death",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Decreasing fear of death",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Accepting our human limits",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Finding purpose and meaning",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Understanding my care goals",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "My wishes for medical care",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Improving important relationships",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Learning a new skill",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Sharing medical information with others",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Leaving a legacy",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Creating a personalized Will",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Setting my home environment the right way",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Eating better",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Dealing better with stress",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Figuring out my finances",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Experience bucket list",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Finding my best distraction",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Figuring out my best exercise",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Managing my pain",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Managing other symptoms",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Staying away from hospital",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                  {
                    quetion: "Getting the best out of doctors’ appointment",
                    sLableOne: "Not helpful at all",
                    sLableTwo: "Very helpful",
                  },
                ]}
              />
              <div className={styles.sec3}>
                <p className="desc" style={{ textAlign: "center" }}>
                  Imagine that you are in a complex medical situation and you
                  got a link to our system from each of the following entities.
                  Please indicate how likely are you to follow the link if it
                  came from each of them:
                </p>
                <div className={styles.fillSec}>
                  If I got a link for this system from
                  <Form className="iForm">
                    <Form.Control type="text" placeholder="" />
                  </Form>
                  the likelihood that I would follow the link and start using it
                  are:
                </div>
                <SliderCard
                  options={[
                    {
                      quetion: "My primary care physician",
                      sLableOne: "Not at all",
                      sLableTwo: "Very Much",
                    },
                    {
                      quetion:
                        "A specialist doctor (oncologist, cardiologist, else)",
                      sLableOne: "Not at all",
                      sLableTwo: "Very Much",
                    },
                    {
                      quetion: "My health plan",
                      sLableOne: "Not at all",
                      sLableTwo: "Very Much",
                    },
                    {
                      quetion:
                        "A nurse att the hospital or a SNF (skilled nursing facility)",
                      sLableOne: "Not at all",
                      sLableTwo: "Very Much",
                    },
                    {
                      quetion: "A family member",
                      sLableOne: "Not at all",
                      sLableTwo: "Very Much",
                    },
                    {
                      quetion: "Finding it following a web search",
                      sLableOne: "Not at all",
                      sLableTwo: "Very Much",
                    },
                  ]}
                />
                <p className="desc">
                  You've reached the end of our trial system. As a gratitude for
                  your participattion, we would like to offer you a ticket to a
                  lottery for a $300 Amazon gift card.
                </p>
                <p className="desc">
                  if you are interested in participating, please leave your
                  email below. We will only use it to let you know if you have
                  won the gift card, and also let you know when our system is
                  ready.
                </p>
                <div className={styles.fillSec}>
                  Email:
                  <Form className="iForm">
                    <Form.Control type="text" placeholder="" />
                  </Form>
                </div>
                <AppButton title="Submit" className={styles.submitBtn} fontSize="15px" />
                <p className="desc18b">Thank you for participating!</p>
              </div>
            </div>
            <Row className={styles.btnRow}>
              <AppButton
                className={styles.btn}
                src={right}
                imgWidth="10px"
                imgMargin="0"
                // onClick={nextPage}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LastPhase;
