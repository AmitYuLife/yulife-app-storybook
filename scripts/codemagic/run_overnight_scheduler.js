#!/usr/bin/env node

const axios = require("axios");
const specs = require("../../e2e/specs.json");

const CODEMAGIC_API_TOKEN = process.env.CODEMAGIC_API_TOKEN;
if (!CODEMAGIC_API_TOKEN) {
  console.error("Error: CODEMAGIC_API_TOKEN environment variable is not set.");
  process.exit(1);
}

const CODEMAGIC_APP_ID = "686b9f69e67d1aa7e97992e4";
const BASE_WORKFLOW_ID = "ios-detox-base-test";
const BRANCH = process.env.CM_BRANCH || "develop";

async function triggerWorkflows() {
  for (const spec of Object.keys(specs)) {
    if (spec === "all") {
      continue;
    }
    
    const region = specs[spec].region;

    console.log(`➤ Triggering workflow for detox test type: ${spec}`);

    const inputVariables = {
      DETOX_TEST_TYPE: spec,
      API_REGION: region,
    };
    try {
      const { data } = await axios.post(
        "https://api.codemagic.io/builds",
        {
          appId: CODEMAGIC_APP_ID,
          workflowId: BASE_WORKFLOW_ID,
          branch: BRANCH,
          environment: { variables: inputVariables },
          labels: ["overnight"],
        },
        {
          headers: {
            "x-auth-token": CODEMAGIC_API_TOKEN,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", JSON.stringify(data));

      const buildId = data.buildId;
      if (buildId) {
        const buildUrl = `https://codemagic.io/apps/${CODEMAGIC_APP_ID}/builds/${buildId}`;
        console.log(`✓ Build started: ${buildUrl}`);
      } else {
        console.warn("⚠️ could not find buildId in response");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.error(`✗ Error triggering workflow '${workflowId}':`, JSON.stringify(err.response.data));
      } else {
        console.error(`✗ Error triggering workflow '${workflowId}':`, err.message);
      }
    }
  }
}

triggerWorkflows().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
