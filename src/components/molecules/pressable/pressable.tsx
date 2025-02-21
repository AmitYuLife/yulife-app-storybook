import { Pressable as RnPressable, PressableProps, View } from "react-native";
import { usePressedInWithDelay } from "@hooks";
import { Ref, memo } from "react";

export interface IPressableProps extends PressableProps {
  onPress: () => void;
  delay?: number;
  forwardRef?: Ref<View>;
  type?: "onPress" | "onLongPress";
}

const Pressable = ({ onPress, forwardRef, delay = 0, type = "onPress", ...otherProps }: IPressableProps) => {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  return <RnPressable ref={forwardRef} {...otherProps} {...{ [type]: handlePress }} />;
};

export default memo(Pressable);
