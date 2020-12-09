import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style } from "@styles";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { useBackHandler } from "../../../../../../services/hooks/useBackHandler";
import FibTitle from "../../../../../atoms/fib/title/title";

export interface IFibRejectedScreenProps {
  onClose?: () => void;
  onResetFib?: () => void;
}

export const FibRejectedScreen = memo(function (props: IFibRejectedScreenProps) {
  const { onClose, onResetFib } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);

  return (
    <FibUnderwritingJourneyLayout heading={"Rejection"} hideProgressBar={true} onPreviousQuestion={onClose}>
      <View style={styles.wrapper}>
        <FibTitle title={`Sorry about that!`} textStyle={styles.fibTitle} />
        <View style={styles.padding}>
          <Text
            style={styles.message}
          >{`Based on your answers, we're not able to offer you personal life insurance right now.`}</Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        {onResetFib ? (
          <Button type="Primary" size={"Large"} onPress={onResetFib} label={"restart journey (beta only)"} />
        ) : null}
        <Button type="Primary" size={"Large"} onPress={onClose} label={"Continue"} />
      </View>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(12),
  } as ViewStyle,
  buttonWrapper: {
    marginTop: "auto",
    marginBottom: Style.adjust(48),
  } as ViewStyle,
  padding: {
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  message: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: "#5A5A5C",
    marginTop: Style.adjust(20),
  } as TextStyle,
  fibTitle: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
  } as ViewStyle,
});
