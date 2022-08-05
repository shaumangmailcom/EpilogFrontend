import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import matchT from "../../Assets/images/matchT.svg";
import smile from "../../Assets/images/smile.svg";
import users from "../../Assets/images/users.svg";
import leaf from "../../Assets/images/leaf.svg";
import hands from "../../Assets/images/hands.svg";
import { CatgCard, CheckCard, MatchCard } from "../../Components/Cards";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: smile,
    desc: "Relative to others, sharing something personal about yourself with others makes you feel generally better",
    imgBg: "#EAEFFF"
  },
  {
    img:users,
    desc: "Your sharing modality of choice is",
    point: "in person",
    imgBg: "#DFF3FB",
  },
  {
    img:leaf,
    desc: "Your level of comfort sharing freely is",
    point: "higher than most people",
    imgBg: "#FFE5B1",
  },
  {
    img:users,
    desc: "Your preference for allowing other people to take an active role in important decisions is",
    point: "above average",
    imgBg: "#FFCFC0",
  },
];

const MatchThank = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.thankyou}>
      <AppHeader back onClickBack={()=>navigate('/share')}/>
      <div className={styles.content}>
        <img src={matchT} className={styles.icon} />
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={6} xl={4} className={styles.grid}>
            <p className="title" style={{ textAlign: "center", marginTop: 20 }}>
              Thank you!
            </p>
            <p
              className="desc18"
              style={{ textAlign: "center", marginTop: 20 }}
            >
              Sharing is a complex issue. We often share about ourselves just
              because we know people around us want to know what is going on
              with us. We are not always aware of the value of sharing, but
              sharing can add resilience to our life, as well as add support and
              empathy.
            </p>
            <p className="desc18b" style={{textAlign: "center"}}>
              Based on your responses, our experts identified the following:
            </p>
            {data.map((item) => (
              <MatchCard img={item.img} desc={item.desc} point={item.point} imgBg={item.imgBg} />
            ))}
          </Col>
        </Row>
        <AppButton
          hrefLink="/share-end"
          title="See our recommendations"
          minWidth="234px"
          margin="40px auto 0"
          fontSize="15px"
        />
      </div>
    </div>
  );
};
export default MatchThank;
