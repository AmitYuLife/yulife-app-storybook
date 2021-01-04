import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "@atoms";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { updateFIBValue } from "@redux/product/product.actions";
import { StyleSheet, View } from "react-native";
import { styles } from "./fib-input-salary.styles";
import { Style } from "@styles";

export const FibInputSalary = () => {
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const salary = useSelector(getFIBState).salary;

  const updateSalary = (value: number) => dispatch(updateFIBValue({ key: "salary", value }));

  const validateNumber = (text: string) => {
    const parsedText = parseInt(text, 10);
    const validText = !isNaN(parsedText) && parsedText >= 0;

    if (!validText) {
      return updateSalary(0);
    }

    return updateSalary(parsedText);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.preInputWrapper}>
        <Text bold={true} style={styles.preInputLabel}>
          £
        </Text>
      </View>
      <InputField
        value={salary.toString()}
        onChangeText={validateNumber}
        maxLength={6}
        style={StyleSheet.flatten([styles.textInput, isFocus ? {} : styles.textInputOnBlur])}
        hasFocusActive={setIsFocus}
        width={Style.adjust(112)}
        wrapperStyle={styles.inputWrapper}
      />
    </View>
  );
};
