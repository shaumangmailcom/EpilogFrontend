import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "../../Pages/Home";
import Match from "../../Pages/Match";
import Medical from "../../Pages/Medical";
import Range from "../../Pages/RangeSlider";
import QA from "../../Pages/StepForm";
import ThankYou from "../../Pages/Thankyou";
import Journey from "../../Pages/JourneyHome";
import MediEnd from "../../Pages/MedicalEndScreen";
import StepEnd from "../../Pages/StepFormEnd";
import MatchThank from "../../Pages/Match/ThankYou";
import MatchEnd from "../../Pages/Match/MatchEnd";
import MatchStart from "../../Pages/Match/MatchStart";



const AppRouting = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/information" element={<QA/>} />
      <Route path="/range" element={<Range/>} />
      <Route path="/thankyou" element={<ThankYou/>} />
      <Route path="/jounrey" element={<Journey/>} />
      <Route path="/medical" element={<Medical/>} />
      <Route path="/mediend" element={<MediEnd/>} />
      <Route path="/stepEnd" element={<StepEnd/>} />
      <Route path="/match" element={<Match/>} />
      <Route path="/matchThank" element={<MatchThank/>} />
      <Route path="/matchEnd" element={<MatchEnd/>} />
      <Route path="/matchStart" element={<MatchStart/>} />

    </Routes>
  </Router>
)
export default AppRouting;