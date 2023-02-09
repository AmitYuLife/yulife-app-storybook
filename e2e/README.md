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

## Debugging
- The easiest way to check if an element is not found is to open the mochaawesome report in e2e-report

## Gotchas

### Keyboard error
Problem: detox complains keyboard is not on screen
Solution: Open simulator via xcode, disconnect the hardware keyboard

## Scenarios

TBC
