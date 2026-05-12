import { roundSecondsToNearestMinute, sumSampleValues, truncateNumberValue } from "./number";

describe("roundSecondsToNearestMinute", () => {
  const cases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 60 },
    { input: 59, expected: 60 },
    { input: 60, expected: 60 },
    { input: 61, expected: 120 },
    { input: 1776, expected: 1800 },
    { input: 1800, expected: 1800 },
    { input: 1801, expected: 1860 },
  ];

  for (const { input, expected } of cases) {
    it(`rounds ${input}s up to ${expected}s`, () => {
      expect(roundSecondsToNearestMinute(input)).toBe(expected);
    });
  }
});

describe("sumSampleValues", () => {
  describe("when roundToMinute is true (meditation)", () => {
    it("rounds a fractional-minute total up to the nearest whole minute", () => {
      expect(sumSampleValues([{ value: 876 }], true)).toBe(900);
    });

    it("does not change a value that is already a whole number of minutes", () => {
      expect(sumSampleValues([{ value: 900 }], true)).toBe(900);
    });

    it("sums multiple samples before rounding", () => {
      // 600 + 276 = 876s → rounds up to 900s
      expect(sumSampleValues([{ value: 600 }, { value: 276 }], true)).toBe(900);
    });

    it("handles high-precision values from apps like Headspace", () => {
      expect(sumSampleValues([{ value: 876.9123456 }], true)).toBe(900);
    });
  });

  describe("when roundToMinute is false (non-meditation)", () => {
    it("floors to a whole number of seconds", () => {
      expect(sumSampleValues([{ value: 876.9 }], false)).toBe(876);
    });

    it("sums multiple samples and floors", () => {
      expect(sumSampleValues([{ value: 500 }, { value: 376.7 }], false)).toBe(876);
    });
  });
});

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
