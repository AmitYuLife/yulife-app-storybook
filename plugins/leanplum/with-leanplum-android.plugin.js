const { withAndroidManifest, withAppBuildGradle, withMainApplication, withPlugins } = require("@expo/config-plugins");

const appBuildGradlePlugin = (config) => {
  return withAppBuildGradle(config, (app) => {
    const splitContents = app.modResults.contents.split(`\n`);
    const dependenciesLine = splitContents.findIndex((line) => line.includes(`dependencies {`));
    splitContents.splice(dependenciesLine + 1, 0, `implementation 'com.leanplum:leanplum-fcm:7.0.1'`);
    splitContents.splice(
      dependenciesLine + 1,
      0,
      `implementation 'com.google.firebase:firebase-core:17.5.0'
        implementation 'com.google.firebase:firebase-messaging:22.0.0'`
    );
    app.modResults.contents = splitContents.join(`\n`);
    return app;
  });
};

const withManifestPlugin = (config) => {
  return withAndroidManifest(config, async (app) => {
    let androidManifest = app.modResults.manifest;
    if (!androidManifest.application[0].service) {
      androidManifest.application[0].service = [];
    }

    androidManifest.application[0].service.push(
      {
        $: {
          "android:name": ".YulifeFirebaseMessaggingService",
          "android:enabled": "true",
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
      },
      {
        $: {
          "android:name": "com.leanplum.LeanplumPushFirebaseMessagingService",
          "android:enabled": "false",
          "tools:replace": "android:enabled",
        },
      }
    );

    return app;
  });
};

const mainApplicationPlugin = (config) => {
  return withMainApplication(config, (mod) => {
    const splitContents = mod.modResults.contents.split(`\n`);
    splitContents.splice(
      3,
      0,
      `
import com.leanplum.Leanplum;
import com.leanplum.LeanplumActivityHelper;`
    );

    const onCreateLine = splitContents.findIndex((line) => line.includes(`super.onCreate()`));

    splitContents.splice(
      onCreateLine + 1,
      0,
      `Leanplum.setApplicationContext(this);
        LeanplumActivityHelper.enableLifecycleCallbacks(this);`
    );

    mod.modResults.contents = splitContents.join(`\n`);

    return mod;
  });
};

module.exports = function withLeanplumAndroidPlugin(app) {
  return withPlugins(app, [
    [mainApplicationPlugin, {}],
    [appBuildGradlePlugin, {}],
    [withManifestPlugin, {}],
  ]);
};
