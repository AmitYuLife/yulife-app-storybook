import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles";
import { Text } from "@atoms";
import HorizontalScroller from "@components/molecules/horizontal-scroller/horizontal-scroller";

interface Props {
  hide: boolean;
}

const copy = {
  title: "If you were to pass away at the age of:",
  suffix: "is the amount your loved ones would receive in a single payment",
};
const items = {
  age: Array.from({ length: 30 }).map((_, i) => i + 40),
  months: Array.from({ length: 30 }).map((_, i) => i),
};

export const Calculator = memo(({ hide }: Props) => {
  if (hide) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{copy.title}</Text>
      <HorizontalScroller highlightLabel="years" items={items.age} />
      <View style={styles.gap} />
      <HorizontalScroller highlightLabel="months" items={items.months} />
      <Text style={styles.payout} bold>
        £400,000
      </Text>
      <Text style={styles.suffix}>{copy.suffix}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingTop: Style.adjust(8),
    paddingBottom: Style.adjust(32),
  } as ViewStyle,
  title: {
    marginBottom: Style.adjust(24),
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    textAlign: "center",
  } as TextStyle,
  suffix: {
    marginTop: Style.adjust(16),
    letterSpacing: 1,
    fontSize: Style.adjust(16),
    textAlign: "center",
    maxWidth: Style.adjust(280),
    alignSelf: "center",
  } as TextStyle,
  gap: {
    height: Style.adjust(20),
  } as ViewStyle,
  payout: {
    color: "#464647",
    letterSpacing: 1,
    fontSize: Style.adjust(32),
    alignSelf: "center",
    marginTop: Style.adjust(24),
  } as TextStyle,
});
