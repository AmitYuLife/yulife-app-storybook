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
  style?: TextStyle;
  maxBeforeTruncate?: number;
  shadowStyle?: ViewStyle;
}

const _InputField = (props: InputFieldProps) => {
  const {
    onChangeText,
    onBackSpace,
    autoFocus,
    value,
    forwardRef,
    maxLength,
    label = "",
    width = 50,
    show = true,
    keyboardType = "number-pad",
    style,
    maxBeforeTruncate = 0,
    shadowStyle,
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
      <View style={StyleSheet.flatten(StyleSheet.flatten([styles.field, { width }, style]))}>
        <TextInput
          onFocus={handleFocus(true)}
          onBlur={handleFocus(false)}
          clearTextOnFocus={true}
          onKeyPress={handleKeyPress}
          autoFocus={autoFocus}
          ref={forwardRef}
          style={StyleSheet.flatten([styles.textInput, style])}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          maxLength={maxLength}
          keyboardType={keyboardType}
        />
        <View pointerEvents="none" style={StyleSheet.flatten([styles.shadowWrapper, shadowStyle])}>
          {value ? (
            <Text bold={true} style={styles.shadow}>
              {ellipsizeHead(value, maxBeforeTruncate)}
            </Text>
          ) : (
            <Text style={StyleSheet.flatten([styles.shadow, { color: Colours.neutral.n500 }])}>{label}</Text>
          )}
          <Blinker show={isFocused} />
        </View>
      </View>
    </View>
  );
};

export const InputField = memo(_InputField);

const styles = {
  textInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  } as TextStyle,
  fieldWrapper: {
    height: 70,
    marginHorizontal: 4,
  } as ViewStyle,
  field: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colours.lightGray,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    borderRadius: 6,
    backgroundColor: "white",
    marginTop: 4,
    flexDirection: "row",
  } as ViewStyle,
  shadowWrapper: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  shadow: {
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 20,
    lineHeight: 24,
    color: Colours.neutral.n900,
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
    color: Colours.darkHotPink,
  } as ViewStyle,
  cursor: {
    width: 2,
    height: 22,
    backgroundColor: Colours.darkHotPink,
  } as ViewStyle,
};

function ellipsizeHead(name: string, max: number) {
  // because ellipsizeMode="head" is not working for some reason

  if (!max || name?.length < max) {
    return name;
  }

  const ellipses = "...";
  const ellipsed = `${ellipses}${name?.substr(name?.length - max)}`;

  return ellipsed;
}
