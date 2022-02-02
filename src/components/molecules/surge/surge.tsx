import React, { memo, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";
import { TextTemplate } from "@atoms";
import { Style, TOP_BAR, Colours } from "@styles";
import moment from "moment";
import { minifiedFromNow } from "@utils";
import { TouchableOpacityWithDelay } from "@molecules";
import useInterval from "@use-it/interval";
import { DETOX_ENABLED } from "@services/socket";

const LottieIcon = require("./surge-lottie.json");
const REFRESH_RATE_MILLISECONDS = 1000 * 60; // 1min

interface IProps {
  expireDate: string;
  multiplier: string;
  onPress: () => void;
}

const Surge = ({ expireDate, multiplier, onPress }: IProps) => {
  const [time, setTime] = useState(minifiedFromNow(moment(expireDate)));

  useInterval(
    () => {
      if (moment().isAfter(expireDate)) {
        setTime(null);
        return;
      }

      setTime(minifiedFromNow(moment(expireDate)));
    },
    !DETOX_ENABLED && time ? REFRESH_RATE_MILLISECONDS : null
  );

  if (!time) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay style={styles.wrapper} onPress={onPress}>
      <LottieView style={styles.lottie} source={LottieIcon} autoPlay={true} loop={true} />
      <View style={styles.timesWrapper}>
        <View style={styles.timesNumber}>
          <TextTemplate type="l2b" color={Colours.neutral.white}>
            {multiplier}
          </TextTemplate>
        </View>
      </View>
      <View style={styles.time}>
        <TextTemplate type="l1b" color={Colours.neutral.white}>
          {time}
        </TextTemplate>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    left: Style.adjust(16),
  } as ViewStyle,
  lottie: {
    width: Style.adjust(64),
    height: Style.adjust(72),
  },
  time: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 1,
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
