import React, { memo } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { GenericHeading, Button } from "@atoms";
import { Style, Colours } from "@styles";
import FIBHowItWorks from "./how-it-works/how-it-works";

interface IFibBrowseScreenProps {
  onNavigateBack: () => void;
}

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const { onNavigateBack } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.headingWrapper}>
        <GenericHeading heading="browse packages" onLeftIconPress={onNavigateBack} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <FIBHowItWorks
          coverTypeColor={Colours.products.fib.common}
          coverType={"common"}
          paragraphs={"In the event of death, your loved ones will receive 25% of your future earnings from the date of death until age 70 (based on your current salary)./nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end./nThis is paid as a single payment.".split(
            "/n"
          )}
        />
        <Button type="Primary" label="Continue" onPress={onNavigateBack} />
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafe",
  },
  headingWrapper: {
    position: "absolute",
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    left: 0,
    right: 0,
    backgroundColor: "white",
  },
  scrollView: {
    paddingTop: Platform.select({ ios: 46, android: 56 }),
    paddingBottom: 24,
    alignItems: "center",
  },
});
