import React from "react";

function DisplayWeatherInfo({ temperature }) {
  return (
    <>
      <h1>Feels Like: {temperature.feels_like}</h1>
      <h1>Actual: {temperature.temp}</h1>
      <h1>Max: {temperature.temp_max}</h1>
      <h1>Mins: {temperature.temp_min}</h1>
    </>
  );
}

export default DisplayWeatherInfo;
