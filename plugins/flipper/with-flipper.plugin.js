const { withPlugins } = require("@expo/config-plugins");
const withFlipperAndroidPlugin = require("./with-flipper-android.plugin");
const withFlipperIosPlugin = require("./with-flipper-ios.plugin");

module.exports = (app) => {
  return withPlugins(app, [withFlipperAndroidPlugin, withFlipperIosPlugin]);
};
