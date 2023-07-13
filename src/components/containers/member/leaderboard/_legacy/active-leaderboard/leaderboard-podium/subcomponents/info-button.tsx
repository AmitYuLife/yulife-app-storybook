import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { InfoIcon } from "../assets/info-svg";
import { TouchableOpacityWithDelay } from "@components/molecules";

export interface InfoButtonProps {
  onPressInfo: () => void;
}

export function InfoButton({ onPressInfo }: InfoButtonProps) {
  return (
    <TouchableOpacityWithDelay style={styles.duelsWrapper} onPress={onPressInfo}>
      <InfoIcon />
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  duelsWrapper: {
    paddingVertical: 0,
    paddingHorizontal: Style.adjust(8),
  } as ViewStyle,
});
