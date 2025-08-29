import React, { memo } from "react";
import { Style, StyleSheet } from "@styles";
import { minifiedFromNow } from "@utils";
import { TEXT_TEMPLATE, SURGE_ICON } from "@ids";
import { GameButton } from "./_base.button";
import { useRemainingTime } from "./helpers/useRemainingTime";
import { t } from "@locale";
import { LottieView } from "@molecules";
import moment from "moment";

const LottieIcon = require("./assets/surge-lottie.json");

type Props = {
  endDateTime: string;
  multiplier: string;
  onPress: () => void;
};

const _Surge = ({ endDateTime, multiplier, onPress }: Props) => {
  const time = useRemainingTime(endDateTime);

  if (!time) {
    return null;
  }

  return (
    <GameButton
      onPress={onPress}
      testID={SURGE_ICON}
      badge={multiplier}
      badgeTestID={TEXT_TEMPLATE(multiplier)}
      label={time.shortFormat}
      labelTestID={TEXT_TEMPLATE(minifiedFromNow(moment(endDateTime)).shortFormat)}
      Icon={<LottieView style={styles.lottie} source={LottieIcon} autoPlay={true} loop={true} />}
      accessibilityLabel={t("screens.daily.surge.accessibility_label", {
        multiplier: multiplier.replace("x", ""),
        time: time.longFormat,
      })}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: Style.adjust(66),
    height: Style.adjust(72),
  },
});

export const Surge = memo(_Surge);
