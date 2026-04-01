const fs = require("fs");

module.exports = async function (data) {
  try {
    const json = JSON.parse(fs.readFileSync("./cities.json"));
    const result = json.cities[data.countryId];

    data.response = {
      result: "ok",
      cities: result,
    };
  } catch (e) {
    data.response = {
      result: "error",
      errorMessage: e.message,
    };
  }

  return data;
};
