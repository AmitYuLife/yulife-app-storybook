import React, { memo, useCallback } from "react";
import { View, TextInput } from "react-native";
import { CheckBox } from "@components/molecules";
import { Colours, StyleSheet } from "@styles";

interface IProps {
  index: number;
  initialValue: string;
  placeholder: string;
  checked: boolean;
  onCheckBoxPress: (index: number) => void;
  onValueChange: (index: number, value: string) => void;
}

const CustomValue = ({ index, initialValue, placeholder, checked, onCheckBoxPress, onValueChange }: IProps) => {
  const handleCheckBoxPress = useCallback(() => onCheckBoxPress(index), [index, onCheckBoxPress]);
  const handleValueChange = useCallback((text: string) => onValueChange(index, text), [index, onValueChange]);

  return (
    <View key={initialValue} style={styles.customWrapper}>
      <CheckBox
        checkboxType="cubic"
        checked={checked}
        value={`${initialValue}-${index}`}
        key={initialValue}
        label=""
        onChange={handleCheckBoxPress}
      />
      <TextInput
        style={styles.textInput}
        defaultValue={initialValue}
        onChangeText={handleValueChange}
        placeholder={placeholder}
        placeholderTextColor={Colours.neutral.n400}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customWrapper: {
    flexDirection: "row",
  },
  textInput: {
    color: Colours.neutral.n800,
    flex: 1,
  },
});

export default memo(CustomValue);
