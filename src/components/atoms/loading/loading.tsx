import { Colours } from "@styles/index";
import * as React from "react";
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, ViewStyle } from "react-native";
import { LOADING_BAR } from "@ids";

interface Props {
  size?: ActivityIndicatorProps["size"];
  style?: ViewStyle;
}

const Loading = ({ size = "large", style }: Props) => (
  <ActivityIndicator
    animating={true}
    color={Colours.darkHotPink}
    style={[styles.wrapper, style]}
    size={size}
    testID={LOADING_BAR}
  />
);

export default Loading;

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: "center", justifyContent: "center", height: 80 },
});
