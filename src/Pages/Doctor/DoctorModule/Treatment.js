import React from "react";
import AppButton from "../../../Components/Button";
import { CatgCard, SliderCard } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import Steps from "../../../Components/Steps";
import RangeSlider from "../../RangeSlider";
import { Range } from "../../../Components/SmallComponents";

const Treatment = () => {
  return (
    <DoctorLayout>
      <p className="title24 mb-5">
        Prepare to choose between treatment alternatives
      </p>
      <p className="desc18">
        Understanding tradeoffs to different treatment paths can be complicated,
        even for people who are very experienced. When we are unwell, there are
        additional elements that exacerbate this complexity.
      </p>
      <CatgCard
        {...{
          title: "Care goals",
          number: "01",
          desc: "In general, there is no reason to believe that we have the tools to know what will be the best treatment for us. That is what the doctor is for. Therefore, our key recommendation is, that whenever your doctor is asking you make a decision about taking a treatment Yes/ No or choosing between alternative treatment paths, always take the following approach:",
        }}
      />
      <CatgCard
        {...{
          title: "Ask your doctor",
          number: "02",
          desc: [
            "If your doctor is unwilling to confidently recommend a treatment path based on your care goals (between alternative active treatments, or between active treatment and no treatment), ask them to help you, for each of the treatment options, to do the following:",
            <div>
              <p>
                <span className="desc18b" style={{color: '#4059AD'}}>1- </span>Prepare a list of pros and
                cons
              </p>
              
              <p>
                <span className="desc18b" style={{color: '#4059AD'}} >2- </span>Give a grade of 0-10 in each
                of the following categories, and then sum the results:
              </p>
              
            </div>,
            "How good overall my quality of life will be if the treatment succeeds, when, and for how long What are the odds of it succeeding How difficult will it be (what are the “costs” of taking the treatment, in terms of implications on my quality of life, and for how long)",
          ],
        }}
      />

      <AppButton
        title="Send me preparation kit"
        width="214px"
        height="36px"
        boxMargin="40px auto 0"
      />
    </DoctorLayout>
  );
};

export default Treatment;
