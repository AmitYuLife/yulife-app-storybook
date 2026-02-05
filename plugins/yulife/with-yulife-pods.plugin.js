const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

const ANCHOR = `YULIFE_CUSTOM_PODS`;
const CUSTOM_PODS = `
# BEGIN_${ANCHOR}
plugin 'cocoapods-bugsnag'

pod 'RNFitKit', :path => '../node_modules/@yu-life/react-native-fitkit/ios'
# SDWebImage version pinning removed - expo-image manages this dependency

dynamic_frameworks = ['Leanplum-iOS-SDK', 'CleverTap-iOS-SDK', 'SDWebImage']
pre_install do |installer|
  Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}
  installer.pod_targets.each do |pod|
      if dynamic_frameworks.include?(pod.name)
        puts "Setting dynamic linking for #{pod.name}"
        def pod.build_type;
          Pod::BuildType.dynamic_framework
        end
      end
    end
end
# END_${ANCHOR}
`;

const DEPLOYMENT_TARGET_FIX = `
    # Force minimum iOS deployment target for all pods
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        if config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'].to_f < 16.0
          config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '16.0'
        end
      end
    end
`;

module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      const podFilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");
      let contents = fs.readFileSync(podFilePath, "utf-8");

      const splitContents = contents.split(`\n`);
      const insertIndex = splitContents.findIndex((line) => line.includes("post_install do |installer|"));

      splitContents.splice(
        insertIndex - 1,
        0,
        CUSTOM_PODS.split(`\n`)
          .map((line) => {
            if (!line) {
              return "";
            }

            return `  ${line}`;
          })
          .join("\n")
      );

      // Insert deployment target fix after post_install do |installer|
      const postInstallIndex = splitContents.findIndex((line) => line.includes("post_install do |installer|"));
      if (postInstallIndex !== -1) {
        splitContents.splice(postInstallIndex + 1, 0, DEPLOYMENT_TARGET_FIX);
      }

      const newContents = splitContents.join("\n");
      fs.writeFileSync(podFilePath, newContents);

      return config;
    },
  ]);
};
