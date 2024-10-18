const { withPlugins } = require("@expo/config-plugins");
const withIntercomAndroidPlugin = require("./with-intercom-android.plugin");
const withIntercomIosPlugin = require("./with-intercom-ios.plugin");

module.exports = (app) => {
  return withPlugins(app, [withIntercomAndroidPlugin, withIntercomIosPlugin]);
};
