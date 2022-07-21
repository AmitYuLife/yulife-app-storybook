import React from "react";
import { BackHandler } from "react-native";
import { usePressedInWithDelay } from "./usePressedInWithDelay";

export function useBackHandler(backHandler: () => boolean) {
  const { handlePress } = usePressedInWithDelay({ onPress: backHandler });

  const handleBackPress = () => {
    handlePress();
    return true;
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [backHandler]);
}
