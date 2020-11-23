import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style } from "@styles";
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
    <FibUnderwritingJourneyLayout
      heading={"Congratulation"}
      progressBar={{ maxLength: 0, currentPosition: 0, isHidden: true }}
      hideHeadingBorder={false}
    >
      <View style={styles.wrapper}>
        <FibTitle title={`You have successfully\npurchased ${toCapitalLetter(packageType)} Life Insurance!`} />
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
    paddingTop: 28,
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
