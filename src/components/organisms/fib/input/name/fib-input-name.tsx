import React, { useState, memo } from "react";
import { View, ViewStyle, TextStyle, StyleSheet } from "react-native";
import { InputField } from "../input-field";
import { Colours, Style } from "@styles";

interface FibInputNameProps {
  inputName: string;
  setInputName: (text: string) => void;
}

const _FibInputName = (props: FibInputNameProps) => {
  const { inputName, setInputName } = props;
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.wrapper}>
      <InputField
        autoFocus={true}
        isLarge={true}
        value={inputName}
        onChangeText={(value: string) => {
          setInputName(value);
        }}
        maxLength={48}
        width={Style.DEVICE_WIDTH - 64}
        keyboardType="default"
        style={StyleSheet.flatten([styles.textInput, isFocus ? {} : styles.textInputOnBlur])}
        shadowStyle={styles.shadow}
        maxBeforeTruncate={32}
        hasFocusActive={setIsFocus}
      />
    </View>
  );
};

export const FibInputName = memo(_FibInputName);

const styles = {
  wrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 105,
  } as ViewStyle,
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: Colours.primary.p500,
    borderBottomWidth: 2,
  } as TextStyle,
  textInputOnBlur: {
    borderBottomColor: Colours.neutral.n200,
  } as TextStyle,
  shadow: {
    justifyContent: "flex-start",
    width: Style.DEVICE_WIDTH - 64,
  } as ViewStyle,
};
