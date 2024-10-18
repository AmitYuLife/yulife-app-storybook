const plugins = require("@expo/config-plugins");
const fs = require("fs");

// We use a custom splash screen that is completely white.
// Keeping this so it's the same as current project, but we should switch to expo splash screen
const YULIFE_SPLASH = `<?xml version="1.0" encoding="UTF-8"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0"
    toolsVersion="15702" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none"
    useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES"
    colorMatched="YES" initialViewController="01J-lp-oVM">
    <device id="retina4_7" orientation="portrait" appearance="light" />
    <dependencies>
        <deployment identifier="iOS" />
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="15704" />
        <capability name="Safe area layout guides" minToolsVersion="9.0" />
        <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0" />
    </dependencies>
    <scenes>
        <!--View
        Controller-->
        <scene sceneID="EHf-IW-A2E">
            <objects>
                <viewController id="01J-lp-oVM" sceneMemberID="viewController">
                    <view key="view" contentMode="scaleToFill" id="Ze5-6b-2t3">
                        <rect key="frame" x="0.0" y="0.0" width="375" height="667" />
                        <autoresizingMask key="autoresizingMask" widthSizable="YES"
                            heightSizable="YES" />
                        <color key="backgroundColor" systemColor="systemBackgroundColor"
                            cocoaTouchSystemColor="whiteColor" />
                        <viewLayoutGuide key="safeArea" id="Bcu-3y-fUS" />
                    </view>
                </viewController>
                <placeholder placeholderIdentifier="IBFirstResponder" id="iYj-Kq-Ea1"
                    userLabel="First Responder" sceneMemberID="firstResponder" />
            </objects>
            <point key="canvasLocation" x="52.173913043478265" y="375" />
        </scene>
    </scenes>
</document>`;

module.exports = (data) => {
  return plugins.withDangerousMod(data, [
    "ios",
    async (config) => {
      // splash screen runs after this plugin, so we need to wait
      // this is hacky, we should switch to expo splashscreen asap
      setTimeout(() => {
        fs.writeFileSync("./ios/YuLife/SplashScreen.storyboard", YULIFE_SPLASH);
      }, 1000);

      return config;
    },
  ]);
};
