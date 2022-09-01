import React from "react";
import AppButton from "../../../Components/Button";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";

const Done = () => {
  return (
    <DoctorLayout>
      <p className="title24 mb-5">Your preparation kit is on it’s way!</p>
        <AppButton
          title="Back to my journeys" 
          height="36px"
          boxMargin="52px auto 0"
        />
    </DoctorLayout>
  );
};

export default Done;
