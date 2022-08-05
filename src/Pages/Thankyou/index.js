import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import right from "../../Assets/images/right.svg";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  return (
    <div className={styles.thankyou}>
      <AppHeader back onClickBack={() => navigate("/range")} />
      <div className={styles.banner} />
      <Row className={styles.row}>
        <Col xs={8} className={styles.grid}>
          <h3>Thank you</h3>
          <p>
            Now we know you a little better. Next, our system will examine many
            potential journeys that could help you at this point.
          </p>
        </Col>
        <Col xs={8}>
          <AppButton
            hrefLink="/journey"
            title="Explore my journeys"
            src={right}
            minWidth="118px"
          />
        </Col>
      </Row>
    </div>
  );
}
