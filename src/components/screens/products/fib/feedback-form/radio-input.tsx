import React from "react";
import { CheckBox } from "@atoms";
import { View, ViewStyle } from "react-native";

interface Props {
  selectedValue: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (val: string) => void;
  styles?: ViewStyle;
  extraVerticalPadding?: number;
}

function RadioInput(props: Props) {
  return (
    <View style={props.styles}>
      {props.options.map(({ label, value }) => {
        return (
          <View key={value}>
            <CheckBox checked={value === props.selectedValue} value={value} label={label} onChange={props.onChange} />
            {props.extraVerticalPadding ? <View style={{ paddingVertical: props.extraVerticalPadding }} /> : null}
          </View>
        );
      })}
    </View>
  );
}

export default RadioInput;
