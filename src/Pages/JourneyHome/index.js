import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import journeyImg1 from "../../Assets/images/journey1.svg";
import journeyImg2 from "../../Assets/images/journey2.svg";
import docImg from "../../Assets/images/doc.svg";
import parashoot from "../../Assets/images/parashoot.svg";
import { StepCard, JourneyCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import styles from "./style.module.scss";

function JourneyHome() {
  const navigate = useNavigate();
  return (
    <div className={styles.jounrey}>
      <AppHeader back onClickBack={() => navigate("/thankyou")} />
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={10} lg={8} xl={6} className={styles.grid}>
            <h3>Your suggested journeys</h3>
            <p>
              The system, based on your information, and the journeys that are
              currently available, has picked for you these journeys
            </p>
          </Col>
        </Row>
        <Row className={styles.crdRow}>
          <Col xs={12} md={6} xl={4}>
            <JourneyCard
              title="Sharing with family and friends"
              src={journeyImg1}
              onClick={() => navigate("/share-start")}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <JourneyCard
              title="Wishes for medical care"
              src={journeyImg2}
              onClick={() => navigate("/wishes-start")}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <JourneyCard
              title="Conversation with my doctor"
              src={docImg}
              onClick={() => navigate("/doctor")}
            />
          </Col>
        </Row>
        <Row className={styles.jBox}>
          <Col xs={12} md={10} lg={8} xl={6}>
            <div className={styles.parashootBox}>
              <img src={parashoot} alt="" />
              <p className={styles.dtl}>
                In the near future, there will be many journeys that will be
                offered to you, at the right time and based on your personality
                and preferences.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default withLoader(JourneyHome);
