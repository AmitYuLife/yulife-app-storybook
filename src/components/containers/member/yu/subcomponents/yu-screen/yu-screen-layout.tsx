import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericHeadingPad, NavBar } from "@organisms";
import { Colours, Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { setScreenViewForBurgerMenu } from "@navigation/utils";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { YUSCREEN, YUSCREEN_V4 } from "@ids";
import { useAccessibilityHiddenElements } from "@hooks";

interface Props {
  children: React.ReactNode;
  testID?: string;
  hasWhiteBackground?: boolean;
  topBarType?: TOP_BAR_TYPES;
  fullHeight?: boolean;
}

export const YuScreenLayout = memo(
  ({
    children,
    fullHeight = false,
    testID = YUSCREEN_V4(true),
    hasWhiteBackground = true,
    topBarType = TOP_BAR_TYPES.DEFAULT,
  }: Props) => {
    const { androidImportantForAccessibility, accessibilityElementsHidden } = useAccessibilityHiddenElements();

    return (
      <View
        style={styles.wrapper}
        testID={testID}
        importantForAccessibility={androidImportantForAccessibility}
        accessibilityElementsHidden={accessibilityElementsHidden}
      >
        <View style={styles.contentWrapper}>
          <GenericHeadingPad />
          {fullHeight ? (
            children
          ) : (
            <View style={styles.innerWrapper} testID={YUSCREEN}>
              <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {children}
              </ScrollView>
            </View>
          )}
        </View>
        <TopBarAbsolute type={topBarType} hasWhiteBackground={hasWhiteBackground} onPressLeftIcon={openMenu} />
        <NavBar activeIndex={2} />
      </View>
    );
  }
);

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
