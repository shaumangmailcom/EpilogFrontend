import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppButton from "../../Components/Button";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";
import { Indicator } from "../../Components/SmallComponents";
import Steps from "../../Components/Steps";
import { setDoctorState, doctorStateKeys } from "../../store/reducers/doctor";
import Accordion from "react-bootstrap/Accordion";
import AppAccordion from "../../Components/AppAccordion";
import managing from "../../Assets/images/managing.svg";
import document from "../../Assets/images/document.svg";
import hPlus from "../../Assets/images/hPlus.svg";
import home from "../../Assets/images/home.svg";
import bed from "../../Assets/images/bed.svg";
import { TextSec } from "../../Components/Cards";

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
  const data = [
    {
      key: 0,
      img: managing,
      title: "Managing my symptoms",
      badge: "3",
      label: "question added",
      logoBg: '#DFF3FB',
      options: [
        {
          id: 0,
          checkLabel: "What should I do to make my pain more manageable?",
        },
        {
          id: 1,
          checkLabel: "How should I manage my sleep?",
        },
        {
          id: 2,
          checkLabel: "How can you help me manage my anxiety?",
        },
      ],
    },
    {
      key: 1,
      img: hPlus,
      title: "Improving my general  wellbeing ",
      logoBg: '#FFE5B1',
      options: [
        {
          id: 0,
          checkLabel: "Is there anything I can do in terms of my life style / diet / habits /  to control the pace of advancement of my disease?",
        },
        {
          id: 1,
          checkLabel: "Is there anything I can do in terms of life style / diet / habits/  to improve my wellbeing alongside fighting the disease?",
        },
      ],
    },
    {
      key: 2,
      img: document,
      title: "Understanding my medical information",
      badge: '1',
      label: "question added",
      logoBg: '#EAEFFF',
      options: [
        {
          id: 0,
          checkLabel: "Where can I get additional reliable information about my condition?",
        },
        {
          id: 1,
          checkLabel: "What should I expect in terms of disease advancement in the upcoming weeks/months/years?",
        },
        {
          id: 2,
          checkLabel: "What information is critical for me to know in order to decide on  additional / alternative treatments?",
        },
        {
          id: 3,
          checkLabel: "When can we talk about my care goals?",
        },
      ],
    },
    {
      key: 3,
      img: home,
      title: "What should I do while at home",
      logoBg: '#D0F1BF',
      options: [
        {
          id: 0,
          checkLabel: "What should I do to make it more comfortable for people to visit me?",
        },
        {
          id: 1,
          checkLabel: "What is the best way to set up my bed at home in order to improve my sleep?",
        },
        {
          id: 2,
          checkLabel: "What is the best way to set up my bed at home in order to improve my rest in the middle of the day?",
        },
        {
          id: 3,
          checkLabel: "Do you recomend that I have a TV in my bedroom or not?",
        },
        {
          id: 4,
          checkLabel: "Do you recomend any renovations to my bedroom, bathroom and kitchen?",
        },
        {
          id: 5,
          checkLabel: "If things get worse, how should I prepare my home environment for a long-term stay?",
        },
      ],
    },
    {
      key: 4,
      img: bed,
      title: "My hospitalization alternatives",
      logoBg: '#FFCFC0',
      options: [
        {
          id: 0,
          checkLabel: "In my case, what are the benefits of hospital relative to home care?",
        },
        {
          id: 1,
          checkLabel: "When I have an emergency, when should I go directly to the ER, and when should I call the clinic?",
        },
        {
          id: 2,
          checkLabel: "when should I call the clinic? When I need ongoing medical care, do you gessest hospital or home care?",
        },
        {
          id: 3,
          checkLabel: "From your experience, do people in my situation usually prefer hospital or home care?",
        },
      ],
    },
  ];

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
        <>
          <Steps
            onClick={(heading) => {
              dispatch(setDoctorState({ heading }));
            }}
            data={doctorState.heading}
            title="To help you get going, our experts prepared a basic list of questions.
            Feel free to select a few questions from our list, and add your own."
          />
          <Accordion defaultActiveKey="0">
            {data.map((item) => (
              <AppAccordion {...item} margin="18px 0 0">
                {item.options.map((option, ind) => (
                  <TextSec margin="8px 0 0" id ={ind} {...option}/>
                ))}
              </AppAccordion>
            ))}
          </Accordion>
        </>
      )}
      {current_page === 2 && (
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
      )}
    </DoctorLayout>
  );
};

export default withLoader(DSteps);
