import React, { memo } from "react";
import { View, StyleSheet, ScrollView, ViewStyle } from "react-native";
import { GenericHeading, Heading } from "@atoms";
import { Style, Colours } from "@styles";

interface IEditSalaryScreen {
  onNavigateBack: () => void;
}

export const FibEditSalaryScreen = memo(function (props: IEditSalaryScreen) {
  const { onNavigateBack } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.headingWrapper}>
        <GenericHeading heading="Salary" onLeftIconPress={onNavigateBack} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Heading label="Edit Salary" style={styles.heading} />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  headingWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1,
  },
  heading: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colours.products.fib.n900,
    textAlign: "left",
    marginHorizontal: 32,
    marginBottom: 16,
  } as ViewStyle,
  scrollView: {
    marginTop: 56,
  },
});
