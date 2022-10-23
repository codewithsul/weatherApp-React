import React from "react";
import "./search.css";
import Weather from "../weatherdata/Weather";

const search = () => {
  return (
    <>
      <div className="field">
        <input id="textfield" type="text" placeholder="Enter City Name"></input>
      </div>
      <Weather />
    </>
  );
};

export default search;
