import React from "react";
import "./wave.scss";

const Wave = () => {
  return (
    <div className="wave">
      <div className="ocean">
        <div className="oceanWave"></div>
        <div className="oceanWave"></div>
        <div className="oceanWave"></div>
      </div>
      <div className="boat"></div>
    </div>
  );
};

export default Wave;
