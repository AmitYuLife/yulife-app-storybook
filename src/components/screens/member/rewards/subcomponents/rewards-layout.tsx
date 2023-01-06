import React from "react";
import { StyleSheet, ViewStyle, View, Platform } from "react-native";
import { TOP_BAR } from "@styles";
import { REWARDS_SCREEN } from "@ids";
import { NavBar } from "@components/organisms";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

const WRAPPER_MARGIN_TOP = Platform.select({
  ios: 0,
  android: -20,
});
interface Props {
  children: React.ReactNode;
  onLeftMenuPress: () => void;
  hasBackButton?: boolean;
  Overlay?: React.ReactNode | null;
}

export function RewardsListLayout(props: Props) {
  const { children, onLeftMenuPress, hasBackButton, Overlay } = props;

  return (
    <View style={styles.wrapper} testID={REWARDS_SCREEN}>
      <View style={styles.topbarFiller} />
      <View style={styles.listWrapper}>{children}</View>
      <TopBarAbsolute leftIcon={hasBackButton ? "Back" : "Menu"} onPressLeftIcon={onLeftMenuPress} />
      {Overlay}
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
  topbarFiller: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
