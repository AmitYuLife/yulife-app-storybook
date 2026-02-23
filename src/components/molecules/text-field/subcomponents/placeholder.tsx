import React, { useRef, useEffect, useState, useMemo } from "react";
import { Animated, TextStyle, LayoutChangeEvent, ViewStyle } from "react-native";
import { Style, Colours, StyleSheet } from "@styles";

interface Props {
  scale: Animated.Value;
  translateY: Animated.Value;
  opacity: Animated.Value;
  title: string;
  isFocused: boolean;
  hasInput: boolean;
  paddingLeft?: number;
  focusedColor: string;
}

export const Placeholder = ({
  scale,
  translateY,
  opacity,
  title,
  isFocused,
  hasInput,
  paddingLeft = 0,
  focusedColor,
}: Props) => {
  const placeholderTranslateX = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);

  function onLayout(e: LayoutChangeEvent) {
    setTextWidth(e.nativeEvent.layout.width);
  }

  useEffect(() => {
    // I'm doing this because of how the 'scaled' value works.
    // Since the scaled value coming from the parent is 0.7, it means that the full width of the Text component is 70%
    // but it still behaves like it's at 100% width. This means that there will always be a 15% indent when the placeholder is active
    // I tried just using `left: 15%` when the input is active, but it caused the value to jump around
    // RN doesn't handle percentage values for translateX, so i'm having to manually calculate the value onLayout.
    // Even though 15% worked when I inputted the value normally, 21% seems to be the magic number here.
    Animated.timing(placeholderTranslateX, {
      toValue: isFocused || hasInput ? -`${textWidth * 0.21}` : 0,
      useNativeDriver: true,
      duration: 100,
    }).start();
  }, [placeholderTranslateX, hasInput, isFocused, textWidth]);

  const dynamicStyles = {
    transform: [{ translateY }],
    paddingStart: isFocused || hasInput ? 0 : paddingLeft,
    bottom: isFocused ? 0 : 8,
  };

  const dynamicTextStyles: TextStyle = { transform: [{ scale }, { translateX: placeholderTranslateX }] };

  const resolvedPlaceholderColor = useMemo(() => {
    if (isFocused) {
      return focusedColor;
    }

    if (hasInput) {
      return Colours.neutral.n400;
    }

    return "black";
  }, [isFocused, hasInput, focusedColor]);

  return (
    <Animated.View pointerEvents="none" style={[styles.placeholderWrapper, dynamicStyles]}>
      <Animated.Text
        onLayout={onLayout}
        style={[
          styles.placeholder,
          {
            color: resolvedPlaceholderColor,
            opacity,
          },
          dynamicTextStyles,
        ]}
      >
        {title}
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  placeholderWrapper: {
    height: 24,
    position: "absolute",
    start: 0,
    width: "100%",
    justifyContent: "flex-end",
  } as ViewStyle,
  placeholder: {
    fontSize: 20,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    width: "100%",
    letterSpacing: 1,
  } as TextStyle,
});
