import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import journeyImg1 from "../../Assets/images/c1.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import { SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import { asyncCreateShare } from "../../store/actions/share";
import { setShareState } from "../../store/reducers/share";
import { allStateSelector } from "../../store/selectors/share";
import styles from "./style.module.scss";

const ShareComplex = () => {
  const shareState = useSelector(allStateSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextPage = useCallback(async () => {
    let { success } = await dispatch(asyncCreateShare()).unwrap();
    if (success) {
      console.log("success");
      return navigate("/feedback");
    }
    alert("error");
    // if (isLast) setTimeout(submitForm, 300);
  }, [dispatch, navigate]);
  return (
    <div className={styles.match}>
      <AppHeader back onClickBack={() => navigate("/share-end")} />
      <div className={styles.header}>
        <p>Sharing with family and friends</p>
        <img src={journeyImg1} />
      </div>
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <SliderCard
              options={[
                {
                  id: "understand_sharing_preferences",
                  question:
                    "If you were in a complex medical situation, to what extent do you feel that, now, after reflecting on your sharing style, that you understand your sharing preferences?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much"
                },
                {
                  id: "confident_in_sharing_preferences",
                  question:
                    "If you were in a complex medical situation, to what extent do you feel that, now, after reflecting on your sharing style, that you are confident in your sharing preferences?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much"
                },
                {
                  id: "face_to_face_situation",
                  question:
                    "If you were in a complex medical situation, to what extent do you feel that you would share about your situation with friends and family face to face?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much"
                },
                {
                  id: "friends_family_digitally",
                  question:
                    "If you were in a complex medical situation, to what extent do you feel that you would share about your situation with friends and family digitally?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much"
                },
                {
                  id: "system_sharing_recommendations",
                  question:
                    "If you were in a complex medical situation, to what extent would you act according to the system’s sharing recommendations?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much"
                },
                {
                  id: "capture_sharing_preferences",
                  question:
                    "To what extent do you feel that our experts correctly captured your sharing preferences?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much"
                }
              ]}
              onChange={obj => {
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
              onClick={nextPage}
              // hrefLink="/feedback"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withLoader(ShareComplex);
