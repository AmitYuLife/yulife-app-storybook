import { truncateNumberValue } from "./number";

describe("truncateNumberValue", () => {
  const tests = [
    {
      input: "250.1299999",
      decimalPlaces: 2,
      expected: "250.12",
    },
    {
      input: "250.1299999",
      decimalPlaces: 3,
      expected: "250.129",
    },
    {
      input: "4.27",
      decimalPlaces: 1,
      expected: "4.2",
    },
    {
      input: "7551.12",
      decimalPlaces: 0,
      expected: "7551",
    },
    {
      input: "8672184.5599987",
      decimalPlaces: 4,
      expected: "8672184.5599",
    },
    {
      input: "12345.10002",
      decimalPlaces: 2,
      expected: "12345.10",
    },
    {
      input: "312.1000000000004",
      decimalPlaces: 2,
      expected: "312.10",
    },
    {
      input: "654.0000000000001",
      decimalPlaces: 1,
      expected: "654.0",
    },
    {
      input: "111.222..",
      decimalPlaces: 2,
      expected: "111.22",
    },
    {
      input: "111..222.",
      decimalPlaces: 2,
      expected: "111",
    },
    {
      input: "abc",
      decimalPlaces: 1,
      expected: "NaN",
    },
    {
      input: "245.6a",
      decimalPlaces: 2,
      expected: "245.6",
    },
    {
      input: "a245.6",
      decimalPlaces: 2,
      expected: "NaN",
    },
  ];

  for (const test of tests) {
    it(`should return the correct value when input is ${test.input}`, () => {
      const result = truncateNumberValue(test.input, test.decimalPlaces);

      expect(result).toBe(test.expected);
    });
  }
});
