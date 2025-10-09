#!/usr/bin/env bash
#
# This script prepares and uploads E2E screenshot galleries to S3
# It installs dependencies, flattens directory structures, generates HTML galleries, syncs to S3, and creates CloudFront invalidations.

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

##############################
# Constants
##############################

GALLERY_OUTPUT_DIR="./gallery"

##############################
# Validate Required Variables
##############################

REQUIRED_VARS=(
  IPHONE_DEVICE
  DETOX_TEST_TYPE
  TARGET_LOCALE
  REPORT_S3_BUCKET_NAME
  REPORT_DNS_NAME
  ALERTS_E2E_SLACK_WEBHOOK_URL
)

for var in "${REQUIRED_VARS[@]}"; do
  if [[ -z "${!var:-}" ]]; then
    echo "❌ Environment variable '$var' is not set or empty."
    exit 1
  fi
done

##############################
# Navigate to Report Directory
##############################

cd "$CI_PROJECT_DIR/e2e-report"

##############################
# Copy Latest iOS Folder to Screenshots
##############################

# shellcheck disable=SC2010
RESULTS_FOLDER=$(ls -t | grep 'ios.')
if [[ -z "$RESULTS_FOLDER" || ! -d "$RESULTS_FOLDER" ]]; then
  echo "❌ Failed to locate latest iOS results folder."
  exit 1
fi

mkdir -p screenshots
cp -R "$RESULTS_FOLDER"/* screenshots/

##############################
# Flatten Directory
##############################

npm install --global @hutsoninc/flatten-dir-cli@1.0.2
flatten "$RESULTS_FOLDER"

# Remove temporary testDone*.png files
find "$RESULTS_FOLDER" -type f -name 'testDone*.png' -exec rm -f {} +

##############################
# Generate Screenshot Gallery
##############################

# Install tools if needed
command -v exiftool >/dev/null 2>&1 || brew install exiftool
command -v gm >/dev/null 2>&1 || brew install graphicsmagick

npm install --global "thumbsup@2.18.0"

GALLERY_TITLE="$IPHONE_DEVICE: generated from $DETOX_TEST_TYPE test on $(date)"

thumbsup \
  --input "$RESULTS_FOLDER" \
  --output "$GALLERY_OUTPUT_DIR" \
  --title "$GALLERY_TITLE" \
  --thumb-size 250 \
  --theme flow | tee thumbsup.txt

##############################
# Sync Gallery to AWS S3
##############################
# Install AWS CLI
command -v aws >/dev/null 2>&1 || brew install awscli

cd "$GALLERY_OUTPUT_DIR"

DATE=$(date +'%d-%m-%Y')
DEVICE_NAME="${IPHONE_DEVICE// /-}"

if [[ "$TARGET_LOCALE" == "en-GB" ]]; then
  S3_PATH="$DETOX_TEST_TYPE/$DATE/$DEVICE_NAME"
else
  S3_PATH="$TARGET_LOCALE/$DETOX_TEST_TYPE/$DATE/$DEVICE_NAME"
fi

aws s3 sync . "s3://$REPORT_S3_BUCKET_NAME/detox/screenshots/$S3_PATH" --no-progress --quiet

##############################
# Invalidate CloudFront Cache
##############################

CLOUDFRONT_DISTRIBUTION_ID=$(aws cloudfront list-distributions \
  --query "DistributionList.Items[?Origins.Items[0].Id=='$REPORT_S3_BUCKET_NAME'].Id" \
  --output text)

if [[ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]]; then
  echo "⚠️ Could not determine CloudFront distribution ID for bucket $REPORT_S3_BUCKET_NAME."
else
  echo "Invalidating CloudFront distribution $CLOUDFRONT_DISTRIBUTION_ID for bucket $REPORT_S3_BUCKET_NAME."
  aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
    --paths "/*"
fi

##############################
# Delete gallery and screenshots
##############################
cd "$CI_PROJECT_DIR/e2e-report"
echo "Deleting gallery..."
rm -rf "gallery"
echo "Deleting screenshots..."
rm -rf "screenshots"

##############################
# Sync Jest and Allure Reports
##############################
REPORT_PATH="$CI_PROJECT_DIR/e2e-report"
aws s3 sync "$REPORT_PATH" "s3://$REPORT_S3_BUCKET_NAME/detox/reports/$DETOX_TEST_TYPE/$CI_PIPELINE_IID" --no-progress --quiet

# If current branch is develop sync the current folder to "develop"
if [ "$CI_COMMIT_BRANCH" = "develop" ]; then
  aws s3 sync "$REPORT_PATH" "s3://$REPORT_S3_BUCKET_NAME/detox/reports/$DETOX_TEST_TYPE/develop" --no-progress --delete --quiet
fi

##############################
# Set Output Variables
##############################

ALLURE_REPORT_URL="https://$REPORT_DNS_NAME/detox/reports/$DETOX_TEST_TYPE/$CI_PIPELINE_IID/allure-report/index.html"
SCREENSHOTS_REPORT_URL=$(echo "https://$REPORT_DNS_NAME/detox/screenshots/$S3_PATH/index.html" | sed -e 's/ /%20/g')

##############################
# Send Slack notification
##############################

# Determine status text based on test exit code from run_detox_test.sh script
echo "Detox exit code: $DETOX_EXIT_CODE"
if [ "${DETOX_EXIT_CODE:-1}" -eq 0 ]; then
  STATUS_TEXT="*All tests passed!* :party:"
  ATTACH_COLOR="#3bc3a3" # green
else
  STATUS_TEXT="*Detox tests failed!* :cry:"
  ATTACH_COLOR="#f0741f" # orange
fi

E2E_RESULTS=$(node "$CI_PROJECT_DIR/scripts/get-test-results.js")
BRANCH_NAME="${CI_COMMIT_BRANCH:-$CI_MERGE_REQUEST_SOURCE_BRANCH_NAME}"

# Build Slack payload with an attachment
PAYLOAD=$(cat <<EOF
{
  "username": "GitLab Detox",
  "attachments": [
    {
      "color": "${ATTACH_COLOR}",
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "${STATUS_TEXT}"
          }
        },
        {
          "type": "section",
          "fields": [
            {"type":"mrkdwn","text":"*Branch:*\n${BRANCH_NAME}"},
            {"type":"mrkdwn","text":"*Results:*\n${E2E_RESULTS}"},
            {"type":"mrkdwn","text":"*Device:*\n${IPHONE_DEVICE}"},
            {"type":"mrkdwn","text":"*Test Type:*\n${DETOX_TEST_TYPE}"},
            {"type":"mrkdwn","text":"*Locale:*\n${TARGET_LOCALE}"}
          ]
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {"type":"plain_text","text":"View Results"},
              "url": "${ALLURE_REPORT_URL}"
            },
            {
              "type": "button",
              "text": {"type":"plain_text","text":"View Job"},
              "url": "${CI_JOB_URL}"
            },
            {
              "type": "button",
              "text": {"type":"plain_text","text":"Screenshots"},
              "url": "${SCREENSHOTS_REPORT_URL}"
            }
          ]
        }
      ]
    }
  ]
}
EOF
)

# Post to Slack
curl --retry 5 --fail --location --no-progress-meter \
     -X POST "${ALERTS_E2E_SLACK_WEBHOOK_URL}" \
     -H 'Content-Type: application/json' \
     --data-raw "${PAYLOAD}"
