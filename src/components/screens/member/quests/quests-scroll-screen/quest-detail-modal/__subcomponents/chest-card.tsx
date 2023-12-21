import { TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";
import { t } from "@locale";
import { SHARED } from "./shared";
import { ChestYucoinSparkle } from "@atoms/icon/chest-yucoin-sparkle";
import { memo } from "react";

export const ChestCard = memo(() => (
  <View style={chestCardStyles.wrapper}>
    <View style={chestCardStyles.textWrapper}>
      <TextTemplate type="b2b">{t("screens.challenge_chest_modal.card")}</TextTemplate>
    </View>
    <View style={chestCardStyles.chestImageWrapper}>
      <ChestYucoinSparkle />
    </View>
  </View>
));

const chestCardStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    ...SHARED.BORDER,
  },
  textWrapper: {
    flex: 1,
    paddingLeft: SHARED.PADDING_LEFT,
  },
  chestImageWrapper: {
    marginLeft: "auto",
  },
});
