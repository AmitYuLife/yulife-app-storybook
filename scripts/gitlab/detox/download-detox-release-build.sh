#!/usr/bin/env bash

set -eo pipefail

# Downloads the latest release build artifact from the build-detox-ios-release job.
# Used by E2E test jobs to avoid rebuilding the app.

JOB_NAME="build-detox-ios-release"
APP_BUILD_DIR="ios/build/Build/Products/Release-iphonesimulator"
APP_NAME="YuLife.app"

if [[ -d "${APP_BUILD_DIR}/${APP_NAME}" ]]; then
  echo "Release app already present at ${APP_BUILD_DIR}/${APP_NAME}, skipping download."
  exit 0
fi

GITLAB_API="${CI_API_V4_URL}/projects/${CI_PROJECT_ID}"
ARTIFACTS_BASE="${GITLAB_API}/jobs/artifacts/develop/raw"

echo "Downloading latest release build artifact from ${JOB_NAME}..."

curl --fail --location \
  --header "JOB-TOKEN: ${CI_JOB_TOKEN}" \
  --output YuLife.app.tar.gz \
  "${ARTIFACTS_BASE}/YuLife.app.tar.gz?job=${JOB_NAME}"

mkdir -p "$APP_BUILD_DIR"
rm -rf "${APP_BUILD_DIR:?}/${APP_NAME}"
tar -xzf YuLife.app.tar.gz -C "$APP_BUILD_DIR"
rm -f YuLife.app.tar.gz

echo "Release app extracted to ${APP_BUILD_DIR}/${APP_NAME}"

# Re-bundle JS so the app runs the latest code, not the version baked into the artifact
echo "Re-bundling JS..."
BUNDLE_TMP_DIR="dist-rebundle"
rm -rf "$BUNDLE_TMP_DIR"
pnpm expo export --platform ios --output-dir "$BUNDLE_TMP_DIR"
cp "$BUNDLE_TMP_DIR"/_expo/static/js/ios/*.hbc "${APP_BUILD_DIR}/${APP_NAME}/main.jsbundle"
rm -rf "$BUNDLE_TMP_DIR"

echo "JS bundle updated."
