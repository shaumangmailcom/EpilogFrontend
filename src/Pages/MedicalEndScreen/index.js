import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import plus from "../../Assets/images/plus.svg";
import right from "../../Assets/images/right.svg";
import { CatgCard, CheckCard } from "../../Components/Cards";

const MediEnd = () => {
  return (
    <div className={styles.thankyou}>
      <AppHeader back />
      <div className={styles.content}>
        <img src={plus} className={styles.icon} />
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4} className={styles.grid}>
            <p className="desc" style={{ textAlign: "center" }}>
              Based on your responses, if you were about to fill in a form that
              represents your wishes for medical care when you are no longer
              able to give orders (The official form is often called POLST-
              physician orders for life sustaining treatment), our experts would
              recommend the following:
            </p>
            <CatgCard
              title="Getting the most out of life"
              number="01"
              desc="Your quality of life matters a lot to you. For people with similar preferences to you, this often means focusing on improving your wellbeing and getting the most out of what life has to offer. This may be true in other times as well, but it becomes especially important when one suffers from a life threatening illness. This also means forgoing aggressive treatments with very low likelihood of succeeding. "
            />
            <CatgCard
              title="Avoid inconvenient measures"
              number="02"
              desc="Since your quality of life matters a lot to you, this means you should avoid inconvenient measures, such as intravenous feeding.  "
            />
            <CatgCard
              title="Choose high impact treatments"
              number="03"
              desc="Lastly, your tendency towards rationality means you would forgo antibiotics when their impact becomes highly limited. "
            />
            <CheckCard title="Your form, based on your answers, filled by our experts:"  />
          </Col>
        </Row>
            <AppButton
              hrefLink="/information"
              title="Explore my journeys"
              src={right}
              minWidth="118px"
              margin="7rem auto 0"
            />
      </div>
    </div>
  );
};
export default MediEnd;
