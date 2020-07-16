import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Animated, ViewStyle, TextStyle, TouchableOpacity, Platform } from "react-native";
import { Colours, Style } from "@styles/index";
import { Text } from "@atoms";
import { numberWithCommas } from "@services/utils";

interface Props {
  value: number;
  onChange: (val: number) => void;
}

function getDisplayValue(val: number) {
  if (val === 0) {
    return "";
  }

  return ` ${numberWithCommas(val)}`;
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
    const valWithCommasAndSpacesRemoved = text.replace(/[\s,]/g, "");
    const castedValue = Number(valWithCommasAndSpacesRemoved);

    if (isNaN(castedValue)) {
      return;
    }

    return onChange(castedValue);
  }

  return (
    <TouchableOpacity onPress={() => setFocused} style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <Text style={styles.dollarSign}>£</Text>
        <TextInput
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          value={getDisplayValue(value)}
          onChangeText={validateInput}
          style={styles.inputBase}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          autoFocus
          maxLength={10}
          keyboardType="numeric"
        />
      </View>
      <Underline active={isActive} />
    </TouchableOpacity>
  );
}

const Underline = ({ active }: { active: boolean }) => {
  const activeStyle = StyleSheet.create({ active: { backgroundColor: active ? Colours.darkHotPink : "gray" } });

  return <Animated.View style={StyleSheet.flatten([styles.underline, activeStyle.active])} />;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
    paddingBottom: 2,
    overflow: "hidden",
  } as ViewStyle,
  dollarSign: {
    marginBottom: Platform.OS === "ios" ? -2 : -1,
    fontSize: 24,
    paddingRight: 4,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.products.fib.n900,
  },
  inputWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
  } as ViewStyle,
  inputBase: {
    paddingBottom: 0,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: Platform.select({ ios: null, android: "100" }),
    color: Colours.products.fib.n900,
    fontSize: 24,
    marginLeft: Platform.select({ ios: -4, android: -12 }),
  } as TextStyle,
  underline: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 2,
  } as ViewStyle,
});
