import React from "react";
import { View } from "react-native";
import { Text } from "@atoms";
import { Button } from "@molecules";
import { TextStyle, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { BENEFICIARY_DEFAULT_MODAL } from "@ids";

interface DeleteConfirmationProps {
  title: string;
  firstLabel: string;
  secondLabel: string;
  onFirstButtonPress: () => void;
  onSecondButtonPress: () => void;
  firstButtonLoading?: boolean;
}

export const ConfirmationScreen = ({
  title,
  firstLabel,
  secondLabel,
  onFirstButtonPress,
  onSecondButtonPress,
  firstButtonLoading,
}: DeleteConfirmationProps) => {
  return (
    <View style={styles.confirmDeleteBeneficiaryWrapper}>
      <Text style={styles.confirmDeleteBeneficiaryHeading} bold={true} testID={BENEFICIARY_DEFAULT_MODAL}>
        {title}
      </Text>
      <Button
        testID="confirm-delete-beneficiary-button"
        isLoading={firstButtonLoading}
        wrapperStyle={styles.firstButtonWrapper}
        translatedLabel={firstLabel}
        onPress={onFirstButtonPress}
      />
      <Button
        testID="cancel-delete-beneficiary-button"
        wrapperStyle={styles.secondButtonWrapperSecondary}
        translatedLabel={secondLabel}
        onPress={onSecondButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  confirmDeleteBeneficiaryWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  confirmDeleteBeneficiaryHeading: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(24),
    letterSpacing: Style.adjust(1),
    lineHeight: Style.adjust(32),
    textAlign: "center",
    maxWidth: Style.adjust(328),
  } as TextStyle,
  firstButtonWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  secondButtonWrapperSecondary: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});
