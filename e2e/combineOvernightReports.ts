const { execSync } = require("child_process");
const specs = require("./specs.json");

const allKeys = Object.keys(specs);
const ignoreKeys = ["healthcheck", "all", "screenshots", "smoke"];

const keys = allKeys.filter((key) => !ignoreKeys.includes(key));

const outputDir = "./allure-reports-all";

const S3_BUCKET_PATH = `${process.env.REPORT_S3_BUCKET_NAME}/detox`;

// 1. fetch the last develop reports
for (const key of keys) {
  console.log(`Syncing ${key}...`);
  const reportCmd = `aws s3 sync s3://${S3_BUCKET_PATH}/reports/${key}/develop/allure-results ${outputDir}/${key} --no-progress --quiet`;
  console.log(reportCmd);
  execSync(reportCmd, { stdio: "inherit" });
}

// 2. Download history from the previous combined report
console.log("Downloading history from previous combined report...");
const resultsHistoryPath = `${outputDir}/history`;
const previousHistoryCmd = `aws s3 sync s3://${S3_BUCKET_PATH}/reports/develop-summary/history ${resultsHistoryPath} --no-progress --quiet`;
console.log(previousHistoryCmd);
execSync(previousHistoryCmd, { stdio: "inherit" });

// 3. combine into a super allure report
const paths = keys.map((key) => `${outputDir}/${key}`);
const cmd = `allure generate ${outputDir} --clean -o ${outputDir}/_all ${paths.join(" ")}`;
console.log("Generating report with history...");
execSync(cmd, { stdio: "inherit" });

// 4. Send it back up to S3 (only if running in Gitlab CI)
if (process.env.GITLAB_CI) {
  const targetKey = `${process.env.CI_COMMIT_BRANCH || "develop"}-summary`;
  execSync(
    `aws s3 sync ${outputDir}/_all s3://${S3_BUCKET_PATH}/reports/${targetKey} --no-progress --quiet`,
    { stdio: "inherit" }
  );
} else {
  // open the report (local only)
  console.log("Opening report locally...");
  execSync(`allure open ${outputDir}/_all`, { stdio: "inherit" });
}
