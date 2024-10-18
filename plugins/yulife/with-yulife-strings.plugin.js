const { AndroidConfig, withStringsXml } = require("@expo/config-plugins");

module.exports = function androiManifestPlugin(app) {
  return withStringsXml(app, async (config) => {
    config.modResults = AndroidConfig.Strings.setStringItem(
      [
        {
          // TODO: From env, maybe move this to intercom plugin?
          _: "363663854129",
          $: {
            name: "intercom_gcm_sender_id",
          },
        },
        {
          _: "https://www.yulife.com/privacy-policy",
          $: {
            name: "privacy_policy_url",
          },
        },
        {
          _: app.version,
          $: {
            name: "app_version",
          },
        },
      ],
      config.modResults
    );

    return config;
  });
};
