import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { LEADERBOARD_INFO_BUTTON } from "@ids";
import { Style } from "@styles";
import { InfoIcon } from "../assets/info-svg";
import { TouchableOpacityWithDelay } from "@components/molecules";

export interface InfoButtonProps {
  onPressInfo: () => void;
}

export function InfoButton({ onPressInfo }: InfoButtonProps) {
  return (
    <TouchableOpacityWithDelay style={styles.wrapper} onPress={onPressInfo} testID={LEADERBOARD_INFO_BUTTON}>
      <InfoIcon />
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    right: 0,
    position: "absolute",
    paddingRight: Style.adjust(8),
    paddingTop: Style.adjust(16),
    paddingLeft: Style.adjust(16),
    paddingBottom: Style.adjust(16),
  } as ViewStyle,
});
