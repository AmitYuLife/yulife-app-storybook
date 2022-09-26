import { getRouteState } from "@redux/app/app.selectors";
import { useEffect } from "react";
import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { useSelector } from "react-redux";

export const useStatusBarStyle = (componentId: string, condition: boolean) => {
  const currentScreen = useSelector(getRouteState);

  useEffect(() => {
    if (currentScreen === componentId && Platform.OS === "ios") {
      Navigation.mergeOptions(componentId, {
        statusBar: {
          style: condition ? "light" : "dark",
        },
      });
    }
  }, [componentId, condition, currentScreen]);
};
