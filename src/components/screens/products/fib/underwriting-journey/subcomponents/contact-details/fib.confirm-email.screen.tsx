import React, { memo, useCallback } from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import Footer from "../footer/footer";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import ContactDetailsTitle from "./fib.contact-details.title";

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
      hideProgressBar={true}
    >
      <ContactDetailsTitle title="Would you like to use:" />
      <View style={styles.content}>
        <View style={styles.emailWrapper}>
          <Text bold={true} style={styles.email} numberOfLines={1}>
            {email}
          </Text>
        </View>
        <Text style={styles.message}>
          as your email address for logging into the YuLife app in the future? Your password will remain the same.
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
  content: {
    paddingHorizontal: Style.adjust(32),
  } as ViewStyle,
  emailWrapper: {
    backgroundColor: Colours.neutral.n100,
    borderColor: Colours.neutral.n200,
    borderWidth: 1,
    borderRadius: 53,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    height: 48,
  } as ViewStyle,
  email: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n400,
    paddingHorizontal: Style.adjust(16),
  } as TextStyle,
  message: {
    marginTop: Style.adjust(16),
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
});
