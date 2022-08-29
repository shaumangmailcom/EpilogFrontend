import React from "react";
import AppButton from "../../../Components/Button";
import { CatgCard } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import share from "../../../Assets/images/share.svg";

const Reviewing = () => {
  return (
    <DoctorLayout>
      <p className="title24 mb-5">Be prepared by reviewing your  list of questions</p>
     
      <AppButton
        leftIcon={share}
        title="Share your list of questions"
        width="274px"
        height="36px"
        boxMargin="auto"
      />
      <AppButton
        title="Send me preparation kit"
        width="214px"
        height="36px"
        boxMargin="22px auto 0"
      />
    </DoctorLayout>
  );
};

export default Reviewing;
