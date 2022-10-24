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
import { setFeedbackState } from "../../store/reducers/feedback";
import styles from "./style.module.scss";

const options = [
    {ind: '1', title: 'Africa'},
    {ind: '2', title: 'Black/African American'},
    {ind: '3', title: 'Caribbean'},
    {ind: '4', title: 'East Asian'},
    {ind: '5', title: 'Latino/Hispanic'},
    {ind: '6', title: 'Middle/Eastern'},
    {ind: '7', title: 'Mixed'},
    {ind: '8', title: 'Native American or Alaskan Native'},
    {ind: '9', title: 'South Aisan'},
    {ind: '10', title: 'White/Caucasian'},
    {ind: '11', title: 'Other (please feel free to let us know your ethnicity via email)'},
    {ind: '12', title: ' White / Sephardic Jew'},
    {ind: '13', title: 'Black/British'},
    {ind: '14', title: 'White/Mexican'},
    {ind: '15', title: 'Romani/Traveller'},
    {ind: '16', title: 'South East Asian'},
]

const EndPage = (props) => {
  const feedbackState = useSelector((state) => state.feedback);
  const latestTry = useSelector((state) => state.user.latestTry);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const current_page = feedbackState.current_page;

  const nextPage = useCallback(() => {
    window.scrollTo(0, 0);
    dispatch(
      setFeedbackState({
        current_page: current_page + 1,
      })
    );
    // if (isLast) setTimeout(submitForm, 300);
  }, [current_page, dispatch]);
  console.log("isLast", location, props);

  const prevPage = useCallback(() => {
    window.scrollTo(0, 0);
    if (current_page === 0) return navigate(-1);
    dispatch(
      setFeedbackState({
        current_page: current_page - 1,
      })
    );
  }, [current_page, dispatch, navigate]);
  return (
    <div className={styles.phase}>
      <AppHeader back onClickBack={prevPage} />
      {latestTry?.wishes === null ? (
        <div className={styles.header}>
          <p>Sharing with family and friends</p>
          <img src={journeyImg1} />
        </div>
      ) : (
        <div className={styles.header}>
          <p>Wishes for medical care</p>
          <img src={journeyImg2} />
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
                <Form.Select aria-label="Default select example">
                  {options.map((item, ind) => (
                    <option value={ind}>{item.title}</option>
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
