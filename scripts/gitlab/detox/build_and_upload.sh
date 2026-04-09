#!/usr/bin/env bash

set -eo pipefail

# shellcheck disable=SC1090
source ~/.zprofile

# Export DEVELOPER_DIR to ensure xcodebuild uses the correct Xcode version
if [[ -n "${DEVELOPER_DIR:-}" ]] && [[ -d "$DEVELOPER_DIR" ]]; then
  export DEVELOPER_DIR
  echo "Using Xcode at: $DEVELOPER_DIR"
else
  echo "DEVELOPER_DIR not set or path does not exist, using default Xcode"
fi

# --- Derive build variant from DETOX_BUILD_CONFIG ---
if [[ "$DETOX_BUILD_CONFIG" == "ios.sim.release" ]]; then
  BUILD_VARIANT="Release"
else
  BUILD_VARIANT="Debug"
fi

BUILD_PRODUCTS_DIR="${BUILD_VARIANT}-iphonesimulator"

# --- Install dependencies ---
nvm install -b
PATH="$(dirname "$(nvm which --silent)"):$PATH"
export PATH
echo "Node version: $(node --version)"
corepack enable
pnpm install --frozen-lockfile

# --- Generate fingerprint ---
# Unset GITLAB_CI so app.config.ts uses the static BITRISE_BUILD_NUMBER for version code,
# ensuring the fingerprint is stable across pipeline runs.
echo "Generating Expo fingerprint for iOS..."
EXPO_HASH=$(GITLAB_CI= pnpm --silent exec fingerprint fingerprint:generate --platform ios | jq -r '.hash')
PODFILE_HASH=$(shasum -a 256 support/ios/Podfile.lock | cut -d' ' -f1)
FINGERPRINT_HASH=$(echo "${EXPO_HASH}${PODFILE_HASH}" | shasum -a 256 | cut -d' ' -f1)
echo "Expo hash: $EXPO_HASH"
echo "Podfile.lock hash: $PODFILE_HASH"
echo "Combined fingerprint: $FINGERPRINT_HASH"
echo "$FINGERPRINT_HASH" > fingerprint.txt

if [[ -z "$EXPO_HASH" || "$EXPO_HASH" == "null" ]]; then
  echo "ERROR: Failed to generate Expo fingerprint hash"
  exit 1
fi

# --- Check if a build with this fingerprint already exists ---
GITLAB_API="${CI_API_V4_URL}/projects/${CI_PROJECT_ID}"
ARTIFACTS_BASE="${GITLAB_API}/jobs/artifacts/develop/raw"

echo "Checking for existing ${BUILD_VARIANT} build with fingerprint ${FINGERPRINT_HASH}..."
EXISTING_FINGERPRINT=$(curl --silent --fail --location \
  --header "JOB-TOKEN: ${CI_JOB_TOKEN}" \
  "${ARTIFACTS_BASE}/fingerprint.txt?job=${CI_JOB_NAME}" 2>/dev/null || true)

if [[ "$EXISTING_FINGERPRINT" == "$FINGERPRINT_HASH" ]]; then
  echo "Fingerprint matches latest successful build. Downloading existing artifact..."
  curl --fail --location \
    --header "JOB-TOKEN: ${CI_JOB_TOKEN}" \
    --output YuLife.app.tar.gz \
    "${ARTIFACTS_BASE}/YuLife.app.tar.gz?job=${CI_JOB_NAME}"
  echo "Reusing existing build. Skipped xcodebuild."
else
  echo "No matching build found. Building..."

  # --- Build the app ---
  pnpm tsc

  echo "Prebuilding app..."
  EXPO_NO_GIT_STATUS=1 EXPO_NO_DOTENV=1 pnpm expo prebuild --platform "$PLATFORM" --no-install --clean

  cd ios
  echo "Ruby version: $(ruby -v)"
  echo "CocoaPods version: $(pod --version)"
  CP_HOME_DIR=$CP_HOME_DIR bundle install
  CP_HOME_DIR=$CP_HOME_DIR bundle exec pod install --repo-update
  cd ..

  echo "Building app with detox..."
  pnpm detox:build -c "$DETOX_BUILD_CONFIG" > detox-build.log || (tail -n 100 detox-build.log && exit 1)

  # --- Package ---
  APP_BUILD_PATH="ios/build/Build/Products/${BUILD_PRODUCTS_DIR}/YuLife.app"

  if [[ ! -d "$APP_BUILD_PATH" ]]; then
    echo "ERROR: Build output not found at $APP_BUILD_PATH"
    exit 1
  fi

  echo "Packaging build..."
  tar -czf YuLife.app.tar.gz -C "ios/build/Build/Products/${BUILD_PRODUCTS_DIR}" YuLife.app
fi

echo "Build ready: YuLife.app.tar.gz (fingerprint: ${FINGERPRINT_HASH})"
