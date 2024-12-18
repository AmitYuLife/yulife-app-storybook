import { NOTIF_CENTRE, YUSCREEN, YUSCREEN_SCROLL_VIEW, YUSCREEN_V4 } from "@ids";
import { useNavigation } from "@navigation/navigation.context";
import { GenericHeadingPad, NavBar, TopBar } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { Colours, Style, TOP_BAR } from "@styles";
import { memo, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
  testID?: string;
  hasWhiteBackground?: boolean;
  topBarType?: TOP_BAR_TYPES;
  fullHeight?: boolean;
  onNotificationPress: () => void;
}

export const YuScreenLayout = memo(
  ({
    children,
    fullHeight = false,
    testID = YUSCREEN_V4(true),
    topBarType = TOP_BAR_TYPES.DEFAULT,
    onNotificationPress,
  }: Props) => {
    const { onLeftMenuPress } = useNavigation();
    const leftIcons = useMemo(
      () => [
        {
          icon: LeftIcon.MENU,
          onPress: onLeftMenuPress,
          style: { marginRight: Style.adjust(16) },
        },
        ...(onNotificationPress
          ? [
              {
                icon: LeftIcon.NOTIFICATIONS,
                onPress: onNotificationPress,
                testID: NOTIF_CENTRE,
                style: { paddingLeft: Style.adjust(8) },
                hitSlop: {
                  ...TOP_BAR.HIT_SLOP,
                  left: 0,
                },
              },
            ]
          : []),
      ],
      [onNotificationPress, onLeftMenuPress]
    );

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
        <View style={styles.topbarWrapper}>
          <TopBar type={topBarType} leftIcons={leftIcons} />
        </View>
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
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
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
