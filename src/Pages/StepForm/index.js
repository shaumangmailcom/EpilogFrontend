import React from "react";
import { Row, Col } from "react-bootstrap";
import AppHeader from "../../Components/Header";
import Steps from "../../Components/Steps";
import styles from "./style.module.scss";

const QA = () => {
  return (
    <div className={styles.qa}>
      <AppHeader back />
      <div className={styles.banner} />
      <Row className={styles.row}>
        <Col xs={12} md={8} lg={6} xl={4} className={styles.grid}>
          <Steps
            lable="1"
            title="Who is facing this challenge?"
            desc="If you are here it is most likely because you, or someone you love, has a life-threatening illness."
            options={["Me", "A loved one"]}
          />
          <Steps
            lable="2"
            title="How old are you?"
            options={["Under 45", "46-55", "56-65", "65-75", "75+"]}
          />
          <Steps
            lable="3"
            title="What is your gender?"
            options={["Male", "Female"]}
          />
          <Steps
            lable="4"
            title="What were you diagnosed with?"
            options={["Cancer", "Heart disease", "Dementia", "Something else"]}
          />
          <Steps
            lable="5"
            title="How would you like to communicate with us?"
            desc="We can communicate in different ways. If using our system right now is not for you, in the future we will have other ways for you to get advice from our experts."
            options={[
              "Continuing with this text-based approach",
              "Speaking with a real person over the phone",
              "Speaking with a real person over chat/SMS",
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default QA;
