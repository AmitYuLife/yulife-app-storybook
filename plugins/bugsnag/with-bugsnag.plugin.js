const { withPlugins } = require("@expo/config-plugins");
const bugsnagAndroidPlugin = require("./with-bugsnag-android.plugin");
const bugsnagIosPlugin = require("./with-bugsnag-ios.plugin");

module.exports = (app) => {
  return withPlugins(app, [bugsnagAndroidPlugin, bugsnagIosPlugin]);
};
