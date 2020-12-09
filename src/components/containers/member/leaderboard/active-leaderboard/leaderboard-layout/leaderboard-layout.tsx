import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style, TOP_BAR } from "@styles";
import { NavBar } from "@components/organisms";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

interface Props {
  children: React.ReactNode;
}

export const LeaderboardLayout = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topPad} />
      {children}
      <View style={styles.bottomPad} />
      <TopBarAbsolute hasShadow={true} hasWhiteBackground={true} onPressLeftIcon={openMenu} />
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(80),
  } as ViewStyle,
  topPad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
