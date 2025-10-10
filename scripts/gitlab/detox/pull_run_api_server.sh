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
# Clone repo to a temp folder
##############################
# TODO: Check if we need a new Gitlab token or this one is enough
mkdir -p ~/temp-repos
cd ~/temp-repos || exit
git clone -b "${API_BRANCH_NAME:-${CM_BRANCH:-develop}}" "https://oauth2:${GITLAB_TOKEN_REPORTER}@gitlab.com/yu-life/yulife-api-server.git"
cd yulife-api-server || exit

##############################
# Use API node version
##############################
nvm install -b
# Update PATH with the new node version
PATH="$(dirname "$(nvm which --silent)"):$PATH"
export PATH
echo "Node version: $(node --version)"

##############################
# Install dependencies
##############################
corepack enable
export GITLAB_TOKEN=$GITLAB_TOKEN_REPORTER
pnpm install --frozen-lockfile
./scripts/setupPostgresForBitrise.sh

##############################
# Run API on TS (no build step)
# Set up database
##############################
export REGION=$API_REGION
# Postgres
# drop detox database to clear
psql -U api yulife -c 'DROP DATABASE IF EXISTS "yulife-detox"'
# recreate
psql -U api yulife -c 'CREATE DATABASE "yulife-detox";'
# perms
psql -U api yulife -c 'GRANT ALL PRIVILEGES ON DATABASE "yulife-detox" to api;'
# Create dir for outputs
OUTPUTS_DIR="$CI_PROJECT_DIR/e2e-report"
mkdir -p "$OUTPUTS_DIR"

# run the migrations for postgres
echo "Running postgres migrations"
# Run postgres migrations up (logs in outputs/postgres-up.log)
if ! NODE_ENV=detox POSTGRES_DB=yulife-detox pnpm migrate-postgres up post >"$OUTPUTS_DIR/postgres-up.log" 2>&1; then
    cat "$OUTPUTS_DIR/postgres-up.log"
    exit 1
fi

# MongoDB
mongosh --port 27018 yulife-detox --eval 'db.dropDatabase()'
echo "Running mongo migrations"
# Run mongo migrations up (logs in outputs/mongo-up.log)
if ! NODE_ENV=detox pnpm migrate-mongo up post >"$OUTPUTS_DIR/mongo-up.log" 2>&1; then
    cat "$OUTPUTS_DIR/mongo-up.log"
    exit 1
fi
if ! NODE_ENV=detox pnpm migrate-mongo up post --global >"$OUTPUTS_DIR/mongo-up-global.log" 2>&1; then
    cat "$OUTPUTS_DIR/mongo-up-global.log"
    exit 1
fi

##############################
# Start API
##############################
# Set environment variables based on API_REGION
case $API_REGION in

  UK)
    API_PORT=5000
    API_ENV_OVERRIDES="server__locale=en-GB server__region=UK server__port=5000"
    ;;
  US)
    API_PORT=5001
    API_ENV_OVERRIDES="server__locale=en-US server__region=US server__port=5001"
    ;;
  SA)
    API_PORT=5002
    API_ENV_OVERRIDES="server__locale=en-ZA server__region=SA server__port=5002"
    ;;
  JP)
    API_PORT=5003
    API_ENV_OVERRIDES="server__locale=ja-JP server__region=JP server__port=5003"
    ;;
  *)
    echo "Invalid API_REGION: $API_REGION"
    exit 1
    ;;
esac

# shellcheck disable=SC2086 # Do not quote to split arguments
env -S ${API_ENV_OVERRIDES} \
NODE_ENV=detox \
DEBUG="yu:*" \
pnpm pm2 start ./src/app/index.ts \
--name api-server \
--interpreter ./node_modules/.bin/ts-node \
--output "$OUTPUTS_DIR/api-server.out.log" \
--error  "$OUTPUTS_DIR/api-server.err.log"

##############################
# Wait for API to start
# Ping the API for 30 seconds, if it's not responding, exit with error
##############################
for _ in {1..30}; do
  if curl -s "http://localhost:${API_PORT:-5000}/" > /dev/null; then
    break
  fi
  echo "Waiting for API to start..."
  # Log last 50 lines
  pnpm pm2 logs api-server --lines 50 --nostream
  sleep 1
done

if ! curl -s "http://localhost:${API_PORT:-5000}/" > /dev/null; then
  echo "API did not start in time"
  pnpm pm2 logs api-server --lines 1000 --nostream
  exit 1
fi

echo "API started"
# Move back to project dir as api changes directory
cd "$CI_PROJECT_DIR"
