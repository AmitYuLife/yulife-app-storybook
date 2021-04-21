import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Colours, Style } from "@styles";
import { TertiaryButton } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { InputField } from "@organisms/fib/input/input-field";
import { truncate } from "@services/utils";

interface IBeneficiaryProps {
  firstName: string;
  lastName: string;
  relationship: string;
  shareOfBenefit: number;
  onBeneficiaryPress: () => void;
  onChangeText: (text: string) => void;
  isFocused: boolean;
  showError: boolean;
  hasFocusActive: (focus: boolean) => void;
  setShareLoading?: boolean;
}

export const BeneficiaryItem = ({
  firstName,
  lastName,
  relationship,
  shareOfBenefit,
  onBeneficiaryPress,
  onChangeText,
  hasFocusActive,
  isFocused,
  showError,
}: IBeneficiaryProps) => {
  const name = truncate(`${firstName} ${lastName}`, 15);
  const relation = truncate(relationship, 15);

  const inputFieldWidth = Platform.select({ ios: 35, android: 50 });
  const onFocusStyle = isFocused ? {} : styles.textInputOnBlur;
  const errorStyle = showError ? { borderBottomColor: "#FC0000" } : {};
  const inputFieldStyle = StyleSheet.flatten([styles.textInput, onFocusStyle, errorStyle]);
  const percentage = shareOfBenefit ? shareOfBenefit?.toString() : "";
  return (
    <View style={styles.beneficiaryWrapper}>
      <View style={styles.beneficiaryButtonWrapper}>
        <TertiaryButton
          size="Fill"
          rightIcon={BUTTON_ICON.EDIT_GREY}
          onPress={onBeneficiaryPress}
          label={name}
          tertiarySubLabel={relation}
        />
      </View>
      <InputField
        value={percentage}
        onChangeText={onChangeText}
        maxLength={3}
        sideLabel="%"
        style={inputFieldStyle}
        width={inputFieldWidth}
        hasFocusActive={hasFocusActive}
        wrapperStyle={styles.percentageInputFieldWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: Colours.primary.p600,
    borderBottomWidth: Style.adjust(2),
    textAlign: "center",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.neutral.n700,
  } as TextStyle,
  textInputOnBlur: {
    borderBottomColor: Colours.neutral.n200,
  } as TextStyle,
  beneficiaryButtonWrapper: {
    marginRight: Style.adjust(24),
    flex: 1,
  } as ViewStyle,
  beneficiaryWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  percentageInputFieldWrapper: {
    alignSelf: "center",
  },
});
