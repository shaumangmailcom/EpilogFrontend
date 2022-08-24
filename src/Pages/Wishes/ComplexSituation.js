import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import { CheckBox, CheckCard, SliderCard } from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import { withLoader } from "../../Components/Loader";
import { Indicator } from "../../Components/SmallComponents";
import Steps from "../../Components/Steps";
import { asyncCreateWishes } from "../../store/actions/wishes";
import { setWishesState, wishesStateKeys } from "../../store/reducers/wishes";
import {
  allStateSelector,
  wishesDoneSelector,
} from "../../store/selectors/wishes";
import styles from "./style.module.scss";

const ComplexSituation = () => {
  const wishesState = useSelector(allStateSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextPage = useCallback(async () => {
    let { success } = await dispatch(asyncCreateWishes()).unwrap();
    if (success) {
      console.log("success");
      window.scrollTo(0, 0);
      return navigate("/feedback");
    }
    alert("error");
    // if (isLast) setTimeout(submitForm, 300);
  }, [dispatch, navigate]);
  return (
    <div className={styles.medical}>
      <AppHeader back onClickBack={() => navigate("/wishes-end")} />
      <div className={styles.header}>
        <p>Wishes for medical care</p>
        <img src={journeyImg2} />
      </div>
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <CheckBox
              id="operational_system"
              value={wishesState.operational_system}
              onClick={(id, value) => dispatch(setWishesState({ [id]: value }))}
              question="This system is not yet operational. If it was, and assuming you were in a complex medical situation, would you accept its recommendations and use it to fill in a formal “wishes for medical care” form?"
            />
            <SliderCard
              onChange={(obj) => {
                dispatch(setWishesState({ ...obj }));
              }}
              data={wishesState}
              options={[
                {
                  id: "complex_medical_situations",
                  question:
                    "If you were in a complex medical situation, to what extent would you accept its recommendations and use it to fill in a formal “wishes for medical care” form?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "correct_medical_care",
                  question:
                    "To what extent do you feel that your wishes for medical care are correctly captured by the way the form ended up being filled?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "want_and_change_the_way",
                  question:
                    "To what extent do you think that in a few weeks you are going to want and change the way in which your “wishes for medical care” form was filled?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
                {
                  id: "true_preferences",
                  question:
                    "If a loved one filled out their “wishes for medical care” form using this system, to what extent would you trust that the form correctly reflects their true preferences?",
                  sLableOne: "Not at all",
                  sLableTwo: "Very much",
                },
              ]}
            />
          </Col>
        </Row>
        <Row className={styles.btnRow}>
          <Col xs={12} md={8} lg={8} xl={5}>
            <AppButton
              className={styles.btn}
              src={right}
              imgWidth="10px"
              imgMargin="0"
              onClick={nextPage}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withLoader(ComplexSituation);
