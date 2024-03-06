import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Colours, Style } from "@styles";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { setScreenViewForBurgerMenu } from "@navigation/utils";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";

interface Props {
  children: React.ReactNode;
}

export const YuScreenLayout = memo(({ children }: Props) => (
  <View style={styles.wrapper}>
    <View style={styles.contentWrapper}>
      <GenericHeadingPad />
      <View style={styles.innerWrapper} testID={YUSCREEN}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} testID={YUSCREEN_SCROLL_VIEW}>
          {children}
        </ScrollView>
      </View>
    </View>
    <TopBarAbsolute type={TOP_BAR_TYPES.DEFAULT} hasWhiteBackground={true} onPressLeftIcon={openMenu} />
    <NavBar activeIndex={2} />
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  },
  contentWrapper: { flex: 1, paddingBottom: Style.adjust(80) },
  innerWrapper: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    width: Style.DEVICE_WIDTH,
  },
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
