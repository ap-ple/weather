const mainWeather = document.querySelector(".weather");

const mainWeatherAddress = mainWeather.querySelector(".address");
const mainWeatherTemperature = mainWeather.querySelector(".temperature");
const mainWeatherDescription = mainWeather.querySelector(".description");

const renderWeather = (weather) => {
   mainWeather.classList.remove("hidden");

   mainWeatherAddress.innerText = weather.resolvedAddress;
   mainWeatherTemperature.innerText = `${weather.currentConditions.temp}°F`;
   mainWeatherDescription.innerText = weather.description;
};

export {renderWeather};