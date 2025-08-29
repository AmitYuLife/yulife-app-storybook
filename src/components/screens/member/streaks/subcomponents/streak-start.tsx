import { View, ViewStyle } from "react-native";
import { StreakTicks } from "@atoms/icon/streak-ticks";
import { Style, StyleSheet } from "@styles";
import React from "react";
import { TextTemplate } from "@atoms";

interface IProps {
  streakMax: number;
  streakCompleted: number;
  heading: string;
}

const StreakStart = ({ streakMax, streakCompleted, heading }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.heading}>
        <TextTemplate type="b2" textAlign="center">
          {heading}
        </TextTemplate>
      </View>
      <View style={styles.streakWrapper}>
        {Array.from({ length: streakMax }).map((_, index) => (
          <View key={index} style={styles.streakTicks}>
            <StreakTicks checked={index < streakCompleted} label={(index + 1).toString()} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default StreakStart;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  heading: {
    marginBottom: Style.adjust(24),
  },
  streakWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  streakTicks: {
    marginHorizontal: Style.adjust(7),
  },
});
