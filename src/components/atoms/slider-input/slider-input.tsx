import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Colours, Style } from "@styles";
import { Text } from "@atoms";

import { PressableWithDelay } from "@components/molecules";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

const CIRCLE_DIAMETER = 8;

interface Props {
  maxValue: typeof list[number];
  onChange?: (val: number) => void;
  leftLabel: string;
  rightLabel: string;
}

export function SliderInput(props: Props) {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  const { maxValue, onChange, leftLabel, rightLabel } = props;
  const valueIterator = new Array(maxValue + 1).fill(0);

  useEffect(() => {
    if (onChange) {
      onChange(activeValue);
    }
  }, [activeValue, onChange]);

  return (
    <View style={styles.wrapper}>
      <View style={StyleSheet.flatten([styles.valueWrapper, styles.textWrapper])}>
        {valueIterator.map((_, i) => {
          const isActive = activeValue === i;

          return (
            <PressableWithDelay hitSlop={5} key={i} onPress={() => setActiveValue(i)}>
              <AnimatedText isActive={isActive} index={i} />
            </PressableWithDelay>
          );
        })}
      </View>
      <View style={StyleSheet.flatten([styles.greyBarWrapper, styles.valueWrapper])}>
        {valueIterator.map((_, i) => {
          const isActive = typeof activeValue === "number" && activeValue >= i;
          const activeStyles = isActive ? styles.activeCircle : {};

          return (
            <PressableWithDelay hitSlop={5} key={i} onPress={() => setActiveValue(i)}>
              <View style={styles.circleWrapper}>
                <View style={StyleSheet.flatten([styles.circle, activeStyles])} />
              </View>
            </PressableWithDelay>
          );
        })}
      </View>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>{leftLabel}</Text>
        <Text style={styles.label}>{rightLabel}</Text>
      </View>
    </View>
  );
}

interface AnimatedTextProps {
  isActive: boolean;
  index: number;
}

function AnimatedText(props: AnimatedTextProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { isActive, index } = props;

  useEffect(() => {
    if (isActive) {
      return Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }

    return Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [isActive, scaleAnim]);

  const activeStyles = isActive ? styles.activeText : {};

  return (
    <Animated.Text
      style={StyleSheet.flatten([
        styles.text,
        activeStyles,
        {
          transform: [
            {
              scale: scaleAnim,
            },
          ],
        },
      ])}
    >
      {index}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  activeText: {
    color: Colours.darkHotPink,
  },
  textWrapper: { height: 36 },
  text: {
    width: 20,
    textAlign: "center",
    fontSize: 16,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: Colours.slider.inactive,
  },
  valueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  greyBarWrapper: {
    backgroundColor: Colours.slider.greyBar,
    borderRadius: 30,
  },
  circleWrapper: {
    width: 20,
    alignItems: "center",
    paddingVertical: 8,
  },
  circle: {
    width: CIRCLE_DIAMETER,
    height: CIRCLE_DIAMETER,
    borderRadius: CIRCLE_DIAMETER / 2,
    backgroundColor: Colours.slider.inactive,
  },
  activeCircle: {
    backgroundColor: Colours.darkHotPink,
  },
  labelWrapper: {
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 12,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 0.8,
  },
});
