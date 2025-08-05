const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

const TARGETS_DIR = path.join(__dirname, "../../assets/rive");

function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

function moveAnimationFilesToNative(assetsPath, xcodeProject) {
  const animationFiles = fs.readdirSync(TARGETS_DIR);
  const mainTarget = xcodeProject.getFirstTarget().uuid;
  const mainGroup = xcodeProject.getFirstProject().firstProject.mainGroup;

  const assetsPbxGroup = xcodeProject.addPbxGroup([], "Assets", "Assets");

  xcodeProject.addToPbxGroup(assetsPbxGroup.uuid, mainGroup);

  animationFiles.map((file) => {
    const sourceFile = path.join(TARGETS_DIR, file);
    const fileContent = fs.readFileSync(sourceFile);

    const fileRef = xcodeProject.addFile(sourceFile, assetsPbxGroup.uuid);

    const buildFileUUID = xcodeProject.generateUuid();
    xcodeProject.pbxBuildFileSection()[buildFileUUID] = {
      isa: "PBXBuildFile",
      fileRef: fileRef.fileRef,
      fileRef_comment: file,
    };

    xcodeProject.pbxBuildFileSection()[buildFileUUID + "_comment"] = `${file} in Resources`;

    const resourcesBuildPhase = xcodeProject.pbxResourcesBuildPhaseObj(mainTarget);

    resourcesBuildPhase.files.push({
      value: buildFileUUID,
      comment: `${file} in Resources`,
    });

    fs.writeFileSync(path.join(assetsPath, file), fileContent);
  });
}

module.exports = (appConfig, _) => {
  return plugins.withXcodeProject(appConfig, (config) => {
    const xcodeProject = config.modResults;
    const projectPath = config.modRequest.projectRoot;
    const assetsPath = path.join(projectPath, "ios", "Assets");
    ensureDirectoryExists(assetsPath);
    moveAnimationFilesToNative(assetsPath, xcodeProject);
    console.log("Animations have been moved to native project succefssully!");

    return config;
  });
};
