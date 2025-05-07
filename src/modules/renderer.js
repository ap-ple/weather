const mainWeather = document.querySelector("#main-weather");

const mainWeatherAddress = mainWeather.querySelector(".address");
const mainWeatherTemperature = mainWeather.querySelector(".temperature");
const mainWeatherDescription = mainWeather.querySelector(".description");

const renderWeather = (weather) => {
   mainWeatherAddress.innerText = weather.resolvedAddress;
   mainWeatherTemperature.innerText = `${weather.currentConditions.temp}°F`;
   mainWeatherDescription.innerText = weather.description;
};

export {renderWeather};