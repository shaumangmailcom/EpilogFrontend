import React from 'react';
import logo from "../../Assets/images/logo.svg"
import left from "../../Assets/images/left.svg"

const AppHeader = ({back}) => {
  return (
    <div className="header">
      {back && <img src={left} className="back" />}
      <img src={logo} className="logo" />
    </div>
  );
}

export default AppHeader;
