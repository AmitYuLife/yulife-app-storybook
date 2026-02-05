const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

// Updated for Expo SDK 53 with Swift AppDelegate
module.exports = (data) => {
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
