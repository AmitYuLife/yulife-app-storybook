import { Style } from "@styles";
import React, { useEffect, useMemo } from "react";
import { memo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Animated, { withRepeat, withTiming, useAnimatedStyle, useSharedValue, Easing } from "react-native-reanimated";
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from "react-native-svg";

const PODIUM_ROTATE_TIME = 70000;
const OPACITY = 0.7;

interface IPodiumRaysProps {
  containerStyle?: ViewStyle;
  backgroundColor?: string;
  color?: string;
  style?: "default" | "alternate";
}

const PodiumRays = ({ containerStyle, backgroundColor = "#CEEBFF", color, style = "default" }: IPodiumRaysProps) => {
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

  const wrapperStyle = useMemo(() => {
    return [containerStyle || styles.wrapper, { backgroundColor }];
  }, [containerStyle, backgroundColor]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: OPACITY,
      left: "-50%",
      width: "200%",
      height: "200%",
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  }, [style]);

  return (
    <Animated.View style={wrapperStyle}>
      <Animated.View style={animatedStyle}>
        {style === "default" ? <PodiumRaysSvg /> : null}
        {style === "alternate" ? <PodiumRaysSvgAlternate color={color} /> : null}
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

const PodiumRaysSvgAlternate = memo(({ color = "#fff" }: Pick<IPodiumRaysProps, "color">) => (
  <Svg width={"100%"} height={"100%"} viewBox="0 0 754 754" fill="none">
    <Path d="M250.976 754h252.048L376.928 377.073 250.976 754z" fill="url(#paint0_linear_4903_53)" />
    <Path d="M250.976 0h252.048L376.928 376.927 250.976 0z" fill="url(#paint1_linear_4903_53)" />
    <Path d="M754 503.024V250.976L377.074 377.072 754 503.024z" fill="url(#paint2_linear_4903_53)" />
    <Path d="M0 503.024V250.976l376.926 126.096L0 503.024z" fill="url(#paint3_linear_4903_53)" />
    <Path d="M554.466 732.692l178.225-178.226L377 377.103l177.466 355.589z" fill="url(#paint4_linear_4903_53)" />
    <Path d="M21.309 199.534L199.534 21.308 376.897 377 21.309 199.534z" fill="url(#paint5_linear_4903_53)" />
    <Path d="M732.691 199.533L554.466 21.308 377.103 376.999l355.588-177.466z" fill="url(#paint6_linear_4903_53)" />
    <Path d="M199.532 732.692L21.307 554.467l355.691-177.364-177.466 355.589z" fill="url(#paint7_linear_4903_53)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_4903_53"
        x1={373.755}
        y1={756.887}
        x2={387.157}
        y2={373.799}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_4903_53"
        x1={373.755}
        y1={-2.88689}
        x2={387.157}
        y2={380.201}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_4903_53"
        x1={756.887}
        y1={380.245}
        x2={373.8}
        y2={366.843}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_4903_53"
        x1={-2.88689}
        y1={380.245}
        x2={380.2}
        y2={366.843}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
      <LinearGradient
        id="paint4_linear_4903_53"
        x1={643.325}
        y1={647.915}
        x2={381.918}
        y2={367.555}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
      <LinearGradient
        id="paint5_linear_4903_53"
        x1={106.086}
        y1={110.674}
        x2={386.446}
        y2={372.081}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
      <LinearGradient
        id="paint6_linear_4903_53"
        x1={647.914}
        y1={110.674}
        x2={367.554}
        y2={372.081}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
      <LinearGradient
        id="paint7_linear_4903_53"
        x1={110.673}
        y1={647.915}
        x2={372.08}
        y2={367.555}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} stopOpacity={0} />
        <Stop offset={1} stopColor={color} />
      </LinearGradient>
    </Defs>
  </Svg>
));

const styles = StyleSheet.create({
  wrapper: {
    top: Style.adjust(100),
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH,
  },
});

export default memo(PodiumRays);
