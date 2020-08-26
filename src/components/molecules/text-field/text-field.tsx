import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Animated, ViewStyle } from "react-native";
import { Style } from "@styles/index";
import { Placeholder } from "./subcomponents/placeholder";
import { BaseUnderline, ColouredUnderline } from "./subcomponents/underlines";
import { numberWithCommas } from "@services/utils";

type Type = "Text" | "Number";

interface Props {
  placeholder: string;
  onChange: (val: string) => void;
  type?: Type;
  placeholderIndentSize?: number;
}

function stripPunctuation(text: string, type: Type) {
  if (type === "Text") {
    return text;
  }

  return text.replace(/,/g, "");
}

function formatText(text: string, type: Type) {
  if (type === "Text") {
    return text;
  }

  const castedText = Number(text);

  if (castedText === 0) {
    return "";
  }

  if (isNaN(castedText)) {
    return text;
  }

  return `${numberWithCommas(castedText)}`;
}

export default function TextField(props: Props) {
  const { placeholder, onChange, type = "Text", placeholderIndentSize = 0 } = props;
  const [isFocused, setFocused] = useState(false);
  const [placeholderScale] = useState(new Animated.Value(1));
  const [placeholderTranslateY] = useState(new Animated.Value(0));
  const [materialUnderlineScaleX] = useState(new Animated.Value(1));
  const [placeholderOpacity] = useState(new Animated.Value(0.5));
  const [textInputValue, setTextInputValue] = useState("");
  const [activeMaterial, setActiveMaterial] = useState(false);

  useEffect(() => {
    if (isFocused || textInputValue) {
      return setActiveMaterial(true);
    }

    setActiveMaterial(false);
  }, [isFocused, textInputValue]);

  useEffect(() => {
    const scaleAnim = Animated.timing(placeholderScale, {
      toValue: activeMaterial ? 0.7 : 1,
      useNativeDriver: true,
      duration: 100,
    });

    const translateYAnim = Animated.timing(placeholderTranslateY, {
      toValue: activeMaterial ? -24 : 0,
      useNativeDriver: true,
      duration: 100,
    });

    const materialUnderlineScaleXAnim = Animated.timing(materialUnderlineScaleX, {
      toValue: isFocused ? 105 : 0,
      useNativeDriver: true,
      duration: 200,
    });

    const placeholderOpacityAnim = Animated.timing(placeholderOpacity, {
      toValue: activeMaterial ? 1 : 0.5,
      useNativeDriver: true,
      duration: 100,
    });

    Animated.parallel([scaleAnim, translateYAnim, materialUnderlineScaleXAnim, placeholderOpacityAnim]).start();
  }, [activeMaterial, placeholderScale, placeholderTranslateY, isFocused, materialUnderlineScaleX, placeholderOpacity]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={StyleSheet.flatten([styles.inputBase, { paddingLeft: placeholderIndentSize }])}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onChangeText={(text: string) => {
          const strippedPunctuation = stripPunctuation(text, type);
          onChange(strippedPunctuation);

          const formattedText = formatText(strippedPunctuation, type);
          return setTextInputValue(formattedText);
        }}
        value={textInputValue}
        keyboardType={type === "Number" ? "number-pad" : "default"}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
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
      <BaseUnderline />
      <ColouredUnderline scaleX={materialUnderlineScaleX} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    overflow: "hidden",
  } as ViewStyle,
  inputBase: {
    paddingTop: 8,
    fontSize: 22,
    paddingBottom: 0,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as ViewStyle,
});
