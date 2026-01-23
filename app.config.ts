const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");

const proguardRules = fs.readFileSync(path.join(__dirname, "/support/android/proguard-rules.pro"), "utf-8");

import dotenv from "dotenv";
dotenv.config({ path: process.env?.ENVFILE ?? ".env.local" });

const environmentConfig = {
  app_name: process.env.DISPLAY_NAME ?? "YuLife (local)",
  app_package: process.env.BUNDLE_ID ?? "com.yulife.debug",
  bugsnag_api_key: process.env.BUGSNAG_API_KEY ?? "",
  apple_team_id: process.env.APPLE_TEAM_ID ?? "",
  intercom_app_id: process.env.INTERCOM_APP_ID ?? "",
  intercom_android_api_key: process.env.INTERCOM_API_KEY_ANDROID ?? "",
  intercom_ios_api_key: process.env.INTERCOM_API_KEY_IOS ?? "",
  url_scheme: process.env.URL_SCHEME ?? "yulifeapp",
  apple_merchant_identifier: process.env.APPLE_MERCHANT_IDENTIFIER ?? "merchant.develop.yulife",
};

const googleServicesFile =
  environmentConfig.app_package === "com.yulife.app"
    ? "./support/android/google-services.json"
    : "./support/android/google-services-debug.json";

const IGNORE_APP_VERSION_IN_NAME_ENVS = ["dev", "e2e", "production"];
//Increment value added to CI_PIPELINE_IID for build numbers
// This is to make sure we have a higher version than in Bitrise builds
// When modifying this value, also modify the BUILD_NUMBER_INCREMENT in Fastfile
const BUILD_NUMBER_INCREMENT = 20000;

const appVersioning = (() => {
  const [major, minor] = packageJson.version.split(".");
  // While we are migrating to Gitlab CI, use this temporary variable
  const tmpMigrationCode = process.env.GITLAB_CI
    ? +process.env.CI_PIPELINE_IID + BUILD_NUMBER_INCREMENT
    : process.env.BITRISE_BUILD_NUMBER;
  const versionCode: string = `${tmpMigrationCode || "1"}`; // need a non-zero default for local builds
  const short = `${major}.${minor}`;
  const full = `${short}.${versionCode}`;

  return { versionCode, short, full };
})();

const appNameWithVersion = (() => {
  if (IGNORE_APP_VERSION_IN_NAME_ENVS.includes(process.env.NODE_ENV)) {
    return environmentConfig.app_name;
  }

  return environmentConfig.app_name.replace(/\)$/, ` v${appVersioning.full})`);
})();

