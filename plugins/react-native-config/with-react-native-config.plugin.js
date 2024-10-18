const { withPlugins } = require("@expo/config-plugins");
const withReactNativeConfigAndroidPlugin = require("./with-react-native-config-android.plugin");

module.exports = (app) => {
  return withPlugins(app, [withReactNativeConfigAndroidPlugin]);
};
