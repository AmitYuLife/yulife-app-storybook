import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { ITextTemplateType } from "@atoms/text/text-template";
import moment from "moment";
import { MEDITOPIA_TIMER_MINUTES, MEDITOPIA_TIMER_SECS } from "@ids";

interface IProps {
  time: number;
  colour: string;
  textType: ITextTemplateType;
}

const AvPlayerTimer = ({ time, colour, textType }: IProps) => {
  const timeFormatted = useMemo(
    () => ({
      minutes: moment.utc(time).format("mm"),
      seconds: moment.utc(time).format("ss"),
    }),
    [time]
  );

  return (
    <View style={styles.wrapper}>
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
