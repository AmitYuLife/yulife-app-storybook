#!/bin/bash

hasModifiedTranslations=false

for file_path in $(git diff --staged --name-only); do
    if [[ "$file_path" =~ ^src\/locale\/translations\/.+.json ]]; then
        hasModifiedTranslation=true
    fi
done


if [[ "$hasModifiedTranslation" = true ]]; then
    TS_NODE_FILES=true TS_NODE_TRANSPILE_ONLY=true npx ts-node "./scripts/check-translation-keys.ts"
fi