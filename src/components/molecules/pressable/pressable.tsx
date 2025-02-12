import * as React from "react";
import { Pressable as RnPressable, PressableProps } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { memo } from "react";

export interface IPressableProps extends PressableProps {
  onPress: () => void;
  delay?: number;
  type?: "onPress" | "onLongPress";
}

const Pressable = ({ onPress, delay = 0, type = "onPress", ...otherProps }: IPressableProps) => {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  return <RnPressable {...otherProps} {...{ [type]: handlePress }} />;
};

export default memo(Pressable);
