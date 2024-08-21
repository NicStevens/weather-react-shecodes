import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function displayWeather(response) {
    setLoaded(true);
    setWeather(
      <ul>
        <li>Temperture: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/hr</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </li>
      </ul>
    );
  }

  function citySubmit(event) {
    event.preventDefault();
    let apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
    let apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(citySubmit);
  }

  let form = (
    <form onSubmit={citySubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        {weather}
      </div>
    );
  } else {
    return form;
  }
}
