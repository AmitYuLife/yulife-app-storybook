import { SduiAction } from "@graphql/_core/schema";
import { VoidFunction } from "@utils";
import { useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
import { SduiStateContext } from "../_context/SduiProvider";

export function useCreateSduiActionDispatcher(callback?: VoidFunction) {
  const sduiContext = useContext(SduiStateContext);
  const dispatch = useDispatch();

  const createSduiActionDispatcher = useCallback(
    (action: SduiAction) => {
      if (!action) {
        return null;
      }

      return () => {
        const reduxPayload = {
          type: action.type,
          payload: action.payload,
          contextPayload: sduiContext,
        };

        dispatch(reduxPayload);

        if (callback) {
          callback();
        }
      };
    },
    [dispatch, sduiContext, callback]
  );

  return { createSduiActionDispatcher };
}
