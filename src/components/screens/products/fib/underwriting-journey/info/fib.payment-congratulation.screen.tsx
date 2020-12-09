import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style, Colours } from "@styles";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { useBackHandler } from "../../../../../../services/hooks/useBackHandler";
import FibTitle from "@atoms/fib/title/title";
import { toCapitalLetter } from "@services/utils";

export interface IFibPaymentCongratulationScreenProps {
  onClose?: () => void;
  packageType: string;
}

export const FibPaymentCongratulationScreen = memo(function (props: IFibPaymentCongratulationScreenProps) {
  const { onClose, packageType } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);

  return (
    <FibUnderwritingJourneyLayout heading={"Congratulation"} hideProgressBar={true}>
      <FibTitle title={`You have successfully purchased ${toCapitalLetter(packageType)} Life Insurance!`} />
      <View style={styles.wrapper}>
        <Text style={styles.message}>{`Congratulation Congratulation Congratulation!!!`}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button type="Primary" size={"Large"} onPress={onClose} label={"Continue"} />
      </View>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(28),
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  buttonWrapper: {
    marginTop: "auto",
    marginBottom: Style.adjust(48),
  } as ViewStyle,
  message: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n800,
    marginTop: Style.adjust(20),
  } as TextStyle,
});
