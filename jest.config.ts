import type { Config } from "@jest/types";

const jestConfig: Config.InitialOptions = {
  testRunner: "jest-circus/runner",
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: { syntax: "typescript", decorators: true },
          target: "es2024",
        },
        module: { type: "commonjs" },
      },
    ],
  },
  modulePaths: [__dirname],
};

export default jestConfig;
