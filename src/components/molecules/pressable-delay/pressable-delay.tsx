import * as React from "react";
import { Pressable, PressableProps } from "react-native";
import { usePressedInWithDelay } from "@hooks";

export interface IProps extends PressableProps {
  onPress: () => void;
  delay?: number;
  type?: "onPress" | "onLongPress";
}

export default function PressableWithDelay({ onPress, delay = 0, type = "onPress", ...otherProps }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  return <Pressable {...otherProps} {...{ [type]: handlePress }} />;
}
