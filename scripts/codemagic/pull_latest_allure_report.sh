#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x  

##############################
# Make dir if not exists
##############################
mkdir -p "$CM_BUILD_DIR/e2e-report/allure-report/history"

##############################
# Install AWS CLI
##############################
command -v aws >/dev/null 2>&1 || brew install awscli

##############################
# Pull the last report if it exists
##############################
aws s3 sync "s3://$REPORT_S3_BUCKET_NAME/reports/$DETOX_TEST_TYPE/develop/allure-report/history" . --no-progress || echo "No history folder in remote found"
