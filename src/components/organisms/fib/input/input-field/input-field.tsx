import React, { memo, RefObject, useState } from "react";
import {
  TextInput,
  View,
  ViewStyle,
  StyleSheet,
  TextStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  KeyboardTypeOptions,
  Platform,
} from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";
import * as Anim from "react-native-animatable";

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

  const handleFocus = (isFocused: boolean) => {
    return () => {
      setIsFocused(isFocused);

      if (isFocused) {
        onChangeText("");
      }
    };
  };

  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={[styles.field, { width }]}>
        <TextInput
          onFocus={handleFocus(true)}
          onBlur={handleFocus(false)}
          clearTextOnFocus={true}
          caretHidden={true}
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
        <View pointerEvents="none" style={styles.shadowWrapper}>
          <Text bold={true} style={styles.shadow}>
            {value}
          </Text>
          <Blinker show={isFocused} />
        </View>
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
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
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
    flexDirection: "row",
  } as ViewStyle,
  fieldActive: {
    borderColor: Colours.darkHotPink,
  } as ViewStyle,
  shadowWrapper: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  shadow: {
    letterSpacing: 1,
  } as TextStyle,
};

function Blinker({ show }: Pick<InputFieldProps, "show">) {
  if (!show) {
    return null;
  }

  return (
    <Anim.View
      useNativeDriver={true}
      duration={400}
      iterationCount="infinite"
      direction="alternate"
      animation="fadeIn"
      style={blinkerStyles.wrapper}
    >
      <View style={blinkerStyles.cursor} />
    </Anim.View>
  );
}

const blinkerStyles = {
  wrapper: {
    marginTop: 0,
    marginBottom: Platform.select({ ios: 4, android: 0 }),
    marginLeft: 1,
  } as ViewStyle,
  cursor: {
    width: 1,
    height: 14,
    backgroundColor: Colours.darkHotPink,
  } as ViewStyle,
};
