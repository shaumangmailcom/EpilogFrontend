import React from "react";
import AppButton from "../../../Components/Button";
import { CatgCard } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import share from "../../../Assets/images/share.svg";
import mail from "../../../Assets/images/mail.svg";

const data = [
  {
    key: 0,
    number: "01",
    title: "Brainstorm",
    desc: "Ask a loved one to help you with questions before. Ask them to brainstorm with you what is important for you to know, and what is important to them.",
  },
  { 
    key: 1,
    title: "Practice",
    number: "02",
    desc: "Ask a loved one to help you practice asking your doctor questions. If you do not want to do this live, just close your eyes and role over the conversation in your head. It works too!",
  },
  {
    key: 2,
    title: "Company",
    number: "03",
    desc: ["Ask a loved one to join you and share with this person your questions before you get to the doctor. When you introduce them to your doctor say:",
    "“This is Shila, and because this information is so complex for me to grasp I have asked them to be here to make sure everything is clear during the meeting and to remind me about it after we leave. I hope that this is OK with you”"
  ],

  }
];

const Prepare = () => {
  return (
    <DoctorLayout>
      <p className="title24 mb-5">Prepare yourself and your loved ones</p>
      {data.map((item, ind) => (
        <CatgCard {...item} key={ind} />
      ))}

      <AppButton
        title="Share your list of questions"
        leftIcon={share}
        width="270px"
        imgWidth="15px"
        border="2px solid var(--color-primary-dark)"
        backgroundColor="var(--color-white)"
        color="var(--color-primary-dark)"
        boxMargin="auto"
        />
      <AppButton
        title="Send me my preparation kit"
        leftIcon={mail}
        width="270px"
        imgWidth="15px"
        boxMargin="22px auto 0"
        hrefLink="/reviewing"
      />
    </DoctorLayout>
  );
};

export default Prepare;
