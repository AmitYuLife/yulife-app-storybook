import React, { useEffect, useRef, useState } from "react";
import { Style, StyleSheet } from "@styles";
// eslint-disable-next-line no-restricted-imports
import { Animated, View, ViewStyle, Text } from "react-native";
import { ContentItemProgressSteps } from "@graphql/__generated";

type IContentItemProgressStepsTheme = ContentItemProgressSteps["theme"];
export interface IProgressStepItemProps {
  active: boolean;
  animationDelay: number;
  diameter: number;
  id: number;
  stepBackgroundColour: IContentItemProgressStepsTheme["stepBackgroundColour"];
  stepTextColour: IContentItemProgressStepsTheme["stepTextColour"];
  text: number;
  x: number;
}

const INTERPOLATION_MAXIMUM = 100;

export const ProgressStepItem = ({
  active,
  animationDelay,
  diameter,
  id,
  stepBackgroundColour,
  stepTextColour,
  text,
  x,
}: IProgressStepItemProps) => {
  const animatedValue = useRef(new Animated.Value(active ? INTERPOLATION_MAXIMUM : 0)).current;
  const [isActive, setIsActive] = useState(active);

  useEffect(() => () => animatedValue.stopAnimation(), []);

  useEffect(() => {
    if (active !== isActive) {
      Animated.sequence([
        ...(active ? [Animated.delay(animationDelay)] : []),
        Animated.timing(animatedValue, {
          duration: 350,
          toValue: active ? INTERPOLATION_MAXIMUM : 0,
          useNativeDriver: true,
        }),
      ]).start();
      setIsActive(active);
    }
  }, [active]);

  const overlayOpacity = animatedValue.interpolate({
    inputRange: [0, INTERPOLATION_MAXIMUM],
    outputRange: [0, 1],
  });

  return (
    <View key={id} style={[{ width: diameter, start: x }, styles.wrapper]}>
      <View
        style={[
          {
            backgroundColor: stepBackgroundColour.inactive,
          },
          styles.textWrapper,
        ]}
      >
        <Text style={[styles.text, { height: diameter, lineHeight: diameter, color: stepTextColour.inactive }]}>
          {text}
        </Text>
      </View>
      <Animated.View
        style={[
          styles.overlay,
          {
            width: diameter,
            height: diameter,
            opacity: overlayOpacity,
            backgroundColor: stepBackgroundColour.active,
          },
          styles.textWrapper,
        ]}
      >
        <Animated.Text style={[styles.text, { height: diameter, lineHeight: diameter, color: stepTextColour.active }]}>
          {text}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
  } as ViewStyle,
  textWrapper: {
    borderRadius: 20,
  },
  overlay: {
    position: "absolute",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
});
