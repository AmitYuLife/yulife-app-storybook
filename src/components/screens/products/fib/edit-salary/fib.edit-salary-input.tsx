import React, { useState, useEffect } from "react";
import * as Anim from "react-native-animatable";
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
    <View style={styles.wrapper}>
      <View style={styles.blingWrapper}>
        <Text style={styles.bling}>£</Text>
      </View>
      <TouchableOpacity style={styles.pressable}>
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
            autoFocus={true}
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

const INPUT_WIDTH = 92;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  } as ViewStyle,
  pressable: {
    paddingBottom: 2,
    overflow: "hidden",
    justifyContent: "center",
    maxWidth: INPUT_WIDTH,
    alignSelf: "center",
  } as ViewStyle,
  blingWrapper: {
    marginBottom: Platform.select({ ios: 3, android: 0 }),
    marginRight: -3,
  } as ViewStyle,
  bling: {
    marginBottom: Platform.OS === "ios" ? -2 : -1,
    fontSize: 24,
    paddingRight: 4,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.products.fib.n900,
  } as TextStyle,
  inputWrapper: {
    alignSelf: "center",
    width: INPUT_WIDTH,
  } as ViewStyle,
  inputBase: {
    opacity: 0,
  } as TextStyle,
  shadowWrapper: {
    height: 38,
    flexDirection: "row",
    marginBottom: Platform.select({ ios: -12, android: -10 }),
    justifyContent: "center",
  } as ViewStyle,
  shadowLabel: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.products.fib.n900,
    fontSize: 24,
  } as ViewStyle,
  underline: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: INPUT_WIDTH,
    alignSelf: "center",
  } as ViewStyle,
  cursorWrapper: {
    marginTop: Platform.select({ ios: 0, android: 5 }),
    marginBottom: Platform.select({ ios: 4, android: 0 }),
  } as ViewStyle,
  cursor: {
    width: 1,
    height: 20,
    backgroundColor: Colours.darkHotPink,
  } as ViewStyle,
});
