const plugins = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

// Fix fmt 11.0.2 consteval compilation error with Xcode 26.4+
// See: https://github.com/expo/expo/issues/44229
const FMT_FIX = `
    # Fix fmt 11.0.2 consteval compilation error with Xcode 26.4+
    fmt_base = File.join(installer.sandbox.pod_dir('fmt'), 'include', 'fmt', 'base.h')
    if File.exist?(fmt_base)
      content = File.read(fmt_base)
      patched = content.gsub(/#\\s*define FMT_USE_CONSTEVAL 1/, '# define FMT_USE_CONSTEVAL 0')
      if patched != content
        File.chmod(0644, fmt_base)
        File.write(fmt_base, patched)
      end
    end`;

module.exports = (config) => {
  return plugins.withDangerousMod(config, [
    "ios",
    async (config) => {
      const podFilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");
      let contents = fs.readFileSync(podFilePath, "utf-8");

      if (contents.includes("FMT_USE_CONSTEVAL")) return config;

      const postInstallIndex = contents.indexOf("post_install do |installer|");
      if (postInstallIndex === -1) return config;

      const insertAfter = contents.indexOf("\n", postInstallIndex);
      contents = contents.slice(0, insertAfter) + "\n" + FMT_FIX + contents.slice(insertAfter);

      fs.writeFileSync(podFilePath, contents);
      return config;
    },
  ]);
};
