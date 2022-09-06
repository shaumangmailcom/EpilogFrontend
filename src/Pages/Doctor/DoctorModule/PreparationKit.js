import React from "react";
import AppButton from "../../../Components/Button";
import { TextSec } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import { withLoader } from "../../../Components/Loader";
import { AppInput } from "../../../Components/SmallComponents";
import styles from "../style.module.scss";

const PreparationKit = () => {
  return (
    <DoctorLayout layoutBtn={false}>
      <p className="title24 mb-5">Add your email to get a preparation kit </p>
      <AppInput
        as="input"
        placeholder="Your email here"
        error="Error message"
      />
      <p className="title24 my-5">
        Add your loved one’s email and send them your list of questions
      </p>
      <AppInput as="input" placeholder="Add your loved one email here " />
      <div className={styles.prepkitBtns}>
        <AppButton
          title="Maybe later"
          width="138px"
          height="39px"
          className={styles.mbBtn}
          color="#4059AD"
          boxMargin="0"
          hrefLink="/done"
        />
        <AppButton
          hrefLink="/done"
          title="Send"
          width="138px"
          height="39px"
          boxMargin="0"
        />
      </div>
      <TextSec
        margin="52px 0 0"
        textAlign="center"
        text={
          <span>
            <span style={{ fontFamily: "heebo700" }}>Tip: </span>You can always
            take a screenshot and share a picture in WhatsApp
          </span>
        }
      />
    </DoctorLayout>
  );
};

export default withLoader(PreparationKit);
