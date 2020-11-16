import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { TopBar, NavBar } from "@organisms";
import { Style, Colours } from "@styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface Props {
  children: React.ReactChild;
}

const _YuScreenLayout = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      {children}
      <View style={styles.topBarWrapper}>
        <TopBar onPressLeftIcon={openMenu} />
        <View style={styles.topBarShadow} />
      </View>
      <NavBar activeIndex={2} />
    </View>
  );
};

export const YuScreenLayout = memo(_YuScreenLayout);

const PADDING_TOP = Platform.select({ ios: Style.getSafeAreaStart(), android: 0 });
const PADDING_BOTTOM = 12;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  topBarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM,
    height: TopBar.HEIGHT + PADDING_TOP + PADDING_BOTTOM,
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

const openMenu = () => {
  Navigation.mergeOptions(ROUTES.yuScreen, {
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
