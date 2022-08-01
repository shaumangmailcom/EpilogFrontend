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



const AppRouting = () => (
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      {/* <Route path="/" element={<QA/>} /> */}
      {/* <Route path="/" element={<Range/>} /> */}
      {/* <Route path="/" element={<Match/>} /> */}
      <Route path="/" element={<Medical/>} />

    </Routes>
  </Router>
)
export default AppRouting;