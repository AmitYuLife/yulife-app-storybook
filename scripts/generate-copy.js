const http = require("https");
const fs = require("fs");
const path = require("path");
const url =
    "https://docs.google.com/spreadsheets/d/1ufIoy957My6bNmYyOrswTFDItkqUi6DPxSCKbfSsYwk/export?format=csv&id=1ufIoy957My6bNmYyOrswTFDItkqUi6DPxSCKbfSsYwk&gid=0";
const file = fs.createWriteStream("data.csv");
const csv = require("csvtojson");

http.get(url, response => {
    response.pipe(file);

    setTimeout(() => {
        csv({ output: "line" })
            .fromFile("./data.csv")
            .then(data => {
                const result = {};

                for (const row of data) {
                    const [key, value] = row.split(",");
                    result[key] = value;
                }

                fs.writeFileSync(path.join(__dirname, `../copy-data.json`), JSON.stringify(result));
                fs.unlinkSync("./data.csv");
            });
    }, 500);
});
