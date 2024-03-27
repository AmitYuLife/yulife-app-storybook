import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ProgressBar } from "@molecules";
import { t } from "@locale";

interface IProps {
  yucoin: string | number;
  level: number;
  step: number;
  steps: number;
}

const EnterpriseRewardProgressBar = ({ yucoin, level, step, steps }: IProps) => (
  <View style={styles.wrapper}>
    <View style={styles.row}>
      <TextTemplate type="l1b" color={styles.textColor.color}>
        {t("labels.spend")} {yucoin}
      </TextTemplate>
      <View style={styles.yucoin}>
        <Image source={require("@assets/icons/yucoin.png")} {...styles.yucoinImage} />
      </View>
      <TextTemplate type="l1b" color={styles.textColor.color}>
        {t("labels.to_level")} {level}
      </TextTemplate>
      <View style={styles.steps}>
        <TextTemplate type="l1b" color={styles.textColor.color}>
          {step}/{steps}
        </TextTemplate>
      </View>
    </View>
    <ProgressBar currentPosition={step} maxLength={steps} height={19} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 8,
    paddingTop: 12,
    paddingHorizontal: Style.adjust(8),
    paddingBottom: Style.adjust(9),
  },
  row: {
    flexDirection: "row",
  },
  yucoin: {
    paddingHorizontal: Style.adjust(4),
  },
  yucoinImage: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
  steps: {
    position: "absolute",
    right: Style.adjust(8),
  },
  textColor: {
    color: "#956AFF",
  },
});

export default memo(EnterpriseRewardProgressBar);
