import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "../../Pages/Home";
import Range from "../../Pages/RangeSlider";
import QA from "../../Pages/StepForm";
import ThankYou from "../../Pages/Thankyou";
import Journey from "../../Pages/JourneyHome";



const AppRouting = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/information" element={<QA/>} />
      <Route path="/range" element={<Range/>} />
      <Route path="/thankyou" element={<ThankYou/>} />
      <Route path="/jounrey" element={<Journey/>} />

    </Routes>
  </Router>
)
export default AppRouting;