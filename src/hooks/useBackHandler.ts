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
    const subscription = BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      subscription.remove();
    };
  }, [backHandler]);
}
