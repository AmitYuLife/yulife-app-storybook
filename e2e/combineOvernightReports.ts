const { execSync } = require("child_process");
const specs = require("./specs.json");

const allKeys = Object.keys(specs);
const ignoreKeys = ["healthcheck", "all", "screenshots", "smoke"];

const keys = allKeys.filter((key) => !ignoreKeys.includes(key));

const outputDir = "./allure-reports-all";

// TODO: While we're a migrating to the Gitlab CI, we need to support both the old and new S3 bucket names
// The new bucket is a generic reporting bucket that uses folder structure to separate reports (cypress/detox)
const S3_BUCKET_NAME =
  process.env.REPORT_S3_BUCKET_NAME || "yu-eu-west-2-develop-detox-static-origin";
const S3_PREFIX = process.env.REPORT_S3_BUCKET_NAME && process.env.GITLAB_CI ? "detox/" : "";

// 1. fetch the last develop reports
for (const key of keys) {
  console.log(`Syncing ${key}...`);
  const reportCmd = `aws s3 sync s3://${S3_BUCKET_NAME}/${S3_PREFIX}reports/${key}/develop/allure-results ${outputDir}/${key}`;
  console.log(reportCmd);
  execSync(reportCmd, { stdio: "inherit" });
}

// 2. Download history from the previous combined report
console.log("Downloading history from previous combined report...");
const resultsHistoryPath = `${outputDir}/history`;
const previousHistoryCmd = `aws s3 sync s3://${S3_BUCKET_NAME}/${S3_PREFIX}reports/develop-summary/history ${resultsHistoryPath} --no-progress`;
console.log(previousHistoryCmd);
execSync(previousHistoryCmd, { stdio: "inherit" });

// 3. combine into a super allure report
const paths = keys.map((key) => `${outputDir}/${key}`);
const cmd = `allure generate ${outputDir} --clean -o ${outputDir}/_all ${paths.join(" ")}`;
console.log("Generating report with history...");
execSync(cmd, { stdio: "inherit" });

// 4. Send it back up to S3 (only if running in Gitlab CI)
if (process.env.GITLAB_CI) {
  execSync(
    `aws s3 sync ${outputDir}/_all s3://${S3_BUCKET_NAME}/${S3_PREFIX}reports/develop-summary`,
    { stdio: "inherit" }
  );
} else {
  // open the report (local only)
  console.log("Opening report locally...");
  execSync(`allure open ${outputDir}/_all`, { stdio: "inherit" });
}
