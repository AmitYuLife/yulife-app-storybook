import { TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";
import { t } from "@locale";
import { ChestYucoinSparkle } from "@atoms/icon/chest-yucoin-sparkle";
import { memo } from "react";
import { Colours, Style } from "@styles";

export const ChestCard = memo(() => (
  <View style={chestCardStyles.wrapper}>
    <View style={chestCardStyles.textWrapper}>
      <TextTemplate type="b2b">{t("screens.challenge_chest_modal.card")}</TextTemplate>
    </View>
    <View style={chestCardStyles.chestImageWrapper}>
      <ChestYucoinSparkle style={chestCardStyles.chestImage} />
    </View>
  </View>
));

const chestCardStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colours.secondary.s50S3,
    borderRadius: 16,
    backgroundColor: Colours.secondary.s10S3,
  },
  textWrapper: {
    flex: 1,
    paddingStart: Style.adjust(16),
  },
  chestImageWrapper: {
    marginStart: "auto",
    paddingVertical: Style.adjust(12),
    paddingEnd: Style.adjust(16),
  },
  chestImage: {
    width: Style.adjust(80),
    height: Style.adjust(80),
  },
});
