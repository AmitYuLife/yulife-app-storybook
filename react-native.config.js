module.exports = {
  dependencies: {
    "@yu-life/react-native-fitkit": {
      platforms: {
        android: null,
      },
    },
    "react-native-video": {
      platforms: {
        android: {
          sourceDir: "../node_modules/react-native-video/android-exoplayer",
        },
      },
    },
  },
  assets: ["./assets"],
};
