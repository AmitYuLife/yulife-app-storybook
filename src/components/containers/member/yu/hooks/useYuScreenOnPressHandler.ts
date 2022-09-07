import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SduiAction, YuScreenProductButtonAction } from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import { logEvent } from "../helpers/logEvent";
import { navigateToProduct } from "../helpers/navigateToProduct";
import { OnboardingHandler } from "./useOnboardingDismissalHandler";

interface Props {
  event?: SduiAction;
  onPress?: OnboardingHandler | YuScreenProductButtonAction;
}

export const useYuScreenOnPressHandler = ({ event, onPress }: Props) => {
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

    if (onPress?.productId) {
      try {
        await navigateToProduct(onPress);
        logEvent(dispatch, event);
      } catch (e) {
        Logger.error(e, { where: "use-yu-screen-on-press-handler-navigate-to-product" });
      }
    }
  }, [dispatch, event, onPress]);
};
