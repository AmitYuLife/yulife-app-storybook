#!/bin/sh

# DO NOTHING
# Source maps will be upload as part of the build stage

# PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
# BUGSNAG_API_KEY=eb1470c4d4e0aa8970c73fe562c7251b # fine to commit, we have in .env (is notifier key)
# IOS_BUILD_PROD=XXXX # Replace build number from bitrise
# ANDROID_BUILD_PROD=XXXX # Replace build number from bitrise

# echo "Cleaning...";
# rm android-release.bundle android-release.bundle.map ios-release.bundle ios-release.bundle.map || true

# echo "Base package version $PACKAGE_VERSION"

# echo "Bundling Android..."
# yarn react-native bundle \
#   --dev false \
#   --entry-file index.js \
#   --platform android \
#   --sourcemap-output android-release.bundle.map \
#   --bundle-output android-release.bundle

# echo "Bundling iOS..."
# yarn react-native bundle \
#     --platform ios \
#     --dev false \
#     --entry-file index.js \
#     --bundle-output ios-release.bundle \
#     --sourcemap-output ios-release.bundle.map

# echo "Replacing Android version code"
# node scripts/replace-package-versionCodes.js $ANDROID_BUILD_PROD
# PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
# echo "Uploading Android to bugsnag... $PACKAGE_VERSION"

# echo "Uploading Android to bugsnag..."
# bugsnag-sourcemaps upload \
#   --api-key=$BUGSNAG_API_KEY \
#   --app-version=$PACKAGE_VERSION \
#   --minifiedFile=android-release.bundle.map \
#   --source-map=android-release.bundle.map \
#   --minified-url=index.android.bundle \
#   --upload-sources \


# echo "Replacing iOS version code"
# node scripts/replace-package-versionCodes.js $IOS_BUILD_PROD
# PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
# echo "Uploading iOS to bugsnag... $PACKAGE_VERSION"

# echo "Uploading iOS to bugsnag..."
# bugsnag-sourcemaps upload \
#     --api-key $BUGSNAG_API_KEY \
#     --app-version $PACKAGE_VERSION \
#     --minified-file ios-release.bundle \
#     --source-map ios-release.bundle.map \
#     --minified-url main.jsbundle \
#     --upload-sources \
#     --overwrite true