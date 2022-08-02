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
      "react-native-spring-scrollview": path.join(__dirname, "/aliases/react-native-spring-scrollview"),
      "react-native-navigation": path.join(__dirname, "/aliases/react-native-navigation"),
      "react-native-animatable": path.join(__dirname, "/aliases/react-native-animatable"),
      "react-native-push-notification": path.join(__dirname, "/aliases/react-native-push-notification"),
      "react-native-largelist-v3": path.join(__dirname, "/aliases/react-native-largelist-v3"),
      "react-native-webview": path.join(__dirname, "/aliases/react-native-webview"),
      "react-native-fast-image": path.join(__dirname, "/aliases/react-native-fast-image"),
      "react-native-encrypted-storage": path.join(__dirname, "/aliases/react-native-encrypted-storage"),
      "react-native-music-control": path.join(__dirname, "/aliases/react-native-music-control"),
      "react-native-video": path.join(__dirname, "/aliases/react-native-video"),
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
        test: /\.(png|jpe?g|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader",
      },
    ],
  },
};

module.exports = {
  stories: ["../src/components/@(atoms|molecules)/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["storybook-addon-designs", "@storybook/addon-viewport"],
  webpackFinal: (config) => {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: { ...config.resolve.alias, ...CUSTOM_CONFIG.resolve.alias },
        extensions: CUSTOM_CONFIG.resolve.extensions,
      },
      module: { ...config.module, rules: CUSTOM_CONFIG.module.rules },
    };

    return newConfig;
  },
};
