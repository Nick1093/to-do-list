import axios from "axios";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const GetCurrentWeather = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=817da8d6028c6993e03c06d92f5a0136`
  );

  return response.data;
};

export default GetCurrentWeather;
