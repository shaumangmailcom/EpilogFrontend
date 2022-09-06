import React from "react";
import { Col, Row } from "react-bootstrap";
import doc from "../../Assets/images/doc.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
import styles from "./style.module.scss";
import { stepRoutes } from "../../store/reducers/doctor";
import { useLocation, useNavigate } from "react-router-dom";

const DoctorLayout = ({ children, layoutBtn = true, onClick, onClickBack }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const hrefLinkIndex = stepRoutes.indexOf(location.pathname);

  const onClickGoBack = () => {
    if (hrefLinkIndex === 0) navigate("/journey");
    if (location.pathname === "/add-appointment-question")
      return navigate("/appointment-questions");

    navigate(stepRoutes[hrefLinkIndex - 1]);
  };

  return (
    <div className={styles.doctorLayout}>
      <AppHeader back onClickBack={onClickGoBack || onClickBack} />
      <div className={styles.header}>
        <p>Conversation with my doctor</p>
        <img src={doc} alt="" />
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
                hrefLink={stepRoutes[hrefLinkIndex + 1]}
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
