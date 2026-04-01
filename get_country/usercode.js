const fs = require("fs");

module.exports = async function (data) {
    try {
        const json = JSON.parse(fs.readFileSync('../countries_cities.json'));

        const result = json.countries.filter(p => (p.name.charAt(0).toLowerCase() === data.letter.toLowerCase()));
        return {
            "result": "ok",
            "countries": result
        };

    } catch (e) {
        return {
            "result": "error",
            "errorMessage": e.message
        };
    }
};
