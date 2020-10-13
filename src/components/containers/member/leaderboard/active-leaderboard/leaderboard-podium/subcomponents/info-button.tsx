import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { InfoIcon } from "../assets/info-svg";
import { TouchableOpacityWithDelay } from "@components/molecules";

export interface InfoButtonProps {
  onPressInfo: () => void;
  showDuels: boolean;
}

export function InfoButton({ onPressInfo, showDuels }: InfoButtonProps) {
  return (
    <TouchableOpacityWithDelay style={showDuels ? styles.duelsWrapper : styles.wrapper} onPress={onPressInfo}>
      <InfoIcon />
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  duelsWrapper: {
    paddingVertical: 0,
    paddingHorizontal: Style.adjust(8),
  } as ViewStyle,
  wrapper: {
    right: 0,
    top: -20,
    position: "absolute",
    paddingRight: Style.adjust(10),
    paddingTop: Style.adjust(16),
    paddingVertical: Style.adjust(2),
    paddingBottom: Style.adjust(16),
    marginLeft: 10,
  } as ViewStyle,
});
