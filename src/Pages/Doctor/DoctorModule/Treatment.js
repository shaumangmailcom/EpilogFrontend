import React from "react";
import AppButton from "../../../Components/Button";
import { CatgCard } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import mail from "../../../Assets/images/mail.svg";
import { withLoader } from "../../../Components/Loader";
import { useNavigate } from "react-router-dom";

const data = [
  {
    key: 0,
    title: "Care goals",
    number: "01",
    desc: "In general, there is no reason to believe that we have the tools to know what will be the best treatment for us. That is what the doctor is for. Therefore, our key recommendation is, that whenever your doctor is asking you make a decision about taking a treatment Yes/ No or choosing between alternative treatment paths, always take the following approach:",
    messages: [
      { by: "doctor", msg: "Do you want to do treatment X?" },
      {
        by: "user",
        msg: "Can I please tell you what my care goals are, and then you will tell me if this treatment is in line with my goals?",
      },
      { by: "doctor", msg: "Do you want to do treatment X or treatment Y?" },
      {
        by: "user",
        msg: "Can we please talk about my care goals, and then you will tell me what is your recommended treatment path based on my goals?",
      },
    ],
  },
  {
    key: 1,
    title: "Ask your doctor",
    number: "02",
    desc: [
      "If your doctor is unwilling to confidently recommend a treatment path based on your care goals (between alternative active treatments, or between active treatment and no treatment), ask them to help you, for each of the treatment options, to do the following:",
    ],
    listOptions: [
      {
        value: "1",
        title: "Prepare a list of pros and cons",
      },
      {
        value: "2",
        title:
          "Give a grade of 0-10 in each of the following categories, and then sum the results:",
        dtlOptions: [
          "How good overall my quality of life will be if the treatment succeeds, when, and for how long.",
          "What are the odds of it succeeding.",
          "How difficult will it be (what are the “costs” of taking the treatment, in terms of implications on my quality of life, and for how long)",
        ],
      },
    ],
  },
];

const Treatment = () => {
  const navigate = useNavigate();

  return (
    <DoctorLayout 
     onClick={() => navigate("/preparation-kit", { state: { email: 3 } })}
    >
      <p className="title24 mb-5">
        Prepare to choose between treatment alternatives
      </p>
      <p className="desc18">
        Understanding tradeoffs to different treatment paths can be complicated,
        even for people who are very experienced. When we are unwell, there are
        additional elements that exacerbate this complexity.
      </p>
      {data.map((item, ind) => (
        <CatgCard {...item} key={ind} />
      ))}
      <AppButton
        imgWidth="20px"
        leftIcon={mail}
        title="Send me preparation kit"
        boxMargin="24px auto 0"
        // hrefLink="/preparation-kit"
        onClick={() => navigate("/preparation-kit", { state: { email: 3 } })}
      />
    </DoctorLayout>
  );
};

export default withLoader(Treatment);
