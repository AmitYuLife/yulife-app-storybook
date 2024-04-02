import { Style } from "@styles";
import React, { useEffect } from "react";
import { memo } from "react";
import { StyleSheet } from "react-native";
import Animated, { withRepeat, withTiming, useAnimatedStyle, useSharedValue, Easing } from "react-native-reanimated";
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from "react-native-svg";

const PODIUM_ROTATE_TIME = 70000;
const OPACITY = 0.7;

const PodiumRays = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: PODIUM_ROTATE_TIME,
        easing: Easing.linear,
      }),
      -1
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: OPACITY,
      left: "-50%",
      width: "200%",
      height: "200%",
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  }, []);

  return (
    <Animated.View style={styles.wrapper}>
      <Animated.View style={animatedStyle}>
        <PodiumRaysSvg />
      </Animated.View>
    </Animated.View>
  );
};

const PodiumRaysSvg = memo(() => (
  <Svg width="100%" height="100%" viewBox="0 0 696 696" fill="none">
    <G clipPath="url(#clip0_1_159)">
      <Path d="M326.664 304L201.5-111h293L370.203 304h-43.539z" fill="url(#paint0_linear_1_159)" />
      <Path
        d="M364.026 301.8L568.971-80.153l207.182 207.182-381.34 205.558-30.787-30.787z"
        fill="url(#paint1_linear_1_159)"
      />
      <Path d="M392 326.664L807 201.5v293L392 370.203v-43.539z" fill="url(#paint2_linear_1_159)" />
      <Path
        d="M394.2 364.026l381.953 204.945-207.182 207.182-205.558-381.34 30.787-30.787z"
        fill="url(#paint3_linear_1_159)"
      />
      <Path d="M369.336 392L494.5 807h-293l124.297-415h43.539z" fill="url(#paint4_linear_1_159)" />
      <Path
        d="M331.974 394.2L127.029 776.153-80.153 568.971l381.34-205.558 30.787 30.787z"
        fill="url(#paint5_linear_1_159)"
      />
      <Path d="M304 369.336L-111 494.5v-293l415 124.297v43.539z" fill="url(#paint6_linear_1_159)" />
      <Path
        d="M301.8 331.974L-80.153 127.029 127.029-80.153l205.558 381.34-30.787 30.787z"
        fill="url(#paint7_linear_1_159)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_159"
        x1={345.656}
        y1={18.2094}
        x2={348.468}
        y2={303.639}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_159"
        x1={579.54}
        y1={113.145}
        x2={379.698}
        y2={316.963}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1_159"
        x1={677.791}
        y1={345.656}
        x2={392.361}
        y2={348.468}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1_159"
        x1={582.855}
        y1={579.54}
        x2={379.037}
        y2={379.698}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1_159"
        x1={350.344}
        y1={677.791}
        x2={347.532}
        y2={392.361}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1_159"
        x1={116.46}
        y1={582.855}
        x2={316.302}
        y2={379.037}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1_159"
        x1={18.2094}
        y1={350.344}
        x2={303.639}
        y2={347.532}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_1_159"
        x1={113.145}
        y1={116.46}
        x2={316.963}
        y2={316.302}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="clip0_1_159">
        <Path fill="#fff" d="M0 0H696V696H0z" />
      </ClipPath>
    </Defs>
  </Svg>
));

const styles = StyleSheet.create({
  wrapper: {
    top: Style.adjust(100),
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH,
    backgroundColor: "#CEEBFF",
  },
});

export default memo(PodiumRays);
