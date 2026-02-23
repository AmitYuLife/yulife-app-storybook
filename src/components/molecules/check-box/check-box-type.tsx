import React, { useEffect, useMemo, useRef } from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { Style } from "@styles";
import { Animated, Easing } from "react-native";
import AnimatedValue = Animated.AnimatedValue;
import TimingAnimationConfig = Animated.TimingAnimationConfig;
import { useTheme } from "@app/modules/themes/hooks/useTheme";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type CheckboxType = "circular" | "cubic";

type Props = SvgProps & {
  type: CheckboxType;
};

export const CheckBoxType = (props: Props) => {
  const { type, animated } = props;

  const { theme } = useTheme();
  const resolvedActiveCheckboxFillColor = useMemo(
    () => props.activeCheckboxFillColor ?? theme.colors.primary.p600,
    [props.activeCheckboxFillColor, theme]
  );
  const useAnimatedCheckboxMap = animated && !!animatedCheckboxHashMap[type];

  const Checkbox = (useAnimatedCheckboxMap ? animatedCheckboxHashMap : checkboxHashMap)[type] || Circular;

  return <Checkbox {...props} activeCheckboxFillColor={resolvedActiveCheckboxFillColor} />;
};

const checkboxHashMap = {
  circular: Circular,
  cubic: Cubic,
} as Record<CheckboxType, React.FC<SvgProps>>;

const animatedCheckboxHashMap = {
  circular: AnimatedCircular,
} as Record<CheckboxType, React.FC<SvgProps>>;

interface SvgProps {
  checked: boolean;
  activeCheckboxFillColor?: string;
  strokeColor: string;
  testID?: string;
  size?: number;
  animated?: boolean;
}

function Circular({ checked, activeCheckboxFillColor, strokeColor, testID, size = 24 }: SvgProps) {
  return (
    <Svg height={Style.adjust(size)} width={Style.adjust(size)} fill="#fff" viewBox="0 0 24 24" testID={testID}>
      {checked ? (
        <>
          <Circle cx={12} cy={12} r={11.5} fill="#fff" stroke={activeCheckboxFillColor} />
          <Circle cx={12} cy={12} r={8} fill={activeCheckboxFillColor} />
        </>
      ) : (
        <Circle cx={12} cy={12} r={11.5} stroke={strokeColor} />
      )}
    </Svg>
  );
}

function Cubic({ checked, activeCheckboxFillColor, strokeColor, testID, size = 24 }: SvgProps) {
  return (
    <Svg height={Style.adjust(size)} width={Style.adjust(size)} fill="#fff" viewBox="0 0 24 24" testID={testID}>
      {checked ? (
        <>
          <Rect width={24} height={24} rx={4} fill={activeCheckboxFillColor} />
          <Path
            d="m18 8-8.337 8L6 12.4"
            stroke="white"
            fill={activeCheckboxFillColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <Rect x={0.5} y={0.5} width={23} height={23} rx={3.5} stroke={strokeColor} />
      )}
    </Svg>
  );
}

const timing = (
  animatedValue: AnimatedValue,
  config: Partial<TimingAnimationConfig> & Pick<TimingAnimationConfig, "toValue">
) =>
  Animated.timing(animatedValue, {
    duration: 250,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.ease),
    ...config,
  });

function AnimatedCircular({ checked, activeCheckboxFillColor, strokeColor, testID }: SvgProps) {
  const circleSize = useRef(new Animated.Value(checked ? 6 : 11.5)).current;

  useEffect(() => {
    const animation = timing(circleSize, {
      toValue: checked ? 6 : 11.5,
    });

    animation.start();

    return () => animation.stop();
  }, [checked, circleSize]);

  return (
    <Svg height={Style.adjust(24)} width={Style.adjust(24)} fill="#fff" viewBox="0 0 24 24" testID={testID}>
      <Circle
        cx={12}
        cy={12}
        r={11.5}
        fill={activeCheckboxFillColor}
        stroke={checked ? activeCheckboxFillColor : strokeColor}
      />
      <AnimatedCircle cx={12} cy={12} r={circleSize} fill="#fff" />
    </Svg>
  );
}
