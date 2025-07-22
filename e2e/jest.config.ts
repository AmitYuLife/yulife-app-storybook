import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { JestConfigWithTsJest } from "ts-jest";
import { mapValues } from "lodash";

const pathObj = pathsToModuleNameMapper(compilerOptions.paths);

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
        testCase: {
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
