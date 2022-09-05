import React from "react";
import { SliderCard } from "../../Components/Cards";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";

const Doctor = () => {
  return (
    <DoctorLayout>
      <p className="title24 left">
        For many of us, a doctor’s appointment can be a stressful event. And
        when we are not well these appointments can become extra stressful.
      </p>
      <p className="desc18 left">
        As a result of this stress, we are likely to forget questions that we
        wanted to ask, we often don’t remember what was said, and when we get
        home we realize that we are not sure about what to do next.{" "}
      </p>
      <SliderCard
        options={[
          {
            question: "To what extent does this sound familiar?",
            sLableOne: "Not at all",
            sLableTwo: "Very much",
          },
        ]}
      />
    </DoctorLayout>
  );
};

export default withLoader(Doctor);
