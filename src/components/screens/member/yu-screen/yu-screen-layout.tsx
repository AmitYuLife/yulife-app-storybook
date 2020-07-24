import React from "react";
import { YUSCREEN } from "@ids";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { TopBar, NavBar } from "@components/molecules";
import { Style } from "@styles";

interface Props {
  children: React.ReactNode;
  onLeftMenuPress: () => void;
  totalCoins: number;
  hasNotification: boolean;
}

function _YuScreenLayout(props: Props) {
  const { children, onLeftMenuPress, hasNotification, totalCoins } = props;

  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <View style={styles.topbarWrapper}>
        <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
      </View>
      <View style={styles.topbarFiller} />
      {children}
      <NavBar activeIndex={2} hasNotification={hasNotification} />
    </View>
  );
}

export const YuScreenLayout = React.memo(_YuScreenLayout);

const getTopBarFiller = () => {
  if (Platform.OS === "android") {
    return 6;
  }

  if (Style.isIphoneXPlus()) {
    return 52;
  }

  if (Style.isIphoneX()) {
    return 50;
  }

  return 30;
};

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
  topbarFiller: {
    height: TopBar.height + getTopBarFiller(),
  } as ViewStyle,
});
