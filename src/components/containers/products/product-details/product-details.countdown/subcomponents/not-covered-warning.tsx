import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { InfoPanel } from "@components/molecules";

interface Props {
  startDate: string;
}

export const NotCoveredWarning = memo(({ startDate }: Props) => (
  <View style={styles.wrapper}>
    <InfoPanel
      markdown={`You are not covered yet, and cannot claim for any treatments carried out before your cover starts on ${startDate}`}
    />
  </View>
));

const styles = StyleSheet.create({
  wrapper: { marginTop: Style.adjust(20) } as ViewStyle,
});
