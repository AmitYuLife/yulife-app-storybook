import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style } from "@styles";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { useBackHandler } from "../../../../../../services/hooks/useBackHandler";
import FibTitle from "../../../../../atoms/fib/title/title";

export interface IFibRejectedScreenProps {
  onClose?: () => void;
}

export const FibRejectedScreen = memo(function (props: IFibRejectedScreenProps) {
  const { onClose } = props;

  const backHandler = useCallback(() => {
    return true;
  }, []);

  useBackHandler(backHandler);

  return (
    <FibUnderwritingJourneyLayout
      heading={"Rejection"}
      progressBar={{ maxLength: 0, currentPosition: 0, isHidden: true }}
      hideHeadingBorder={false}
      onPreviousQuestion={onClose}
    >
      <View style={styles.wrapper}>
        <FibTitle title={`Sorry about that!`} textStyle={{ fontSize: 20, lineHeight: 24 }} />
        <Text
          style={styles.message}
        >{`Based on your answers, we're not able to offer you personal life insurance right now.`}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button type="Primary" size={"Large"} onPress={onClose} label={"Continue"} />
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
