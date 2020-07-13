import React, { memo } from "react";
import { Navigation } from "react-native-navigation";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { GenericHeading, Text } from "@atoms";
import { Style } from "@styles";

interface IFibSalaryDescriptionContainerProps {
  componentId: string;
}

function navigateBack(componentId: string) {
  Navigation.pop(componentId);
}

const FibSalaryDescriptionContainer = memo(function (props: IFibSalaryDescriptionContainerProps) {
  const { componentId } = props;

  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading heading="Salary" onLeftIconPress={() => navigateBack(componentId)} />
      <View style={styles.mainContent}>
        <Text style={styles.text}>
          Your gross annual earned income for tax purposes. It does not include unearned income such as investment
          income.
        </Text>
      </View>
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
