import { execSync, fork } from "child_process";
import specs from "./specs.json";
import { select } from "@inquirer/prompts";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import axios from "axios";

const CI = process.env.CI;
const ALLURE_HISTORY_FOLDER_LOCATION =
  process.env.ALLURE_HISTORY_FOLDER_LOCATION || "./e2e-report/allure-report/history";

const init = async () => {
  const [_, __, ...args] = process.argv;

  let [specName, ...restArgs] = args;
  let region: "UK" | "SA" | "US" | "JP" = (process.env.REGION as "UK" | "SA" | "US" | "JP") || "UK";
  let specList: string[];
  const specNames = Object.keys(specs).sort();

  // direct path to spec provided
  if (specName?.includes(".ts")) {
    // TODO: we should prompt for region here
    const exists = existsSync(specName);
    if (!exists) {
      throw new Error(`Spec "${specName}" does not exist`);
    }
    specList = [specName];
  } else {
    // Otherwise a preset from specs.json
    if (!specName) {
      specName = await select({ message: "Which spec do you want to run?", choices: specNames });
    }

    if (!specs[specName]) {
      throw new Error(`Spec "${specName}" is not present in specs.json`);
    }

    region = specs[specName].region;
    specList = specs[specName].specs.map((spec) => `e2e/${spec}`);
  }

  // set our API URL and region
  const TARGET_LOCALE = mapRegionToTargetLocale(region);
  const API_URL = `http://localhost:${mapRegionToPort(region)}/`;

  if (!CI) {
    await assertBundlerIsRunning();
  }

  await assertAPIIsRunning(API_URL);

  console.log(`API URL: ${API_URL}`);
  console.log(`TARGET_LOCALE: ${TARGET_LOCALE}`);

  // Clean up any e2e-report/ios.* folders

  try {
    execSync(
      [
        `API_URL=${API_URL}`,
        `TARGET_LOCALE=${TARGET_LOCALE}`,
        "yarn",
        "detox",
        "test",
        "-i",
        "--cleanup",
        "-c",
        "ios.sim.debug",
        "--loglevel",
        "info",
        "--json",
        "--outputFile=e2e-report/results.json",
        ...restArgs,
        specList.join(" "),
      ].join(" "),
      { stdio: "inherit" }
    );
  } finally {
    // If we have a history folder that's provided, we want to copy it across to the report so we can identify flaky tests
    if (ALLURE_HISTORY_FOLDER_LOCATION) {
      try {
        await execSync(
          `cp -r ${ALLURE_HISTORY_FOLDER_LOCATION} ./e2e-report/allure-results/history || echo '${ALLURE_HISTORY_FOLDER_LOCATION} does not exist'`
        );
      } catch (e) {
        console.error(`Error copying history folder: ${e}`);
      }
    }

    await execSync(
      "yarn allure generate ./e2e-report/allure-results --clean -o ./e2e-report/allure-report"
    );

    if (!CI) {
      console.log(`Viewing report.... cmd + c to close.`);
      await execSync("yarn allure open ./e2e-report/allure-report");
    }
  }
};

init();

async function assertBundlerIsRunning() {
  const BUNDLER_URL = "http://localhost:8081/";

  try {
    await axios.get(BUNDLER_URL);
    console.log(`Bundler running at ${BUNDLER_URL}`);
  } catch (error) {
    console.error(`--------------------------------`);
    console.error(`--------------------------------`);
    console.error(`ERROR: Bundler is not running at ${BUNDLER_URL}`);
    console.error(`Run "yarn start:e2e" to start the bundler`);
    console.error(`--------------------------------`);
    console.error(`--------------------------------`);
    process.exit(1);
  }
}

async function assertAPIIsRunning(apiUrl: string) {
  try {
    const x = await axios.get(apiUrl);
    console.log(`API running at ${apiUrl}`);
  } catch (error) {
    console.error(`--------------------------------`);
    console.error(`--------------------------------`);
    console.error(`ERROR: API is not running at ${apiUrl}`);
    console.error(`--------------------------------`);
    console.error(`--------------------------------`);
    process.exit(1);
  }
}

function mapRegionToPort(region: "UK" | "SA" | "US" | "JP") {
  switch (region) {
    case "UK":
      return 5000;
    case "SA":
      return 5002;
    case "US":
      return 5001;
    case "JP":
      return 5003;
  }
}

function mapRegionToTargetLocale(region: "UK" | "SA" | "US" | "JP") {
  switch (region) {
    case "UK":
      return "en-GB";
    case "SA":
      return "en-ZA";
    case "US":
      return "en-US";
    case "JP":
      return "ja-JP";
  }
}
