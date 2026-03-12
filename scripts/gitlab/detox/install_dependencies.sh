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

# shellcheck disable=SC1090
source ~/.zprofile

##############################
# Install dependencies
##############################

nvm install -b
# Update PATH with the new node version
PATH="$(dirname "$(nvm which --silent)"):$PATH"
export PATH
echo "Node version: $(node --version)"
corepack enable
# Install node dependencies
pnpm install --frozen-lockfile
# TSC check
pnpm tsc
