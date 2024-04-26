#!/bin/bash

# Run the workflow editor in the background and redirect output to a log file
nohup bitrise :workflow-editor &>bitrise-editor.log &
# Give some time for the editor to start
sleep 10
# Extract URL from the log line
WORKFLOW_API_URL=$(grep -o 'Starting API server at http://localhost:[0-9]*' bitrise-editor.log | grep -o 'http://localhost:[0-9]*')
# Build the URL for the Bitrise YML formatting
BASE_URL="${WORKFLOW_API_URL}/api/bitrise-yml.json"
echo "Workflow editor base URL: $BASE_URL"
# Use curl to send a GET request and retrieve the JSON data
json_data=$(curl -s "$BASE_URL")

# Use jq to remove any null or empty 'opts' objects and ensure the output is a JSON object, not a string
json_data=$(echo "$json_data" | jq 'walk(if type == "object" and .opts == {} then del(.opts) else . end)')

# Ensure that the json_data is still a valid JSON object and not empty
if [[ $? -ne 0 || -z "$json_data" ]]; then
    echo "Failed to process JSON data received from Bitrise Workflow editor."
    cat bitrise-editor.log
    echo "$json_data"
    exit 1
fi

# Format the JSON data to be encapsulated under 'bitrise_yml' key
formatted_json="{\"bitrise_yml\":$json_data}"

# Use curl to send a POST request with the correctly formatted JSON content
response=$(curl -s -X POST -H "Content-Type: application/json" -d "$formatted_json" "$BASE_URL")
echo "Response from POST request to Bitrise Workflow editor: $response"
