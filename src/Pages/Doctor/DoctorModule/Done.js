import React, { useCallback } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppButton from "../../../Components/Button";
import DoctorLayout from "../../../Components/Layout/DoctorLayout";
import { withLoader } from "../../../Components/Loader";
import { asyncGetQuestions } from "../../../store/actions/doctor";
import { asyncCreate_FetchUser } from "../../../store/actions/user";
import styles from "../style.module.scss";

const Done = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadUser = useCallback(() => {
    dispatch(asyncCreate_FetchUser());
    dispatch(asyncGetQuestions());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <DoctorLayout onClickBack={loadUser} layoutBtn={false}>
      <BsCheckCircleFill size={62} color="#112548" className={styles.dIcon} />
      <p className="title24">
        The email has been sent successfully. You can always forward the email
        you got to other people from your inbox
      </p>
      <AppButton
        title="Back to my journeys"
        height="36px"
        boxMargin="24px auto 0"
        // hrefLink="/journey"
        onClick={loadUser}
      />
    </DoctorLayout>
  );
};

export default withLoader(Done);
