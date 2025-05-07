import { getWeatherInLocation } from "./modules/weather";

const LOCATION_FORM_SUBMIT_MILLISECOND_DELAY = 1500;

const locationForm = document.querySelector("#location");

let locationFormSubmitTimeout;

locationForm.addEventListener("input", (event) => {
   clearTimeout(locationFormSubmitTimeout);

   locationFormSubmitTimeout = setTimeout(() => {
      locationForm.requestSubmit();
   }, LOCATION_FORM_SUBMIT_MILLISECOND_DELAY);
});

locationForm.addEventListener("submit", (event) => {
   event.preventDefault();

   clearTimeout(locationFormSubmitTimeout);

   const locationFormData = new FormData(locationForm);
   
   const location = locationFormData.get("location");
   
   if (!location) {
      return;
   }

   const locationFormFieldset = locationForm.querySelector("fieldset");
   
   locationFormFieldset.disabled = true;
         
   getWeatherInLocation(location)
   .then((result) => {
      console.log(result.resolvedAddress);
      console.log(result.description);
   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => {
      locationFormFieldset.disabled = false;
   });
});