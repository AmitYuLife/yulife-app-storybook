import { findConditionalValue } from "./findConditionalValue";

jest.mock("react-native", () => ({
  Dimensions: {
    get: jest.fn().mockImplementation(() => ({
      height: 812,
      width: 375,
    })),
  },
}));

describe("findConditionalValue", () => {
  it("should return the correct value when conditions are met", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toBe("250");
  });

  it("should return null when only one condition for an AND operator is met", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
              {
                operand: "HEIGHT",
                comparisonOperator: "GT",
                value: "659",
              },
            ],
            logicalOperator: "AND",
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toBeNull();
  });

  it("should return the correct value even when only one condition for an OR operator is met", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "GT",
                value: "659",
              },
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
            logicalOperator: "OR",
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toEqual("250");
  });

  it("should return the correct value when the condition for a NOT operator is met", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "GT",
                value: "659",
              },
            ],
            logicalOperator: "NOT",
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toBe("250");
  });

  it("should return null when the condition for a NOT operator is not met", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
            logicalOperator: "NOT",
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toBeNull();
  });

  it("should return correct value when the first condition is met and logical operator is not defined", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
          },
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "GT",
                value: "659",
              },
            ],
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toBe("250");
  });

  it("should return the value associated with the first fulfilled condition", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
          },
        ],
      },
      {
        value: "350",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toBe("250");
  });

  it("should return null when the first condition is not met and logical operator is not defined", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "GT",
                value: "659",
              },
            ],
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });

    expect(result).toBeNull();
  });

  it("should return associated value of first fulfilled condition when given multiple conditional values", () => {
    const conditionalValues = [
      {
        value: "250",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "GT",
                value: "659",
              },
            ],
          },
        ],
      },
      {
        value: "350",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
          },
        ],
      },
      {
        value: "450",
        conditions: [
          {
            expressions: [
              {
                operand: "HEIGHT",
                comparisonOperator: "LT",
                value: "659",
              },
            ],
          },
        ],
      },
    ];

    const result = findConditionalValue(conditionalValues, { HEIGHT: 658 });
    expect(result).toBe("350");
  });
});
