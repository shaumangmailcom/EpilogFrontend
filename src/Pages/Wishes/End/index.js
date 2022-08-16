import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import AppHeader from "../../../Components/Header";
import AppButton from "../../../Components/Button";
import plus from "../../../Assets/images/plus.svg";
import { CatgCard, CheckCard } from "../../../Components/Cards";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  courseByUserState,
  courseState,
  heartByUserState,
  heartState,
  intravenousByUserState,
  intravenousState,
  mechanicalByUserState,
  mechanicalState,
  q13State,
  q14State,
  q1State,
  q2State,
  q8State,
  wishesAvgSelector,
} from "../../../store/selectors/wishes";
import {
  setRecommendation,
  setWishesState,
} from "../../../store/reducers/wishes";
import { withLoader } from "../../../Components/Loader";

const WishesEnd = () => {
  const navigate = useNavigate();
  const wishesAvg = useSelector(wishesAvgSelector);
  let content = [];
  const dispatch = useDispatch();
  const heart = useSelector(heartState);
  const heartByUser = useSelector(heartByUserState);
  const mechanical = useSelector(mechanicalState);
  const mechanicalByUser = useSelector(mechanicalByUserState);
  const course = useSelector(courseState);
  const courseByUser = useSelector(courseByUserState);
  const intravenous = useSelector(intravenousState);
  const intravenousByUser = useSelector(intravenousByUserState);
  const q1 = useSelector(q1State);
  const q2 = useSelector(q2State);
  const q8 = useSelector(q8State);
  const q13 = useSelector(q13State);
  const q14 = useSelector(q14State);

  useEffect(() => {
    const isTrue =
      wishesAvg > 4 ||
      q13 === "Emphasis on comfort and minimizing suffering" ||
      q14 === "No";
    dispatch(setRecommendation(isTrue ? "Yes" : "No"));
  }, [wishesAvg, q13, q14, dispatch]);
  if (
    wishesAvg > 4 ||
    q13 === "Emphasis on comfort and minimizing suffering" ||
    q14 === "No"
  ) {
    content.push({
      title: "Getting the most out of life",
      desc:
        "Your quality of life matters a lot to you. For people with similar preferences to you, this often means focusing on improving your quality of life and getting the most out of what life has to offer. This may be true in other times as well, but becomes highly important when one suffers from a life threatening illness." +
        (q14 === "No"
          ? " This also often means forgoing aggressive treatments with very low likelihood of succeeding."
          : ""),
    });
  }
  if (q8 > 5)
    content.push({
      title: "Avoid inconvenient measures",
      desc: "In other cases, since you have low tolerance for suffering, it may mean forgo tubes or any other type of very inconvenient measures, eg intravenous feeding.",
    });
  if (q1 > 5 || q2 > 5)
    content.push({
      title: "Choose high impact treatments",
      desc: "Lastly, your tendency towards rationality may mean you would forgo antibiotics when their impact becomes highly limited.",
    });
  return (
    <div className={styles.thankyou}>
      <AppHeader back onClickBack={() => navigate("/wishes-person")} />
      <div className={styles.content}>
        <img src={plus} className={styles.icon} />
        <Row className={styles.row}>
          <Col xs={12} md={12} lg={8} xl={6} className={styles.grid}>
            <p className="desc" style={{ textAlign: "center" }}>
              Our experts formulated their recommendations based on your
              responses, which include, among else, the following findings:
            </p>

            {content.map((item, index) => (
              <CatgCard index={index} {...item} number={`0${index + 1}`} />
            ))}

            <CheckCard
              title="Your form, based on your answers, filled by our experts:"
              onClick={(id, value) => {
                dispatch(setWishesState({ [id]: value }));
              }}
              options={[
                {
                  id: "heart_stops_by_user",
                  question: "Attempt resuscitation if your heart stops?",
                  value: heartByUser ?? heart,
                },
                {
                  id: "mechanical_ventilation_by_user",
                  question:
                    "Attempt aggressive treatments such as intubation and mechanical ventilation?",
                  value: mechanicalByUser ?? mechanical,
                },
                {
                  id: "course_of_illness_by_user",
                  question:
                    "Use antibiotics even if those cannot impact the main course of the illness?",
                  value: courseByUser ?? course,
                },
                {
                  id: "intravenous_feeding_by_user",
                  question:
                    "Use tubes or intravenous feeding if you can't eat on your own?",
                  value: intravenousByUser ?? intravenous,
                },
              ]}
            />
          </Col>
        </Row>
        <AppButton
          hrefLink="/complex-situation"
          title="I am Done"
          minWidth="173px"
          margin="7rem auto 0"
        />
      </div>
    </div>
  );
};
export default withLoader(WishesEnd);
