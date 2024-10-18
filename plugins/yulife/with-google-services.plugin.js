const fs = require("fs");
const { withDangerousMod } = require("@expo/config-plugins");

// We can use app config android.googleServicesFile once we fully move over to generated files
// For now we need two files for debug/release builds
module.exports = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      const testServices = fs.readFileSync("./support/android/google-services-debug.json", "utf-8");
      const releaseServices = fs.readFileSync("./support/android/google-services.json", "utf-8");

      fs.writeFileSync("./android/app/google-services.json", testServices);
      fs.mkdirSync("./android/app/src/production", { recursive: true });
      fs.writeFileSync("./android/app/src/production/google-services.json", releaseServices);

      return config;
    },
  ]);
};
