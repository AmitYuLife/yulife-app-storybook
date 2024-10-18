const fs = require("fs");
const { withDangerousMod } = require("@expo/config-plugins");

module.exports = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      fs.cpSync("./support/android/samsung-health-data", "./android/samsung-health-data", { recursive: true });

      return config;
    },
  ]);
};
