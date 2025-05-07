const weatherKey = ['2', 'P', 'W', 'H', '9', '4', 'K', 'U', 'D', 'E', 'J', 'Z', 'C', 'E', 'D', '6', 'K', '2', '9', 'Q', 'F', 'P', 'T', 'V', 'D']
.toReversed()
.join("");

const weatherBaseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const getWeatherInLocation = async (location) => {
   const response = await fetch(`${weatherBaseURL}/${location}?key=${weatherKey}`, {
      mode: "cors"
   });
   
   const text = await response.text();

   if (response?.ok) {
      return JSON.parse(text);
   }
   else {
      throw new Error(text);
   }
};

export {getWeatherInLocation};