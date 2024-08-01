import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { memo } from "react";

export type IProps = Omit<TouchableOpacityProps, "onPress"> & { onPress: () => void; delay?: number };

const TouchableOpacityWithDelay = ({ onPress, activeOpacity = 0.7, delay, ...otherProps }: IProps) => {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  return (
    <TouchableOpacity
      accessibilityRole={"button"}
      {...otherProps}
      onPress={handlePress}
      activeOpacity={!onPress ? 1 : activeOpacity}
    />
  );
};

export default memo(TouchableOpacityWithDelay);
