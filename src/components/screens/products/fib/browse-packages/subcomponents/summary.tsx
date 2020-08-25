import React, { memo } from "react";
import moment from "moment";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";
import { Package } from "../fib.browse.types";

interface Props {
  selectedPackage: Partial<Package>;
  loading: boolean;
}
const dateFormat = "DD/MM/YYYY";

export const Summary = memo(({ selectedPackage, loading }: Props) => {
  const { newEarnRate, earnRate, estimatedCost, term = 40 } = selectedPackage;
  const startDate = moment().format(dateFormat);
  const endDate = moment().add(term, "years").format(dateFormat);

  return (
    <View style={styles.summaryWrapper}>
      <View style={styles.blockWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Policy term</Text>
        </View>
        <Text style={styles.text}>{`${loading ? "..." : term} `}years</Text>
        <View style={styles.dates}>
          <Text style={styles.text}>Start date: {`${loading ? "..." : startDate}`}</Text>
          <Text style={styles.text}>End date: {`${loading ? "..." : endDate}`}</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.blockWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Additional yucoin Earn Rate</Text>
        </View>
        <Text style={styles.text}>{`${loading ? ".." : newEarnRate - earnRate}`}x</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.blockWrapper}>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Yulife App</Text>
        </View>
        <Text style={styles.text}>Continue to enjoy the app no matter where your career takes you</Text>
      </View>
      <View style={styles.separator} />
      <View>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Cost</Text>
        </View>
        <Text style={styles.text}>£{`${loading ? "..." : estimatedCost}`} per month</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  summaryWrapper: {
    backgroundColor: "white",
    padding: 32,
  } as ViewStyle,
  blockWrapper: {
    marginBottom: 23,
  } as ViewStyle,
  separator: {
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 1,
    marginBottom: 24,
  } as ViewStyle,
  headingWrapper: {
    marginBottom: 8,
  } as ViewStyle,
  heading: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colours.neutral.n900,
  } as TextStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
  dates: {
    marginTop: 8,
  } as ViewStyle,
});
