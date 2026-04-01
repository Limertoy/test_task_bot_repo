const fs = require("fs");

module.exports = async function (data) {
  try {
    const json = JSON.parse(fs.readFileSync("./countries.json"));

    const result = json.countries.filter(
      (p) => p.name.charAt(0).toLowerCase() === data.letter.toLowerCase(),
    );

    if (result.length === 0)
      data.response = {
        result: "not_found",
        countries: [],
      };
    else
      data.response = {
        result: "ok",
        countries: result,
      };
  } catch (e) {
    data.response = {
      result: "error",
      errorMessage: e.message,
    };
  }

  return data;
};
