import React from "react";
import { Animated, TextStyle, StyleSheet, Platform } from "react-native";
import { Style, Colours } from "@styles";

interface Props {
  scale: Animated.Value;
  translateX: Animated.Value;
  translateY: Animated.Value;
  opacity: Animated.Value;
  title: string;
  isFocused: boolean;
  hasInput: boolean;
  paddingLeft?: number;
}

export const Placeholder = ({
  scale,
  translateX,
  translateY,
  opacity,
  title,
  isFocused,
  hasInput,
  paddingLeft = 0,
}: Props) => {
  const dynamicStyles = {
    transform: [{ scale }, { translateX }, { translateY }],
    paddingLeft: isFocused || hasInput ? 0 : paddingLeft,
  };

  return (
    <Animated.View pointerEvents="none" style={[styles.placeholderWrapper, dynamicStyles]}>
      <Animated.Text
        style={[
          styles.placeholder,
          {
            color: getPlaceholderColor(),
            opacity,
          },
        ]}
      >
        {title}
      </Animated.Text>
    </Animated.View>
  );
  function getPlaceholderColor() {
    if (isFocused) {
      return Colours.darkHotPink;
    }

    if (hasInput) {
      return Colours.gray;
    }

    return "black";
  }
};

const styles = StyleSheet.create({
  placeholderWrapper: {
    height: 24,
    position: "absolute",
    bottom: Platform.OS === "android" ? 4 : 0,
    left: 0,
    width: "100%",
    textAlign: "left",
  },
  placeholder: {
    fontSize: 22,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 0.8,
  } as TextStyle,
});
