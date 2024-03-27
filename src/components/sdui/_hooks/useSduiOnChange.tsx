import { DynamicDataType } from "@redux/server-driven-ui/sdui.types";
import { useCallback, useContext } from "react";
import { SduiDispatchContext, SduiStateContext } from "../_context/SduiProvider";
import { SduiLocalActionTypes } from "../_types/sdui.types";

export const useSduiOnChange = <T extends DynamicDataType>(answerKey: string, format?: (value: T) => T) => {
  const { dynamicData } = useContext(SduiStateContext);
  const sduiDispatch = useContext(SduiDispatchContext);

  const onChange = useCallback(
    (value: T) => {
      sduiDispatch({
        type: SduiLocalActionTypes.UPDATE_DYNAMIC_DATA,
        payload: {
          [answerKey]: value,
        },
      });
    },
    [answerKey, sduiDispatch]
  );

  const value = format ? format(dynamicData?.[answerKey] as T) : (dynamicData?.[answerKey] as T);

  return {
    onChange,
    value,
  };
};
