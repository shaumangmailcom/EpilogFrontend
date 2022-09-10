import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AppButton from "../../../Components/Button";
import { TextSec } from "../../../Components/Cards";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import { withLoader } from "../../../Components/Loader";
import { AppInput } from "../../../Components/SmallComponents";
import { asyncCreateDoctor } from "../../../store/actions/doctor";
import { setDoctorState } from "../../../store/reducers/doctor";
import styles from "../style.module.scss";

const PreparationKit = (props) => {
  const { state } = useLocation();
  const { email } = state ?? {};
  const [error, setError] = useState({ email1: null, email2: null });
  const doctorState = useSelector((s) => s.doctor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = useCallback(async () => {
    if ([1, 2].includes(email) && !doctorState["email" + email]) {
      return setError((s) => ({
        ...s,
        [`email${email}`]: "Enter Email ",
      }));
    }
    const { success , message } = await dispatch(asyncCreateDoctor()).unwrap();
    if (success) {
      navigate("/done");
    }else { 
      alert (message || 'Error while saving data!')
    }
  }, [navigate, email, doctorState, dispatch]);
  return (
    <DoctorLayout layoutBtn={false}>
      <p className="title24 mb-5">Add your email to get a preparation kit </p>
      <AppInput
        as="input"
        placeholder="Your email here"
        error={error.email1}
        value={doctorState.email1 ?? ""}
        onChange={({ target: { value } }) => {
          dispatch(setDoctorState({ email1: value }));
          if (error.email1)
            setError((s) => ({
              ...s,
              email1: null,
            }));
        }}
      />
      <p className="title24 my-5">
        Add your loved one’s email and send them your list of questions
      </p>
      <AppInput
        as="input"
        placeholder="Add your loved one email here "
        error={error.email2}
        value={doctorState.email2 ?? ""}
        onChange={({ target: { value } }) => {
          dispatch(setDoctorState({ email2: value }));
          if (error.email2)
            setError((s) => ({
              ...s,
              email2: null,
            }));
        }}
      />
      <div className={styles.prepkitBtns}>
        {!!email ? (
          <AppButton
            title="Maybe later"
            width="138px"
            height="39px"
            className={styles.mbBtn}
            color="#4059AD"
            boxMargin="0"
            hrefLink="/prepare"
          />
        ) : (
          <div></div>
        )}
        <AppButton
          // hrefLink="/done"
          title="Send"
          width="138px"
          height="39px"
          boxMargin="0"
          onClick={submit}
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
