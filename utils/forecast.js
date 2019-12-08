const request = require("request");

const foreCast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/589b6aa74c3e850dd696da54005d9162/${latitude},${longitude}?lang=en`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.code) {
      callback("Unable to find location", undefined);
    } else {
      const temp = response.body.currently.temperature;
      const celTemp = Math.floor(((temp - 32) * 5) / 9);
      callback(
        undefined,
        `${response.body.daily.data[0].summary}It's currently ${celTemp} degrees out there. There is a ${response.body.currently.precipProbability}% chance of rain`
      );
    }
  });
};

module.exports = foreCast;
