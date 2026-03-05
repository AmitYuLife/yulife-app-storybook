import React, { memo } from "react";
import { Animated, TextStyle, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { SCROLL_PICKER_ACTIVE_ITEM } from "@ids";
import { ITEM_HEIGHT } from "../scroll-picker.styles";
import { useTheme } from "@modules/themes/hooks/useTheme";
import { Colours, StyleSheet } from "@styles";
import { getActiveTextOpacityValue, getInactiveTextOpacityValue } from "../scroll-picker.animation";

interface Props {
  children: string | number;
  translateY?: Animated.AnimatedInterpolation<number>;
  opacity: Animated.AnimatedInterpolation<number>;
  active?: boolean;
  testID?: string;
}

interface ListItemProps {
  scrollY: Animated.Value;
  index: number;
  label: string;
}

export const ListItem = memo(({ scrollY, index, label }: ListItemProps) => (
  <Wrapper>
    <ItemText
      opacity={getInactiveTextOpacityValue({
        scrollY,
        index: index - 1,
        itemHeight: ITEM_HEIGHT,
      })}
    >
      {label}
    </ItemText>
    <ItemText
      testID={SCROLL_PICKER_ACTIVE_ITEM(label)}
      opacity={getActiveTextOpacityValue({ scrollY, index: index - 1, itemHeight: ITEM_HEIGHT })}
      active={true}
    >
      {label}
    </ItemText>
  </Wrapper>
));

const ItemText = ({ children, opacity = new Animated.Value(1), active, testID }: Props) => {
  const { theme } = useTheme();
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
      <TextTemplate type="h3" color={active ? theme.colors.primary.p600 : Colours.neutral.n700} testID={testID}>
        {children}
      </TextTemplate>
    </Animated.View>
  );
};

const Wrapper = ({ children }: { children: React.ReactElement[] }) => (
  <View style={styles.itemWrapper}>{children}</View>
);

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
