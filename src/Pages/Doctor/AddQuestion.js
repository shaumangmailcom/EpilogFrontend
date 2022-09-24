import React, { useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";
import AppAccordion from "../../Components/AppAccordion";
import AppButton from "../../Components/Button";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";
import { AppInput } from "../../Components/SmallComponents";
import hPlus from "../../Assets/images/hPlus.svg";
import managing from "../../Assets/images/managing.svg";
import document from "../../Assets/images/document.svg";
import home from "../../Assets/images/home.svg";
import bed from "../../Assets/images/bed.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { current } from "@reduxjs/toolkit";
import { asyncCreateQuestions } from "../../store/actions/doctor";
import { modulesDefault } from "../../store/reducers/doctor";
const icons = { managing, document, hPlus, home, bed };

const AddQuestion = () => {
  const doctorState = useSelector((s) => s.doctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState({});
  const data = Object.values(doctorState.questions);
  const saveQuestion = useCallback(
    async (moduleId, goBack = false) => {
      const { value: question } = questions[moduleId] ?? {
        value: "",
        error: null,
      };
      console.log(moduleId, question);
      if (!question) {
        return setQuestions((s) => ({
          ...s,
          [moduleId]: {
            value: question,
            error: "Enter question min 5 characters ",
          },
        }));
      }

      const { success, message } = await dispatch(
        asyncCreateQuestions({ question, moduleId })
      ).unwrap();
      if (goBack && success) {
        navigate("/appointment-questions");
      }
      if (!success) {
        setQuestions((s) => ({
          ...s,
          [moduleId]: {
            value: question,
            error: message,
          },
        }));
      }
    },
    [dispatch, navigate, questions]
  );
  console.log(questions);
  return (
    <DoctorLayout layoutBtn={false}>
      <p className="title24 my-5">Add a question</p>
      <div className="addQAccordion">
        <Accordion defaultActiveKey={2}>
          {data.map((item, id) => {
            const currentObj = questions[item.id] ?? {
              value: "",
              error: null,
            };
            const badge =
              modulesDefault[item.id] < item.options.length
                ? item.options.length - modulesDefault[item.id]
                : 0;
            return (
              <AppAccordion
                key={item.id}
                id={id}
                {...item}
                badge={badge}
                icons={icons}
              >
                <AppInput
                  as="textarea"
                  placeholder="Type here..."
                  rows={5}
                  className="mt-5"
                  {...currentObj}
                  onChange={({ target: { value } }) => {
                    setQuestions((s) => ({
                      ...s,
                      [item.id]: { ...current, value, error: null },
                    }));
                  }}
                />
                <AppButton
                  title="Save and add another question"
                  height="40px"
                  width="261px"
                  boxMargin="52px auto 0"
                  border="1px solid var(--color-primary-dark)"
                  backgroundColor="var(--color-white)"
                  color="var(--color-primary-dark)"
                  onClick={() => saveQuestion(item.id)}
                />
              </AppAccordion>
            );
          })}
        </Accordion>
        <AppButton
          title="Review list"
          height="40px"
          width="261px"
          boxMargin="32px auto 0"
          hrefLink="/appointment-questions"
          // onClick={() => saveQuestion(item.id, true)}
        />
      </div>
    </DoctorLayout>
  );
};

export default withLoader(AddQuestion);
