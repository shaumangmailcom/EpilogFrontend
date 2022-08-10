import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import {SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { setShareState, shareStateKeys } from "../../store/reducers/share";
import {
  allStateSelector,
  shareDoneSelector,
} from "../../store/selectors/share";
import styles from "./style.module.scss";

const ShairComplex = () => {
    const shareDone = useSelector(shareDoneSelector);
    const shareState = useSelector(allStateSelector); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (shareDone) {
      // navigate("/");
    }
    const current_page = shareState.current_page;

  return (
    <div className={styles.match}>
      <AppHeader back onClickBack={() => navigate("/share-end")} />
      <div className={styles.header}>
        <p>Wishes for medical care</p>
        <img src={journeyImg2} />
      </div>
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <SliderCard
              options={[
                {
                  id: "complex_situation",
                  quetion:
                    "If you were in a complex medical situation, to what extent do you feel that, now, after reflecting on your sharing style, that you understand your sharing preferences?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "shairing_preferences",
                  quetion:
                    "If you were in a complex medical situation, to what extent do you feel that, now, after reflecting on your sharing style, that you are confident in your sharing preferences?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "face_to_face",
                  quetion:
                    "If you were in a complex medical situation, to what extent do you feel that you would share about your situation with friends and family face to face?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "family_digitally",
                  quetion:
                    "If you were in a complex medical situation, to what extent do you feel that you would share about your situation with friends and family digitally?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "shairing_recommendations",
                  quetion:
                    "If you were in a complex medical situation, to what extent would you act according to the system’s sharing recommendations?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "captured",
                  quetion:
                    "To what extent do you feel that our experts correctly captured your sharing preferences?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
              ]}
              onChange={(obj) => {
                dispatch(setShareState({ ...obj }));
              }}
              data={shareState}
            />
          </Col>
        </Row>
        <Row className={styles.btnRow}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <AppButton
              className={styles.btn}
              src={right}
              imgWidth="10px"
              imgMargin="0"
              hrefLink=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ShairComplex;
