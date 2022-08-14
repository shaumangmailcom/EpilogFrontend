import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../Components/Header";
import AppButton from "../../Components/Button";
import matchT from "../../Assets/images/matchT.svg";
import right from "../../Assets/images/right.svg";
import { CatgCard, CheckCard } from "../../Components/Cards";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  generalState,
  goodTimeState,
  illnessTreatmentState,
  shareAvgTenSelector,
  shareTwoQAvgSelector,
} from "../../store/selectors/share";
import { withLoader } from "../../Components/Loader";

const RenderOtherInvolved = () => {
  const illnessTreatment = useSelector(generalState);
  const goodTime = useSelector(goodTimeState);
  const avg = useSelector(shareTwoQAvgSelector);
  const diff9_10 = Math.abs(illnessTreatment - goodTime);
  let desc = "";

  if (avg > 4 && diff9_10 >= 2) {
    desc =
      "You generally gain high personal value from having others involved in your life. Even though it may be difficult, we recommend making the effort to share about yourself in hard times as well, since it will most likely have a positive impact on you. One of the most effective ways to do that when it gets difficult is using digital tools. We will be able to offer some of these to you soon.";
  } else if (avg > 4 && diff9_10 < 2) {
    desc =
      "You generally gain high personal value from having others involved in your life. You also understand deeply the value in sharing in bad times as well. We recommend that you keep doing that, as the value for you will be vast. Just don’t forget to share about good news as well, when they come along. This will enrich and validate the experience of sharing with others, for you and for your loved ones.";
  } else if (avg <= 4 && diff9_10 < 2) {
    desc =
      "You do not necessarily see the value from having others involved in your life. Even though it may be difficult, we recommend making the effort to share something about yourself with others nevertheless. The positive impact that sharing has on us as human beings may surprise. One of the most effective ways to share when it doesn’t feel natural for us is using digital tools. We will be able to offer some of these to you soon.";
  } else if (avg <= 4 && diff9_10 >= 2) {
    desc =
      "You do not necessarily see the overall value from having others involved in your life. However you do realize there is high value in sharing some of the burden we experience in bad times with others. We recommend you to practice sharing more about your life with others. One of the most effective ways to share when it doesn’t feel natural for us is using digital tools. We will be able to offer some of these to you soon.";
  }
  return (
    <CatgCard title="Letting others get involved" number="01" desc={desc} />
  );
};
const RenderKeepSharing = () => {
  const avg = useSelector(shareAvgTenSelector);
  let desc =
    "You dislike sharing. We understand this feels difficult, but it is impossible to not share anything about yourself with other people. Our recommendation is to find someone in your life who will be your designated second driver, and ask them to fill in for you and share information about you with others, when they (or you) believe this could be helpful to have others involved. They can even try sharing electronically, to make it easier for them, and for you.";

  if (avg > 8) {
    desc =
      "You know you have a high tendency to share. This is wonderful and an important contributor to your resilience. This suits our recommendation so keep doing what is already natural to you. That being said, sometimes it is challenging to repeat stories over and over again, so we suggest that at least some of the sharing will be done electronically. Once ready, our system will offer help with that.";
  } else if (avg > 6 && avg <= 8) {
    desc =
      "You have a high tendency to share. This is wonderful and an important contributor to your resilience. This suits our recommendation so keep doing what is already natural to you. Sometimes you have second thoughts or concerns on sharing but without doubt you have a lot to gain from it, so we recommend you try to do some (or more) of the sharing electronically.";
  } else if (avg > 3 && avg <= 6) {
    desc =
      "Sharing is complex for you. You see the value in it, but sometimes it raises concerns for you. Our recommendation is to choose specific people that you want to share personal information with, and follow your choice over the next month. This is an opportunity to see to what extent you gained resilience and comfort from it, as opposed to extended concerns.";
  } else if (avg > 1 && avg <= 3) {
    desc =
      "You are not a big fan of sharing information about yourself with other people. You know that this may be beneficial for some people, but perhaps not for you. Our recommendation for you is to find one person that you may feel comfortable sharing something personal about yourself with, and follow your choice over the next month. If this is difficult for you, perhaps you should try sharing electronically- this may feel easier.";
  }
  return <CatgCard title="Keep sharing" number="02" desc={desc} />;
};
const MatchEnd = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.thankyou}>
      <AppHeader back onClickBack={() => navigate("/share-thank")} />
      <div className={styles.content}>
        <img src={matchT} className={styles.icon} />
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={8} xl={6} className={styles.grid}>
            <p
              className="title24"
              style={{ textAlign: "center", marginTop: 50, marginBottom: 50 }}
            >
              Our experts have formulated the following recommendations for you
            </p>
            <RenderOtherInvolved />
            <RenderKeepSharing />

            <CatgCard
              title="Share more online"
              number="03"
              desc="Sometimes you have second thoughts or concerns on sharing but without doubt you have a lot to gain from it, so we recommend you try to share some information electronically."
            />
          </Col>
        </Row>
        <AppButton
          hrefLink="/shair-complex"
          title="I am Done"
          minWidth="173px"
          margin="2rem auto 0"
        />
      </div>
    </div>
  );
};
export default withLoader(MatchEnd);
