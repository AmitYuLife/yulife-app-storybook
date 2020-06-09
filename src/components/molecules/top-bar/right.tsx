import React from "react";
import { Platform, StyleSheet, ViewStyle, TextStyle, View } from "react-native";
import { Style, Colours } from "@styles/index";
import Counter from "../counter/counter";
import { Coins } from "./assets";

interface Props {
  coins?: number;
  textStyle?: TextStyle;
  shouldHighlightCoins?: boolean;
  colour?: string;
}

export default function Right({ coins = 0, shouldHighlightCoins, textStyle, colour }: Props) {
  return (
    <View style={styles.coinsWrapper}>
      <View style={styles.coinsTextWrapper}>
        <Counter
          value={coins || 0}
          textStyle={StyleSheet.flatten([
            styles.coinsText,
            textStyle,
            shouldHighlightCoins ? { color: Colours.darkHotPink } : null,
          ])}
        />
      </View>
      <View style={styles.coinsLogoWrapper}>
        <Coins color={shouldHighlightCoins ? Colours.darkHotPink : colour} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  coinsLogoWrapper: {
    marginBottom: Platform.select({ ios: Style.adjust(-8), android: 2 }),
  } as ViewStyle,
  coinsText: {
    fontSize: Style.adjust(18),
    marginBottom: Style.adjust(Platform.select({ ios: -12, android: 4 })),
    marginRight: Style.adjust(8),
  } as TextStyle,
  coinsTextWrapper: {
    height: "100%",
    justifyContent: "center",
  } as ViewStyle,
  coinsWrapper: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    right: Style.adjust(15),
    height: Style.adjust(30),
    top: Platform.select({ ios: 2, android: Style.adjust(8) }),
  } as ViewStyle,
});
