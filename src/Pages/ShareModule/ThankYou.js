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
import { useSelector } from "react-redux";
import {
  shareFirstThreeQAvgSelector,
  shareSecondThreeQAvgSelector,
  shareThreeQAvgSelector,
} from "../../store/selectors/share";
import { withLoader } from "../../Components/Loader";

const RenderRelative = () => {
  const usual_feeling = useSelector((s) => s.share.usual_feeling);
  const desc =
    "Relative to others, sharing something personal about yourself with others makes you feel generally ";
  let point = "";
  if (usual_feeling < 4) {
    point = "worse";
  } else if (usual_feeling >= 4 && usual_feeling <= 7) {
    point = "the same";
  } else {
    point = "better";
  }
  return <MatchCard img={smile} point={point} desc={desc} imgBg="#EAEFFF" />;
};
const RenderModality = () => {
  const personal_info = useSelector((s) => s.share.personal_info);
  const desc = "Your sharing modality of choice is ";
  let point = "";
  if (personal_info === "In person") {
    point = "in person";
  } else if (personal_info === "Online") {
    point = "online";
  } else if (personal_info === "Doesn’t matter") {
    point = "either online on in person";
  }
  return <MatchCard img={users} point={point} desc={desc} imgBg="#DFF3FB" />;
};
const RenderComfortLevel = () => {
  const avg = useSelector(shareFirstThreeQAvgSelector);
  const desc =
    "Your level of comfort sharing freely about your internal life with others is ";
  let point = "lower than most people";
  if (avg > 7) {
    point = "higher than most people";
  } else if (avg >= 4 && avg <= 7) {
    point = "similar to most people";
  }
  return <MatchCard img={leaf} point={point} desc={desc} imgBg="#FFE5B1" />;
};
const RenderImportantDecisions = () => {
  const avg = useSelector(shareSecondThreeQAvgSelector);
  const desc =
    "Your preference for other people to takeing an active role in your life and important decisions you make is";
  let point = "below average";
  if (avg > 7) {
    point = "above average";
  } else if (avg >= 4 && avg <= 7) {
    point = "average";
  }
  return <MatchCard img={hands} point={point} desc={desc} imgBg="#FFCFC0" />;
};
const MatchThank = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.thankyou}>
      <AppHeader back onClickBack={() => navigate("/share")} />
      <div className={styles.content}>
        <img src={matchT} className={styles.icon} />
        <Row className={styles.row}>
          <Col xs={12} md={10} lg={8} xl={6} className={styles.grid}>
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
            <p className="desc18b" style={{ textAlign: "center" }}>
              Based on your responses, our experts identified the following:
            </p>
            <RenderRelative />
            <RenderModality />
            <RenderComfortLevel />
            <RenderImportantDecisions />
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
export default withLoader(MatchThank);
