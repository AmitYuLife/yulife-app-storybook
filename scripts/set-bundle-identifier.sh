#!/bin/bash

# Check if the correct number of arguments are passed
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 new_bundle_identifier"
    exit 1
fi

new_bundle_identifier="$1"
pbxproj_file="./ios/YuLife.xcodeproj/project.pbxproj"
temp_file="$(mktemp)"

while IFS= read -r line || [[ -n "$line" ]]; do
    if echo "$line" | grep -q "PRODUCT_BUNDLE_IDENTIFIER = "; then
        # Extract the current bundle identifier
        current_identifier=$(echo "$line" | sed -E 's/.*PRODUCT_BUNDLE_IDENTIFIER = ([^;]+);.*/\1/')
        # Check if it ends with .yuwatch
        if [[ "$current_identifier" =~ \.yuwatch$ ]]; then
            # Replace and append .yuwatch
            echo "$line" | sed "s/$current_identifier/$new_bundle_identifier.yuwatch/" >> "$temp_file"
        else
            # Replace without appending .yuwatch
            echo "$line" | sed "s/$current_identifier/$new_bundle_identifier/" >> "$temp_file"
        fi
    else
        echo "$line" >> "$temp_file"
    fi
done < "$pbxproj_file"

# Overwrite the original file with the modified contents
mv "$temp_file" "$pbxproj_file"

echo "Bundle identifiers updated successfully."
