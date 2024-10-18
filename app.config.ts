const fs = require("fs");
const path = require("path");

const proguardRules = fs.readFileSync(path.join(__dirname, "/support/android/proguard-rules.pro"), "utf-8");

export default () => ({
  // TODO: Generate from envireonment
  name: "YuLife",
  orientation: "portrait",
  // TODO: From environment
  scheme: "yulifeapp",
  android: {
    // TODO: From environment
    package: "com.yulife.debug",
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
    // go from environment
    bundleIdentifier: "com.yulife.debug",
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      UIBackgroundModes: ["audio", "remote-notification"],
      LSApplicationQueriesSchemes: ["http", "https"],
      // TODO: From environment
      WKCompanionAppBundleIdentifier: "com.yulife.develop.yuwatch",
      UIViewControllerBasedStatusBarAppearance: true,
      CFBundlePackageType: "APPL",
      bugsnag: {
        // TODO: From environment
        apiKey: "eb1470c4d4e0aa8970c73fe562c7251b",
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
      "com.apple.developer.healthkit": true,
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
  icon: "./assets/native/app-icon.png",
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          flipper: "0.233.0",
        },
        android: {
          extraProguardRules: proguardRules,
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
      "@bacons/apple-targets",
      {
        appleTeamId: "XXXXXXXXXX",
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
        // TODO: From environment
        appId: "b4z5gerb",
        // TODO: From environment
        androidApiKey: "android_sdk-0c23fde83b27a85735e0fb013c6fa9eda1952b05",
        // TODO: From environment
        iosApiKey: "ios_sdk-1bbdc319eb223d191a6a7c5b3b55e837feee467d",
        intercomRegion: "EU",
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
    "./plugins/fitkit/with-fitkit.plugin",
    "./plugins/yuwatch/with-yuwatch.plugin",
    "./plugins/leanplum/with-leanplum.plugin",
    "./plugins/yuhealth/with-yuhealth.plugin",
    "./plugins/mixpanel/with-mixpanel.plugin",
    "./plugins/bugsnag/with-bugsnag.plugin.js",
    "./plugins/intercom/with-intercom.plugin.js",
    "./plugins/react-native-config/with-react-native-config.plugin",
    "./plugins/react-native-navigation/with-react-native-navigation.plugin.js",
  ],
});