export default () => ({
  name: "YuLife",
  platforms: ["ios", "android"],
  scheme: environmentConfig.url_scheme,
  orientation: "portrait",
  version: appVersioning.full,
  android: {
    package: environmentConfig.app_package,
    googleServicesFile: googleServicesFile,
    versionCode: Number(appVersioning.versionCode),
    adaptiveIcon: {
      foregroundImage: "./assets/native/adaptive-icon.png",
      backgroundColor: "#e30d76",
    },
    blockedPermissions: ["android.permission.READ_MEDIA_IMAGES", "android.permission.READ_MEDIA_VIDEO"],
    permissions: [
      "android.permission.INTERNET",
      "android.permission.ACCESS_NETWORK_STATE",
      "android.permission.SYSTEM_ALERT_WINDOW",
      "android.permission.WAKE_LOCK",
      "android.permission.READ_EXTERNAL_STORAGE",
      "android.permission.WRITE_EXTERNAL_STORAGE",
      "android.permission.ACTIVITY_RECOGNITION",
      "android.permission.SCHEDULE_EXACT_ALARM",
      "android.permission.FOREGROUND_SERVICE",
      "android.permission.FOREGROUND_SERVICE_DATA_SYNC",
      "android.permission.POST_NOTIFICATIONS",
      "android.permission.VIBRATE",
      "android.permission.RECEIVE_BOOT_COMPLETED",
    ],
  },
  ios: {
    bundleIdentifier: environmentConfig.app_package,
    buildNumber: appVersioning.versionCode,
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      UIBackgroundModes: ["audio", "remote-notification"],
      LSApplicationQueriesSchemes: ["http", "https", "mailto", "message", "ms-outlook", "googlegmail", "ymail"],
      WKCompanionAppBundleIdentifier: `${environmentConfig.app_package}.yuwatch`,
      UIViewControllerBasedStatusBarAppearance: true,
      CFBundlePackageType: "APPL",
      bugsnag: {
        apiKey: environmentConfig.bugsnag_api_key,
      },
      NSAppTransportSecurity: {
        NSAllowsArbitraryLoads: false,
        NSAllowsLocalNetworking: true,
        NSExceptionDomains: {
          localhost: {
            NSExceptionAllowsInsecureHTTPLoads: true,
          },
        },
      },
      // These are re translated using dans script in production!! rip btw
      NSHealthShareUsageDescription:
        "We use your step and meditation data so we can verify you have completed challenges.",
      NSHealthUpdateUsageDescription: `Need the ability to write your step and meditation data so we can update completed
      challenges`,
      NSLocationAlwaysUsageDescription:
        "Need the ability to access your location movement for step tracking challenges",
      NSLocationWhenInUseUsageDescription: "",
      NSMotionUsageDescription: "We use your pedometer to track how many steps you've taken during the day.",
      NSCameraUsageDescription: "Send photos to resolve app issues",
      NSPhotoLibraryAddUsageDescription:
        "In order to save this image YuLife will need to be able to add to your photos.",
      NSPhotoLibraryUsageDescription: "Send photos to resolve app issues",
    },
    entitlements: {
      // XCode automatically sets this to production in production builds
      "aps-environment": "development",
      "com.apple.developer.healthkit": true,
      // TODO: this is replaced by bitrise, we should do it here instead
      "com.apple.security.application-groups": ["group.com.yulife.develop"],
    },
    privacyManifests: {
      NSPrivacyAccessedAPITypes: [
        {
          NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategoryFileTimestamp",
          NSPrivacyAccessedAPITypeReasons: ["C617.1"],
        },
        {
          NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategoryUserDefaults",
          NSPrivacyAccessedAPITypeReasons: ["CA92.1"],
        },
        {
          NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategorySystemBootTime",
          NSPrivacyAccessedAPITypeReasons: ["35F9.1"],
        },
        {
          NSPrivacyAccessedAPIType: "NSPrivacyAccessedAPICategoryDiskSpace",
          NSPrivacyAccessedAPITypeReasons: ["E174.1"],
        },
      ],
    },
  },
  extra: {
    bugsnag: {
      apiKey: environmentConfig.bugsnag_api_key,
    },
  },
  icon: "./assets/native/app-icon.png",
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          // flipper: "0.233.0",
          deploymentTarget: "15.1",
        },
        android: {
          extraProguardRules: proguardRules,
          useLegacyPackaging: true,
          targetSdkVersion: 35, // TODO: remove after updating expo to 52
          compileSdkVersion: 35, // TODO: remove after updating expo to 52
        },
      },
    ],
    [
      "expo-datadog",
      {
        errorTracking: {
          androidSourcemaps: false,
          iosDsyms: false,
          iosSourcemaps: false,
        },
      },
    ],
    "expo-privacy-manifest-polyfill-plugin",
    "@leanplum/react-native-sdk",
    [
      "expo-notifications",
      {
        icon: "./assets/native/push-icon.png",
        color: "#e30d76",
      },
    ],
    ["@betomorrow/expo-app-name", { name: appNameWithVersion }],
    [
      "@intercom/intercom-react-native",
      {
        appId: environmentConfig.intercom_app_id,
        androidApiKey: environmentConfig.intercom_android_api_key,
        iosApiKey: environmentConfig.intercom_ios_api_key,
        intercomRegion: "US",
      },
    ],
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/Bariol-Bold.otf",
          "./assets/fonts/Bariol-Light.otf",
          "./assets/fonts/Bariol-Regular.otf",
          "./assets/fonts/OpenSans-Bold.ttf",
          "./assets/fonts/OpenSans-Light.ttf",
          "./assets/fonts/OpenSans-Regular.ttf",
        ],
      },
    ],
    [
      "@stripe/stripe-react-native",
      {
        merchantIdentifier: environmentConfig.apple_merchant_identifier,
        enableGooglePay: false,
      },
    ],
    "./plugins/yulife/with-yulife.plugin",
    "./plugins/detox/with-detox.js",
    "./plugins/yulife/with-yulife-split-apks",
    "./plugins/fitkit/with-fitkit.plugin",
    "./plugins/yuwatch/with-yuwatch.plugin",
    "./plugins/leanplum/with-leanplum.plugin",
    "./plugins/yuhealth/with-yuhealth.plugin",
    "./plugins/mixpanel/with-mixpanel.plugin",
    "./plugins/intercom/with-intercom.plugin.js",
    "./plugins/security/with-out-tapjacking.js",
    "./plugins/react-native-config/with-react-native-config.plugin",
    "./plugins/yulife/with-yulife-debug-signing.plugin",
    "./plugins/react-native-navigation/with-react-native-navigation.plugin.js",
    ["@bugsnag/plugin-expo-eas-sourcemaps"],
    "react-native-email-link",
    "react-native-google-cast",
    // This must be last, or build will fail with issues finding YuWatch target
    [
      "@bacons/apple-targets",
      {
        appleTeamId: environmentConfig.apple_team_id,
      },
    ],
    "./plugins/rive/with-rive.plugin.js",
  ],
});
