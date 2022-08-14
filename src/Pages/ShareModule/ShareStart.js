import React from "react";
import { Row, Col } from "react-bootstrap";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";
import c1 from "../../Assets/images/c1.svg";
import AppButton from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { withLoader } from "../../Components/Loader";

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
          <Col xs={12} md={12} lg={8} xl={6}>
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

export default withLoader (MatchStart);
