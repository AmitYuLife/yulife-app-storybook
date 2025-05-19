import { VoidFunction } from "@utils";
import { useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { SduiStateContext } from "../_context/SduiProvider";
import { VoidFunctionOrSduiActionPayload } from "../_types/sdui.types";

export function useSduiCallbackFunctionOrReduxAction(
  defaultAction?: VoidFunctionOrSduiActionPayload,
  defaultCallback?: VoidFunction,
  defaultContextPayload?: Record<string, never>
) {
  const sduiContext = useContext(SduiStateContext);
  const dispatch = useDispatch();

  const handleSduiActionWithParams = useCallback(
    async (
      action: VoidFunctionOrSduiActionPayload = defaultAction,
      callback: VoidFunction | undefined = defaultCallback,
      contextPayload: Record<string, never> | undefined = defaultContextPayload
    ) => {
      if (typeof action === "function") {
        await action();
      } else if (action?.type) {
        const reduxPayload = {
          type: action.type,
          payload: action.payload,
          contextPayload: contextPayload || sduiContext,
        };

        dispatch(reduxPayload);
      }

      if (callback) {
        callback();
      }
    },
    [defaultAction, defaultCallback, defaultContextPayload, sduiContext]
  );

  const handleSduiAction = useCallback(() => handleSduiActionWithParams(), [handleSduiActionWithParams]);

  return { handleSduiAction, handleSduiActionWithParams };
}
