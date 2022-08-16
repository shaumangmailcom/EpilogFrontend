import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import styles from "./style.module.scss";

function TypeOfPerson() {
  const navigate = useNavigate();
  const {
    think_large_decision: one,
    want_to_think_large_decision: two,
    general_feel: three,
    your_health: four,
    health_decisions: five,
  } = useSelector((state) => state.wishes);
  console.log(one, two ,three, four, five,one > 6 && one <= two && three > 6 && four >= three && five < 5);
  let desc =
    "Based on your responses, our experts believe this may not be the right time for you to fill in your wishes for medical care, yet. If you still wish to move forward to the next step and see what our experts would recommend";
  if (one > 6 && one <= two && three > 6 && four >= three && five < 5) {
    desc =
      "Based on your responses, our experts believe you are ready to move forward to the next step and fill in your wishes for medical care.";
  } else if (one > 4 && three > 4 && four >= three && five < 5) {
    desc =
      "Based on your responses, our experts believe you are fully capable of filling in your wishes for medical care, though this may not be the right time. If you still wish to move forward to the next step and see what our experts would recommend";
  } else if (one > 3 && three > 3 && five > 4) {
    desc =
      "Based on your responses, our experts believe you are capable of filling in your wishes for medical care, though you may feel that it would be helpful to have someone you love around. If you still wish to move forward to the next step and see what our experts would recommend";
  }
  return (
    <div className={styles.medical}>
      <AppHeader back onClickBack={() => navigate("/wishes")} />
      <div className={styles.header}>
        <p>Wishes for medical care</p>
        <img src={journeyImg2} />
      </div>

      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8}>
            <div className={styles.textSec} style={{ width: "100%" }}>
              <p className="title24" style={{ textAlign: "center" }}>
                {desc}
              </p>
            </div>
          </Col>
          <Row className={styles.wBtnRow}>
            <Col xs={12}>
              <AppButton
                hrefLink="/wishes-end"
                title="CLICK HERE"
                className={styles.tsBtn}
                fontSize="15px"
              />
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default withLoader(TypeOfPerson);
