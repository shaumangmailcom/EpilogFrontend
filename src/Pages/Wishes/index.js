import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import { CheckBox, CheckCard, SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import { Indicator } from "../../Components/SmallComponents";
import Steps from "../../Components/Steps";
import { setWishesState, wishesStateKeys } from "../../store/reducers/wishes";
import {
  allStateSelector,
  q13State,
  q14State,
  wishesAvgSelector,
  wishesDoneSelector,
} from "../../store/selectors/wishes";
import styles from "./style.module.scss";

const Wishes = () => {
  const wishesDone = useSelector(wishesDoneSelector);
  const wishesState = useSelector(allStateSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (wishesDone) {
    // navigate("/");
  }
  const current_page = wishesState.current_page;

  const nextPage = useCallback(() => {
    const isLast = current_page === wishesStateKeys.length - 1;
    if (
      (current_page === 4 && !wishesState.goals_of_care) ||
      (current_page === 5 && !wishesState.take_treatment)
    )
      return alert("Kindly Select any one of the options");
    if (isLast) return navigate("/wishes-person");
    window.scrollTo(0, 0);
    dispatch(
      setWishesState({
        current_page: isLast ? current_page : current_page + 1,
      })
    );
    console.log("isLast", isLast);
    // if (isLast) setTimeout(submitForm, 300);
  }, [current_page, dispatch, navigate, wishesState]);
  const prevPage = useCallback(() => {
    if (current_page === 0) return navigate("/wishes-start");
    dispatch(
      setWishesState({
        current_page: current_page - 1,
      })
    );
  }, [current_page, dispatch, navigate]);

  return (
    <div className={styles.medical}>
      <AppHeader back onClickBack={prevPage} />
      <div className={styles.header}>
        <p>Wishes for medical care</p>
        <img src={journeyImg2} />
      </div>
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <Indicator active={current_page} items={wishesStateKeys.length} />
            {current_page === 0 && (
              <SliderCard
                options={[
                  {
                    id: "think_large_decision",
                    question:
                      "Do you think rationally or emotionally about your large decisions?",
                    sLableOne: "Mostly rationally",
                    sLableTwo: "Mostly emotionally",
                  },
                  {
                    id: "want_to_think_large_decision",
                    question: (
                      <span>
                        Do you<span className="ubuntu700"> want</span> to think
                        rationally or emotionally about your large decisions?
                      </span>
                    ),
                    sLableOne: "Mostly rationally",
                    sLableTwo: "Mostly emotionally",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setWishesState({ ...obj }));
                }}
                data={wishesState}
              />
            )}
            {current_page === 1 && (
              <SliderCard
                onChange={(obj) => {
                  dispatch(setWishesState({ ...obj }));
                }}
                data={wishesState}
                options={[
                  {
                    id: "general_feel",
                    question:
                      "To what extent is it important for you to feel in control in general?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "your_health",
                    question:
                      "To what extent is it important for you to feel in control when it comes to your health?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "health_decisions",
                    question:
                      "To what extent are you willing to trust others to make health decisions for you?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                ]}
              />
            )}
            {current_page === 2 && (
              <SliderCard
                onChange={(obj) => {
                  dispatch(setWishesState({ ...obj }));
                }}
                data={wishesState}
                options={[
                  {
                    id: "patient_experience",
                    question:
                      "Do you have much experience as a patient in hospital?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "being_hospitalized",
                    question:
                      "To what extent will your quality of life be impacted by being hospitalized?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "visit_experience",
                    question:
                      "Do you have much experience as a visitor of a loved one in hospital?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "life_quality",
                    question:
                      "To what extent has your quality of life impacted by visiting a loved one in hospital?",
                    validateKey: "visit_experience",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                ]}
              />
            )}
            {current_page === 3 && (
              <SliderCard
                onChange={(obj) => {
                  dispatch(setWishesState({ ...obj }));
                }}
                data={wishesState}
                options={[
                  {
                    id: "suffering_pain",
                    question:
                      "Relative to other people how much do you suffer from pain?",
                    sLableOne: "Less than others",
                    sLableTwo: "More than others",
                  },
                  {
                    id: "moral_belief",
                    question:
                      "Do you have any moral or religious beliefs that would get you to hold onto life at all cost?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "living_yourself",
                    question:
                      "To what degree do you feel that you are living for yourself vs for other people?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                ]}
              />
            )}
            {current_page === 4 && (
              <Steps
                onClick={(goals_of_care) => {
                  dispatch(setWishesState({ goals_of_care }));
                }}
                data={wishesState.goals_of_care}
                title="Imagine someone you love has a terminal illness. Doctors estimate they have less than 6 months to live. Which of the following goals of care would you recommend?"
                options={[
                  "Emphasis on prolonging life",
                  "Emphasis on comfort and minimizing suffering",
                ]}
              />
            )}
            {current_page === 5 && (
              <Steps
                onClick={(take_treatment) => {
                  dispatch(setWishesState({ take_treatment }));
                }}
                data={wishesState.take_treatment}
                title="Imagine someone you love has a terminal illness. Doctors estimate they have less than 6 months to live. There is a new treatment that has low probability to prolong life by up to 6 months but has a high probability for impairing your loved one???s quality of life dramatically. Would you recommend your loved one to take the treatment?"
                options={["Yes", "No", "I cannot answer that"]}
              />
            )}
          </Col>
        </Row>
        <Row className={styles.btnRow}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <AppButton
              className={styles.btn}
              src={right}
              imgWidth="10px"
              imgMargin="0"
              onClick={nextPage}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withLoader(Wishes);
