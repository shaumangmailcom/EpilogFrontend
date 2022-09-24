import React from "react";
import { useDispatch, useSelector } from "react-redux";
import document from "../../../Assets/images/document.svg";
import edit from "../../../Assets/images/edit.svg";
import managing from "../../../Assets/images/managing.svg";

import hPlus from "../../../Assets/images/hPlus.svg";
import home from "../../../Assets/images/home.svg";
import bed from "../../../Assets/images/bed.svg";
import AppButton from "../../../Components/Button";
import { ReviewCard } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import { withLoader } from "../../../Components/Loader";
import { setAccordion } from "../../../store/reducers/doctor";
const icons = { managing, document, hPlus, home, bed };

const Reviewing = () => {
  const doctorState = useSelector((s) => s.doctor);
  let arr = Object.values(doctorState.questions);
  const dispatch = useDispatch();
  const data = [];
  arr.forEach((module) => {
    const options = module.options.filter(
      (option) => doctorState.replies[option.id]?.answer ?? false
    );
    // console.log(options);
    if (options.length > 0) data.push({ ...module, options });
  });
  return (
    <DoctorLayout>
      <p className="title24 mb-5">
        Be prepared by reviewing your list of questions
      </p>
      {data.map((item, ind) => {
        return (
          <ReviewCard
            {...{
              title: item.name,
              img: icons[item.icon],
              profBg: item.color,
              options: item.options,
            }}
          />
        );
      })}

      <AppButton
        title="+  Add a new question"
        width="214px"
        height="36px"
        boxMargin="22px auto 0"
        color="var(--color-primary-dark)"
        border="2px solid var(--color-primary-dark)"
        backgroundColor="var(--color-white)"
        hrefLink="/add-appointment-question"
        onClick={()=>{
              dispatch(setAccordion(2))
            }}
      />
      <AppButton
        leftIcon={edit}
        title="Edit list"
        width="214px"
        height="36px"
        boxMargin="24px auto 0"
        hrefLink="/appointment-questions"
      />
    </DoctorLayout>
  );
};

export default withLoader(Reviewing);
