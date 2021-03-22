import React from "react";
import { View } from "react-native";
import { Button, Text } from "@atoms";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";

interface DeleteConfirmationProps {
  title: string;
  firstLabel: string;
  secondLabel: string;
  onFirstButtonPress: () => void;
  onSecondButtonPress: () => void;
}

export const ConfirmationScreen = ({
  title,
  firstLabel,
  secondLabel,
  onFirstButtonPress,
  onSecondButtonPress,
}: DeleteConfirmationProps) => {
  return (
    <View style={styles.confirmDeleteBeneficiaryWrapper}>
      <Text style={styles.confirmDeleteBeneficiaryHeading} bold={true}>
        {title}
      </Text>
      <Button wrapperStyle={styles.firstButtonWrapper} label={firstLabel} onPress={onFirstButtonPress} type="Primary" />
      <Button
        wrapperStyle={styles.secondButtonWrapperSecondary}
        label={secondLabel}
        onPress={onSecondButtonPress}
        type={"Primary"}
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
