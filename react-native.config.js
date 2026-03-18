module.exports = {
  dependencies: {
    "@yu-life/react-native-fitkit": {
      platforms: {
        android: null,
      },
    },
    "@yu-life/react-native-yu-health": {
      root: "./targets/YuHealth",
      platforms: {
        ios: {
          podspecPath: "./targets/YuHealth/react-native-yu-health.podspec",
        },
        android: {
          sourceDir: "./targets/YuHealth/android",
          packageImportPath: "import com.yuhealth.YuHealthPackage;",
          packageInstance: "new YuHealthPackage()",
          libraryName: "RNYuHealthSpec",
          componentDescriptors: [],
          cmakeListsPath:
            "./targets/YuHealth/android/build/generated/source/codegen/jni/CMakeLists.txt",
        },
      },
    },
    ...(process.env.NO_FLIPPER
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),
  },
  assets: ["./assets"],
};
