import React from "react";
import { CatgCard } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import Steps from "../../../Components/Steps";
import { Range } from "../../../Components/SmallComponents";

const data = [
  {
    key: 0,
    title: "Take notes",
    number: "01",
    desc: "Take notes during the meeting. Write down important information as well as follow up on actions needed. This will be helpful during the meeting itself, and also after.",
  },
  {
    key: 1,
    title: "Record",
    number: "02",
    desc: "Ask your doctor for permission to record your understanding of what they are saying while the MD is listening. This will allow you to refer back to the important information that was said in your own words, at your convenience.",
  },
];

const ManageConversation = () => {
  return (
    <DoctorLayout>
      <p className="title24 mb-5">Prepare to manage the conversation</p>
      <p className="desc18">
        Having a list of questions with you while at the doctor’s office is very
        important. While there, you need to make sure{" "}
      </p>
      {data.map((item, ind) => (
        <CatgCard {...item} key={ind} />
      ))}

      <Range
        margin="52px 0 0"
        {...{
          question:
            "To what extent do you feel that you need help with understanding whether you should say YES or NO to the next treatment offered to you?",
          sLableOne: "Not at all",
          sLableTwo: "Very much",
        }}
      />
      <Steps
        titleMargin="52px 0 0"
        title="Do you think there is a good chance that you will have decisions to make while at the doctor’s?"
        options={["Yes", "No", "Have no idea"]}
      />
    </DoctorLayout>
  );
};

export default ManageConversation;
