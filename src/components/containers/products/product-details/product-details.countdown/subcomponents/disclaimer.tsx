import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";

export const Disclaimer = memo(() => (
  <View style={styles.disclaimerWrapper}>
    <TextTemplate textAlign="center" type="l3">
      *Subject to confirmation from Bupa and successful first payment, we will notify you of any changes to your
      application status.
    </TextTemplate>
  </View>
));

const styles = StyleSheet.create({
  disclaimerWrapper: {
    marginTop: Style.adjust(20),
    paddingHorizontal: Style.adjust(40),
  } as ViewStyle,
});
