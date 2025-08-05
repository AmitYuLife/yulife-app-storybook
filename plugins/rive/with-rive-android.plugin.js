const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

const TARGETS_DIR = path.join(__dirname, "../../assets/rive");

function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

function validateAndroidResourceName(filename) {
  // Remove .riv extension for validation
  const nameWithoutExt = filename.replace(".riv", "");

  // Check if the name only contains a-z, 0-9, and _
  const isValidChars = /^[a-z0-9_]+$/.test(nameWithoutExt);

  // Check if it doesn't start with a number
  const doesntStartWithNumber = !/^[0-9]/.test(nameWithoutExt);

  if (!isValidChars || !doesntStartWithNumber) {
    throw new Error(
      `Invalid Android resource name: "${filename}". ` +
        `Android resource names must only contain lowercase letters (a-z), numbers (0-9), and underscores (_), ` +
        `and cannot start with a number.`
    );
  }

  return true;
}

function copyRiveFilesToAndroidRaw(projectRoot) {
  const rawDir = path.join(projectRoot, "android/app/src/main/res/raw");

  ensureDirectoryExists(rawDir);

  if (!fs.existsSync(TARGETS_DIR)) {
    console.log(`Rive assets directory not found at ${TARGETS_DIR}`);
    return;
  }

  const animationFiles = fs.readdirSync(TARGETS_DIR).filter((file) => file.endsWith(".riv"));

  animationFiles.forEach((file) => {
    // Validate the filename before copying
    validateAndroidResourceName(file);

    const sourceFile = path.join(TARGETS_DIR, file);
    const destFile = path.join(rawDir, file);

    fs.copyFileSync(sourceFile, destFile);
    console.log(`Copied ${file} to Android raw resources`);
  });
}

module.exports = (appConfig) => {
  return plugins.withDangerousMod(appConfig, [
    "android",
    (config) => {
      const projectRoot = config.modRequest.projectRoot;
      copyRiveFilesToAndroidRaw(projectRoot);
      console.log("Rive animations have been copied to Android project successfully!");

      return config;
    },
  ]);
};
