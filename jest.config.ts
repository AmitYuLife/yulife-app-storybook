import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  testRunner: "jest-circus/runner",
  testMatch: ["**/*.test.ts"],
  preset: "ts-jest",
  modulePaths: [__dirname],
};

export default jestConfig;
