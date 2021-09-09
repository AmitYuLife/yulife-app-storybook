import React, { useState } from "react";
import { Text } from "@atoms";
import { InputField } from "../input-field";
import { StyleSheet, View } from "react-native";
import { styles } from "./fib-input-salary.styles";
import { Style } from "@styles";
import { addCommasToNumber } from "@utils";
import { FIB_SALARY_INPUT, FIB_SALARY_INPUT_VALUE } from "@ids";

interface FibInputSalaryProps {
  salary: number;
  setInputSalary?: (salary: number) => void;
}

function getDisplayValue(val: number) {
  if (val === 0 || !val) {
    return "";
  }

  return addCommasToNumber(val);
}

export const FibInputSalary = (props: FibInputSalaryProps) => {
  const { salary, setInputSalary } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [displayValue, setDisplayValue] = useState(getDisplayValue(salary));

  const validateNumber = (text: string) => {
    const castedValue = Number(text.replace(/,/g, "").substring(0, 7));
    if (isNaN(castedValue)) {
      return;
    }

    setDisplayValue(getDisplayValue(castedValue));

    return setInputSalary(castedValue);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.preInputWrapper}>
        <Text bold={true} style={styles.preInputLabel} testID={FIB_SALARY_INPUT_VALUE(displayValue)}>
          £
        </Text>
      </View>
      <InputField
        testID={FIB_SALARY_INPUT}
        value={displayValue}
        onChangeText={validateNumber}
        maxLength={9}
        style={StyleSheet.flatten([styles.textInput, isFocus ? {} : styles.textInputOnBlur])}
        hasFocusActive={setIsFocus}
        width={Style.adjust(115)}
        wrapperStyle={styles.inputWrapper}
      />
    </View>
  );
};
