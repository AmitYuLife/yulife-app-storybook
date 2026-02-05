const { withDangerousMod, withPlugins, withXcodeProject } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

function withReactNativeNavigationIOS(config) {
  // First, ensure ReactNativeVersionExtracted.h is generated
  // This is normally done by pod's prepare_command, but it doesn't always run on incremental installs
  config = withDangerousMod(config, [
    'ios',
    async (config) => {
      const projectRoot = config.modRequest.projectRoot;
      const generateVersionHeader = require(
        path.join(projectRoot, 'node_modules/react-native-navigation/autolink/postlink/__helpers__/generate_version_header.js')
      );
      generateVersionHeader.generateVersionHeader();
      return config;
    },
  ]);

  // Handle the AppDelegate modifications
  config = withDangerousMod(config, [
    'ios',
    async (config) => {
      const projectRoot = config.modRequest.projectRoot;
      const appName = config.modRequest.projectName || 'yulifernexpo53';
      const appDelegatePath = path.join(
        projectRoot,
        'ios',
        appName,
        'AppDelegate.swift'
      );

      // Create RNNHelper files (use .mm for Objective-C++ to support New Architecture C++ headers)
      const rnnHelperHPath = path.join(projectRoot, 'ios', appName, 'RNNHelper.h');
      const rnnHelperMPath = path.join(projectRoot, 'ios', appName, 'RNNHelper.mm');
      const bridgingHeaderPath = path.join(
        projectRoot,
        'ios',
        appName,
        `${appName}-Bridging-Header.h`
      );

      // Write RNNHelper.h - use id to avoid complex module imports in bridging header
      fs.writeFileSync(
        rnnHelperHPath,
        `#import <Foundation/Foundation.h>

@interface RNNHelper : NSObject

+ (void)bootstrapWithFactory:(id _Nonnull)factory launchOptions:(NSDictionary * _Nullable)launchOptions;

@end
`
      );

      // Write RNNHelper.m - use quotes for imports since we add the header search path
      fs.writeFileSync(
        rnnHelperMPath,
        `#import "RNNHelper.h"
#import "ReactNativeNavigation.h"
#import <React-RCTAppDelegate/RCTRootViewFactory.h>
#import <React/RCTBridgeModule.h>

// Declare the interop functions
FOUNDATION_EXPORT void RCTEnableTurboModuleInterop(BOOL enabled);
FOUNDATION_EXPORT void RCTEnableTurboModuleInteropBridgeProxy(BOOL enabled);

@implementation RNNHelper

+ (void)bootstrapWithFactory:(id)factoryObj launchOptions:(NSDictionary *)launchOptions {
    // Enable turbo module interop for legacy modules like EXNativeModulesProxy
    RCTEnableTurboModuleInterop(YES);
    RCTEnableTurboModuleInteropBridgeProxy(YES);

    RCTRootViewFactory *factory = (RCTRootViewFactory *)factoryObj;
    // Create the reactHost if it doesn't exist
    if (!factory.reactHost) {
        factory.reactHost = [factory createReactHost:launchOptions];
    }
    // Bootstrap RNN with the host
    [ReactNativeNavigation bootstrapWithHost:factory.reactHost];
}

@end
`
      );

      // Update or create bridging header
      let bridgingHeaderContent = '';
      if (fs.existsSync(bridgingHeaderPath)) {
        bridgingHeaderContent = fs.readFileSync(bridgingHeaderPath, 'utf-8');
      } else {
        bridgingHeaderContent = `//
// Use this file to import your target's public headers that you would like to expose to Swift.
//
`;
      }

      if (!bridgingHeaderContent.includes('#import "RNNHelper.h"')) {
        bridgingHeaderContent += '\n#import "RNNHelper.h"\n';
        fs.writeFileSync(bridgingHeaderPath, bridgingHeaderContent);
      }

      // Modify AppDelegate.swift
      if (fs.existsSync(appDelegatePath)) {
        let contents = fs.readFileSync(appDelegatePath, 'utf-8');

        // We need to restructure didFinishLaunchingWithOptions to:
        // 1. Call super FIRST to initialize Expo modules
        // 2. Then set up RNN
        // This is critical because Expo modules must be initialized before RNN bootstrap

        // Replace the entire didFinishLaunchingWithOptions body
        const didFinishPattern = /(public override func application\(\s*_ application: UIApplication,\s*didFinishLaunchingWithOptions launchOptions: \[UIApplication\.LaunchOptionsKey: Any\]\? = nil\s*\) -> Bool \{)([\s\S]*?)((?=\n\s*\/\/ Linking API|\n\s*public override func application\(\s*_ app:))/;

        const newDidFinishBody = `$1
    let delegate = ReactNativeDelegate()
    let factory = ExpoReactNativeFactory(delegate: delegate)
    delegate.dependencyProvider = RCTAppDependencyProvider()

    reactNativeDelegate = delegate
    reactNativeFactory = factory
    bindReactNativeFactory(factory)

#if os(iOS) || os(tvOS)
    window = UIWindow(frame: UIScreen.main.bounds)
    // RNN Integration: bootstrap using Objective-C helper
    RNNHelper.bootstrap(withFactory: factory.rootViewFactory, launchOptions: launchOptions)
#endif

    // Call super to notify Expo app delegate subscribers
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

$3`;

        if (didFinishPattern.test(contents)) {
          contents = contents.replace(didFinishPattern, newDidFinishBody);
        }

        fs.writeFileSync(appDelegatePath, contents);
      }

      return config;
    },
  ]);

  // Add the Objective-C files to the Xcode project
  config = withXcodeProject(config, (config) => {
    const project = config.modResults;
    const appName = config.modRequest.projectName || 'yulifernexpo53';

    // Find the app group key
    const groups = project.hash.project.objects.PBXGroup;
    let appGroupKey = null;

    for (const key in groups) {
      const group = groups[key];
      if (group && typeof group === 'object' && group.name === appName) {
        appGroupKey = key;
        break;
      }
    }

    if (appGroupKey) {
      // Add RNNHelper.mm to build sources - addSourceFile handles everything:
      // - Creates PBXFileReference
      // - Creates PBXBuildFile entry
      // - Adds to Sources build phase
      // - Adds to group
      const rnnHelperMPath = `${appName}/RNNHelper.mm`;
      if (!project.hasFile(rnnHelperMPath)) {
        project.addSourceFile(rnnHelperMPath, null, appGroupKey);
      }

      // Add RNNHelper.h to group (headers don't need to be in build sources)
      const rnnHelperHPath = `${appName}/RNNHelper.h`;
      if (!project.hasFile(rnnHelperHPath)) {
        project.addHeaderFile(rnnHelperHPath, null, appGroupKey);
      }
    }

    // Set the bridging header and header search paths in all build configurations
    const configurations = project.pbxXCBuildConfigurationSection();
    for (const key in configurations) {
      if (typeof configurations[key].buildSettings !== 'undefined') {
        const buildSettings = configurations[key].buildSettings;
        buildSettings.SWIFT_OBJC_BRIDGING_HEADER = `${appName}/${appName}-Bridging-Header.h`;

        // Add header search paths for ReactNativeNavigation private headers
        const rnnHeaderPath = '"$(PODS_ROOT)/Headers/Private/ReactNativeNavigation"';
        const inherited = '"$(inherited)"';

        // Always ensure we have inherited + RNN path
        buildSettings.HEADER_SEARCH_PATHS = `(${inherited}, ${rnnHeaderPath})`;

        // Enable New Architecture preprocessor flag for RNN
        buildSettings.GCC_PREPROCESSOR_DEFINITIONS = `(${inherited}, "RCT_NEW_ARCH_ENABLED=1")`;
      }
    }

    return config;
  });

  return config;
}

function withReactNativeNavigation(config) {
  return withPlugins(config, [withReactNativeNavigationIOS]);
}

module.exports = withReactNativeNavigation;
