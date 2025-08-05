const { withPlugins } = require("@expo/config-plugins");
const withRiveIos = require("./with-rive-ios.plugin");
const withRiveAndroid = require("./with-rive-android.plugin");

module.exports = (app) => {
  return withPlugins(app, [withRiveIos, withRiveAndroid]);
};
