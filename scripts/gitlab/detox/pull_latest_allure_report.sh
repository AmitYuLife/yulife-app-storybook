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

# If DETOX_TEST_TYPE is base, skip step
if [[ "$DETOX_TEST_TYPE" == "base" ]]; then
  echo "Skipping step because DETOX_TEST_TYPE is base"
  exit 0
fi

##############################
# Make dir if not exists
##############################
mkdir -p "$CI_PROJECT_DIR/e2e-report/allure-report/history"

##############################
# Install AWS CLI
##############################
command -v aws >/dev/null 2>&1 || brew install awscli

##############################
# Pull the last report if it exists
##############################
aws s3 sync "s3://$REPORT_S3_BUCKET_NAME/detox/reports/$DETOX_TEST_TYPE/develop/allure-report/history" . --no-progress || echo "No history folder in remote found"
