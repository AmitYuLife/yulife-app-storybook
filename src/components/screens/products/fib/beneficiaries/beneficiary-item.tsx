import { View, ViewStyle, TextStyle, Platform } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TertiaryButton, BUTTON_ICON } from "@molecules";
import { InputField } from "@organisms/fib/input/input-field";
import { truncate } from "@utils";
import { BENEFICIARY_SHARE_INPUT } from "@ids";

interface IBeneficiaryProps {
  fullName: string;
  relationship: string;
  shareOfBenefit: number;
  onBeneficiaryPress: () => void;
  onChangeText: (text: string) => void;
  isFocused: boolean;
  showError: boolean;
  hasFocusActive: (focus: boolean) => void;
  setShareLoading?: boolean;
  testID?: string;
}

export const BeneficiaryItem = ({
  fullName,
  relationship,
  shareOfBenefit,
  onBeneficiaryPress,
  onChangeText,
  hasFocusActive,
  isFocused,
  showError,
  testID,
}: IBeneficiaryProps) => {
  const name = truncate(fullName, 15);
  const relation = truncate(relationship, 15);

  const inputFieldWidth = Platform.select({ ios: 35, android: 50 });
  const onFocusStyle = isFocused ? {} : styles.textInputOnBlur;
  const errorStyle = showError ? { borderBottomColor: "#FC0000" } : {};
  const inputFieldStyle = StyleSheet.flatten([styles.textInput, onFocusStyle, errorStyle]);
  const percentage = shareOfBenefit ? shareOfBenefit?.toString() : "";
  return (
    <View style={styles.beneficiaryWrapper} testID={testID}>
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
        testID={BENEFICIARY_SHARE_INPUT}
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
    marginEnd: Style.adjust(24),
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
