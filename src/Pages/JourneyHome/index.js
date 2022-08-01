import React from 'react'
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import right from "../../Assets/images/right.svg"
import {StepCard} from '../../Components/Cards'
import journeyImg1 from '../../Assets/images/journey1.svg'
import journeyImg2 from '../../Assets/images/journey2.svg'
import parashoot from '../../Assets/images/parashoot.svg'

export default function JourneyHome() {
    return (
        <div className={styles.jounrey}>
        <AppHeader back />
        <Row className={styles.row}>
          <Col xs={8} className={styles.grid}>
            <h3>Your suggested journey</h3>
            <p>The system, based on your information, and the journeys that are currently available, has picked for you these journeys</p>
          </Col>
         
          </Row>
          <Row className="m-auto">
          <Col xs={{span:4,offset:2}}>
          <StepCard cardHeight={150} textWidth="60%" imgWidth="40%" text="Sharing with family and friends" rightImg={journeyImg1} />
           </Col>
           <Col xs={4}>
          <StepCard  cardHeight={150} textWidth="60%" imgWidth="40%" text="Wishes for medical care" rightImg={journeyImg2} />
           </Col>
          </Row>
          <Row>
              <Col xs={6} className={styles.parashootBox}>
                <img  src={parashoot} />
                <p> In the near future, there will be many journeys that will be offered to you, at the right time and based on your personality and preferences.</p>
              </Col>
          </Row>
        </div>
    )
}
