#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x  

MONGODB_VERSION=8.0

##############################
# Install MongoDB
##############################
brew tap mongodb/brew
brew install mongodb-community@${MONGODB_VERSION}

##############################
# Add mongodb to PATH
##############################
echo "export PATH=\"/opt/homebrew/opt/mongodb-community@${MONGODB_VERSION}/bin:\$PATH\"" >> ~/.zshrc

##############################
# Set detox port for MongoDb
##############################
echo "  port: 27018" >> /opt/homebrew/etc/mongod.conf

##############################
# Start MongoDb
##############################
brew services start mongodb-community@${MONGODB_VERSION}

echo 'MongoDb config...'
cat /opt/homebrew/etc/mongod.conf
