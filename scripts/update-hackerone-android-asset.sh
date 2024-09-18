#!/bin/bash
# This script is meant to be run in a Bitrise workflow, after the APK has been uploaded to the public install page
# It updates the HackerOne asset description with the latest APK version and download link
#
# Required environment variables
# - BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP: The map of public install page URLs from Deploy to bitrise step
# - HACKERONE_API_USER: The HackerOne API username
# - HACKERONE_API_KEY: The HackerOne
# - BITRISE_BUILD_NUMBER: The Bitrise build number
#

if [ -z "$HACKERONE_API_USER" ]; then
  echo "Please provide $HACKERONE_API_USER"
  exit 1
fi

if [ -z "$HACKERONE_API_KEY" ]; then
  echo "Please provide $HACKERONE_API_KEY"
  exit 1
fi

if [ -z "$BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP" ]; then
  echo "Please provide $BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP"
  exit 1
fi

if [ -z "$BITRISE_BUILD_NUMBER" ]; then
  echo "Please provide $BITRISE_BUILD_NUMBER"
  exit 1
fi

HACKERONE_ORG_ID=49117 # Yulife org ID
# Android mobile app Asset ID (can be found by querying the HackerOne API assets API endpoint)
# See https://api.hackerone.com/customer-resources/?shell#assets-get-all-assets
HACKERONE_ASSET_ID=1612657

PACKAGE_VERSION=$(cat package.json | jq -r '.version')
PREFIX_VERSION="${PACKAGE_VERSION%.*}"
VERSION="${PREFIX_VERSION}.${BITRISE_BUILD_NUMBER}"

# Formatted list of download links. The MAP URL uses this go template (refer to bitrise.yml): `{{range $index, $element := .}}{{printf "%s|%s\n" $element.File $element.URL}}{{end}}`
APP_DOWNLOAD_TEXT=""

for FILE_URL in $BITRISE_PUBLIC_INSTALL_PAGE_URL_MAP; do
    APP_DOWNLOAD_TEXT=" - ${FILE_URL//|/  -> }\n$APP_DOWNLOAD_TEXT"
done

curl "https://api.hackerone.com/v1/organizations/$HACKERONE_ORG_ID/assets/$HACKERONE_ASSET_ID" \
  -X PUT \
  -u "$HACKERONE_API_USER:$HACKERONE_API_KEY" \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d @- <<EOD
{
  "data": {
    "type": "asset",
    "attributes": {
      "description": "Latest APK version ($VERSION) for download:\n\n$APP_DOWNLOAD_TEXT\n\nThey are UAT builds of our Yulife Android application."
    }
  }
}
EOD
