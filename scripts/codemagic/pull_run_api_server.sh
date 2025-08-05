#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x

##############################
# Clone repo to a temp folder
##############################
mkdir -p ~/temp-repos
cd ~/temp-repos || exit
git clone "https://oauth2:${GITLAB_TOKEN}@gitlab.com/yu-life/yulife-api-server.git"
cd yulife-api-server || exit

##############################
# Use N to change node version
# Make sure n is in PATH before brew otherwise it uses node from brew
##############################
export PATH="/usr/local/bin:$PATH"
n "$(cat .nvmrc)"
node --version

##############################
# Checkout branch
# 1.- API_BRANCH_NAME: Allow to run on any branch with env var
# 2.- CM_BRANCH: Same branch name as RN repo
# 3.- Default to develop
##############################
git checkout "${API_BRANCH_NAME:-${CM_BRANCH}}" || git checkout develop

##############################
# Install dependencies
##############################
corepack enable
yarn install --immutable --inline-builds
./scripts/setupPostgresForBitrise.sh
yarn translations:download:local

##############################
# Run API on TS (no build step)
# Set up database
##############################
# TODO: The script used on bitrise uses BITRISE_IO env var and run on JS. We need to modify the script or leave the steps here
# yarn "detox:changeRegionDatabase:${API_REGION:=UK}"
# Postgres
# drop detox database to clear
psql -U api yulife -c 'DROP DATABASE IF EXISTS "yulife-detox"'
# recreate
psql -U api yulife -c 'CREATE DATABASE "yulife-detox";'
# perms
psql -U api yulife -c 'GRANT ALL PRIVILEGES ON DATABASE "yulife-detox" to api;'
# run the migrations for postgres
echo "Running postgres migrations"
NODE_ENV=local POSTGRES_DB=yulife-detox yarn migrate-postgres up post

# MongoDB
mongosh --port 27018 yulife-detox --eval 'db.dropDatabase()'
echo "Running mongo migrations"
NODE_ENV=detox yarn migrate-mongo up post
NODE_ENV=detox yarn migrate-mongo up post --global

##############################
# Start API
##############################
# Set environment variables in function of API_REGION
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
env ${API_ENV_OVERRIDES} \
NODE_ENV=detox \
yarn pm2 start ./scripts/workflow/runDevelop.js \
--name api-server \
--interpreter ./node_modules/.bin/ts-node \
--output api-server.out.log \
--error  api-server.err.log

##############################
# Wait for API to start
# Ping the API for 30 seconds, if it's not responding, exit with error
##############################
for _ in {1..30}; do
  if curl -s "http://localhost:${API_PORT:-5000}/" > /dev/null; then
    break
  fi
  echo "Waiting for API to start..."
  # Log last 10 lines
  yarn pm2 logs api-server --lines 10 --nostream
  sleep 1
done

if ! curl -s "http://localhost:${API_PORT:-5000}/" > /dev/null; then
  echo "API did not start in time"
  yarn pm2 logs api-server --lines 1000 --nostream
  exit 1
fi

echo "API started"
