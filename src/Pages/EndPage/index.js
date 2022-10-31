import React, { useCallback } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import journeyImg1 from "../../Assets/images/c1.svg";
import journeyImg2 from "../../Assets/images/journey2.svg";
import AppModal from "../../Components/AppModal";
import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
import { AppInput } from "../../Components/SmallComponents";
import { asyncCreateFeedback } from "../../store/actions/feedback";
import {
  resetFeedback,
  setFeedbackState,
  setShowModal2,
} from "../../store/reducers/feedback";
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
  // const location = useLocation();
  // const current_page = feedbackState.current_page;

  const onCloseModal2 = useCallback(() => {
    dispatch(setShowModal2(false));
    dispatch(resetFeedback());
    navigate("/");
  }, [dispatch, navigate]);

  const submitForm = useCallback(
    async (want_amazon_gift = true) => {
      let { prolificId, ethnicity } = feedbackState;

      if (!ethnicity) {
        return alert("Please select ethnicity from the given dropdown");
      }

      dispatch(setFeedbackState({ email: `${prolificId}-${ethnicity}` }));

      let { success, message } = await dispatch(
        asyncCreateFeedback({ want_amazon_gift })
      ).unwrap();
      if (success) {
        dispatch(setShowModal2(true));
        return;
      } else {
        alert(message ?? "error");
      }
    },
    [dispatch, feedbackState]
  );

  console.log(feedbackState, "state");

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
              {/* <p className="desc" style={{ marginBottom: 0 }}>
                You've reached the end of our trial system.
              </p> */}
              <div>
                <div className="app-select">
                  <p className="desc18b" style={{ textAlign: "center" }}>
                    What is your ethnicity?
                  </p>
                  <Form.Select
                    value={feedbackState.ethnicity}
                    onChange={({ target: { value } }) =>
                      dispatch(setFeedbackState({ ethnicity: value }))
                    }
                    aria-label="Default select example"
                  >
                    <option defaultValue="" value="" hidden>
                      Please Select
                    </option>
                    {options.map((item, ind) => (
                      <option key={ind} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </Form.Select>
                </div>
                <p
                  className="desc"
                  style={{ textAlign: "center", marginBottom: 0 }}
                >
                  You've reached the end of our trial system.
                </p>
              </div>
              <p className="desc18b">Here is your prolific completion code:</p>
              <AppInput
                value="C6HS4LQK"
                disabled
                style={{ textAlign: "center" }}
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

      <AppModal show={feedbackState.showModal2} onHide={onCloseModal2}>
        <p className="desc">
          Thank you for participating, we will contact you soon.
        </p>
        <Row>
          <Col>
            <AppButton
              title="OK"
              width="150px"
              height="36px"
              fontSize="15px"
              borderRadius="50px "
              onClick={onCloseModal2}
            />
          </Col>
        </Row>
      </AppModal>
    </div>
  );
};

export default EndPage;
