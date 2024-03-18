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
  <Svg width="100%" height="100%" viewBox="0 0 598 598" fill="none">
    <G clipPath="url(#clip0_1_159)">
      <Path d="M290.689 299.93L239-115.07h121l-51.331 415h-17.98z" fill="url(#paint0_linear_1_159)" />
      <Path
        d="M292.124 294.175L455.107-90.523l103.801 59.93-251.36 333.674-15.424-8.906z"
        fill="url(#paint1_linear_1_159)"
      />
      <Path
        d="M295.615 291.277L629.112 39.61l59.93 103.802-384.522 163.29-8.905-15.425z"
        fill="url(#paint2_linear_1_159)"
      />
      <Path d="M300.391 290.689l414-51.689v121l-414-51.331v-17.98z" fill="url(#paint3_linear_1_159)" />
      <Path
        d="M304.343 292.087L689.042 455.07l-59.93 103.802-333.674-251.36 8.905-15.425z"
        fill="url(#paint4_linear_1_159)"
      />
      <Path
        d="M307.241 295.578l251.668 333.497-103.802 59.93-163.29-384.521 15.424-8.906z"
        fill="url(#paint5_linear_1_159)"
      />
      <Path d="M308.311 300.391l51.689 414H239l51.331-414h17.98z" fill="url(#paint6_linear_1_159)" />
      <Path
        d="M306.432 304.306L143.448 689.005l-103.801-59.93 251.36-333.674 15.425 8.905z"
        fill="url(#paint7_linear_1_159)"
      />
      <Path
        d="M302.94 307.205L-30.556 558.872l-59.93-103.802 384.521-163.29 8.905 15.425z"
        fill="url(#paint8_linear_1_159)"
      />
      <Path d="M298.93 308.311l-415 51.689V239l415 51.331v17.98z" fill="url(#paint9_linear_1_159)" />
      <Path
        d="M294.212 306.395L-90.486 143.412l59.93-103.802 333.674 251.36-8.906 15.425z"
        fill="url(#paint10_linear_1_159)"
      />
      <Path
        d="M291.314 302.903L39.647-30.593l103.801-59.93 163.291 384.521-15.425 8.905z"
        fill="url(#paint11_linear_1_159)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_159"
        x1={298.532}
        y1={14.1391}
        x2={305.337}
        y2={299.435}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_159"
        x1={441.627}
        y1={50.7667}
        x2={305.04}
        y2={301.058}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_1_159"
        x1={546.793}
        y1={155.231}
        x2={303.36}
        y2={303.696}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_1_159"
        x1={585.493}
        y1={298.532}
        x2={300.884}
        y2={305.304}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_1_159"
        x1={547.752}
        y1={441.59}
        x2={297.46}
        y2={305.003}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_1_159"
        x1={443.288}
        y1={546.756}
        x2={294.823}
        y2={303.323}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_1_159"
        x1={300.468}
        y1={585.493}
        x2={293.696}
        y2={300.884}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_1_159"
        x1={156.928}
        y1={547.715}
        x2={293.515}
        y2={297.423}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint8_linear_1_159"
        x1={51.7625}
        y1={443.251}
        x2={295.196}
        y2={294.786}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint9_linear_1_159"
        x1={13.1391}
        y1={300.468}
        x2={298.435}
        y2={293.663}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint10_linear_1_159"
        x1={50.8036}
        y1={156.891}
        x2={301.095}
        y2={293.478}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint11_linear_1_159"
        x1={155.267}
        y1={51.7256}
        x2={303.733}
        y2={295.159}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.661458} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="clip0_1_159">
        <Path fill="#fff" d="M0 0H598V598H0z" />
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
