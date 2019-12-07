const geoCode = require("./utils/geocode");

// const url =
//   "https://api.darksky.net/forecast/589b6aa74c3e850dd696da54005d9162/37.8267,-122.4233?lang=en";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.code) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       `${response.body.daily.data[0].summary}It's currently ${response.body.currently.temperature} degrees out there. There is a ${response.body.currently.precipProbability}% chance of rain`
//     );
//   }
// });

//Geocoding
// const geoCodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Kolkata.json?access_token=pk.eyJ1Ijoic2hhbmtoYWRlZXAiLCJhIjoiY2szdnBlYjVuMGE4MTNkcGhmbWoyYjJoNiJ9.SXzZKasz1Sx5APlg1CMhKg&lomit=1";

// request({ url: geoCodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location service");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find the location find another search");
//   } else {
//     const latitude = response.body.features[0].center[0];
//     const longitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

geoCode("Kolkata", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
