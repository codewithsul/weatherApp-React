import React from "react";
import "./weather.css";

const weather = (props) => {
  return (
    <>
      <div className="name">{props.location}</div>
      <div className="weatherwrap">
        <div className="Temp">
          <h6>Temperature</h6>
          <h5>{props.temp}K</h5>
        </div>
        <div className="sky">
          <h6>Pressure</h6>
          <h5>{props.pressure}hPa</h5>
        </div>
        <div className="Humidity">
          <h6>Humidity</h6>
          <h5>{props.humidity}%</h5>
        </div>
        <div className="Wind">
          <h6>Wind Speed</h6>
          <h5>{props.speed}m/s</h5>
        </div>
      </div>
      <div className="foot">codewithsul|2022</div>
    </>
  );
};

export default weather;
