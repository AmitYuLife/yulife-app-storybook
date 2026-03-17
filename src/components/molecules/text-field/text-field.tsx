import React, { useState, useEffect, useCallback } from "react";
import {
  TextInput,
  View,
  // eslint-disable-next-line rulesdir/no-restricted-imports-clone
  Animated,
  ViewStyle,
  TextStyle,
  KeyboardType,
  TextInputProps,
} from "react-native";
import { Style, StyleSheet } from "@styles";
import { Placeholder } from "./subcomponents/placeholder";
import { BaseUnderline, ColouredUnderline } from "./subcomponents/underlines";
import { formatNumber, formatPostCode, truncateNumberValue } from "@utils";
import { TextInputWarningIcon } from "@molecules";
import { useMaterialInputAnimation } from "./useMaterialInputAnimation";
import { Box, TextTemplate } from "@atoms";
import { getCurrentLocale } from "@locale";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

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

function formatText(text: string, type: Type, options?: { maximumFractionDigits?: number }) {
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

  return `${formatNumber(text, getCurrentLocale(), {
    style: "decimal",
    maximumFractionDigits: options?.maximumFractionDigits,
  })}`;
}

const TextField = (props: Props) => {
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
    maximumFractionDigits = 3,
  } = props;

  const [isFocused, setFocused] = useState(autoFocus);
  const [placeholderScale] = useState(new Animated.Value(1));
  const [placeholderTranslateY] = useState(new Animated.Value(0));
  const [materialUnderlineScaleX] = useState(new Animated.Value(1));
  const [placeholderOpacity] = useState(new Animated.Value(0.5));
  const [textInputValue, setTextInputValue] = useState(value || "");
  const [activeMaterial, setActiveMaterial] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    if (textInputValue !== value) {
      const updatedVal = applyDecimals(textInputValue, value, type, maximumFractionDigits);
      setTextInputValue(updatedVal);
    }

    if (isFocused || textInputValue) {
      return setActiveMaterial(true);
    }

    setActiveMaterial(false);
  }, [isFocused, textInputValue, value, maximumFractionDigits, type]);

  useMaterialInputAnimation({
    activeMaterial,
    isFocused,
    materialUnderlineScaleX,
    placeholderOpacity,
    placeholderScale,
    placeholderTranslateY,
  });

  const showErrorCondition = showErrorWhenFocused ? showError : showError && !isFocused;

  const onChangeText = useCallback(
    (text: string) => {
      const strippedPunctuation = stripPunctuation(text, type);
      onChange(
        type === "Number"
          ? Number(truncateNumberValue(strippedPunctuation, maximumFractionDigits))
          : strippedPunctuation
      );

      const formattedText = formatText(strippedPunctuation, type, { maximumFractionDigits });

      const textInput = applyDecimals(text, formattedText, type, maximumFractionDigits);
      setTextInputValue(textInput);
    },
    [type, maximumFractionDigits, onChange]
  );

  return (
    <>
      <View style={styles.wrapper}>
        <TextInput
          editable={editable}
          testID={testID}
          style={StyleSheet.flatten([styles.inputBase, { paddingStart: placeholderIndentSize }, inputTextStyle])}
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
          onChangeText={onChangeText}
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
          focusedColor={theme.colors.primary.p600}
        />
        <BaseUnderline color={showError ? "#FC0000" : baseUnderlineColor} />
        <ColouredUnderline scaleX={materialUnderlineScaleX} color={theme.colors.primary.p600} />
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
};

export default TextField;

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
    marginStart: "auto",
    color: "#FC0000",
    fontSize: 12,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: 16,
    letterSpacing: 1,
    marginTop: 6,
  } as TextStyle,
});

function getKeyboardTypeFromType(type: Props["type"]) {
  if (type === "PhoneNumber") {
    return "phone-pad";
  }

  if (type === "Number") {
    return "number-pad";
  }

  return "default";
}

function hasDecimalValue(text: string) {
  return !!text.match(/.*\.0*$/)?.length;
}

function getDecimals(text: string, maximumFractionDigits = 3) {
  const [_, decimal] = text.split(".");

  return (decimal || "").slice(0, maximumFractionDigits);
}

function applyDecimals(input: string, value: string, type: Type, maximumFractionDigits = 3) {
  const decimal = type === "Number" ? getDecimals(input, maximumFractionDigits) : null;
  const decimalPart = hasDecimalValue(input) && maximumFractionDigits ? `.${decimal}` : "";

  return value ? `${value}${decimalPart}` : "";
}
