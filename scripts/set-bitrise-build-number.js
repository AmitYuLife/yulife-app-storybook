const path = require("path");
const fs = require("fs");

(function readWriteSync() {
    if (!!process.env.ENVFILE) {
        const data = fs.readFileSync(path.join(__dirname, "../", process.env.ENVFILE), "utf-8");

        const newValue = data.replace("$BITRISE_BUILD_NUMBER", process.env.BITRISE_BUILD_NUMBER || "9999");

        fs.writeFileSync(path.join(__dirname, "../", process.env.ENVFILE), newValue, "utf-8");

        console.log(`Bitrise build number added successfully to ${process.env.ENVFILE}`);
    } else {
        console.log("No env file provided.");
    }
})();
