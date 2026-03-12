#!/usr/bin/env bash

declare -A DEVICES=(["iPhone 8"]="ios" ["iPhone 8 Plus"]="ios" ["iPhone 11"]="ios" ["iPhone 11 Pro"]="ios" ["default"]="android")

start_device() {
  echo "Starting device $2 on $1"
  if [[ "$1" == "android" ]]; then
    pnpm react-native run-$1 &
  else
    pnpm react-native run-$1 "--simulator=$2"
  fi
}

for key in "${!DEVICES[@]}"; do
  start_device "${DEVICES[$key]}" "${key}"
done

exit 0
