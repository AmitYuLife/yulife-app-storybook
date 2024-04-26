import { parseJSON } from "@utils";
import { SduiReducerState } from "../_types/sdui.types";
import { DynamicDataType } from "@redux/server-driven-ui/sdui.types";

export const mapDynamicProps = (sduiReducerState: SduiReducerState, dynamicProps: string) => {
  if (!dynamicProps) {
    return {};
  }

  const { isValid, data } = parseJSON<Record<string, Array<{ type: string; value: string }>>>(dynamicProps);

  if (!isValid) {
    return {};
  }

  const pairs: Record<string, DynamicDataType> = {};

  Object.entries(data).forEach(([key, value]) => {
    pairs[key] = value.reduce((acc, curr) => {
      const hasResolved = ["string", "number", "boolean"].includes(typeof acc);
      if (hasResolved) {
        return acc;
      }

      if (curr.type === "context") {
        return sduiReducerState.dynamicData[curr.value];
      }

      if (curr.type === "contextKey") {
        const resolvedDynamicDataKey = sduiReducerState.dynamicData[curr.value];
        if (!resolvedDynamicDataKey) {
          return acc;
        }

        let keys = [];
        try {
          keys = Object.keys(resolvedDynamicDataKey);
        } catch (e) {
          return acc;
        }

        if (!keys.length) {
          return acc;
        }

        return keys[0];
      }

      return curr.value;
    }, undefined);
  });

  return pairs;
};
