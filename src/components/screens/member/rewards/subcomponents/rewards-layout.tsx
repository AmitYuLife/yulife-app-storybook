import React from "react";
import { StyleSheet, ViewStyle, View, Platform } from "react-native";
import { Style } from "@styles";
import { RewardTabs, TopBar } from "@components/molecules";
import { REWARDS_SCREEN } from "@ids";
import { NavBar } from "@components/organisms";

interface Props {
  children: React.ReactNode;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  onLeftMenuPress: () => void;
  totalCoins: number;
  activeScreen: "rewards" | "purchased";
}

export function RewardsListLayout(props: Props) {
  const { children, onLeftMenuPress, onLeftTabPress, onRightTabPress, totalCoins, activeScreen } = props;
  const activeIndex = activeScreen === "rewards" ? 0 : 1;

  return (
    <View style={styles.wrapper} testID={REWARDS_SCREEN}>
      <View style={styles.topbarFiller} />
      <View style={styles.rewardTabsWrapper}>
        <RewardTabs onLeftTabPress={onLeftTabPress} onRightTabPress={onRightTabPress} activeTabIndex={activeIndex} />
      </View>
      <View style={styles.listWrapper}>{children}</View>
      <View style={styles.topbarWrapper}>
        <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
      </View>
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
    marginTop: 8,
  } as ViewStyle,
  topbarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  } as ViewStyle,
  topbarFiller: {
    height: TopBar.height + Platform.select({ ios: 36, android: 0 }),
  } as ViewStyle,
});
