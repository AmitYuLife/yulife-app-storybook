import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, ActivityIndicator, Platform } from "react-native";
import { Style } from "@styles";
import { Text } from "@atoms";
import HorizontalScroller from "@components/molecules/horizontal-scroller/horizontal-scroller";
import { addCommasToNumber } from "@utils";
import { YEAR_SCROLLER, MONTH_SCROLLER } from "@ids";

export interface CalculatorItems {
  years: number[];
  months: number[];
  max: {
    year: number;
    month: number;
  };
  min: {
    year: number;
    month: number;
  };
}

interface Props {
  hide: boolean;
  items: CalculatorItems;
  loading: boolean;
  payoutAmount: number;
  setDeceaseAgeIndexYear: (index: number) => void;
  setDeceaseAgeIndexMonth: (index: number) => void;
}

const copy = {
  title: "If you were to pass away at the age of:",
  suffix: "is the amount your loved ones would receive in a single payment",
};

export const Calculator = memo(
  ({ loading, payoutAmount, hide, items, setDeceaseAgeIndexYear, setDeceaseAgeIndexMonth }: Props) => {
    if (hide) {
      return null;
    }

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{copy.title}</Text>
        <HorizontalScroller
          highlightLabelWrapperStyle={horizontalScrollerStyles.highlightLabelWrapper}
          highlightStyle={horizontalScrollerStyles.highlight}
          highlightLabel="years"
          items={items.years}
          newActiveIndexCallback={setDeceaseAgeIndexYear}
          testID={YEAR_SCROLLER}
        />
        <View style={styles.gap} />
        <HorizontalScroller
          highlightLabelWrapperStyle={horizontalScrollerStyles.highlightLabelWrapper}
          highlightStyle={horizontalScrollerStyles.highlight}
          highlightLabel="months"
          items={items.months}
          newActiveIndexCallback={setDeceaseAgeIndexMonth}
          resetsOnUpdate={true}
          testID={MONTH_SCROLLER}
        />
        <View style={styles.payoutAmountWrapper}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.payout} bold={true}>
              £{addCommasToNumber(payoutAmount)}
            </Text>
          )}
        </View>
        <Text style={styles.suffix}>{copy.suffix}</Text>
      </View>
    );
  }
);

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
  } as TextStyle,
  payoutAmountWrapper: {
    height: Style.adjust(32),
    marginTop: Platform.select({ ios: Style.adjust(24), android: Style.adjust(12) }),
  } as ViewStyle,
});

const horizontalScrollerStyles = StyleSheet.create({
  highlightLabelWrapper: {
    top: 24,
  } as ViewStyle,
  highlight: {
    top: Platform.select({ ios: Style.adjust(4), android: Style.adjust(10) }),
  } as ViewStyle,
});
