#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x  

##############################
# Constants
##############################
# REPORT_S3_BUCKET_NAME is set in the codemagic.yaml file
ARTIFACT="YuLife.app.zip"
BUILD_PATH="ios/build/Build/Products/Release-iphonesimulator/YuLife.app"
# TODO: Build checksum from pod lock file for cache
S3_PATH="builds/$(date +'%Y-%m-%d')"

##############################
# Functions
##############################
function build_app() {
  echo "🔨 Building app..."
  yarn detox:build -c ios.sim.release
}

function download_from_s3() {
  echo "⬇️  Downloading existing build from s3://${REPORT_S3_BUCKET_NAME}/${S3_PATH}/${ARTIFACT}..."
  aws s3 cp "s3://${REPORT_S3_BUCKET_NAME}/${S3_PATH}/${ARTIFACT}" .
  echo "📦 Unzipping ${ARTIFACT}..."
  unzip -o "${ARTIFACT}"
}

function upload_to_s3() {
  echo "🗜  Zipping ${BUILD_PATH} → ${ARTIFACT}..."
  zip -r "${ARTIFACT}" "${BUILD_PATH}"
  echo "⬆️  Uploading ${ARTIFACT} to s3://${REPORT_S3_BUCKET_NAME}/${S3_PATH}/"
  aws s3 cp "${ARTIFACT}" "s3://${REPORT_S3_BUCKET_NAME}/${S3_PATH}/"
}

##############################
# Run
##############################
echo "🔍 Checking for existing build in s3://${REPORT_S3_BUCKET_NAME}/${S3_PATH}/"

if aws s3 ls "s3://${REPORT_S3_BUCKET_NAME}/${S3_PATH}/${ARTIFACT}" > /dev/null 2>&1; then
  download_from_s3
else
  echo "❌ No build found for today (${S3_PATH}), starting a local build."
  build_app
  upload_to_s3
fi

echo "✅ Done."
