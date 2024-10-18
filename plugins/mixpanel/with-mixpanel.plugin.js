const { withAndroidManifest } = require("@expo/config-plugins");

module.exports = (config) => {
  return withAndroidManifest(config, async (app) => {
    let androidManifest = app.modResults.manifest;

    androidManifest.application[0]["meta-data"].push(
      {
        $: {
          "android:name": "com.mixpanel.android.MPConfig.ResourcePackageName",
          "android:value": "com.yulife",
        },
      },
      {
        $: {
          "android:name": "com.mixpanel.android.MPConfig.AutoShowMixpanelUpdates",
          "android:value": "false",
        },
      }
    );

    return app;
  });
};
