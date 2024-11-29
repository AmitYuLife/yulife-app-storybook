import { useCallback } from "react";
import { Platform, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles/index";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { labels } from "@navigation/root";
import { useSelector } from "react-redux";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { t } from "@locale";
import { addCommasToNumber } from "@utils";
import { YuCoinCounter } from "@organisms";
import { useNavigation } from "@navigation/navigation.context";
import { ROUTES } from "@navigation/constants";
import { getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";

export type RightIconTypes = "Coins";

interface Props {
  textStyle?: TextStyle;
  shouldHighlightCoins?: boolean;
  icon?: RightIconTypes;
}

export default function Right({ shouldHighlightCoins, textStyle, icon }: Props) {
  const { componentId } = useNavigation();
  const coins = useSelector(getTotalCoins);
  const { hasDonationBattlepass } = useSelector(getRewardsTabSettings);

  const onPress = useCallback(() => {
    if (componentId !== ROUTES.rewards) {
      return labels[4].onPress();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentId, hasDonationBattlepass]);

  if (!icon) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay
      onPress={onPress}
      style={styles.coinsWrapper}
      accessibilityLabel={t("top_bar.total_bank.icon.accessibility_label", { coins: addCommasToNumber(coins) })}
    >
      <YuCoinCounter shouldHighlightCoins={shouldHighlightCoins} textStyle={textStyle} />
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
