import React, { memo } from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { Style } from "@styles";
import moment from "moment";
import { minifiedFromNow } from "@utils";
import { TEXT_TEMPLATE, SURGE_ICON } from "@ids";
import { GameButton } from "./_base.button";
import { useRemainingTime } from "./helpers/useRemainingTime";

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
      label={time}
      labelTestID={TEXT_TEMPLATE(minifiedFromNow(moment(endDateTime)))}
      Icon={<LottieView style={styles.lottie} source={LottieIcon} autoPlay={true} loop={true} />}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: Style.adjust(64),
    height: Style.adjust(72),
  },
});

export const Surge = memo(_Surge);
