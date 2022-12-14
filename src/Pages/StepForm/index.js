import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppModal from "../../Components/AppModal";
import AppButton from "../../Components/Button";
import { SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import Steps from "../../Components/Steps";
import right from "../../Assets/images/right.svg";
import { asyncCreateBasic } from "../../store/actions/basic";
import {
  basicStateKeys,
  setBasicInfoState,
} from "../../store/reducers/basicInfo";
import {
  allStateSelector,
  basicDoneSelector,
} from "../../store/selectors/basicInfo";
import styles from "./style.module.scss";
const LoveOne = "A loved one";
const QA = () => {
  const [modalShow, setModalShow] = React.useState();
  const basicDone = useSelector(basicDoneSelector);
  const basicState = useSelector(allStateSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(basicDone);
  if (basicDone) {
    // navigate("/");
  }
  const current_page = basicState.current_page;
  const questionKey = basicStateKeys[current_page];
  const currentData = basicState[questionKey];
  const submitForm = useCallback(async () => {
    // console.log("submit form", basicState)
    let { success } = await dispatch(asyncCreateBasic()).unwrap();
    if (success) {
      console.log("success");
      return navigate("/stepEnd");
    }
    alert("error");
  }, [dispatch, navigate]);
  const nextPage = useCallback(
    (value) => {
      if (value === LoveOne) {
        return setModalShow(true);
      }
      const isLast = current_page === basicStateKeys.length - 1;
      window.scrollTo(0, 0);
      dispatch(
        setBasicInfoState({
          current_page: isLast ? current_page : current_page + 1,
          [questionKey]: value,
        })
      );
      if (isLast)
        //navigate("/stepEnd");
        submitForm();
      // if (isLast) setTimeout(submitForm, 300);
    },
    [current_page, questionKey, dispatch, submitForm]
  );
  const prevPage = useCallback(() => {
    if (current_page === 0) return;
    dispatch(
      setBasicInfoState({
        current_page: current_page - 1,
      })
    );
  }, [current_page, dispatch]);
  const goNext = useCallback(() => {
    dispatch(
      setBasicInfoState({
        current_page: current_page + 1,
      })
    );
  }, [current_page, dispatch]);
  return (
    <div className={styles.qa}>
      <AppHeader back onClickBack={prevPage} />
      <div className={styles.banner} />
      <Row className={styles.row}>
        <Col xs={12} md={8} lg={6} xl={4} className={styles.grid}>
          {current_page === 0 && (
            <Steps
              lable="1"
              onClick={nextPage}
              title="Who is facing this challenge?"
              desc="If you are here it is most likely because you, or someone you love, has a life-threatening illness."
              options={["Me", LoveOne]}
              data={currentData}
            />
          )}
          {current_page === 1 && (
            <Steps
              lable="2"
              title="How old are you?"
              options={["Under 45", "46-55", "56-65", "65-75", "75+"]}
              onClick={nextPage}
              data={currentData}
            />
          )}
          {current_page === 2 && (
            <Steps
              lable="3"
              title="What is your gender?"
              options={["Male", "Female"]}
              onClick={nextPage}
              data={currentData}
            />
          )}
          {current_page === 3 && (
            <Steps
              lable="4"
              title="What were you diagnosed with?"
              options={[
                "Cancer",
                "Heart disease",
                "Dementia",
                "Something else",
              ]}
              onClick={nextPage}
              data={currentData}
            />
          )}
          {current_page === 4 && (
            <>
              <p className={styles.lable}>
                5/<span>6</span>
              </p>
              <SliderCard
                title="To what extent do you feel that you understand the meaning and implications of your diagnosis?"
                // desc="On a scale from not at all to constantly please select"
                options={[
                  {
                    id: "diagnosis",
                    sLableOne: "I don't understand at all",
                    sLableTwo: "I understand fully",
                  },
                ]}
                onChange={(obj) => {
                  dispatch(setBasicInfoState({ ...obj }));
                }}
                data={basicState}
              />
            </>
          )}
          {current_page === 4 && (
            <Row className={styles.btnRow}>
              <AppButton
                className={styles.btn}
                src={right}
                imgWidth="10px"
                imgMargin="0"
                onClick={goNext}
              />
            </Row>
          )}
          {current_page === 5 && (
            <Steps
              lable="6"
              title="How would you like to communicate with us?"
              desc="We can communicate in different ways. If using our system right now is not for you, in the future we will have other ways for you to get advice from our experts."
              options={[
                "Continuing with this text-based approach",
                "Speaking with a real person over the phone",
                "Speaking with a real person over chat/SMS",
              ]}
              onClick={nextPage}
              data={currentData}
            />
          )}
        </Col>
      </Row>

      <AppModal show={modalShow} onHide={() => setModalShow(false)}>
        <h4 className="title24">Thank You</h4>
        <p className="desc">
          For the rest of your journey with us, please answer as if
          <span className="desc18b"> you are </span> your loved one facing the
          complex medical diagnosis.
        </p>
        <AppButton
          title="OK"
          width="100px"
          borderRadius="5px "
          onClick={() => {
            setModalShow(false);
            dispatch(
              setBasicInfoState({
                current_page: current_page + 1,
                [questionKey]: LoveOne,
              })
            );
          }}
          // onClick={onClickOk}
        />
      </AppModal>
    </div>
  );
};

export default withLoader(QA);
