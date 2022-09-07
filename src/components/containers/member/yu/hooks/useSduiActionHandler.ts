import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SduiAction } from "@graphql/_core/schema";
import { logEvent } from "../helpers/logEvent";

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
