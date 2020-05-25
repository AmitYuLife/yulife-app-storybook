import React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Text } from "@atoms/index";

export function Steps({ children }: { children: React.ReactChild }) {
  return <Text style={styles.steps}>{children}</Text>;
}

export function YuCoinsEarned({ children }: { children: React.ReactChild }) {
  return <Text style={styles.yucoinsEarned}>{children}</Text>;
}

interface ChallengeWrapperProps {
  children: React.ReactChild | React.ReactChild[];
  style?: ViewStyle;
}

export function ChallengesWrapper({ children, style }: ChallengeWrapperProps) {
  return <View style={[styles.challengesWrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  steps: {
    fontSize: 16,
  } as TextStyle,
  challengesWrapper: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingBottom: 30,
    paddingTop: 20,
  } as ViewStyle,
  yucoinsEarned: {
    fontSize: 16,
    marginLeft: "auto",
  } as TextStyle,
});
