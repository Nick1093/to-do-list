import React, { useState } from "react";

function GetWeather({ onSubmit }) {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
    // console.log(location);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(location);
    onSubmit(location);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Where do you want to get the for weather today?</label>
        <input onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default GetWeather;
