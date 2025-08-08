#!/usr/bin/env bash

# Enables debug output
set -x

# This script file MUST not exit on error. The exit code is used to determine
# if the test passed or failed on upload_detox_report.sh script.

##############################
# Make sure n is in PATH before brew otherwise it uses node from brew
##############################
export PATH="/usr/local/bin:$PATH"
node --version
# Node version has changed on previous step, change it back
n "$(cat .nvmrc)"
node --version
##############################
# Clean and re-build detox cache
##############################
yarn detox clean-framework-cache && yarn detox build-framework-cache
##############################
# Set detox test device
node ./scripts/replace-detox-test-device.js "$IPHONE_DEVICE"
##############################

##############################
# Build the translation mapping
##############################
yarn detox:build:translations
##############################
# Run detox test
##############################
# Set the test type argument based on DETOX_TEST_TYPE
TEST_TYPE_ARG="${DETOX_TEST_TYPE:-healthcheck}"
if [[ "$DETOX_TEST_TYPE" == "base" ]]; then
  # If DETOX_TEST_TYPE is base, do not pass test type and use spec file
  TEST_TYPE_ARG="${DETOX_SPEC_FILE:-}"
fi

yarn detox:run "$TEST_TYPE_ARG" -c ios.sim.release \
  --take-screenshots all \
  --artifacts-location ./e2e-report \
  --loglevel "${DETOX_LOG_LEVEL:=warn}" \
  --debug-synchronization 200 \
  --record-logs all \
  --record-videos failing
##############################
# Save exit code for slack notification title in the upload detox report script (upload_detox_report.sh)
##############################
DETOX_EXIT_CODE=$?
echo "DETOX_EXIT_CODE=$DETOX_EXIT_CODE" >> "$CM_ENV"
