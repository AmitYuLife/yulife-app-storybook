const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = (config) => {
  return withAppBuildGradle(config, (app) => {
    const resolutionStrategy = `
configurations.all {
    resolutionStrategy {
        force 'androidx.core:core:1.16.0'
        force 'androidx.core:core-ktx:1.16.0'
    }
}
`;

    app.modResults.contents = resolutionStrategy + app.modResults.contents;

    return app;
  });
};
