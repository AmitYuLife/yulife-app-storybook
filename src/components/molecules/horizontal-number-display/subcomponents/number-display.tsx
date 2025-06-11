import { memo, useMemo } from "react";
import Animated, { interpolateColor, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { getNumberStyle, SCROLLING_NUMBER_GAP } from "./constants";
import { Box } from "@atoms";
import { StyleSheet } from "react-native";
import { omit } from "lodash";

const DEFAULT_NUMBER_STYLE = getNumberStyle();

interface NumberDisplayProps {
  value: number;
  currentTarget: number;
  stylesProgress: SharedValue<number>;
  mainColor: string;
  secondaryColor: string;
  marginLeft: number;
  isFirst: boolean;
}

const NumberDisplay = ({
  value,
  currentTarget,
  stylesProgress,
  mainColor,
  secondaryColor,
  marginLeft,
  isFirst,
}: NumberDisplayProps) => {
  const diffFromTarget = Math.abs(currentTarget - value);

  const boxStyle = useMemo(() => getNumberStyle(diffFromTarget), [diffFromTarget]);

  const baseStyle = useMemo(
    () => ({
      ...omit(boxStyle, ["width", "height"]),
      color: currentTarget === value ? mainColor : secondaryColor,
    }),
    [boxStyle, currentTarget, value, mainColor, secondaryColor]
  );

  const defaultStyle = useMemo(
    () => ({
      ...getNumberStyle(),
      color: secondaryColor,
    }),
    [secondaryColor]
  );

  const animatedTextStyle = useAnimatedStyle(() => {
    const progress = stylesProgress.value;
    const baseFontSize = baseStyle.fontSize as number;
    const baseLineHeight = baseStyle.lineHeight as number;
    const defaultFontSize = defaultStyle.fontSize as number;
    const defaultLineHeight = defaultStyle.lineHeight as number;

    const animatedColor = interpolateColor(progress, [0, 1], [defaultStyle.color, baseStyle.color]);

    return {
      fontSize: defaultFontSize + (baseFontSize - defaultFontSize) * progress,
      lineHeight: defaultLineHeight + (baseLineHeight - defaultLineHeight) * progress,
      color: animatedColor,
    };
  });

  const animatedBoxStyle = useAnimatedStyle(() => {
    const progress = stylesProgress.value;
    const baseWidth = boxStyle.width as number;
    const baseHeight = boxStyle.height as number;
    const defaultWidth = DEFAULT_NUMBER_STYLE.width as number;
    const defaultHeight = DEFAULT_NUMBER_STYLE.height as number;

    return {
      width: defaultWidth + (baseWidth - defaultWidth) * progress,
      height: defaultHeight + (baseHeight - defaultHeight) * progress,
      marginLeft: isFirst ? 0 : SCROLLING_NUMBER_GAP + (marginLeft - SCROLLING_NUMBER_GAP) * progress,
    };
  });

  return (
    <Box forceAnimated={true} justifyContent="center" alignItems="center" style={animatedBoxStyle}>
      <Animated.Text style={[styles.numberText, baseStyle, animatedTextStyle]} allowFontScaling={true}>
        {value}
      </Animated.Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  numberText: {
    textAlign: "center",
  },
});

export default memo(NumberDisplay);
