import React from "react";
import { Platform, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles/index";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { labels } from "@navigation/root";

import { YuCoinCounter } from "@organisms";

export type RightIconTypes = "Coins";

interface Props {
  textStyle?: TextStyle;
  shouldHighlightCoins?: boolean;
  colour?: string;
  icon?: RightIconTypes;
}

export default function Right({ shouldHighlightCoins, textStyle, colour, icon }: Props) {
  if (!icon) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay onPress={labels[4].onPress} style={styles.coinsWrapper}>
      <YuCoinCounter shouldHighlightCoins={shouldHighlightCoins} textStyle={textStyle} colour={colour} />
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  coinsLogoWrapper: {
    marginBottom: Platform.select({ ios: Style.adjust(-10), android: 2 }),
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
    position: "absolute",
    right: Style.adjust(15),
    top: Platform.select({ ios: 2, android: Style.adjust(8) }),
  } as ViewStyle,
});
