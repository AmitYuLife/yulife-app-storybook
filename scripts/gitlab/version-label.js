#!/usr/bin/env node

/**
 * GitLab Version Labeler
 * This script runs when a merge request is merged into the develop branch
 * It adds the current package.json version as a label to the merged MR
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Configuration
const TARGET_BRANCH = "develop";
const REQUIRED_BRANCH = "develop";

// GitLab CI environment variables
const CI_API_V4_URL = process.env.CI_API_V4_URL || process.env.CI_SERVER_URL + "/api/v4";
const CI_PROJECT_ID = process.env.CI_PROJECT_ID;
const CI_COMMIT_SHA = process.env.CI_COMMIT_SHA;
const CI_COMMIT_BRANCH = process.env.CI_COMMIT_BRANCH;
// Use GITLAB_TOKEN first (has more permissions), fall back to CI_JOB_TOKEN
const CI_TOKEN = process.env.GITLAB_TOKEN || process.env.CI_JOB_TOKEN;

/**
 * Get version from package.json
 * Tries current directory first, then parent directory
 */
function getVersion() {
  const possiblePaths = [
    path.join(process.cwd(), "package.json"),
    path.join(__dirname, "package.json"),
    path.join(__dirname, "..", "package.json"),
  ];

  for (const packageJsonPath of possiblePaths) {
    try {
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        return packageJson.version;
      }
    } catch (error) {
      // Try next path
      continue;
    }
  }

  throw new Error("Could not find or read package.json");
}

/**
 * Find the merge request that contains this commit
 */
async function findMergeRequest() {
  const encodedProjectId = encodeURIComponent(CI_PROJECT_ID);
  const url = `${CI_API_V4_URL}/projects/${encodedProjectId}/repository/commits/${CI_COMMIT_SHA}/merge_requests`;

  console.log(`🔎 Searching for MR containing commit ${CI_COMMIT_SHA.substring(0, 8)}...`);

  try {
    const response = await axios.get(url, {
      headers: {
        "PRIVATE-TOKEN": CI_TOKEN,
        "Content-Type": "application/json",
      },
    });

    const mergeRequests = response.data;

    if (!mergeRequests || mergeRequests.length === 0) {
      console.log("⚠️  No merge request found for this commit");
      return null;
    }

    // Find the merged MR targeting the target branch
    const targetMR = mergeRequests.find((mr) => mr.state === "merged" && mr.target_branch === TARGET_BRANCH);

    if (targetMR) {
      console.log(`✓ Found merged MR: !${targetMR.iid} - "${targetMR.title}"`);
      return targetMR;
    }

    // No appropriate MR found
    console.log(`⚠️  No merged MR targeting ${TARGET_BRANCH} found for this commit`);
    return null;
  } catch (error) {
    console.error("❌ Error finding merge request:", error.message);
    throw error;
  }
}

/**
 * Add labels to merge request using add_labels API
 */
async function addLabelsToMR(mrIid, version) {
  const encodedProjectId = encodeURIComponent(CI_PROJECT_ID);
  const url = `${CI_API_V4_URL}/projects/${encodedProjectId}/merge_requests/${mrIid}`;

  try {
    const response = await axios.put(url, 
      {
        add_labels: `app-version: ${version}`,
      },
      {
        headers: {
          "PRIVATE-TOKEN": CI_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✓ Successfully added label to MR");
    return response.data;
  } catch (error) {
    console.error("❌ Error adding label:", error.message);
    throw error;
  }
}

/**
 * Check if we should run (validates environment and branch)
 */
function shouldRun() {
  if (!CI_COMMIT_BRANCH) {
    console.log("ℹ️  No CI_COMMIT_BRANCH set, proceeding anyway");
  } else if (CI_COMMIT_BRANCH !== REQUIRED_BRANCH) {
    console.log(`ℹ️  Skipping: Current branch is "${CI_COMMIT_BRANCH}", required branch is "${REQUIRED_BRANCH}"`);
    return false;
  }

  if (!CI_TOKEN) {
    console.error("❌ Missing GITLAB_TOKEN or CI_JOB_TOKEN environment variable");
    return false;
  }

  if (!CI_API_V4_URL) {
    console.error("❌ Missing CI_API_V4_URL environment variable");
    return false;
  }

  if (!CI_PROJECT_ID) {
    console.error("❌ Missing CI_PROJECT_ID environment variable");
    return false;
  }

  if (!CI_COMMIT_SHA) {
    console.error("❌ Missing CI_COMMIT_SHA environment variable");
    return false;
  }

  return true;
}

/**
 * Main execution
 */
async function main() {
  console.log("=================================");
  console.log("Adding Version Label to Merged MR");
  console.log("=================================");

  // Check if we should run (validates environment and branch)
  if (!shouldRun()) {
    process.exit(0);
  }

  try {
    // Get version from package.json
    const version = getVersion();
    console.log(`📦 Package version: ${version}`);
    console.log(`🔍 Project ID: ${CI_PROJECT_ID}`);
    console.log(`🔍 Commit SHA: ${CI_COMMIT_SHA}`);

    // Find the merge request that contains this commit
    const mr = await findMergeRequest();

    if (!mr) {
      console.log("⚠️  Skipping label addition - no MR found");
      process.exit(0);
    }

    // Add the version labels to the merged MR
    await addLabelsToMR(mr.iid, version);

    console.log("=================================");
    console.log("✓ Version label added successfully!");
    console.log("=================================");
    process.exit(0);
  } catch (error) {
    console.error("=================================");
    console.error("❌ Script failed:", error.message);
    console.error("=================================");
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Export functions for testing
module.exports = {
  getVersion,
  findMergeRequest,
  addLabelsToMR,
  shouldRun,
  main,
};
