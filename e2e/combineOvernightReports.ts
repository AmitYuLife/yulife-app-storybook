const { execSync } = require("child_process");
const specs = require("./specs.json");

const keys = Object.keys(specs);

const ignoreKeys = ["healthcheck", "all", "screenshots"];

const outputDir = "./allure-reports-all";

// TODO: While we're a migrating to the Gitlab CI, we need to support both the old and new S3 bucket names
// The new bucket is a generic reporting bucket that uses folder structure to separate reports (cypress/detox)
const S3_BUCKET_NAME =
  process.env.REPORT_S3_BUCKET_NAME || "yu-eu-west-2-develop-detox-static-origin";
const S3_PREFIX = process.env.REPORT_S3_BUCKET_NAME ? "detox/" : "";

// 1. fetch the last develop reports
for (const key of keys) {
  if (ignoreKeys.includes(key)) {
    continue;
  }

  console.log(`Syncing ${key}...`);
  const cmd = `aws s3 sync s3://${S3_BUCKET_NAME}/${S3_PREFIX}reports/${key}/develop/allure-results ${outputDir}/${key}`;
  console.log(cmd);
  execSync(cmd, { stdio: "inherit" });
}

// 2. combine into a super allure report
const paths = keys.map((key) => `${outputDir}/${key}`);
const cmd = `allure generate ${outputDir} --clean -o ${outputDir}/_all ${paths.join(" ")}`;
execSync(cmd, { stdio: "inherit" });

// 3. Send it back up to S3
execSync(
  `aws s3 sync ${outputDir}/_all s3://${S3_BUCKET_NAME}/${S3_PREFIX}reports/develop-summary`,
  { stdio: "inherit" }
);

// open the report (local only)
if (!process.env.CI) {
  execSync(`allure open ${outputDir}/_all`, { stdio: "inherit" });
}
