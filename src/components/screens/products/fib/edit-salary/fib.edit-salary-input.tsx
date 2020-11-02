import React, { useState, useEffect } from "react";
import * as Anim from "react-native-animatable";
import { StyleSheet, TextInput, View, Animated, TouchableOpacity } from "react-native";
import { Colours } from "@styles/index";
import { Text } from "@atoms";
import { numberWithCommas } from "@services/utils";
import { FIB_SALARY_INPUT, FIB_SALARY_INPUT_VALUE } from "@ids";
import { DETOX_ENABLED } from "@services/socket";
import { styles } from "./fib.edit-salary.styles";

interface Props {
  value: number;
  onChange: (val: number) => void;
}

function getDisplayValue(val: number) {
  if (val === 0) {
    return "";
  }

  return `${numberWithCommas(val)}`;
}

export function FibEditSalaryInput(props: Props) {
  const { value, onChange } = props;
  const [isFocused, setFocused] = useState(false);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    if (isFocused || value) {
      return setActive(true);
    }

    setActive(false);
  }, [isFocused, value]);

  function validateInput(text: string) {
    const castedValue = Number(text);
    if (isNaN(castedValue)) {
      return;
    }

    return onChange(castedValue);
  }

  return (
    <View style={styles.wrapper} testID={FIB_SALARY_INPUT_VALUE(value)}>
      <View style={styles.blingWrapper}>
        <Text style={styles.bling}>£</Text>
      </View>
      <TouchableOpacity style={styles.pressable} testID={FIB_SALARY_INPUT}>
        <View style={styles.inputWrapper}>
          <TextInput
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            value={value.toString()}
            onChangeText={validateInput}
            style={styles.inputBase}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            maxLength={6}
            keyboardType="numeric"
          />
          <Shadow value={value} />
        </View>
        <Underline active={isActive} />
      </TouchableOpacity>
    </View>
  );
}

function Shadow({ value }: { value: number }) {
  return (
    <View pointerEvents="none" style={styles.shadowWrapper}>
      <Text style={styles.shadowLabel}>{getDisplayValue(value)}</Text>
      <Blinker />
    </View>
  );
}

function Blinker() {
  if (DETOX_ENABLED) {
    return <View style={styles.cursor} />;
  }

  return (
    <Anim.View
      useNativeDriver={true}
      duration={400}
      iterationCount="infinite"
      direction="alternate"
      animation="fadeIn"
      style={styles.cursorWrapper}
    >
      <View style={styles.cursor} />
    </Anim.View>
  );
}

const Underline = ({ active }: { active: boolean }) => {
  const activeStyle = StyleSheet.create({ active: { backgroundColor: active ? Colours.darkHotPink : "gray" } });

  return <Animated.View style={StyleSheet.flatten([styles.underline, activeStyle.active])} />;
};
