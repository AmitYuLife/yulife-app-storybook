import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import moment from "moment";
import { AV_PLAYER_TIMER } from "@ids";
import { TemplateTextType, StyleSheet } from "@styles";

interface IProps {
  time: number;
  colour: string;
  textType: TemplateTextType;
  opacity?: number;
}

const AvPlayerTimer = ({ time, colour, textType, opacity }: IProps) => {
  const timeFormatted = useMemo(() => moment.utc(time).format("mm:ss"), [time]);

  const wrapperStyle = useMemo(
    () => ({
      ...styles.wrapper,
      opacity,
    }),
    [opacity]
  );

  return (
    <View style={wrapperStyle}>
      <TextTemplate
        testID={AV_PLAYER_TIMER(timeFormatted)}
        type={textType}
        color={colour}
        textAlign="center"
        fontVariant={["tabular-nums"]}
      >
        {timeFormatted}
      </TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(AvPlayerTimer);
