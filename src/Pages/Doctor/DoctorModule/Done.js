import React from "react";
import AppButton from "../../../Components/Button";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import { BsCheckCircleFill } from "react-icons/bs";
import styles from "../style.module.scss"

const Done = () => {
  return (
    <DoctorLayout layoutBtn={false}>
      <BsCheckCircleFill size={62} color="#112548" className={styles.dIcon} />
      <p className="title24">
        The email has been sent successfully. You can always forward the email
        you got to other people from your inbox
      </p>
      <AppButton
        title="Back to my journeys"
        height="36px"
        boxMargin="24px auto 0"
      />
    </DoctorLayout>
  );
};

export default Done;
