#!/bin/bash
Red='\033[0;31m'
for file_path in $(git diff --staged --name-only); do
    if [[ "$file_path"  =~ ^src\/graphql\/_core\/client.ts ]]; then
        if grep -q "http://" "$file_path"; then
            echo -e "$Red Looks like you hardcoded URL"
            exit 1
        fi
    fi
done
