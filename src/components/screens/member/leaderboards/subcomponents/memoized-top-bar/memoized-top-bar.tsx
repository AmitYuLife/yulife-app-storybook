import React, { memo } from "react";
import { View, LayoutChangeEvent, StyleSheet, ViewStyle } from "react-native";
import { ConnectedTopBar } from "@components/organisms/top-bar/connected-top-bar";
import { TOP_BAR_PAD_BOT, TOP_BAR_PAD_TOP } from "../../leaderboards.screen.styles";

interface Props {
  onLayout: (event: LayoutChangeEvent) => void;
  onPressLeftIcon: () => void;
}

const neverUpdate = () => true;

export const MemoizedTopBar = memo(({ onLayout, onPressLeftIcon }: Props) => {
  return (
    <View onLayout={onLayout} style={styles.wrapper}>
      <ConnectedTopBar onPressLeftIcon={onPressLeftIcon} />
    </View>
  );
}, neverUpdate);

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    paddingTop: TOP_BAR_PAD_TOP,
    paddingBottom: TOP_BAR_PAD_BOT,
    left: 0,
    right: 0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  } as ViewStyle,
});
