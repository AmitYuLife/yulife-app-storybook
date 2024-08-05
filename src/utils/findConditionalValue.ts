import { Dimensions } from "react-native";
import { castValue } from "./castValue";
import { ConditionalValue } from "./types";

const CONSTANTS_MAP: Record<string, string | number> = {
  HEIGHT: Dimensions.get("window").height,
  WIDTH: Dimensions.get("window").width,
};

type ComparisonFunction = (a: number | string, b: number | string) => boolean;

const FUNCTIONS_MAP: Record<string, ComparisonFunction> = {
  EQ: (a, b) => a === b,
  GT: (a, b) => a > b,
  LT: (a, b) => a < b,
};

const LOGICAL_OPERATOR_LAMBDAS: Record<string, (values: boolean[]) => boolean> = {
  DEFAULT: ([value]) => value,
  NOT: ([value]) => !value,
  AND: (values) => values.every(Boolean),
  OR: (values) => values.some(Boolean),
};

/**
 * Returns the value of the first matched condition
 */
export function findConditionalValue(conditionalValues: ConditionalValue[], operands = CONSTANTS_MAP) {
  for (const conditionalValue of conditionalValues) {
    for (const conditionalValueCondition of conditionalValue.conditions) {
      const { expressions, logicalOperator } = conditionalValueCondition;
      const conditionsFulfilled = [];

      for (const expression of expressions) {
        const fn = FUNCTIONS_MAP[expression.comparisonOperator];
        const comparator = operands[expression.operand];

        conditionsFulfilled.push(fn(comparator, castValue(expression.value)));
      }

      if (LOGICAL_OPERATOR_LAMBDAS[logicalOperator ?? "DEFAULT"](conditionsFulfilled)) {
        return conditionalValue.value;
      }
    }
  }

  return null;
}
