# Detox Testing

## Getting started
1. Pull and run the api server in a separate folder (). Run `yarn develop:e2e` to start the api service in e2e mode
2. Navigate to the root of this project
3. Build the detox IPA by running `npm run e2e:build`. This might take a while
4. Start the RN server in e2e mode by running `npm run start:e2e`
5. Run your tests by running `npm run e2e:run`

## Commands
- `npm run e2e:build` - builds 
- `npm run e2e:run` - runs tests, skips manual assertions
- `npm run e2e:run:includeManual` - runs tests, asks for user inputs on manual assertions
- `npm run e2e:run:manualOnly` - runs manual tests only with `.manual.spec.ts` extension 

Important: run `yarn start:e2e` when running the packager in order for the mocks to work.

## Debugging
- The easiest way to check if an element is not found is to open the mochaawesome report in __report

## Gotchas

### Keyboard error
Problem: detox complains keyboard is not on screen
Solution: Open simulator via xcode, disconnect the hardware keyboard