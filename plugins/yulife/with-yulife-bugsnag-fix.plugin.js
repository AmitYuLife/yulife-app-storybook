const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      fs.symlinkSync("../scripts/reorder-bugsnag-build-phase.rb", "./ios/reorder-bugsnag-build-phase.rb", "file");

      const podFilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");
      const contents = fs.readFileSync(podFilePath, "utf-8");
      if (!contents.includes("reorder-bugsnag-build-phase.rb")) {
        const splitContents = contents.split(`\n`);
        splitContents.splice(1, 0, `require_relative 'reorder-bugsnag-build-phase.rb'`);

        const newContents = splitContents.join("\n");
        fs.writeFileSync(podFilePath, newContents);
      }

      return config;
    },
  ]);
};
