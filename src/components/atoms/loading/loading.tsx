import React, { memo } from "react";
import { Colours } from "@styles/index";
import { ActivityIndicator, ActivityIndicatorProps, ViewStyle } from "react-native";
import { LOADING_BAR } from "@ids";

import { StyleSheet } from "@styles";
interface Props {
  size?: ActivityIndicatorProps["size"];
  style?: ViewStyle;
  color?: string;
}

export const Loading = ({ size = "large", style, color = Colours.darkHotPink }: Props) => (
  <ActivityIndicator animating={true} color={color} style={[styles.wrapper, style]} size={size} testID={LOADING_BAR} />
);

export default memo(Loading);

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: "center", justifyContent: "center", height: 80 },
});
