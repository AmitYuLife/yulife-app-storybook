import React, { useCallback, useEffect } from "react";
import { Animated, Easing, View, ViewStyle } from "react-native";
import { Style, Colours, StyleSheet } from "@styles";
import { DETOX_ENABLED } from "@services/socket";

const ProgressItem = ({
  width,
  translateX,
  foregroundColor,
  backgroundColor,
}: {
  width: number;
  translateX: number | Animated.Value;
  foregroundColor?: string;
  backgroundColor?: string;
}) => (
  <View style={[styles.progressBar, { width, backgroundColor: backgroundColor || "rgba(255,255,255,0.32)" }]}>
    <Animated.View
      style={[
        styles.animatedProgressBar,
        { backgroundColor: foregroundColor || Colours.neutral.white, transform: [{ translateX }] },
      ]}
    />
  </View>
);

export const ProgressItems = ({
  length,
  activeIndex,
  userInteractionToggler,
  onChangeActiveIndex,
  width,
  interpolatedValue,
  animationRef,
  autoPlaySpeedMs = 2000,
  progressBarForegroundColor,
  progressBarBackgroundColor,
}: {
  length: number;
  activeIndex: number;
  userInteractionToggler: boolean;
  onChangeActiveIndex: () => void;
  width: number;
  interpolatedValue: Animated.Value;
  animationRef: React.MutableRefObject<Animated.CompositeAnimation>;
  autoPlaySpeedMs: number;
  progressBarForegroundColor?: string;
  progressBarBackgroundColor?: string;
}) => {
  const reanimateInterpolatedValue = useCallback(() => {
    interpolatedValue.setValue(-width);
    animationRef.current = Animated.timing(interpolatedValue, {
      toValue: 0,
      duration: autoPlaySpeedMs,
      useNativeDriver: true,
      easing: Easing.linear,
    });

    animationRef.current.start(({ finished }) => {
      if (length - 1 === activeIndex) {
        return;
      }

      if (finished) {
        onChangeActiveIndex();
      }
    });
  }, [activeIndex, animationRef.current, width, length]);

  useEffect(() => {
    if (DETOX_ENABLED || autoPlaySpeedMs <= 0) {
      interpolatedValue.setValue(1);
      return;
    }

    reanimateInterpolatedValue();
  }, [userInteractionToggler, activeIndex]);

  return (
    <View style={styles.progressBarsWrapper}>
      {Array.from({ length }).map((_, i) => {
        const translateX = activeIndex === i ? interpolatedValue : i < activeIndex ? 0 : -width;

        return (
          <ProgressItem
            key={i}
            width={width}
            translateX={translateX}
            foregroundColor={progressBarForegroundColor}
            backgroundColor={progressBarBackgroundColor}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    marginHorizontal: Style.adjust(4),
    backgroundColor: "rgba(255,255,255,0.32)",
    height: Style.adjust(8),
    borderRadius: 999,
    flex: 1,
    overflow: "hidden",
  } as ViewStyle,
  animatedProgressBar: {
    width: "100%",
    height: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    borderRadius: 999,
  } as ViewStyle,
  progressBarsWrapper: {
    marginHorizontal: Style.adjust(12),
    position: "absolute",
    top: Style.adjust(16),
    left: 0,
    right: 0,
    flexDirection: "row",
  } as ViewStyle,
});
