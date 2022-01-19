import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { InfoPanel } from "@components/molecules";

export const NotCoveredWarning = memo(() => (
  <View style={styles.wrapper}>
    <InfoPanel
      markdown={`You are not covered, and cannot claim for any treatments carried out before your cover starts`}
    />
  </View>
));

const styles = StyleSheet.create({
  wrapper: { marginTop: Style.adjust(20) } as ViewStyle,
});
