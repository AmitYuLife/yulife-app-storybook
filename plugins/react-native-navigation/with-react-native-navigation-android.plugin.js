const { withMainApplication, withPlugins, withMainActivity } = require("@expo/config-plugins");

module.exports = function withReactNativeNavigationAndroid(app) {
  return withPlugins(app, [
    [mainApplicationPlugin, {}],
    [mainActivityPlugin, {}],
  ]);
};

const mainApplicationPlugin = (config) => {
  return withMainApplication(config, (mod) => {
    mod.modResults.contents = mod.modResults.contents.replace(`.expo/.virtual-metro-entry`, `index`);

    const splitContents = mod.modResults.contents.split(`\n`);
    splitContents.splice(3, 0, `import com.reactnativenavigation.NavigationApplication`);
    const classDefinitionLine = splitContents.findIndex((line) => line.includes(`class MainApplication`));
    splitContents.splice(classDefinitionLine, 1, `class MainApplication : NavigationApplication() {`);

    mod.modResults.contents = splitContents.join(`\n`);

    // Remove the new architecture entry point loading since NavigationApplication already handles it
    // This prevents "Feature flags cannot be overridden more than once" error
    mod.modResults.contents = mod.modResults.contents.replace(
      /SoLoader\.init\(this, OpenSourceMergedSoMapping\)\s*\n\s*if \(BuildConfig\.IS_NEW_ARCHITECTURE_ENABLED\) \{\s*\n\s*\/\/ If you opted-in for the New Architecture.*\n\s*load\(\)\s*\n\s*\}/,
      `// SoLoader and New Architecture loading handled by NavigationApplication`
    );

    return mod;
  });
};

const removeFunctionByName = (content, functionName) => {
  const start = content.indexOf(`override fun ${functionName}`);
  if (start === -1) {
    return content;
  }

  let braceCount = 0;
  let end = start;

  for (let i = start; i < content.length; i++) {
    if (content[i] === "{") {
      braceCount++;
    }

    if (content[i] === "}") {
      braceCount--;
    }

    if (braceCount === 0 && content[i] === "}") {
      end = i + 1;
      break;
    }
  }

  return content.slice(0, start) + content.slice(end);
};

const mainActivityPlugin = (config) => {
  return withMainActivity(config, (mod) => {
    mod.modResults.contents = mod.modResults.contents.replace(
      `class MainActivity : ReactActivity() {`,
      `class MainActivity : NavigationActivity() {`
    );

    mod.modResults.contents = removeFunctionByName(mod.modResults.contents, `createReactActivityDelegate`);

    let splitContents = mod.modResults.contents.split(`\n`);
    splitContents.splice(3, 0, `import com.reactnativenavigation.NavigationActivity`);

    const getMainComponentNameLine = splitContents.findIndex((line) => line.includes(`getMainComponentName`));
    splitContents.splice(getMainComponentNameLine, 1);

    mod.modResults.contents = splitContents.join(`\n`);

    return mod;
  });
};
