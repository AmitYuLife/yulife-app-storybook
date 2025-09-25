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

##############################
# Install AWS CLI
##############################
command -v aws >/dev/null 2>&1 || brew install awscli

##############################
# Pull the last report if it exists
##############################
npm install --global ts-node@10.9.2
npm install --global allure-commandline@2.12.1
ts-node  ./e2e/combineOvernightReports.ts

##############################
# Send Slack notification
##############################

# Build Slack payload
PAYLOAD=$(cat <<EOF
{
  "username": "Gitlab CI Detox",
  "text": "Gitlab CI Detox overnight run report ready",
  "attachments": [
    {
      "color": "#3bc3a3",
      "fields": [
        {
          "title": "Results",
          "value": "https://${REPORT_DNS_NAME}/detox/reports/develop-summary/index.html",
          "short": true
        }
      ],
      "actions": [
        {
          "type": "button",
          "text": "View Results",
          "url": "https://${REPORT_DNS_NAME}/detox/reports/develop-summary/index.html"
        }
      ]
    }
  ]
}
EOF
)

# Post to Slack
curl --retry 5 --fail --location --no-progress-meter \
     -X POST "${QA_ALERTS_SLACK_WEBHOOK_URL}" \
     -H 'Content-Type: application/json' \
     --data-raw "${PAYLOAD}"
