import React from "react";
import { Accordion } from "react-bootstrap";
import AppAccordion from "../../Components/AppAccordion";
import AppButton from "../../Components/Button";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";
import { AppInput, UserCard } from "../../Components/SmallComponents";
import styles from "./style.module.scss";
import hPlus from "../../Assets/images/hPlus.svg";
import managing from "../../Assets/images/managing.svg";
import document from "../../Assets/images/document.svg";
import home from "../../Assets/images/home.svg";
import bed from "../../Assets/images/bed.svg";

const data = [
  {
    id: 0,
    img: hPlus,
    title: "Improving my general wellbing",
    logoBg: "#FFE5B1",
  },
  {
    id: 1,
    img: managing,
    title: "Managing my symptoms",
    logoBg: "#DFF3FB",
  },
  {
    id: 2,
    img: document,
    title: "Understanding my medical information",
    logoBg: "#EAEFFF",
  },
  {
    id: 3,
    img: home,
    title: "What should I do while at home",
    logoBg: "#D0F1BF",
  },
  {
    id: 4,
    img: bed,
    title: "My hospitalization alternatives",
    logoBg: "#FFCFC0",
  },
];

const AddQuestion = () => {
  return (
    <DoctorLayout layoutBtn={false}>
      <p className="title24 my-5">Add a question</p>
      <div className="addQAccordion">
        <Accordion defaultActiveKey="0">
          {data.map((item, id) => (
            <AppAccordion {...item} key={id}>
              <AppInput
                as="textarea"
                placeholder="Type here..."
                rows={5}
                className="mt-5"
              />
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
                hrefLink="/prepare"
              />
            </AppAccordion>
          ))}
        </Accordion>
      </div>
    </DoctorLayout>
  );
};

export default withLoader(AddQuestion);
