import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [location, setLocation] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = `632a5d0f15a7053d4f021e44e4d50ed0`;
    let units = "imperial";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  function updateLocation(event) {
    event.preventDefault();
    setLocation(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateLocation}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded)
    return (
      <div>
        {form}
        <ul>
          <li>It's currently {Math.round(weather.temperature)}°F</li>
          <li>{weather.description}</li>
          <li>Humidity is: {Math.round(weather.humidity)}%</li>
          <li>The wind is:{weather.wind} mph</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  else {
    return form;
  }
}
