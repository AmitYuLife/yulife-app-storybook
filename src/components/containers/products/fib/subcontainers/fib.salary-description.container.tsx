import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@atoms";
import * as Animatable from "react-native-animatable";
import { Style } from "@styles";
import { FibLocalNavigation } from "../fib.types";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IFibSalaryDescriptionContainerProps {
  navigation: FibLocalNavigation;
}

const FibSalaryDescriptionContainer = memo(function (props: IFibSalaryDescriptionContainerProps) {
  const { navigation } = props;

  const backHandler = useCallback(() => {
    navigation.pop();
    return true;
  }, [navigation]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <Animatable.View duration={1000} animation="fadeIn" style={styles.mainContent} useNativeDriver={true}>
        <Text style={styles.text}>
          Your gross annual earned income for tax purposes. It does not include unearned income such as investment
          income.
        </Text>
      </Animatable.View>
      <GenericHeadingAbsolute heading="Salary" onLeftIconPress={navigation.pop} />
    </View>
  );
});

export default FibSalaryDescriptionContainer;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
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
