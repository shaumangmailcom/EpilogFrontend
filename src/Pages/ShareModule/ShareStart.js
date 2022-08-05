import React from "react";
import { Row, Col } from "react-bootstrap";
import { SliderCard, StepCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { Indicator } from "../../Components/SmallComponents";
import styles from "./style.module.scss";
import time from "../../Assets/images/time.svg";
import cup from "../../Assets/images/cup.svg";
import heart from "../../Assets/images/heart.svg";
import sunset from "../../Assets/images/sunset.svg";
import stars from "../../Assets/images/stars.svg";
import bird from "../../Assets/images/bird.svg";
import c1 from "../../Assets/images/c1.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import { useNavigate } from "react-router-dom";

const MatchStart = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.match}>
      <AppHeader back onClickBack={() => navigate("/journey")} />
      <div className={styles.header}>
        <p>Sharing with family and friends</p>
        <img src={c1} />
      </div>
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4}>
            <p className="title24" style={{ textAlign: "left" }}>
              Finding your sharing style
            </p>
            <p className="desc18b" style={{ textAlign: "left" }}>
              Being ill is a challenge. For some of us, sharing the challenge
              with friends and family is helpful, while for others it might be
              more difficult.
            </p>
            <p className="desc16">
              Answering the next few questions will help us figure out what is
              your sharing style. Based on that we will suggest to you what to
              share and not share, and how.
            </p>
            <p className="desc16">
              Of course you can always follow your heart at any given moment,
              and our recommendations could also change over time.
            </p>
            <AppButton
              hrefLink="/share"
              title="Find my sharing style"
              minWidth="195px"
              height="36px"
              margin="50px auto 0"
              fontSize="15px"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MatchStart;
