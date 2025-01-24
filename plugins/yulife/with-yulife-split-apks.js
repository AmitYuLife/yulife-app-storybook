const { withAppBuildGradle } = require("@expo/config-plugins");

module.exports = (config) => {
  return withAppBuildGradle(config, (app) => {
    const splitContents = app.modResults.contents.split(`\n`);
    const androidLine = splitContents.findIndex((line) => line.includes(`android {`));

    splitContents.splice(
      androidLine + 1,
      0,
      `    splits {
        abi {
            reset()
            enable true
            universalApk false
            include "armeabi-v7a", "arm64-v8a", "x86", "x86_64"
        }
    }\n`
    );

    splitContents.splice(
      androidLine - 1,
      0,
      `\next.abiCodes = [
    "armeabi-v7a": 1,
    "x86"       : 2,
    "arm64-v8a" : 3,
    "x86_64"    : 4
]

android.applicationVariants.all { variant ->
    variant.outputs.each { output ->
        def abi = output.getFilter(com.android.build.OutputFile.ABI)
        if (abi != null) { // Only override for ABI-specific APKs
            def baseAbiVersionCode = project.ext.abiCodes.get(abi)
            // check if we can use 'variant.versionCode' instead of 'project.android.defaultConfig.versionCode'
            output.versionCodeOverride = project.android.defaultConfig.versionCode * 1000 + baseAbiVersionCode
        }
    }
}`
    );

    app.modResults.contents = splitContents.join(`\n`);

    return app;
  });
};
