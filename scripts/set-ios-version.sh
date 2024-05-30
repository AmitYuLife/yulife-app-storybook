#!/usr/bin/env bash -e

PROJECT_DIR="ios/yulife"
INFOPLIST_FILE="Info.plist"
INFOPLIST_DIR="${PROJECT_DIR}/${INFOPLIST_FILE}"

PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
PACKAGE_VERSION_CODE=$(cat package.json | grep versionCode | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

# Update plist with new values
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${PACKAGE_VERSION#*v}" "${INFOPLIST_DIR}"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $BITRISE_BUILD_NUMBER" "${INFOPLIST_DIR}"

sed -i '' "s/MARKETING_VERSION = [^;]*;/MARKETING_VERSION = ${PACKAGE_VERSION#*v};/" ios/YuLife.xcodeproj/project.pbxproj
sed -i '' "s/CURRENT_PROJECT_VERSION = [^;]*;/CURRENT_PROJECT_VERSION = ${BITRISE_BUILD_NUMBER};/" ios/YuLife.xcodeproj/project.pbxproj