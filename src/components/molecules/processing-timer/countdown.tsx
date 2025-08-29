import React, { memo, useEffect, useRef, useState } from "react";
import { View, ViewStyle } from "react-native";
import { Stars1, Stars2 } from "@atoms/icon/stars-icon";
import { CountdownUnit } from "./countdown-unit";
import { getCountdownFromSeconds } from "./getCountdownFromDate";
import { Colours, Style, StyleSheet } from "@styles";
import { t } from "@locale";
import { COUNTDOWN_COMPONENT } from "@ids";

interface Props {
  secondsUntilTarget: number;
}

export const Countdown = memo(({ secondsUntilTarget }: Props) => {
  const { days, hours, minutes } = useCountdownHandler(secondsUntilTarget);

  return (
    <View style={styles.countdownWrapper}>
      <View style={styles.shadow} />
      <View style={styles.countdownBox}>
        <View testID={COUNTDOWN_COMPONENT} style={styles.countdownUnitsWrapper}>
          <CountdownUnit heading={days} label={t("labels.time.days")} />
          <CountdownUnit heading={hours} label={t("labels.time.hours")} />
          <CountdownUnit heading={minutes} label={t("labels.time.mins")} borderRightWidth={0} />
        </View>
      </View>
      <View style={styles.topLeftStars}>
        <Stars2 />
      </View>
      <View style={styles.bottomRightStars}>
        <Stars1 />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  countdownWrapper: {
    height: Style.adjust(116),
    width: Style.DEVICE_WIDTH - 48,
    marginTop: Style.adjust(12),
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  countdownBox: {
    height: Style.adjust(89),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(8),
    marginTop: Style.adjust(16),
    width: Style.DEVICE_WIDTH - 80,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  countdownUnitsWrapper: {
    flexDirection: "row",
    maxWidth: Style.adjust(260),
  } as ViewStyle,
  topLeftStars: {
    position: "absolute",
    top: 0,
    left: 0,
  } as ViewStyle,
  bottomRightStars: {
    position: "absolute",
    bottom: 0,
    right: 0,
  } as ViewStyle,
  shadow: {
    position: "absolute",
    left: 16,
    right: 16,
    height: Style.adjust(20),
    bottom: 0,
    borderRadius: 16,
    backgroundColor: Colours.neutral.n100,
  } as ViewStyle,
});

const REFRESH_RATE_MILLISECONDS = 1000;
const useCountdownHandler = (secondsUntilTarget: number) => {
  const secondsDiffRef = useRef(secondsUntilTarget);
  const [countdown, setCountdown] = useState(getCountdownFromSeconds(secondsDiffRef.current));
  const recountTimer = useRef(null);
  /**
   * Refresh every second even if minute is the lowest unit displayed
   * because it serves as the maximum real-time delay
   */

  useEffect(() => {
    recountTimer.current = setInterval(() => {
      secondsDiffRef.current -= REFRESH_RATE_MILLISECONDS / 1000;
      setCountdown(getCountdownFromSeconds(secondsDiffRef.current));
    }, REFRESH_RATE_MILLISECONDS);

    const { raw } = countdown;

    if (raw.days < 0 || raw.hours < 0 || raw.minutes < 0 || raw.seconds <= 0) {
      /**
       * Save in case we want to do something in the future
       * when the countdown ends
       * countdownEndCallback();
       */

      clearInterval(recountTimer.current);
    }

    return () => clearInterval(recountTimer.current);
  }, [secondsUntilTarget]);

  return countdown.formatted;
};
