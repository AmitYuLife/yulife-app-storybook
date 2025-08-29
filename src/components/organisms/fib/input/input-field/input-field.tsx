import React, { memo, RefObject, useState } from "react";
import {
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  KeyboardTypeOptions,
  Platform,
} from "react-native";
import { Text } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { INPUT_FIELD, INPUT_FIELD_VALUE } from "@ids";
export interface InputFieldProps {
  onChangeText: (text: string) => void;
  maxLength: number;
  value: string;
  forwardRef?: RefObject<TextInput>;
  inlineLabel?: string;
  sideLabel?: string;
  isLarge?: boolean;
  show?: boolean;
  autoFocus?: boolean;
  width?: number;
  keyboardType?: KeyboardTypeOptions;
  onBackSpace?: () => void;
  style?: TextStyle;
  maxBeforeTruncate?: number;
  shadowStyle?: ViewStyle;
  hasFocusActive?: (focus: boolean) => void;
  wrapperStyle?: ViewStyle;
  onFocus?: () => void;
  testID?: string;
}

const _InputField = (props: InputFieldProps) => {
  const {
    onChangeText,
    onBackSpace,
    autoFocus,
    value,
    forwardRef,
    maxLength,
    inlineLabel = "",
    sideLabel,
    width = 35,
    show = true,
    keyboardType = "number-pad",
    style,
    hasFocusActive,
    wrapperStyle,
    onFocus,
    testID,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

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

  const handleFocus = (newFocusValue: boolean) => {
    if (onFocus) {
      onFocus();
    }

    return () => {
      if (hasFocusActive) {
        hasFocusActive(newFocusValue);
      }

      setIsFocused(newFocusValue);
    };
  };

  return (
    <View style={StyleSheet.flatten([styles.fieldWrapper, wrapperStyle])} testID={INPUT_FIELD}>
      <View testID={INPUT_FIELD_VALUE(value)}>
        <TextInput
          testID={testID}
          onFocus={handleFocus(true)}
          onBlur={handleFocus(false)}
          clearTextOnFocus={false}
          onKeyPress={handleKeyPress}
          autoFocus={autoFocus}
          ref={forwardRef}
          style={StyleSheet.flatten([styles.textInput, style, { width }])}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          maxLength={maxLength}
          keyboardType={keyboardType}
          placeholder={inlineLabel}
          placeholderTextColor={Colours.neutral.n400}
          selectionColor={Colours.primary.p200}
          returnKeyType="done"
        />
      </View>
      {!sideLabel ? null : (
        <View style={styles.sideLabelWrapper}>
          <Text style={StyleSheet.flatten([styles.sideLabel, isFocused ? { color: Colours.primary.p600 } : {}])}>
            {sideLabel}
          </Text>
        </View>
      )}
    </View>
  );
};

export const InputField = memo(_InputField);

const styles = {
  textInput: {
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 20,
    lineHeight: 24,
    color: Colours.neutral.n900,
    paddingBottom: Platform.select({ ios: 6, android: 2 }),
    borderRadius: 2,
  } as TextStyle,
  fieldWrapper: {
    height: Style.adjust(56),
    marginHorizontal: 4,
    flexDirection: "row",
  } as ViewStyle,
  shadowWrapper: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  sideLabelWrapper: {
    height: 30,
    marginStart: 5,
    flexDirection: "row",
    marginTop: Platform.select({ ios: 0, android: 6 }),
  } as ViewStyle,
  sideLabel: {
    alignSelf: "flex-end",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 14,
    lineHeight: 20,
    color: Colours.neutral.n700,
  } as TextStyle,
};
