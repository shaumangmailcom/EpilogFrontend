import React from "react";
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
import WishesStart from "../../Pages/Wishes/Start";
import ComplexSituation from "../../Pages/Wishes/ComplexSituation";
import ShairComplex from "../../Pages/ShareModule/ShairComplex";
import LastPhase from "../../Pages/LastPhase";

const AppRouting = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basic" element={<QA />} />
      <Route path="/stepEnd" element={<StepEnd />} />
      <Route path="/range" element={<Range />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/share-start" element={<ShareStart />} />
      <Route path="/share" element={<ShareModule />} />
      <Route path="/share-thank" element={<ShareThank />} />
      <Route path="/share-end" element={<ShareEnd />} />
      <Route path="/shair-complex" element={<ShairComplex />} />
      <Route path="/wishes-start" element={<WishesStart />} />
      <Route path="/wishes" element={<Wishes />} />
      <Route path="/wishes-end" element={<WishesEnd />} />
      <Route path="/complex-situation" element={<ComplexSituation />} />
      <Route path="/phase" element={<LastPhase />} />
    </Routes>
  </Router>
);
export default AppRouting;
