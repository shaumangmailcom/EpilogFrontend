import React, { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import journeyImg2 from "../../Assets/images/journey2.svg";
import right from "../../Assets/images/right.svg";
import AppButton from "../../Components/Button";
import {
  CheckBox,
  CheckCard,
  SliderCard,
  StepCard,
} from "../../Components/Cards";
import AppHeader from "../../Components/Header";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";
import { Indicator } from "../../Components/SmallComponents";
import Steps from "../../Components/Steps";
import { setDoctorState, doctorStateKeys } from "../../store/reducers/doctor";

import styles from "./style.module.scss";

const DSteps = () => {
  const doctorState = useSelector((s) => s.doctor);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const current_page = doctorState.current_page;

  const nextPage = useCallback(() => {
    const isLast = current_page === doctorStateKeys.length - 1;
    if (
      (current_page === 4 && !doctorState.goals_of_care) ||
      (current_page === 5 && !doctorState.take_treatment)
    )
      return alert("Kindly Select any one of the options");
    if (isLast) return navigate("/doctor-person");
    window.scrollTo(0, 0);
    dispatch(
      setDoctorState({
        current_page: isLast ? current_page : current_page + 1,
      })
    );
    console.log("isLast", isLast);
    // if (isLast) setTimeout(submitForm, 300);
  }, [current_page, dispatch, navigate, doctorState]);
  const prevPage = useCallback(() => {
    if (current_page === 0) return navigate("/doctor-start");
    dispatch(
      setDoctorState({
        current_page: current_page - 1,
      })
    );
  }, [current_page, dispatch, navigate]);

  return (
    <DoctorLayout onClick={nextPage} onClickBack={prevPage}>
      <Indicator active={current_page} items={doctorStateKeys.length} />
      {current_page === 0 && (
        <Steps
          onClick={(epilog_system) => {
            dispatch(setDoctorState({ epilog_system }));
          }}
          data={doctorState.epilog_system}
          titleMargin="30px 0"
          title="Is your upcoming doctor appointment going to be the first time meeting with this doctor while using the Epilog system?"
          options={["Yes", "No"]}
        />
      )}
      {current_page === 1 && (
        <Steps
          onClick={(heading) => {
            dispatch(setDoctorState({ heading }));
          }}
          data={doctorState.heading}
          title="To help you get going, our experts prepared a basic list of questions.
            Feel free to select a few questions from our list, and add your own."
        />
      )}
      {current_page === 2 && (
        <>
          <Steps  
            onClick={(add_quetion) => {
              dispatch(setDoctorState({ add_quetion }));
            }}
            data={doctorState.add_quetion}
            title="If there are additional questions you want to ask your doctor , please add them now. "
            options={["Add a question"]}
          />
          <p className="desc18 ubuntu500 ">Or</p>
          <AppButton
            title="Prepare for the meeting"
            height="36px"
            width="274px"
            boxMargin="auto"
            hrefLink="/prepare"
          />
        </>
      )}
    </DoctorLayout>
  );
};

export default withLoader(DSteps);
