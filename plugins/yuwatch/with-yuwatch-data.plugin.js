const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

const WATCH_TARGET_CONTENT = `
if ENV['ENABLE_YUWATCH'] == '1' then
  target 'YuWatch' do
    platform :watchos, '5.0'
    pod "Apollo"
    pod "Mixpanel-swift"
  end
else
  remove_yu_watch_from_project()
end`;

// expo-targets copies the apps info into the watch app. We need to revert this
const WATCH_INFO_PLIST = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>UIAppFonts</key>
	<array>
		<string>LotaLight.ttf</string>
		<string>LotaBold.ttf</string>
		<string>LotaRegular.ttf</string>
		<string>LotaRegularItalic.ttf</string>
		<string>LotaSemibold.ttf</string>
	</array>
	<key>NSHealthShareUsageDescription</key>
	<string>We use your step data so we can verify you have completed challenges.</string>
	<key>NSHealthUpdateUsageDescription</key>
	<string>Need the ability to write your step data so we can update completed challenges</string>
</dict>
</plist>
`;

const WATCH_SCHEME = `<?xml version="1.0" encoding="UTF-8"?>
<Scheme
   LastUpgradeVersion = "1520"
   version = "1.7">
   <BuildAction
      parallelizeBuildables = "YES"
      buildImplicitDependencies = "YES">
      <BuildActionEntries>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "8A1969D62B7EC2BC000B104C"
               BuildableName = "YuWatch.app"
               BlueprintName = "YuWatch"
               ReferencedContainer = "container:YuLife.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
               BuildableName = "YuLife.app"
               BlueprintName = "YuLife"
               ReferencedContainer = "container:YuLife.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
      </BuildActionEntries>
   </BuildAction>
   <TestAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      shouldUseLaunchSchemeArgsEnv = "YES"
      shouldAutocreateTestPlan = "YES">
   </TestAction>
   <LaunchAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      launchStyle = "0"
      useCustomWorkingDirectory = "NO"
      ignoresPersistentStateOnLaunch = "NO"
      debugDocumentVersioning = "YES"
      debugServiceExtension = "internal"
      allowLocationSimulation = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "8A1969D62B7EC2BC000B104C"
            BuildableName = "YuWatch.app"
            BlueprintName = "YuWatch"
            ReferencedContainer = "container:YuLife.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
   </LaunchAction>
   <ProfileAction
      buildConfiguration = "Release"
      shouldUseLaunchSchemeArgsEnv = "YES"
      savedToolIdentifier = ""
      useCustomWorkingDirectory = "NO"
      debugDocumentVersioning = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "8A1969D62B7EC2BC000B104C"
            BuildableName = "YuWatch.app"
            BlueprintName = "YuWatch"
            ReferencedContainer = "container:YuLife.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
   </ProfileAction>
   <AnalyzeAction
      buildConfiguration = "Debug">
   </AnalyzeAction>
   <ArchiveAction
      buildConfiguration = "Release"
      revealArchiveInOrganizer = "YES">
   </ArchiveAction>
</Scheme>
`;

module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      fs.symlinkSync("../scripts/remove-yuwatch.rb", "./ios/remove-yuwatch.rb", "file");
      fs.writeFileSync("./ios/YuLife.xcodeproj/xcshareddata/xcschemes/YuWatch.xcscheme", WATCH_SCHEME);
      fs.writeFileSync("./targets/YuWatch/Info.plist", WATCH_INFO_PLIST);
      const podFilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");
      const contents = fs.readFileSync(podFilePath, "utf-8");
      if (!contents.includes("remove-yuwatch.rb")) {
        const splitContents = contents.split(`\n`);
        splitContents.splice(1, 0, `require_relative 'remove-yuwatch.rb'`);

        const prepareIndex = splitContents.findIndex((line) => line.includes("prepare_react_native_project!"));

        splitContents.splice(prepareIndex - 1, 0, WATCH_TARGET_CONTENT);

        const newContents = splitContents.join("\n");
        fs.writeFileSync(podFilePath, newContents);
      }

      return config;
    },
  ]);
};
