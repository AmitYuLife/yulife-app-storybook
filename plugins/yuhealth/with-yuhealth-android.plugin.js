const {
  withAndroidManifest,
  withPlugins,
  withMainActivity,
  withAppBuildGradle,
  withDangerousMod,
  withMainApplication,
} = require("@expo/config-plugins");

const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  return withPlugins(app, [
    [mainActivityPlugin, {}],
    [appBuildGradlePlugin, {}],
    [manifestPlugin, {}],
    [samsungHealthSettingsPlugin, {}],
    [permissionRationalePlugin, {}],
    [mainApplicationPlugin, {}],
    [healthConnectBuildConfigPlugin, {}],
  ]);
};

const appBuildGradlePlugin = (app) => {
  return withAppBuildGradle(app, (config) => {
    const splitContents = config.modResults.contents.split(`\n`);
    const dependenciesLine = splitContents.findIndex((line) => line.includes(`dependencies {`));
    splitContents.splice(
      dependenciesLine + 1,
      0,
      `implementation "androidx.health.connect:connect-client:1.1.0-alpha06"`
    );
    config.modResults.contents = splitContents.join(`\n`);
    return config;
  });
};

const manifestPlugin = (config) => {
  return withAndroidManifest(config, async (mod) => {
    let androidManifest = mod.modResults.manifest;

    androidManifest.$["xmlns:tools"] = "http://schemas.android.com/tools";

    if (!androidManifest["uses-sdk"]) {
      androidManifest["uses-sdk"] = [];
    }

    androidManifest["uses-sdk"].push({
      $: {
        "tools:overrideLibrary": "androidx.health.connect.client",
      },
    });

    androidManifest["uses-permission"].push(
      {
        $: {
          "android:name": "android.permission.health.READ_STEPS",
        },
      },
      {
        $: {
          "android:name": "android.permission.health.READ_EXERCISE",
        },
      },
      {
        $: {
          "android:name": "android.permission.health.READ_DISTANCE",
        },
      },
      {
        $: {
          "android:name": "android.permission.health.READ_MINDFULNESS",
        },
      }
    );

    androidManifest.application[0].activity.push({
      $: {
        "android:name": ".PermissionsRationaleActivity",
        "android:exported": "true",
      },
      "intent-filter": [
        {
          action: [
            {
              $: {
                "android:name": "androidx.activity.result.contract.action.REQUEST_PERMISSIONS",
              },
            },
          ],
        },
      ],
    });

    if (!androidManifest.application[0].service) {
      androidManifest.application[0].service = [];
    }

    androidManifest.application[0].service.push({
      $: {
        "android:name": "com.yuhealth.foreground.ForegroundService",
        "android:exported": "false",
        "android:foregroundServiceType": "dataSync",
      },
    });

    if (!androidManifest.application[0].receiver) {
      androidManifest.application[0].receiver = [];
    }

    androidManifest.application[0].receiver.push({
      $: {
        "android:name": "com.yuhealth.foreground.ForegroundPedometerBroadcastReceiver",
        "android:exported": "false",
      },
      "intent-filter": [
        {
          action: [
            {
              $: {
                "android:name": "com.yuhealth.FOREGROUND_PEDOMETER_UPDATE",
              },
            },
          ],
        },
      ],
    });

    androidManifest.application[0].activity[0]["intent-filter"].push({
      action: [
        {
          $: {
            "android:name": "androidx.health.ACTION_SHOW_PERMISSIONS_RATIONALE",
          },
        },
      ],
    });

    androidManifest.application[0]["meta-data"].push({
      $: {
        "android:name": "com.samsung.android.health.permission.read",
        "android:value": "com.samsung.health.step_count;com.samsung.shealth.step_daily_trend",
      },
    });

    if (!androidManifest.queries) {
      androidManifest.queries = [];
    }

    androidManifest.queries.push({
      package: [
        {
          $: {
            "android:name": "com.sec.android.app.shealth",
          },
        },
        {
          $: {
            "android:name": "com.google.android.apps.healthdata",
          },
        },
      ],
    });

    if (!androidManifest.application[0]["activity-alias"]) {
      androidManifest.application[0]["activity-alias"] = [];
    }

    androidManifest.application[0]["activity-alias"].push({
      $: {
        "android:name": "ViewPermissionUsageActivity",
        "android:exported": "true",
        "android:targetActivity": ".PermissionsRationaleActivity",
        "android:permission": "android.permission.START_VIEW_PERMISSION_USAGE",
      },
      "intent-filter": [
        {
          action: [
            {
              $: {
                "android:name": "android.intent.action.VIEW_PERMISSION_USAGE",
              },
            },
          ],
          category: [
            {
              $: {
                "android:name": "android.intent.category.HEALTH_PERMISSIONS",
              },
            },
          ],
        },
      ],
    });

    return mod;
  });
};

