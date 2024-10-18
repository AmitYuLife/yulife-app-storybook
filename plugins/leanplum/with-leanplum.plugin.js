const { withPlugins } = require("@expo/config-plugins");
const withLeanplumAndroidPlugin = require("./with-leanplum-android.plugin");
const withLeanplumIosPlugin = require("./with-leanplum-ios.plugin");

module.exports = (app) => {
  return withPlugins(app, [withLeanplumAndroidPlugin, withLeanplumIosPlugin]);
};
