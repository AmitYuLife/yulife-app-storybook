#!/bin/bash

Yellow='\033[0;33m'
Red='\033[0;31m'
hasMigration=false
hasReducer=false
didUpdateStoreVersion=false
for file_path in $(git diff --staged --name-only); do
    if [[ "$file_path" =~ ^src\/redux\/.+.reducer.ts ]]; then
        hasReducer=true
    fi
    if [[ "$file_path" =~ ^src/redux/_core/migrations/* ]]; then
        hasMigration=true
    fi

    if [[ "$file_path" =~ ^src/redux/_core/store.ts ]]; then
        didUpdateStoreVersion=true
    fi
done

if [[ "$hasReducer" = true ]] && [[ $hasMigration = false ]]; then 
    echo -e "$Red Are you sure you want to commit this? You made changes into the redux reducer and there is not a redux migration, if so, try with$Yellow git commit --no-verify$NoColor"
    exit 1
fi

if [[ "$hasMigration" = true ]] && [[ $didUpdateStoreVersion = false ]]; then 
    echo -e "$Red Looks like you have a migration but haven't updated the store version, please do and if this is a mistake,$Yellow try with git commit --no-verify$NoColor"
    exit 1
fi

