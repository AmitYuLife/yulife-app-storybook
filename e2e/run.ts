import { execSync, fork } from "child_process";
import specs from "./specs.json";
import { select } from "@inquirer/prompts";
import { readFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import axios from "axios";

const CI_ARG = "--running-from-ci";

const init = async () => {
  const [_, __, ...args] = process.argv;

  let [specName, ...restArgs] = args;
  const specNames = Object.keys(specs).sort();

  if (!specName) {
    specName = await select({ message: "Which spec do you want to run?", choices: specNames });
  }

  if (!specs[specName]) {
    throw new Error(`Spec "${specName}" is not present in specs.json`);
  }

  // set our API URL and region
  const TARGET_LOCALE = mapRegionToTargetLocale(specs[specName].region);
  const API_URL = `http://localhost:${mapRegionToPort(specs[specName].region)}/`;

  if (!args.includes(CI_ARG)) {
    await assertBundlerIsRunning();
  }

  await assertAPIIsRunning(API_URL);

  console.log(`API URL: ${API_URL}`);
  console.log(`TARGET_LOCALE: ${TARGET_LOCALE}`);

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
        ...restArgs.filter((arg) => ![CI_ARG].includes(arg)),
        specs[specName].specs.map((spec) => `e2e/${spec}`).join(" "),
      ].join(" "),
      { stdio: "inherit" }
    );
  } finally {
    await execSync("rm -rf allure-report || true");
    await execSync("rm -rf e2e-report/allure || true");
    await execSync("yarn allure generate -o ./e2e-report/allure");

    if (!args.includes(CI_ARG)) {
      console.log(`Viewing report.... cmd + c to close.`);
      await execSync("yarn allure open ./e2e-report/allure");
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
