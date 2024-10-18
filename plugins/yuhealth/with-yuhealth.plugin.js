const withYuhealthAndroidPlugin = require("./with-yuhealth-android.plugin");
const withYuhealthIosPlugin = require("./with-yuhealth-ios.plugin");
const withYuHealthSamsungHealthPlugin = require("./with-yuhealth-samsung-health.plugin");

const { withPlugins } = require("@expo/config-plugins");

module.exports = (app) => {
  return withPlugins(app, [withYuhealthAndroidPlugin, withYuhealthIosPlugin, withYuHealthSamsungHealthPlugin]);
};
