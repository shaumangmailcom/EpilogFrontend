import React from "react";
import logo from "../../Assets/images/logo.svg";
import left from "../../Assets/images/left.svg";

const AppHeader = ({ back, onClickBack }) => {
  return (
    <div className="header">
      {back && (
        <span onClick={onClickBack}>
          <img src={left} className="back" />
        </span>
      )}
      <img src={logo} className="logo" />
    </div>
  );
};

export default AppHeader;
