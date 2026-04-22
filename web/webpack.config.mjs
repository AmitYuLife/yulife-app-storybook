import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const STORYBOOK_ALIASES = path.resolve(ROOT, ".storybook/aliases");

export default (_env, argv) => {
  const isDev = argv.mode !== "production";

  return {
    entry: path.resolve(__dirname, "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDev ? "bundle.js" : "bundle.[contenthash:8].js",
      publicPath: "/",
      clean: true,
    },

    mode: isDev ? "development" : "production",
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",

    devServer: {
      static: [
        { directory: path.resolve(ROOT, "assets"), publicPath: "/assets" },
        { directory: path.resolve(__dirname, "dist") },
      ],
      port: 3000,
      hot: false,
      liveReload: false,
      // Client overlay/HMR injects `webpack-dev-server/client/modules/logger/index.js` which
      // breaks under our resolve.extensions / babel config — disabling the client avoids the
      // "Cannot find module" / "exports is not defined" runtime error in the bundle.
      client: false,
      webSocketServer: false,
      historyApiFallback: true,
      open: true,
    },

    resolve: {
      alias: {
        // Project path aliases (same as storybook)
        "@app": path.resolve(ROOT, "src"),
        "@assets": path.resolve(ROOT, "assets"),
        "@components": path.resolve(ROOT, "src/components"),
        "@atoms": path.resolve(ROOT, "src/components/atoms"),
        "@organisms": path.resolve(ROOT, "src/components/organisms"),
        "@containers": path.resolve(ROOT, "src/components/containers"),
        "@modals": path.resolve(ROOT, "src/components/modals"),
        "@molecules": path.resolve(ROOT, "src/components/molecules"),
        "@screens": path.resolve(ROOT, "src/components/screens"),
        "@graphql": path.resolve(ROOT, "src/graphql"),
        "@navigation": path.resolve(ROOT, "src/navigation"),
        "@redux": path.resolve(ROOT, "src/redux"),
        "@services": path.resolve(ROOT, "src/services"),
        "@utils": path.resolve(ROOT, "src/utils"),
        "@styles": path.resolve(ROOT, "src/styles"),
        "@locale": path.resolve(ROOT, "src/locale"),
        "@hooks": path.resolve(ROOT, "src/hooks"),
        "@theme": path.resolve(ROOT, "src/theme"),
        "@modules": path.resolve(ROOT, "src/modules"),
        "@ids": path.resolve(ROOT, "e2e/_utils/navigation/ids"),
        "@e2e": path.resolve(ROOT, "e2e"),
        "@mockclient": path.resolve(ROOT, "e2e/_utils/socket/client"),

        // React Native Web (with shim for missing native-only APIs)
        "react-native$": path.join(__dirname, "aliases/react-native-web-shim"),

        // *** Override: use our functional web navigation instead of the empty stub ***
        "react-native-navigation": path.resolve(__dirname, "react-native-navigation.tsx"),

        // Reuse all storybook aliases for native module stubs
        "@leanplum/react-native-sdk": path.join(STORYBOOK_ALIASES, "leanplum"),
        "@intercom/intercom-react-native": path.join(__dirname, "aliases/intercom"),
        "@stripe/stripe-react-native": path.join(__dirname, "aliases/stripe-react-native"),
        "@yu-life/react-native-fitkit": path.join(__dirname, "aliases/fitkit"),
        "@yu-life/react-native-yu-health": path.join(__dirname, "aliases/yu-health"),
        "@react-native-community/blur": path.join(STORYBOOK_ALIASES, "react-native-blur"),
        "react-native-linear-gradient": path.join(__dirname, "aliases/react-native-linear-gradient"),
        "react-native-mixpanel": path.join(STORYBOOK_ALIASES, "mixpanel"),
        "@bugsnag/expo": path.join(__dirname, "aliases/bugsnag"),
        "@danielsaraldi/react-native-blur-view": path.join(__dirname, "aliases/react-native-blur-view"),
        "react-native-animatable": path.join(STORYBOOK_ALIASES, "react-native-animatable"),
        "react-native-webview": path.join(__dirname, "aliases/react-native-webview"),
        "react-native-encrypted-storage": path.join(__dirname, "aliases/react-native-encrypted-storage"),
        "react-native-video": path.join(STORYBOOK_ALIASES, "react-native-video"),
        "react-native-video-controls": path.join(STORYBOOK_ALIASES, "react-native-video-controls"),
        "react-native-config": path.join(__dirname, "aliases/react-native-config"),
        "@react-native-camera-roll/camera-roll": path.join(STORYBOOK_ALIASES, "react-native-camera-roll"),
        "react-native-view-shot": path.join(STORYBOOK_ALIASES, "react-native-view-shot"),
        "react-native-permissions": path.join(STORYBOOK_ALIASES, "react-native-permissions"),
        "react-native-track-player": path.join(STORYBOOK_ALIASES, "react-native-track-player"),
        "expo-image": path.join(__dirname, "aliases/expo-image"),
        "react-native-share": path.join(STORYBOOK_ALIASES, "react-native-share"),
        "@hcaptcha/react-native-hcaptcha": path.join(STORYBOOK_ALIASES, "react-native-hcaptcha"),
        "@datadog/mobile-react-native": path.join(STORYBOOK_ALIASES, "datadog-mobile-react-native"),
        "react-airplay": path.join(__dirname, "aliases/react-airplay"),
        "react-native-google-cast": path.join(__dirname, "aliases/react-native-google-cast"),
        "@lottiefiles/dotlottie-react": path.join(STORYBOOK_ALIASES, "dotlottie-react"),

        // Additional aliases needed for full app (not just stories)
        "expo-secure-store": path.join(__dirname, "aliases/expo-secure-store"),
        "expo-splash-screen": path.join(__dirname, "aliases/expo-splash-screen"),
        "expo-device": path.join(__dirname, "aliases/expo-device"),
        "expo-application": path.join(__dirname, "aliases/expo-application"),
        "expo-haptics": path.join(__dirname, "aliases/expo-haptics"),
        "@react-native-async-storage/async-storage": path.join(__dirname, "aliases/async-storage"),
        "react-native-push-notification": path.join(STORYBOOK_ALIASES, "react-native-push-notification"),
        "@yu-life/react-native-yu-watch": path.join(__dirname, "aliases/yu-watch"),
        "@react-native-community/netinfo": path.join(__dirname, "aliases/netinfo"),
      },
      extensions: [".web.tsx", ".web.ts", ".web.js", ".tsx", ".ts", ".js"],
      fallback: {
        process: path.resolve(ROOT, "node_modules/process/browser.js"),
        buffer: path.resolve(ROOT, "node_modules/buffer/index.js"),
      },
    },

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude:
            /node_modules\/(?!(react-native-reanimated|@react-native\/assets-registry|expo-haptics|expo-modules-core|expo|@expo|react-native-web-linear-gradient)\/).*/,
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
          resolve: { fullySpecified: false },
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
        __DEV__: isDev,
        "process.env.NODE_ENV": JSON.stringify(isDev ? "development" : "production"),
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
      }),
    ],
  };
};
