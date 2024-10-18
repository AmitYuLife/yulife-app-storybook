const {
  withAndroidManifest,
  withAppBuildGradle,
  withMainApplication,
  withGradleProperties,
  withPlugins,
} = require("@expo/config-plugins");

module.exports = function androiManifestPlugin(app) {
  return withPlugins(app, [
    [withMainApplicationPlugin, {}],
    [withGradlePropertiesPlugin, {}],
    [withAppBuildGradlePlugin, {}],
    [withManifestPlugin, {}],
  ]);
};

const withManifestPlugin = (config) => {
  return withAndroidManifest(config, async (app) => {
    let androidManifest = app.modResults.manifest;

    androidManifest.application[0]["meta-data"].push(
      {
        $: {
          "android:name": "com.bugsnag.android.API_KEY",
          "android:value": "${BUGSNAG_API_KEY}",
        },
      },
      {
        $: {
          "android:name": "com.bugsnag.android.APP_VERSION",
          "android:value": "@string/app_version",
        },
      },
      {
        $: {
          "android:name": "com.bugsnag.android.RELEASE_STAGE",
          "android:value": "${ENV}",
        },
      },
      {
        $: {
          "android:name": "com.bugsnag.android.REDACTED_KEYS",
          "android:value": "password,email",
        },
      }
    );

    return app;
  });
};

const withMainApplicationPlugin = (config) => {
  return withMainApplication(config, (mod) => {
    const splitContents = mod.modResults.contents.split(`\n`);
    splitContents.splice(
      3,
      0,
      `
    import com.bugsnag.android.Bugsnag;`
    );

    const onCreateLine = splitContents.findIndex((line) => line.includes(`super.onCreate()`));
    splitContents.splice(onCreateLine + 1, 0, `Bugsnag.start(this);`);

    mod.modResults.contents = splitContents.join(`\n`);

    return mod;
  });
};

const withGradlePropertiesPlugin = (config) => {
  return withGradleProperties(config, (app) => {
    app.modResults.push({ type: "property", key: "android.enableR8.fullMode", value: false });

    return app;
  });
};

const withAppBuildGradlePlugin = (config) => {
  return withAppBuildGradle(config, (app) => {
    const splitContents = app.modResults.contents.split(`\n`);

    const defaultConfigLine = splitContents.findIndex((line) => line.includes(`defaultConfig {`));
    // TODO: Instead we should inject the key directly into this from here
    splitContents.splice(
      defaultConfigLine + 1,
      0,
      `manifestPlaceholders = [BUGSNAG_API_KEY: project.env.get("BUGSNAG_API_KEY"), ENV: project.env.get("ENV")]`
    );

    return app;
  });
};
