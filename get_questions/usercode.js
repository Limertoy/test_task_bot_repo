const fs = require("fs");

module.exports = async function (data) {
  try {
    const json = JSON.parse(fs.readFileSync("./questions.json"));

    const result = json.texts;

    data.response = {
      result: "ok",
      questions: result,
    };
  } catch (e) {
    data.response = {
      result: "error",
      errorMessage: e.message,
    };
  }

  return data;
};
