import React, { memo, useState, useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import moment from "moment";
import { minifiedFromNow } from "@utils";
import { TouchableOpacityWithDelay } from "@molecules";
import { TEXT_TEMPLATE, SURGE_ICON } from "@ids";
import useInterval from "@use-it/interval";
import { DETOX_ENABLED } from "@services/socket";

const LottieIcon = require("./surge-lottie.json");
const REFRESH_RATE_ONE_MINUTE = 1000 * 60;
const REFRESH_RATE_ONE_SECOND = 1000;

interface IProps {
  expireDate: string;
  multiplier: string;
  onPress: () => void;
}

const Surge = ({ expireDate, multiplier, onPress }: IProps) => {
  const [time, setTime] = useState<string>(null);
  const [refreshRate, setRefreshRate] = useState(REFRESH_RATE_ONE_MINUTE);

  const handleTimeDisplay = useCallback(() => {
    if (moment().isSameOrAfter(expireDate)) {
      setTime(null);
      return;
    }

    const secondsRemaining = moment(expireDate).diff(moment(), "seconds");

    setRefreshRate(secondsRemaining <= 120 ? REFRESH_RATE_ONE_SECOND : REFRESH_RATE_ONE_MINUTE);
    setTime(secondsRemaining < 60 ? `${secondsRemaining}s` : minifiedFromNow(moment(expireDate)));
  }, [expireDate]);

  useEffect(handleTimeDisplay, [expireDate, handleTimeDisplay]);
  useInterval(handleTimeDisplay, !DETOX_ENABLED && time ? refreshRate : null);

  if (!time) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay style={styles.wrapper} onPress={onPress} testID={SURGE_ICON}>
      <LottieView style={styles.lottie} source={LottieIcon} autoPlay={true} loop={true} />
      <View style={styles.timesWrapper}>
        <View style={styles.timesNumber}>
          <TextTemplate type="l2b" color={Colours.neutral.white} testID={TEXT_TEMPLATE(multiplier)}>
            {multiplier}
          </TextTemplate>
        </View>
      </View>
      <View style={styles.time}>
        <TextTemplate
          type="l1b"
          color={Colours.neutral.white}
          testID={TEXT_TEMPLATE(minifiedFromNow(moment(expireDate)))}
        >
          {time}
        </TextTemplate>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(20),
  },
  lottie: {
    width: Style.adjust(64),
    height: Style.adjust(72),
  },
  time: {
    position: "absolute",
    left: 0,
    right: 2,
    bottom: 0,
    alignItems: "center",
  },
  timesWrapper: {
    position: "absolute",
    right: 3,
    top: 1,
    backgroundColor: Colours.forest.fp101,
    width: Style.adjust(21),
    height: Style.adjust(21),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  timesNumber: {
    marginTop: 1,
  },
});

export default memo(Surge);
