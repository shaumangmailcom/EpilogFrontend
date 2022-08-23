import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import right from "../../Assets/images/right.svg";
import { Lable } from "../../Components/SmallComponents";
import { useNavigate } from "react-router-dom";
import { useNavigationValidator } from "../../hooks/navigation";
import { withLoader } from "../../Components/Loader";
const data = [
  {
    title: "Now",
    qs: "We are about to ask you all kinds of questions",
    dtl: "Before we do, we want to make it clear that this is your information and that we will never share it with anyone.",
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

function StepEnd() {
  const navigate = useNavigate();
  return (
    <div className={styles.stepEnd}>
      <AppHeader
        back
        onClickBack={() => {
          navigate("/basic");
        }}
      />
      <Row className={styles.row}>
        <Col xs={12} md={8} xl={4} lg={6} className={styles.grid}>
          <div>
            {data.map((item, ind) => (
              <div key={ind} className={styles.content}>
                <Lable lable={item.title} />
                <p className={styles.head}>{item.qs}</p>
                <p className={styles.desc}>{item.dtl}</p>
              </div>
            ))}
          </div>
          <AppButton hrefLink="/range" title="Next" minWidth="129px" boxMargin="auto" />
        </Col>
      </Row>
    </div>
  );
}

export default withLoader(StepEnd);
