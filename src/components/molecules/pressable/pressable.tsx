import { Pressable as RnPressable, PressableProps } from "react-native";
import { useBoxProps, usePressedInWithDelay } from "@hooks";
import { memo } from "react";
import { IBoxProps } from "@atoms/box/box.types";
import Animated from "react-native-reanimated";

export type IPressableProps = PressableProps &
  IBoxProps & {
    delay?: number;
  };

const AnimatedPressable = Animated.createAnimatedComponent(RnPressable);
const Pressable = ({ onPress, entering, exiting, forceAnimated, delay = 0, ...otherProps }: IPressableProps) => {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const boxProps = useBoxProps(otherProps);
  const PressableComponent = !!entering || !!exiting || forceAnimated ? AnimatedPressable : RnPressable;

  return (
    <PressableComponent
      {...boxProps}
      style={typeof otherProps.style === "function" ? otherProps.style : boxProps.style}
      onPress={handlePress}
    />
  );
};

export default memo(Pressable);
