import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style } from "@styles";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { useBackHandler } from "../../../../../../services/hooks/useBackHandler";

export interface IFibHoldingGPDetailsScreenProps {
  onClose?: () => void;
  onResetFib?: () => void;
  canResetFib: boolean;
}

export const FibHoldingGPDetails = memo(function (props: IFibHoldingGPDetailsScreenProps) {
  const { onClose, onResetFib, canResetFib } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);

  return (
    <FibUnderwritingJourneyLayout heading={"GP Results"} onClose={onClose} progressBarHideType="unrendered">
      <View style={styles.wrapper}>
        <Text style={styles.message}>
          {`We are going to contact your GP.\n\nWe cannot issue your insurance until your medical assessment and further checks have been completed.\n\nWe have not taken payment, and will inform you when we have your results.`}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        {canResetFib ? <Button size={"Large"} onPress={onResetFib} label={"restart journey (beta only)"} /> : null}
      </View>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 28,
    paddingHorizontal: 32,
  } as ViewStyle,
  message: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
    color: "#5A5A5C",
  } as TextStyle,
  buttonWrapper: {
    marginTop: "auto",
    marginBottom: 48,
  } as ViewStyle,
});
