import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { ConnectedTopBar } from "@components/organisms/top-bar/connected-top-bar";
import { Style } from "@styles";
import { TopBar } from "@components/molecules";
import { openMenu } from "./openMenu";

const neverUpdate = () => true;

const _LeaderboardTopBar = memo(() => {
  return (
    <View style={styles.wrapper}>
      <ConnectedTopBar onPressLeftIcon={openMenu} />
      <View style={styles.shadow} />
    </View>
  );
}, neverUpdate);

const PADDING_TOP = Platform.select({ ios: Style.getSafeAreaStart(), android: 0 });
const PADDING_BOTTOM = 12;
const HEIGHT = PADDING_TOP + PADDING_BOTTOM + TopBar.height;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM,
    height: HEIGHT,
    backgroundColor: "white",
  } as ViewStyle,
  shadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: Platform.select({ ios: StyleSheet.hairlineWidth, android: 1 }),
    backgroundColor: "rgba(0,0,0,0.2)",
  } as ViewStyle,
});

export const LeaderboardTopBar = Object.assign(_LeaderboardTopBar, { HEIGHT });
