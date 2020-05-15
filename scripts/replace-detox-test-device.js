const path = require("path");
const fs = require("fs");
const pkg = require("../package.json");

const [_, __, deviceName] = process.argv;

if (!deviceName) {
    console.log("No device name set, skipping");
    return;
}

pkg.detox.configurations["ios.sim.release"].name = deviceName;

var packageFile = path.join(__dirname, "..", "package.json");
const toWrite = JSON.stringify(pkg, null, 2);
fs.writeFileSync(packageFile, toWrite);

console.log(`Updated package.json detox config to run against ${deviceName}`);