import { memo, ReactNode, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface IProps {
  children: ReactNode;
  stackColors?: string[];
  style?: ViewStyle;
  outerStyle?: ViewStyle;
  shadowHeight?: number;
  borderRadius?: number;
}
const DEFAULT_BORDER_RADIUS = 14;
const DEFAULT_SHADOW_HEIGHT = 4;
const DEFAULT_STACK_COLORS = ["#340080", "#883EFF", "#AA76FF"];

const StackedShadowWrapper = ({
  children,
  stackColors = DEFAULT_STACK_COLORS,
  style,
  borderRadius = DEFAULT_BORDER_RADIUS,
  shadowHeight = DEFAULT_SHADOW_HEIGHT,
  outerStyle,
}: IProps) => {
  const wrapperStyle = useMemo(
    () => ({
      marginStart: 1,
      marginEnd: 1,
      marginTop: 1,
      marginBottom: stackColors.length * shadowHeight,
      borderRadius,
      overflow: "hidden" as "hidden",
      ...style,
    }),
    [borderRadius, shadowHeight, stackColors.length, style]
  );
  const shadowStack = useMemo(() => {
    const reversedColors = [...stackColors].reverse();
    return reversedColors.map((color, index) => {
      const bottom = index * shadowHeight;
      const verticalOffset = (stackColors.length - index - 1) * shadowHeight;
      return {
        bottom,
        verticalOffset,
        backgroundColor: color,
        key: index,
      };
    });
  }, [shadowHeight, stackColors]);

  return (
    <View style={outerStyle}>
      {shadowStack.map(({ bottom, verticalOffset, backgroundColor, key }) => {
        return (
          <View
            key={key}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor,
              bottom,
              left: verticalOffset,
              right: verticalOffset,
              borderRadius,
            }}
          />
        );
      })}
      <View style={wrapperStyle}>{children}</View>
    </View>
  );
};

export default memo(StackedShadowWrapper);
