import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";
import type { JestConfigWithTsJest } from "ts-jest";
import { mapValues } from "lodash";

const pathObj = pathsToModuleNameMapper(compilerOptions.paths);

const jestConfig: JestConfigWithTsJest = {
  testRunner: "jest-circus/runner",
  testTimeout: 180000,
  testMatch: ["**/*.spec.ts"],
  verbose: true,
  preset: "ts-jest",
  reporters: [
    "default",
    ["../node_modules/jest-html-reporters", { publicPath: "./e2e-report" }],
    [
      "jest-allure2-reporter",
      {
        /* see https://github.com/wix-incubator/jest-allure2-reporter/blob/beta/index.d.ts */
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
