import React from "react";
import "./search.css";
import Weather from "../weatherdata/Weather";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Search = () => {
  const [Temp, setTemp] = useState("");
  const [speed, setSpeed] = useState("");
  const [pressure, setPressure] = useState("");
  const [humi, setHumi] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=620219b682a4e7d867d69c80f5631303`;

  const handleChange = (event) => {
    const city = event.target.value;
    setLocation(city);
  };

  const GetWeatherData = () => {
    axios
      .get(url)
      .then((response) => {
        const weatherinfo = response.data;
        const { temp } = response.data.main;
        const { pressure } = response.data.main;
        const { speed } = response.data.wind;
        const { humidity } = response.data.main;
        const { name } = response.data;
        console.log(weatherinfo);
        setTemp(temp);
        setSpeed(speed);
        setPressure(pressure);
        setHumi(humidity);
        setName(name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="field">
        <input
          onChange={handleChange}
          id="textfield"
          type="text"
          placeholder="Enter City Name"
        ></input>
      </div>
      <div className="button">
        <button className="btn" onClick={GetWeatherData}>
          Request
        </button>
      </div>

      <Weather
        temp={Temp}
        pressure={pressure}
        speed={speed}
        humidity={humi}
        name={name}
        location={location}
      />
    </>
  );
};

export default Search;
