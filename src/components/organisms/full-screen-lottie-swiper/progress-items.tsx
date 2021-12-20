import React, { useCallback, useEffect } from "react";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { DETOX_ENABLED } from "@services/socket";

const ProgressItem = ({ width, translateX }: { width: number; translateX: number | Animated.Value }) => (
  <View style={[styles.progressBar, { width }]}>
    <Animated.View style={[styles.animatedProgressBar, { transform: [{ translateX }] }]} />
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
}: {
  length: number;
  activeIndex: number;
  userInteractionToggler: boolean;
  onChangeActiveIndex: () => void;
  width: number;
  interpolatedValue: Animated.Value;
  animationRef: React.MutableRefObject<Animated.CompositeAnimation>;
  autoPlaySpeedMs: number;
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

        return <ProgressItem key={i} width={width} translateX={translateX} />;
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
