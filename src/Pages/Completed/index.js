import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import AppButton from "../../Components/Button";
import AppHeader from "../../Components/Header";
// import DoctorLayout from "../../Components/Layout/DoctorLayout";
import { withLoader } from "../../Components/Loader";

// import { asyncGetQuestions } from "../../store/actions/doctor";
// import { asyncCreate_FetchUser } from "../../store/actions/user";
import { useSelector } from "react-redux";
import journeyImg1 from "../../Assets/images/c1.svg";
import journeyImg2 from "../../Assets/images/journey2.svg";
import styles from "./style.module.scss";

const Completed = () => {
  const navigate = useNavigate();
  const latestTry = useSelector((state) => state.user.latestTry);

  return (
    <div className={styles.medical}>
      <AppHeader back onClickBack={() => navigate("/journey")} />
      {latestTry?.wishes === null ? (
        <div className={styles.header}>
          <p>Sharing with family and friends</p>
          <img alt="" src={journeyImg1} />
        </div>
      ) : (
        <div className={styles.header}>
          <p>Wishes for medical care</p>
          <img alt="" src={journeyImg2} />
        </div>
      )}

      <div style={{ padding: "25px 20px" }}>
        <BsCheckCircleFill size={62} color="#112548" className={styles.dIcon} />
        <p className="title24" style={{ textAlign: "center" }}>
          Thank you for participation
        </p>
      </div>
    </div>
  );
};

export default withLoader(Completed);
