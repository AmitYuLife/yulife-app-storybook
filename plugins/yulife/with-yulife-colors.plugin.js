const { withAndroidColors } = require("@expo/config-plugins");

module.exports = (app) => {
  return withAndroidColors(app, async (config) => {
    console.log(JSON.stringify(config.modResults, null, 2));

    config.modResults.resources.color.push({
      $: { name: "notification_color" },
      _: "#e30d76",
    });
    return config;
  });
};
