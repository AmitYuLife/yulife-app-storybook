/**
 * Example call:
 * node scripts/replace-package-versionCodes.js 1234
 */

var path = require("path");
var fs = require("fs");

var args = process.argv.slice(2);
var versionCode = args[0];

//Read data
var packageFile = path.join(__dirname, "..", "package.json");
var data = require(packageFile);
var currentVersion = data.version.split(".");

if (currentVersion.length !== 3) {
    console.log("Returning, version code pieces less than 3", data.version);
    return;
}

if (isNaN(Number(versionCode))) {
    throw new Error("Not a number!");
}

//Manipulate data
data.versionCode = Number(versionCode)


if (versionCode > 1000000) {
    throw new Error("Version code is too high");
}

currentVersion[2] = data.versionCode;
data.version = currentVersion.join(".");

//Output data
const toWrite = JSON.stringify(data, null, 2);
fs.writeFileSync(packageFile, toWrite);

console.log("Written file!");