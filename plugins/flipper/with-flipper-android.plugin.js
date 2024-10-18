const fs = require("fs");
const {
  withDangerousMod,
  withAppBuildGradle,
  withPlugins,
  withMainApplication,
  withGradleProperties,
} = require("@expo/config-plugins");

// TODO: use community flipper plugin
const FLIPPER_ANDROID = `package com.yulife.debug;

import android.content.Context;

import com.facebook.flipper.android.AndroidFlipperClient;
import com.facebook.flipper.android.utils.FlipperUtils;
import com.facebook.flipper.core.FlipperClient;
import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;
import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;
import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin;
import com.facebook.flipper.plugins.inspector.DescriptorMapping;
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;
import com.facebook.flipper.plugins.react.ReactFlipperPlugin;
import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;
import com.facebook.react.ReactInstanceEventListener;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.network.CustomClientBuilder;
import com.facebook.react.modules.network.NetworkingModule;

import okhttp3.OkHttpClient;

public class ReactNativeFlipper {
    public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
        if (FlipperUtils.shouldEnableFlipper(context)) {
            final FlipperClient client = AndroidFlipperClient.getInstance(context);

            client.addPlugin(new InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()));
            client.addPlugin(new ReactFlipperPlugin());
            client.addPlugin(new DatabasesFlipperPlugin(context));
            client.addPlugin(new SharedPreferencesFlipperPlugin(context));
            client.addPlugin(CrashReporterPlugin.getInstance());

            NetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();

            NetworkingModule.setCustomClientBuilder(new CustomClientBuilder() {
                @Override
                public void apply(OkHttpClient.Builder builder) {
                    builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));
                }
            });


            client.addPlugin(networkFlipperPlugin);
            client.start();

            client.addPlugin(new FrescoFlipperPlugin());
        }
    }
}`;

const MAIN_APPLICATION_IMPORTS = [
  `import android.content.Context`,
  `import java.lang.reflect.InvocationTargetException`,
  `import com.facebook.react.ReactInstanceManager`,
  `import android.content.Context`,
];

const MAIN_APPLICATION_METHOD = `
private fun initializeFlipper(
        context: Context, reactInstanceManager: ReactInstanceManager
    ) {
        if (BuildConfig.DEBUG) {
            try {
                /*
                    We use reflection here to pick up the class that initializes Flipper,
                    since Flipper library is not available in release mode
                */
                val aClass = Class.forName("com.yulife.debug.ReactNativeFlipper")
                aClass
                    .getMethod(
                        "initializeFlipper",
                        Context::class.java,
                        ReactInstanceManager::class.java
                    )
                    .invoke(null, context, reactInstanceManager)
            } catch (e: ClassNotFoundException) {
                e.printStackTrace()
            } catch (e: NoSuchMethodException) {
                e.printStackTrace()
            } catch (e: IllegalAccessException) {
                e.printStackTrace()
            } catch (e: InvocationTargetException) {
                e.printStackTrace()
            }
        }
}
`;

const customFilesMod = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      fs.mkdirSync("./android/app/src/debug/java/com/yulife/debug", { recursive: true });
      fs.writeFileSync("./android/app/src/debug/java/com/yulife/debug/ReactNativeFlipper.java", FLIPPER_ANDROID);
      return config;
    },
  ]);
};

const appBuildGradlePlugin = (config) => {
  return withAppBuildGradle(config, (app) => {
    const splitContents = app.modResults.contents.split(`\n`);
    const dependenciesLine = splitContents.findIndex((line) => line.includes(`dependencies {`));
    splitContents.splice(
      dependenciesLine + 1,
      0,
      `
    debugImplementation "com.facebook.flipper:flipper:\${FLIPPER_VERSION}"
    debugImplementation "com.facebook.flipper:flipper-network-plugin:\${FLIPPER_VERSION}"
    debugImplementation "com.facebook.flipper:flipper-fresco-plugin:\${FLIPPER_FRESCO_VERSION}"
    `
    );

    const flipperIntegrationLIne = splitContents.findIndex((line) =>
      line.includes(`implementation("com.facebook.react:flipper-integration")`)
    );
    splitContents.splice(flipperIntegrationLIne, 1);

    app.modResults.contents = splitContents.join(`\n`);
    return app;
  });
};

const customApplicationMod = (app) => {
  return withMainApplication(app, (config) => {
    const splitContents = config.modResults.contents.split(`\n`);
    const initFlipperLine = splitContents.findIndex((line) => line.includes(`ReactNativeFlipper.initializeFlipper`));
    splitContents.splice(initFlipperLine, 1, `initializeFlipper(this, reactNativeHost.reactInstanceManager)`);
    splitContents.splice(splitContents.length - 2, 0, MAIN_APPLICATION_METHOD);

    const importLine = splitContents.findIndex((line) =>
      line.includes(`import com.facebook.react.flipper.ReactNativeFlipper`)
    );
    splitContents.splice(importLine, 1);

    for (const importValue of MAIN_APPLICATION_IMPORTS) {
      const exists = splitContents.find((line) => line.includes(importValue));
      if (!exists) {
        splitContents.splice(1, 0, importValue);
      }
    }

    config.modResults.contents = splitContents.join(`\n`);

    return config;
  });
};

const gradlePropertiesPlugin = (config) => {
  return withGradleProperties(config, (app) => {
    console.log(app.modResults);
    app.modResults.push({ type: "property", key: "FLIPPER_VERSION", value: "0.233.0" });
    app.modResults.push({ type: "property", key: "FLIPPER_FRESCO_VERSION", value: "0.182.0" });

    return app;
  });
};

module.exports = function androiManifestPlugin(app) {
  return withPlugins(app, [
    [customFilesMod, {}],
    [customApplicationMod, {}],
    [appBuildGradlePlugin, {}],
    [gradlePropertiesPlugin, {}],
  ]);
};
