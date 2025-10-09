/**
 * This script combines the JUnit test results into a single XML file.
 * Then it produces a summary of the test results to be sent to the API MR discussion.
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");

const resultsJsonPath = path.join(__dirname, "../../../", "e2e-report", "results.json");

async function main() {
  try {
    // Read the result json file
    const resultsJson = fs.readFileSync(resultsJsonPath, "utf-8");
    const results = JSON.parse(resultsJson);
    // Parse numbers
    const total = parseInt(results.numTotalTests, 10) || 0;
    const failures = parseInt(results.numFailedTests, 10) || 0;
    const passed = parseInt(results.numPassedTests, 10) || 0;

    // Send report to GitLab MR discussion
    const allureReportUrl = `https://${process.env.REPORT_DNS_NAME}/detox/reports/${process.env.DETOX_TEST_TYPE}/${process.env.CI_PIPELINE_IID}/allure-report/index.html`;

    const statusEmoji = failures === 0 ? "✅" : "❌";
    const statusText = failures === 0 ? "PASSED" : "FAILED";

    const gitlabPayload = {
      body: `### ${statusEmoji} Detox Test Results - ${statusText}

**Summary:**
- **Total Tests:** ${total}
- **Passed:** ${passed}
- **Failed:** ${failures}

**Reports:**
- [📊 Allure Report](${allureReportUrl})`,
    };

    console.log("Summary:", { total, failures, passed });

    // Send to GitLab MR discussion if URL is provided
    if (process.env.API_DISCUSSION_URL) {
      try {
        console.log("Sending results to GitLab MR discussion...");
        await axios.post(process.env.API_DISCUSSION_URL, gitlabPayload, {
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
    } else {
      console.log("No API_DISCUSSION_URL found, skipping posting to API MR discussion");
    }
  } catch (err) {
    console.error("Error combining test results...");
    throw err;
  }
}

main().catch(console.error);
