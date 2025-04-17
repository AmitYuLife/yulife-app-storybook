const {
  withAndroidManifest,
  withPlugins,
  withMainActivity,
  withAppBuildGradle,
  withDangerousMod,
} = require("@expo/config-plugins");

const fs = require("fs");
module.exports = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      fs.copyFileSync("./support/android/debug.keystore", "./android/app/debug.keystore");
      return config;
    },
  ]);
};
