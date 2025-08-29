import { Colours, StyleSheet } from "@styles";
import React, { memo } from "react";
import { View } from "react-native";

interface IProps {
  currentProgress: number;
  duration: number;
}

const AvPlayerProgressBar = ({ currentProgress, duration }: IProps) => {
  const currentInMilliSeconds = currentProgress * 1000;
  const durationInMilliSeconds = duration * 1000 || 100; //condition only for android

  return (
    <View
      style={[
        styles.wrapper,
        {
          width: `${Math.round((currentInMilliSeconds / durationInMilliSeconds) * 100)}%` || 0,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 6,
    backgroundColor: Colours.primary.p400,
    borderRadius: 3,
  },
});

export default memo(AvPlayerProgressBar);
