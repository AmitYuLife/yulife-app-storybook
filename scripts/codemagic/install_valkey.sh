#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x  

##############################
# Install Valkey
##############################
brew install valkey

##############################
# Increase size of the listen queue for accepting new TCP connections
##############################
sudo sysctl -w kern.ipc.somaxconn=1024

##############################
# Start Valkey
##############################
valkey-server --requirepass PASSWORD --save 20 1 --loglevel warning &
