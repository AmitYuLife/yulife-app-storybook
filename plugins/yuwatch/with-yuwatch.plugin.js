const { withPlugins } = require("@expo/config-plugins");
const withYuwatchDataPlugin = require("./with-yuwatch-data.plugin");
const withYuwatchFrameworkPlugin = require("./with-yuwatch-framework.plugin");

module.exports = (app) => {
  return withPlugins(app, [withYuwatchDataPlugin, withYuwatchFrameworkPlugin]);
};
