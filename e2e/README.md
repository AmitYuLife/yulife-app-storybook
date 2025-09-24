# Detox Testing

## Getting started

### Starting the API in detox mode

1. Pull and run `yulife-api-server` and `yarn`
2. Run `yarn services:start`. This will start:
        - Postgres (port 5432), user api / letmeinplease
        - MongoDB (port 27018), no creds
3. Run `yarn detox:setup` to create the appropriate users for the databases
4. Run `yarn detox:start` to run the server in API mode

### Running tests

1. Install detox cli globally with `npm i -g detox-cli`
2. Install applesimutils with `brew install wix/brew/applesimutils`
3. To build the detox IPA, run `yarn detox:build`. This might take a while
4. Start the RN server in e2e mode by running `yarn start:e2e` to run the react native packager in E2E mode
5. Run all the tests by running `yarn detox:test:all`

### Running localised tests

The process is almost identical to running the tests in `en-GB` except for the following:

1. Before running `yarn detox:test:all` you will need to build the translation mapping file. To do this, set the environment variable `TARGET_LOCALE` to your target locale (e.g. `export TARGET_LOCALE=ja-JP`) and run `yarn detox:build:translations`. This will create the mapping of English used in the tests to the language displayed on the app screen.
2. When running `yarn detox:test:all`, ensure that the value of the environment variable `TARGET_LOCALE` is the same as the one used in step 1.

## Debugging

- The easiest way to check if an element is not found is to open the mochaawesome report in e2e-report

## Gotchas

- Most problems can be solved by deleting `node_modules` using `rm -rf node_modules`,  and `pods` using `rm -rf ios/Pods`,  then rebuilding again.
- If there is no ios/build/Build folder and you've tried the above, it is possible the app is being built in the wrong location. To ensure it is built in ios/build/Build try the following:

1. Open xcode -> settings -> locations -> advanced (Derived Data) -> select unique

### Keyboard error

Problem: detox complains keyboard is not on screen
Solution: Open simulator via xcode, disconnect the hardware keyboard

## Scenarios

TBC

## Gitlab CI Detox testing

Detox tests runs on Gitlab in YuLife custom MacOS VM. CI jobs configuration can be found in the gitlab configuration file `gitlab/.e2e.yml`.

[More documentation for Detox Gitlab scripts](../scripts/gitlab/detox/README.md)