const samsungHealthSettingsPlugin = (config) => {
  return withDangerousMod(config, [
    "android",
    (mod) => {
      const settingsPath = `${mod.modRequest.platformProjectRoot}/settings.gradle`;
      const file = fs.readFileSync(settingsPath, "utf-8");

      const splitSettings = file.split(`\n`);
      splitSettings.splice(splitSettings.length - 2, 0, `include ':samsung-health-data'`);

      fs.writeFileSync(settingsPath, splitSettings.join(`\n`));

      return mod;
    },
  ]);
};

const mainApplicationPlugin = (config) => {
  return withMainApplication(config, (mod) => {
    const splitContents = mod.modResults.contents.split(`\n`);
    splitContents.splice(3, 0, `\nimport com.yuhealth.YuHealthGlobal\n`);

    const onCreateLine = splitContents.findIndex((line) => line.includes(`super.onCreate()`));

    splitContents.splice(
      onCreateLine + 1,
      0,
      `
      val notificationIcon = R.drawable.notification_icon
      val notificationColor = resources.getColor(R.color.notification_icon_color);
      YuHealthGlobal.setNotificationIcon(notificationIcon)
      YuHealthGlobal.setNotificationColor(R.color.notification_icon_color)`
    );

    mod.modResults.contents = splitContents.join(`\n`);

    return mod;
  });
};

const mainActivityPlugin = (config) => {
  return withMainActivity(config, (mod) => {
    const splitContents = mod.modResults.contents.split(`\n`);
    const onCreateLine = splitContents.findIndex((line) =>
      line.includes(`override fun onCreate(savedInstanceState: Bundle?) {`)
    );
    splitContents.splice(onCreateLine + 1, 0, `     HealthConnectPermissionDelegate.setPermissionDelegate(this)`);
    splitContents.splice(3, 0, `import com.yuhealth.providers.healthConnectProvider.HealthConnectPermissionDelegate`);

    mod.modResults.contents = splitContents.join(`\n`);

    return mod;
  });
};

const PERMISSION_RATIONALE = (packageName) => `package ${packageName}

import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class PermissionsRationaleActivity: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val webView = WebView(this)
        webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                return false
            }
        }

        webView.loadUrl(getString(R.string.privacy_policy_url))

        setContentView(webView)
    }
}`;

const permissionRationalePlugin = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      fs.writeFileSync(
        `./android/app/src/main/java/${config.android.package.replace(/\./g, "/")}/PermissionsRationaleActivity.kt`,
        PERMISSION_RATIONALE(config.android.package)
      );
      return config;
    },
  ]);
};

/**
 * Health Connect 1.2.0-alpha03 requires compileSdk 36 and AGP 8.9.1+.
 * React Native 0.79.x ships AGP 8.8.2 and compileSdk 35, so we patch
 * the RN version catalog and add @Suppress annotations to the YuHealth
 * Kotlin sources that use experimental Health Connect APIs.
 */
const healthConnectBuildConfigPlugin = (app) => {
  return withDangerousMod(app, [
    "android",
    (config) => {
      // 1. Patch React Native's libs.versions.toml files to bump AGP and compileSdk
      const tomlPaths = [
        "node_modules/react-native/gradle/libs.versions.toml",
        "node_modules/@react-native/gradle-plugin/gradle/libs.versions.toml",
      ];
      for (const rel of tomlPaths) {
        const tomlPath = path.resolve(config.modRequest.projectRoot, rel);
        if (fs.existsSync(tomlPath)) {
          let toml = fs.readFileSync(tomlPath, "utf-8");
          toml = toml.replace(/^agp = ".*"/m, 'agp = "8.9.1"');
          toml = toml.replace(/^compileSdk = ".*"/m, 'compileSdk = "36"');
          fs.writeFileSync(tomlPath, toml);
        }
      }

      // 2. Add compileSdkExtension to app/build.gradle
      const appBuildGradlePath = path.resolve(config.modRequest.platformProjectRoot, "app/build.gradle");
      if (fs.existsSync(appBuildGradlePath)) {
        let appGradle = fs.readFileSync(appBuildGradlePath, "utf-8");
        if (!appGradle.includes("compileSdkExtension")) {
          appGradle = appGradle.replace(
            /compileSdk rootProject\.ext\.compileSdkVersion/,
            "compileSdk rootProject.ext.compileSdkVersion\n    compileSdkExtension 19"
          );
          fs.writeFileSync(appBuildGradlePath, appGradle);
        }
      }

      // 3. Bump connect-client version in the YuHealth node_modules build.gradle
      const yuHealthBuildGradle = path.resolve(
        config.modRequest.projectRoot,
        "node_modules/@yu-life/react-native-yu-health/android/build.gradle"
      );
      if (fs.existsSync(yuHealthBuildGradle)) {
        let gradle = fs.readFileSync(yuHealthBuildGradle, "utf-8");
        gradle = gradle.replace(/connect-client:[\d.]+(-alpha\d+)?/, "connect-client:1.2.0-alpha03");
        fs.writeFileSync(yuHealthBuildGradle, gradle);
      }

      return config;
    },
  ]);
};
