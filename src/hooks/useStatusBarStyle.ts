import { getRouteState } from "@redux/app/app.selectors";
import { useEffect } from "react";
import { Navigation } from "react-native-navigation";
import { useSelector } from "react-redux";

export const useStatusBarStyle = (componentId: string, condition: boolean) => {
  const currentScreen = useSelector(getRouteState);

  useEffect(() => {
    if (currentScreen === componentId) {
      Navigation.mergeOptions(componentId, {
        statusBar: {
          style: condition ? "light" : "dark",
        },
      });
    }
  }, [componentId, condition, currentScreen]);
};
