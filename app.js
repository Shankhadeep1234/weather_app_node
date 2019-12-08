const geoCode = require("./utils/geocode");
const foreCast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geoCode(address, (error, data) => {
    if (error) {
      return console.log(error); //if error func will stop here
    }

    foreCast(data.latitude, data.longitude, (error, foreCastData) => {
      if (error) {
        return console.log(error); //if error func will stop here
      }

      console.log(data.location);
      console.log(foreCastData);
    });
  });
}
