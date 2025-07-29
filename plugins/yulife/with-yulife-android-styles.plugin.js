const { withAndroidStyles } = require("@expo/config-plugins");

module.exports = (app) => {
  return withAndroidStyles(app, async (config) => {
    const styles = config.modResults;

    const appThemeStyle = styles.resources.style.find((style) => style.$.name === "Theme.App.SplashScreen");

    if (appThemeStyle) {
      appThemeStyle.item.push({
        $: {
          name: "android:windowOptOutEdgeToEdgeEnforcement",
          "tools:targetApi": "35",
        },
        _: "true",
      });
    }

    return config;
  });
};
