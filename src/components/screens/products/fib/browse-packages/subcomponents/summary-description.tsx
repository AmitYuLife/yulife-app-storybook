import React, { memo } from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";
import { Package } from "../fib.browse.types";
import { addCommasToNumber } from "@services/utils";

interface Props {
  selectedPackage?: Partial<Package>;
  customerAge: number;
  amountProtected: number;
  term: number;
  loading: boolean;
}

export const SummaryDescription = memo(({ selectedPackage, customerAge, amountProtected, loading }: Props) => {
  const { descriptionHeading, salaryPercentageCovered, term } = selectedPackage;
  const untilAge = customerAge + term;

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.headingText}>{descriptionHeading}</Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.text}>
          In the event of death, your loved ones will receive
          <Text bold={true}>{` ${loading ? "..." : salaryPercentageCovered}% `}</Text>of what you would have earned,
          until the age of<Text bold={true}>{` ${loading ? "..." : untilAge} `}</Text>in one lump sum.
        </Text>
      </View>
      <View>
        <Text
          style={StyleSheet.flatten([
            styles.text,
            { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD, color: Colours.neutral.n900, marginBottom: 8 },
          ])}
        >
          Amount protected
        </Text>
        <Text style={styles.text}>
          £{`${loading ? "..." : addCommasToNumber(amountProtected)} `}for every month remaining in policy at time of
          death.
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingBottom: 32,
    paddingTop: 6,
  } as ViewStyle,
  headingText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 1,
    color: Colours.neutral.n900,
  } as TextStyle,
  descriptionWrapper: {
    marginTop: 16,
    marginBottom: 24,
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
});
