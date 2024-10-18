const { withAndroidManifest } = require("@expo/config-plugins");

module.exports = (app) => {
  return withAndroidManifest(app, async (config) => {
    let androidManifest = config.modResults.manifest;

    androidManifest.application[0]["meta-data"].push(
      {
        $: {
          "android:name": "com.google.firebase.messaging.default_notification_icon",
          "android:resource": "@drawable/notification_icon",
        },
      },
      {
        $: {
          "android:name": "com.google.firebase.messaging.default_notification_channel_id",
          "android:value": "YULIFE_PUSH_NOTIFICATION_CHANNEL",
        },
      },
      {
        $: {
          "android:name": "com.google.firebase.messaging.default_notification_color",
          "android:resource": "@color/notification_color",
          "tools:replace": "android:resource",
        },
      }
    );

    return config;
  });
};
