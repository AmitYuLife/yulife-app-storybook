import React, { memo, useCallback } from "react";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Style } from "@styles";
import FibTitle from "../../../../atoms/fib/title/title";

import Footer from "./subcomponents/footer/footer";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

export interface IFibConfirmEmailScreenProps {
  firstButtonAction: () => void;
  secondButtonAction: () => void;
  email: string;
  onBackButtonPress: () => void;
  onClose?: () => void;
}

export const FibConfirmScreen = memo(function (props: IFibConfirmEmailScreenProps) {
  const { email, firstButtonAction, secondButtonAction, onBackButtonPress, onClose } = props;

  const backHandler = useCallback(() => {
    onBackButtonPress();
    return true;
  }, [onBackButtonPress]);

  useBackHandler(backHandler);

  return (
    <FibUnderwritingJourneyLayout
      heading={"Contact Details"}
      onClose={onClose}
      onPreviousQuestion={onBackButtonPress}
      progressBar={{ maxLength: 0, currentPosition: 0, isHidden: true }}
    >
      <View style={styles.wrapper}>
        <FibTitle title={"Would you like to use:"} />
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.message}>
          as your email address for logging into the yulie app in the future? Your password will remain the same
        </Text>
      </View>
      <Footer
        firstButton={{ action: firstButtonAction, label: "No", disabled: false }}
        secondButton={{ action: secondButtonAction, label: "Yes" }}
      />
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingHorizontal: 32,
  } as ViewStyle,
  email: {
    marginTop: 24,
    fontSize: 20,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  } as TextStyle,
  message: {
    marginTop: 24,
    fontSize: 16,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  } as TextStyle,
});
