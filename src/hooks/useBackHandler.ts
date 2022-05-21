import React from "react";
import { BackHandler } from "react-native";

export function useBackHandler(backHandler: () => boolean) {
  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    };
  }, [backHandler]);
}
