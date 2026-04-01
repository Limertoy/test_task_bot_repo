const fs = require("fs");

module.exports = async function (data) {
    try {
        const json = JSON.parse(fs.readFileSync('./cities.json'));
        const result = json.cities[data.countryId];
        return {
            "result": "ok",
            "cities": result
        };

    } catch (e) {
        return {
            "result": "error",
            "errorMessage": e.message
        };
    }
};
