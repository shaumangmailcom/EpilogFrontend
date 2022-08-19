import React, { useCallback } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import right from "../../Assets/images/right.svg";
import journeyImg1 from "../../Assets/images/c1.svg";
import journeyImg2 from "../../Assets/images/journey2.svg";
import AppButton from "../../Components/Button";
import { SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import { Indicator } from "../../Components/SmallComponents";
import { asyncCreateFeedback } from "../../store/actions/feedback";
import {
  feedbackStateKeys,
  setFeedbackState
} from "../../store/reducers/feedback";
import styles from "./style.module.scss";
import { auto } from "@popperjs/core";

const LastPhase = props => {
  // const shareDone = useSelector();
  const feedbackState = useSelector(state => state.feedback);
  const latestTry = useSelector(state => state.user.latestTry);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const current_page = feedbackState.current_page;

  const submitForm = useCallback(async () => {
    let { success } = await dispatch(asyncCreateFeedback()).unwrap();
    if (success) {
      console.log("success");
      return navigate("/");
    }
    alert("error");
  }, [dispatch, navigate]);
  const nextPage = useCallback(() => {
    dispatch(
      setFeedbackState({
        current_page: current_page + 1
      })
    );
    // if (isLast) setTimeout(submitForm, 300);
  }, [current_page, dispatch]);
  console.log("isLast", location, props);

  const prevPage = useCallback(() => {
    if (current_page === 0) return navigate(-1);
    dispatch(
      setFeedbackState({
        current_page: current_page - 1
      })
    );
  }, [current_page, dispatch, navigate]);
  return (
    <div className={styles.phase}>
      <AppHeader back onClickBack={prevPage} />
      {latestTry.wishes == "null" ? (
        <div className={styles.header}>
          <p>Sharing with family and friends</p>
          <img src={journeyImg1} />
        </div>
      ) : (
        <div className={styles.header}>
          <p>Sharing with family and friends</p>
          <img src={journeyImg2} />
        </div>
      )}
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5} className={styles.grid}>
            <div>
              <Indicator
                active={current_page}
                items={feedbackStateKeys.length}
                className={styles.indi}
              />
              {current_page === 0 && (
                <SliderCard
                  desc="When the system is ready, there will be many journeys that will be offered to people who are facing complex medical situations. These journeys will be offered at the right time and based on both personality and preferences. These journeys will cover a range of topics from what information to share with whom, to how to deal with stress, to how to get more out of conversations with doctors."
                  options={[
                    {
                      id: "using_to_others",
                      question:
                        "When our system is fully ready: To what extent would you recommend using it to others?",
                      sLableOne: "Not at all",
                      sLableTwo: "Very much"
                    },
                    {
                      id: "use_our_system",
                      question:
                        "If you were in a complex medical situation: To what extent would you want to use our system?",
                      sLableOne: "Not at all",
                      sLableTwo: "Very much"
                    },
                    {
                      id: "modest_fee",
                      question:
                        "To what extent would you be willing to pay a modest fee to use this system?    ",
                      sLableOne: "Not at all",
                      sLableTwo: "Very much"
                    }
                  ]}
                  onChange={obj => {
                    dispatch(setFeedbackState({ ...obj }));
                  }}
                  data={feedbackState}
                />
              )}
              {current_page === 1 && (
                <SliderCard
                  desc="If you were in a complex medical situation when our system is fully ready, to what extent would you find each of the following journeys useful:"
                  options={[
                    {
                      id: "dealing_with_fear",
                      question: "Dealing with fear of death",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "decreasing_fear",
                      question: "Decreasing fear of death",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "human_limits",
                      question: "Accepting our human limits",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "purpose_meaning",
                      question: "Finding purpose and meaning",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "care_goals",
                      question: "Understanding my care goals",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "medical_care",
                      question: "My wishes for medical care",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "important_relationships",
                      question: "Improving important relationships",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "new_skill",
                      question: "Learning a new skill",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "medical_information",
                      question: "Sharing medical information with others",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "leaving_legacy",
                      question: "Leaving a legacy",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "personalized_will",
                      question: "Creating a personalized Will",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "home_environment",
                      question: "Setting my home environment the right way",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "eating_better",
                      question: "Eating better",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "dealing_with_stress",
                      question: "Dealing better with stress",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "my_finances",
                      question: "Figuring out my finances",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "bucket_list",
                      question: "Experience bucket list",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "best_distraction",
                      question: "Finding my best distraction",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "best_exercise",
                      question: "Figuring out my best exercise",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "my_pain",
                      question: "Managing my pain",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "other_symptoms",
                      question: "Managing other symptoms",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "hospital",
                      question: "Staying away from hospital",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    },
                    {
                      id: "appointment",
                      question: "Getting the best out of doctors’ appointment",
                      sLableOne: "Not helpful at all",
                      sLableTwo: "Very helpful"
                    }
                  ]}
                  onChange={obj => {
                    dispatch(setFeedbackState({ ...obj }));
                  }}
                  data={feedbackState}
                />
              )}
              {current_page === 2 && (
                <div className={styles.sec3}>
                  <p className="desc" style={{ textAlign: "center" }}>
                    Imagine that you are in a complex medical situation and you
                    got a link to our system from each of the following
                    entities. Please indicate how likely are you to follow the
                    link if it came from each of them:
                  </p>
                  <div className={styles.fillSec}>
                    <span>If I got a link for this system from</span>
                    <div className="iForm">
                      <Form.Control
                        onChange={({ target: { value: link_for_system } }) =>
                          dispatch(setFeedbackState({ link_for_system }))
                        }
                        value={feedbackState.link_for_system}
                        type="url"
                        placeholder=""
                      />
                    </div>
                    <span>
                      the likelihood that I would follow the link and start
                      using it are:
                    </span>
                  </div>
                  <SliderCard
                    options={[
                      {
                        id: "care_physician",
                        question: "My primary care physician",
                        sLableOne: "Not at all",
                        sLableTwo: "Very Much"
                      },
                      {
                        id: "specialist_doctor",
                        question:
                          "A specialist doctor (oncologist, cardiologist, else)",
                        sLableOne: "Not at all",
                        sLableTwo: "Very Much"
                      },
                      {
                        id: "health_plan",
                        question: "My health plan",
                        sLableOne: "Not at all",
                        sLableTwo: "Very Much"
                      },
                      {
                        id: "SNF",
                        question:
                          "A nurse att the hospital or a SNF (skilled nursing facility)",
                        sLableOne: "Not at all",
                        sLableTwo: "Very Much"
                      },
                      {
                        id: "family_member",
                        question: "A family member",
                        sLableOne: "Not at all",
                        sLableTwo: "Very Much"
                      },
                      {
                        id: "web_search",
                        question: "Finding it following a web search",
                        sLableOne: "Not at all",
                        sLableTwo: "Very Much"
                      }
                    ]}
                    onChange={obj => {
                      dispatch(setFeedbackState({ ...obj }));
                    }}
                    data={feedbackState}
                  />
                  <p className="desc">
                    You've reached the end of our trial system. As a gratitude
                    for your participattion, we would like to offer you a ticket
                    to a lottery for a{" "}
                    <span className="desc18b"> $300 Amazon gift card</span>.
                  </p>
                  <p className="desc">
                    if you are interested in participating, please leave your
                    email below. We will only use it to let you know if you have
                    won the gift card, and also let you know when our system is
                    ready.
                  </p>
                  <div className={styles.fillSec}>
                    Email:
                    <div className="iForm">
                      <Form.Control
                        onChange={({ target: { value: email } }) =>
                          dispatch(setFeedbackState({ email }))
                        }
                        value={feedbackState.email}
                        type="email"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <AppButton
                    title="Submit"
                    className={styles.submitBtn}
                    fontSize="15px"
                    onClick={submitForm}
                    boxMargin="auto"
                  />
                  <div className={styles.cancelAmazonCard}>
                  <AppButton
                    title="Don't want amazon gift"
                    width="200px"
                    className={styles.submitBtn}
                    fontSize="15px"
                    onClick={submitForm}
                    boxMargin="auto"
                    backgroundColor="lightgray"
                    color="#000"
                  />
                    {/* <div class="form-group">
                      <input
                        type="checkbox"
                        // class="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                      />
                      <label for="">Don't want checkBox</label>
                      {/* <small id="helpId" class="form-text text-muted">
                        Help text
                      </small> */}
                    {/* </div> */}

                  </div>
                  <p className="desc18b" style={{ textAlign: "center" }}>
                    Thank you for participating!
                  </p>
                </div>
              )}
            </div>
            <Row className={styles.btnRow}>
              {current_page < 2 && (
                <AppButton
                  className={styles.btn}
                  src={right}
                  imgWidth="10px"
                  imgMargin="0"
                  onClick={nextPage}
                />
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withLoader(LastPhase);
