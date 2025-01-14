import { VoidFunction } from "@utils";
import { useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { SduiStateContext } from "../_context/SduiProvider";
import { VoidFunctionOrSduiActionPayload } from "../_types/sdui.types";

export function useSduiCallbackFunctionOrReduxAction(
  action: VoidFunctionOrSduiActionPayload,
  callback?: VoidFunction,
  contextPayload?: Record<string, never>
) {
  const sduiContext = useContext(SduiStateContext);
  const dispatch = useDispatch();

  const handleSduiAction = useCallback(async () => {
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
  }, [dispatch, contextPayload, sduiContext, action, callback]);

  return { handleSduiAction };
}
