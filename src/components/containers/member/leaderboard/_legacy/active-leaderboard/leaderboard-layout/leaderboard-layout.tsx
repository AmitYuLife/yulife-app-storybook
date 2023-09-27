import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { setScreenViewForBurgerMenu } from "@navigation/utils";

interface Props {
  children: React.ReactNode;
}

export const LeaderboardLayout = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      {children}
      <View style={styles.bottomPad} />
      <TopBarAbsolute hasShadow={true} hasWhiteBackground={true} onPressLeftIcon={openMenu} />
      <NavBar activeIndex={3} />
    </View>
  );
};

const openMenu = () => {
  setScreenViewForBurgerMenu();
  Navigation.mergeOptions(ROUTES.leaderboard, {
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
});
