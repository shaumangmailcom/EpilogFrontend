import React from "react";
import { Accordion } from "react-bootstrap";
import AppAccordion from "../../Components/AppAccordion";
import AppButton from "../../Components/Button";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";
import { AppInput, UserCard } from "../../Components/SmallComponents";
import styles from "./style.module.scss";
import hPlus from "../../Assets/images/hPlus.svg"
import managing from "../../Assets/images/managing.svg"
import document from "../../Assets/images/document.svg"
import home from "../../Assets/images/home.svg"
import bed from "../../Assets/images/bed.svg"

const AddQuestion = () => {
  return (
    <DoctorLayout layoutBtn={false}>
      <p className="title24 my-5">Add a question</p>
      <Accordion defaultActiveKey="0">
        <AppAccordion key="0" {...{
          img: hPlus,
          title: 'Improving my general wellbing',
          logoBg: '#FFE5B1',
        }} >
          <UserCard {...{
            img: managing,
            title: 'Managing my symptoms',
            profBg: '#DFF3FB'
          }} />
          <UserCard {...{
            img: document,
            title: 'Understanding my medical information',
            profBg: '#EAEFFF'
          }} />
          <UserCard {...{
            img: home,
            title: 'What should I do while at home',
            profBg: '#D0F1BF'
          }} />
          <UserCard {...{
            img: bed,
            title: 'My hospitalization alternatives',
            profBg: '#FFCFC0'
          }} />
        </AppAccordion>
      </Accordion>
      <AppInput as="textarea" placeholder="Type here..." rows={5} className="mt-5" />
      <AppButton
        title="Save and add another question"
        height="40px"
        width="261px"
        boxMargin="52px auto 0"
        border="1px solid var(--color-primary-dark)"
        backgroundColor="var(--color-white)"
        color="var(--color-primary-dark)"
      />
      <AppButton
        title="Save and review list"
        height="40px"
        width="261px"
        boxMargin="32px auto 0"

      /> 
    </DoctorLayout>
  );
};

export default withLoader(AddQuestion);
