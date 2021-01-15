import React, { memo } from "react";
import moment from "moment";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";
import { Package } from "../fib.browse.types";
import { addCommasToNumber } from "@services/utils";
import { formatMoney } from "@services/money";

interface Props {
  selectedPackage: Partial<Package>;
  loading: boolean;
}
const dateFormat = "DD/MM/YYYY";

export const Summary = memo(({ selectedPackage, loading }: Props) => {
  const { actualCost, term = 40, monthlyAmountProtected } = selectedPackage;
  const startDate = moment().format(dateFormat);
  const endDate = moment().add(term, "years").format(dateFormat);

  return (
    <View style={styles.summaryWrapper}>
      <View style={styles.blockWrapper}>
        <Text style={styles.heading}>Policy term</Text>
        <View style={styles.dates}>
          <Text style={styles.text}>{`${loading ? "..." : term} `}years</Text>
          <Text style={styles.text}>Start date: {`${loading ? "..." : startDate}`}</Text>
          <Text style={styles.text}>End date: {`${loading ? "..." : endDate}`}</Text>
        </View>
        <View style={styles.separator} />
      </View>
      <View style={styles.blockWrapper}>
        <Text style={styles.heading}>Amount protected</Text>
        <Text style={styles.text}>
          £{addCommasToNumber(monthlyAmountProtected)} for every month remaining in policy at time of death.
        </Text>
        <View style={styles.separator} />
      </View>
      <View>
        <Text style={styles.heading}>Cost</Text>
        <Text style={styles.text}>£{`${loading ? "..." : formatMoney(actualCost)}`} per month</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  summaryWrapper: {
    backgroundColor: Colours.neutral.white,
    padding: 24,
    borderRadius: 10,
    borderColor: Colours.neutral.n100,
    borderWidth: 1,
  } as ViewStyle,
  blockWrapper: {
    marginBottom: 23,
  } as ViewStyle,
  separator: {
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 1,
    marginTop: 16,
  } as ViewStyle,
  heading: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.6,
    color: Colours.neutral.n700,
    marginBottom: 13,
  } as TextStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colours.neutral.n700,
  } as TextStyle,
  dates: {
    marginTop: 8,
  } as ViewStyle,
});
