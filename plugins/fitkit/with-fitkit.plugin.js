const {
  withDangerousMod,
  withMainApplication,
  withPlugins,
  withProjectBuildGradle,
  withAppBuildGradle,
} = require("@expo/config-plugins");
const fs = require("fs");

module.exports = function androiManifestPlugin(app) {
  return withPlugins(app, [
    [mainApplicationPlugin, {}],
    [settingsPlugin, {}],
    [buildGradlePlugin, {}],
    [withAppGradle, {}],
  ]);
};

const CUSTOM_PACKAGES = ["RNFitKitPackage"];
const mainApplicationPlugin = (config) => {
  return withMainApplication(config, (mod) => {
    mod.modResults.contents = mod.modResults.contents.replace(
      /override\s+fun\s+getPackages\(\)[^}]*\}/,
      `override fun getPackages(): List<ReactPackage> {
            val packages: MutableList<ReactPackage> = PackageList(this).packages
            ${CUSTOM_PACKAGES.map((pkg) => `packages.add(${pkg}())`).join("\n")}
        
            return packages;
          }`
    );

    const splitContents = mod.modResults.contents.split(`\n`);
    splitContents.splice(3, 0, `import com.yulife.reactnative.fitkit.RNFitKitPackage`);
    mod.modResults.contents = splitContents.join(`\n`);

    return mod;
  });
};

const buildGradlePlugin = (config) => {
  return withProjectBuildGradle(config, (app) => {
    const splitContents = app.modResults.contents.split(`\n`);
    const extLine = splitContents.findIndex((line) => line.includes(`ext {`));
    const endOfExtLine = splitContents.findIndex((line, index) => index > extLine && line.includes(`}`));
    splitContents.splice(endOfExtLine - 1, 0, `kotlin_version = kotlinVersion`);

    app.modResults.contents = splitContents.join(`\n`);
    return app;
  });
};

const withAppGradle = (config) => {
  return withAppBuildGradle(config, async (app) => {
    const splitContents = app.modResults.contents.split(`\n`);
    const dependenciesLine = splitContents.findIndex((line) => line.includes(`dependencies {`));
    splitContents.splice(
      dependenciesLine + 1,
      0,
      `
         implementation project(':yulife-react-native-fitkit')
          api project(':samsung-health-data')
        `
    );

    app.modResults.contents = splitContents.join(`\n`);

    return app;
  });
};

const settingsPlugin = (config) => {
  return withDangerousMod(config, [
    "android",
    (mod) => {
      const path = `${mod.modRequest.platformProjectRoot}/settings.gradle`;
      const file = fs.readFileSync(path, "utf-8");

      const splitSettings = file.split(`\n`);
      const includeAppLine = splitSettings.findIndex((line) => line.includes(`include ':app'`));

      splitSettings.splice(
        includeAppLine - 1,
        0,
        `include ':yulife-react-native-fitkit'
        project(':yulife-react-native-fitkit').projectDir = new File(rootProject.projectDir, '../node_modules/@yu-life/react-native-fitkit/android')`
      );

      fs.writeFileSync(path, splitSettings.join(`\n`));

      return mod;
    },
  ]);
};
