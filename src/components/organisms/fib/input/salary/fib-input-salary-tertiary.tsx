import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Button } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { BUTTON_TYPES } from "@atoms/button/button.types";
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
      <Button
        size="Fill"
        leftIcon={BUTTON_ICON.SALARY}
        rightIcon={BUTTON_ICON.EDIT}
        type={BUTTON_TYPES.TERTIARY}
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
