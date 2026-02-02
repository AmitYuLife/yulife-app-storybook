/**
 * This script combines the JUnit test results into a single XML file.
 * Then it produces a summary of the test results to be sent to the API MR discussion.
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");

const resultsJsonPath = path.join(__dirname, "../../../", "e2e-report", "results.json");

/**
 * Builds a success message payload for GitLab MR discussion
 */
function buildSuccessMessage(total, passed, failures) {
  const allureReportUrl = `https://${process.env.REPORT_DNS_NAME}/detox/reports/${process.env.DETOX_TEST_TYPE}/${process.env.CI_PIPELINE_IID}/allure-report/index.html`;
  const statusEmoji = failures === 0 ? "✅" : "❌";
  const statusText = failures === 0 ? "PASSED" : "FAILED";

  return {
    body: `### ${statusEmoji} Detox Test Results - ${statusText}

**Summary:**
- **Total Tests:** ${total}
- **Passed:** ${passed}
- **Failed:** ${failures}

**Reports:**
- [📊 Allure Report](${allureReportUrl})`,
  };
}

/**
 * Builds a failure/error message payload for GitLab MR discussion
 */
function buildErrorMessage(error) {
  const errorMessage = error?.message || String(error || "Unknown error");
  const errorStack = error?.stack ? `\n\n\`\`\`\n${error.stack}\n\`\`\`` : "";

  return {
    body: `### ❌ Detox Test Results - ERROR

**Error occurred while processing test results:**

\`\`\`
${errorMessage}
\`\`\`${errorStack}

**Note:** Unable to generate test summary due to the error above.`,
  };
}

/**
 * Sends a message to GitLab MR discussion
 */
async function sendToGitLab(payload) {
  if (!process.env.API_DISCUSSION_URL) {
    console.log("No API_DISCUSSION_URL found, skipping posting to API MR discussion");
    return;
  }

  try {
    console.log("Sending results to GitLab MR discussion...");
    await axios.post(process.env.API_DISCUSSION_URL, payload, {
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-TOKEN": process.env.GITLAB_TOKEN,
      },
    });
    console.log("Successfully posted results to GitLab MR discussion");
  } catch (error) {
    console.error("Failed to post results to GitLab MR discussion:", error.message);
    throw error;
  }
}

async function main() {
  let shouldSendMessage = !!process.env.API_DISCUSSION_URL;

  try {
    // Read the result json file
    const resultsJson = fs.readFileSync(resultsJsonPath, "utf-8");
    const results = JSON.parse(resultsJson);
    // Parse numbers
    const total = parseInt(results.numTotalTests, 10) || 0;
    const failures = parseInt(results.numFailedTests, 10) || 0;
    const passed = parseInt(results.numPassedTests, 10) || 0;

    console.log("Summary:", { total, failures, passed });

    // Build and send success message
    const gitlabPayload = buildSuccessMessage(total, passed, failures);
    await sendToGitLab(gitlabPayload);
  } catch (err) {
    console.error("Error processing test results:", err.message);

    // If API_DISCUSSION_URL is provided, send error message
    if (shouldSendMessage) {
      try {
        const errorPayload = buildErrorMessage(err);
        await sendToGitLab(errorPayload);
      } catch (postError) {
        console.error("Failed to post error message to GitLab MR discussion:", postError.message);
        // Re-throw the original error, not the posting error
        throw err;
      }
    }

    // Re-throw the original error
    throw err;
  }
}

main().catch(console.error);
