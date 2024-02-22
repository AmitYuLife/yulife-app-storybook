import { Style } from "@styles";
import { ReactNode, memo, useMemo } from "react";
import { StyleProp, ViewStyle, View, ViewProps } from "react-native";

interface IStackProps extends ViewProps {
  gap?: number;
  children: ReactNode;
  direction?: ViewStyle["flexDirection"];
}

const Stack = ({ children, gap = Style.adjust(10), direction, style, ...props }: IStackProps) => {
  const computedStyles = useMemo((): StyleProp<ViewStyle> => {
    return [{ flexDirection: direction }, { gap }, style];
  }, [direction, gap, style]);

  return (
    <View style={computedStyles} {...props}>
      {children}
    </View>
  );
};

export default memo(Stack);
