import { changeBackground, updateMain, createForecastCards, updateHourlyForecast, clearDivs, fillRight } from "./display";
import "./index.css";

async function fetchWeather(location){
  const url = "http://api.weatherapi.com/v1/forecast.json?key=9c2ad25236a44696842231440232806" + `&q=${location}` + `&days=${5}`;
  const options = {
    mode: "cors",
    options:"GET"
  };

  const response = await fetch(url, options);
  if (response.ok){
    const data = await response.json();
    return data;
  }else{
    throw console.error("");
  }
}

fetchWeather("millbrae")
  .then(data => {
    console.log(data);
    document.querySelector("#location").value = data.location.name + ", " + data.location.region;
    clearDivs();
    changeBackground(data);
    updateMain(data);
    fillRight(data.current);
    createForecastCards(data.forecast.forecastday);
    updateHourlyForecast(data.forecast.forecastday[0].hour);
  }
);

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const location = document.getElementById("location").value;
  fetchWeather(location)
    .then(data => {
      document.querySelector("#location").value = data.location.name + ", " + data.location.region;
      clearDivs();
      changeBackground(data);
      updateMain(data);
      fillRight(data.current);
      createForecastCards(data.forecast.forecastday);
      updateHourlyForecast(data.forecast.forecastday[0].hour);
    }
  );
});
