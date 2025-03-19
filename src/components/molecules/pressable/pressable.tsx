import { Pressable as RnPressable, PressableProps } from "react-native";
import { IUsePressEffectProps, useBoxProps, usePressEffect, usePressedInWithDelay } from "@hooks";
import { memo, useMemo } from "react";
import { IBoxProps } from "@atoms/box/box.types";
import Animated from "react-native-reanimated";

export type IPressableProps = PressableProps &
  IBoxProps &
  IUsePressEffectProps & {
    delay?: number;
    enableAnimation?: boolean;
  };

const AnimatedPressable = Animated.createAnimatedComponent(RnPressable);
const Pressable = ({
  onPress,
  exiting,
  entering,
  delay = 0,
  style: propStyle,
  pressedTranslation,
  enableAnimation = false,
  ...otherProps
}: IPressableProps) => {
  const boxProps = useBoxProps(otherProps);
  const { handlePress } = usePressedInWithDelay({ onPress, delay });
  const { animatedStyle, onPressIn, onPressOut, isPressedIn } = usePressEffect({
    pressedTranslation,
    isEnabled: enableAnimation,
  });

  const style = useMemo(() => {
    return [
      typeof propStyle === "function" ? propStyle({ pressed: isPressedIn }) : propStyle,
      boxProps.style,
      animatedStyle,
    ];
  }, [animatedStyle, boxProps.style, isPressedIn, propStyle]);

  return (
    <AnimatedPressable
      {...boxProps}
      entering={entering}
      exiting={exiting}
      style={style}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    />
  );
};

export default memo(Pressable);
