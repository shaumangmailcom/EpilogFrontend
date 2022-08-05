import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import { SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { Indicator } from "../../Components/SmallComponents";
import Steps from "../../Components/Steps";
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
          <Col xs={12} md={8} lg={6} xl={4}>
            <div className={styles.textSec}>
              <p className="title24">
                We are about to ask you a few questions, aimed to help
                understand your wishes for end of life medical care.{" "}
              </p>
              <p className="desc18">
                In most cases, people don’t get to communicate their wishes
                effectively. In this journey, we will ask you questions and have
                our experts extrapolate from them our recommendations for your
                wishes toward end of life. This will help you establish your
                wishes in a better way.
              </p>
              <p className="desc18b">
                At the end of the questions, we will lay out our recommendations
                in this regard.
              </p>

              <AppButton
                hrefLink="/wishes"
                title="Let’s Go"
                className={styles.tsBtn}
                fontSize="15px"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WishesStart;
