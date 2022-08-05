import React, { useCallback } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  allStateSelector,
  moreDoneSelector,
} from "../../store/selectors/moreInfo";
import { moreStateKeys, setMoreInfoState } from "../../store/reducers/moreInfo";

const Range = () => {
  const moreDone = useSelector(moreDoneSelector);
  const moreState = useSelector(allStateSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (moreDone) {
    // navigate("/");
  }
  const current_page = moreState.current_page;

  const submitForm = useCallback(() => {
    console.log("submit form", moreState);
  }, [moreState]);
  const nextPage = useCallback(() => {
    const isLast = current_page === moreStateKeys.length - 1;
    if (isLast) return navigate("/thankyou");
    dispatch(
      setMoreInfoState({
        current_page: isLast ? current_page : current_page + 1,
      })
    );
    console.log("isLast", isLast);
    // if (isLast) setTimeout(submitForm, 300);
  }, [current_page, dispatch, navigate]);
  const prevPage = useCallback(() => {
    if (current_page === 0) return navigate("/stepEnd");
    dispatch(
      setMoreInfoState({
        current_page: current_page - 1,
      })
    );
  }, [current_page, dispatch, navigate]);
  return (
    <div className={styles.range}>
      <AppHeader back onClickBack={prevPage} />
      <div className={styles.content}>
        <Indicator active={current_page} items={moreStateKeys.length} />
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4}>
            {current_page === 0 && (
              <SliderCard
                img={time}
                title="During a typical day, how much time do you spend on:"
                desc="Distress is an unpleasant experience of a mental, physical, social or spiritual nature. It can affect the way you think, feel, or act. Distress may make it harder to cope with a severe illness, its symptoms, or its treatment."
                options={[
                  {
                    id: "work",
                    lable: "work",
                    sLableOne: "Not Enough",
                    sLableTwo: "Too Much",
                  },
                  {
                    id: "friends_Family",
                    lable: "Friends & Family",
                    sLableOne: "Not Enough",
                    sLableTwo: "Too Much",
                  },
                  {
                    id: "health",
                    lable: "Health",
                    sLableOne: "Not Enough",
                    sLableTwo: "Too Much",
                  },
                  {
                    id: "other_activities",
                    lable: "Other meaningful activities",
                    sLableOne: "Not Enough",
                    sLableTwo: "Too Much",
                  },
                  {
                    id: "sleep",
                    lable: "Sleep",
                    sLableOne: "Not Enough",
                    sLableTwo: "Too Much",
                  },
                  {
                    id: "fun",
                    lable: "Having Fun",
                    sLableOne: "Not Enough",
                    sLableTwo: "Too Much",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setMoreInfoState({ ...obj }));
                }}
                data={moreState}
              />
            )}

            {current_page === 1 && (
              <SliderCard
                img={cup}
                title="When you wake up in the morning to what extent do you have something to look forward to?"
                options={[
                  {
                    id: "wake_up",
                    sLableOne: "Not at all",
                    sLableTwo: "Very Much",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setMoreInfoState({ ...obj }));
                }}
                data={moreState}
              />
            )}
            {current_page === 2 && (
              <SliderCard
                img={heart}
                title="How much distress you are experiencing in the past few days, including today."
                desc="Distress is an unpleasant experience of a mental, physical, social or spiritual nature. It can affect the way you think, feel, or act. Distress may make it harder to cope with a severe illness, its symptoms, or its treatment."
                options={[
                  {
                    id: "distress",
                    sLableOne: "No distress",
                    sLableTwo: "No distress",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setMoreInfoState({ ...obj }));
                }}
                data={moreState}
              />
            )}
            {current_page === 3 && (
              <SliderCard
                img={sunset}
                title="What was the level of pain you experienced in last 24 hours?"
                desc="On a scale from no pain at all to the worst pain you can imagine please select"
                options={[
                  {
                    id: "pain_level",
                    sLableOne: "No distress",
                    sLableTwo: "Worst pain",
                  },
                  {
                    id: "pain_level_week",
                    quetion: "How about 2 weeks ago?",
                    sLableOne: "No distress",
                    sLableTwo: "Worst pain",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setMoreInfoState({ ...obj }));
                }}
                data={moreState}
              />
            )}
            {current_page === 4 && (
              <SliderCard
                img={stars}
                title="Do you feel any difficulties falling asleep, or staying asleep?"
                desc="On a scale from not at all to constantly please select"
                options={[
                  {
                    id: "sleeping_deficulty",
                    sLableOne: "Not at all",
                    sLableTwo: "Constantly",
                  },
                  {
                    id: "sleeping_deficulty_week",
                    quetion: "How about 2 weeks ago?",
                    sLableOne: "Not at all",
                    sLableTwo: "Constantly",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setMoreInfoState({ ...obj }));
                }}
                data={moreState}
              />
            )}

            {current_page === 5 && (
              <SliderCard
                img={bird}
                title="Are you experiencing concerns regarding any of your significant relationships?"
                desc="On a scale from not at all to constantly please select"
                options={[
                  {
                    id: "relationship",
                    sLableOne: "Not at all",
                    sLableTwo: "Constantly",
                  },
                  {
                    id: "relationship_week",
                    quetion: "How about 2 weeks ago?",
                    sLableOne: "Not at all",
                    sLableTwo: "Constantly",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setMoreInfoState({ ...obj }));
                }}
                data={moreState}
              />
            )}
            {current_page === 6 && (
              <SliderCard
                img={prop}
                title="Are you experiencing concerns regarding any “practical” element of your life? (taking care of yourself/others, finances, work)"
                desc="On a scale from not at all to constantly please select"
                options={[
                  {
                    id: "practical_life",
                    sLableOne: "Not at all",
                    sLableTwo: "Constantly",
                  },
                  {
                    id: "practical_life_week",
                    quetion: "How about 2 weeks ago?",
                    sLableOne: "Not at all",
                    sLableTwo: "Constantly",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setMoreInfoState({ ...obj }));
                }}
                data={moreState}
              />
            )}
          </Col>
        </Row>
        <Row className={styles.btnRow}>
          <Col xs={12} md={8} lg={6} xl={4}>
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

export default Range;
