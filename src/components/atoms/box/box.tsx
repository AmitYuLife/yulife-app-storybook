import { Style } from "@styles";
import { ReactNode, memo, useMemo } from "react";
import { StyleProp, ViewStyle, View, ViewProps } from "react-native";

interface IBoxProps extends ViewProps {
  center?: boolean;
  children: ReactNode;
  gap?: ViewStyle["gap"];
  flexWrap?: ViewStyle["flexWrap"];
  alignItems?: ViewStyle["alignItems"];
  flexDirection?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
}

const Box = ({
  style,
  center,
  children,
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  gap,
  ...props
}: IBoxProps) => {
  const computedStyles = useMemo((): StyleProp<ViewStyle> => {
    return [
      {
        flexWrap,
        alignItems,
        justifyContent,
        flexDirection,
        gap: gap ? Style.adjust(gap) : undefined,
        ...(center ? { justifyContent: "center", alignItems: "center" } : null),
      },
      style,
    ];
  }, [gap, flexWrap, alignItems, justifyContent, flexDirection, center, style]);

  return (
    <View style={computedStyles} {...props}>
      {children}
    </View>
  );
};

export default memo(Box);
