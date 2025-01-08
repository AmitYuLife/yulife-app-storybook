import { parseJSON } from "@utils";
import { SduiReducerState } from "../_types/sdui.types";
import { DynamicDataType } from "@redux/server-driven-ui/sdui.types";
import { isNil, omit } from "lodash";

type MultiplyOperation = {
  type: "multiply";
  value: number;
};

type StringPrefixOperation = {
  type: "string-interpolation";
  value: string;
};

type Operation = MultiplyOperation | StringPrefixOperation;

export const mapDynamicProps = (sduiId: string, sduiReducerState: SduiReducerState, dynamicProps: string) => {
  if (!sduiReducerState?.id || !dynamicProps || !sduiId) {
    return {};
  }

  if (sduiId !== sduiReducerState.id) {
    return {};
  }

  const { isValid, data } =
    parseJSON<Record<string, Array<{ type: string; value: string; operations?: Array<Operation> }>>>(dynamicProps);

  if (!isValid) {
    return {};
  }

  const pairs: Record<string, DynamicDataType> = {};

  Object.entries(data).forEach(([key, value]) => {
    pairs[key] = value.reduce((acc, curr, index, arr) => {
      const hasResolved = ["string", "number", "boolean"].includes(typeof acc);
      const accToReturn = index + 1 === arr.length && typeof acc === "object" ? omit(acc, "operations") : acc;

      if (hasResolved) {
        return accToReturn;
      }

      if (curr.type === "context") {
        if (curr.operations?.length) {
          return curr.operations.reduce((operationAcc, operationReducer) => {
            if (isNil(operationAcc)) {
              return null;
            }

            if (operationReducer.type === "multiply") {
              const accAsNumber = Number(operationAcc);

              if (isNaN(accAsNumber)) {
                return null;
              }

              return Number((accAsNumber * operationReducer.value).toFixed(2));
            }

            if (operationReducer.type === "string-interpolation") {
              return operationReducer.value.replace("%{string-to-replace}", `${operationAcc}`);
            }

            return operationAcc;
          }, sduiReducerState.dynamicData[curr.value]) as DynamicDataType;
        }

        return sduiReducerState.dynamicData[curr.value];
      }

      if (curr.type === "contextKey") {
        const resolvedDynamicDataKey = sduiReducerState.dynamicData[curr.value];
        if (!resolvedDynamicDataKey) {
          return accToReturn;
        }

        let keys = [];
        try {
          keys = Object.keys(resolvedDynamicDataKey);
        } catch (e) {
          return accToReturn;
        }

        if (!keys.length) {
          return accToReturn;
        }

        return keys[0];
      }

      return curr.value;
    }, undefined);
  });

  return pairs;
};
