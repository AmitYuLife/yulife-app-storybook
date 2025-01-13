import { useCallback } from "react";
import { useDispatch } from "react-redux";
import Logger from "@services/logging/logger";
import { logEvent } from "../helpers/logEvent";
import { navigateToProduct } from "../helpers/navigateToProduct";
import { OnboardingHandler } from "./useOnboardingButtonHandler";
import { SduiAction, YuScreenProductButtonAction } from "@graphql/__generated";

interface Props {
  event?: SduiAction;
  onPress?: OnboardingHandler | YuScreenProductButtonAction;

  currentRoute: string;
}

export const useYuScreenOnPressHandler = ({ event, onPress, currentRoute }: Props) => {
  const dispatch = useDispatch();

  return useCallback(async () => {
    if (typeof onPress === "function") {
      try {
        await onPress();
        logEvent(dispatch, event);
      } catch (e) {
        Logger.error(e, { where: "use-yu-screen-on-press-handler-onboarding-handler" });
      }

      return;
    }

    if (onPress?.productAction) {
      try {
        await navigateToProduct(onPress.productAction, currentRoute);
        logEvent(dispatch, event);
      } catch (e) {
        Logger.error(e, { where: "use-yu-screen-on-press-handler-navigate-to-product" });
      }

      return;
    }

    if (onPress.sduiAction) {
      dispatch({
        type: onPress.sduiAction.type,
        payload: { serverPayload: onPress.sduiAction.payload },
      });
      logEvent(dispatch, event);
    }
  }, [dispatch, event, onPress, currentRoute]);
};
