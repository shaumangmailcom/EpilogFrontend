import React from "react";
import AppHeader from "../../Components/Header";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppButton from "../../Components/Button";
import { withLoader } from "../../Components/Loader";

function Welcome() {
  return (
    <div className={styles.firstScreen}>
      <AppHeader />
      <Row className={styles.row}>
        <Col xs={12} md={10} lg={8} xl={6} className={styles.grid}>
          <p className="desc">
            You are invited to participate in a study being conducted by a
            research team at Reichman University. The purpose of the study is to
            investigate attitudes towards quality of care. Participation should take
            approximately 10 minutes to complete.{" "}
          </p>
          <h1 className="title">PARTICIPATION</h1>

          <p className="desc">
            Your participation in this survey is voluntary. You may refuse to
            take part in the research or exit the survey at any time without
            penalty. However, you must proceed to the final screen of the study
            in order to receive your completion code which you must submit in
            order to be paid.
          </p>
          <p className="desc">
            If you choose to participate, the data you provide will never be
            associated with your name or any other identifying information.
            Although collected data may be made public or used for future
            research purposes, your identity will always remain confidential.
            This is integral to the research process as it allows other
            researchers to verify results and avoid duplicating research. The
            only identifying information we will collect is your Prolific ID.
          </p>

          <h1 className="title">PAYMENT</h1>
          <p className="desc">
            After completing the survey, you will be paid £12.00/hr for your
            participation.
          </p>

          <h1 className="title">ELECTRONIC CONSENT</h1>
          <p className="desc">
            Please select your choice below. You may print a copy of this
            consent form for your records.{" "}
          </p>
          <p className="desc">Clicking on the “Agree” button indicates that:</p>
          <ul>
            <li className="desc">You have read the above information.</li>
            <li className="desc">You voluntarily agree to participate.</li>
            <li className="desc">You are 18 years of age or older.</li>
          </ul>

          <p className="desc">
            If you have any questions about the research, please contact me at{" "}
          </p>
          <p className="desc">ben.heller@post.idc.ac.il. </p>
      <Row className={styles.btnRow}>
            <AppButton
              hrefLink="/home"
              title="OK"
              // src={right}
              minWidth="118px"
              boxMargin="auto"
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default withLoader(Welcome);
