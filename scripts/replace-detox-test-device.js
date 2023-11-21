const path = require("path");
const fs = require("fs");
const config = require("../.detoxrc.json")

const [_, __, deviceName] = process.argv;

if (!deviceName) {
  console.log("No device name set, skipping");
  return;
}

config.devices["ios.simulator"].device["type"] = deviceName

var configFile = path.join(__dirname, "..", ".detoxrc.json");
const toWrite = JSON.stringify(config, null, 2);
fs.writeFileSync(configFile, toWrite);

console.log(`Updated .detoxrc.json to run against ${deviceName}`);
