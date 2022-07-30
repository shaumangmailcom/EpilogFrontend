import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "../../Pages/Home";
import Range from "../../Pages/RangeSlider";
import QA from "../../Pages/StepForm";



const AppRouting = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/" element={<QA/>} /> */}
      {/* <Route path="/" element={<Range/>} /> */}

    </Routes>
  </Router>
)
export default AppRouting;