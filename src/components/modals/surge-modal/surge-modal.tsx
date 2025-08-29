import React, { memo, useState, useCallback, useEffect, useMemo } from "react";
import { View } from "react-native";
import { Navigation } from "@navigation/main";
import moment from "moment";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { getTimeRemaining } from "@utils";
import useInterval from "@use-it/interval";
import { DETOX_ENABLED } from "@services/socket";
import { MODALS } from "@navigation/constants";
import { t } from "@locale";
import { TEXT_TEMPLATE } from "@ids";

const REFRESH_RATE_ONE_MINUTE = 1000 * 60;
const REFRESH_RATE_ONE_SECOND = 1000;

interface IProps {
  title: string;
  description: string;
  multiplier: string;
  endDateTime: string;
}

const SurgeModal = ({ title, description, multiplier, endDateTime }: IProps) => {
  const [time, setTime] = useState<string>("0s");
  const [timeAccessibility, setTimeAccessibility] = useState<string>(`0 ${t("time_units.seconds")}`);
  const [refreshRate, setRefreshRate] = useState(REFRESH_RATE_ONE_MINUTE);

  const handleTimeDisplay = useCallback(() => {
    if (moment().isSameOrAfter(endDateTime)) {
      Navigation.dismissOverlay(MODALS.blurredOverlay);
      return;
    }

    const secondsRemaining = moment(endDateTime).diff(moment(), "seconds");

    setRefreshRate(secondsRemaining <= 120 ? REFRESH_RATE_ONE_SECOND : REFRESH_RATE_ONE_MINUTE);
    const { time: remainingTime, accessibility } = getTimeRemaining(endDateTime, "short");
    setTime(remainingTime);
    setTimeAccessibility(accessibility);
  }, [endDateTime]);

  useEffect(handleTimeDisplay, [endDateTime, handleTimeDisplay]);
  useInterval(handleTimeDisplay, !DETOX_ENABLED && time ? refreshRate : null);

  const descriptionAccessibilityLabel = useMemo(
    () => description.replace("$multiplier$", multiplier).replace("$endDateTime$", timeAccessibility),
    [description, multiplier, timeAccessibility]
  );

  const parser = description.split("$");

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.title} accessibilityLabel={title}>
        <TextTemplate type={"h2"} testID={TEXT_TEMPLATE(title)}>
          {title}
        </TextTemplate>
      </View>
      <TextTemplate
        type="b2"
        textAlign="center"
        accessibilityLabel={descriptionAccessibilityLabel}
        testID={TEXT_TEMPLATE(`${parser[0]}${multiplier}${parser[2]}`)}
      >
        {parser.map((text, index) => {
          if (text === "multiplier" || text === "endDateTime") {
            return (
              <TextTemplate key={index} type="b2b" color={Colours.products.fib.epic}>
                {text === "multiplier" ? multiplier : time}
              </TextTemplate>
            );
          }

          return text;
        })}
      </TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(38),
  },
  title: {
    marginBottom: Style.adjust(25),
  },
});

export default memo(SurgeModal);
