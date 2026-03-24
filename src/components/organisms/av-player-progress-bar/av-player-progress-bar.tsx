import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { StyleSheet } from "@styles";
import React, { memo } from "react";
import { View } from "react-native";

interface IProps {
  currentProgress: number;
  duration: number;
}

const AvPlayerProgressBar = ({ currentProgress, duration }: IProps) => {
  const currentInMilliSeconds = currentProgress * 1000;
  const durationInMilliSeconds = duration * 1000 || 100; //condition only for android
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.wrapper,
        {
          width: `${Math.round((currentInMilliSeconds / durationInMilliSeconds) * 100)}%` || 0,
          backgroundColor: theme.colors.primary.p400,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 6,
    borderRadius: 3,
  },
});

export default memo(AvPlayerProgressBar);
