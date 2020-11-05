import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";

interface Props {
  value: string;
}

export function CommunityGoalDescription({ value }: Props) {
  return <Text style={styles.wrapper}>{value}</Text>;
}

const styles = StyleSheet.create({
  wrapper: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(20),
  },
});
