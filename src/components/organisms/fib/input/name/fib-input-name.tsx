import React, { memo } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { TextField } from "@components/molecules";
import { FIB_FIRST_NAME_INPUT } from "@ids";

interface FibInputNameProps {
  inputFirstName?: string;
  inputLastName?: string;
  setInputFirstName?: (text: string) => void;
  setInputLastName?: (text: string) => void;
}

const _FibInputName = (props: FibInputNameProps) => {
  const { inputFirstName, inputLastName, setInputFirstName, setInputLastName } = props;

  return (
    <View>
      <View style={styles.inputWrapper}>
        <TextField
          testID={FIB_FIRST_NAME_INPUT}
          placeholder="First name"
          onChange={(value: string) => {
            setInputFirstName(value);
          }}
          value={inputFirstName}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextField
          placeholder="Last name"
          onChange={(value: string) => {
            setInputLastName(value);
          }}
          value={inputLastName}
        />
      </View>
    </View>
  );
};

export const FibInputName = memo(_FibInputName);

const styles = StyleSheet.create({
  inputWrapper: {
    paddingTop: 24,
  } as ViewStyle,
});
