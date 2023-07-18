import partlycloudydayicon from "./images/partlycloudydayicon.svg";
import cloudyicon from "./images/cloudy.svg";
import overcastIcon from "./images/overcast.svg";
import mistIcon from "./images/mist.svg";
import sunnyIcon from "./images/sunny.svg";
import rainIcon from "./images/rainy.svg";

const degreeSymbol = "\u00B0";

export function createForecastCards(forecastData){
  function createCard(data){
    const code = data.day.condition.code;
    const date = data.date;
    const condition = data.day.condition.text;
    const low = Math.round(data.day.mintemp_f) + degreeSymbol;
    const high = Math.round(data.day.maxtemp_f) + degreeSymbol;

    const card = document.createElement("div");
    card.classList.add("forecast-card");

    const leftDiv = document.createElement("div");
    leftDiv.style.display = "flex";
    leftDiv.style.alignItems = "center";
    leftDiv.style.gap = "10px";
    
    const iconBox = document.createElement("div");
    iconBox.classList.add("icon-box");
    const icon = document.createElement("img");
    let iconURL;
    switch (code){
      case 1000:
        iconURL = sunnyIcon;
        break;
      case 1003:
        iconURL = partlycloudydayicon;
        break;
      case 1006:
        iconURL = cloudyicon;
        break;
      case 1009:
        iconURL = overcastIcon;
        break;
      case 1189:
        iconURL = rainIcon;
        break;
      case 1030:
        iconURL = mistIcon;
        break;
    }
    icon.src = iconURL;
    iconBox.append(icon);
    leftDiv.append(iconBox);

    const dateAndCondition = document.createElement("div");
    dateAndCondition.classList.add("date-condition-box");
    const dateText = document.createElement("p");
    dateText.textContent = date;
    const conditionText = document.createElement("p");
    conditionText.textContent = condition;
    dateAndCondition.append(dateText, conditionText);
    leftDiv.append(dateAndCondition);

    card.append(leftDiv);

    const hiLow = document.createElement("div");
    hiLow.classList.add("date-condition-box");
    const lowText = document.createElement("p");
    lowText.textContent = low;
    const highText = document.createElement("p");
    highText.textContent = high;
    hiLow.append(lowText, highText);
    card.append(hiLow);

    return card;
  }

  const forecastDiv = document.querySelector("#forecast");
  for (let i = 0; i < forecastData.length; i++){
    const newCard = createCard(forecastData[i]);
    forecastDiv.append(newCard);
  }
}

export function changeBackground(data){
  console.log(data);
  const app = document.querySelector("#app");
  const day = data.current.is_day;

  switch(data.current.condition.code){
    case 1000:
      if (day){
        app.className = "day1000";
      }else {
        app.className = "night1000";
      }
      break;
    case 1003:
    case 1006:
      if (day){
        app.className = "partlycloudyday";
      }else{
        app.className = "partlycloudynight";
      }
      break;
    case 1009:
      if (day){
        app.className = "overcastDay";
      }else{
        app.className = "partlycloudynight";
      }
      break;
    case 1030:
      if (day){
        app.className = "mistDay";
      }else{
        app.className = "mistNight";
      }
  }
}

export function updateMain(data){
  const mainDateDisplay = document.querySelector("#topleft p");
  const mainConditionDisplay = document.querySelector("#topleft h1");

  const dateTime = new Date();
  mainDateDisplay.textContent = dateTime.toDateString() + " | " + dateTime.getHours() + ":" + dateTime.getMinutes();
  mainConditionDisplay.textContent = data.current.condition.text;

  return;
}

export function updateHourlyForecast(hourlyArr){
  const forecastDiv = document.querySelector("#hourlyWeather");
  for(let i = 9; i <= 18; i++){
    const dayForecast = hourlyArr[i];

    const time = dayForecast.time.split(" ")[1];
    const timeText = document.createElement("p");
    timeText.textContent = time;
    const condition = dayForecast.condition.code;
    const avgTemp = Math.round(dayForecast.temp_f) + degreeSymbol;
    let iconURL;
    switch (condition){
      case 1000:
        iconURL = sunnyIcon;
        break;
      case 1003:
        iconURL = partlycloudydayicon;
        break;
      case 1006:
        iconURL = cloudyicon;
        break;
      case 1009:
        iconURL = overcastIcon;
        break;  
      case 1030:
        iconURL = mistIcon;
        break;
    }
    
    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hourlyBox")
    hourDiv.appendChild(timeText);
    const iconDiv = document.createElement("img");
    iconDiv.src = iconURL;
    const avgTempDiv = document.createElement("p");
    avgTempDiv.textContent = avgTemp;
    hourDiv.appendChild(iconDiv);
    hourDiv.appendChild(avgTempDiv);

    forecastDiv.appendChild(hourDiv);
  }

}

export function clearDivs(){
  document.querySelector("#topleft p").textContent = "";
  document.querySelector("#topleft h1").textContent = "";
  document.querySelector("#forecast").innerHTML = "";
  document.querySelector("#hourlyWeather").innerHTML = "";
}

export function fillRight(currentWeather){
  const tempF = currentWeather.temp_f;

  document.querySelector("#right h1").textContent = tempF + degreeSymbol + "C";
}