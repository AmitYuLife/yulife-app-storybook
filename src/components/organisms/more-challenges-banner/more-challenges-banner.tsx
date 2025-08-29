import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import React, { memo } from "react";
import { View } from "react-native";
import MoreChallengesImage from "./more-challenges-image";
import { useTranslation } from "@hooks";

const MoreChallengesBanner = () => {
  const t = useTranslation([
    "screens.challenges.history.unlock_banner_title",
    "screens.challenges.history.unlock_banner_description_start",
    "screens.challenges.history.unlock_banner_description_bold",
    "screens.challenges.history.unlock_banner_description_end",
  ]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <MoreChallengesImage />
      </View>

      <View style={styles.textWrapper}>
        <View style={styles.titleWrapper}>
          <TextTemplate type="b2b" color={Colours.neutral.n900}>
            {t["screens.challenges.history.unlock_banner_title"]}
          </TextTemplate>
        </View>
        <TextTemplate type="b2" color={Colours.neutral.n900}>
          {t["screens.challenges.history.unlock_banner_description_start"]}
          <TextTemplate type="b2b" color={Colours.neutral.n900}>
            {t["screens.challenges.history.unlock_banner_description_bold"]}
          </TextTemplate>
          {t["screens.challenges.history.unlock_banner_description_end"]}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.products.fib.u100S4,
    flexDirection: "row",
    minHeight: Style.adjust(180),
    padding: Style.adjust(16),
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: Style.adjust(14),
  },
  titleWrapper: {
    marginBottom: Style.adjust(8),
  },
  textWrapper: {
    width: "60%",
  },
  imageWrapper: {
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});

export default memo(MoreChallengesBanner);
