import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import styles from "./style.module.scss";

const WishesStart = () => {
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
          <Col xs={12} md={12} lg={8} xl={6}>
            <div className={styles.textSec}>
              <p className="title24" style={{ textAlign: "left" }}>
                We are about to ask you a few questions, aimed to help
                understand your wishes for end of life medical care.{" "}
              </p>
              <p className="desc18" style={{ textAlign: "left" }}>
                In most cases, people don’t get to communicate their wishes
                effectively. In this journey, we will ask you questions and have
                our experts extrapolate from them our recommendations for your
                wishes toward end of life. This will help you establish your
                wishes in a better way.
              </p>
              <p className="desc18b" style={{ textAlign: "left" }}>
                At the end of the questions, we will lay out our recommendations
                in this regard.
              </p>
            </div>
           
                <AppButton
                  hrefLink="/wishes"
                  title="Let’s go"
                  className={styles.tsBtn}
                  margin="50px auto 0"
                  fontSize="15px"
                  boxMargin="auto"
                  minWidth="130px"
                  // height="36px"
                />
             
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withLoader(WishesStart);
