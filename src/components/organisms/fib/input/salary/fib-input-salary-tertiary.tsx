import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { TertiaryButton } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { Style } from "@styles";

interface IProps {
  label: string;
  subLabel?: string;
  onPress: () => void;
}

const FibInputSalaryTertiary = (props: IProps) => {
  const { label, subLabel, onPress } = props;

  return (
    <View style={styles.wrapper}>
      <TertiaryButton
        size="Fill"
        leftIcon={BUTTON_ICON.SALARY}
        rightIcon={BUTTON_ICON.EDIT}
        onPress={onPress}
        label={label}
        tertiarySubLabel={subLabel}
      />
    </View>
  );
};

export default FibInputSalaryTertiary;

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
    height: Style.adjust(84),
  } as ViewStyle,
});
