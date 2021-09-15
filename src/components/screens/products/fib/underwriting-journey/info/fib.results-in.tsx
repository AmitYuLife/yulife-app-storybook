import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style } from "@styles";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { useBackHandler } from "@services/hooks/useBackHandler";
import FibTitle from "@atoms/fib/title/title";
import { FibLocalNavigation } from "@containers/products/fib/fib.types";

export interface IFibResultsInScreenProps {
  onClose?: () => void;
  navigation: FibLocalNavigation;
  showRejectedScreen: () => void;
  showCongratulationScreen: () => void;
}

export const FibResultsInScreen = memo(function (props: IFibResultsInScreenProps) {
  const { onClose } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);

  const onPressContinue = useCallback(() => {
    return;
  }, []);

  return (
    <FibUnderwritingJourneyLayout heading={"Results"} progressBarHideType="unrendered" onPreviousQuestion={onClose}>
      <View style={styles.wrapper}>
        <FibTitle title="Your results are in" textStyle={{ fontSize: 20, lineHeight: 24 }} />
        <Text style={styles.message}>{`We assessed your case it's done`}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button size={"Large"} onPress={onPressContinue} label={"Continue"} />
      </View>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 12,
    paddingHorizontal: 32,
  } as ViewStyle,
  buttonWrapper: {
    marginTop: "auto",
    marginBottom: 48,
  } as ViewStyle,
  message: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
    color: "#5A5A5C",
    marginTop: 20,
  } as TextStyle,
});
