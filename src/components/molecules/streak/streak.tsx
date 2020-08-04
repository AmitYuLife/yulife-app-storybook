import * as React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { Pad, Text } from "../../atoms";
import { Calendar } from "./assets";
import styles, { getColour } from "./streak.styles";

export type StreakTypes = "forest" | "ocean" | "desert" | "mountain";

export interface IProps {
  currentStreak: number;
  isFinished: boolean;
  isOnline: boolean;
  isDim?: boolean;
  maxStreak: number;
  onPress: () => void;
  type: StreakTypes;
}

function Streak(props: IProps) {
  const { isFinished, isOnline, currentStreak, maxStreak, type, isDim, onPress } = props;
  const { isPressedIn, handlePress, handlePressIn, handlePressOut } = usePressedInWithDelay({ onPress });
  const backgroundColor = getColour(type, isFinished, isPressedIn, isOnline);

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={handlePress}>
      <View style={StyleSheet.flatten([styles.wrapper, { backgroundColor }])}>
        <Pad width={20} />
        <Text style={styles.text}>{`${currentStreak || 0}/${maxStreak || 1}`}</Text>
        <Calendar backgroundColor={backgroundColor} progress={(currentStreak / maxStreak) * 100} scale={0.5} />
        <Pad width={isIphoneX() ? 30 : 15} />
        {isDim ? <View style={styles.dim} /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Streak;
