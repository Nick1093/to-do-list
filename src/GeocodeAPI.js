import React from "react";
import axios from "axios";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//817da8d6028c6993e03c06d92f5a0136

const GenerateGeocode = async (city) => {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=817da8d6028c6993e03c06d92f5a0136`
  );
  return response.data[0];
};

export default GenerateGeocode;
