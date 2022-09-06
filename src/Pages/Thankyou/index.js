import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import right from "../../Assets/images/right.svg";
import { useNavigate } from "react-router-dom";
import { withLoader } from "../../Components/Loader";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.thankyou}>
      <AppHeader back onClickBack={() => navigate("/range")} />
      <div className={styles.banner} />
      <Row className={styles.row}>
        <Col xs={12} md={10} lg={8} xl={6} className={styles.grid}>
          <h3>Thank you</h3>
          <p className={styles.desc}>
            Now we know you a little better. Next, our system will examine many
            potential journeys that could help you at this point.
          </p>
          <AppButton
            hrefLink="/journey"
            title="Explore my journeys"
            fontSize="15px"
            className={styles.tBtn}
            boxMargin="auto"
          />
        </Col>
      </Row>
    </div>
  );
};

export default withLoader(ThankYou);
