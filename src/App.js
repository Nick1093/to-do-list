import React, { useState } from "react";
import Input from "./Components/Input";
import GetWeather from "./Components/GetWeather";
import GenerateGeocode from "./GeocodeAPI";
import GetCurrentWeather from "./WeatherAPI";
import DisplayWeatherInfo from "./Components/DisplayWeatherInfo";

function App() {
  const [temp, setTemp] = useState({});
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const getGeocode = async (location) => {
    // console.log(`location is: ${location}`);
    const geocode = await GenerateGeocode(location);
    // console.log(geocode.lat);
    const latis = geocode.lat;
    const lonis = geocode.lon;
    // console.log(latis);
    setLat(latis);
    setLon(lonis);
    // console.log(`Lat and lon are: ${lat}, ${lon}`);
    generateWeather(lat, lon);
  };

  const generateWeather = async (lat, lon) => {
    const weather = await GetCurrentWeather(lat, lon);
    // console.log(weather);
    const main = weather.main;
    setTemp(main);
    // console.log(temp);
    // console.log(temp.feels_like);
  };

  return (
    <>
      <h1 style={{ marginTop: "120px", textAlign: "center" }}>My To-do List</h1>
      <Input />

      {/* API Call Practice Area */}
      <GetWeather onSubmit={getGeocode}></GetWeather>
      <DisplayWeatherInfo temperature={temp}></DisplayWeatherInfo>
    </>
  );
}

export default App;
