const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

// Updated for Expo SDK 53 with Swift AppDelegate
module.exports = (data) => {
  return plugins.withPlugins(data, [appDelegatePlugin, podfilePlugin]);
};

const appDelegatePlugin = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const appDelegatePath = path.join(config.modRequest.platformProjectRoot, "YuLife/AppDelegate.swift");

      if (!fs.existsSync(appDelegatePath)) {
        console.warn("AppDelegate.swift not found, skipping YuHealth iOS plugin");
        return config;
      }

      let contents = fs.readFileSync(appDelegatePath, "utf-8");

      // Add HealthKit import if not present
      if (!contents.includes("import HealthKit")) {
        contents = contents.replace(
          "import Expo",
          "import Expo\nimport HealthKit"
        );
      }

      // Add health authorization extension if not present
      if (!contents.includes("applicationShouldRequestHealthAuthorization")) {
        // Find the closing brace of the AppDelegate class and insert the method before it
        const extensionCode = `
// MARK: - HealthKit Authorization
extension AppDelegate {
    @objc public func applicationShouldRequestHealthAuthorization(_ application: UIApplication) {
        let healthStore = HKHealthStore()
        healthStore.handleAuthorizationForExtension { success, error in
            if success {
                print("phone received health kit request")
            }
        }
    }
}
`;
        // Append the extension at the end of the file
        contents = contents + "\n" + extensionCode;
      }

      fs.writeFileSync(appDelegatePath, contents);
      return config;
    },
  ]);
};

const podfilePlugin = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const podfilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");

      if (!fs.existsSync(podfilePath)) {
        console.warn("Podfile not found, skipping YuHealth pod injection");
        return config;
      }

      let contents = fs.readFileSync(podfilePath, "utf-8");

      const podLine = `  pod 'react-native-yu-health', :path => '../targets/YuHealth'`;

      if (!contents.includes("react-native-yu-health")) {
        // Insert after the first "use_expo_modules!" or "target" block's opening
        contents = contents.replace(
          /use_expo_modules!/,
          `use_expo_modules!\n${podLine}`
        );

        fs.writeFileSync(podfilePath, contents);
      }

      return config;
    },
  ]);
};
