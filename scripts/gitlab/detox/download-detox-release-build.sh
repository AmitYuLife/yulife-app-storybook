#!/usr/bin/env bash

set -eo pipefail

# shellcheck disable=SC1090
source ~/.zprofile
nvm use
PATH="$(dirname "$(nvm which --silent)"):$PATH"
export PATH
corepack enable

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

echo "Finding latest successful ${JOB_NAME} job on develop..."

JOB_ID=""
for PAGE in 1 2 3 4 5; do
  JOB_ID=$(curl --fail --silent \
    --header "JOB-TOKEN: ${CI_JOB_TOKEN}" \
    "${GITLAB_API}/jobs?scope[]=success&per_page=100&page=${PAGE}" | \
    jq -r "first(.[] | select(.name == \"${JOB_NAME}\" and .ref == \"develop\")) | .id // empty")

  if [[ -n "$JOB_ID" ]]; then
    break
  fi
done

if [[ -z "$JOB_ID" ]]; then
  echo "ERROR: No successful ${JOB_NAME} job found on develop (searched last 500 jobs)."
  echo "Trigger a pipeline on develop that includes the ${JOB_NAME} job."
  exit 1
fi

echo "Found successful job ${JOB_ID}, downloading artifacts..."

curl --fail --location \
  --header "JOB-TOKEN: ${CI_JOB_TOKEN}" \
  --output artifacts.zip \
  "${GITLAB_API}/jobs/${JOB_ID}/artifacts"

unzip -o artifacts.zip YuLife.app.tar.gz
rm -f artifacts.zip

mkdir -p "$APP_BUILD_DIR"
rm -rf "${APP_BUILD_DIR:?}/${APP_NAME}"
tar -xzf YuLife.app.tar.gz -C "$APP_BUILD_DIR"
rm -f YuLife.app.tar.gz

echo "Release app extracted to ${APP_BUILD_DIR}/${APP_NAME}"

# Re-bundle JS so the app runs the latest code, not the version baked into the artifact
echo "Re-bundling JS..."
BUNDLE_TMP_DIR="dist-rebundle"
rm -rf "$BUNDLE_TMP_DIR"
EXPO_NO_GIT_STATUS=1 EXPO_NO_DOTENV=1 ENVFILE=.env.e2e RN_SRC_EXT=e2e.ts,e2e.tsx pnpm expo export --platform ios --output-dir "$BUNDLE_TMP_DIR"
cp "$BUNDLE_TMP_DIR"/_expo/static/js/ios/*.hbc "${APP_BUILD_DIR}/${APP_NAME}/main.jsbundle"
rm -rf "$BUNDLE_TMP_DIR"

echo "JS bundle updated."
