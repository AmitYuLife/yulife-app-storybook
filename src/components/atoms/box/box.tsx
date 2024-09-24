import { Style } from "@styles";
import { ReactNode, memo, useMemo } from "react";
import { StyleProp, ViewStyle, View, ViewProps } from "react-native";

interface IBoxProps extends ViewProps {
  gap?: number;
  center?: boolean;
  children: ReactNode;
  flexWrap?: ViewStyle["flexWrap"];
  alignItems?: ViewStyle["alignItems"];
  direction?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
}

const Box = ({
  style,
  center,
  children,
  direction,
  alignItems,
  justifyContent,
  flexWrap,
  gap = Style.adjust(10),
  ...props
}: IBoxProps) => {
  const computedStyles = useMemo((): StyleProp<ViewStyle> => {
    return [
      {
        gap,
        flexWrap,
        alignItems,
        justifyContent,
        flexDirection: direction,
        ...(center ? { justifyContent: "center", alignItems: "center" } : null),
      },
      style,
    ];
  }, [direction, gap, flexWrap, justifyContent, alignItems, center, style]);

  return (
    <View style={computedStyles} {...props}>
      {children}
    </View>
  );
};

export default memo(Box);
