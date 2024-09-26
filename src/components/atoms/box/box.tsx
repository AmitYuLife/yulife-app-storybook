import { Style } from "@styles";
import { memo, useMemo } from "react";
import { ViewStyle, View } from "react-native";
import Animated from "react-native-reanimated";
import { IBoxProps, PROPERTY_MAP, excludeAutoAdjustPropertyMap } from "./box.types";

const Box = ({
  size,
  style,
  center,
  exiting,
  entering,
  children,
  forceAnimated,
  borderTopRadius,
  borderLeftRadius,
  borderRightRadius,
  borderBottomRadius,
  ...props
}: IBoxProps) => {
  const ViewComponent = !!entering || !!exiting || forceAnimated ? Animated.View : View;

  const computedStyles = useMemo((): ViewStyle[] => {
    const mappedStyles = Object.entries(props).reduce((acc, [key, value]) => {
      const mappedKey = PROPERTY_MAP[key as keyof typeof PROPERTY_MAP];
      const adjustedValue =
        excludeAutoAdjustPropertyMap[mappedKey] && typeof value === "number" ? Style.adjust(value) : value;
      acc[mappedKey] = adjustedValue as ViewStyle[keyof ViewStyle];

      return acc;
    }, {} as Record<keyof ViewStyle, ViewStyle[keyof ViewStyle]>);

    const specialStyles: ViewStyle = {
      ...(center ? { justifyContent: "center", alignItems: "center" } : null),
      ...(size ? { width: size, height: size } : null),
      ...(borderTopRadius ? { borderTopLeftRadius: borderTopRadius, borderTopRightRadius: borderTopRadius } : null),
      ...(borderBottomRadius
        ? { borderBottomLeftRadius: borderBottomRadius, borderBottomRightRadius: borderBottomRadius }
        : null),
      ...(borderLeftRadius
        ? { borderTopLeftRadius: borderLeftRadius, borderBottomLeftRadius: borderLeftRadius }
        : null),
      ...(borderRightRadius
        ? { borderTopRightRadius: borderRightRadius, borderBottomRightRadius: borderRightRadius }
        : null),
    };

    return [specialStyles, mappedStyles as ViewStyle, style].filter(Boolean);
  }, [props, center, size, borderTopRadius, borderBottomRadius, borderLeftRadius, borderRightRadius, style]);

  return (
    <ViewComponent style={computedStyles} {...props} entering={entering} exiting={exiting}>
      {children}
    </ViewComponent>
  );
};

export default memo(Box);
