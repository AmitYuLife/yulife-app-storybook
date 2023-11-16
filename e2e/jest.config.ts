import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'
import {mapValues} from 'lodash'

const pathObj = pathsToModuleNameMapper(compilerOptions.paths)

const jestConfig: JestConfigWithTsJest = {
  bail: false,
  testRunner: "jest-circus/runner",
  testTimeout: 240000,
  testMatch: ["**/*.spec.ts"],
  verbose: true,
  preset: "ts-jest",
  testEnvironment: __dirname + "/environment",
  reporters: [
    "default",
	  ["../node_modules/jest-html-reporters", { "publicPath": "./e2e-report" }],
  ],
  modulePaths: [__dirname],
  moduleNameMapper: mapValues(pathObj, v => `<rootDir>/${v}`),
  resolver: undefined,
  setupFilesAfterEnv: ['./init.ts']
}

export default jestConfig