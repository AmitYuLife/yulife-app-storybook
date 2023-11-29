import { Style } from "@styles";
import { ReactNode, memo, useCallback, useMemo } from "react";
import { StyleProp, ViewStyle, View, ViewProps } from "react-native";

export enum StackDirection {
  vertical = "vertical",
  horizontal = "horizontal",
}

interface IStackProps extends ViewProps {
  gap?: number;
  children: ReactNode;
  direction?: StackDirection;
}

/**
 * Lays out all child components with equal spacing between them.
 */
const Stack = ({
  children,
  gap = Style.adjust(10),
  direction = StackDirection.vertical,
  style,
  ...props
}: IStackProps) => {
  const getGap = useCallback(
    (index: number): StyleProp<ViewStyle> => {
      switch (direction) {
        case StackDirection.horizontal:
          return { marginLeft: index === 0 ? 0 : gap, justifyContent: "center" };
        default:
          return { marginTop: index === 0 ? 0 : gap, justifyContent: "center" };
      }
    },
    [gap, direction]
  );

  const directionStyles = useMemo((): ViewStyle => {
    switch (direction) {
      case StackDirection.horizontal:
        return { flexDirection: "row" };
      default:
        return { flexDirection: "column" };
    }
  }, [direction]);

  const computedStyles = useMemo((): StyleProp<ViewStyle> => {
    return [style, directionStyles];
  }, [style, directionStyles]);

  // We ensure that children is an array even if one element was passed into the Stack
  const childNodes = useMemo(() => (Array.isArray(children) ? children : [children]), [children]);

  return (
    <View style={computedStyles} {...props}>
      {childNodes
        .flat()
        .filter(Boolean)
        .map((child, index) => (
          <View key={index} style={getGap(index)}>
            {child}
          </View>
        ))}
    </View>
  );
};

export default memo(Stack);
