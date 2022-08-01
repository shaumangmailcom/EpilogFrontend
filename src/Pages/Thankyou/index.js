import React from 'react'
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import right from "../../Assets/images/right.svg"

export default function ThankYou() {
    return (
        <div className={styles.thankyou}>
        <AppHeader back />
        <div className={styles.banner} />
        <Row className={styles.row}>
          <Col xs={8} className={styles.grid}>
            <h3>Thank you</h3>
            <p>Now we know you a little better. Next, our system will examine many potential journeys that could help you at this point.</p>
          </Col>
          <Col xs={8}>
          <AppButton hrefLink="/information" title="Explore my journeys" src={right} minWidth="118px" />
           </Col>
          </Row>
        </div>
    )
}
