const jestPreset = require("@testing-library/react-native/jest-preset");

module.exports = Object.assign(jestPreset, {
  preset: "@testing-library/react-native",
  setupFilesAfterEnv: [...jestPreset.setupFiles, "<rootDir>/jest/setup-unit.js"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "src/.+\\.(test|spec).(ts|tsx|js)$",
  testPathIgnorePatterns: ["/node_modules/", "/e2e/"],
  testEnvironment: "jsdom",
  timers: "fake",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  modulePaths: ["<rootDir>"],
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.{spec,stories}.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.styles.ts",
    "!src/**/*.data.ts",
    "!src/**/*.fixtures.ts",
    "!src/App.tsx",
    "!src/context/**/*",
    "!src/graphql/**/*",
    "!src/navigation/**/*",
    "!src/styles/**/*",
    "!src/services/**/*",
  ],
  moduleNameMapper: {
    "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest/fileMock.js",
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
});
