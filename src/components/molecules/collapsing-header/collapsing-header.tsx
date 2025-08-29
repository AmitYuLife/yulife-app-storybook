import React, { memo, PropsWithChildren, ReactNode, useMemo } from "react";
import { Animated, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

interface Props {
  expandThreshold: number;
  expandOffset: number;
  scrollValue: Animated.Value;
  children: ReactNode | undefined;
  style?: ViewStyle;
}

export const CollapsingHeader = memo<React.FC<PropsWithChildren<Props>>>((props: Props) => {
  const { expandThreshold, expandOffset, scrollValue, children, style } = props;

  const translateY = useMemo(() => {
    if (!expandThreshold || expandThreshold < 1) {
      return expandOffset;
    }

    return scrollValue.interpolate({
      inputRange: [0, expandThreshold - 1, expandThreshold],
      outputRange: [-Style.DEVICE_HEIGHT, -Style.DEVICE_HEIGHT, expandOffset],
      extrapolate: "clamp",
    });
  }, [scrollValue, expandOffset, expandThreshold]);

  const wrapperStyle = useMemo(() => {
    return [styles.default, { transform: [{ translateY }] }, style];
  }, [translateY, style]);

  return <Animated.View style={wrapperStyle}>{children}</Animated.View>;
});

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colours.neutral.white,
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
  } as ViewStyle,
});
