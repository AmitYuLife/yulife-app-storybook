import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Animated, ViewStyle, TextStyle, TextInputProps, Platform } from "react-native";
import { Style } from "@styles/index";
import { Placeholder } from "./subcomponents/placeholder";
import { BaseUnderline, ColouredUnderline } from "./subcomponents/underlines";

interface Props {
  placeholder: string;
  onChange: (val: string) => void;
  type?: "Text" | "Number";
  placeholderIndentSize?: number;
}

export default function TextField(props: Props) {
  const { placeholder, onChange, type = "Text", placeholderIndentSize = 0 } = props;
  const [isFocused, setFocused] = useState(false);
  const [placeholderScale] = useState(new Animated.Value(1));
  const [placeholderTranslateX] = useState(new Animated.Value(0));
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

    const translateXAnim = Animated.timing(placeholderTranslateX, {
      toValue: activeMaterial ? -70 : 0,
      useNativeDriver: true,
      duration: 100,
    });

    const translateYAnim = Animated.timing(placeholderTranslateY, {
      toValue: activeMaterial ? -34 : 0,
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

    Animated.parallel([
      scaleAnim,
      translateXAnim,
      translateYAnim,
      materialUnderlineScaleXAnim,
      placeholderOpacityAnim,
    ]).start();
  }, [
    activeMaterial,
    placeholderScale,
    placeholderTranslateX,
    placeholderTranslateY,
    isFocused,
    materialUnderlineScaleX,
    placeholderOpacity,
  ]);

  const textInputProps = {
    style: StyleSheet.flatten([styles.inputBase, { paddingLeft: placeholderIndentSize, marginBottom: -6 }]),
    onBlur: () => setFocused(false),
    onFocus: () => setFocused(true),
    value: textInputValue,
    onChangeText: (text: string) => {
      onChange(text);
      return setTextInputValue(text);
    },
    keyboardType: type === "Number" ? "number-pad" : "default",
    underlineColorAndroid: "transparent",
    autoCapitalize: "none",
    autoCompleteType: "off",
    autoCorrect: false,
  } as TextInputProps;

  return (
    <View style={styles.wrapper}>
      <TextInput {...textInputProps} />
      <Placeholder
        scale={placeholderScale}
        translateX={placeholderTranslateX}
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
  placeholder: {
    fontSize: 20,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  inputBase: {
    height: 40,
    fontSize: 20,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginBottom: Platform.OS === "android" ? -6 : 0,
  } as ViewStyle,
});
