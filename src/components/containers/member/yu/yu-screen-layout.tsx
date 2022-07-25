import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { GenericHeadingPad, NavBar } from "@organisms";
import { Colours, Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { setScreenViewForBurgerMenu } from "@navigation/utils";

interface Props {
  children: React.ReactChild;
  testID?: string;
}

export const YuScreenLayout = memo(({ children, testID }: Props) => (
  <View style={styles.wrapper} testID={testID}>
    <View style={styles.contentWrapper}>
      <GenericHeadingPad />
      {children}
    </View>
    <TopBarAbsolute hasWhiteBackground={true} onPressLeftIcon={openMenu} />
    <NavBar activeIndex={2} />
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  },
  contentWrapper: { flex: 1, paddingBottom: Style.adjust(80) },
});

const openMenu = () => {
  setScreenViewForBurgerMenu();
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
