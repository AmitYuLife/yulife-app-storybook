import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { JestConfigWithTsJest } from "ts-jest";
import { mapValues } from "lodash";
import { readFileSync } from "fs";
import type { ReporterOptions } from "jest-allure2-reporter";

const pathObj = pathsToModuleNameMapper(compilerOptions.paths);

let count = 0;

const timestamp = Date.now();

/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig: JestConfigWithTsJest = {
  testRunner: "jest-circus/runner",
  testTimeout: 180000,
  testMatch: ["**/*.spec.ts"],
  verbose: true,
  preset: "ts-jest",
  reporters: [
    "default",
    ["jest-html-reporters", { publicPath: "./e2e-report" }],
    [
      "jest-allure2-reporter",
      /** @type {import('jest-allure2-reporter').ReporterOptions} */
      {
        extends: "detox-allure2-adapter/preset-allure",
        resultsDir: "e2e-report/allure-results",
        testCase: {
          descriptionHtml: (args) => getStepDescriptionHtml(args),
          // Bit of a hack, but we need to order by duration in order to maintain the order of the BDD
          start: () => timestamp,
          // ... so we just increment the count, but keep the times
          stop: () => {
            count++;
            return timestamp + count;
          },
          labels: {
            // if we want to go by behaviour
            epic: ({ testCase }) =>
              testCase?.ancestorTitles?.filter((t) => t.startsWith("Feature:")).join(" >> "),
            feature: ({ testCase }) =>
              testCase?.ancestorTitles?.filter((t) => t.startsWith("Scenario:")).join(" >> "),
            story: ({ testCase }) =>
              testCase?.ancestorTitles
                ?.filter((t) => t.startsWith("Given") || t.startsWith("When"))
                .join(" >> "),

            // if we want to go by suite
            parentSuite: ({ testCase }) =>
              testCase?.ancestorTitles?.filter((t) => t.startsWith("Feature:")).join(" >> "),
            suite: ({ testCase }) =>
              testCase?.ancestorTitles?.filter((t) => t.startsWith("Scenario:")).join(" >> "),
            subSuite: ({ testCase }) =>
              testCase?.ancestorTitles
                ?.filter((t) => t.startsWith("Given") || t.startsWith("When"))
                .join(" >> "),
          },
        },
        testStep: {
          displayName: (args) => {
            if (args.value.startsWith("before")) {
              return getBDDDescription(args);
            }
            return args.value;
          },
        },
      },
    ],
  ],
  modulePaths: [__dirname],
  moduleNameMapper: mapValues(pathObj, (v) => `<rootDir>/${v}`),
  resolver: undefined,
  setupFilesAfterEnv: ["./init.ts"],
  globalSetup: "detox/runners/jest/globalSetup",
  globalTeardown: "detox/runners/jest/globalTeardown",
  testEnvironment: "./testEnv",
  testEnvironmentOptions: {
    eventListeners: [
      "jest-metadata/environment-listener",
      "jest-allure2-reporter/environment-listener",
      [
        "detox-allure2-adapter",
        {
          useSteps: true,
          deviceLogs: true,
          deviceScreenshots: true,
        },
      ],
    ],
  },
};

export default jestConfig;

const fileCache = {} as Record<string, string[]>;

function getStepDescriptionHtml({ value, testCaseMetadata, ...rest }) {
  try {
    const { fileName, lineNumber } = testCaseMetadata.sourceLocation;
    if (!fileCache[fileName]) {
      fileCache[fileName] = readFileSync(fileName, "utf8").split("\n");
    }

    const filePath = fileName.split("/e2e/")?.[1] || fileName;

    return [
      `<pre>`,
      `<a href="javascript:void(0)" onclick="navigator.clipboard.writeText('${filePath}:${lineNumber}')">📋 ${filePath}:${lineNumber}</a>`,
      `<br/>`,
      "<code>",
      ...fileCache[fileName].slice(Math.max(lineNumber - 3, 0), lineNumber - 1),
      `<mark>${fileCache[fileName][lineNumber - 1]}</mark>`,
      ...fileCache[fileName].slice(
        lineNumber + 1,
        Math.min(lineNumber + 2, fileCache[fileName].length)
      ),
      "</code></pre>",
    ].join("\n");
  } catch (e) {
    return value;
  }
}

function getBDDDescription({ value, testCase, testStepMetadata }) {
  try {
    const { fileName, lineNumber } = testStepMetadata.sourceLocation;
    if (!fileCache[fileName]) {
      fileCache[fileName] = readFileSync(fileName, "utf8").split("\n");
    }

    // take the previous 5 lines
    const candidateLines = fileCache[fileName]
      .slice(Math.max(lineNumber - 5, 0), lineNumber)
      .map((l) => l.replace(/  /g, "")) // trim spaces
      .filter((l) => l.startsWith("Given") || l.startsWith("When") || l.startsWith("Feature"))
      .reverse();

    // can't find it in code, return the value instead
    if (candidateLines.length === 0) {
      return value;
    }

    return candidateLines[0].split(",")[0].replace(/"/g, "").replace("(", " ");
  } catch (e) {
    return testCase?.ancestorTitles?.slice(-1)?.[0] || value;
  }
}
