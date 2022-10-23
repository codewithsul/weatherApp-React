import React from "react";
import "./weather.css";

const weather = () => {
  return (
    <div className="weatherwrap">
      <div className="Temp">
        <h6>Temperature</h6>
        <h5>65 &#176; F</h5>
      </div>
      <div className="sky">
        <h6>Clear</h6>
      </div>
      <div className="Humidity">
        <h6>Humidity</h6>
      </div>
      <div className="Wind">
        <h6>Wind</h6>
      </div>
    </div>
  );
};

export default weather;
