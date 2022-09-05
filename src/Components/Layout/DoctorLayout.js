import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import journeyImg2 from "../../Assets/images/journey2.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";

const DoctorLayout = ({ children, layoutBtn = true , onClick, onClickBack}) => {
  return (
    <div className={styles.doctorLayout}>
      <AppHeader back onClickBack={onClickBack} />
      <div className={styles.header}>
        <p>Conversation with my doctor</p>
        <img src={journeyImg2} />
      </div>
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5}>
            {children}
          </Col>
        </Row>
        {layoutBtn && (
          <Row className={styles.btnRow}>
            <Col xs={12} md={8} lg={8} xl={5}>
              <AppButton
                className={styles.btn}
                src={right}
                imgWidth="10px"
                imgMargin="0"
                hrefLink="/DMeeting"
                  onClick={onClick}
              />
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default DoctorLayout;
