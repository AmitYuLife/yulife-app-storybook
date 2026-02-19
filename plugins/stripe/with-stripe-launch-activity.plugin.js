const fs = require("fs");
const {
  withDangerousMod,
  withAndroidManifest,
  withMainApplication,
  withMainActivity,
  withPlugins,
} = require("@expo/config-plugins");

const LAUNCH_ACTIVITY = (packageName) => `package ${packageName}

import android.app.Activity
import android.content.Intent
import android.os.Bundle

class LaunchActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val application = application as MainApplication
        if (!application.isActivityInBackStack(MainActivity::class.java)) {
            val originalIntent = intent
            val newIntent = Intent(this, MainActivity::class.java).apply {
                action = originalIntent?.action
                data = originalIntent?.data
                flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
            }
            startActivity(newIntent)
        }
        finish()
    }
}
`;

const withLaunchActivityFile = (config) => {
  return withDangerousMod(config, [
    "android",
    async (mod) => {
      const packagePath = mod.android.package.replace(/\./g, "/");
      const filePath = `./android/app/src/main/java/${packagePath}/LaunchActivity.kt`;
      fs.writeFileSync(filePath, LAUNCH_ACTIVITY(mod.android.package));
      return mod;
    },
  ]);
};

const withActivityTracking = (config) => {
  return withMainApplication(config, (mod) => {
    const contents = mod.modResults.contents;

    // Add the activity tracking fields and methods before the closing brace of the class
    const activityTrackingCode = `
    private val runningActivities = mutableListOf<Class<*>>()

    fun addActivityToStack(cls: Class<*>) {
        if (!runningActivities.contains(cls)) runningActivities.add(cls)
    }

    fun removeActivityFromStack(cls: Class<*>) {
        runningActivities.remove(cls)
    }

    fun isActivityInBackStack(cls: Class<*>): Boolean {
        return runningActivities.contains(cls)
    }
`;

    // Insert before the last closing brace of the class
    const lastBraceIndex = contents.lastIndexOf("}");
    mod.modResults.contents = contents.slice(0, lastBraceIndex) + activityTrackingCode + contents.slice(lastBraceIndex);

    return mod;
  });
};

const withLaunchActivityManifest = (config) => {
  return withAndroidManifest(config, (mod) => {
    const manifest = mod.modResults.manifest;
    const application = manifest.application[0];
    const mainActivity = application.activity.find((activity) => activity.$["android:name"] === ".MainActivity");

    if (!mainActivity) {
      return mod;
    }

    // Find and remove the LAUNCHER intent-filter from MainActivity
    const launcherIntentIndex = (mainActivity["intent-filter"] || []).findIndex((intentFilter) => {
      const actions = intentFilter.action || [];
      const categories = intentFilter.category || [];
      return (
        actions.some((a) => a.$["android:name"] === "android.intent.action.MAIN") &&
        categories.some((c) => c.$["android:name"] === "android.intent.category.LAUNCHER")
      );
    });

    if (launcherIntentIndex !== -1) {
      mainActivity["intent-filter"].splice(launcherIntentIndex, 1);
    }

    // Add LaunchActivity with the LAUNCHER intent-filter and splash screen theme
    const splashTheme = mainActivity.$["android:theme"];

    application.activity.push({
      $: {
        "android:name": ".LaunchActivity",
        "android:exported": "true",
        ...(splashTheme ? { "android:theme": splashTheme } : {}),
      },
      "intent-filter": [
        {
          action: [{ $: { "android:name": "android.intent.action.MAIN" } }],
          category: [{ $: { "android:name": "android.intent.category.LAUNCHER" } }],
        },
      ],
    });

    return mod;
  });
};

const withMainActivityLifecycle = (config) => {
  return withMainActivity(config, (mod) => {
    const contents = mod.modResults.contents;

    // Add activity registration in onCreate (after super.onCreate)
    const onCreateRegistration = `        (application as MainApplication).addActivityToStack(this::class.java)`;
    const superOnCreateIndex = contents.indexOf("super.onCreate(");
    const superOnCreateEndLine = contents.indexOf("\n", superOnCreateIndex);
    mod.modResults.contents =
      contents.slice(0, superOnCreateEndLine + 1) +
      onCreateRegistration +
      "\n" +
      contents.slice(superOnCreateEndLine + 1);

    // Add onDestroy override before the last closing brace of the class
    const onDestroyMethod = `
    override fun onDestroy() {
        super.onDestroy()
        (application as MainApplication).removeActivityFromStack(this::class.java)
    }
`;
    const lastBraceIndex = mod.modResults.contents.lastIndexOf("}");
    mod.modResults.contents =
      mod.modResults.contents.slice(0, lastBraceIndex) +
      onDestroyMethod +
      mod.modResults.contents.slice(lastBraceIndex);

    return mod;
  });
};

module.exports = (app) => {
  return withPlugins(app, [
    withLaunchActivityFile,
    withActivityTracking,
    withMainActivityLifecycle,
    withLaunchActivityManifest,
  ]);
};
