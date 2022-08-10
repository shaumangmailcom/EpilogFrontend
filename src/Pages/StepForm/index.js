import React, { useCallback,useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppModal from "../../Components/AppModal";
import AppHeader from "../../Components/Header";
import Steps from "../../Components/Steps";
import {
  basicStateKeys,
  setBasicInfoState,
} from "../../store/reducers/basicInfo";
import {
  allStateSelector,
  basicDoneSelector,
} from "../../store/selectors/basicInfo";
import styles from "./style.module.scss";

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
  const submitForm = useCallback(() => {
    console.log("submit form", basicState);
  }, [basicState]);
  const nextPage = useCallback(
    (value) => {
      const isLast = current_page === basicStateKeys.length - 1;
      dispatch(
        setBasicInfoState({
          current_page: isLast ? current_page : current_page + 1,
          [questionKey]: value,
        })
      );
      if (isLast) navigate("/stepEnd");
      // if (isLast) setTimeout(submitForm, 300);
    },
    [current_page, questionKey, dispatch, navigate]
  );
  const prevPage = useCallback(() => {
    if (current_page === 0) return;
    dispatch(
      setBasicInfoState({
        current_page: current_page - 1,
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
              options={["Me", "A loved one"]}
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
            <Steps
              lable="5"
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
      <Button onClick={() => setModalShow(true)}>
        Modal Open
      </Button>
      <AppModal show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
  );
};

export default QA;
