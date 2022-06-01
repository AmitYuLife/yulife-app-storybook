import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { ITextTemplateType } from "@atoms/text/text-template";
import moment from "moment";

interface IProps {
  time: number;
  colour: string;
  textType: ITextTemplateType;
}

const VideoPlayerTimer = ({ time, colour, textType }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.minutes}>
        <TextTemplate type={textType} color={colour}>
          {moment.utc(time).format("mm")}
        </TextTemplate>
      </View>
      <View style={styles.seconds}>
        <TextTemplate type={textType} color={colour}>
          :{moment.utc(time).format("ss")}
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
    width: "50%",
    alignItems: "flex-end",
  },
  seconds: {
    width: "50%",
  },
});

export default memo(VideoPlayerTimer);
