import React from "react";
import { View, Picker } from "react-native";
import styles from "./picker.styles";

interface IOption {
  id: string;
  value: any;
  label: string;
}

interface IProps {
  options: IOption[];
  selectedValue: string;
  onValueChange: (option: string, itemPosition: number) => void;
}

function OptionPicker({ options, selectedValue, onValueChange }: IProps) {
  return (
    <View style={styles.wrapper}>
      <Picker style={styles.picker} selectedValue={selectedValue} onValueChange={onValueChange}>
        {options.map(({ id, label }) => (
          <Picker.Item key={`amount-picker-${id}`} label={label} value={label} />
        ))}
      </Picker>
    </View>
  );
}

export default OptionPicker;
