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
  rounded,
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
        !excludeAutoAdjustPropertyMap[mappedKey] && typeof value === "number" ? Style.adjust(value) : value;
      acc[mappedKey] = adjustedValue as ViewStyle[keyof ViewStyle];

      return acc;
    }, {} as Record<keyof ViewStyle, ViewStyle[keyof ViewStyle]>);

    const specialStyles: ViewStyle = {
      ...(center ? { justifyContent: "center", alignItems: "center" } : null),
      ...(size ? { width: Style.adjust(size), height: Style.adjust(size) } : null),
      ...(rounded ? { borderRadius: 1000 } : null),
      ...(borderTopRadius
        ? { borderTopLeftRadius: Style.adjust(borderTopRadius), borderTopRightRadius: Style.adjust(borderTopRadius) }
        : null),
      ...(borderBottomRadius
        ? {
            borderBottomLeftRadius: Style.adjust(borderBottomRadius),
            borderBottomRightRadius: Style.adjust(borderBottomRadius),
          }
        : null),
      ...(borderLeftRadius
        ? {
            borderTopLeftRadius: Style.adjust(borderLeftRadius),
            borderBottomLeftRadius: Style.adjust(borderLeftRadius),
          }
        : null),
      ...(borderRightRadius
        ? {
            borderTopRightRadius: Style.adjust(borderRightRadius),
            borderBottomRightRadius: Style.adjust(borderRightRadius),
          }
        : null),
    };

    return [specialStyles, mappedStyles as ViewStyle, style].filter(Boolean);
  }, [props, center, size, rounded, borderTopRadius, borderBottomRadius, borderLeftRadius, borderRightRadius, style]);

  return (
    <ViewComponent style={computedStyles} {...props} entering={entering} exiting={exiting}>
      {children}
    </ViewComponent>
  );
};

export default memo(Box);
