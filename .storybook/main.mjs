import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";

const __dirname = dirname(fileURLToPath(import.meta.url));

const CUSTOM_CONFIG = {
  resolve: {
    alias: {
      // Project path aliases
      "@app": path.resolve(__dirname, "../src"),
      "@assets": path.resolve(__dirname, "../assets"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@atoms": path.resolve(__dirname, "../src/components/atoms"),
      "@organisms": path.resolve(__dirname, "../src/components/organisms"),
      "@containers": path.resolve(__dirname, "../src/components/containers"),
      "@modals": path.resolve(__dirname, "../src/components/modals"),
      "@molecules": path.resolve(__dirname, "../src/components/molecules"),
      "@screens": path.resolve(__dirname, "../src/components/screens"),
      "@graphql": path.resolve(__dirname, "../src/graphql"),
      "@navigation": path.resolve(__dirname, "../src/navigation"),
      "@redux": path.resolve(__dirname, "../src/redux"),
      "@services": path.resolve(__dirname, "../src/services"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@locale": path.resolve(__dirname, "../src/locale"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@theme": path.resolve(__dirname, "../src/theme"),
      "@modules": path.resolve(__dirname, "../src/modules"),
      "@ids": path.resolve(__dirname, "../e2e/_utils/navigation/ids"),
      "@e2e": path.resolve(__dirname, "../e2e"),
      "@mockclient": path.resolve(__dirname, "../e2e/_utils/socket/client"),
      // React Native Web aliases
      "react-native$": "react-native-web",
      "@leanplum/react-native-sdk": path.join(__dirname, "/aliases/leanplum"),
      "@intercom/intercom-react-native": path.join(__dirname, "/aliases/intercom"),
      "@stripe/stripe-react-native": path.join(__dirname, "/aliases/stripe-react-native"),
      "@yu-life/react-native-fitkit": path.join(__dirname, "/aliases/fitkit"),
      "@yu-life/react-native-yu-health": path.join(__dirname, "/aliases/yu-health"),
      "@react-native-community/blur": path.join(__dirname, "/aliases/react-native-blur"),
      "react-native-linear-gradient": "react-native-web-linear-gradient",
      "react-native-mixpanel": path.join(__dirname, "/aliases/mixpanel"),
      "@bugsnag/expo": path.join(__dirname, "/aliases/bugsnag"),
      "@bugsnag/plugin-react-native-navigation": path.join(
        __dirname,
        "/aliases/bugsnag-plugin-react-native-navigation"
      ),
      "@danielsaraldi/react-native-blur-view": path.join(__dirname, "/aliases/react-native-blur"),
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
      "@datadog/mobile-react-native": path.join(__dirname, "/aliases/datadog-mobile-react-native"),
      "react-airplay": path.join(__dirname, "/aliases/react-airplay"),
      "react-native-google-cast": path.join(__dirname, "/aliases/react-native-google-cast"),
      "@lottiefiles/dotlottie-react": path.join(__dirname, "/aliases/dotlottie-react"),
    },
    extensions: [".web.js", ".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude:
          /node_modules\/(?!(react-native-reanimated|@react-native\/assets-registry|expo-haptics|expo-modules-core|expo|@expo)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            presets: [
              ["@babel/preset-env", { targets: { browsers: ["last 2 versions"] } }],
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-runtime", "react-native-reanimated/plugin"],
          },
        },
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
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

export default {
  stories: [
    "../src/components/@(atoms|molecules|organisms|screens|sdui|modals)/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/modules/**/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-designs",
    "@storybook/addon-docs",
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

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
