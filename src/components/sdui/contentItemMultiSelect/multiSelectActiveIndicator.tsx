import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import Svg, { Circle, Path } from "react-native-svg";

interface Props {
  isActive: boolean;
}

export const MultiSelectActiveIndicator = memo(({ isActive }: Props) => {
  if (!isActive) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.absoluteUpperRight}>
        <Svg width={16} height={16} viewBox="0 0 16 16">
          <Circle cx={8} cy={8} r={8} fill="#5BA9D5" />
          <Path d="M12 5.333l-5.558 5.334L4 8.267" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colours.ocean.up306,
  } as ViewStyle,
  absoluteUpperRight: {
    position: "absolute",
    top: Style.adjust(8),
    right: Style.adjust(8),
  } as ViewStyle,
});
