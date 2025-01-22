const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = (config) => {
  return withAppBuildGradle(config, (app) => {
    const splitContents = app.modResults.contents.split(`\n`);
    const androidLine = splitContents.findIndex((line) => line.includes(`android {`));

    splitContents.splice(
      androidLine + 1,
      0,
      `splits {
        abi {
            reset()
            enable true
            universalApk false
            include "armeabi-v7a", "arm64-v8a", "x86", "x86_64"
        }
    }`
    );

    app.modResults.contents = splitContents.join(`\n`);

    return app;
  });
};
