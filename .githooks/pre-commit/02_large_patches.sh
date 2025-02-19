#!/bin/bash

Yellow='\033[0;33m'
Red='\033[0;31m'
NoColor='\033[0m'
git diff --staged --name-only | while read -r file_path; do
    if [[ "$file_path" =~ ^patches/* ]]; then
        line_count=$(grep '^+' $file_path | wc -l | awk '{print $1}')
        if [[ $line_count -gt 300 ]]; then
            echo -e "The file $Red$file_path$NoColor is too large."
            echo -e "Are you sure you want to commit this file? If so, try with$Yellow git commit --no-verify$NoColor"
            exit 1
        fi
    fi
done
