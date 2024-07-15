import React, { memo } from "react";
import { FC } from "react";
import { Image, View, ViewStyle, StyleSheet, ImageStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { CHECK_REWARDS_BUTTON } from "@ids";
import { NAV_BAR, Style, TOP_BAR } from "@styles";
import { t } from "@locale";

interface IProps {
  onCtaPress: () => void;
}

const PurchasesEmpty: FC<IProps> = ({ onCtaPress }) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={require("@assets/purchases-empty/rewards-empty.png")} />
    <View style={styles.contentWrapper}>
      <TextTemplate type="b2">{t("screens.rewards.purchases.empty.heading")}</TextTemplate>
      <TextTemplate type="b2">{t("screens.rewards.purchases.empty.subheading")}</TextTemplate>
    </View>
    <View style={styles.ctaWrapper}>
      <Button
        translationKey="screens.rewards.purchases.empty.cta_label"
        onPress={onCtaPress}
        testID={CHECK_REWARDS_BUTTON}
      />
    </View>
  </View>
);

export default memo(PurchasesEmpty);

const HEIGHT = Style.adjust(150);

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Style.adjust(18),
  } as ViewStyle,
  image: {
    marginBottom: Style.adjust(21),
  } as ImageStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    height: Style.DEVICE_HEIGHT - TOP_BAR.HEIGHT - NAV_BAR.DEFAULT_FULL_HEIGHT - HEIGHT,
  } as ViewStyle,
  ctaWrapper: {
    alignSelf: "center",
    width: 250,
  } as ViewStyle,
});
