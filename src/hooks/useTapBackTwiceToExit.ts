import { useRef } from "react";
import { useNavigationComponentDidAppear } from "./useNavigationComponentDidAppear";
import { useNavigationComponentDidDisappear } from "./useNavigationComponentDidDisappear";
import { NativeEventSubscription, BackHandler } from "react-native";

export const useTapBackTwiceToExit = (componentId: string) => {
  const backPressed = useRef(0);
  const backHandler = useRef(null as NativeEventSubscription);

  useNavigationComponentDidAppear(() => {
    backPressed.current = 0;
    backHandler.current = BackHandler.addEventListener("hardwareBackPress", () => {
      if (backPressed.current > 0) {
        return false;
      }

      backPressed.current = backPressed.current + 1;
      return true;
    });
  }, componentId);

  useNavigationComponentDidDisappear(() => {
    if (backHandler?.current) {
      backHandler.current.remove();
    }
  });
};
