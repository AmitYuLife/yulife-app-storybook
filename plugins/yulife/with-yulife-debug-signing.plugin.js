const { withDangerousMod } = require("@expo/config-plugins");

const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  return withDangerousMod(app, [
    "android",
    async (config) => {
      const sourcePath = "./support/android/debug.keystore";
      const destPath = "./android/app/debug.keystore";

      try {
        // Check if source file exists
        if (!fs.existsSync(sourcePath)) {
          console.error(`ERROR: Source keystore file not found at ${path.resolve(sourcePath)}`);
          // Still continue the build process
        } else {
          // Ensure destination directory exists
          const destDir = path.dirname(destPath);
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }

          fs.copyFileSync(sourcePath, destPath);
          console.log(`Successfully copied debug keystore to ${destPath}`);
        }
      } catch (error) {
        console.error(`Error during keystore copy: ${error.message}`);
      }

      return config;
    },
  ]);
};
