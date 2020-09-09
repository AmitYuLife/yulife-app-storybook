import React from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "@styles";
import { TOP_BAR_HEIGHT } from "@components/organisms/top-bar/top-bar.styles";
import { TopBar } from "@components/organisms";
import { NavBar } from "@components/organisms";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface Props {
  children: React.ReactNode;
}

export const LeaderboardLayout = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topPad} />
      {children}
      <View style={styles.bottomPad} />
      <View style={styles.topBarWrapper}>
        <TopBar onPressLeftIcon={openMenu} />
        <View style={styles.topBarShadow} />
      </View>
      <NavBar activeIndex={3} />
    </View>
  );
};

const openMenu = () => {
  Navigation.mergeOptions(ROUTES.leaderboards, {
    sideMenu: {
      left: {
        enabled: true,
        visible: true,
      },
    },
    statusBar: {
      drawBehind: false,
      visible: true,
    },
  });
};

const PADDING_TOP = Platform.select({ ios: Style.getSafeAreaStart(), android: 0 });
const PADDING_BOTTOM = 12;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(80),
  } as ViewStyle,
  topPad: {
    height: TOP_BAR_HEIGHT + PADDING_TOP + PADDING_BOTTOM,
  } as ViewStyle,
  topBarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM,
    height: TOP_BAR_HEIGHT + PADDING_TOP + PADDING_BOTTOM,
    backgroundColor: "white",
  } as ViewStyle,
  topBarShadow: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: Platform.select({ ios: StyleSheet.hairlineWidth, android: 1 }),
    backgroundColor: "rgba(0,0,0,0.2)",
  } as ViewStyle,
});
