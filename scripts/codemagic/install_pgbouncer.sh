#!/usr/bin/env bash

# Exit on error, undefined variable, or pipe failure
set -euo pipefail
# Enables debug output
set -x  

##############################
# Install PgBouncer
##############################
brew install pgbouncer

##############################
# Configure PgBouncer
##############################
cat << 'EOF' > /opt/homebrew/etc/pgbouncer.ini
[databases]
*=host=localhost port=5432

[pgbouncer]
admin_users=yulife
auth_file = /opt/homebrew/etc/userlist.txt
auth_type = md5
client_tls_sslmode=disable
default_pool_size=90
ignore_startup_parameters=extra_float_digits
listen_addr = localhost
listen_port = 6432
logfile = /opt/homebrew/var/log/pgbouncer.log
max_client_conn=120
min_pool_size=0
pidfile = /opt/homebrew/var/run/pgbouncer.pid
server_fast_close=0
server_round_robin=0
server_tls_sslmode=disable
EOF

##############################
# Configure PgBouncer users
##############################
cat << 'EOF' > /opt/homebrew/etc/userlist.txt
"yulife" "yulife"z
"api" "letmeinnow"
EOF

##############################
# Start PgBouncer
##############################
brew services start pgbouncer
