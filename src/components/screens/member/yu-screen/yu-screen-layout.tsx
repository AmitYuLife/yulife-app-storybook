import React from "react";
import { YUSCREEN } from "@ids";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { TopBar } from "@components/molecules";
import { Style } from "@styles";
import { NavBar } from "@components/organisms";

interface Props {
  children: React.ReactNode;
  onLeftMenuPress: () => void;
  totalCoins: number;
}

function _YuScreenLayout(props: Props) {
  const { children, onLeftMenuPress, totalCoins } = props;

  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <View style={styles.topbarWrapper}>
        <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
      </View>
      {children}
      <NavBar activeIndex={2} />
    </View>
  );
}

export const YuScreenLayout = React.memo(_YuScreenLayout);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  topbarWrapper: {
    left: 0,
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    paddingBottom: Style.adjust(12),
    position: "absolute",
    right: 0,
    backgroundColor: "white",
  } as ViewStyle,
});
