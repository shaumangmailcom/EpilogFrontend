import React, { useCallback } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bed from "../../Assets/images/bed.svg";
import document from "../../Assets/images/document.svg";
import home from "../../Assets/images/home.svg";
import hPlus from "../../Assets/images/hPlus.svg";
import managing from "../../Assets/images/managing.svg";
import AppAccordion from "../../Components/AppAccordion";
import AppButton from "../../Components/Button";
import { TextSec } from "../../Components/Cards";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";
import { Indicator } from "../../Components/SmallComponents";
import Steps from "../../Components/Steps";
import {
  doctorStateKeys,
  modulesDefault,
  setDoctorState,
  setReplies,
} from "../../store/reducers/doctor";
import styles from "./style.module.scss";
const icons = { managing, document, hPlus, home, bed };

const DSteps = () => {
  const doctorState = useSelector((s) => s.doctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const current_page = doctorState.current_page;
  const data = Object.values(doctorState.questions);
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
    if (current_page === 0) return navigate(-1);
    dispatch(
      setDoctorState({
        current_page: current_page - 1,
      })
    );
  }, [current_page, dispatch, navigate]);

  return (
    <DoctorLayout onClickBack={prevPage} layoutBtn={false}>
      <Indicator active={current_page} items={doctorStateKeys.length} />
      {current_page === 0 && (
        <Steps
          onClick={(epilog_system) => {
            dispatch(setDoctorState({ epilog_system }));
            nextPage();
          }}
          data={doctorState.epilog_system}
          titleMargin="30px 0"
          title="Is your upcoming doctor appointment going to be the first time meeting with this doctor while using the Epilog system?"
          options={["Yes", "No"]}
        />
      )}
      {current_page === 1 && data.length > 0 && (
        <>
          <Steps
            title="To help you get going, our experts prepared a basic list of questions.
            Feel free to select a few questions from our list, and add your own."
          />
          <Accordion defaultActiveKey="0">
            {data.map((item) => {
              const badge =
                modulesDefault[item.id] < item.options.length
                  ? item.options.length - modulesDefault[item.id]
                  : 0;

              return (
                <AppAccordion
                  key={item.id}
                  {...item}
                  badge={badge}
                  icons={icons}
                  margin="18px 0 0"
                >
                  {item.options.map((option, ind) => (
                    <TextSec
                      key={ind}
                      margin="8px 0 0"
                      id={option.id}
                      checkLabel={option.question}
                      onClick={(value) =>
                        dispatch(
                          setReplies({
                            [option.id]: { ...option, answer: value },
                          })
                        )
                      }
                      checked={doctorState.replies[option.id]?.answer}
                    />
                  ))}
                </AppAccordion>
              );
            })}
          </Accordion>
          <AppButton
            title="+ Add a question"
            className={styles.aqBtn}
            color="#4059AD"
            boxMargin="36px auto 0"
            hrefLink="/add-appointment-question"
          />
          <AppButton
            title="Prepare for the meeting"
            boxMargin="36px auto 0"
            width="209px"
            hrefLink="/prepare"
          />
        </>
      )}
      {/* {current_page === 2 && (
        <>
          <Steps
          
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
      )} */}
    </DoctorLayout>
  );
};

export default withLoader(DSteps);
