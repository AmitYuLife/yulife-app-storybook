import React, { memo } from "react";
import { Animated, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { ITEM_HEIGHT } from "../scroll-picker.styles";
import { Colours } from "@styles";

interface Props {
  children: string | number;
  translateY?: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
  active?: boolean;
  testID?: string;
}

export const ItemText = memo(({ children, opacity = new Animated.Value(1), active, testID }: Props) => {
  const wrapperStyle = active ? styles.itemLabelActiveWrapper : styles.itemWrapper;

  return (
    <Animated.View
      style={[
        wrapperStyle,
        {
          opacity,
        },
      ]}
    >
      <TextTemplate type="h3" color={active ? Colours.primary.p600 : Colours.neutral.n700} testID={testID}>
        {children}
      </TextTemplate>
    </Animated.View>
  );
});

export const Wrapper = memo(({ children }: { children: React.ReactElement[] }) => (
  <View style={styles.itemWrapper}>{children}</View>
));

const styles = StyleSheet.create({
  itemWrapper: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  itemLabelActiveWrapper: {
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  } as TextStyle,
});
