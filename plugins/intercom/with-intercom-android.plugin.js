const { withAndroidManifest, withPlugins } = require("@expo/config-plugins");

module.exports = function androiManifestPlugin(config) {
  return withAndroidManifest(config, async (app) => {
    let androidManifest = app.modResults.manifest;
    if (!androidManifest.application[0]["receiver"]) {
      androidManifest.application[0]["receiver"] = [];
    }

    androidManifest.application[0]["receiver"].push({
      $: {
        "android:name": "com.intercom.reactnative.RNIntercomPushBroadcastReceiver",
        "tools:replace": "android:exported",
        "android:exported": "true",
      },
    });

    return app;
  });
};
