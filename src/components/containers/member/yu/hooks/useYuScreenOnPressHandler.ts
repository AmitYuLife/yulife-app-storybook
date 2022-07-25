import { SduiAction } from "@graphql/_core/schema";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

interface ButtonParams {
  event: SduiAction;
  onPress: SduiAction;
}

export const useYuScreenOnPressHandler = (buttonParams: ButtonParams, defaultEventName = "button_press") => {
  const dispatch = useDispatch();
  return useCallback(() => {
    const actions = [];
    if (buttonParams?.onPress) {
      actions.push({
        type: buttonParams.onPress.type,
        payload: buttonParams.onPress.payload,
      });

      if (buttonParams?.event) {
        try {
          const payload = JSON.parse(buttonParams.event.payload);
          const action = logMixpanelEventActionCreator(payload.name || defaultEventName, payload.props || {});
          actions.push(action);
        } catch (e) {}
      }

      actions.map((action) => dispatch(action));
    }
  }, [buttonParams, defaultEventName, dispatch]);
};
