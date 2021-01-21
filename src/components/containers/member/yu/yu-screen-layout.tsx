import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { NavBar } from "@organisms";
import { Colours } from "@styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

interface Props {
  children: React.ReactChild;
}

const _YuScreenLayout = ({ children }: Props) => {
  return (
    <View style={styles.wrapper}>
      {children}
      <TopBarAbsolute hasWhiteBackground={true} onPressLeftIcon={openMenu} />
      <NavBar activeIndex={2} />
    </View>
  );
};

export const YuScreenLayout = memo(_YuScreenLayout);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
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
