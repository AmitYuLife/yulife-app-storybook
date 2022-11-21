import { VoidFunction } from "@utils";
import { useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { SduiStateContext } from "../_context/SduiProvider";
import { VoidFunctionOrSduiActionPayload } from "../_types/sdui.types";

export function useSduiCallbackFunctionOrReduxAction(action: VoidFunctionOrSduiActionPayload, callback?: VoidFunction) {
  const sduiContext = useContext(SduiStateContext);
  const dispatch = useDispatch();

  const handleSduiAction = useCallback(() => {
    if (!action) {
      return;
    }

    if (typeof action === "function") {
      action();
    } else {
      const reduxPayload = {
        type: action.type,
        payload: action.payload,
        contextPayload: sduiContext,
      };

      dispatch(reduxPayload);
    }

    if (callback) {
      callback();
    }
  }, [dispatch, sduiContext, action, callback]);

  return { handleSduiAction };
}
