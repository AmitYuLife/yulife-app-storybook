export function compareSagaActionsWithNoVisualDifference(actual: any, expected: any) {
  // Compared values have no visual difference.
  // getting this error. stackoverflow suggested to wrap it in JSON.stringify
  // https://stackoverflow.com/questions/42928963/jest-test-compared-values-have-no-visual-difference
  expect(JSON.stringify(actual.value)).toEqual(JSON.stringify(expected));
}
