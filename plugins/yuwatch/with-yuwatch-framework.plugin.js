const { withXcodeProject } = require("@expo/config-plugins");
const fs = require("fs");
const xcode = require("xcode");

module.exports = (config) => {
  return withXcodeProject(config, async (newConfig) => {
    try {
      const projectName = newConfig.modRequest.projectName;
      const bundleId = config.ios?.bundleIdentifier || "";
      const widgetBundleId = `${bundleId}.widget`;

      const projPath = `${newConfig.modRequest.platformProjectRoot}/${projectName}.xcodeproj/project.pbxproj`;
      await updateXCodeProj(projPath, widgetBundleId);
      return newConfig;
    } catch (e) {
      console.error(e);
      throw e;
    }
  });
};

async function updateXCodeProj(projPath) {
  const xcodeProject = xcode.project(projPath);
  xcodeProject.parse(() => {
    xcodeProject.addFramework("WatchConnectivity.framework");

    fs.writeFileSync(projPath, xcodeProject.writeSync());
  });
}
