import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import moment from "moment";
import { MEDITOPIA_TIMER_MINUTES, MEDITOPIA_TIMER_SECS } from "@ids";
import { TemplateTextType, StyleSheet } from "@styles";

interface IProps {
  time: number;
  colour: string;
  textType: TemplateTextType;
  opacity?: number;
}

const AvPlayerTimer = ({ time, colour, textType, opacity }: IProps) => {
  const timeFormatted = useMemo(
    () => ({
      minutes: moment.utc(time).format("mm"),
      seconds: moment.utc(time).format("ss"),
    }),
    [time]
  );

  const wrapperStyle = useMemo(
    () => ({
      ...styles.wrapper,
      opacity,
    }),
    [opacity]
  );

  return (
    <View style={wrapperStyle}>
      {/* TODO - make this actually centered! */}
      <View style={styles.minutes} testID={MEDITOPIA_TIMER_MINUTES(timeFormatted.minutes)}>
        <TextTemplate type={textType} color={colour}>
          {timeFormatted.minutes}
        </TextTemplate>
      </View>
      <View style={styles.seconds} testID={MEDITOPIA_TIMER_SECS(timeFormatted.seconds)}>
        <TextTemplate type={textType} color={colour}>
          :{timeFormatted.seconds}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  minutes: {
    width: "47%",
    alignItems: "flex-end",
  },
  seconds: {
    width: "50%",
  },
});

export default memo(AvPlayerTimer);
