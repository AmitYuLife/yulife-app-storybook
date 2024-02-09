import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logEvent } from "../helpers/logEvent";
import { SduiAction } from "@graphql/__generated";

type UseSduiActionHandler = ({ event, onPress }: { event?: SduiAction; onPress: SduiAction }) => () => void;

export const useSduiActionHandler: UseSduiActionHandler = ({ event, onPress }) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    if (onPress?.type) {
      dispatch({
        type: onPress.type,
        payload: { serverPayload: onPress.payload },
      });
      logEvent(dispatch, event);
    }
  }, [dispatch, event, onPress]);
};
