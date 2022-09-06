import React from "react";
import { Platform, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles/index";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { labels } from "@navigation/root";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { t } from "@locale";
import { addCommasToNumber } from "@utils";
import { YuCoinCounter } from "@organisms";

export type RightIconTypes = "Coins";

interface Props {
  textStyle?: TextStyle;
  shouldHighlightCoins?: boolean;
  colour?: string;
  icon?: RightIconTypes;
}

export default function Right({ shouldHighlightCoins, textStyle, colour, icon }: Props) {
  const coins = useSelector(getTotalCoins);

  if (!icon) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay
      onPress={labels[4].onPress}
      style={styles.coinsWrapper}
      accessibilityLabel={t("topBar.totalBank.icon.accessibilityLabel", { coins: addCommasToNumber(coins) })}
    >
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
