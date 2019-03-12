# Detox Testing

## Commands
- `yarn e2e:build` - builds 
- `yarn e2e:run` - runs tests, skips manual assertions
- `yarn e2e:run:includeManual` - runs tests, asks for user inputs on manual assertions
- `yarn e2e:run:manualOnly` - runs manual tests only with `.manual.spec.ts` extension 

Important: run `yarn start:e2e` when running the packager in order for the mocks to work.

## Debugging
- The easiest way to check if an element is not found is to open the mochaawesome report in __report

## Gotchas

### Keyboard error
Problem: detox complains keyboard is not on screen
Solution: Open simulator via xcode, disconnect the hardware keyboard