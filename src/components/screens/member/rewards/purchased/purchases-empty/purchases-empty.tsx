import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { CHECK_REWARDS_BUTTON } from "@ids";
import { NAV_BAR, Style, TOP_BAR, StyleSheet } from "@styles";
import { t } from "@locale";
import { PurchasesSaleIcon } from "@atoms/icon/purchases-sale-icon";

interface IProps {
  onCtaPress: () => void;
  isBattlePassActive: boolean;
}

const PurchasesEmpty = ({ onCtaPress, isBattlePassActive }: IProps) => {
  const copy = useMemo(() => {
    return isBattlePassActive
      ? {
          subheading: t("screens.rewards.purchases.no_purchases.subheading"),
          ctaTranslationKey: "screens.rewards.purchases.no_purchases.cta_label",
        }
      : {
          subheading: t("screens.rewards.purchases.empty.subheading"),
          ctaTranslationKey: "screens.rewards.purchases.empty.cta_label",
        };
  }, [isBattlePassActive]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.image}>
        <PurchasesSaleIcon />
      </View>
      <View style={styles.contentWrapper}>
        {isBattlePassActive ? null : (
          <TextTemplate type="b2">{t("screens.rewards.purchases.empty.heading")}</TextTemplate>
        )}
        <TextTemplate textAlign="center" type="b2">
          {copy.subheading}
        </TextTemplate>
      </View>
      <View style={styles.ctaWrapper}>
        <Button translationKey={copy.ctaTranslationKey} onPress={onCtaPress} testID={CHECK_REWARDS_BUTTON} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Style.adjust(18),
    marginHorizontal: Style.adjust(40),
  } as ViewStyle,
  image: {
    marginBottom: Style.adjust(21),
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    height: Style.DEVICE_HEIGHT - TOP_BAR.HEIGHT - NAV_BAR.DEFAULT_FULL_HEIGHT,
  } as ViewStyle,
  ctaWrapper: {
    position: "absolute",
    bottom: Style.adjust(14),
    width: 250,
  } as ViewStyle,
});

export default memo(PurchasesEmpty);
