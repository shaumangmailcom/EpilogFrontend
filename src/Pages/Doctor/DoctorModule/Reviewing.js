import React from "react";
import AppButton from "../../../Components/Button";
import { ReviewCard } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import edit from "../../../Assets/images/edit.svg";
import styles from "../style.module.scss";
import document from "../../../Assets/images/document.svg";
import managing from "../../../Assets/images/managing.svg";
import { withLoader } from "../../../Components/Loader";

const Reviewing = () => {
  return (
    <DoctorLayout>
      <p className="title24 mb-5">
        Be prepared by reviewing your list of questions
      </p>
      <ReviewCard
        {...{
          title: "Understanding medical information",
          img: document,
          options: [
            "Where can I read more and get additional reliable information about my condition when you are not available?",
            "What should I expect in terms of disease advancement in the upcoming weeks/months/years?",
            "What information is critical for me to know in order to decide on taking additional treatments?",
            "When can we talk about my care goals?",
          ],
        }}
      />
      <ReviewCard
        margin="16px 0 0"
        {...{
          profBg: "#DFF3FB",
          title: "Managing symptoms",
          img: managing,
          options: [
            "How do I manage sleep problems?",
            "Is there anything I can do in terms of life style/ diet / habits/ else to control the pace of advancement of my disease?",
          ],
        }}
      />
      <AppButton
        title="+  Add a new question"
        width="214px"
        height="36px"
        boxMargin="22px auto 0"
        color="var(--color-primary-dark)"
        border="2px solid var(--color-primary-dark)"
        backgroundColor="var(--color-white)"
        hrefLink="/add-appointment-question"
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
