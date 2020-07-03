import { Text } from "@atoms/index";
import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles";
import { CoverType } from "../../fib.helper";
import { toCapitalLetter } from "@services/utils";

interface IHowItWorksProps {
  coverType: CoverType;
  coverTypeColor: string;
  paragraphs: string[];
}

function FIBHowItWorks({ coverType, paragraphs, coverTypeColor }: IHowItWorksProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.coverWrapper}>
        <Text style={StyleSheet.flatten([styles.coverType, { color: coverTypeColor }])}>{`${toCapitalLetter(
          coverType
        )} Cover`}</Text>
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>How it works</Text>
      </View>
      {paragraphs.map((p, i) => (
        <Text key={i} style={styles.text}>
          {p}
        </Text>
      ))}
    </View>
  );
}

export default FIBHowItWorks;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 32,
  } as ViewStyle,
  coverWrapper: {
    marginVertical: 32,
  } as ViewStyle,
  coverType: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
  } as TextStyle,
  headerWrapper: {
    marginBottom: 16,
  } as ViewStyle,
  header: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 1,
    color: "#464647",
  } as TextStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#464647",
    marginBottom: 16,
  } as TextStyle,
});
