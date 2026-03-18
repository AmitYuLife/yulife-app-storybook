module.exports = {
  dependencies: {
    "@yu-life/react-native-fitkit": {
      platforms: {
        android: null,
      },
    },
    ...(process.env.NO_FLIPPER
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),
  },
  assets: ["./assets"],
};
