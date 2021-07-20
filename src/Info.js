import React from "react";
// IMAGES
import bg from "./assets/images/bginfo.svg";
import currencyBG from "./assets/images/currency-exchange-info.svg";
import github from "./assets/images/github.svg";
import flaticon from "./assets/images/flaticon.svg";
import nbp from "./assets/images/nbp.svg";
// STYLES
import "./styles/info.scss";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-wrapper">
        <img src={currencyBG} alt="logo" />
        <h1>Currency APP</h1>
      </div>
      <div className="info-logos">
          <img src={flaticon} alt="Flaticon" />
          <img src={nbp} alt="NBP Bank Polski" />
      </div>
      <div className="info-details">
          <img src={github} alt="github" />
          <p>github.com/arturowsky</p>
      </div>
      
    </div>
  );
};

export default Info;
