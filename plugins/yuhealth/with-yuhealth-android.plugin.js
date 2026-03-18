const {
  withAndroidManifest,
  withPlugins,
  withMainActivity,
  withAppBuildGradle,
  withDangerousMod,
  withMainApplication,
} = require("@expo/config-plugins");

const fs = require("fs");
module.exports = (app) => {
  return withPlugins(app, [
    [mainActivityPlugin, {}],
    [appBuildGradlePlugin, {}],
    [manifestPlugin, {}],
    [settingsPlugin, {}],
    [permissionRationalePlugin, {}],
    [mainApplicationPlugin, {}],
    [autolinkingPlugin, {}],
  ]);
};

const appBuildGradlePlugin = (app) => {
  return withAppBuildGradle(app, (config) => {
    const splitContents = config.modResults.contents.split(`\n`);
    const dependenciesLine = splitContents.findIndex((line) => line.includes(`dependencies {`));
    splitContents.splice(
      dependenciesLine + 1,
      0,
      `implementation "androidx.health.connect:connect-client:1.1.0-alpha06"`,
      `implementation project(':react-native-yu-health')`
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

const settingsPlugin = (config) => {
  return withDangerousMod(config, [
    "android",
    (mod) => {
      const path = `${mod.modRequest.platformProjectRoot}/settings.gradle`;
      const file = fs.readFileSync(path, "utf-8");

      const splitSettings = file.split(`\n`);
      splitSettings.splice(splitSettings.length - 2, 0, `include ':samsung-health-data'`);
      splitSettings.splice(splitSettings.length - 2, 0, `include ':react-native-yu-health'`);
      splitSettings.splice(splitSettings.length - 2, 0, `project(':react-native-yu-health').projectDir = new File(rootProject.projectDir, '../targets/YuHealth/android')`);

      fs.writeFileSync(path, splitSettings.join(`\n`));

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

const autolinkingPlugin = (app) => {
  return withAppBuildGradle(app, (config) => {
    // Inject a Gradle task that patches autolinking.json to include YuHealth
    // before the C++ autolinking code generation runs.
    const patchTask = `
import groovy.json.JsonSlurper
import groovy.json.JsonOutput

tasks.register("patchAutolinkingForYuHealth") {
    def autolinkingFile = rootProject.layout.buildDirectory.file("generated/autolinking/autolinking.json")
    doLast {
        def file = autolinkingFile.get().asFile
        if (file.exists()) {
            def json = new JsonSlurper().parseText(file.text)
            if (json.dependencies && !json.dependencies.containsKey("@yu-life/react-native-yu-health")) {
                json.dependencies["@yu-life/react-native-yu-health"] = [
                    root: rootProject.projectDir.absolutePath + "/../targets/YuHealth",
                    name: "@yu-life/react-native-yu-health",
                    platforms: [
                        android: [
                            sourceDir: rootProject.projectDir.absolutePath + "/../targets/YuHealth/android",
                            packageImportPath: "import com.yuhealth.YuHealthPackage;",
                            packageInstance: "new YuHealthPackage()",
                            buildTypes: [],
                            libraryName: "RNYuHealthSpec",
                            componentDescriptors: [],
                            cmakeListsPath: rootProject.projectDir.absolutePath + "/../targets/YuHealth/android/build/generated/source/codegen/jni/CMakeLists.txt",
                            cxxModuleCMakeListsModuleName: null,
                            cxxModuleCMakeListsPath: null,
                            cxxModuleHeaderName: null
                        ]
                    ]
                ]
                file.text = JsonOutput.prettyPrint(JsonOutput.toJson(json))
            }
        }
    }
}

tasks.configureEach { task ->
    if (task.name == "generateAutolinkingNewArchitectureFiles" || task.name == "generateAutolinkingPackageList") {
        task.dependsOn("patchAutolinkingForYuHealth")
    }
}
`;
    config.modResults.contents += patchTask;
    return config;
  });
};

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
