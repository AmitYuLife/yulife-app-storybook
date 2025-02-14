const plugins = require("@expo/config-plugins");
const fs = require("fs");
const xcode = require("xcode");

module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const projectName = config.modRequest.projectName;
      const projPath = `${config.modRequest.platformProjectRoot}/${projectName}.xcodeproj/project.pbxproj`;

      const xcodeProject = xcode.project(projPath);
      xcodeProject.parseSync();
      xcodeProject.addFramework("WatchConnectivity.framework");
      fs.writeFileSync(projPath, xcodeProject.writeSync());

      return config;
    },
  ]);
};
