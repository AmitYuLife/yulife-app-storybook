import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps, ViewProps } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { memo } from "react";

export type IProps = Omit<TouchableOpacityProps, "onPress"> &
  ViewProps & {
    onPress: () => void;
    children?: React.ReactChild | React.ReactChild[];
    delay?: number;
  };

const TouchableOpacityWithDelay = ({ onPress, delay, ...otherProps }: IProps) => {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  return (
    <TouchableOpacity
      accessibilityRole={"button"}
      {...otherProps}
      onPress={handlePress}
      activeOpacity={!onPress ? 1 : 0.7}
    />
  );
};

export default memo(TouchableOpacityWithDelay);
