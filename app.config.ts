const fs = require("fs");
const path = require("path");

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
};

const googleServicesFile =
  environmentConfig.app_package === "com.yulife.app"
    ? "./support/android/google-services.json"
    : "./support/android/google-services-debug.json";

export default () => ({
  name: "YuLife",
  displayName: environmentConfig.app_name,
  platforms: ["ios", "android"],
  scheme: "yulifeapp",
  orientation: "portrait",
  android: {
    package: environmentConfig.app_package,
    googleServicesFile: googleServicesFile,
    adaptiveIcon: {
      foregroundImage: "./assets/native/adaptive-icon.png",
      backgroundColor: "#e30d76",
    },
    permissions: [
      "android.permission.INTERNET",
      "android.permission.ACCESS_NETWORK_STATE",
      "android.permission.SYSTEM_ALERT_WINDOW",
      "android.permission.WAKE_LOCK",
      "android.permission.READ_EXTERNAL_STORAGE",
      "android.permission.READ_MEDIA_IMAGES",
      "android.permission.READ_MEDIA_VIDEO",
      "android.permission.WRITE_EXTERNAL_STORAGE",
      "android.permission.ACTIVITY_RECOGNITION",
      "android.permission.SCHEDULE_EXACT_ALARM",
      "android.permission.FOREGROUND_SERVICE",
      "android.permission.POST_NOTIFICATIONS",
      "android.permission.VIBRATE",
      "android.permission.RECEIVE_BOOT_COMPLETED",
    ],
  },
  ios: {
    bundleIdentifier: environmentConfig.app_package,
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      CFBundleDisplayName: environmentConfig.app_name,
      UIBackgroundModes: ["audio", "remote-notification"],
      CFBundleShortVersionString: "4.45.0",
      LSApplicationQueriesSchemes: ["http", "https"],
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
        },
      },
    ],
    [
      "react-native-permissions",
      {
        iosPermissions: ["PhotoLibraryAddOnly"],
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
    [
      "expo-notifications",
      {
        icon: "./assets/native/push-icon.png",
        color: "#e30d76",
      },
    ],
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
    "./plugins/yulife/with-yulife.plugin",
    "./plugins/yulife/with-yulife-split-apks",
    "./plugins/fitkit/with-fitkit.plugin",
    "./plugins/yuwatch/with-yuwatch.plugin",
    "./plugins/leanplum/with-leanplum.plugin",
    "./plugins/yuhealth/with-yuhealth.plugin",
    "./plugins/mixpanel/with-mixpanel.plugin",
    "./plugins/intercom/with-intercom.plugin.js",
    "./plugins/react-native-config/with-react-native-config.plugin",
    "./plugins/react-native-navigation/with-react-native-navigation.plugin.js",
    // This must be last, or build will fail with issues finding YuWatch target
    [
      "@bacons/apple-targets",
      {
        appleTeamId: environmentConfig.apple_team_id,
      },
    ],
  ],
});
