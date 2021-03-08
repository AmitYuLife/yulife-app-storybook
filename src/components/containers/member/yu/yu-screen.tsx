import React, { useState } from "react";
import { StyleSheet, ViewStyle, View, ScrollView, Platform } from "react-native";
import { Style, TOP_BAR } from "@styles";
import media from "@styles/media";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";
import { NameAndLevel, AvatarAndEquipment, YuCoinPower, ToolTip } from "./subcomponents";
import { YuScreenProductContext } from "./yu-screen.context";

export const YuScreen = () => {
  const [product, setProduct] = useState(null);
  return (
    <YuScreenProductContext.Provider value={{ product, setProduct }}>
      <View style={styles.wrapper} testID={YUSCREEN}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.list} testID={YUSCREEN_SCROLL_VIEW}>
          <View style={styles.padTop} />
          <NameAndLevel />
          <AvatarAndEquipment />
          <YuCoinPower />
          <View style={styles.avatar}>
            <ToolTip />
          </View>
          <View style={styles.padBot} />
        </ScrollView>
      </View>
    </YuScreenProductContext.Provider>
  );
};

const PAD_TOP = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: TOP_BAR.HEIGHT + Style.adjust(8),
      },
    ],
    TOP_BAR.HEIGHT + Style.adjust(22)
  ),
  android: TOP_BAR.HEIGHT + Style.adjust(20),
});

const PAD_BOT = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: Style.adjust(100),
      },
    ],
    Style.adjust(88)
  ),
  android: Style.adjust(115),
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  list: {
    flex: 1,
  } as ViewStyle,
  padTop: {
    height: PAD_TOP,
  } as ViewStyle,
  padBot: {
    height: PAD_BOT,
  } as ViewStyle,
  avatar: {
    position: "absolute",
    alignSelf: "center",
    top: 160,
  } as ViewStyle,
});
