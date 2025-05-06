const weatherKey = ['D', 'V', 'T', 'P', 'F', 'Q', '9', '2', 'K', '6', 'D', 'E', 'C', 'Z', 'J', 'E', 'D', 'U', 'K', '4', '9', 'H', 'W', 'P', '2']
.join("");

const weatherBaseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const weatherInLocation = async (location) => {
   const response = await fetch(`${weatherBaseURL}/${location}?key=${weatherKey}`, {
      mode: "cors"
   });
   
   const text = await response.text();
   
   let json;

   try {
      json = JSON.parse(text);
   }
   catch (error) {
      throw new Error(text);
   }

   return json;
};

export {weatherInLocation};