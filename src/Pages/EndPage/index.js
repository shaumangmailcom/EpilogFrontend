import React, { useCallback } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import journeyImg1 from "../../Assets/images/c1.svg";
import journeyImg2 from "../../Assets/images/journey2.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
import { AppInput } from "../../Components/SmallComponents";
import { persistor } from "../../store";
import { asyncCreateFeedback } from "../../store/actions/feedback";
import { resetFeedback, setFeedbackState } from "../../store/reducers/feedback";
import styles from "./style.module.scss";

const options = [
  { ind: "1", title: "Africa" },
  { ind: "2", title: "Black/African American" },
  { ind: "3", title: "Caribbean" },
  { ind: "4", title: "East Asian" },
  { ind: "5", title: "Latino/Hispanic" },
  { ind: "6", title: "Middle/Eastern" },
  { ind: "7", title: "Mixed" },
  { ind: "8", title: "Native American or Alaskan Native" },
  { ind: "9", title: "South Aisan" },
  { ind: "10", title: "White/Caucasian" },
  {
    ind: "11",
    title: "Other (please feel free to let us know your ethnicity via email)",
  },
  { ind: "12", title: " White / Sephardic Jew" },
  { ind: "13", title: "Black/British" },
  { ind: "14", title: "White/Mexican" },
  { ind: "15", title: "Romani/Traveller" },
  { ind: "16", title: "South East Asian" },
];

const EndPage = (props) => {
  const feedbackState = useSelector((state) => state.feedback);
  const latestTry = useSelector((state) => state.user.latestTry);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const current_page = feedbackState.current_page;

  const submitForm = useCallback(
    async (want_amazon_gift = true) => {
      let { prolificID, nation } = feedbackState;
      dispatch(setFeedbackState({ email: `${prolificID}-${nation}` }));

      let { success, message } = await dispatch(
        asyncCreateFeedback({ want_amazon_gift })
      ).unwrap();
      if (success) {
        dispatch(resetFeedback());
        if (!want_amazon_gift) {
          navigate("/");
        }
        return;
      }
      if (!success) alert(message ?? "error");
    },
    [dispatch, navigate]
  );

  return (
    <div className={styles.phase}>
      <AppHeader back onClickBack={() => navigate(-1)} />
      {latestTry?.wishes === null ? (
        <div className={styles.header}>
          <p>Sharing with family and friends</p>
          <img alt="" src={journeyImg1} />
        </div>
      ) : (
        <div className={styles.header}>
          <p>Wishes for medical care</p>
          <img alt="" src={journeyImg2} />
        </div>
      )}
      <div className={styles.content}>
        <Row className={styles.row}>
          <Col xs={12} md={8} lg={8} xl={5} className={styles.grid}>
            <div className={styles.sec3}>
              <p className="desc" style={{ marginBottom: 0 }}>
                You've reached the end of our trial system.
              </p>
              <div className="app-select">
                <Form.Select
                  defaultValue={feedbackState.nation}
                  value={feedbackState.nation}
                  onChange={({ target: { value } }) =>
                    dispatch(setFeedbackState({ nation: value }))
                  }
                  aria-label="Default select example"
                >
                  {options.map((item, ind) => (
                    <option key={ind} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <p className="desc18b">Here is your prolific completion code:</p>
              <AppInput
                disabled
                placeholder="completion code"
                className={styles.input}
              />
              <AppButton
                title="Submit"
                onClick={() => submitForm(false)}
                className={styles.submitBtn}
                fontSize="15px"
                boxMargin="auto"
              />
              <p className="desc18b" style={{ textAlign: "center" }}>
                Thank you for participating!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EndPage;
