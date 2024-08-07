import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { Colours, Style } from "@styles";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW, YUSCREEN_V4 } from "@ids";
import { useNavigation } from "@navigation/navigation.context";

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
    const { onLeftMenuPress } = useNavigation();
    return (
      <View style={styles.wrapper} testID={testID}>
        <View style={styles.contentWrapper}>
          <GenericHeadingPad />
          {fullHeight ? (
            children
          ) : (
            <View style={styles.innerWrapper} testID={YUSCREEN}>
              <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} testID={YUSCREEN_SCROLL_VIEW}>
                {children}
              </ScrollView>
            </View>
          )}
        </View>
        <TopBarAbsolute type={topBarType} hasWhiteBackground={hasWhiteBackground} onPressLeftIcon={onLeftMenuPress} />
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
