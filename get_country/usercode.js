const fs = require("fs");
const path = require("path");

module.exports = async function (data) {
    try {
        const filePath = path.join(__dirname, '../countries_cities.json');
        const json = JSON.parse(fs.readFileSync(filePath));

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
