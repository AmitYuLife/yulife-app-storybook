#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x  

##############################
# Install AWS CLI
##############################
command -v aws >/dev/null 2>&1 || brew install awscli

##############################
# Pull the last report if it exists
##############################
npm i -g ts-node
npm i -g allure-commandline
ts-node  ./e2e/combineOvernightReports.ts

##############################
# Send Slack notification
##############################

# Build Slack payload
PAYLOAD=$(cat <<EOF
{
  "username": "Detox",
  "text": "Detox overnight run report ready",
  "attachments": [
    {
      "color": "#3bc3a3",
      "fields": [
        {
          "title": "Results",
          "value": "https://detox.develop.uk.yulife.engineering/reports/develop-summary/index.html",
          "short": true
        }
      ],
      "actions": [
        {
          "type": "button",
          "text": "View Results",
          "url": "https://detox.develop.uk.yulife.engineering/reports/develop-summary/index.html"
        }
      ]
    }
  ]
}
EOF
)

# Post to Slack
curl -X POST "${QA_ALERTS_SLACK_WEBHOOK_URL}" \
     -H 'Content-Type: application/json' \
     --data-raw "${PAYLOAD}"
