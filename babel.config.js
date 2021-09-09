module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  sourceMaps: "inline",
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ts", ".tsx"],
        alias: {
          "@assets": "./assets",
          "@components": "./src/components",
          "@atoms": "./src/components/atoms",
          "@organisms": "./src/components/organisms",
          "@containers": "./src/components/containers",
          "@modals": "./src/components/modals",
          "@molecules": "./src/components/molecules",
          "@screens": "./src/components/screens",
          "@graphql": "./src/graphql",
          "@navigation": "./src/navigation",
          "@redux": "./src/redux",
          "@services": "./src/services",
          "@utils": "./src/utils",
          "@styles": "./src/styles",
          "@mockclient": "./e2e/_utils/socket/client",
          "@e2e": "./e2e",
          "@ids": "./e2e/_utils/navigation/ids",
        },
      },
    ],
  ],
};
