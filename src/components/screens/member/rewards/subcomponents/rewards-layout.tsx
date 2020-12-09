import React from "react";
import { StyleSheet, ViewStyle, View, Platform } from "react-native";
import { TOP_BAR, Style } from "@styles";
import { RewardTabs } from "@components/molecules";
import { REWARDS_SCREEN } from "@ids";
import { NavBar } from "@components/organisms";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

const WRAPPER_MARGIN_TOP = Platform.select({
  ios: 0,
  android: -20,
});
interface Props {
  children: React.ReactNode;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  onLeftMenuPress: () => void;
  activeScreen: "rewards" | "purchased";
}

export function RewardsListLayout(props: Props) {
  const { children, onLeftMenuPress, onLeftTabPress, onRightTabPress, activeScreen } = props;
  const activeIndex = activeScreen === "rewards" ? 0 : 1;

  return (
    <View style={styles.wrapper} testID={REWARDS_SCREEN}>
      <View style={styles.topbarFiller} />
      <View style={styles.rewardTabsWrapper}>
        <RewardTabs onLeftTabPress={onLeftTabPress} onRightTabPress={onRightTabPress} activeTabIndex={activeIndex} />
      </View>
      <View style={styles.listWrapper}>{children}</View>
      <TopBarAbsolute onPressLeftIcon={onLeftMenuPress} />
      <NavBar activeIndex={4} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  listWrapper: {
    flex: 1,
  } as ViewStyle,
  rewardTabsWrapper: {
    alignItems: "center",
    marginTop: WRAPPER_MARGIN_TOP,
  } as ViewStyle,
  topbarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: TOP_BAR.PADDING_TOP,
  } as ViewStyle,
  topbarFiller: {
    height: TOP_BAR.HEIGHT * (Style.hasNotch ? 2.2 : 2),
  } as ViewStyle,
});
