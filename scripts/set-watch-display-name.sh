#!/bin/bash

# Check if the correct number of arguments are passed
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 new_display_name"
    exit 1
fi

NEW_DISPLAY_NAME="$1"
PBXPROJ_FILE="./ios/YuLife.xcodeproj/project.pbxproj"

sed -i '' "s/INFOPLIST_KEY_CFBundleDisplayName = [^;]*;/INFOPLIST_KEY_CFBundleDisplayName = \"$NEW_DISPLAY_NAME\";/" $PBXPROJ_FILE
