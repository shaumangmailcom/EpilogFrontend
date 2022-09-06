import React from "react";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import tcare from "../../Assets/images/tcare.svg";
import AppButton from "../../Components/Button";
import styles from "./style.module.scss";
import { withLoader } from "../../Components/Loader";

const DMeeting = () => {
  return (
    <DoctorLayout layoutBtn={false}>
      <div className={styles.meetingSec}>
        <img src={tcare} className={styles.banner} alt="" />
        <p className="title24">Ahead of the meeting</p>
        <p className="desc18">
          One of the most effective ways to overcome forgetting or foregoing to
          ask our doctors important questions, is writing down these questions
          before the appointment. There is no reason to rely on our memory here.
        </p>
        <AppButton
          title="Let’s go"
          height="36px"
          width="135px"
          borderRadius="18px"
          boxMargin="80px auto 0"
          hrefLink="/appointment-questions"
          //   onClick={nextPage}
        />
      </div>
    </DoctorLayout>
  );
};

export default withLoader(DMeeting);
