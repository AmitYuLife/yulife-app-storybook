import { useCallback, useContext } from "react";
import { SduiDispatchContext } from "../_context/SduiProvider";
import { SduiLocalActionTypes } from "../_types/sdui.types";
import { SharedValue } from "react-native-reanimated";

export const useSduiActionUpdateBus = () => {
  const sduiDispatch = useContext(SduiDispatchContext);

  const updateBus = useCallback(
    (key: string, value: string | number | SharedValue<number>): void => {
      if (!key) {
        return null;
      }

      sduiDispatch({
        type: SduiLocalActionTypes.UPDATE_BUS,
        payload: {
          [key]: value,
        },
      });
    },
    [sduiDispatch]
  );

  return { updateBus };
};
