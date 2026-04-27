const { withAndroidStyles } = require("@expo/config-plugins");

const TEXT_COMPAT_ITEMS = [
  { name: "android:elegantTextHeight", value: "false" },
  { name: "android:useLocalePreferredLineHeightForMinimum", value: "false" },
  { name: "android:useBoundsForWidth", value: "false" },
  { name: "android:shiftDrawingOffsetForStartOverhang", value: "false" },
  { name: "android:includeFontPadding", value: "true" },
];

module.exports = (app) => {
  return withAndroidStyles(app, async (config) => {
    const styles = config.modResults;

    const appTheme = styles.resources.style.find((style) => style.$.name === "AppTheme");

    if (!appTheme) {
      return config;
    }

    appTheme.item = appTheme.item.filter((item) => !TEXT_COMPAT_ITEMS.some((compat) => compat.name === item.$.name));

    for (const { name, value } of TEXT_COMPAT_ITEMS) {
      appTheme.item.push({
        $: { name },
        _: value,
      });
    }

    return config;
  });
};
