const path = require("path");
const webpack = require("webpack");

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
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "react-native-mixpanel": path.join(__dirname, "/aliases/mixpanel"),
      "@bugsnag/expo": path.join(__dirname, "/aliases/bugsnag"),
      "@bugsnag/plugin-react-native-navigation": path.join(
        __dirname,
        "/aliases/bugsnag-plugin-react-native-navigation"
      ),
      "react-native-navigation": path.join(__dirname, "/aliases/react-native-navigation"),
      "react-native-animatable": path.join(__dirname, "/aliases/react-native-animatable"),
      "react-native-webview": path.join(__dirname, "/aliases/react-native-webview"),
      "react-native-encrypted-storage": path.join(__dirname, "/aliases/react-native-encrypted-storage"),
      "react-native-video": path.join(__dirname, "/aliases/react-native-video"),
      "react-native-video-controls": path.join(__dirname, "/aliases/react-native-video-controls"),
      "react-native-config": path.join(__dirname, "/aliases/react-native-config"),
      "@react-native-camera-roll/camera-roll": path.join(__dirname, "/aliases/react-native-camera-roll"),
      "react-native-view-shot": path.join(__dirname, "/aliases/react-native-view-shot"),
      "react-native-permissions": path.join(__dirname, "/aliases/react-native-permissions"),
      "react-native-track-player": path.join(__dirname, "/aliases/react-native-track-player"),
      "expo-image": path.join(__dirname, "/aliases/expo-image"),
      "react-native-share": path.join(__dirname, "/aliases/react-native-share"),
      "@hcaptcha/react-native-hcaptcha": path.join(__dirname, "/aliases/react-native-hcaptcha"),
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
        test: /\.(png|jpe?g|woff|woff2|eot|otf|ttf|svg|webp|lottie)$/,
        loader: "file-loader",
        options: {
          name: "[name].[hash:8].[ext]",
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === "development",
    }),
  ],
};
module.exports = {
  stories: ["../src/components/@(atoms|molecules|organisms|screens|sdui|modals)/**/*.stories.@(js|jsx|ts|tsx)"],

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
      plugins: [...config.plugins, ...CUSTOM_CONFIG.plugins],
    };
    return newConfig;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
