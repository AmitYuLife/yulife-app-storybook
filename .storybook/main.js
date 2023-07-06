const path = require("path");
const CUSTOM_CONFIG = {
  resolve: {
    alias: {
      "react-native$": "react-native-web",
      "@storybook/react-native": "@storybook/react",
      "@leanplum/react-native-sdk": path.join(__dirname, "/aliases/leanplum"),
      "@intercom/intercom-react-native": path.join(__dirname, "/aliases/intercom"),
      "@react-native-community/blur": path.join(__dirname, "/aliases/react-native-blur"),
      "@stripe/stripe-react-native": path.join(__dirname, "/aliases/stripe-react-native"),
      "@yu-life/react-native-fitkit": path.join(__dirname, "/aliases/fitkit"),
      "@react-native-community/push-notification-ios": path.join(__dirname, "/aliases/react-native-push-notification"),
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "react-native-mixpanel": path.join(__dirname, "/aliases/mixpanel"),
      "@bugsnag/react-native": path.join(__dirname, "/aliases/bugsnag"),
      "react-native-navigation": path.join(__dirname, "/aliases/react-native-navigation"),
      "react-native-animatable": path.join(__dirname, "/aliases/react-native-animatable"),
      "react-native-push-notification": path.join(__dirname, "/aliases/react-native-push-notification"),
      "react-native-webview": path.join(__dirname, "/aliases/react-native-webview"),
      "react-native-fast-image": path.join(__dirname, "/aliases/react-native-fast-image"),
      "react-native-encrypted-storage": path.join(__dirname, "/aliases/react-native-encrypted-storage"),
      "react-native-music-control": path.join(__dirname, "/aliases/react-native-music-control"),
      "react-native-video": path.join(__dirname, "/aliases/react-native-video"),
      "react-native-video-controls": path.join(__dirname, "/aliases/react-native-video-controls"),
      "react-native-config": path.join(__dirname, "/aliases/react-native-config"),
      "@react-native-camera-roll/camera-roll": path.join(__dirname, "/aliases/react-native-camera-roll"),
      "react-native-view-shot": path.join(__dirname, "/aliases/react-native-view-shot"),
      "react-native-reanimated": path.join(__dirname, "/aliases/react-native-reanimated"),
    },
    extensions: [".web.js", ".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|woff|woff2|eot|otf|ttf|svg)$/,
        loader: "file-loader",
      },
    ],
  },
};
module.exports = {
  // stories: ["../src/components/@(atoms)/**/*.stories.@(js|jsx|ts|tsx)"],
  stories: ["../src/components/atoms/heading/heading.stories.tsx"], //this is temp until we migrate all our atoms stories to the new format
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
  ],
  staticDirs: [{ from: "../assets", to: "/assets" }],
  webpackFinal: (config) => {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...CUSTOM_CONFIG.resolve.alias,
        },
        extensions: CUSTOM_CONFIG.resolve.extensions,
      },
      module: {
        ...config.module,
        rules: CUSTOM_CONFIG.module.rules,
      },
    };
    return newConfig;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
