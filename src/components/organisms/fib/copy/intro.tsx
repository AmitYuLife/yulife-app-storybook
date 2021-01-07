import React from "react";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { useSelector } from "react-redux";
import { getFullName } from "@redux/product/product.selectors";
import { Style, Colours } from "@styles";

const COPY = `In order to get you covered, I’ll need to know a bit about you. Your answers will not be seen by your employer.\n\nI’ll send you 100 YuCoin for the approximately 6 minutes it takes to complete my questions! Ready?`;

export const CopyIntro = () => {
  const fullName = useSelector(getFullName);

  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={styles.heading}>
        {`Let's get personal, ${fullName}.`}
      </Text>
      <View style={styles.paragraphWrapper}>
        <Text style={styles.paragraph}>{COPY}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: Style.DEVICE_WIDTH - Style.adjust(108),
    marginTop: Style.adjust(16),
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
  paragraphWrapper: {
    marginTop: Style.adjust(24),
  } as TextStyle,
  paragraph: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: Colours.neutral.n700,
  } as TextStyle,
});
