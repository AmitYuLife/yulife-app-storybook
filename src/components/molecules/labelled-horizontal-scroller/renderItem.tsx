import React from "react";
import { Animated, ListRenderItemInfo, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { getActiveTextOpacityValue, getInactiveTextOpacityValue } from "./animation";
import { CHOICE_WIDTH } from "./styles";
import { Colours, Style } from "@styles";
import { SCROLL_PICKER_ACTIVE_ITEM } from "@ids";

export const renderItem =
  ({ scrollX }: { scrollX: Animated.Value }) =>
  ({ item, index }: ListRenderItemInfo<{ label: string; value: string }>) => {
    return (
      <View style={styles.wrapper} testID={SCROLL_PICKER_ACTIVE_ITEM(item.label)}>
        <Animated.View
          style={[
            styles.textWrapper,
            { opacity: getInactiveTextOpacityValue({ scrollX, index, itemWidth: CHOICE_WIDTH }) },
          ]}
        >
          <Text style={StyleSheet.flatten([styles.text, styles.textLight])}>{item.label}</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.textWrapper,
            { opacity: getActiveTextOpacityValue({ scrollX, index, itemWidth: CHOICE_WIDTH }) },
          ]}
        >
          <Text style={[styles.text]} bold={true}>
            {item.label}
          </Text>
        </Animated.View>
      </View>
    );
  };

const styles = StyleSheet.create({
  wrapper: {
    width: CHOICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(24),
  } as TextStyle,
  textLight: {
    color: Colours.neutral.n400,
  } as TextStyle,
  textWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
