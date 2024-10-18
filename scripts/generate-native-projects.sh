#!/bin/bash

# Remove ios directory contents, keeping pods and other support files
find ios -mindepth 1 -maxdepth 1 ! -name 'Pods' ! -name 'YuLife.xcworkspace' ! -name 'Podfile.lock' -exec rm -rf {} +

# Rename ios to ios-temp
mkdir ios-temp
mv ios/* ios-temp
rmdir ios

# Generate native project
npx expo prebuild --platform=ios --no-install

# Move pods back to ios
mv ios-temp/* ./ios/

# # Remove ios-temp
rm -rf ios-temp

# Move iOS privacy manifest - so it covers all targets
cp ios/YuLife/PrivacyInfo.xcprivacy ios/PrivacyInfo.xcprivacy

# Remove android directory contents, keeping support files and build
find android -mindepth 1 -maxdepth 1 ! -name 'build' ! -name 'local.properties' ! -name '.gradle' -exec rm -rf {} +

# Rename android to android-temp
mkdir android-temp
mv android/* android-temp
ls -a android
rm -rf android

# Generate native project
npx expo prebuild --platform=android --no-install 

# Move support files back
mv android-temp/* ./android/
rm -rf android-temp