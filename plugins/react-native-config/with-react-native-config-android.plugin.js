const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = (config) => {
  return withAppBuildGradle(config, (app) => {
    const splitContents = app.modResults.contents.split(`\n`);

    const reactLine = splitContents.findIndex((line) => line.includes(`react {`));
    splitContents.splice(
      reactLine,
      0,
      `
        project.ext.envConfigFiles = [
          debug     : ".env",
          local     : ".env.local",
          uat       : ".env.uat",
          production: ".env.production"
        ]
        apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"`
    );

    const defaultConfigLine = splitContents.findIndex((line) => line.includes(`defaultConfig {`));
    splitContents.splice(
      defaultConfigLine + 1,
      0,
      `manifestPlaceholders = [BUGSNAG_API_KEY: project.env.get("BUGSNAG_API_KEY"), ENV: project.env.get("ENV")]`
    );

    app.modResults.contents = splitContents.join(`\n`);

    return app;
  });
};
