import { Colours } from "@styles/index";
import * as React from "react";
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet } from "react-native";

interface Props {
  size?: ActivityIndicatorProps["size"];
}

const Loading = ({ size = "large" }: Props) => (
  <ActivityIndicator animating={true} color={Colours.darkHotPink} style={styles.wrapper} size={size} />
);

export default Loading;

const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: "center", justifyContent: "center", height: 80 },
});
