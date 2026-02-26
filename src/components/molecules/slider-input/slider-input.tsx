import React, { useEffect, useRef, useMemo } from "react";
import { View, Animated } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";
import { Pressable } from "@components/molecules";
import { SLIDER_INPUT, SLIDER_LABEL } from "@ids";

const CIRCLE_DIAMETER = 8;

export type SliderInputMaxValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface SliderInputProps {
  score?: number;
  maxValue: SliderInputMaxValue | number;
  minValue?: number;
  onChange?: (val: number) => void;
  leftLabel: string;
  rightLabel: string;
}

export function SliderInput(props: SliderInputProps) {
  const { maxValue, onChange, leftLabel, rightLabel, score, minValue = 0 } = props;
  const valueIterator = useMemo(
    () => new Array(maxValue - minValue + 1).fill(0).map((_, i) => i + minValue),
    [maxValue, minValue]
  );

  return (
    <View style={styles.wrapper}>
      <View style={StyleSheet.flatten([styles.valueWrapper, styles.textWrapper])}>
        {valueIterator.map((i) => {
          const isActive = score === i;

          return (
            <Pressable hitSlop={5} key={i} onPress={() => onChange(i)} testID={SLIDER_INPUT(i)} delay={1000}>
              <AnimatedText isActive={isActive} index={i} />
            </Pressable>
          );
        })}
      </View>
      <View style={StyleSheet.flatten([styles.greyBarWrapper, styles.valueWrapper])}>
        {valueIterator.map((i) => {
          const isActive = score >= i;
          const activeStyles = isActive ? styles.activeCircle : {};

          return (
            <Pressable hitSlop={5} key={i} onPress={() => onChange(i)} delay={1000}>
              <View style={styles.circleWrapper}>
                <View style={StyleSheet.flatten([styles.circle, activeStyles])} />
              </View>
            </Pressable>
          );
        })}
      </View>
      <View style={styles.labelWrapper}>
        <TextTemplate type="l2b" textAlign="center" testID={SLIDER_LABEL(leftLabel)}>
          {leftLabel}
        </TextTemplate>
        <TextTemplate type="l2b" textAlign="center" testID={SLIDER_LABEL(rightLabel)}>
          {rightLabel}
        </TextTemplate>
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
    Animated.timing(scaleAnim, {
      toValue: isActive ? 1.4 : 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

    return () => {
      scaleAnim.stopAnimation();
    };
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
});
