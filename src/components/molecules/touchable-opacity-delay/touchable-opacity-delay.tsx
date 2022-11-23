import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps, ViewProps } from "react-native";
import { usePressedInWithDelay } from "@hooks";

export type IProps = Omit<TouchableOpacityProps, "onPress"> &
  ViewProps & {
    onPress: () => void;
    children?: React.ReactChild | React.ReactChild[];
    delay?: number;
  };

export default function TouchableOpacityWithDelay({ onPress, delay, ...otherProps }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  return (
    <TouchableOpacity
      accessibilityRole={"button"}
      {...otherProps}
      onPress={handlePress}
      activeOpacity={!onPress ? 1 : 0.7}
    />
  );
}
