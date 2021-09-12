import { DynamicDataType } from "@redux/server-driven-ui/sdui.types";
import { useCallback, useContext } from "react";
import { ProductStepContext } from "../product-step.context";

export const useDynamicOnChange = <T extends DynamicDataType>(answerKey: string, format?: (value: T) => T) => {
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);

  const onChange = useCallback(
    (data: T) => {
      setDynamicData((oldState) => ({ ...oldState, [answerKey]: data }));
    },
    [answerKey, setDynamicData]
  );

  const value = format ? format(dynamicData?.[answerKey] as T) : (dynamicData?.[answerKey] as T);

  return {
    onChange,
    value,
  };
};
