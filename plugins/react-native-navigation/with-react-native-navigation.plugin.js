const { withPlugins } = require("@expo/config-plugins");
const withReactNativeNavigationAndroidPlugin = require("./with-react-native-navigation-android.plugin");
const withReactNativeNavigationIosPlugin = require("./with-react-native-navigation-ios.plugin");

module.exports = (app) => {
  return withPlugins(app, [withReactNativeNavigationAndroidPlugin, withReactNativeNavigationIosPlugin]);
};
