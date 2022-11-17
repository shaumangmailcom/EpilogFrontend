import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import ShareModule from "../../Pages/ShareModule";
import Range from "../../Pages/RangeSlider";
import QA from "../../Pages/StepForm";
import ThankYou from "../../Pages/Thankyou";
import Journey from "../../Pages/JourneyHome";
import WishesEnd from "../../Pages/Wishes/End";
import StepEnd from "../../Pages/StepFormEnd";
import ShareThank from "../../Pages/ShareModule/ThankYou";
import ShareEnd from "../../Pages/ShareModule/ShareEnd";
import ShareStart from "../../Pages/ShareModule/ShareStart";
import Wishes from "../../Pages/Wishes";
import TypeOfPerson from "../../Pages/Wishes/TypeOfPerson";
import WishesStart from "../../Pages/Wishes/Start";
import ComplexSituation from "../../Pages/Wishes/ComplexSituation";
import ShareComplex from "../../Pages/ShareModule/ShareComplex";
import LastPhase from "../../Pages/LastPhase";
import { useDispatch, useSelector } from "react-redux";
import { asyncCreate_FetchUser } from "../../store/actions/user";
import Doctor from "../../Pages/Doctor";
import Steps from "../../Pages/Doctor/Steps";
import DMeeting from "../../Pages/Doctor/Meeting";
import AddQuestion from "../../Pages/Doctor/AddQuestion";
import Prepare from "../../Pages/Doctor/DoctorModule/Prepare";
import ManageConversation from "../../Pages/Doctor/DoctorModule/ManageConversation";
import Treatment from "../../Pages/Doctor/DoctorModule/Treatment";
import Reviewing from "../../Pages/Doctor/DoctorModule/Reviewing";
import PreparationKit from "../../Pages/Doctor/DoctorModule/PreparationKit";
import Done from "../../Pages/Doctor/DoctorModule/Done";
// import { asyncGetQuestions } from "../../store/actions/doctor";
import Welcome from "../../Pages/Welcome";
import Page404 from "../../Pages/Error/404";
import EndPage from "../../Pages/EndPage";
import Completed from "../../Pages/Completed";

const AppRouting = () => {
  const deviceId = useSelector((state) => state.user.deviceId);

  const dispatch = useDispatch();
  useEffect(() => {
    if (deviceId) {
      dispatch(asyncCreate_FetchUser());
      // dispatch(asyncGetQuestions()); // for doctor modules
    }
  }, [dispatch, deviceId]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/basic" element={<QA />} />
        <Route path="/stepEnd" element={<StepEnd />} />
        <Route path="/range" element={<Range />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/share-start" element={<ShareStart />} />
        <Route path="/share" element={<ShareModule />} />
        <Route path="/share-thank" element={<ShareThank />} />
        <Route path="/share-end" element={<ShareEnd />} />
        <Route path="/shair-complex" element={<ShareComplex />} />
        <Route path="/wishes-start" element={<WishesStart />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/wishes-person" element={<TypeOfPerson />} />
        <Route path="/wishes-end" element={<WishesEnd />} />
        <Route path="/complex-situation" element={<ComplexSituation />} />
        <Route path="/feedback" element={<LastPhase />} />
        <Route path="/end-page" element={<EndPage />} />
        {/* <Route path="/doctor" element={<Doctor />} />
        <Route path="/pre-appointment" element={<DMeeting />} />
        <Route path="/appointment-questions" element={<Steps />} />
        <Route path="/add-appointment-question" element={<AddQuestion />} />
        <Route path="/prepare" element={<Prepare />} />
        <Route path="/reviewing" element={<Reviewing />} />
        <Route path="/manage-conversation" element={<ManageConversation />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/preparation-kit" element={<PreparationKit />} />
        <Route path="/done" element={<Done />} /> */}
        <Route path="/completed" element={<Completed />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};
export default AppRouting;
