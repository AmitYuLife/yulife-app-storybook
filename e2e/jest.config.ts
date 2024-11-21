import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'
import { mapValues } from 'lodash'

const pathObj = pathsToModuleNameMapper(compilerOptions.paths)

const jestConfig: JestConfigWithTsJest = {
  bail: false,
  testRunner: "jest-circus/runner",
  testTimeout: 120000,
  testMatch: ["**/*.spec.ts"],
  verbose: true,
  preset: "ts-jest",
  reporters: [
    "default",
	  ["../node_modules/jest-html-reporters", { "publicPath": "./e2e-report" }],
  ],
  modulePaths: [__dirname],
  moduleNameMapper: mapValues(pathObj, v => `<rootDir>/${v}`),
  resolver: undefined,
  setupFilesAfterEnv: ['./init.ts'],
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: './testEnv',
}

export default jestConfig