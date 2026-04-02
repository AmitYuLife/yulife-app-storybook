#!/usr/bin/env bash

set -euo pipefail

JOB_NAME="build-detox-ios-debug"
APP_BUILD_DIR="ios/build/Build/Products/Debug-iphonesimulator"
APP_NAME="YuLife.app"
TMP_DIR="/tmp/detox-debug-artifacts"

USE_LATEST=false

while [[ $# -gt 0 ]]; do
  case $1 in
    --latest) USE_LATEST=true; shift ;;
    -h|--help)
      echo "Usage: $0 [--latest]"
      echo ""
      echo "Downloads a pre-built debug Detox app from GitLab pipeline artifacts."
      echo "Matches the build to your local Expo fingerprint hash."
      echo ""
      echo "Options:"
      echo "  --latest    Download the most recent build even if the fingerprint doesn't match"
      echo ""
      echo "Prerequisites: glab CLI authenticated (glab auth login)"
      exit 0
      ;;
    *) echo "Unknown option: $1. Use --help for usage."; exit 1 ;;
  esac
done

if ! command -v glab &>/dev/null; then
  echo "ERROR: glab CLI not found. Install it and run 'glab auth login'."
  exit 1
fi

# --- Generate local fingerprint ---
export ENVFILE=".env.e2e"
export BUNDLE_ID="com.yulife.develop"
export DISPLAY_NAME="YuLife (e2e)"
export BITRISE_BUILD_NUMBER=1234

echo "Generating fingerprint..."
EXPO_HASH=$(pnpm --silent exec fingerprint fingerprint:generate --platform ios | jq -r '.hash')
PODFILE_HASH=$(shasum -a 256 support/ios/Podfile.lock | cut -d' ' -f1)
FINGERPRINT_HASH=$(echo "${EXPO_HASH}${PODFILE_HASH}" | shasum -a 256 | cut -d' ' -f1)
echo "Expo hash: $EXPO_HASH"
echo "Podfile.lock hash: $PODFILE_HASH"
echo "Local fingerprint: $FINGERPRINT_HASH"

if [[ -z "$EXPO_HASH" || "$EXPO_HASH" == "null" ]]; then
  echo "ERROR: Failed to generate Expo fingerprint hash"
  exit 1
fi

# --- Find recent successful jobs ---
echo "Searching for a matching build..."

JOB_IDS=$(glab api "projects/:id/jobs?scope=success&per_page=50" 2>/dev/null \
  | jq -r --arg name "$JOB_NAME" \
    '[.[] | select(.name == $name and .artifacts_file.filename != null)] | .[].id')

if [[ -z "$JOB_IDS" ]]; then
  echo "ERROR: No successful ${JOB_NAME} jobs with artifacts found."
  exit 1
fi

# Check each job's fingerprint until we find a match
MATCHED_JOB_ID=""
LATEST_JOB_ID=""
LATEST_FINGERPRINT=""

for JOB_ID in $JOB_IDS; do
  REMOTE_FINGERPRINT=$(glab api "projects/:id/jobs/${JOB_ID}/artifacts/fingerprint.txt" 2>/dev/null || true)

  if [[ -z "$LATEST_JOB_ID" ]]; then
    LATEST_JOB_ID="$JOB_ID"
    LATEST_FINGERPRINT="$REMOTE_FINGERPRINT"
  fi

  if [[ "$REMOTE_FINGERPRINT" == "$FINGERPRINT_HASH" ]]; then
    MATCHED_JOB_ID="$JOB_ID"
    echo "Found matching build (job ${JOB_ID})"
    break
  fi
done

# --- Resolve which job to download ---
DOWNLOAD_JOB_ID=""

if [[ -n "$MATCHED_JOB_ID" ]]; then
  DOWNLOAD_JOB_ID="$MATCHED_JOB_ID"
elif [[ "$USE_LATEST" == "true" ]]; then
  echo ""
  echo "WARNING: No matching build found. Downloading the latest instead."
  echo "  Latest build: ${LATEST_FINGERPRINT}"
  echo "  Your code:    ${FINGERPRINT_HASH}"
  echo ""
  DOWNLOAD_JOB_ID="$LATEST_JOB_ID"
else
  echo ""
  echo "No matching debug build found."
  echo "  Latest build: ${LATEST_FINGERPRINT}"
  echo "  Your code:    ${FINGERPRINT_HASH}"
  echo ""
  echo "Options:"
  echo "  1. Run with --latest to download the most recent build (may not match your code)"
  echo "  2. Build locally: pnpm detox:build"
  exit 0
fi

# --- Download and extract ---
rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"

echo "Downloading build from job ${DOWNLOAD_JOB_ID}..."
glab api "projects/:id/jobs/${DOWNLOAD_JOB_ID}/artifacts" > "${TMP_DIR}/artifacts.zip"
unzip -q -o "${TMP_DIR}/artifacts.zip" -d "$TMP_DIR"
rm -f "${TMP_DIR}/artifacts.zip"

mkdir -p "$APP_BUILD_DIR"
rm -rf "${APP_BUILD_DIR:?}/${APP_NAME}"
tar -xzf "${TMP_DIR}/YuLife.app.tar.gz" -C "$APP_BUILD_DIR"
rm -rf "$TMP_DIR"
echo "Done. App extracted to ${APP_BUILD_DIR}/${APP_NAME}"
