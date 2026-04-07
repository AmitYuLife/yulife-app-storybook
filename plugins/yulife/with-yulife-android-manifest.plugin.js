const { withAndroidManifest } = require("@expo/config-plugins");

module.exports = (app) => {
  return withAndroidManifest(app, async (config) => {
    let androidManifest = config.modResults.manifest;

    // ignore intents in queries
    androidManifest.queries = androidManifest.queries.filter((q) => (q?.intent || []).length === 0);

    // change the launchMode from singleTask to singleInstance
    androidManifest.application[0].activity[0].$["android:launchMode"] = "singleInstance";

    androidManifest.application[0].activity[0]["intent-filter"] = androidManifest.application[0].activity[0][
      "intent-filter"
    ].map((intentFilter) => {
      if (intentFilter.action[0].$["android:name"] === "android.intent.action.VIEW") {
        // attach the app name to the deep link
        intentFilter.$ = { "android:label": process.env.ANDROID_DEEP_LINK_APP_NAME };
        intentFilter.data = intentFilter.data.map((d) => {
          // attach the host to the yulifeapp (or test equivalent) scheme
          if (d.$["android:scheme"]?.includes("yulifeapp")) {
            d.$["android:host"] = "yulife";
          }

          return d;
        });
      }

      return intentFilter;
    });

    androidManifest.application[0].$["android:largeHeap"] = "true";

    // Replace Expo's ExpoFirebaseMessagingService with YulifeFirebaseMessagingService
    if (!androidManifest.application[0].service) {
      androidManifest.application[0].service = [];
    }

    // Remove Expo's default Firebase messaging service via tools:node="remove"
    // (it comes from the library's AAR manifest, so we need manifest merger to remove it)
    androidManifest.application[0].service.push({
      $: {
        "android:name": "expo.modules.notifications.service.ExpoFirebaseMessagingService",
        "tools:node": "remove",
      },
    });

    // Register our service which extends ExpoFirebaseMessagingService
    const serviceName = `${config.android.package}.YulifeFirebaseMessagingService`;
    const hasService = androidManifest.application[0].service.some((s) => s.$["android:name"] === serviceName);
    if (!hasService) {
      androidManifest.application[0].service.push({
        $: {
          "android:name": serviceName,
          "android:exported": "false",
        },
        "intent-filter": [
          {
            action: [
              {
                $: {
                  "android:name": "com.google.firebase.MESSAGING_EVENT",
                },
              },
            ],
          },
        ],
      });
    }

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
