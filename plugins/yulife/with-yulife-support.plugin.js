const fs = require("fs");
const { withDangerousMod } = require("@expo/config-plugins");

module.exports = (app) => {
  return withDangerousMod(app, [
    "ios",
    async (config) => {
      fs.symlinkSync("../support/ios/Gemfile", "./ios/Gemfile", "file");
      fs.symlinkSync("../support/ios/Gemfile.lock", "./ios/Gemfile.lock", "file");
      fs.symlinkSync("../support/ios/.ruby-version", "./ios/.ruby-version", "file");
      fs.symlinkSync("../support/ios/patches", "./ios/patches", "file");

      return config;
    },
  ]);
};
