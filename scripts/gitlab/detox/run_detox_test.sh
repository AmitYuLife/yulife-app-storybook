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
set -o pipefail
# Do not exit on error
set +e
# This script file MUST not exit on error. The exit code is used to determine
# if the test passed or failed on upload_detox_report.sh script.

# shellcheck disable=SC1090
source ~/.zprofile

nvm use
PATH="$(dirname "$(nvm which --silent)"):$PATH"
export PATH
echo "Node version: $(node --version)"

##############################
# Set detox test device
echo "Available devices: $(xcrun simctl list devices)"
echo "Setting detox test device to $IPHONE_DEVICE"
node ./scripts/replace-detox-test-device.js "$IPHONE_DEVICE"
##############################

##############################
# Clean and re-build detox cache
##############################
yarn detox clean-framework-cache && yarn detox build-framework-cache

##############################
# Build the translation mapping
##############################
yarn detox:build:translations
##############################
# Metro bundler functions
##############################
function start_metro_bundler() {
  echo "🚀 Starting Metro bundler in background..."
  yarn start:e2e:ci &
  METRO_PID=$!
  echo "Metro bundler started with PID: $METRO_PID"
  # Wait for Metro to be ready
  # Ping Metro for 30 seconds, if it's not responding, exit with error
  METRO_PORT=${METRO_PORT:-8081}
  for _ in {1..30}; do
    if curl -s "http://localhost:${METRO_PORT}/status" > /dev/null; then
      break
    fi
    echo "Waiting for Metro to start..."
    sleep 1
  done

  if ! curl -s "http://localhost:${METRO_PORT}/status" > /dev/null; then
    echo "Metro did not start in time"
    exit 1
  fi

  echo "Metro started"
}

function stop_metro_bundler() {
  if [[ -n "${METRO_PID:-}" ]]; then
    echo "🛑 Stopping Metro bundler (PID: $METRO_PID)..."
    kill $METRO_PID 2>/dev/null || true
    echo "Metro bundler stopped."
  fi
  echo "Metro bundler stopped."
}
##############################
# Run detox test
##############################
if [[ "$DETOX_BUILD_CONFIG" == "ios.sim.debug" ]]; then
  start_metro_bundler
fi
# Set the test type argument based on DETOX_TEST_TYPE
TEST_TYPE_ARG="${DETOX_TEST_TYPE:-healthcheck}"
if [[ "$DETOX_TEST_TYPE" == "base" ]]; then
  # If DETOX_TEST_TYPE is base, do not pass test type and use spec file
  TEST_TYPE_ARG="${DETOX_SPEC_FILE:-}"
fi

# Install timeout
brew install coreutils

timeout --preserve-status --foreground 90m yarn detox:run "$TEST_TYPE_ARG" -c "$DETOX_BUILD_CONFIG" \
  --take-screenshots all \
  --artifacts-location ./e2e-report \
  --loglevel "${DETOX_LOG_LEVEL:=warn}" \
  --debug-synchronization 500 \
  --record-logs all \
  --record-videos failing \
  --headless
##############################
# Save exit code for slack notification title in the upload detox report script (upload_detox_report.sh)
##############################
DETOX_EXIT_CODE=$?
echo "Detox exit code: $DETOX_EXIT_CODE"

##############################
# Clean up Metro bundler process
##############################
if [[ "$DETOX_BUILD_CONFIG" == "ios.sim.debug" ]]; then
  stop_metro_bundler
fi

exit $DETOX_EXIT_CODE
