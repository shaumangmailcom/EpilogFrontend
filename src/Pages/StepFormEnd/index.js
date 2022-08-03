import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import right from "../../Assets/images/right.svg";
import { Lable } from "../../Components/SmallComponents";
const data = [
  {
    title: "Now",
    qs: "We are about to ask you all kinds of questions",
    dtl: "Before we do, we want to make it clear that this is your information and that we will never share with anyone.",
  },
  {
    title: "After",
    qs: "We’ll suggest the right journeys for you",
    dtl: "Once we will know you a bit better we will present different journeys to you. Some journeys will be about sleep, pain, fear, what to share and not share with your friends and family... and more.",
  },
  {
    title: "Also",
    qs: "Other journeys as well",
    dtl: "Other journeys will be about how to leave the best legacy behind, and there will be some about important medical junctions.",
  },
];

export default function StepEnd() {
  return (
    <div className={styles.stepEnd}>
      <AppHeader back />
      <Row className={styles.row}>
        <Col xs={12} md={8} lg={6} xl={4} className={styles.grid}>
          {data.map((item) => (
            <div className={styles.content}>
              <Lable lable={item.title} />
              <p className={styles.head}>{item.qs}</p>
              <p className={styles.desc}>{item.dtl}</p>
            </div>
          ))}
          <AppButton
            // hrefLink="/information"
            title="Next"
            minWidth="129px"
          />
        </Col>
      </Row>
    </div>
  );
}
