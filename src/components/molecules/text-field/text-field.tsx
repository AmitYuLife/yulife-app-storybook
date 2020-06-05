import React, {
  useState,
  useEffect
} from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Animated,
  ViewStyle,
  TextStyle,
  TextInputProps,
  Platform
} from "react-native";
import { Colours, Style } from "@styles/index";

interface Props {
  placeholder: string
}

export default function MaterialInput({
  placeholder = "placeholder"
}: Props) {
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
      toValue: activeMaterial ? 0.8 : 1,
      useNativeDriver: true,
      duration: 100
    });
    const translateXAnim = Animated.timing(placeholderTranslateX, {
      toValue: activeMaterial ? -20 : 0,
      useNativeDriver: true,
      duration: 100
    });
    const translateYAnim = Animated.timing(placeholderTranslateY, {
      toValue: activeMaterial ? -28 : 0,
      useNativeDriver: true,
      duration: 100
    });
    const materialUnderlineScaleXAnim = Animated.timing(materialUnderlineScaleX, {
      toValue: activeMaterial ? 105 : 0,
      useNativeDriver: true,
      duration: 200
    });
    const placeholderOpacityAnim = Animated.timing(placeholderOpacity, {
      toValue: activeMaterial ? 1 : 0.5,
      useNativeDriver: true,
      duration: 100
    });
    Animated.parallel([scaleAnim, translateXAnim, translateYAnim, materialUnderlineScaleXAnim, placeholderOpacityAnim]).start();
  }, [
    activeMaterial,
    placeholderScale,
    placeholderTranslateX,
    placeholderTranslateY,
    materialUnderlineScaleX,
    placeholderOpacity,
  ]);

  const placeholderProps = {
    scale: placeholderScale,
    translateX: placeholderTranslateX,
    translateY: placeholderTranslateY,
    opacity: placeholderOpacity,
    title: placeholder,
    isActive: activeMaterial
  } as PlaceholderProps;
  const textInputProps = {
    style: styles.inputBase,
    onBlur: () => setFocused(false),
    onFocus: () => setFocused(true),
    value: textInputValue,
    onChangeText: (text: string) => setTextInputValue(text),
    underlineColorAndroid: "transparent",
    autoCapitalize: "none",
    autoCompleteType: "off",
    autoCorrect: false,
  } as TextInputProps;
  return (
    <View style={styles.wrapper}>
      <TextInput {...textInputProps} />
      <Placeholder {...placeholderProps} />
      <BaseUnderline />
      <ColouredUnderline scaleX={materialUnderlineScaleX} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    overflow: "hidden"
  } as ViewStyle,
  placeholder: {
    fontSize: 20,
    fontFamily: Style.FONT_FAMILY_PRIMARY
  } as TextStyle,
  inputBase: {
    height: 40,
    fontSize: 20,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginBottom: Platform.OS === "android" ? -6 : 0,
  } as ViewStyle,
});

const ColouredUnderline = ({ scaleX }: { scaleX: Animated.Value }) =>
  <Animated.View style={{
    position: "absolute",
    backgroundColor: Colours.darkHotPinkShadow,
    bottom: 0,
    width: "1%",
    height: 2,
    left: "50%",
    transform: [{ scaleX }]
  }} />;

const BaseUnderline = () =>
  <Animated.View style={{
    position: "absolute",
    backgroundColor: "gray",
    bottom: 0,
    width: "100%",
    height: 2,
  } as ViewStyle} />;


interface PlaceholderProps {
  scale: Animated.Value;
  translateX: Animated.Value;
  translateY: Animated.Value;
  opacity: Animated.Value;
  title: string;
  isActive: boolean;
}
const Placeholder = ({ scale, translateX, translateY, opacity, title, isActive }: PlaceholderProps) => {
  return (
    <Animated.View pointerEvents="none" style={{
      transform: [
        { scale },
        { translateX },
        { translateY },
      ],
      height: 24,
      position: "absolute",
      bottom: 4,
      left: 0,
    }}>
      <Animated.Text
        style={[styles.placeholder, {
          color: getPlaceholderColor(),
          opacity
        }]}
      >
        {title}
      </Animated.Text>
    </Animated.View>
  );
  function getPlaceholderColor() {
    if (isActive) {
      return Colours.darkHotPink;
    }

    return "black";
  }
};