#!/usr/bin/env bash

# Set shell options to enable fail-fast behavior
#
# * -e: fail the script when an error occurs or command fails
# * -u: fail the script when attempting to reference unset parameters
# * -o pipefail: by default an exit status of a pipeline is that of its
#                last command, this fails the pipe early if an error in
#                any of its commands occurs
# * -x: print each command before executing it
#
set -eo pipefail

# shellcheck disable=SC1090
source ~/.zprofile

function build_app() {
  echo "🔨 Prebuilding app..."
  EXPO_NO_GIT_STATUS=1 EXPO_NO_DOTENV=1 npx expo prebuild --platform "$PLATFORM" --no-install --clean
  cd ios
  echo "🔨 Installing dependencies..."
  # Print versions
  echo "🔨 Ruby version: $(ruby -v)"
  echo "🔨 CocoaPods version: $(pod --version)"
  echo "🔨 Bundler version: $(bundle --version)"
  echo "🔨 Node version: $(node --version)"
  CP_HOME_DIR=$CP_HOME_DIR bundle install
  CP_HOME_DIR=$CP_HOME_DIR bundle exec pod install --repo-update
  cd ..
  echo "🔨 Building app..."
  yarn detox:build -c "$DETOX_BUILD_CONFIG" > detox-build.log || (tail -n 100 detox-build.log && exit 1)
  echo "🔨 Done."
}

if [[ "$DETOX_BUILD_CONFIG" == "ios.sim.release" ]]; then
  APP_BUILD_PATH="ios/build/Build/Products/Release-iphonesimulator/YuLife.app"
else
  APP_BUILD_PATH="ios/build/Build/Products/Debug-iphonesimulator/YuLife.app"
fi

# Check if we should skip the build:
# - Skip if app exists in cache AND we're not forcing a build
# - Build if app doesn't exist OR if FORCE_DETOX_BUILD is set to "1"
if [[ -d "$APP_BUILD_PATH" ]] && [[ "$FORCE_DETOX_BUILD" != "1" ]]; then
  echo "🔍 App build found in cache, skipping build..."
else
  if [[ "$FORCE_DETOX_BUILD" == "1" ]]; then
    echo "🔄 Force build enabled (FORCE_DETOX_BUILD=1), building app..."
  else
    echo "❌ App build not found in cache, building app..."
  fi
  build_app
fi
