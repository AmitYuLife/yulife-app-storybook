import React, { memo, RefObject } from "react";
import {
  TextInput,
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  KeyboardTypeOptions,
} from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";

export interface InputFieldProps {
  onChangeText: (text: string) => void;
  placeholder?: string;
  maxLength: number;
  value: string;
  forwardRef?: RefObject<TextInput>;
  label?: string;
  isLarge?: boolean;
  show?: boolean;
  autoFocus?: boolean;
  width?: number;
  keyboardType?: KeyboardTypeOptions;
  onBackSpace?: () => void;
}

const _InputField = (props: InputFieldProps) => {
  const {
    onChangeText,
    onBackSpace,
    autoFocus,
    value,
    forwardRef,
    placeholder,
    maxLength,
    label = "",
    width = 50,
    show = true,
    keyboardType = "number-pad",
  } = props;

  if (!show) {
    return null;
  }

  const handleKeyPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (event.nativeEvent.key === "Backspace") {
      if (onBackSpace) {
        onBackSpace();
      }
    }
  };

  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={[styles.field, { width }]}>
        <TextInput
          onKeyPress={handleKeyPress}
          autoFocus={autoFocus}
          ref={forwardRef}
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export const InputField = memo(_InputField);

const styles = {
  textInput: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
  } as TextStyle,
  fieldWrapper: {
    height: 70,
    marginHorizontal: 4,
  } as ViewStyle,
  fieldLabel: {
    fontSize: 12,
  } as TextStyle,
  empty: {
    color: Colours.lightGray,
  } as TextStyle,
  field: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colours.lightGray,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 6,
    backgroundColor: "white",
    marginTop: 4,
  } as ViewStyle,
  fieldActive: {
    borderColor: Colours.darkHotPink,
  } as ViewStyle,
  small: {
    width: 50,
  } as ViewStyle,
  large: {
    width: 80,
  } as ViewStyle,
};
