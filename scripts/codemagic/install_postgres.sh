#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x  

POSTGRES_VERSION=17

##############################
# Install PostgreSQL
##############################
brew install postgresql@${POSTGRES_VERSION}

##############################
# Add PostgreSQL to PATH
##############################
echo "export PATH=\"/opt/homebrew/opt/postgresql@${POSTGRES_VERSION}/bin:\$PATH\"" >> ~/.zshrc
ln -s /opt/homebrew/opt/postgresql@${POSTGRES_VERSION}/bin/psql /usr/local/bin/psql
ln -s /opt/homebrew/opt/postgresql@${POSTGRES_VERSION}/bin/pg_ctl /usr/local/bin/pg_ctl
ln -s /opt/homebrew/opt/postgresql@${POSTGRES_VERSION}/bin/createdb /usr/local/bin/createdb

##############################
# Init postgres
##############################
PGPORT=5432 PGHOST=localhost pg_ctl -D /opt/homebrew/var/postgresql@${POSTGRES_VERSION} -l logfile start

psql -d postgres -c "\du"
psql -d postgres -U builder -h localhost -c "CREATE DATABASE yulife;"
psql -d postgres -U builder -h localhost -c "CREATE USER yulife WITH PASSWORD 'yulife';"
psql -d postgres -U builder -h localhost -c "ALTER USER yulife WITH SUPERUSER;"
