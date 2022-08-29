import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import AppButton from "../../Components/Button";
import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";
import styles from "./style.module.scss";

const AddQuestion = () => {
  return (
    <DoctorLayout layoutBtn={false}>
      <p className="title24 my-5">Add a question</p>
      <div className="textArea">
        <Form.Control as="textarea" placeholder="Type here..." rows={3} />
      </div>
      <AppButton
        title="Add question and review my list"
        height="36px"
        width="286px"
        boxMargin="52px auto 0"
      />
      <AppButton
        title="Save and add another question"
        height="36px"
        width="286px"
        boxMargin="32px auto 0"
      />
      <AppButton
        className={styles.addQbtn}
        title="Cancel"
        height="36px"
        boxMargin="28px auto 0"
        color="#1125486B"
      />
    </DoctorLayout>
  );
};

export default withLoader(AddQuestion);
