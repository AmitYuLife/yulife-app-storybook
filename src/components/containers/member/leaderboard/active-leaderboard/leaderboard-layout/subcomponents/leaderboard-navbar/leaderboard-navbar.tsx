import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { NavBar } from "@components/molecules";

const _LeaderboardNavBar = () => {
  return (
    <View style={styles.wrapper}>
      <NavBar activeIndex={3} />
    </View>
  );
};

export const LeaderboardNavBar = memo(_LeaderboardNavBar, () => true);

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
});
