import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";

function TypeOfPerson() {
  const navigate = useNavigate();
  return (
    <div className={styles.medical}>
      <AppHeader back onClickBack={() => navigate("/journey")} />
      <div className={styles.header}>
        <p>Wishes for medical care</p>
        <img src={journeyImg2} />
      </div>

      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8}>
            <div className={styles.textSec} style={{width:'100%'}} >
              <p className="title24" style={{ textAlign: "center"  }}>
              Based on your responses, our experts believe you are ready to move forward to the next step and fill in your wishes for medical care.{" "}
              </p>
             
            </div>
          </Col>
          <Row className={styles.wBtnRow}>
              <Col xs={12}>
                <AppButton
                  hrefLink="/wishes"
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

export default TypeOfPerson;
