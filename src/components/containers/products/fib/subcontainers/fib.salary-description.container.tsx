import React, { memo } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GenericHeading, Text } from "@atoms";
import * as Animatable from "react-native-animatable";
import { Style } from "@styles";
import { FibLocalNavigation } from "../fib.types";

interface IFibSalaryDescriptionContainerProps {
  navigation: FibLocalNavigation;
}

const FibSalaryDescriptionContainer = memo(function (props: IFibSalaryDescriptionContainerProps) {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading heading="Salary" onLeftIconPress={navigation.pop} />
      <Animatable.View duration={1000} animation="fadeIn" style={styles.mainContent}>
        <Text style={styles.text}>
          Your gross annual earned income for tax purposes. It does not include unearned income such as investment
          income.
        </Text>
      </Animatable.View>
    </SafeAreaView>
  );
});

export default FibSalaryDescriptionContainer;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  },
  mainContent: {
    marginTop: 28,
    paddingHorizontal: Style.adjust(32),
  },
  text: {
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    lineHeight: Style.adjust(24),
  },
});
