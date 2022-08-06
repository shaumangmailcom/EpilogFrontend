import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import matchT from "../../Assets/images/matchT.svg";
import right from "../../Assets/images/right.svg";
import { CatgCard, CheckCard } from "../../Components/Cards";
import { useNavigate } from "react-router-dom";

const MatchEnd = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.thankyou}>
      <AppHeader back onClickBack={()=>navigate('/share-thank')} />
      <div className={styles.content}>
        <img src={matchT} className={styles.icon} />
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={8} xl={6} className={styles.grid}>
            <p className="title24" style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}>
              Our experts have formulated the following recommendations for you
            </p>
            <CatgCard
              title="Letting others get involved"
              number="01"
              desc="You generally gain high personal value from having others involved in your life. Even though it may be difficult, we recommend making the effort to share, since it will most likely have a positive impact on you. One of the most effective ways to share when it feels ifficult is to use digital tools. We will be able to offer some of these soon"
            />
            <CatgCard
              title="Keep sharing"
              number="02"
              desc="You have a high tendency to share. This is wonderful and an important contributor to your resilience. Keep on doing what is already natural to you."
            />
            <CatgCard
              title="Share more online"
              number="03"
              desc="Sometimes you have second thoughts or concerns on sharing but without doubt you have a lot to gain from it, so we recommend you try to share some information electronically."
            />
          </Col>
        </Row>
        <AppButton
          hrefLink="/journey"
          title="Back to my journeys"
          minWidth="118px"
          margin="2rem auto 0"
        />
      </div>
    </div>
  );
};
export default MatchEnd;
