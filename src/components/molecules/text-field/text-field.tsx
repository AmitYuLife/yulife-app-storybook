import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  // eslint-disable-next-line rulesdir/no-restricted-imports-clone
  Animated,
  ViewStyle,
  TextStyle,
  KeyboardType,
  TextInputProps,
} from "react-native";
import { Style } from "@styles/index";
import { Placeholder } from "./subcomponents/placeholder";
import { BaseUnderline, ColouredUnderline } from "./subcomponents/underlines";
import { formatNumber, formatPostCode } from "@utils";
import { TextInputWarningIcon } from "@molecules";
import { useMaterialInputAnimation } from "./useMaterialInputAnimation";
import { Box, TextTemplate } from "@atoms";

type Type = "Text" | "Number" | "PhoneNumber" | "PostCode" | "PostCodeFinder";

interface Props {
  placeholder: string;
  onChange: (val: string | number) => void;
  onBlur?: () => void;
  type?: Type;
  placeholderIndentSize?: number;
  value?: string;
  showError?: boolean;
  errorMessage?: string;
  maxLength?: number;
  inputTextStyle?: TextStyle;
  autoFocus?: boolean;
  onFocus?: () => void;
  testID?: string;
  baseUnderlineColor?: string;
  editable?: boolean;
  keyboardType?: KeyboardType;
  showErrorWhenFocused?: boolean;
  textAlign?: TextInputProps["textAlign"];
  hideErrorIcon?: boolean;
  maximumFractionDigits?: number;
}

function stripPunctuation(text: string, type: Type) {
  if (type === "Text") {
    return text;
  }

  return text.replace(/,/g, "");
}

function formatText(text: string, type: Type, maximumFractionDigits = 2) {
  if (type === "Text" || type === "PhoneNumber") {
    return text;
  }

  const castedText = Number(text);

  if (castedText === 0) {
    return "";
  }

  if (isNaN(castedText)) {
    return text;
  }

  return formatNumber(text, maximumFractionDigits);
}

export default function TextField(props: Props) {
  const {
    placeholder,
    onChange,
    onBlur,
    type = "Text",
    placeholderIndentSize = 0,
    inputTextStyle,
    autoFocus = false,
    value,
    showError,
    errorMessage,
    maxLength,
    onFocus,
    testID,
    baseUnderlineColor,
    editable = true,
    keyboardType,
    showErrorWhenFocused,
    textAlign,
    hideErrorIcon = false,
    maximumFractionDigits = 2,
  } = props;

  const [isFocused, setFocused] = useState(autoFocus);
  const [placeholderScale] = useState(new Animated.Value(1));
  const [placeholderTranslateY] = useState(new Animated.Value(0));
  const [materialUnderlineScaleX] = useState(new Animated.Value(1));
  const [placeholderOpacity] = useState(new Animated.Value(0.5));
  const [textInputValue, setTextInputValue] = useState(value || "");
  const [activeMaterial, setActiveMaterial] = useState(false);

  useEffect(() => {
    if (textInputValue !== value) {
      if (type === "Number" && value && textInputValue) {
        const [valueIntegerPart, valueDecimalPart] = value.split(".");
        const [_, textInputValueDecimalPart] = textInputValue.split(".");
        if (textInputValueDecimalPart !== undefined) {
          setTextInputValue(`${valueIntegerPart}.${valueDecimalPart || textInputValueDecimalPart}`);
        }
      } else {
        setTextInputValue(value);
      }
    }

    if (isFocused || textInputValue) {
      return setActiveMaterial(true);
    }

    setActiveMaterial(false);
  }, [isFocused, textInputValue, value, type]);

  useMaterialInputAnimation({
    activeMaterial,
    isFocused,
    materialUnderlineScaleX,
    placeholderOpacity,
    placeholderScale,
    placeholderTranslateY,
  });

  const showErrorCondition = showErrorWhenFocused ? showError : showError && !isFocused;

  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          editable={editable}
          testID={testID}
          style={StyleSheet.flatten([styles.inputBase, { paddingLeft: placeholderIndentSize }, inputTextStyle])}
          onBlur={() => {
            if (onBlur) {
              onBlur();
            }

            // the logic is addid in order to format the postcode after the input become unfocused
            if (type === "PostCode") {
              setTextInputValue((state) => formatPostCode(state));
              onChange(formatPostCode(textInputValue));
            }

            setFocused(false);
          }}
          onFocus={() => {
            setFocused(true);

            if (onFocus) {
              onFocus();
            }
          }}
          onChangeText={(text: string) => {
            const strippedPunctuation = stripPunctuation(text, type);
            onChange(type === "Number" ? parseFloat(strippedPunctuation) : strippedPunctuation);

            const formattedText = formatText(strippedPunctuation, type, maximumFractionDigits);
            return setTextInputValue(formattedText);
          }}
          value={textInputValue} //@TODO: Discuss with the team, that instead of using local state we should use the props "value" here, for better control
          keyboardType={keyboardType || getKeyboardTypeFromType(type)}
          underlineColorAndroid="transparent"
          autoCapitalize={type === "PostCode" || type === "PostCodeFinder" ? "characters" : "none"}
          autoComplete="off"
          autoCorrect={false}
          maxLength={maxLength}
          autoFocus={autoFocus}
          textAlign={textAlign}
        />
        <Placeholder
          scale={placeholderScale}
          translateY={placeholderTranslateY}
          opacity={placeholderOpacity}
          title={placeholder}
          isFocused={isFocused}
          hasInput={Boolean(textInputValue)}
          paddingLeft={placeholderIndentSize}
        />
        <BaseUnderline color={showError ? "#FC0000" : baseUnderlineColor} />
        <ColouredUnderline scaleX={materialUnderlineScaleX} />
        {showErrorCondition && !hideErrorIcon ? (
          <View style={styles.rightIcon}>
            <TextInputWarningIcon />
          </View>
        ) : null}
      </View>
      {showErrorCondition ? (
        <Box mt={6}>
          <TextTemplate color="#FC0000" type="l2" lineHeight={16} textAlign="right">
            {errorMessage}
          </TextTemplate>
        </Box>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    overflow: "hidden",
  } as ViewStyle,
  inputBase: {
    paddingTop: 12,
    fontSize: 22,
    paddingBottom: 4,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
  } as TextStyle,
  rightIcon: {
    position: "absolute",
    right: 0,
    bottom: 5,
    height: 24,
    width: 24,
  } as ViewStyle,
  errorMessage: {
    marginLeft: "auto",
    color: "#FC0000",
    fontSize: 12,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: 16,
    letterSpacing: 1,
    marginTop: 6,
  } as TextStyle,
});

function getKeyboardTypeFromType(type: Props["type"]) {
  return type === "Number" || type === "PhoneNumber" ? "number-pad" : "default";
}
