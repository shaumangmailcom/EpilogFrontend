import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import c1 from "../../Assets/images/c1.svg";
import right from "../../Assets/images/right.svg";
import AppModal from "../../Components/AppModal";
import AppButton from "../../Components/Button";
import { SliderCard, StepCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { Indicator } from "../../Components/SmallComponents";
import Steps from "../../Components/Steps";
import { setShareState, shareStateKeys } from "../../store/reducers/share";
import {
  allStateSelector,
  shareDoneSelector,
  sumOfAllSelector,
} from "../../store/selectors/share";
import styles from "./style.module.scss";

const ShareModule = () => {
  const [modalShow, setModalShow] = React.useState();
  const shareDone = useSelector(shareDoneSelector);
  const shareState = useSelector(allStateSelector);
  const { sum } = useSelector(sumOfAllSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (shareDone) {
    // navigate("/");
  }
  console.log(sum);
  const current_page = shareState.current_page;

  const submitForm = useCallback(() => {
    console.log("submit form", shareState);
  }, [shareState]);
  const nextPage = useCallback(() => {
    const isLast = current_page === shareStateKeys.length - 1;
    if (isLast) {
      if (sum < 20) return setModalShow(true);
      return navigate("/share-thank");
    }
    dispatch(
      setShareState({
        current_page: isLast ? current_page : current_page + 1,
      })
    );
    console.log("isLast", isLast);
    // if (isLast) setTimeout(submitForm, 300);
  }, [current_page, dispatch, navigate, sum]);
  const prevPage = useCallback(() => {
    if (current_page === 0) return navigate("/share-start");
    dispatch(
      setShareState({
        current_page: current_page - 1,
      })
    );
  }, [current_page, dispatch, navigate]);
  return (
    <div className={styles.match}>
      <AppHeader back onClickBack={prevPage} />
      <div className={styles.header}>
        <p>Sharing with family and friends</p>
        <img src={c1} />
      </div>
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <Indicator active={current_page} items={shareStateKeys.length} />
            {current_page === 0 && (
              <SliderCard
                title="In general, how freely do you share your personal life with your close..."
                options={[
                  {
                    id: "family",
                    lable: "Family",
                    sLableOne: "Not Very",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "friends",
                    lable: "Friends",
                    sLableOne: "Not Very",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "co_workers",
                    lable: "Co-workers",
                    sLableOne: "Not Very",
                    sLableTwo: "Very much",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setShareState({ ...obj }));
                }}
                data={shareState}
              />
            )}

            {current_page === 1 && (
              <SliderCard
                title="After sharing something personal, do you usually feel better or worse?"
                options={[
                  {
                    id: "usual_feeling",
                    sLableOne: "Worse",
                    sLableCenter: "No change",
                    sLableTwo: "Better",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setShareState({ ...obj }));
                }}
                data={shareState}
              />
            )}
            {current_page === 2 && (
              <Steps
                onClick={(personal_info) => {
                  dispatch(setShareState({ personal_info }));
                }}
                title="Do you feel more free to share personal information online or
                  in person?"
                options={["Online", "In person", "Doesn’t matter"]}
                data={shareState.personal_info}
              />
            )}
            {current_page === 3 && (
              <SliderCard
                title="To what degree do you want people who are close to you to feel your pain?"
                options={[
                  {
                    id: "feel_pain",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  // {
                  //   id: "empathize_your_pain",
                  //   quetion:
                  //     "To what degree do you want people to empathize with your pain?",
                  //   sLableOne: "Not at all",
                  //   sLableTwo: "Very much",
                  // },
                  {
                    id: "illness",
                    quetion:
                      "To what degree do you want people who are close to you to talk to you about your illness?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "illness_treatment",
                    quetion:
                      "To what degree do you really want to get advice about your illness and treatment from people who are close to you?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setShareState({ ...obj }));
                }}
                data={shareState}
              />
            )}
            {current_page === 4 && (
              <SliderCard
                options={[
                  {
                    id: "good_times_attention",
                    quetion:
                      "To what degree do you enjoy being the center of attention in good times?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                  {
                    id: "general_attention",
                    quetion:
                      "To what degree do you enjoy being the center of attention in general?",
                    sLableOne: "Not at all",
                    sLableTwo: "Very much",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setShareState({ ...obj }));
                }}
                data={shareState}
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
      <AppModal show={modalShow} onHide={() => setModalShow(false)}>
        <p className="desc">
          You did not answer all the questions, which limits our ability to give
          accurate recommendations.
        </p>
        <Row>
          <Col>
            <AppButton
              title="Let’s go back"
              width="150px"
              height="36px"
              borderRadius="50px "
              fontSize="15px"
              backgroundColor="lightgray"
              color="#000"
              onClick={() => {
                setModalShow(false);
                dispatch(
                  setShareState({
                    current_page: 0,
                  })
                );
              }}
            />
          </Col>
          <Col>
            <AppButton
              title="Fine by me"
              width="150px"
              height="36px"
              fontSize="15px"
              borderRadius="50px "
              onClick={() => {
                setModalShow(false);
                return navigate("/share-thank");
              }}
            />
          </Col>
        </Row>
      </AppModal>
    </div>
  );
};

export default ShareModule;
